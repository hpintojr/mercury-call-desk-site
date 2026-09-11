/**
 * Lead delivery → Sulus CRM (crm.sulus.ai).
 *
 * Sulus CRM is its own platform — NOT the GoHighLevel/LeadConnector API. Shared by
 * /api/contact and /api/callback. Delivery order:
 *  1. Inbound Webhook (preferred) — CRM_WEBHOOK_URL → POST JSON to a workflow's "Inbound Webhook"
 *     trigger. Optional CRM_WEBHOOK_SECRET signs the raw body with HMAC-SHA256 as
 *     `X-Webhook-Signature: sha256=<hex>`. The workflow creates/updates the contact and reads
 *     `tags` / `source` from the payload to route it (e.g. tag "ad-callback" → Voice AI call).
 *  2. CRM API (legacy fallback) — CRM_API_TOKEN + CRM_LOCATION_ID → POST /contacts/upsert
 *     against a LeadConnector-compatible API. Tried only if the webhook is unset or fails,
 *     so a single misconfiguration never silently drops a lead.
 * If nothing is configured the lead is logged and reported as delivered (dev only).
 */
import { createHmac } from "crypto";

const CRM_API_BASE = process.env.CRM_API_BASE ?? "https://services.leadconnectorhq.com";
const CRM_API_VERSION = process.env.CRM_API_VERSION ?? "2021-07-28";

export type Lead = {
  firstName: string;
  lastName?: string;
  company?: string;
  phone: string;
  email?: string;
  /** Free-text message or the qualifying answer from a landing-page form */
  message?: string;
  /** e.g. "mercurycalldesk.com/contact" or "mercurycalldesk.com/hvac" */
  source: string;
  tags: string[];
  /** Extra custom fields keyed by the CRM custom-field key */
  customFields?: Record<string, string>;
  /** Attribution captured on the client (utm_*, gclid, fbclid, referrer) */
  attribution?: Record<string, string>;
};

export type DeliveryResult = { ok: true; via: "api" | "webhook" | "none" } | { ok: false; error: string };

export function normalizePhone(raw: string): string {
  const digits = raw.replace(/[^\d+]/g, "");
  if (digits.startsWith("+")) return digits;
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  return digits;
}

export async function deliverLead(lead: Lead): Promise<DeliveryResult> {
  const token = process.env.CRM_API_TOKEN;
  const locationId = process.env.CRM_LOCATION_ID;
  const webhook = process.env.CRM_WEBHOOK_URL;
  const webhookSecret = process.env.CRM_WEBHOOK_SECRET;
  const phone = normalizePhone(lead.phone);
  const errors: string[] = [];

  if (webhook) {
    try {
      const raw = JSON.stringify({ ...lead, phone, submittedAt: new Date().toISOString() });
      const headers: Record<string, string> = { "Content-Type": "application/json" };
      if (webhookSecret) headers["X-Webhook-Signature"] = `sha256=${createHmac("sha256", webhookSecret).update(raw).digest("hex")}`;
      const res = await fetch(webhook, { method: "POST", headers, body: raw });
      if (res.ok) return { ok: true, via: "webhook" };
      errors.push(`Webhook ${res.status}: ${(await res.text()).slice(0, 300)}`);
    } catch (err) {
      errors.push(`Webhook threw: ${String(err)}`);
    }
  }

  if (token && locationId) {
    try {
      const customFields = Object.entries({
        ...(lead.message ? { website_message: lead.message } : {}),
        ...(lead.customFields ?? {}),
        ...(lead.attribution ?? {}),
      }).map(([key, field_value]) => ({ key, field_value }));

      const res = await fetch(`${CRM_API_BASE}/contacts/upsert`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, Version: CRM_API_VERSION, "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          locationId,
          firstName: lead.firstName,
          lastName: lead.lastName ?? "",
          email: lead.email ?? "",
          phone,
          companyName: lead.company ?? "",
          source: lead.source,
          tags: lead.tags,
          customFields,
        }),
      });
      if (res.ok) return { ok: true, via: "api" };
      errors.push(`CRM API ${res.status}: ${(await res.text()).slice(0, 300)}`);
    } catch (err) {
      errors.push(`CRM API threw: ${String(err)}`);
    }
  }

  if (!token && !locationId && !webhook) {
    console.warn("[crm] No CRM configured (CRM_API_TOKEN+CRM_LOCATION_ID or CRM_WEBHOOK_URL). Dropped:", lead.email ?? phone);
    return { ok: true, via: "none" };
  }

  console.error("[crm] delivery failed:", errors.join(" | "));
  return { ok: false, error: errors.join(" | ") };
}

const ALLOWED_ATTR = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "fbclid", "referrer", "landing_page"];
/** Keep only known attribution keys, as short strings. */
export function sanitizeAttribution(a?: Record<string, unknown>): Record<string, string> | undefined {
  if (!a || typeof a !== "object") return undefined;
  const out: Record<string, string> = {};
  for (const k of ALLOWED_ATTR) {
    const v = a[k];
    if (typeof v === "string" && v.length && v.length <= 300) out[k] = v;
  }
  return Object.keys(out).length ? out : undefined;
}
