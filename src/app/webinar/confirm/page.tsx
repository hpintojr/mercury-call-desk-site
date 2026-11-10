import type { Metadata } from "next";
import ConfirmPage from "@/components/funnel/ConfirmPage";
import { mercuryWebinar as config } from "@/funnels/mercury-webinar";

export const metadata: Metadata = {
  title: { absolute: `You're registered | ${config.brand.name}` },
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ConfirmPage config={config} />;
}
