import { NextResponse } from "next/server";

/**
 * Contact form handler → Sulus CRM (crm.sulus.ai).
 *
 * Sulus CRM is its own platform (proprietary REST API with "sk_live_" keys) — NOT the
 * GoHighLevel/LeadConnector API. Two delivery modes, tried in order:
 *  1. Inbound Webhook (preferred) — CRM_WEBHOOK_URL set → POST JSON to a workflow's
 *     "Inbound Webhook" trigger endpoint. The workflow ("Website Contact Form → New Lead")
 *     creates/updates the contact and adds a "New Lead" opportunity to the sales pipeline.
 *     Optional CRM_WEBHOOK_SECRET signs the request with HMAC-SHA256 as
 *     `X-Webhook-Signature: sha256=<hex>` over the raw JSON body, if the workflow's
 *     trigger has a signing secret configured.
 *  2. CRM API (legacy/unused) — CRM_API_TOKEN + CRM_LOCATION_ID set → POST /contacts/upsert
 *     against the LeadConnector API. Sulus CRM does NOT expose this API, so this path is
 *     kept only in case a future integration target actually is GHL-compatible.
 * If neither is configured the submission is logged and the UI still shows success (dev only).
 */
import { createHmac } from "crypto";
const CRM_API_BASE = process.env.CRM_API_BASE ?? "https://services.leadconnectorhq.com";
const CRM_API_VERSION = process.env.CRM_API_VERSION ?? "2021-07-28";

type Payload = {
  firstName: string; lastName: string; company: string; phone: string; email: string; message: string; consent: boolean; website?: string;
};

export async function POST(req: Request) {
  let body: Partial<Payload>;
  try {
    body = (await req.json()) as Partial<Payload>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const required: (keyof Payload)[] = ["firstName", "lastName", "company", "phone", "email", "message"];
  for (const k of required) {
    if (!body[k] || typeof body[k] !== "string") {
      return NextResponse.json({ ok: false, error: `Missing ${k}` }, { status: 400 });
    }
  }
  if (body.consent !== true) {
    return NextResponse.json({ ok: false, error: "Consent required" }, { status: 400 });
  }
  if (body.website) return NextResponse.json({ ok: true }); // honeypot

  const p = body as Payload;
  const source = "mercurycalldesk.com/contact";

  const webhook = process.env.CRM_WEBHOOK_URL;
  const webhookSecret = process.env.CRM_WEBHOOK_SECRET;
  const token = process.env.CRM_API_TOKEN;
  const locationId = process.env.CRM_LOCATION_ID;

  try {
    if (webhook) {
      const body = JSON.stringify({ ...p, source, submittedAt: new Date().toISOString() });
      const headers: Record<string, string> = { "Content-Type": "application/json" };
      if (webhookSecret) {
        const hmac = createHmac("sha256", webhookSecret).update(body).digest("hex");
        headers["X-Webhook-Signature"] = `sha256=${hmac}`;
      }
      const res = await fetch(webhook, { method: "POST", headers, body });
      if (!res.ok) throw new Error(`Webhook ${res.status}: ${await res.text()}`);
    } else if (token && locationId) {
      const res = await fetch(`${CRM_API_BASE}/contacts/upsert`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, Version: CRM_API_VERSION, "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          locationId,
          firstName: p.firstName,
          lastName: p.lastName,
          email: p.email,
          phone: p.phone,
          companyName: p.company,
          source,
          tags: ["website-contact", "sms-consent"],
          customFields: [{ key: "website_message", field_value: p.message }],
        }),
      });
      if (!res.ok) throw new Error(`CRM API ${res.status}: ${await res.text()}`);
    } else {
      console.warn("[contact] No CRM configured (CRM_WEBHOOK_URL, or CRM_API_TOKEN+CRM_LOCATION_ID). Dropped:", p.email);
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] delivery failed:", err);
    return NextResponse.json({ ok: false, error: "Delivery failed" }, { status: 502 });
  }
}
