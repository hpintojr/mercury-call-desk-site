import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import Logo from "@/components/Logo";
import FAQAccordion from "@/components/FAQAccordion";
import CallbackForm from "./CallbackForm";
import BookEmbed from "./BookEmbed";
import { aiLine, links, site } from "@/config/site";
import BillCalculator from "./BillCalculator";
import { agenciesFaq, agenciesHero, agenciesSlug as slug, calc, compareRows, included, sources, steps } from "@/content/agencies";

const btn = "tap inline-flex items-center justify-center gap-2 rounded-full font-semibold transition active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-mcd-sky focus-visible:ring-offset-2 px-7 py-4 text-base";
const btnPrimary = `${btn} bg-gradient-to-r from-mcd-blue via-mcd-sky to-mcd-cyan text-mcd-navy shadow-lg shadow-mcd-sky/30 hover:brightness-110`;
const btnGhost = `${btn} border border-white/30 text-white hover:bg-white/10`;

/** Smallest monthly gap the calculator can show: one client on the cheaper AI Employee plan. */
const minGap = calc.ghlPlan.price + Math.min(...calc.ghlAi.map((a) => a.price)) + calc.ghlDialer.price - calc.mcdPlan.price;

/**
 * Agency comparison landing page (/agencies). Same minimal chrome as LandingPage —
 * no site nav, exits are the walkthrough calendar, the AI line and the callback form.
 */
