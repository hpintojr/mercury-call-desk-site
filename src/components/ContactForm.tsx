"use client";

import { useState } from "react";
import Link from "next/link";
import { links, site } from "@/config/site";

type State = "idle" | "sending" | "sent" | "error";

const field = "mt-1 w-full rounded-lg border border-mcd-line bg-white px-4 py-3 text-base text-mcd-ink placeholder:text-mcd-muted/60 focus:border-mcd-blue focus:outline-none focus:ring-2 focus:ring-mcd-sky/40";

export default function ContactForm() {
  const [state, setState] = useState<State>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...data, consent: data.consent === "on" }),
      });
      if (!res.ok) throw new Error("bad");
      setState("sent");
      form.reset();
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="rounded-xl2 border border-mcd-cyan/50 bg-mcd-surface p-8 text-center">
        <h3 className="text-xl font-extrabold text-mcd-navy">Thanks — we got it.</h3>
        <p className="mt-2 text-sm text-mcd-muted">Our team will reach out shortly. Want to skip the wait? <a href={links.demo} className="font-semibold text-mcd-blue underline">Book a demo</a> or call {site.phone}.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2" noValidate={false}>
      {/* Honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <label className="block text-sm font-semibold text-mcd-navy">First Name<span className="text-mcd-blue">*</span>
        <input name="firstName" required autoComplete="given-name" className={field} />
      </label>
      <label className="block text-sm font-semibold text-mcd-navy">Last Name<span className="text-mcd-blue">*</span>
        <input name="lastName" required autoComplete="family-name" className={field} />
      </label>
      <label className="block text-sm font-semibold text-mcd-navy">Company<span className="text-mcd-blue">*</span>
        <input name="company" required autoComplete="organization" className={field} />
      </label>
      <label className="block text-sm font-semibold text-mcd-navy">Phone<span className="text-mcd-blue">*</span>
        <input name="phone" type="tel" required autoComplete="tel" inputMode="tel" className={field} />
      </label>
      <label className="block text-sm font-semibold text-mcd-navy sm:col-span-2">Email<span className="text-mcd-blue">*</span>
        <input name="email" type="email" required autoComplete="email" inputMode="email" className={field} />
      </label>
      <label className="block text-sm font-semibold text-mcd-navy sm:col-span-2">Message<span className="text-mcd-blue">*</span>
        <textarea name="message" required rows={5} className={field} />
      </label>

      <label className="flex items-start gap-3 text-xs leading-relaxed text-mcd-muted sm:col-span-2">
        <input type="checkbox" name="consent" required className="mt-0.5 h-5 w-5 shrink-0 rounded border-mcd-line accent-mcd-blue" />
        <span>
          <strong className="text-mcd-navy">Consent (Required).</strong> By entering your phone number, you consent to receive messages from {site.name} regarding your AI assistant details via SMS and agree to the <Link href={links.legal.terms} className="underline">Terms and Conditions</Link> & <Link href={links.legal.privacy} className="underline">Privacy Policy</Link>. Message and data rates may apply. Reply STOP to opt out.
        </span>
      </label>

      <div className="sm:col-span-2">
        <button type="submit" disabled={state === "sending"} className="tap w-full rounded-full bg-gradient-to-r from-mcd-blue via-mcd-sky to-mcd-cyan px-7 py-4 text-base font-semibold text-mcd-navy shadow-lg shadow-mcd-sky/30 transition hover:brightness-110 disabled:opacity-60 sm:w-auto">
          {state === "sending" ? "Sending…" : "Send Message"}
        </button>
        {state === "error" && <p role="alert" className="mt-3 text-sm text-red-600">Something went wrong. Please try again or call {site.phone}.</p>}
      </div>
    </form>
  );
}
