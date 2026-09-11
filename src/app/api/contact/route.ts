import { NextResponse } from "next/server";
import { deliverLead, sanitizeAttribution } from "@/lib/crm";

/**
 * Contact form handler (/contact) → Sulus CRM via src/lib/crm.ts.
 * Env: CRM_API_TOKEN + CRM_LOCATION_ID (preferred) and/or CRM_WEBHOOK_URL (fallback).
 */
type Payload = {
  firstName: string; lastName: string; company: string; phone: string; email: string; message: string; consent: boolean; website?: string;
  attribution?: Record<string, string>;
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
  const result = await deliverLead({
    firstName: p.firstName,
    lastName: p.lastName,
    company: p.company,
    phone: p.phone,
    email: p.email,
    message: p.message,
    source: "mercurycalldesk.com/contact",
    tags: ["website-contact", "sms-consent"],
    attribution: sanitizeAttribution(p.attribution),
  });

  if (!result.ok) return NextResponse.json({ ok: false, error: "Delivery failed" }, { status: 502 });
  return NextResponse.json({ ok: true });
}
