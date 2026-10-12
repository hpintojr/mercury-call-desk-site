"use client";

import { useState } from "react";
import Button from "./Button";
import Icon from "./Icon";
import { tiers } from "@/content/pricing";
import { links } from "@/config/site";

const money = (n: number) => n.toLocaleString("en-US");

export default function PricingCards({ compact = false }: { compact?: boolean }) {
  const [annual, setAnnual] = useState(false);

  return (
    <div>
      {/* Toggle: monthly-first, annual = 2 months free */}
      <div className="flex justify-center">
        <div role="group" aria-label="Billing period" className="inline-flex rounded-full border border-mcd-line bg-white p-1 shadow-sm">
          {(["Monthly", "Annually"] as const).map((label, idx) => {
            const on = annual === (idx === 1);
            return (
              <button key={label} type="button" onClick={() => setAnnual(idx === 1)} aria-pressed={on} className={`tap rounded-full px-5 text-sm font-semibold transition ${on ? "bg-mcd-navy text-white" : "text-mcd-muted hover:text-mcd-navy"}`}>
                {label}
                {idx === 1 && <span className={`ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold ${on ? "bg-mcd-cyan text-mcd-navy" : "bg-mcd-surface text-mcd-blue"}`}>2 months free</span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* Cards: stack on mobile → 2-col tablet → 4-col desktop */}
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {tiers.map((t) => {
          const perMonth = annual ? Math.round(t.annualTotal / 12) : t.monthly;
          const badge = t.popular ? "Most Popular" : t.badge;
          return (
            <article key={t.id} className={`relative flex flex-col rounded-xl2 border bg-white p-6 shadow-sm ${t.popular ? "border-mcd-sky ring-2 ring-mcd-sky/40 md:-mt-2" : "border-mcd-line"}`}>
              {badge && <span className={`absolute -top-3 left-6 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${t.popular ? "bg-gradient-to-r from-mcd-blue to-mcd-cyan text-mcd-navy" : "bg-mcd-navy text-white"}`}>{badge}</span>}
              <h3 className="text-xl font-extrabold text-mcd-navy">{t.name}</h3>
              <p className="mt-1 text-sm text-mcd-muted">{t.blurb}</p>
              <p className="mt-5 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold tracking-tight text-mcd-navy">${money(perMonth)}</span>
                <span className="text-sm text-mcd-muted">/month</span>
              </p>
              <p className="mt-1 min-h-5 text-xs text-mcd-muted">
                {annual ? `Billed annually · $${money(t.annualTotal)}/yr` : "Billed monthly · cancel anytime"}
              </p>
              <p className="mt-1 text-xs font-semibold text-mcd-blue">+ usage at published rates</p>

              <ul className="mt-6 space-y-3">
                {(compact ? t.features.slice(0, 6) : t.features).map((f) => (
                  <li key={f.title} className="flex gap-3 text-sm text-mcd-ink">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-mcd-blue" />
                    <span>
                      <span className="font-semibold">{f.title}</span>
                      {!compact && <span className="block text-xs text-mcd-muted">{f.detail}</span>}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <Button href={links.demo} full variant={t.popular ? "primary" : "outline"}>{compact && t.ctaShort ? t.ctaShort : t.cta}</Button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