export default function AgenciesPage() {
  return (
    <>
      <header className="bg-mcd-navy text-white">
        <div className="container-x flex h-20 items-center justify-between gap-4">
          <Logo />
          <a href={aiLine.href} data-placement={`${slug}-header`} className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-sm font-semibold hover:bg-white/10">
            <Icon name="phone" className="h-4 w-4 text-mcd-cyan" />
            <span className="hidden sm:inline">Call the AI</span> {aiLine.display}
          </a>
        </div>
      </header>

      {/* Hero + bill stack */}
      <section className="relative overflow-hidden bg-hero text-white">
        <Image src="/brand/mcd-icon.svg" alt="" width={660} height={480} aria-hidden unoptimized className="pointer-events-none absolute -right-20 -top-16 w-72 opacity-10 lg:w-[34rem]" />
        <div className="container-x relative grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-12 lg:gap-14 lg:py-24">
          <div className="lg:col-span-7">
            <p className="eyebrow text-mcd-cyan">{agenciesHero.eyebrow}</p>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-balance sm:text-4xl lg:text-5xl">{agenciesHero.headline}</h1>
            <p className="mt-5 max-w-2xl text-base text-white/75 sm:text-lg">{agenciesHero.sub}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#book" className={btnPrimary}>Book an agency walkthrough<Icon name="arrow" className="h-5 w-5" /></a>
              <a href="#compare" className={btnGhost}>See the comparison</a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <BillCalculator />
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-mcd-line bg-mcd-surface">
        <div className="container-x grid gap-6 py-10 sm:grid-cols-3">
          {[
            { value: "$0", label: "per client account", basis: "Add clients without adding to your Mercury CRM bill" },
            { value: "10 lines", label: "per rep, dialing in parallel", basis: "GoHighLevel's native dialer works one call at a time" },
            { value: `$${minGap}+`, label: "a month less than GoHighLevel with just one AI client", basis: "Agency Pro + AI Employee Growth + dialer bolt-on, before usage" },
          ].map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <p className="text-3xl font-extrabold text-mcd-navy tabular-nums">{s.value}</p>
              <p className="mt-1 text-sm font-semibold text-mcd-ink">{s.label}</p>
              <p className="mt-1 text-xs text-mcd-muted">{s.basis}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section id="compare" className="scroll-mt-24 py-14 sm:py-20">
        <div className="container-x max-w-5xl">
          <p className="eyebrow">Side by side</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-mcd-navy sm:text-4xl">GoHighLevel Agency Pro vs Mercury CRM Agencies</h2>
          <div className="mt-8 overflow-x-auto rounded-xl2 border border-mcd-line bg-white shadow-sm">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-mcd-line bg-mcd-surface">
                  <th scope="col" className="w-1/3 px-5 py-4 font-semibold text-mcd-muted"><span className="sr-only">Feature</span></th>
                  <th scope="col" className="w-1/3 px-5 py-4 font-bold text-mcd-ink">GoHighLevel Agency Pro</th>
                  <th scope="col" className="w-1/3 px-5 py-4 font-extrabold text-mcd-blue">Mercury CRM Agencies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-mcd-line">
                {compareRows.map((r) => (
                  <tr key={r.label}>
                    <th scope="row" className="px-5 py-4 font-semibold text-mcd-navy">{r.label}</th>
                    <td className="px-5 py-4 text-mcd-muted">{r.ghl.text}</td>
                    <td className="px-5 py-4 font-semibold text-mcd-ink">
                      <span className="flex items-start gap-2">{r.mcd.good && <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-mcd-blue" />}{r.mcd.text}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-mcd-muted">
            GoHighLevel list prices and features as published in October 2026. Usage (calls, texts) bills separately on both platforms; GoHighLevel&apos;s per-minute rates are lower, and ours are <Link href="/pricing" className="underline">published here</Link>.
          </p>
        </div>
      </section>

      {/* What's in the $399 */}
      <section className="bg-mcd-surface py-14 sm:py-20">
        <div className="container-x">
          <p className="eyebrow">What $399 gets your agency</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight text-mcd-navy sm:text-4xl">The stack you&apos;re paying three vendors for, in one plan</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {included.map((o) => (
              <div key={o.title} className="rounded-xl2 border border-mcd-line bg-white p-6 shadow-sm">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-mcd-surface text-mcd-blue"><Icon name={o.icon} className="h-5 w-5" /></span>
                <h3 className="mt-4 text-lg font-extrabold text-mcd-navy">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mcd-muted">{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Switching */}
      <section className="py-14 sm:py-20">
        <div className="container-x">
          <p className="eyebrow">Switching</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-mcd-navy sm:text-4xl">Move one client first. Keep the rest where they are until you&apos;re sure.</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="rounded-xl2 border border-mcd-line bg-white p-6 shadow-sm">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-mcd-navy text-sm font-bold text-white">{i + 1}</span>
                <h3 className="mt-4 text-lg font-extrabold text-mcd-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mcd-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Callback */}
      <section id="callback" className="scroll-mt-24 bg-mcd-navy py-14 text-white sm:py-20">
        <div className="container-x grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-mcd-cyan">Hear what your clients would get</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">Drop your number. The AI calls you back in about 60 seconds.</h2>
            <p className="mt-4 text-white/70">This is the AI front desk your clients get on the Agencies plan. It will introduce itself, answer your questions and book a walkthrough with our team while you&apos;re on the line.</p>
            <p className="mt-6 text-sm text-white/60">Prefer to dial? <a href={aiLine.href} data-placement={`${slug}-callback`} className="font-semibold text-white underline">{aiLine.display}</a></p>
          </div>
          <div className="rounded-xl2 bg-white p-6 text-mcd-ink shadow-xl lg:col-span-7">
            <CallbackForm slug={slug} industry="other" />
          </div>
        </div>
      </section>

      {/* Book */}
      <section id="book" className="scroll-mt-24 py-14 sm:py-20">
        <div className="container-x grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Agency walkthrough</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-mcd-navy sm:text-4xl">Bring your GoHighLevel bill. We&apos;ll price your stack side by side.</h2>
            <p className="mt-4 text-mcd-muted">In 20 minutes we&apos;ll go through your sub-accounts, AI and dialer setup, show the white-label client experience, and put your current monthly bill next to what it would be on Mercury CRM.</p>
            <ul className="mt-6 space-y-2 text-sm text-mcd-ink">
              {["No setup fee, no long-term contract", "Plans and usage rates published on our pricing page", "Built and supported from Riverside, California"].map((t) => (
                <li key={t} className="flex items-start gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-mcd-blue" />{t}</li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-mcd-muted"><Link href="/pricing" className="font-semibold text-mcd-blue underline">See plans and pricing</Link></p>
          </div>
          <div className="lg:col-span-7">
            <BookEmbed slug={slug} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-mcd-surface py-14 sm:py-20">
        <div className="container-x max-w-3xl">
          <h2 className="text-2xl font-extrabold text-mcd-navy sm:text-3xl">Questions agencies ask before they switch</h2>
          <div className="mt-6"><FAQAccordion items={agenciesFaq} /></div>
        </div>
      </section>

      <footer className="border-t border-mcd-line py-8 text-xs text-mcd-muted">
        <div className="container-x space-y-4">
          <p>
            Sources, checked October 2026:{" "}
            {sources.map((s, i) => (
              <span key={s.href}>{i > 0 && " · "}<a href={s.href} target="_blank" rel="noopener noreferrer" className="underline">{s.label}</a></span>
            ))}
            . GoHighLevel and HighLevel are trademarks of HighLevel, Inc. Mercury Call Desk is not affiliated with or endorsed by HighLevel.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} {site.legalName}. {site.address.join(", ")}.</p>
            <p className="flex gap-4">
              <Link href={links.legal.privacy} className="underline">Privacy Policy</Link>
              <Link href={links.legal.terms} className="underline">Terms</Link>
              <a href={site.phoneHref} data-placement={`${slug}-footer`} className="underline">Call {site.phone}</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
