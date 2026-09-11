import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import Logo from "@/components/Logo";
import FAQAccordion from "@/components/FAQAccordion";
import CallbackForm from "./CallbackForm";
import BookEmbed from "./BookEmbed";
import { aiLine, links, site } from "@/config/site";
import type { LandingConfig } from "@/content/landing";

const btn = "tap inline-flex items-center justify-center gap-2 rounded-full font-semibold transition active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-mcd-sky focus-visible:ring-offset-2 px-7 py-4 text-base";
const btnPrimary = `${btn} bg-gradient-to-r from-mcd-blue via-mcd-sky to-mcd-cyan text-mcd-navy shadow-lg shadow-mcd-sky/30 hover:brightness-110`;
const btnGhost = `${btn} border border-white/30 text-white hover:bg-white/10`;

function Cta({ action, label, variant, slug }: { action: "call" | "book" | "callback"; label: string; variant: "primary" | "ghost"; slug: string }) {
  const cls = variant === "primary" ? btnPrimary : btnGhost;
  if (action === "call") {
    return (
      <a href={aiLine.href} data-placement={`${slug}-hero`} className={cls}>
        <Icon name="phone" className="h-5 w-5" />{label}
      </a>
    );
  }
  return <a href={action === "book" ? "#book" : "#callback"} className={cls}>{label}<Icon name="arrow" className="h-5 w-5" /></a>;
}

/**
 * Ad landing page. No site nav: the only exits are the AI line, the callback form and the calendar.
 * Everything on it is driven by one LandingConfig (src/content/landing.ts).
 */
export default function LandingPage({ page }: { page: LandingConfig }) {
  const showCallback = page.secondary.action === "callback" || page.primary.action === "call";

  return (
    <>
      {/* Minimal header: logo + AI line. */}
      <header className="bg-mcd-navy text-white">
        <div className="container-x flex h-20 items-center justify-between gap-4">
          <Logo />
          <a href={aiLine.href} data-placement={`${page.slug}-header`} className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-sm font-semibold hover:bg-white/10">
            <Icon name="phone" className="h-4 w-4 text-mcd-cyan" />
            <span className="hidden sm:inline">Call the AI</span> {aiLine.display}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-hero text-white">
        <Image src="/brand/mcd-icon.svg" alt="" width={660} height={480} aria-hidden unoptimized className="pointer-events-none absolute -right-20 -top-16 w-72 opacity-10 lg:w-[34rem]" />
        <div className="container-x relative grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-12 lg:gap-14 lg:py-24">
          <div className="lg:col-span-7">
            <p className="eyebrow text-mcd-cyan">{page.eyebrow}</p>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-balance sm:text-4xl lg:text-5xl">{page.headline}</h1>
            <p className="mt-5 max-w-2xl text-base text-white/75 sm:text-lg">{page.sub}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Cta {...page.primary} variant="primary" slug={page.slug} />
              <Cta {...page.secondary} variant="ghost" slug={page.slug} />
            </div>
            <p className="mt-4 text-xs text-white/50">The demo line is answered by the Mercury Call Desk AI assistant and says so on every call. Calls may be recorded.</p>
          </div>

          {/* Sample call transcript */}
          <div className="lg:col-span-5">
            <div className="rounded-xl2 border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-xs text-white/60">
                <span className="inline-block h-2 w-2 rounded-full bg-mcd-cyan" aria-hidden />
                {page.sampleCall.caller}
              </div>
              <ol className="mt-4 space-y-3">
                {page.sampleCall.lines.map((l, i) => (
                  <li key={i} className={`flex ${l.who === "mcd" ? "justify-start" : "justify-end"}`}>
                    <p className={`max-w-[88%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${l.who === "mcd" ? "rounded-bl-sm bg-white text-mcd-navy" : "rounded-br-sm bg-mcd-blue/80 text-white"}`}>
                      {l.text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-mcd-line bg-mcd-surface">
        <div className="container-x grid gap-6 py-10 sm:grid-cols-3">
          {page.stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <p className="text-3xl font-extrabold text-mcd-navy tabular-nums">{s.value}</p>
              <p className="mt-1 text-sm font-semibold text-mcd-ink">{s.label}</p>
              <p className="mt-1 text-xs text-mcd-muted">{s.basis}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-14 sm:py-20">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-3">
            {page.outcomes.map((o) => (
              <div key={o.title} className="rounded-xl2 border border-mcd-line bg-white p-6 shadow-sm">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-mcd-surface text-mcd-blue"><Icon name={o.icon} className="h-5 w-5" /></span>
                <h2 className="mt-4 text-lg font-extrabold text-mcd-navy">{o.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-mcd-muted">{o.body}</p>
              </div>
            ))}
          </div>
          {page.integrations && (
            <p className="mt-8 text-center text-sm text-mcd-muted">
              Connects to {page.integrations.join(" · ")} — <Link href="/integrations" className="font-semibold text-mcd-blue underline">see all integrations</Link>
            </p>
          )}
        </div>
      </section>

      {/* Callback */}
      {showCallback && (
        <section id="callback" className="scroll-mt-24 bg-mcd-navy py-14 text-white sm:py-20">
          <div className="container-x grid items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow text-mcd-cyan">Or let it call you</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">Drop your number. The AI calls you back in about 60 seconds.</h2>
              <p className="mt-4 text-white/70">This is the same speed-to-lead your customers would get. It will introduce itself, answer your questions, and — if you want — book a time with our team while you&apos;re on the line.</p>
              <p className="mt-6 text-sm text-white/60">Prefer to dial? <a href={aiLine.href} data-placement={`${page.slug}-callback`} className="font-semibold text-white underline">{aiLine.display}</a></p>
            </div>
            <div className="rounded-xl2 bg-white p-6 text-mcd-ink shadow-xl lg:col-span-7">
              <CallbackForm slug={page.slug} industry={page.industry} />
            </div>
          </div>
        </section>
      )}

      {/* Book */}
      <section id="book" className="scroll-mt-24 py-14 sm:py-20">
        <div className="container-x grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">{page.bookEyebrow}</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-mcd-navy sm:text-4xl">{page.bookTitle}</h2>
            <p className="mt-4 text-mcd-muted">{page.bookBody}</p>
            <ul className="mt-6 space-y-2 text-sm text-mcd-ink">
              {["No setup fee, no long-term contract", "Plans, minutes and overage rates published on our pricing page", "Built and supported from Riverside, California"].map((t) => (
                <li key={t} className="flex items-start gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-mcd-blue" />{t}</li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-mcd-muted"><Link href="/pricing" className="font-semibold text-mcd-blue underline">See plans and pricing</Link></p>
          </div>
          <div className="lg:col-span-7">
            <BookEmbed slug={page.slug} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-mcd-surface py-14 sm:py-20">
        <div className="container-x max-w-3xl">
          <h2 className="text-2xl font-extrabold text-mcd-navy sm:text-3xl">Questions people ask before they call</h2>
          <div className="mt-6"><FAQAccordion items={page.faq} /></div>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="border-t border-mcd-line py-8 text-xs text-mcd-muted">
        <div className="container-x flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.legalName}. {site.address.join(", ")}.</p>
          <p className="flex gap-4">
            <Link href={links.legal.privacy} className="underline">Privacy Policy</Link>
            <Link href={links.legal.terms} className="underline">Terms</Link>
            <a href={site.phoneHref} data-placement={`${page.slug}-footer-office`} className="underline">Talk to a person: {site.phone}</a>
          </p>
        </div>
      </footer>
    </>
  );
}
