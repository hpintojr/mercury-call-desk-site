import type { Metadata } from "next";
import RegisterPage from "@/components/funnel/RegisterPage";
import { mercuryWebinar as config } from "@/funnels/mercury-webinar";

export const metadata: Metadata = {
  title: { absolute: config.seo.title },
  description: config.seo.description,
  openGraph: { title: config.seo.title, description: config.seo.description },
};

export default function Page() {
  return <RegisterPage config={config} />;
}
