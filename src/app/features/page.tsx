import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import CTABand from "@/components/CTABand";
import Icon, { type IconName } from "@/components/Icon";
import { links, site } from "@/config/site";
import { capabilities, outcomes, platform } from "@/content/features";

export const metadata: Metadata = {
  title: "Features",
  description: "Finally, 24/7 professional phone coverage that works as hard as you do. Advanced AI phone assistants that handle every call professionally - without the cost of hiring additional staff.",
};

const capIcons: IconName[] = ["phone", "zap", "plug", "chart", "globe", "shield"];
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
          <SectionHeading align="left" eyebrow="Complete Solution" title="Discover everything your business needs for professional phone coverage" body="From basic call handling to advanced business automation—all the tools you need to never miss an opportunity." />
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

      <section className="bg-mcd-surface py-14 sm:py-20">
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
