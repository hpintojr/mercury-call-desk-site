import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import Icon from "@/components/Icon";
import { links } from "@/config/site";
import { integrations } from "@/content/integrations";

export const metadata: Metadata = {
  title: "Integrations",
  description: "Connect your AI phone assistant with the software you already use. Automatically sync customer data, schedule appointments, process payments, and trigger custom workflows—all from phone conversations.",
};

export default function IntegrationsPage() {
  return (
    <>
      <PageHero crumb="Integrations" title="Powerful integrations that work with your existing business tools" body="Connect your AI phone assistant with the software you already use. Automatically sync customer data, schedule appointments, process payments, and trigger custom workflows—all from phone conversations. No manual data entry required." />

      <section className="py-14 sm:py-20">
        <div className="container-x">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {integrations.map((it) => (
              <li key={it.name} className="flex flex-col rounded-xl2 border border-mcd-line bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  {it.slug === "custom" ? (
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-mcd-blue via-mcd-sky to-mcd-cyan text-mcd-navy"><Icon name="plug" className="h-6 w-6" /></span>
                  ) : (
                    <span className="flex h-12 w-24 shrink-0 items-center justify-start">
                      {/* Official logos: public/integrations/<slug>.svg (see scripts/fetch-logos.mjs) */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`/integrations/${it.slug}.svg`} alt={`${it.name} logo`} loading="lazy" className="max-h-10 w-auto max-w-24 object-contain" />
                    </span>
                  )}
                  <div>
                    <h2 className="font-bold text-mcd-navy">{it.name}</h2>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-mcd-muted">{it.category}</p>
                  </div>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-mcd-muted">{it.body}</p>
                <Link href="/pricing" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-mcd-blue hover:underline">Connect Now <Icon name="arrow" className="h-4 w-4" /></Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABand eyebrow="Launch with ease" title="Ready to connect your business tools?" body="Schedule a 15-minute consultation to see how your specific software stack can be integrated with intelligent automation workflows." cta="Schedule Integration Demo" href={links.demo} />
    </>
  );
}
