import type { CSSProperties } from "react";
import type { FunnelConfig } from "@/funnels/types";

/** Applies the funnel's brand colors as CSS variables so every funnel component picks them up. */
export default function FunnelShell({ config, children }: { config: FunnelConfig; children: React.ReactNode }) {
  const c = config.brand.colors;
  const style = {
    "--f-bg": c.bg,
    "--f-surface": c.surface,
    "--f-primary": c.primary,
    "--f-secondary": c.secondary,
    "--f-on-primary": c.onPrimary,
  } as CSSProperties;
  return (
    <div style={style} className="funnel min-h-screen bg-[var(--f-bg)] text-white">
      {children}
    </div>
  );
}
