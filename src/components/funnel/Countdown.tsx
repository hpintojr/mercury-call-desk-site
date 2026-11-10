"use client";

import { useEffect, useState } from "react";

function parts(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000));
  return { days: Math.floor(s / 86400), hours: Math.floor((s % 86400) / 3600), minutes: Math.floor((s % 3600) / 60), seconds: s % 60 };
}

/** Live countdown to the event start. Renders nothing until mounted to avoid hydration mismatch. */
export default function Countdown({ to, liveLabel = "We're live now" }: { to: string; liveLabel?: string }) {
  const target = new Date(to).getTime();
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  if (now === null) return <div className="h-[68px]" aria-hidden />;
  if (now >= target) return <p className="text-sm font-semibold text-[var(--f-primary)]">{liveLabel}</p>;
  const p = parts(target - now);
  const cells: [number, string][] = [[p.days, "Days"], [p.hours, "Hours"], [p.minutes, "Minutes"], [p.seconds, "Seconds"]];
  return (
    <div className="flex justify-center gap-2 sm:gap-3" role="timer" aria-label="Time until the training starts">
      {cells.map(([v, l]) => (
        <div key={l} className="min-w-[64px] rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center">
          <div className="text-2xl font-extrabold tabular-nums sm:text-3xl">{String(v).padStart(2, "0")}</div>
          <div className="text-[10px] uppercase tracking-widest text-white/50">{l}</div>
        </div>
      ))}
    </div>
  );
}
