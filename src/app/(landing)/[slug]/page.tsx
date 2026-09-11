import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingPage from "@/components/landing/LandingPage";
import { getLanding, landingSlugs } from "@/content/landing";
import { site } from "@/config/site";

/**
 * Ad landing pages: /try, /hvac, /law, /dental, /crm-automation, /audit.
 * Add a page by adding a config to src/content/landing.ts — nothing else to touch.
 */
export const dynamicParams = false;
export function generateStaticParams() {
  return landingSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getLanding(slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `${site.url}/${page.slug}` },
    openGraph: { title: page.title, description: page.description, url: `${site.url}/${page.slug}`, type: "website", siteName: site.name },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getLanding(slug);
  if (!page) notFound();
  return <LandingPage page={page} />;
}
