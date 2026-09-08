import type { Metadata } from "next";
import "./dial-script.css";

/**
 * Internal sales-team area. Never indexed, no marketing header/footer
 * (see SiteChrome in the root layout).
 */
export const metadata: Metadata = {
  title: "Dial Script",
  robots: { index: false, follow: false, nocache: true },
};

export default function DialScriptLayout({ children }: { children: React.ReactNode }) {
  return children;
}
