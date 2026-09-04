/**
 * Single source of truth for brand info and external links.
 * TODO items are placeholders — fill before launch.
 */
export const site = {
  name: "Mercury Call Desk",
  shortName: "MCD",
  tagline: "Never miss a call again!",
  description:
    "24/7 AI phone assistants that answer, book appointments, qualify leads, and speak 40+ languages — so you close more business.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mercurycalldesk.com",
  legalName: "Charter Oaks Assets, Inc. d/b/a Mercury Call Desk",
  phone: "(909) 276-7631",
  phoneHref: "tel:+19092767631",
  email: "hello@mercurycalldesk.com",
  address: ["231 E Alessandro Blvd A-208", "Riverside, CA 92508, USA"],
  hours: "Monday - Friday: 8AM - 5PM PT",
  social: {
    facebook: "#", // TODO
    x: "#", // TODO
    linkedin: "#", // TODO
  },
};

export const links = {
  demo: "#", // TODO: Sulus CRM booking-calendar widget URL (crm.sulus.ai → Calendars → share link)
  demoCall: "tel:+19092767631", // TODO: number that rings the MCD demo assistant
  login: "#", // TODO: customer login URL (e.g. https://crm.sulus.ai)
  partner: "#", // TODO: Sales Partner signup (CRM)
  checkout: {
    starter: "#", // TODO: Sulus CRM → Payments → Products/Payment Links (Stripe connected)
    growth: "#", // TODO: payment link
    pro: "#", // TODO: payment link
  },
  legal: {
    terms: "/terms", // TODO: create page
    privacy: "/privacy", // TODO: create page
  },
};

export const nav = [
  { label: "Features", href: "/features" },
  { label: "Integrations", href: "/integrations" },
  { label: "Pricing", href: "/pricing" },
  { label: "Help", href: "/faq" },
  { label: "Contact", href: "/contact" },
];
