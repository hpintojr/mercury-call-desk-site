"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { links } from "@/config/site";
import type { TierId } from "@/content/pricing";

/**
 * Checkout redirect.
 *
 * The CRM "Account Setup" form collects package + billing (and a few other
 * basics) BEFORE payment, then redirects here. GHL's redirect-URL merge tags
 * reliably resolve {{contact.email}} but NOT custom Select fields — so this
 * page trusts the URL for email only, and falls back to localStorage
 * (stashed by the pricing page's buy buttons, same-origin, shared across
 * tabs) for package/billing. Either way, once resolved we forward straight
 * into the matching Stripe Payment Link with the email pre-filled.
 */

const VALID_TIERS: TierId[] = ["starter", "growth", "pro"];

function normalizeTier(raw: string | null): TierId | null {
  if (!raw) return null;
  const v = raw.trim().toLowerCase();
  return (VALID_TIERS as string[]).includes(v) ? (v as TierId) : null;
}

function normalizeBilling(raw: string | null): "monthly" | "annual" {
  if (!raw) return "monthly";
  return raw.trim().toLowerCase().includes("annual") ? "annual" : "monthly";
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-[60vh] flex-col items-center justify-center gap-3 px-6 text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-mcd-blue border-t-transparent" />
        </main>
      }
    >
      <CheckoutRedirect />
    </Suspense>
  );
}

function CheckoutRedirect() {
  const searchParams = useSearchParams();
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let tier = normalizeTier(searchParams.get("package"));
    let billing: "monthly" | "annual" | null = searchParams.get("billing")
      ? normalizeBilling(searchParams.get("billing"))
      : null;
    const email = searchParams.get("email");

    if (!tier || !billing) {
      try {
        const raw = localStorage.getItem("mcd_pending_purchase");
        if (raw) {
          const stashed = JSON.parse(raw) as { tier?: string; billing?: string };
          tier = tier ?? normalizeTier(stashed.tier ?? null);
          billing = billing ?? (stashed.billing === "annual" ? "annual" : "monthly");
        }
      } catch {}
    }

    if (!tier) {
      setFailed(true);
      return;
    }

    const base = links.checkout[tier][billing ?? "monthly"];
    const url = new URL(base);
    if (email) url.searchParams.set("prefilled_email", email);

    // Selection consumed — clear it so a later visit doesn't reuse stale data.
    try {
      localStorage.removeItem("mcd_pending_purchase");
    } catch {}

    window.location.replace(url.toString());
  }, [searchParams]);

  if (failed) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
        <h1 className="text-2xl font-extrabold text-mcd-navy">We couldn&apos;t find your plan</h1>
        <p className="text-mcd-muted">Head back to pricing and pick a package to continue.</p>
        <a href="/pricing" className="rounded-full bg-mcd-navy px-6 py-3 text-sm font-semibold text-white">
          Back to Pricing
        </a>
      </main>
    );
  }

  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-3 px-6 text-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-mcd-blue border-t-transparent" />
      <p className="text-mcd-muted">Taking you to secure checkout…</p>
    </main>
  );
}
