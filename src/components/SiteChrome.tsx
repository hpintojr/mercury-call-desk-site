"use client";

import { usePathname } from "next/navigation";

/**
 * Hides the marketing header/footer on internal tool routes
 * (currently just /dial-script) so they get a full-screen layout.
 */
const BARE_PREFIXES = ["/dial-script"];

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "";
  if (BARE_PREFIXES.some((p) => pathname === p || pathname.startsWith(p + "/"))) return null;
  return <>{children}</>;
}
