import Link from "next/link";
import type { FunnelConfig } from "@/funnels/types";

export default function FunnelFooter({ config }: { config: FunnelConfig }) {
  const b = config.brand;
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-xs text-white/50 sm:flex-row sm:px-6">
        <p>&copy; {new Date().getFullYear()} {b.legalName}. All rights reserved.</p>
        <nav className="flex gap-5">
          <Link href={b.privacyUrl} className="hover:text-white">Privacy Policy</Link>
          <Link href={b.termsUrl} className="hover:text-white">Terms</Link>
        </nav>
      </div>
      {b.adDisclaimer ? (
        <p className="mx-auto max-w-4xl px-4 pb-8 text-center text-[11px] leading-relaxed text-white/35 sm:px-6">{b.adDisclaimer}</p>
      ) : null}
    </footer>
  );
}
