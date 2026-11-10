import Image from "next/image";
import type { FunnelConfig } from "@/funnels/types";
import RegisterButton from "./RegisterButton";

/** Minimal sticky top bar: logo left, optional CTA right. */
export default function FunnelHeader({ config, cta }: { config: FunnelConfig; cta?: string }) {
  const b = config.brand;
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[var(--f-bg)]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6">
        <Image src={b.logoOnDark} alt={b.name} width={b.logoWidth} height={b.logoHeight} priority unoptimized className="h-14 w-auto sm:h-[72px]" />
        {cta ? <RegisterButton size="sm" placement="header">{cta}</RegisterButton> : null}
      </div>
    </header>
  );
}
