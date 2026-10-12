import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import PricingCards from "@/components/PricingCards";
import PricingCompare from "@/components/PricingCompare";
import FAQAccordion from "@/components/FAQAccordion";
import FeatureCard from "@/components/FeatureCard";
import Button from "@/components/Button";
import Icon, { type IconName } from "@/components/Icon";
import { links, site, aiLine } from "@/config/site";
import { pricingFaq, whyChoose, usageRates, usageExplainers } from "@/content/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Mercury CRM plans from $97/mo plus transparent usage rates. CRM, phone system, dialer, and AI assistants in one platform. Annual billing includes 2 months free.",
};

const icons: IconName[] = ["star", "bolt", "zap", "clock", "chart", "users"];

function UsageTable() {
  const rows = usageRates;
  return (
    <div className="overflow-x-auto rounded-xl2 border border-mcd-line bg-white shadow-sm">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead>
          <tr className="border-b border-mcd-line bg-mcd-surface">
            <th className="px-5 py-4 font-bold text-mcd-navy">Usage</th>
            <th className="px-5 py-4 font-bold text-mcd-navy">Starter</th>
            <th className="px-5 py-4 font-bold text-mcd-navy">Professional</th>
            <th className="px-5 py-4 font-bold text-mcd-navy">Agencies</th>
            <th className="px-5 py-4 font-bold text-mcd-navy">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.label} className="border-b border-mcd-line last:border-0">
              <td className="px-5 py-4"><span className="font-bold text-mcd-navy">{r.label}</span> <span className="text-mcd-muted">{r.unit}</span></td>
              <td className="px-5 py-4 font-semibold text-mcd-ink">{r.starter}</td>
              <td className="px-5 py-4 font-semibold text-mcd-ink">{r.professional}</td>
              <td className="px-5 py-4 font-semibold text-mcd-ink">{r.agencies}</td>
              <td className="px-5 py-4 font-semibold text-mcd-ink">{r.enterprise}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      <PageHero crumb="Pricing" title="One platform. One bill. Clear pricing." body="Mercury CRM plans from $97/mo plus transparent, published usage rates. Every tier includes Mercury CRM, the AI front desk, and the full dialer. Already have a CRM? Keep it and we connect to it. Annual billing includes 2 months free." />

      <section className="py-14 sm:py-20">
        <div className="container-x"><PricingCards /></div>
      </section>

      {/* ── Usage rates ── */}
      <section className="bg-mcd-surface py-14 sm:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Transparent Usage" title="Published rates. No surprise overages." body="Most AI phone vendors advertise a low monthly price, then bill shocking per-minute overages. We print our rates. Your plan's monthly credits apply first." />
          <div className="mt-10"><UsageTable /></div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {usageExplainers.map((u) => (
              <div key={u.title} className="rounded-xl2 border border-mcd-line bg-white p-6 shadow-sm">
                <h3 className="font-bold text-mcd-navy">{u.title}</h3>
                <p className="mt-2 text-sm text-mcd-muted">{u.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Compare Plans" title="Everything in every plan" body="Swipe the table on mobile to compare all four tiers." />
          <div className="mt-10"><PricingCompare /></div>
        </div>
      </section>

      <section className="bg-mcd-surface py-14 sm:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Why Mercury" title={<>Why businesses choose {site.name}</>} body="One platform replacing three vendors, with pricing you can actually read." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((w, i) => <FeatureCard key={w.title} title={w.title} body={w.body} icon={icons[i]} />)}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container-x max-w-4xl">
          <SectionHeading eyebrow="Get answers" title="Common pricing questions" body="How usage, billing, and onboarding work on the Mercury CRM platform." />
          <div className="mt-10"><FAQAccordion items={pricingFaq} /></div>
        </div>
      </section>

      {/* ── Dual CTA ── */}
      <section className="bg-mcd-navy py-14 text-white sm:py-20">
        <div className="container-x text-center">
          <p className="eyebrow text-mcd-cyan">Get Started</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-extrabold sm:text-3xl lg:text-4xl">Talk to the AI, or book a walkthrough.</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">Call {aiLine.display} right now and try to stump the assistant, or schedule a custom demo at a time that works for you.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={links.demoCall} size="lg" variant="white"><Icon name="phone" className="h-4 w-4" /> Talk to {site.shortName} now</Button>
            <Button href={links.demo} size="lg" variant="ghost">Schedule a Custom Demo</Button>
          </div>
        </div>
      </section>
    </>
  );
}
