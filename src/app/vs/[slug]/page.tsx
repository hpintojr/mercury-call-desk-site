import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ComparePage from "@/components/ComparePage";
import { comparisons, getComparison } from "@/content/comparisons";

export function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getComparison(slug);
  if (!comparison) return {};
  return {
    title: `Mercury vs ${comparison.competitor}`,
    description: `Mercury vs ${comparison.competitor}: compare AI voice agents, dialer, dispatch, pricing, and agency features side by side.`,
  };
}

export default async function VsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const comparison = getComparison(slug);
  if (!comparison) notFound();
  return <ComparePage comparison={comparison} />;
}
