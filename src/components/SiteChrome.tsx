"use client";

import { usePathname } from "next/navigation";

/**
 * Hides the marketing header/footer on internal tool routes
 * (/dial-script) and on ad landing pages (which render their own minimal chrome).
 */
import { landingSlugs } from "@/content/landing";

const BARE_PREFIXES = ["/dial-script", ...landingSlugs.map((s) => "/" + s)];

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "";
  if (BARE_PREFIXES.some((p) => pathname === p || pathname.startsWith(p + "/"))) return null;
  return <>{children}</>;
}
