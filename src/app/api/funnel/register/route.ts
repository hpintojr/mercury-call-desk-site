import { NextResponse } from "next/server";
import { deliverLead, sanitizeAttribution } from "@/lib/crm";
import { getFunnel } from "@/funnels";

/**
 * Webinar/VSL funnel registration → CRM via src/lib/crm.ts.
 * Uses the funnel's own webhook env vars (config.crm.webhookUrlEnv / webhookSecretEnv) when set,
 * otherwise the site's default CRM_WEBHOOK_URL (then the CRM API fallback).
 */
type Payload = {
  funnel: string; firstName: string; lastName?: string; email: string; phone: string; company?: string;
  consent: boolean; website?: string; placement?: string; attribution?: Record<string, string>;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Partial<Payload>;
  try {
    body = (await req.json()) as Partial<Payload>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
  if (body.website) return NextResponse.json({ ok: true }); // honeypot

  const funnel = getFunnel(String(body.funnel ?? ""));
  if (!funnel) return NextResponse.json({ ok: false, error: "Unknown funnel" }, { status: 400 });

  const str = (v: unknown, max = 200) => (typeof v === "string" ? v.trim().slice(0, max) : "");
  const firstName = str(body.firstName);
  const email = str(body.email);
  const phone = str(body.phone, 40);
  if (!firstName) return NextResponse.json({ ok: false, error: "Please enter your first name" }, { status: 400 });
  if (!EMAIL.test(email)) return NextResponse.json({ ok: false, error: "Please enter a valid email" }, { status: 400 });
  if (phone.replace(/\D/g, "").length < 10) return NextResponse.json({ ok: false, error: "Please enter a valid phone number" }, { status: 400 });
  if (body.consent !== true) return NextResponse.json({ ok: false, error: "Please accept the consent box" }, { status: 400 });

  const result = await deliverLead(
    {
      firstName,
      lastName: str(body.lastName),
      company: str(body.company),
      phone,
      email,
      message: `Registered for ${funnel.event.title} (${funnel.event.startsAt})`,
      source: `mercurycalldesk.com${funnel.basePath}`,
      tags: [...funnel.crm.tags, "sms-consent"],
      customFields: {
        funnel_id: funnel.id,
        webinar_title: funnel.event.title,
        webinar_starts_at: funnel.event.startsAt,
        register_placement: str(body.placement, 40),
      },
      attribution: sanitizeAttribution(body.attribution),
    },
    "contact",
    { url: process.env[funnel.crm.webhookUrlEnv], secret: process.env[funnel.crm.webhookSecretEnv] },
  );

  if (!result.ok) return NextResponse.json({ ok: false, error: "We couldn't save your registration" }, { status: 502 });
  return NextResponse.json({ ok: true });
}
