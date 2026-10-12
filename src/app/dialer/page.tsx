import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import Icon, { type IconName } from "@/components/Icon";
import FAQAccordion from "@/components/FAQAccordion";
import { links, site, aiLine } from "@/config/site";
import { dialerHero, dialerFeatures, complianceItems, dialerFaq } from "@/content/dialer";

export const metadata: Metadata = {
  title: "Dialer",
  description: "A 10:1 parallel dialer built into Mercury CRM: local numbers, call recording, transcripts, and SMS for your team and your AI assistants.",
};

const featureIcons: IconName[] = ["zap", "phone", "chat", "chat"];

export default function DialerPage() {
  return (
    <>
      <PageHero crumb={dialerHero.crumb} title={dialerHero.title} body={dialerHero.body} />

      {/* ── Features ── */}
      <section className="py-14 sm:py-20">
        <div className="container-x">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {dialerFeatures.map((f, i) => (
              <div key={f.title} className="rounded-xl2 border border-mcd-line bg-white p-6 shadow-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl2 bg-mcd-surface text-mcd-blue"><Icon name={featureIcons[i]} className="h-6 w-6" /></span>
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
          <SectionHeading eyebrow="Compliance" title="Who handles what on outbound calls" body="Outbound AI calling carries real legal exposure: $500 to $1,500 per TCPA violation. The platform keeps a built-in DNC list for you. Registry scrubbing, consent, and calling hours are your responsibility." />
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
      <section className="py-14 sm:py-20">
        <div className="container-x max-w-4xl">
          <SectionHeading eyebrow="Get answers" title="Dialer questions" body="Consent, teams, and opt-outs." />
          <div className="mt-10"><FAQAccordion items={dialerFaq} /></div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-mcd-surface py-14 sm:py-20">
        <div className="container-x text-center">
          <p className="eyebrow text-mcd-blue">Hear It In Action</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-extrabold text-mcd-navy sm:text-3xl lg:text-4xl">Call the AI line at {aiLine.display}</h2>
          <p className="mx-auto mt-4 max-w-xl text-mcd-muted">Experience an AI-handled call yourself, then book a walkthrough of the dialer.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={links.demoCall} size="lg"><Icon name="phone" className="h-4 w-4" /> Talk to {site.shortName} now</Button>
            <Button href={links.demo} size="lg" variant="outline">Schedule a Custom Demo</Button>
          </div>
        </div>
      </section>
    </>
  );
}
