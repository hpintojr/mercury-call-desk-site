import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import Icon, { type IconName } from "@/components/Icon";
import { links, site } from "@/config/site";
import { platformHero, platformSections, tierGating } from "@/content/platform";

export const metadata: Metadata = {
  title: "Platform",
  description: "Tour Mercury CRM: core CRM, AI front desk, phone system and dialer, automations, reporting, and migration. One platform, one bill.",
};

export default function PlatformPage() {
  return (
    <>
      <PageHero crumb={platformHero.crumb} title={platformHero.title} body={platformHero.body} />

      {/* ── Tour sections ── */}
      <section className="bg-mcd-navy py-14 text-white sm:py-20">
        <div className="container-x space-y-14 sm:space-y-20">
          {platformSections.map((s, i) => (
            <div key={s.title} className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div>
                <p className="eyebrow text-mcd-cyan">{s.eyebrow}</p>
                <h2 className="mt-3 text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">{s.title}</h2>
                <p className="mt-4 text-white/75 sm:text-lg">{s.body}</p>
                <ul className="mt-6 space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 font-semibold"><Icon name="check" className="h-5 w-5 shrink-0 text-mcd-cyan" />{p}</li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-center rounded-xl2 border border-white/10 bg-white/5 p-10 sm:p-16">
                <Icon name={s.icon as IconName} className="h-24 w-24 text-mcd-cyan sm:h-32 sm:w-32" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Tier gating ── */}
      <section className="py-14 sm:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Grows With You" title="Modules unlock as you grow" body="Start with the essentials. Higher tiers unlock financials, marketing, automation, advanced tools, migration, and white-label resale." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {tierGating.map((g) => (
              <div key={g.tier} className="rounded-xl2 border border-mcd-line bg-white p-6 shadow-sm">
                <h3 className="text-lg font-extrabold text-mcd-navy">{g.tier}</h3>
                <p className="mt-2 text-sm text-mcd-muted">{g.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button href="/pricing" size="lg">Compare all plans</Button>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-mcd-navy py-14 text-white sm:py-20">
        <div className="container-x text-center">
          <p className="eyebrow text-mcd-cyan">See It Live</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-extrabold sm:text-3xl lg:text-4xl">The fastest way to understand the platform is to call it.</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">Dial the AI demo line and experience the front desk yourself, or book a full platform walkthrough.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={links.demoCall} size="lg" variant="white"><Icon name="phone" className="h-4 w-4" /> Talk to {site.shortName} now</Button>
            <Button href={links.demo} size="lg" variant="ghost">Schedule a Custom Demo</Button>
          </div>
          <p className="mt-8 text-sm text-white/50">
            <Link href="/features#dialer" className="font-semibold text-mcd-cyan hover:underline">Tour the dialer next</Link>
          </p>
        </div>
      </section>
    </>
  );
}
