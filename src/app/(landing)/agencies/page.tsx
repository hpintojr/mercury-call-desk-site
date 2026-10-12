import type { Metadata } from "next";
import AgenciesPage from "@/components/landing/AgenciesPage";
import { agenciesMeta, agenciesSlug } from "@/content/agencies";
import { site } from "@/config/site";

/** Ad landing page for agencies on GoHighLevel. Linked only from the site footer. */
export const metadata: Metadata = {
  title: agenciesMeta.title,
  description: agenciesMeta.description,
  alternates: { canonical: `${site.url}/${agenciesSlug}` },
  openGraph: { title: agenciesMeta.title, description: agenciesMeta.description, url: `${site.url}/${agenciesSlug}`, type: "website", siteName: site.name },
};

export default function Page() {
  return <AgenciesPage />;
}
