import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import PricingCards from "@/components/PricingCards";
import PricingCompare from "@/components/PricingCompare";
import FAQAccordion from "@/components/FAQAccordion";
import FeatureCard from "@/components/FeatureCard";
import CTABand from "@/components/CTABand";
import type { IconName } from "@/components/Icon";
import { links, site } from "@/config/site";
import { pricingFaq, whyChoose, tiers } from "@/content/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description: `Professional AI phone coverage starting at $${tiers[0].monthly.toLocaleString()}/month. No setup fees, no long-term contracts, no hidden costs.`,
};

const icons: IconName[] = ["star", "bolt", "zap", "clock", "chart", "users"];

export default function PricingPage() {
  return (
    <>
      <PageHero crumb="Pricing" title="Flexible pricing that grows with your business" body={`Professional AI phone coverage starting at $${tiers[0].monthly.toLocaleString()}/month. No setup fees, no long-term contracts, no hidden costs—just exceptional ${site.name} phone service that pays for itself.`} />

      <section className="py-14 sm:py-20">
        <div className="container-x"><PricingCards showEnterprise compact /></div>
      </section>

      <section className="bg-mcd-surface py-14 sm:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Compare Plans" title="Everything in every plan" body="Swipe the table on mobile to compare all four tiers." />
          <div className="mt-10"><PricingCompare /></div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Proven Results" title={<>Why businesses choose {site.name}</>} body="Professional AI phone coverage that delivers measurable results and grows with your business needs." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((w, i) => <FeatureCard key={w.title} title={w.title} body={w.body} icon={icons[i]} />)}
          </div>
        </div>
      </section>

      <section className="bg-mcd-surface py-14 sm:py-20">
        <div className="container-x max-w-4xl">
          <SectionHeading eyebrow="Get answers" title={<>Common questions about {site.name}</>} body="Find answers to frequently asked questions about our AI phone assistants, pricing plans, and getting started with professional phone coverage." />
          <div className="mt-10"><FAQAccordion items={pricingFaq} /></div>
        </div>
      </section>

      <CTABand eyebrow="Get Started Now" title="Get professional phone coverage that works as hard as you do" body={`Join thousands of businesses using ${site.name} to capture every opportunity, automate workflows, and deliver exceptional customer experiences around the clock.`} cta="Schedule Demo" href={links.demo} />
    </>
  );
}
