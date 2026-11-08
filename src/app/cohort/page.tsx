import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import Button from "@/components/Button";
import Icon, { type IconName } from "@/components/Icon";
import styles from "./cohort.module.css";

export const metadata: Metadata = {
  title: "MasterClass Executive Cohort | Agency CRM Trial",
  description:
    "A Mercury Call Desk offer for MasterClass Executive Cohort II: 90 days of Agency access with $10 in usage credit for SMS, email, voice, and AI. Then choose $333/month or $3,333/year.",
};

const TRIAL_URL = "https://login.mercurycalldesk.com/checkout/2NgSx98BoGVLUVDgjPnh?cycle=monthly";
const ANNUAL_URL = "https://login.mercurycalldesk.com/checkout/2NgSx98BoGVLUVDgjPnh?cycle=annual";

function CohortBrands({ hero = false }: { hero?: boolean }) {
  return (
    <div className={`${styles.brands} ${hero ? styles.heroBrands : styles.footerBrands}`}>
      <div className={styles.brandSlot}>
        <Image src="/brand/cohort/masterclass-executive.png" alt="MasterClass Executive" width={440} height={150} unoptimized className={styles.masterclassLogo} />
      </div>
      <span aria-hidden="true" className={styles.cohortSquare}><span /></span>
      <div className={styles.brandSlot}>
        <Image src="/brand/cohort/chicago-booth.png" alt="Chicago Booth School of Business" width={810} height={205} unoptimized className={styles.boothLogo} />
      </div>
    </div>
  );
}

const features: { title: string; body: string; icon: IconName }[] = [
  { title: "Contacts and sales pipelines", body: "Keep contact details and conversations together, track deals by stage, and assign tasks so every lead has a next step.", icon: "users" },
  { title: "Forms, websites, and booking", body: "Build a form or landing page to collect inquiries. Give prospects a booking link so they can schedule a conversation with your team.", icon: "calendar" },
  { title: "Phone, dialer, and shared inbox", body: "Make outbound calls, review recordings and transcripts, and pick up customer conversations from a shared inbox.", icon: "phone" },
  { title: "Email and SMS campaigns", body: "Send email and text follow-ups, run broadcasts, and use workflows to trigger the next message when a lead moves through your pipeline.", icon: "mail" },
  { title: "White-label client workspaces", body: "Manage client work in separate workspaces and present the platform under your agency brand.", icon: "globe" },
  { title: "Estimates, invoices, and dispatch", body: "Send a quote, turn it into an invoice, and coordinate field jobs with technician status updates.", icon: "card" },
];

const aiTools: { title: string; body: string; icon: IconName }[] = [
  { title: "AI Voice assistants", body: "Set up an assistant, run an outbound test call, and review the call report. Use AI call grading to evaluate the conversation against a rubric.", icon: "mic" },
  { title: "AI Auto-Reply for live chat", body: "Give visitors a response while your team is away. Set the tone and response boundaries, then pick up the conversation from your inbox.", icon: "chat" },
  { title: "AI-powered workflows", body: "Add an AI Prompt step to a workflow, trigger a Voice Assistant action, or pause and resume an AI agent as part of an automation.", icon: "zap" },
  { title: "AI agents and CRM access", body: "Chat with a configured AI agent. With a separate CRM connection, give an AI assistant permission to work with records such as contacts, opportunities, and campaigns.", icon: "plug" },
];

