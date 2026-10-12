"use client";

import { useState } from "react";
import { calc } from "@/content/agencies";

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

/** Hero card on /agencies: the agency's GoHighLevel software bill vs Mercury CRM Agencies, by client count. */
export default function BillCalculator() {
  const [clients, setClients] = useState(calc.defaultClients);
  const [aiId, setAiId] = useState(calc.ghlAi[0].id);
  const ai = calc.ghlAi.find((a) => a.id === aiId) ?? calc.ghlAi[0];

  const ghl = [
    { item: calc.ghlPlan.item, price: calc.ghlPlan.price },
    { item: `${ai.label} × ${clients} client${clients === 1 ? "" : "s"}`, price: ai.price * clients },
    { item: calc.ghlDialer.item, price: calc.ghlDialer.price, from: true },
  ];
  const ghlTotal = ghl.reduce((s, r) => s + r.price, 0);
  const mcdTotal = calc.mcdPlan.price;
  const saved = ghlTotal - mcdTotal;

  return (
    <div className="rounded-xl2 border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
      <label htmlFor="clients" className="flex items-baseline justify-between text-sm font-semibold text-white/90">
        <span>Clients using an AI receptionist</span>
        <span className="text-2xl font-extrabold tabular-nums text-mcd-cyan">{clients}</span>
      </label>
      <input
        id="clients"
        type="range"
        min={1}
        max={calc.maxClients}
        value={clients}
        onChange={(e) => setClients(Number(e.target.value))}
        className="mt-3 w-full accent-mcd-cyan"
      />
      <div className="mt-3 flex gap-2 text-xs" role="radiogroup" aria-label="GoHighLevel AI Employee plan">
        {calc.ghlAi.map((a) => (
          <button
            key={a.id}
            type="button"
            role="radio"
            aria-checked={a.id === aiId}
            onClick={() => setAiId(a.id)}
            className={`rounded-full border px-3 py-1.5 font-semibold transition ${a.id === aiId ? "border-mcd-cyan bg-mcd-cyan/15 text-white" : "border-white/20 text-white/60 hover:text-white"}`}
          >
            {a.label} {usd(a.price)}
          </button>
        ))}
      </div>

      <div className="mt-4 rounded-lg bg-white/5 p-4">
        <p className="text-sm font-bold text-white/90">GoHighLevel</p>
        <ul className="mt-2 space-y-1.5 text-sm text-white/70">
          {ghl.map((r) => (
            <li key={r.item} className="flex justify-between gap-4"><span>{r.item}</span><span className="tabular-nums">{r.from ? "from " : ""}{usd(r.price)}</span></li>
          ))}
        </ul>
        <p className="mt-3 flex justify-between border-t border-white/10 pt-3 font-bold"><span>Per month</span><span className="tabular-nums">{usd(ghlTotal)}+</span></p>
      </div>
      <div className="mt-3 rounded-lg bg-white p-4 text-mcd-navy">
        <p className="text-sm font-bold">Mercury CRM</p>
        <ul className="mt-2 space-y-1.5 text-sm text-mcd-muted">
          <li className="flex justify-between gap-4"><span>{calc.mcdPlan.item}</span><span className="tabular-nums">{usd(mcdTotal)}</span></li>
          <li className="flex justify-between gap-4"><span>AI front desk, every client</span><span>Included</span></li>
          <li className="flex justify-between gap-4"><span>10-line parallel dialer</span><span>Included</span></li>
        </ul>
        <p className="mt-3 flex justify-between border-t border-mcd-line pt-3 font-extrabold"><span>Per month</span><span className="tabular-nums">{usd(mcdTotal)}</span></p>
      </div>
      <p className="mt-4 text-center text-lg font-extrabold text-white">
        {usd(saved)}+ less a month <span className="font-semibold text-white/60">({usd(saved * 12)}+ a year)</span>
      </p>
      <p className="mt-2 text-xs text-white/50">{calc.note}</p>
    </div>
  );
}
