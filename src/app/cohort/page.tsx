import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import Button from "@/components/Button";
import Icon, { type IconName } from "@/components/Icon";

export const metadata: Metadata = {
  title: "MasterClass Executive Cohort | Agency CRM Trial",
  description:
    "A Mercury Call Desk offer for MasterClass Executive Cohort II: 90 days of Agency access for $10 upfront, then $333/month at your cohort rate.",
};

const TRIAL_URL = "https://login.mercurycalldesk.com/checkout/2NgSx98BoGVLUVDgjPnh?cycle=monthly";

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
        <Image src="/brand/mcd-icon.svg" alt="" width={660} height={480} aria-hidden unoptimized className="pointer-events-none absolute -right-16 -top-10 w-64 opacity-10 sm:w-96 lg:w-[30rem]" />
        <div className="container-x relative grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-7">
            <nav aria-label="Breadcrumb" className="mb-5 text-xs text-white/60">
              <ol className="flex items-center gap-2">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li aria-hidden>/</li>
                <li className="text-white/90">MasterClass Executive Cohort II</li>
              </ol>
            </nav>
            <p className="eyebrow text-mcd-cyan">A Mercury Call Desk offer for Cohort II</p>
            <h1 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Build your agency <span className="text-gradient">with Mercury.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/75 sm:text-lg">
              Try AI Voice, automated follow-up, and a CRM you can put your own brand on. You have 90 days to run a real client workflow.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#trial" size="lg">Explore the 90-day offer</Button>
              <Button href="#features" size="lg" variant="ghost">What&apos;s inside</Button>
            </div>
          </div>

          <aside className="rounded-xl2 border border-white/15 bg-white/5 p-6 backdrop-blur sm:p-8 lg:col-span-5">
            <p className="eyebrow text-mcd-cyan">The Cohort II offer</p>
            <h2 className="mt-3 text-2xl font-extrabold leading-tight sm:text-3xl">90 days to build a workflow you can use.</h2>
            <p className="mt-5 text-5xl font-extrabold leading-none sm:text-6xl">
              $10 <span className="text-base font-semibold text-white/70">to get started</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Every dollar goes into your SMS and email wallet. Use it to test your follow-up with real messages.
            </p>
            <p className="mt-5 border-t border-white/10 pt-4 text-sm text-white/80">
              Then <strong className="font-bold text-white">$333/month</strong> at your cohort rate.
            </p>
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
            AI Voice requires a connected voice account. The $10 wallet credit is for SMS and email usage.
          </p>
        </div>
      </section>

      {/* Trial offer */}
      <section id="trial" className="scroll-mt-24 py-14 sm:py-20">
        <div className="container-x grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow">The MasterClass Executive Cohort trial</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-mcd-navy sm:text-4xl lg:text-5xl">
              Try Agency access for 90 days with $10 upfront.
            </h2>
            <p className="mt-4 text-mcd-muted sm:text-lg">
              Your $10 goes into your wallet for SMS and email usage. After the 90-day trial, cohort membership continues at <strong className="font-semibold text-mcd-ink">$333/month</strong>.
            </p>
            <p className="mt-4 text-mcd-muted">
              <strong className="font-semibold text-mcd-ink">A team of one?</strong> After the trial, you can request a move to the <Link href="/pricing" className="font-semibold text-mcd-blue underline">Starter plan at $99/month</Link> plus usage.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-mcd-ink">
              {["90 days of Agency access", "$10 upfront, credited to your SMS and email wallet", "$333/month cohort rate after the trial"].map((t) => (
                <li key={t} className="flex items-start gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-mcd-blue" />{t}</li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href={TRIAL_URL} size="lg">Start your 90-day trial</Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-xl2 border border-mcd-line bg-mcd-surface p-6 sm:p-8">
              <p className="eyebrow">Agency strategy</p>
              <h3 className="mt-3 text-2xl font-extrabold leading-tight text-mcd-navy">Need help growing your agency?</h3>
              <p className="mt-3 text-sm leading-relaxed text-mcd-muted">
                Talk through your offer, client onboarding, or which workflows to automate first.
              </p>
              <div className="mt-6">
                <Button href="/contact" variant="outline">Request a strategy call</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cohort brands band */}
      <section className="border-t border-mcd-line bg-white py-12 sm:py-16">
        <div className="container-x text-center">
          <p className="eyebrow">MasterClass Executive Cohort II</p>
          <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center justify-center gap-8 sm:flex-row sm:gap-12">
            <Image src="/brand/cohort/masterclass-executive.png" alt="MasterClass Executive" width={440} height={150} unoptimized className="h-auto w-44 invert sm:w-52" />
            <span aria-hidden className="grid h-10 w-10 shrink-0 place-items-center bg-[#ffcd00]">
              <span className="block h-3.5 w-3.5 bg-[#ff7900]" />
            </span>
            <Image src="/brand/cohort/chicago-booth.png" alt="Chicago Booth School of Business" width={810} height={205} unoptimized className="h-auto w-60 invert sm:w-72" />
          </div>
          <div aria-hidden className="mx-auto mt-8 h-3 w-36 bg-[linear-gradient(to_right,#439fdb_0_11.11%,#f5c400_11.11%_22.22%,#c3dfc2_22.22%_33.33%,#e4e4e4_33.33%_55.56%,#35458c_55.56%_77.78%,#f5c400_77.78%)]" />
          <p className="mt-6 text-sm text-mcd-muted">Trial offered by Mercury Call Desk.</p>
        </div>
      </section>
    </>
  );
}
