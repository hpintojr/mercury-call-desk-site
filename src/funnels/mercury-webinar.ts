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
    title: "Mercury Call Desk Live: Capture 100% of Inbound Calls With AI Reception",
    // Saturday, December 5, 2026. Time is a placeholder until Hamilton confirms it.
    startsAt: "2026-12-05T11:00:00-08:00",
    durationMinutes: 60,
    timeLabel: "11:00 AM PT / 2:00 PM ET",
    joinUrl: "",
    calendarDescription:
      "Live training from Mercury Call Desk: how sales floors and service teams answer every inbound call, qualify leads, and book appointments 24/7 with an AI receptionist. The join link will be emailed before the session.",
  },

  crm: {
    webhookUrlEnv: "WEBINAR_WEBHOOK_URL",
    webhookSecretEnv: "WEBINAR_WEBHOOK_SECRET",
    tags: ["webinar-registrant", "webinar-2026-12-05"],
  },

  seo: {
    title: "Free Live Training: Capture 100% of Inbound Calls With AI",
    description:
      "Join the Mercury Call Desk live training on December 5. See how an AI phone receptionist answers instantly, qualifies leads, and books appointments 24/7 without adding headcount.",
  },

  register: {
    headerCta: "Reserve My Seat",
    eyebrow: "AI Receptionist Infrastructure for Modern Businesses",
    headline:
      "How High-Volume Sales Floors & Service Teams Capture 100% of Inbound Calls and Convert Leads 24/7 Without Adding Headcount.",
    headlineHighlight: "Capture 100% of Inbound Calls",
    subheadline:
      "Stop letting missed calls leak revenue. Deploy an autonomous AI phone receptionist that answers instantly, qualifies leads, and books appointments directly into your calendar.",
    video: {
      url: "",
      placeholderTitle: "Insert Mercury Call Desk Demo / VSL Here",
      placeholderNote: "16:9 VSL placeholder",
      placeholderDuration: "12:48",
    },
    cta: "Claim Your AI Receptionist Setup",
    ctaSubtext: "Free live training. Seats are limited.",
    trust: {
      heading: "Seamlessly Integrates With Your Existing Tech Stack",
      logos: [
        { name: "GoHighLevel", src: "/vs-logos/gohighlevel.svg" },
        { name: "Mercury CRM" },
        { name: "Twilio" },
        { name: "Salesforce", src: "/vs-logos/salesforce.svg" },
        { name: "Webhooks" },
      ],
    },
    problem: {
      heading: "The Hidden Cost of Missed Calls",
      intro: "Every unanswered ring is a lead that calls the next business on the list.",
      items: [
        { title: "Missed Opportunities", body: "Over 60% of inbound calls go unanswered during peak hours or after-hours.", icon: "phone" },
        { title: "Slow Follow-ups", body: "Leads abandon inquiries if they are not contacted within 5 minutes.", icon: "clock" },
        { title: "High Overhead", body: "Scaling human phone receptionists eats into margins and creates staffing overhead.", icon: "users" },
      ],
    },
    solution: {
      eyebrow: "Mercury Call Desk",
      heading: "Enter Autonomous AI Reception.",
      blocks: [
        { title: "Instant Response", body: "Every call is answered on ring zero, 24 hours a day, 7 days a week, 365 days a year. No hold music, no voicemail, no lost leads.", icon: "bolt", stat: "0", statLabel: "rings before pickup" },
        { title: "Natural Conversational AI", body: "Ultra-low latency voice models that handle complex customer questions and objections fluently, in a voice your callers will want to keep talking to.", icon: "mic", stat: "24/7", statLabel: "live conversations" },
        { title: "Automated Handoffs", body: "Instant CRM sync, live call transfers to your closers, and SMS follow-up cadences that keep every lead moving after the call ends.", icon: "zap", stat: "1:1", statLabel: "every call logged to your CRM" },
      ],
    },
    features: {
      heading: "Everything Your Front Desk Does. On Autopilot.",
      items: [
        { title: "Custom Knowledge Base", body: "Trained specifically on your business offers, pricing, and FAQs.", icon: "paragraph" },
        { title: "Smart Call Routing", body: "Directs VIP leads to closers and handles routine questions on its own.", icon: "arrow" },
        { title: "Real-Time Analytics", body: "Complete call logs, transcripts with sentiment analysis, and conversion metrics.", icon: "chart" },
        { title: "Multi-Channel Sync", body: "Automatic SMS text-back and calendar integration.", icon: "chat" },
      ],
    },
    results: {
      heading: "Proven ROI Across Sales and Service Operations",
      samples: true,
      items: [
        { metric: "34%", metricLabel: "more booked appointments within 14 days", quote: "Replace with a real customer quote about booked appointments.", name: "Customer name", role: "Role, Company" },
        { metric: "100%", metricLabel: "of after-hours calls answered", quote: "Replace with a real customer quote about after-hours coverage.", name: "Customer name", role: "Role, Company" },
        { metric: "< 5 min", metricLabel: "speed to lead on every inquiry", quote: "Replace with a real customer quote about follow-up speed.", name: "Customer name", role: "Role, Company" },
      ],
    },
    faq: {
      heading: "Frequently Asked Questions",
      items: [
        { q: "Does the AI sound robotic?", a: "No. Mercury Call Desk uses advanced natural voice synthesis with low latency, so conversations flow at a human pace with natural pauses, tone, and turn-taking. Most callers simply experience a helpful receptionist." },
        { q: "How difficult is setup?", a: "Setup is plug-and-play. Our team onboards you, loads your offers, pricing, and FAQs into the knowledge base, connects your calendar, and forwards your number. You review test calls before you go live." },
        { q: "Can it integrate with my CRM?", a: "Yes. Mercury Call Desk connects directly with GoHighLevel, Mercury CRM, and any system that accepts custom webhooks, so every call, transcript, and booking lands where your team already works." },
        { q: "Is the training really free?", a: "Yes. The live training is free. Reserve your seat and we will email the join link and reminders before the session." },
      ],
    },
    footerCta: {
      heading: "Stop Losing Revenue to Missed Calls.",
      body: "Reserve your seat for the live training and see the AI receptionist answer, qualify, and book in real time.",
      cta: "Reserve My Free Seat",
    },
    form: {
      heading: "Reserve Your Seat",
      subheading: "Enter your details and we will send the join link and reminders.",
      submit: "Register Now",
      consent:
        "I agree to receive emails and text messages from Mercury Call Desk about this training and related offers. Message and data rates may apply. Reply STOP to opt out.",
      askCompany: true,
    },
  },

  confirm: {
    eyebrow: "Registration Successful",
    headline: "You're One Step Away From Automating Your Inbound Call Pipeline.",
    subheadline: "Watch the short onboarding briefing below to prepare for your deployment.",
    video: {
      url: "",
      placeholderTitle: "Insert Next Steps / Setup Briefing Video Here",
      placeholderNote: "16:9 onboarding placeholder",
      placeholderDuration: "4:12",
    },
    steps: [
      { title: "Check Your Calendar", body: "Verify your confirmation email and make sure the session is locked into your calendar.", calendar: true },
      { title: "Complete Intake Questionnaire", body: "Share your current call volume and routing rules so our team can pre-configure your AI agent.", cta: { label: "Open the questionnaire", href: "#" } },
      { title: "Prepare Script Parameters", body: "Gather your top 5 most common customer questions and your pricing tiers." },
    ],
    resources: {
      heading: "Resources & Quick Links",
      links: [
        { label: "Onboarding Guide", href: "#", icon: "paragraph" },
        { label: "Webhook Documentation", href: "#", icon: "plug" },
        { label: "SMS Template Library", href: "#", icon: "chat" },
      ],
    },
    support: {
      heading: "Questions Before Your Session?",
      body: "Our team is here to help you get ready. Reach out any time before the training.",
      dispatchLabel: "Priority line",
    },
  },
};
