"use client";

import { useState } from "react";
import Icon from "./Icon";

const money = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export default function RoiCalculator() {
  const [callsPerWeek, setCallsPerWeek] = useState(12);
  const [jobValue, setJobValue] = useState(350);
  const [closeRate, setCloseRate] = useState(30);

  const monthly = callsPerWeek * 4.33 * (closeRate / 100) * jobValue;
  const annual = monthly * 12;

  const field =
    "w-full rounded-xl2 border border-mcd-line bg-white px-4 py-3 text-lg font-bold text-mcd-navy shadow-sm focus:border-mcd-sky focus:outline-none";

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
      <div className="space-y-5">
        <div>
          <label htmlFor="roi-calls" className="mb-2 block text-sm font-semibold text-mcd-navy">
            Missed calls per week
          </label>
          <input id="roi-calls" type="number" min={0} max={500} value={callsPerWeek}
            onChange={(e) => setCallsPerWeek(Math.max(0, Number(e.target.value) || 0))} className={field} />
        </div>
        <div>
          <label htmlFor="roi-value" className="mb-2 block text-sm font-semibold text-mcd-navy">
            Average job value ($)
          </label>
          <input id="roi-value" type="number" min={0} max={100000} step={10} value={jobValue}
            onChange={(e) => setJobValue(Math.max(0, Number(e.target.value) || 0))} className={field} />
        </div>
        <div>
          <label htmlFor="roi-rate" className="mb-2 block text-sm font-semibold text-mcd-navy">
            Close rate on answered calls (%)
          </label>
          <input id="roi-rate" type="number" min={0} max={100} value={closeRate}
            onChange={(e) => setCloseRate(Math.min(100, Math.max(0, Number(e.target.value) || 0)))} className={field} />
        </div>
        <p className="text-xs text-mcd-muted">Estimate only. Based on calls your AI front desk would have answered and booked.</p>
      </div>

      <div className="flex flex-col justify-center rounded-xl2 bg-mcd-navy p-8 text-white sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-wider text-mcd-cyan">Revenue you are leaving on the table</p>
        <p className="mt-3 text-5xl font-extrabold tracking-tight sm:text-6xl">{money(monthly)}</p>
        <p className="mt-1 text-white/70">per month</p>
        <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-6">
          <Icon name="chart" className="h-8 w-8 text-mcd-cyan" />
          <p className="text-lg"><span className="font-extrabold">{money(annual)}</span> <span className="text-white/70">per year</span></p>
        </div>
      </div>
    </div>
  );
}
