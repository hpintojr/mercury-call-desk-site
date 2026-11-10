import type { FunnelConfig } from "./types";
import { site } from "@/config/site";

/**
 * Mercury Call Desk live training funnel.
 * Register page: /webinar   Confirm page: /webinar/confirm
 *
 * TODO before launch:
 *  - Paste the VSL and onboarding video URLs into register.video.url / confirm.video.url.
 *  - Confirm the event time (startsAt + timeLabel) and add the Zoom/stream link to event.joinUrl.
 *  - Replace the sample results with real, approved customer numbers, then set results.samples = false.
 *  - Point the resource links at the real documents.
 */
export const mercuryWebinar: FunnelConfig = {
  id: "mcd-webinar-2026-12",
  basePath: "/webinar",

  brand: {
    name: site.name,
    logoOnDark: "/brand/mcd-logo-dark.svg",
    logoWidth: 1930,
    logoHeight: 700,
    colors: {
      bg: "#071426",
      surface: "#0b1e38",
      primary: "#12c3f1",
      secondary: "#16e8de",
      onPrimary: "#071426",
    },
    supportEmail: site.email,
    supportPhone: site.phone,
    supportPhoneHref: site.phoneHref,
    legalName: site.legalName,
    privacyUrl: "/privacy",
    termsUrl: "/terms",
    adDisclaimer:
      "This site is not a part of the Facebook website or Meta Platforms, Inc. Additionally, this site is not endorsed by Facebook in any way. FACEBOOK is a trademark of Meta Platforms, Inc.",
  },


  event: {
    title: "The No-BS Guide to Building a Profitable AI Agency in 2027 (Mercury Call Desk Live)",
    // Saturday, December 5, 2026. Time is a placeholder until Hamilton confirms it.
    startsAt: "2026-12-05T11:00:00-08:00",
    durationMinutes: 120,
    timeLabel: "11:00 AM PT / 2:00 PM ET",
    joinUrl: "",
    calendarDescription:
      "Free 2-hour live training from Mercury Call Desk for agency owners: the AI offers local businesses pay for, how to price them, and how to deliver them under your own brand. The join link will be emailed before the session.",
  },

  crm: {
    webhookUrlEnv: "WEBINAR_WEBHOOK_URL",
    webhookSecretEnv: "WEBINAR_WEBHOOK_SECRET",
    tags: ["webinar-registrant", "webinar-2026-12-05", "agency-lead"],
  },

  seo: {
    title: "The No-BS Guide to Building a Profitable AI Agency | Free Live Training",
    description:
      "A free 2-hour live training from Mercury Call Desk on December 5: what AI services to sell to local businesses, how to price them, and how to deliver them under your own brand.",
  },

  register: {
    headerCta: "Save My Seat",
    eyebrow: "Free 2-Hour Live Training for Agency Owners",
    headline: "The No-BS Guide to Building a Profitable AI Agency in 2027",
    headlineHighlight: "Profitable AI Agency",
    subheadline:
      "Skip the hype. In this free live session, Mercury Call Desk breaks down the AI services local businesses are paying for right now, how to price them, and how to deliver them under your own brand without hiring a dev team.",
    video: {
      url: "",
      placeholderTitle: "Insert Mercury Call Desk Training Preview Here",
      placeholderNote: "16:9 VSL placeholder",
      placeholderDuration: "8:30",
    },
    cta: "Save My Free Seat",
    ctaSubtext: "100% free. Live on December 5. Seats are limited.",
    trust: {
      heading: "Deliver on the Stack Your Clients Already Use",
      logos: [
        { name: "GoHighLevel", src: "/vs-logos/gohighlevel.svg" },
        { name: "Mercury CRM" },
        { name: "Twilio" },
        { name: "Salesforce", src: "/vs-logos/salesforce.svg" },
        { name: "Webhooks" },
      ],
    },
    problem: {
      heading: "Why Most AI Agencies Stall Out",
      intro: "Selling AI is easy to start and hard to make profitable. These are the three traps we see most.",
      items: [
        { title: "Selling Hype, Not Outcomes", body: "Business owners don't buy \"AI.\" They buy more booked jobs and fewer missed calls. Agencies that pitch the tech instead of the result lose the deal.", icon: "x" },
        { title: "Stacked Software Bills", body: "A CRM, an AI voice tool, a dialer, and per-seat fees add up fast. Every tool you resell eats into the margin you keep.", icon: "card" },
        { title: "Custom Builds That Don't Scale", body: "Building every client from scratch turns your agency into a dev shop. You can't grow past a handful of accounts.", icon: "clock" },
      ],
    },
    solution: {
      eyebrow: "Inside the Live Training",
      heading: "What We'll Cover, Step by Step.",
      blocks: [
        { title: "What to Sell", body: "The AI services local businesses are actually buying: AI phone answering, missed-call text-back, follow-up automations, and a CRM that ties it together. Which ones to lead with and why.", icon: "bolt", stat: "01", statLabel: "Pick the offer" },
        { title: "How to Price It", body: "How to package setup fees and monthly retainers so each client is profitable from month one, and how to present the numbers so owners say yes.", icon: "chart", stat: "02", statLabel: "Price it to profit" },
        { title: "How to Deliver It Under Your Brand", body: "How to launch and manage every client from one white-label platform with your logo on it, so delivery takes hours instead of weeks.", icon: "globe", stat: "03", statLabel: "Deliver it at scale" },
      ],
    },
    features: {
      heading: "What You Walk Away With",
      items: [
        { title: "A Ready-to-Sell Offer Menu", body: "Clear service packages you can start pitching the same week.", icon: "paragraph" },
        { title: "A Pricing Framework", body: "Setup and monthly pricing ranges, plus how to protect your margin on usage.", icon: "chart" },
        { title: "A White-Label Delivery Stack", body: "See Mercury CRM, AI voice agents, and the dialer running under an agency brand.", icon: "plug" },
        { title: "A Client Acquisition Plan", body: "Where to find your first clients and what to say when you call them.", icon: "users" },
      ],
    },
    results: {
      heading: "Agencies Building on Mercury Call Desk",
      samples: true,
      items: [
        { metric: "3", metricLabel: "new retainer clients in the first 30 days", quote: "Replace with a real agency owner quote about landing clients.", name: "Agency owner", role: "Agency name" },
        { metric: "$0", metricLabel: "extra per seat as the client list grew", quote: "Replace with a real agency owner quote about margin.", name: "Agency owner", role: "Agency name" },
        { metric: "1 day", metricLabel: "to launch a new client account", quote: "Replace with a real agency owner quote about delivery speed.", name: "Agency owner", role: "Agency name" },
      ],
    },
    faq: {
      heading: "Frequently Asked Questions",
      items: [
        { q: "Who is this training for?", a: "Agency owners, freelancers, and consultants who want to sell AI services to local businesses, whether you already run an agency or you're starting one." },
        { q: "Do I need to be technical?", a: "No. We focus on what to sell, how to price it, and how to deliver it with tools that don't require code." },
        { q: "Is it really free?", a: "Yes. The training is free. At the end we'll show how agencies use the Mercury Call Desk platform, and you can decide if it's a fit." },
        { q: "Will there be a replay?", a: "Show up live to get your questions answered. Registered attendees will be emailed any follow-up materials after the session." },
      ],
    },
    footerCta: {
      heading: "Stop Guessing What to Sell.",
      body: "Join the free live training and leave with an offer, a price, and a plan to deliver it under your own brand.",
      cta: "Save My Free Seat",
    },
    form: {
      heading: "Save Your Seat",
      subheading: "Enter your details and we'll send the join link and reminders.",
      submit: "Register Now",
      consent:
        "I agree to receive emails and text messages from Mercury Call Desk about this training and related offers. Message and data rates may apply. Reply STOP to opt out.",
      askCompany: true,
    },
  },

  confirm: {
    eyebrow: "Registration Successful",
    headline: "You're In. Here's How to Get the Most Out of the Training.",
    subheadline: "Watch this short video before the session so you're ready to build your offer live.",
    video: {
      url: "",
      placeholderTitle: "Insert Pre-Training Briefing Video Here",
      placeholderNote: "16:9 briefing placeholder",
      placeholderDuration: "4:12",
    },
    steps: [
      { title: "Lock It In Your Calendar", body: "Check your inbox for the confirmation email and add the session to your calendar so you don't miss it.", calendar: true },
      { title: "Answer 3 Quick Questions", body: "Tell us where your agency is today so we can tailor examples to your niche.", cta: { label: "Open the questionnaire", href: "#" } },
      { title: "Bring Your Biggest Question", body: "Write down the one thing holding your agency back right now. We'll answer live questions at the end." },
    ],
    resources: {
      heading: "Resources & Quick Links",
      links: [
        { label: "Mercury for Agencies", href: "/agencies", icon: "users" },
        { label: "Agency Pricing Worksheet", href: "#", icon: "chart" },
        { label: "White-Label Platform Tour", href: "#", icon: "globe" },
      ],
    },
    support: {
      heading: "Questions Before the Training?",
      body: "Our team is here to help. Reach out any time before the session.",
      dispatchLabel: "Call us",
    },
  },
};
