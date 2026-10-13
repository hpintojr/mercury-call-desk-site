import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import CTABand from "@/components/CTABand";
import BookEmbed from "@/components/landing/BookEmbed";
import { links } from "@/config/site";
import { partnerMeta, partnerHero, whyPartner, partnerSteps, partnerBenefits, partnerPlans } from "@/content/partner";

export const metadata: Metadata = { title: partnerMeta.title, description: partnerMeta.description };

export default function PartnerPage() {
  return (
    <>
      <PageHero crumb="Become a Partner" title={partnerHero.title} body={partnerHero.body}>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="#book" size="lg">Become a Partner</Button>
          <Button href="/pricing" size="lg" variant="ghost">See plans and pricing</Button>
        </div>
      </PageHero>

      <section className="py-14 sm:py-20">
        <div className="container-x">
          <SectionHeading eyebrow={partnerHero.eyebrow} title="Why agencies partner with Mercury CRM" body="A white-label partnership for agencies and resellers who want a product their clients pay for every month." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {whyPartner.map((w) => <FeatureCard key={w.title} title={w.title} body={w.body} icon={w.icon} />)}
          </div>
        </div>
      </section>

      <section className="bg-mcd-surface py-14 sm:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="How it works" title="Three steps to grow with Mercury CRM" body="A simple program with no complex setup." />
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {partnerSteps.map((s, i) => (
              <li key={s.title} className="rounded-xl2 border border-mcd-line bg-white p-6 shadow-sm">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-mcd-navy text-sm font-extrabold text-white">{i + 1}</span>
                <h3 className="mt-4 text-lg font-bold text-mcd-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mcd-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-mcd-navy py-14 text-white sm:py-20">
        <div className="container-x">
          <SectionHeading dark eyebrow="The partner advantage" title="Build more. Earn more." body="Everything you need to sell, launch and support clients under your own name." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {partnerBenefits.map((b) => <FeatureCard key={b.title} title={b.title} body={b.body} icon={b.icon} dark />)}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Partner plans" title="Clear pricing, no surprises" body="Every plan includes the AI front desk, the full dialer and Mercury CRM, plus usage at published rates." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {partnerPlans.map((p) => (
              <article key={p.name} className={`relative flex flex-col rounded-xl2 border bg-white p-6 shadow-sm ${p.popular ? "border-mcd-sky ring-2 ring-mcd-sky/40" : "border-mcd-line"}`}>
                {p.popular && <span className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-mcd-blue to-mcd-cyan px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-mcd-navy">Most popular</span>}
                <h3 className="text-xl font-extrabold text-mcd-navy">{p.name}</h3>
                <p className="mt-1 text-sm text-mcd-muted">{p.blurb}</p>
                <p className="mt-4 text-3xl font-extrabold text-mcd-navy">{p.price}</p>
                <ul className="mt-5 space-y-2.5">
                  {p.points.map((pt) => <li key={pt} className="flex gap-2 text-sm text-mcd-ink"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-mcd-blue" />{pt}</li>)}
                </ul>
                <div className="mt-auto pt-6"><Button href="#book" full variant={p.popular ? "primary" : "outline"}>{p.cta}</Button></div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-mcd-muted"><Link href="/pricing" className="font-semibold text-mcd-blue underline">Compare every plan and usage rate</Link></p>
        </div>
      </section>

      <section id="book" className="scroll-mt-24 bg-mcd-surface py-14 sm:py-20">
        <div className="container-x grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Partner call</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-mcd-navy sm:text-4xl">Book your partner call</h2>
            <p className="mt-4 text-mcd-muted">In 30 minutes we&apos;ll walk through the partner program, show the white-label client experience and help you price it for your clients.</p>
            <ul className="mt-6 space-y-2 text-sm text-mcd-ink">
              {["No setup fee, no long-term contract", "Unlimited white-label sub-accounts", "Bring your HighLevel clients with you"].map((t) => (
                <li key={t} className="flex items-start gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-mcd-blue" />{t}</li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7"><BookEmbed slug="partner" src={links.partnerCall} /></div>
        </div>
      </section>

      <CTABand eyebrow="Every call answered" title="Give your clients an AI front desk with your name on it" body="Join the agencies adding Mercury CRM to their services and turning it into monthly revenue." cta="Become a Partner" href="#book" />
    </>
  );
}
