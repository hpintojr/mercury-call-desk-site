import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Icon, { type IconName } from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import RotatingWords from "@/components/RotatingWords";
import Marquee from "@/components/Marquee";
import FeatureCard from "@/components/FeatureCard";
import PricingCards from "@/components/PricingCards";
import Testimonials from "@/components/Testimonials";
import CTABand from "@/components/CTABand";
import { links, site } from "@/config/site";
import { heroWords, benefitWords, frontLines, featureRows, homeIntegrations, insights } from "@/content/home";

const frontIcons: IconName[] = ["phone", "zap", "users"];
const intSlugs: Record<string, string> = { "Google Calendar": "google-calendar", Stripe: "stripe", "Microsoft Outlook": "microsoft-outlook", Zapier: "zapier" };

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-hero text-white">
        <Image src="/brand/mcd-icon.svg" alt="" aria-hidden width={660} height={480} unoptimized className="pointer-events-none absolute -right-20 top-6 w-72 opacity-[0.07] sm:w-[26rem] lg:right-0 lg:w-[34rem]" />
        <div className="container-x relative grid gap-10 py-16 sm:py-20 lg:grid-cols-12 lg:items-center lg:py-28">
          <div className="lg:col-span-7">
            <h1 className="text-[2.1rem] font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">
              Never miss a… <RotatingWords words={heroWords} /> <br className="hidden sm:block" />call again!
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/75 sm:text-lg">
              {site.name} phone assistants that handle calls like your best employee — 24/7, with custom workflows for any business.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={links.demo} size="lg">Schedule a Custom Demo</Button>
              <Button href={links.demoCall} size="lg" variant="ghost"><Icon name="phone" className="h-4 w-4" /> Talk to {site.shortName} now</Button>
            </div>
            <p className="mt-6 text-xs text-white/50">Trusted by businesses that know missed calls mean missed business.</p>
          </div>

          {/* Live-call card (visual stand-in for the hero image) */}
          <div className="lg:col-span-5">
            <div className="animate-float mx-auto max-w-sm rounded-xl2 border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mcd-cyan opacity-75" /><span className="relative inline-flex h-3 w-3 rounded-full bg-mcd-cyan" /></span>
                <p className="text-sm font-semibold">Live call · 11:42 PM</p>
                <span className="ml-auto rounded-full bg-white/10 px-2 py-0.5 text-[11px]">Español detected</span>
              </div>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="rounded-2xl rounded-tl-sm bg-white/10 px-4 py-2">Hi, I need a plumber tonight — my water heater is leaking.</li>
                <li className="ml-6 rounded-2xl rounded-tr-sm bg-gradient-to-r from-mcd-blue to-mcd-sky px-4 py-2 text-mcd-navy">I can help right away. What&apos;s the address? I&apos;ll dispatch our on-call tech and text you an ETA.</li>
              </ul>
              <ul className="mt-4 grid grid-cols-3 gap-2 text-center text-[11px] text-white/70">
                <li className="rounded-lg bg-white/5 py-2"><Icon name="calendar" className="mx-auto mb-1 h-4 w-4 text-mcd-cyan" />Booked</li>
                <li className="rounded-lg bg-white/5 py-2"><Icon name="chat" className="mx-auto mb-1 h-4 w-4 text-mcd-cyan" />SMS sent</li>
                <li className="rounded-lg bg-white/5 py-2"><Icon name="plug" className="mx-auto mb-1 h-4 w-4 text-mcd-cyan" />CRM updated</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Never miss a call, and… ── */}
      <section className="bg-mcd-surface py-14 sm:py-20">
        <div className="container-x">
          <SectionHeading title={<>Never Miss a Call Again, and&hellip;</>} />
          <div className="mt-8"><Marquee items={benefitWords} /></div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-mcd-muted sm:text-lg">
            {site.name} assistants answer your calls 24/7 with ultra-realistic AI that books appointments, qualifies leads, and connects to your CRM, and more… instantly!
          </p>
          <div className="mt-8 flex justify-center"><Button href={links.demo} size="lg">Schedule a Custom Demo</Button></div>
        </div>
      </section>

      {/* ── Front lines ── */}
      <section className="py-14 sm:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Your Always-On Front Desk" title={<>Let {site.name} Handle the Front Lines For Your Business</>} body={`${site.name} answers, routes, books, follows up, and so much more, 24/7. Trained to sound human and built to adapt to your business needs.`} />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {frontLines.map((f, i) => <FeatureCard key={f.title} title={f.title} body={f.body} icon={frontIcons[i]} />)}
          </div>
        </div>
      </section>

      {/* ── Alternating feature rows ── */}
      <section className="bg-mcd-navy py-14 text-white sm:py-20">
        <div className="container-x space-y-14 sm:space-y-20">
          {featureRows.map((r, i) => (
            <div key={r.title} className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div>
                <p className="eyebrow text-mcd-cyan">{r.eyebrow}</p>
                <h2 className="mt-3 text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">{r.title}</h2>
                <p className="mt-4 text-white/75 sm:text-lg">{r.body}</p>
                <Link href="/features" className="mt-6 inline-flex items-center gap-2 font-semibold text-mcd-cyan hover:underline">Discover more <Icon name="arrow" className="h-4 w-4" /></Link>
              </div>
              <div className="flex items-center justify-center rounded-xl2 border border-white/10 bg-white/5 p-10 sm:p-16">
                <Icon name={r.icon as IconName} className="h-24 w-24 text-mcd-cyan sm:h-32 sm:w-32" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Integrations ── */}
      <section className="py-14 sm:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Built to Connect" title="Works With Your Tools. No Extra Lift" body={`Your ${site.name} assistant connects instantly with your existing tools — CRMs, calendars, payment systems, and more — so you don't need to change how your business runs. Every conversation becomes a completed task, booked appointment, or updated record without lifting a finger.`} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {homeIntegrations.map((it) => (
              <Link key={it.name} href="/integrations" className="group rounded-xl2 border border-mcd-line bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/integrations/${intSlugs[it.name]}.svg`} alt={`${it.name} logo`} loading="lazy" className="h-10 w-auto max-w-28 object-contain" />
                <h3 className="mt-4 text-lg font-bold text-mcd-navy">{it.name}</h3>
                <p className="mt-2 text-sm text-mcd-muted">{it.body}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-mcd-blue group-hover:underline">Learn more <Icon name="arrow" className="h-4 w-4" /></span>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center"><Button href="/integrations" variant="outline">Explore more integrations</Button></div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="bg-mcd-surface py-14 sm:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Plans That Scale With You" title="Clear Pricing, No Surprises" body={`Whether you're starting small or running at scale, ${site.name} has a plan that grows with your business. Every tier includes a powerful ${site.name} assistant that sounds human, handles calls end-to-end, and helps you focus on what matters most.`} />
          <div className="mt-10"><PricingCards /></div>
          <p className="mt-6 text-center text-sm text-mcd-muted">Need the full feature comparison? <Link href="/pricing" className="font-semibold text-mcd-blue underline">See all plans</Link></p>
        </div>
      </section>

      {/* ── Insights ── */}
      <section className="py-14 sm:py-20">
        <div className="container-x grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading align="left" eyebrow="Smarter Decisions" title="Turn Every Call Into a Business Advantage" body={`Don't just collect data — act on it. ${site.name} reveals patterns in customer needs, call outcomes, and agent performance so you can make faster, smarter decisions. Businesses use these insights to increase bookings, improve customer satisfaction, and reduce missed opportunities.`} />
            <ul className="mt-6 space-y-3">
              {insights.map((t) => <li key={t} className="flex items-center gap-3 font-semibold text-mcd-navy"><Icon name="check" className="h-5 w-5 text-mcd-blue" />{t}</li>)}
            </ul>
            <Link href="/features" className="mt-6 inline-flex items-center gap-2 font-semibold text-mcd-blue hover:underline">Discover more <Icon name="arrow" className="h-4 w-4" /></Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[["98.5%", "Lead capture"], ["<1 sec", "Response time"], ["24/7", "Availability"], ["40+", "Languages"]].map(([n, l]) => (
              <div key={l} className="rounded-xl2 border border-mcd-line bg-white p-6 text-center shadow-sm">
                <p className="text-3xl font-extrabold text-gradient">{n}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-mcd-muted">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-mcd-surface py-14 sm:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Real Customer Wins" title={<>How companies like yours use {site.name} every day</>} body={`Real customers sharing how ${site.name} increased their revenue, improved customer satisfaction, and saved valuable time and money.`} />
          <div className="mt-10"><Testimonials /></div>
        </div>
      </section>

      <CTABand eyebrow="Never Miss a Call" title="Every Call Answered. Every Customer Heard." body={`Join hundreds of businesses already using ${site.name} assistants to increase revenue, improve customer satisfaction, and save time.`} cta="See It In Action" href={links.demo} />
    </>
  );
}
