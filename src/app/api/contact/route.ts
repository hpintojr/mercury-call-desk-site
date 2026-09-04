import { NextResponse } from "next/server";

/**
 * Contact form handler → Sulus CRM (crm.sulus.ai, a LeadConnector/HighLevel-based platform).
 *
 * Two delivery modes, tried in order:
 *  1. CRM API (preferred)  — CRM_API_TOKEN + CRM_LOCATION_ID set → POST /contacts/upsert
 *     (creates or updates the contact in the Sulus CRM sub-account, tags it "website-contact").
 *     Token: Sulus CRM → Settings → Private Integrations (or Business Profile → API key).
 *  2. Inbound webhook       — CRM_WEBHOOK_URL set → POST JSON to a workflow "Inbound Webhook" trigger.
 * If neither is configured the submission is logged and the UI still shows success (dev only).
 */
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

  const token = process.env.CRM_API_TOKEN;
  const locationId = process.env.CRM_LOCATION_ID;
  const webhook = process.env.CRM_WEBHOOK_URL;

  try {
    if (token && locationId) {
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
    } else if (webhook) {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...p, source, submittedAt: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error(`Webhook ${res.status}`);
    } else {
      console.warn("[contact] No CRM configured (CRM_API_TOKEN+CRM_LOCATION_ID or CRM_WEBHOOK_URL). Dropped:", p.email);
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] delivery failed:", err);
    return NextResponse.json({ ok: false, error: "Delivery failed" }, { status: 502 });
  }
}