export default function CohortPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero text-white">
        {/* MasterClass-style block art, as on the original cohort page */}
        <Image src="/brand/cohort/hero-blocks.svg" alt="" width={1200} height={200} aria-hidden unoptimized className="pointer-events-none absolute inset-x-0 bottom-0 h-28 w-full object-cover object-bottom opacity-90 sm:h-36 lg:h-44 [mask-image:linear-gradient(to_top,#000_70%,transparent)]" />
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-1.5 bg-[linear-gradient(to_right,#439fdb_0_11.11%,#f5c400_11.11%_22.22%,#c3dfc2_22.22%_33.33%,#e4e4e4_33.33%_55.56%,#35458c_55.56%_77.78%,#f5c400_77.78%)]" />
        <div className="container-x relative grid items-center gap-10 pt-14 pb-40 sm:pt-20 sm:pb-48 lg:grid-cols-12 lg:pt-24 lg:pb-56">
          <div className="lg:col-span-7">
            <nav aria-label="Breadcrumb" className="mb-5 text-xs text-white/60">
              <ol className="flex items-center gap-2">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li aria-hidden>/</li>
                <li className="text-white/90">MasterClass Executive Cohort II</li>
              </ol>
            </nav>
            <CohortBrands hero />
            <p className="eyebrow text-mcd-cyan">A Mercury Call Desk offer for Cohort II</p>
            <h1 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Build your agency <span className="text-gradient">with Mercury.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/75 sm:text-lg">
              Try AI Voice, automated follow-up, and a CRM you can put your own brand on. You have 90 days to run a real client workflow.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#trial" size="lg" className={styles.glassButton}>Explore the 90-day offer</Button>
              <Button href="#features" size="lg" variant="ghost" className={`${styles.glassButton} ${styles.glassSecondary}`}>What&apos;s inside</Button>
            </div>
          </div>

          <aside className="rounded-xl2 bg-gradient-to-br from-mcd-blue via-mcd-sky to-mcd-cyan p-px shadow-2xl shadow-mcd-sky/20 lg:col-span-5">
            <div className="rounded-[calc(var(--radius-xl2)-1px)] bg-mcd-navy p-6 sm:p-8">
              <div className="flex items-center justify-between gap-3">
                <p className="eyebrow text-mcd-cyan">The Cohort II offer</p>
                <span className="shrink-0 rounded-full bg-gradient-to-r from-mcd-blue to-mcd-cyan px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-mcd-navy">90-day trial</span>
              </div>
              <h2 className="mt-4 text-2xl font-extrabold leading-tight text-balance sm:text-3xl">90 days to build a workflow <span className="whitespace-nowrap">you can use.</span></h2>

              <div className="mt-6 flex items-end gap-3">
                <span className="text-gradient text-6xl font-extrabold leading-none sm:text-7xl">$10</span>
                <span className="pb-1 text-sm font-semibold text-white/90">in usage credit<br /><span className="font-normal text-white/70">added to your platform wallet</span></span>
              </div>

              <ul className="mt-6 space-y-2.5 text-sm text-white/85">
                {[
                  "90 days with no platform subscription fee",
                  "Your $10 pays for SMS, email, voice, and AI as you use them",
                  "White-label workspaces for your clients",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-mcd-cyan" />{t}</li>
                ))}
              </ul>

              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-sm text-white/70">After the trial, choose your cohort rate</p>
                <p className="mt-2 font-semibold text-white">$333/month <span className="font-normal text-white/60">or</span> $3,333/year</p>
              </div>

              <div className="mt-6">
                <Button href="#trial" size="lg" full className={styles.glassButton}>Choose your plan</Button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Pick a workflow */}
      <section className="py-14 sm:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Pick a workflow to try" title="From first inquiry to follow-up" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="rounded-xl2 border border-mcd-line bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-mcd-navy">Already using GoHighLevel?</h3>
              <p className="mt-2 text-sm leading-relaxed text-mcd-muted">
                Recreate a workflow you know well. Capture a lead, move it through your pipeline, and test your follow-up. Compare the setup and day-to-day experience, then tell us where this platform fits and where it falls short.
              </p>
            </article>
            <article className="rounded-xl2 border border-mcd-line bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-mcd-navy">New to agency CRMs?</h3>
              <p className="mt-2 text-sm leading-relaxed text-mcd-muted">
                A CRM keeps leads, conversations, and next steps together. Start with a new inquiry, track where it stands, and use email or text to follow up. White-labeling lets you present the platform under your agency&apos;s brand.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-24 bg-mcd-surface py-14 sm:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Inside Mercury Call Desk" title="What you can put to work" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => <FeatureCard key={f.title} title={f.title} body={f.body} icon={f.icon} />)}
          </div>
        </div>
      </section>

      {/* AI tools */}
      <section className="bg-mcd-navy py-14 text-white sm:py-20">
        <div className="container-x">
          <SectionHeading dark eyebrow="AI tools for your agency" title="Try AI across calls, chat, and workflows." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {aiTools.map((t) => <FeatureCard key={t.title} title={t.title} body={t.body} icon={t.icon} dark />)}
          </div>
          <p className="mt-8 text-center text-sm text-white/60">
            AI Voice requires a connected voice account. Your $10 wallet credit applies to all usage on the account, including SMS, email, voice minutes, and AI.
          </p>
        </div>
      </section>

      {/* Trial offer */}
      <section id="trial" className="scroll-mt-24 py-14 sm:py-20">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">The MasterClass Executive Cohort trial</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-mcd-navy sm:text-4xl lg:text-5xl">
              Start for just $10.
            </h2>
            <p className="mt-4 text-mcd-muted sm:text-lg">
              Explore the Agency platform for 90 days with no subscription fee. Your $10 is added to your usage wallet to pay for SMS, email, voice minutes, and AI as you use them. Choose your membership billing for after the trial.
            </p>
          </div>
          <div className={styles.planGrid}>
            {[
              { name: "Monthly", price: "$333", cycle: "month", billing: "Billed monthly after your 90-day trial.", note: "Keep your commitment month to month.", href: TRIAL_URL, annual: false },
              { name: "Yearly", price: "$3,333", cycle: "year", billing: "Billed annually after your 90-day trial.", note: "Save $663 a year compared with monthly billing.", href: ANNUAL_URL, annual: true },
            ].map((plan) => (
              <article key={plan.name} className={`${styles.planCard} ${plan.annual ? styles.annualCard : ""}`} aria-labelledby={`plan-${plan.name.toLowerCase()}`}>
                <div className={styles.planHeading}>
                  <h3 id={`plan-${plan.name.toLowerCase()}`}>{plan.name}</h3>
                  {plan.annual && <span className={styles.savingBadge}>Save $663/year</span>}
                </div>
                <div className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <p className="whitespace-nowrap text-xl font-semibold text-white/75 line-through decoration-2">{plan.price}/{plan.cycle}</p>
                  <p className="text-xl font-bold text-mcd-cyan">Start for just $10</p>
                </div>
                <p className={styles.billingNote}>{plan.billing}</p>
                <p className={styles.planNote}>{plan.note}</p>
                <ul className={styles.planFeatures}>
                  {["Full Agency platform and client workspaces", "AI Voice, AI agents, and automations", "$10 credited to your usage wallet"].map((item) => (
                    <li key={item}><Icon name="check" className="h-4 w-4 shrink-0 text-mcd-cyan" />{item}</li>
                  ))}
                </ul>
                <Button href={plan.href} size="lg" full className={styles.glassButton}>Start Trial for $10 · {plan.name}</Button>
                <p className={styles.planTerms}>Then {plan.price}/{plan.cycle}. Usage charges apply.</p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-7 max-w-3xl text-center text-sm leading-relaxed text-mcd-muted">
            <strong className="font-semibold text-mcd-ink">A team of one?</strong> After the trial, you can request a move to the <Link href="/pricing" className="font-semibold text-mcd-blue underline">Starter plan at $99/month</Link> plus usage.
          </p>
          <div className="mt-12">
            <div className={`${styles.strategyCard} rounded-xl2 border border-mcd-line bg-mcd-surface p-6 sm:p-8`}>
              <div>
              <p className="eyebrow">Agency strategy</p>
              <h3 className="mt-3 text-2xl font-extrabold leading-tight text-mcd-navy">Need help growing your agency?</h3>
              <p className="mt-3 text-sm leading-relaxed text-mcd-muted">
                Talk through your offer, client onboarding, or which workflows to automate first.
              </p>
              </div>
              <Button href="/contact" className={`${styles.glassButton} ${styles.glassLight}`}>Request a strategy call</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cohort brands band */}
      <section className={`${styles.brandBand} py-12 sm:py-16`}>
        <div className="container-x text-center">
          <p className="eyebrow">MasterClass Executive Cohort II</p>
          <CohortBrands />
          <div aria-hidden="true" className={styles.colorRow}>
            {["#439fdb", "#ffcd00", "#c3dfc2", "#e4e4e4", "#35458c", "#ff7900", "#ffcd00"].map((color, index) => <span key={index} style={{ backgroundColor: color }} />)}
          </div>
          <p className="mt-6 text-sm text-mcd-muted">Trial offered by Mercury Call Desk.</p>
        </div>
      </section>
    </>
  );
}

