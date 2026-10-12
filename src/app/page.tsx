import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Icon, { type IconName } from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import Marquee from "@/components/Marquee";
import Testimonials from "@/components/Testimonials";
import CTABand from "@/components/CTABand";
import RoiCalculator from "@/components/RoiCalculator";
import { links, site, aiLine } from "@/config/site";
import { benefitWords, pillars, featureRows, homeIntegrations, insights, oneBill, compliancePoints } from "@/content/home";
import { tiers } from "@/content/pricing";

const pillarIcons: IconName[] = ["phone", "zap", "users"];
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
              Your entire phone operation. One platform.
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/75 sm:text-lg">
              Mercury CRM combines your customer database, a full dialer and phone system, and Mercury Call Desk AI assistants that answer, call, book, and follow up — 24/7.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={links.demo} size="lg">Schedule a Custom Demo</Button>
              <Button href={links.demoCall} size="lg" variant="ghost"><Icon name="phone" className="h-4 w-4" /> Talk to {site.shortName} now</Button>
            </div>
            <p className="mt-6 text-xs text-white/50">Trusted by businesses that know missed calls mean missed business.</p>
          </div>

          {/* Live-call card */}
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

      {/* ── Benefit marquee ── */}
      <section className="bg-mcd-surface py-10">
        <div className="container-x"><Marquee items={benefitWords} /></div>
      </section>

      {/* ── Three pillars ── */}
      <section className="py-14 sm:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="One Platform, Three Pillars" title="Everything your phones do, in one place" body="Inbound, outbound, and everything behind the scenes. No stitching vendors together, no syncing data between tools." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Link key={p.title} href={p.href} className="group rounded-xl2 border border-mcd-line bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl2 bg-mcd-surface text-mcd-blue"><Icon name={pillarIcons[i]} className="h-6 w-6" /></span>
                <h3 className="mt-4 text-lg font-bold text-mcd-navy">{p.title}</h3>
                <p className="mt-2 text-sm text-mcd-muted">{p.body}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-mcd-blue group-hover:underline">Learn more <Icon name="arrow" className="h-4 w-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── One bill, not three ── */}
      <section className="bg-mcd-navy py-14 text-white sm:py-20">
        <div className="container-x">
          <SectionHeading eyebrow={oneBill.eyebrow} title={oneBill.title} body={oneBill.body} />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-white/50">The old way</p>
              {oneBill.oldWay.map((o) => (
                <div key={o.name} className="flex items-center justify-between rounded-xl2 border border-white/10 bg-white/5 px-5 py-4">
                  <div><p className="font-bold">{o.name}</p><p className="text-sm text-white/60">{o.detail}</p></div>
                  <Icon name="x" className="h-5 w-5 text-white/30" />
                </div>
              ))}
              <p className="pt-1 text-sm text-white/50">Three vendors. Three bills. Three logins.</p>
            </div>
            <div className="rounded-xl2 border border-mcd-cyan/40 bg-gradient-to-br from-mcd-blue/30 to-mcd-cyan/10 p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-wider text-mcd-cyan">The Mercury way</p>
              <p className="mt-3 text-2xl font-extrabold">{oneBill.newWay.name}</p>
              <p className="mt-1 text-xl font-bold text-mcd-cyan">{oneBill.newWay.price}</p>
              <p className="mt-3 text-white/75">{oneBill.newWay.detail}</p>
              <div className="mt-6"><Button href="/pricing" variant="white">See the plans</Button></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Talk to the AI now ── */}
      <section className="py-14 sm:py-20">
        <div className="container-x">
          <div className="grid items-center gap-8 rounded-xl2 border border-mcd-line bg-white p-8 shadow-sm sm:p-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow text-mcd-blue">Live Demo</p>
              <h2 className="mt-3 text-2xl font-extrabold text-mcd-navy sm:text-3xl">Don&apos;t take our word for it. Call the AI.</h2>
              <p className="mt-4 text-mcd-muted sm:text-lg">The fastest demo in the industry: pick up your phone, call the number, and try to stump it. Book a fake appointment. Ask a hard question. Try Spanish.</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href={links.demoCall} size="lg"><Icon name="phone" className="h-4 w-4" /> {aiLine.display}</Button>
                <Button href={links.demo} size="lg" variant="outline">Schedule a Custom Demo</Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <a href={links.demoCall} className="flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-mcd-blue to-mcd-cyan text-white shadow-xl transition hover:scale-105 sm:h-56 sm:w-56" aria-label="Call our AI assistant now">
                <Icon name="phone" className="h-16 w-16 sm:h-20 sm:w-20" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── ROI calculator ── */}
      <section className="bg-mcd-surface py-14 sm:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Do The Math" title="What are missed calls costing you?" body="Plug in your numbers. This is the revenue an AI front desk recovers by answering every call." />
          <div className="mt-10"><RoiCalculator /></div>
        </div>
      </section>

      {/* ── Pricing teaser ── */}
      <section className="py-14 sm:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Plans That Scale With You" title="Clear pricing, no surprises" body="Platform plans from $97/mo plus transparent usage rates. Every tier includes the AI front desk, the full dialer, and Mercury CRM." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {tiers.map((t) => (
              <div key={t.id} className={`relative rounded-xl2 border bg-white p-6 shadow-sm ${t.popular ? "border-mcd-sky ring-2 ring-mcd-sky/40" : "border-mcd-line"}`}>
                {t.popular && <span className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-mcd-blue to-mcd-cyan px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-mcd-navy">Most Popular</span>}
                <h3 className="text-lg font-extrabold text-mcd-navy">{t.name}</h3>
                <p className="mt-1 text-sm text-mcd-muted">{t.blurb}</p>
                <p className="mt-4"><span className="text-3xl font-extrabold text-mcd-navy">${t.monthly.toLocaleString()}</span><span className="text-sm text-mcd-muted">/mo + usage</span></p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center"><Button href="/pricing" size="lg">See all plans</Button></div>
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
                <Link href="/platform" className="mt-6 inline-flex items-center gap-2 font-semibold text-mcd-cyan hover:underline">Discover more <Icon name="arrow" className="h-4 w-4" /></Link>
              </div>
              <div className="flex items-center justify-center rounded-xl2 border border-white/10 bg-white/5 p-10 sm:p-16">
                <Icon name={r.icon as IconName} className="h-24 w-24 text-mcd-cyan sm:h-32 sm:w-32" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Integrations (native first) ── */}
      <section className="py-14 sm:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Built In, Not Bolted On" title="The CRM is included. So is everything else." body="Most AI phone tools make you connect your own CRM, calendar, and payment system. Mercury CRM ships with all of it, and still plays nicely with the tools you already use." />
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
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-mcd-surface py-14 sm:py-20">
        <div className="container-x grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading align="left" eyebrow="Smarter Decisions" title="Turn every call into a business advantage" body="Mercury CRM reveals patterns in customer needs, call outcomes, and agent performance so you can make faster, smarter decisions." />
            <ul className="mt-6 space-y-3">
              {insights.map((t) => <li key={t} className="flex items-center gap-3 font-semibold text-mcd-navy"><Icon name="check" className="h-5 w-5 text-mcd-blue" />{t}</li>)}
            </ul>
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
      <section className="py-14 sm:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Real Customer Wins" title={<>How companies like yours use {site.name} every day</>} body={`Real customers sharing how ${site.name} increased their revenue, improved customer satisfaction, and saved valuable time and money.`} />
          <div className="mt-10"><Testimonials /></div>
        </div>
      </section>

      {/* ── Compliance strip ── */}
      <section className="bg-mcd-navy py-10 text-white">
        <div className="container-x flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
          <p className="text-center text-sm font-semibold text-white/85 lg:text-left">Built for outbound: you bring consented, DNC-scrubbed lists, and we power the dialing.</p>
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {compliancePoints.map((c) => (
              <li key={c} className="flex items-center gap-2 text-sm font-semibold"><Icon name="check" className="h-4 w-4 text-mcd-cyan" />{c}</li>
            ))}
          </ul>
          <Link href="/dialer#compliance" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-mcd-cyan hover:underline">Who handles compliance <Icon name="arrow" className="h-4 w-4" /></Link>
        </div>
      </section>

      <CTABand eyebrow="Get Started" title="One platform. One bill. Zero missed calls." body={`Join businesses running their entire phone operation on Mercury CRM and ${site.name} AI assistants. Talk to the AI right now at ${aiLine.display}, or book a custom demo.`} cta="Schedule a Custom Demo" href={links.demo} />
    </>
  );
}
