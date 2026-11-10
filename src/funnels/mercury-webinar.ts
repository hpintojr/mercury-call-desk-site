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
    title: "Mercury CRM for Agencies: Free Live Strategy Session",
    // Saturday, December 5, 2026. Time is a placeholder until Hamilton confirms it.
    startsAt: "2026-12-05T11:00:00-08:00",
    durationMinutes: 120,
    timeLabel: "11:00 AM PT / 2:00 PM ET",
    joinUrl: "",
    calendarDescription:
      "Free live strategy session for agency owners with Hamilton Pinto Jr., Mercury Call Desk. How to run and resell your agency on Mercury CRM. The join link will be emailed before the session.",
  },

  crm: {
    webhookUrlEnv: "WEBINAR_WEBHOOK_URL",
    webhookSecretEnv: "WEBINAR_WEBHOOK_SECRET",
    tags: ["webinar-registrant", "webinar-2026-12-05", "agency-lead"],
  },

  host: { name: "Hamilton Pinto Jr.", title: "Agency Growth Strategist, Mercury Call Desk" },

  seo: {
    title: "Mercury CRM for Agencies | Free Live Strategy Session",
    description:
      "Free live session on December 5: run your agency on one white-label CRM with AI voice and a built-in dialer, priced to keep your margin.",
  },

  register: {
    headerCta: "Save My Seat",
    eyebrow: "Free Live Strategy Session for Agency Owners",
    headline: "One CRM to Run, Brand, and Resell Your Agency",
    headlineHighlight: "Run, Brand, and Resell",
    subheadline:
      "See how agencies replace their stacked tools with Mercury CRM, put their own brand on it, and keep the margin.",
    video: {
      url: "",
      placeholderTitle: "Insert Mercury CRM Agency Video Here",
      placeholderNote: "16:9 VSL placeholder",
      placeholderDuration: "8:30",
    },
    cta: "Save My Free Seat",
    ctaSubtext: "Free. Live December 5. Limited seats.",
    trust: {
      heading: "Works With the Tools Your Clients Already Use",
      logos: [
        { name: "GoHighLevel", src: "/vs-logos/gohighlevel.svg" },
        { name: "Mercury CRM" },
        { name: "Twilio" },
        { name: "Salesforce", src: "/vs-logos/salesforce.svg" },
        { name: "Webhooks" },
      ],
    },
    problem: {
      heading: "What's Holding Agencies Back",
      items: [
        { title: "Stacked Tool Bills", body: "CRM, AI voice, and dialer on separate invoices.", icon: "card" },
        { title: "Thin Margins", body: "Per-seat and usage fees eat what you resell.", icon: "chart" },
        { title: "Slow Client Launches", body: "Every new account is a custom build.", icon: "clock" },
      ],
    },
    solution: {
      eyebrow: "Mercury CRM",
      heading: "Built for Agencies.",
      blocks: [
        { title: "One Platform", body: "CRM, AI voice agents, dialer, SMS, and email in one place.", icon: "bolt", stat: "1", statLabel: "login for everything" },
        { title: "Your Brand", body: "White-label every client account under your agency name.", icon: "globe", stat: "100%", statLabel: "white-label" },
        { title: "Your Margin", body: "Unlimited users and contacts on every plan, with usage rebilling.", icon: "chart", stat: "∞", statLabel: "users and contacts" },
      ],
    },
    features: {
      heading: "What You'll Get on the Call",
      items: [
        { title: "Platform Walkthrough", body: "Mercury CRM, live, as your clients will see it.", icon: "globe" },
        { title: "Pricing Strategy", body: "How to package and price it for your clients.", icon: "chart" },
        { title: "Migration Plan", body: "How to move your accounts off your current stack.", icon: "arrow" },
        { title: "Live Q&A", body: "Bring your agency's questions.", icon: "chat" },
      ],
    },
    results: {
      heading: "Agencies on Mercury CRM",
      samples: true,
      items: [
        { metric: "3", metricLabel: "clients launched in 30 days", quote: "Replace with a real agency quote.", name: "Agency owner", role: "Agency name" },
        { metric: "$0", metricLabel: "extra per added user", quote: "Replace with a real agency quote.", name: "Agency owner", role: "Agency name" },
        { metric: "1 day", metricLabel: "to launch a client account", quote: "Replace with a real agency quote.", name: "Agency owner", role: "Agency name" },
      ],
    },
    faq: {
      heading: "Questions",
      items: [
        { q: "Who is this for?", a: "Agency owners who want one CRM to run and resell." },
        { q: "Is it free?", a: "Yes. At the end you'll see the Mercury agency plans." },
        { q: "Do I need to be technical?", a: "No. Onboarding is done with you." },
        { q: "Can I move off GoHighLevel?", a: "Yes. We'll cover migration on the call." },
      ],
    },
    footerCta: {
      heading: "Run Your Agency on One CRM.",
      body: "Save your seat for the free live session.",
      cta: "Save My Free Seat",
    },
    form: {
      heading: "Save Your Seat",
      subheading: "We'll send the join link and reminders.",
      submit: "Register Now",
      consent:
        "I agree to receive emails and text messages from Mercury Call Desk about this session and related offers. Message and data rates may apply. Reply STOP to opt out.",
      askCompany: true,
    },
  },

  confirm: {
    eyebrow: "You're Registered",
    headline: "You're In. One More Step.",
    subheadline: "Watch this short video before the session.",
    video: {
      url: "",
      placeholderTitle: "Insert Pre-Session Video Here",
      placeholderNote: "16:9 briefing placeholder",
      placeholderDuration: "4:12",
    },
    steps: [
      { title: "Add It to Your Calendar", body: "Check your inbox for the confirmation email.", calendar: true },
      { title: "Answer 3 Quick Questions", body: "So we can tailor the session to your agency.", cta: { label: "Open the questionnaire", href: "#" } },
      { title: "Bring Your Questions", body: "Live Q&A at the end." },
    ],
    resources: {
      heading: "Quick Links",
      links: [
        { label: "Mercury for Agencies", href: "/agencies", icon: "users" },
        { label: "Plans & Pricing", href: "/pricing", icon: "card" },
        { label: "Platform Overview", href: "/platform", icon: "globe" },
      ],
    },
    support: {
      heading: "Questions Before the Session?",
      body: "Reach out any time.",
      dispatchLabel: "Call us",
    },
  },
};
