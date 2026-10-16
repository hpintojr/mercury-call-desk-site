import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import CTABand from "@/components/CTABand";
import Icon, { type IconName } from "@/components/Icon";
import FAQAccordion from "@/components/FAQAccordion";
import { links, site } from "@/config/site";
import { capabilities, outcomes, platform } from "@/content/features";
import { dialerHero, dialerFeatures, complianceItems, dialerFaq } from "@/content/dialer";

export const metadata: Metadata = {
  title: "Features",
  description: "Finally, 24/7 professional phone coverage that works as hard as you do. Advanced AI phone assistants that handle every call professionally - without the cost of hiring additional staff.",
  alternates: { canonical: "https://mercurycalldesk.com/features" },
};

const capIcons: IconName[] = ["phone", "zap", "plug", "chart", "globe", "shield"];
const dialerIcons: IconName[] = ["zap", "phone", "chat", "chat"];
const platIcons: IconName[] = ["phone", "zap", "plug", "chart", "users", "globe", "shield", "arrow", "mic", "star", "chat", "bolt", "clock", "quote", "mail"];

export default function FeaturesPage() {
  return (
    <>
      <PageHero crumb="Features" title="Finally, 24/7 professional phone coverage that works as hard as you do" body="Advanced AI phone assistants that handle every call professionally - without the cost of hiring additional staff." />

      <section className="py-14 sm:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Get Started Fast" title="Professional phone coverage with intelligent automation" body="Enterprise-grade phone solutions designed for busy business owners and teams. Handle every call professionally while you focus on running your business." />
        </div>
      </section>

      <section className="bg-mcd-navy py-14 text-white sm:py-20">
        <div className="container-x">
          <SectionHeading dark align="left" eyebrow="Advanced Capabilities" title="Enterprise-grade features that work behind the scenes" body="Professional phone coverage powered by intelligent automation that scales with your business needs." />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => (
              <li key={c.title} className="flex gap-4 rounded-xl2 border border-white/10 bg-white/5 p-5">
                <Icon name={capIcons[i]} className="mt-0.5 h-6 w-6 shrink-0 text-mcd-cyan" />
                <div><h3 className="font-bold">{c.title}</h3><p className="mt-1 text-sm text-white/70">{c.body}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container-x">
          <SectionHeading align="left" eyebrow="Complete Solution" title="Discover everything your business needs for professional phone coverage" body="From basic call handling to advanced business automation, all the tools you need to never miss an opportunity." />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((c) => (
              <li key={c.title} className="flex gap-4 rounded-xl2 border border-mcd-line bg-white p-5 shadow-sm">
                <Icon name="check" className="mt-0.5 h-6 w-6 shrink-0 text-mcd-blue" />
                <div><h3 className="font-bold text-mcd-navy">{c.title}</h3><p className="mt-1 text-sm text-mcd-muted">{c.body}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Dialer (was /dialer) ── */}
      <section id="dialer" className="scroll-mt-24 py-14 sm:py-20">
        <div className="container-x">
          <SectionHeading eyebrow={dialerHero.crumb} title={dialerHero.title} body={dialerHero.body} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {dialerFeatures.map((f, i) => (
              <div key={f.title} className="rounded-xl2 border border-mcd-line bg-white p-6 shadow-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl2 bg-mcd-surface text-mcd-blue"><Icon name={dialerIcons[i]} className="h-6 w-6" /></span>
                <h3 className="mt-4 text-lg font-bold text-mcd-navy">{f.title}</h3>
                <p className="mt-2 text-sm text-mcd-muted">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Compliance ── */}
      <section id="compliance" className="scroll-mt-24 bg-mcd-navy py-14 text-white sm:py-20">
        <div className="container-x">
          <SectionHeading dark eyebrow="Compliance tools" title="Built for regulated outreach" body="Outbound AI calling carries real legal exposure: $500 to $1,500 per TCPA violation. Mercury CRM checks consent and enforces calling hours before it dials, and suppresses opt-outs automatically. Scrubbing your lists against the National DNC Registry stays your responsibility." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {complianceItems.map((c) => (
              <div key={c.title} className="rounded-xl2 border border-white/10 bg-white/5 p-6">
                <p className="flex items-center gap-2 font-bold"><Icon name="check" className="h-5 w-5 shrink-0 text-mcd-cyan" />{c.title}</p>
                <p className="mt-3 text-sm text-white/70">{c.body}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-xs text-white/50">This page describes product capabilities, not legal advice. Consult counsel for your specific campaigns and jurisdictions.</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-mcd-surface py-14 sm:py-20">
        <div className="container-x max-w-4xl">
          <SectionHeading eyebrow="Get answers" title="Dialer questions" body="Consent, teams, and opt-outs." />
          <div className="mt-10"><FAQAccordion items={dialerFaq} /></div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Complete Platform" title={<>Discover everything you can do with {site.name}</>} body="Explore our comprehensive AI phone platform designed to automate operations, capture every opportunity, and scale your business effortlessly." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {platform.map((p, i) => <FeatureCard key={p.title} title={p.title} body={p.body} icon={platIcons[i % platIcons.length]} />)}
          </div>
        </div>
      </section>

      <CTABand eyebrow="Get Started Today" title="Transform your phone handling today and watch your business grow" body={`Join hundreds of businesses using ${site.name} to capture every opportunity, automate workflows, and deliver exceptional customer experiences around the clock.`} cta="Schedule Demo" href={links.demo} />
    </>
  );
}
