import { NextResponse } from "next/server";
import { deliverLead, sanitizeAttribution } from "@/lib/crm";
import { landingSlugs } from "@/content/landing";

/**
 * "Get a 60-second callback" form on the ad landing pages.
 * Creates/updates the contact in the CRM with tags the callback workflow listens for:
 *   ad-callback        → trigger the Voice AI outbound call (+ pre-alert SMS)
 *   ai-call-consent    → the visitor accepted AI/automated-call + SMS consent (TCPA)
 *   lp:<slug>          → which landing page
 *   industry:<value>   → the qualifying answer
 * The CRM workflow (not this route) places the call, within the 8am–8pm local window.
 */
type Payload = {
  firstName: string; phone: string; email?: string; company?: string; industry?: string;
  consent: boolean; slug: string; website?: string; attribution?: Record<string, string>;
};

const INDUSTRIES = new Set(["home-services", "legal", "dental-medical", "other"]);

export async function POST(req: Request) {
  let body: Partial<Payload>;
  try {
    body = (await req.json()) as Partial<Payload>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }
  if (body.website) return NextResponse.json({ ok: true }); // honeypot
  if (!body.firstName || typeof body.firstName !== "string") return NextResponse.json({ ok: false, error: "Missing firstName" }, { status: 400 });
  if (!body.phone || typeof body.phone !== "string" || body.phone.replace(/\D/g, "").length < 10) return NextResponse.json({ ok: false, error: "Invalid phone" }, { status: 400 });
  if (body.consent !== true) return NextResponse.json({ ok: false, error: "Consent required" }, { status: 400 });

  const slug = typeof body.slug === "string" && (landingSlugs as readonly string[]).includes(body.slug) ? body.slug : "try";
  const industry = typeof body.industry === "string" && INDUSTRIES.has(body.industry) ? body.industry : "other";

  const result = await deliverLead({
    firstName: body.firstName.trim().slice(0, 80),
    company: typeof body.company === "string" ? body.company.trim().slice(0, 120) : undefined,
    phone: body.phone,
    email: typeof body.email === "string" ? body.email.trim().slice(0, 160) : undefined,
    message: `Requested a 60-second AI callback from /${slug} (industry: ${industry})`,
    source: `mercurycalldesk.com/${slug}`,
    tags: ["ad-callback", "ai-call-consent", "sms-consent", `lp:${slug}`, `industry:${industry}`],
    customFields: { lead_industry: industry },
    attribution: sanitizeAttribution(body.attribution),
  });

  if (!result.ok) return NextResponse.json({ ok: false, error: "Delivery failed" }, { status: 502 });
  return NextResponse.json({ ok: true });
}
