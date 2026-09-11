"use client";

import { useState } from "react";
import Link from "next/link";
import { aiLine, links, site } from "@/config/site";
import type { Industry } from "@/content/landing";
import { getAttribution, track } from "@/lib/track";

type State = "idle" | "sending" | "sent" | "error";

const field = "mt-1 w-full rounded-lg border border-mcd-line bg-white px-4 py-3 text-base text-mcd-ink placeholder:text-mcd-muted/60 focus:border-mcd-blue focus:outline-none focus:ring-2 focus:ring-mcd-sky/40";

const INDUSTRIES: { value: Industry; label: string }[] = [
  { value: "home-services", label: "HVAC, plumbing, electrical or other home services" },
  { value: "legal", label: "Law firm" },
  { value: "dental-medical", label: "Dental or medical practice" },
  { value: "other", label: "Another kind of business" },
];

/**
 * "Have the AI call me in 60 seconds." Posts to /api/callback; the CRM workflow places the call.
 * Consent text is written for TCPA prior-express-written-consent (AI / automated voice + SMS).
 */
export default function CallbackForm({ slug, industry }: { slug: string; industry: Industry }) {
  const [state, setState] = useState<State>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setState("sending");
    try {
      const res = await fetch("/api/callback", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...data, slug, consent: data.consent === "on", attribution: getAttribution() }),
      });
      if (!res.ok) throw new Error("bad");
      track("callback_request", { slug, industry: String(data.industry ?? industry) });
      setState("sent");
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="rounded-xl2 border border-mcd-cyan/50 bg-mcd-surface p-8 text-center" role="status" aria-live="polite">
        <p className="eyebrow">Pick up — it&apos;s us</p>
        <h3 className="mt-2 text-xl font-extrabold text-mcd-navy">Our AI is calling you in about a minute from {aiLine.display}.</h3>
        <p className="mt-3 text-sm text-mcd-muted">
          You&apos;ll get a text first so you know it&apos;s coming. If it&apos;s outside 8 am–8 pm your time, the call comes first thing in the morning — or skip the wait and <a href={aiLine.href} data-placement="callback-sent" className="font-semibold text-mcd-blue underline">call it now</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2" aria-label="Request an AI callback">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <label className="block text-sm font-semibold text-mcd-navy">First name<span className="text-mcd-blue">*</span>
        <input id="cb-firstName" name="firstName" required autoComplete="given-name" className={field} />
      </label>
      <label className="block text-sm font-semibold text-mcd-navy">Mobile number<span className="text-mcd-blue">*</span>
        <input id="cb-phone" name="phone" type="tel" required autoComplete="tel" inputMode="tel" className={field} placeholder="(555) 555-0123" />
      </label>
      <label className="block text-sm font-semibold text-mcd-navy">Company
        <input id="cb-company" name="company" autoComplete="organization" className={field} />
      </label>
      <label className="block text-sm font-semibold text-mcd-navy">Email
        <input id="cb-email" name="email" type="email" autoComplete="email" inputMode="email" className={field} />
      </label>
      <label className="block text-sm font-semibold text-mcd-navy sm:col-span-2">What kind of business?
        <select id="cb-industry" name="industry" defaultValue={industry} className={field}>
          {INDUSTRIES.map((i) => <option key={i.value} value={i.value}>{i.label}</option>)}
        </select>
      </label>

      <label className="flex items-start gap-3 text-xs leading-relaxed text-mcd-muted sm:col-span-2">
        <input id="cb-consent" type="checkbox" name="consent" required className="mt-0.5 h-5 w-5 shrink-0 rounded border-mcd-line accent-mcd-blue" />
        <span>
          By submitting, I agree that {site.name} may contact me at the number provided using automated technology, AI-generated or prerecorded voice calls, and text messages about my inquiry and its services. Consent is not a condition of purchase. Message and data rates may apply. Reply STOP to opt out. <Link href={links.legal.terms} className="underline">Terms</Link> · <Link href={links.legal.privacy} className="underline">Privacy Policy</Link>
        </span>
      </label>

      <div className="sm:col-span-2">
        <button type="submit" disabled={state === "sending"} className="tap w-full rounded-full bg-gradient-to-r from-mcd-blue via-mcd-sky to-mcd-cyan px-7 py-4 text-base font-semibold text-mcd-navy shadow-lg shadow-mcd-sky/30 transition hover:brightness-110 disabled:opacity-60">
          {state === "sending" ? "One moment…" : "Have the AI call me now"}
        </button>
        {state === "error" && (
          <p role="alert" className="mt-3 text-sm text-red-600">That didn&apos;t go through. Call the AI directly at <a href={aiLine.href} className="font-semibold underline">{aiLine.display}</a> or try again.</p>
        )}
      </div>
    </form>
  );
}
