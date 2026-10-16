"use client";

import { useState } from "react";
import { calc, ghl } from "@/content/agencies";
import { tiers } from "@/content/pricing";

const usd = (n: number) => `${n < 0 ? "-" : ""}$${Math.abs(Math.round(n)).toLocaleString("en-US")}`;
const pro = tiers.find((t) => t.id === "professional")!;

/**
 * Hero card on /agencies: what an agency keeps from client usage after the plan fee,
 * on GoHighLevel's two agency plans vs Mercury CRM Professional. Same usage on both sides,
 * so the only differences are the plan fee and whether markup is allowed.
 */
export default function UsageCalculator() {
  const [clients, setClients] = useState(calc.defaultClients);
  const [usage, setUsage] = useState(calc.defaultUsage);
  const [markup, setMarkup] = useState(calc.defaultMarkup);

  const earned = clients * usage * (markup / 100);
  const rows = [
    { name: ghl.unlimited.name, fee: ghl.unlimited.price, earn: 0, note: "Usage rebilled at cost" },
    { name: ghl.agencyPro.name, fee: ghl.agencyPro.price, earn: earned, note: "Markup allowed" },
    { name: `Mercury CRM ${pro.name}`, fee: pro.monthly, earn: earned, note: "Markup allowed", mcd: true },
  ];

  return (
    <div className="rounded-xl2 border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
      <p className="text-sm font-bold text-white">What you keep from client usage each month</p>

      <label htmlFor="clients" className="mt-4 flex items-baseline justify-between text-sm font-semibold text-white/90">
        <span>Client accounts</span>
        <span className="text-xl font-extrabold tabular-nums text-mcd-cyan">{clients}</span>
      </label>
      <input id="clients" type="range" min={1} max={calc.maxClients} value={clients} onChange={(e) => setClients(Number(e.target.value))} className="mt-2 w-full accent-mcd-cyan" />

      <label htmlFor="usage" className="mt-4 flex items-baseline justify-between text-sm font-semibold text-white/90">
        <span>Usage per client, at your cost</span>
        <span className="text-xl font-extrabold tabular-nums text-mcd-cyan">{usd(usage)}/mo</span>
      </label>
      <input id="usage" type="range" min={10} max={calc.maxUsage} step={5} value={usage} onChange={(e) => setUsage(Number(e.target.value))} className="mt-2 w-full accent-mcd-cyan" />
      <p className="mt-1 text-xs text-white/60">
        About {Math.round(usage / calc.exampleTextCost).toLocaleString("en-US")} texts a month at an example ${calc.exampleTextCost.toFixed(2)} per text
      </p>

      <div className="mt-4 flex items-center justify-between gap-3 text-sm font-semibold text-white/90">
        <span>Your markup</span>
        <div className="flex gap-2 text-xs" role="radiogroup" aria-label="Markup on client usage">
          {calc.markups.map((m) => (
            <button
              key={m}
              type="button"
              role="radio"
              aria-checked={m === markup}
              onClick={() => setMarkup(m)}
              className={`rounded-full border px-3 py-1.5 font-semibold transition ${m === markup ? "border-mcd-cyan bg-mcd-cyan/15 text-white" : "border-white/20 text-white/60 hover:text-white"}`}
            >
              {m}%
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 space-y-2">
        {rows.map((r) => {
          const net = r.earn - r.fee;
          return (
            <div key={r.name} className={`rounded-lg p-3 ${r.mcd ? "bg-white text-mcd-navy" : "bg-white/5 text-white"}`}>
              <div className="flex items-baseline justify-between gap-3">
                <p className="text-sm font-bold">{r.name}</p>
                <p className={`text-lg font-extrabold tabular-nums ${net >= 0 ? (r.mcd ? "text-green-700" : "text-green-400") : r.mcd ? "text-mcd-navy" : "text-white"}`}>{usd(net)}</p>
              </div>
              <p className={`mt-0.5 flex justify-between gap-3 text-xs ${r.mcd ? "text-mcd-muted" : "text-white/60"}`}>
                <span>{r.note}: {usd(r.earn)} earned</span>
                <span className="tabular-nums">{usd(r.fee)} plan</span>
              </p>
            </div>
          );
        })}
      </div>

      <p className="mt-4 text-center text-base font-extrabold text-white">
        {usd(ghl.agencyPro.price - pro.monthly)} a month more than Agency Pro, from the same markup
      </p>
      <p className="mt-2 text-xs text-white/50">{calc.note}</p>
    </div>
  );
}
