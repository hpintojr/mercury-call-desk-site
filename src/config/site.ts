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
  legalName: "Mercury Call Desk",
  legalUpdated: "September 4, 2026",
  phone: "(909) 276-7631",
  phoneHref: "tel:+19092767631",
  email: "hello@mercurycalldesk.com",
  address: ["231 E Alessandro Blvd A-208", "Riverside, CA 92508, USA"],
  hours: "Monday - Friday: 8AM - 5PM PT",
  social: {
    facebook: "#", // TODO
    instagram: "#", // TODO
    x: "#", // TODO
    linkedin: "#", // TODO
  },
};

export const links = {
  demo: "https://crm.sulus.ai/b/demo-call-calendar", // Sulus CRM "Demo Call Calendar" public booking page
  demoCall: "tel:+19092767631", // TODO: number that rings the MCD demo assistant
  login: "#", // TODO: customer login URL (e.g. https://crm.sulus.ai)
  partner: "#", // TODO: Sales Partner signup (CRM)
  /** Stripe Payment Links (acct_1UBLNoPcxhBvixve). Monthly vs annual is chosen by the pricing toggle. */
  checkout: {
    starter: { monthly: "https://buy.stripe.com/3cI5kF1lG4K2gV0fKj9R600", annual: "https://buy.stripe.com/4gM28t8O83FY0W21Tt9R601" },
    growth: { monthly: "https://buy.stripe.com/cNifZjggA6SaawC1Tt9R602", annual: "https://buy.stripe.com/7sYfZj6G05O6awC1Tt9R603" },
    pro: { monthly: "https://buy.stripe.com/3cI3cxd4o90i0W20Pp9R604", annual: "https://buy.stripe.com/6oU00laWg0tMfQWapZ9R605" },
  },
  legal: {
    terms: "/terms",
    privacy: "/privacy",
  },
};

export const nav = [
  { label: "Features", href: "/features" },
  { label: "Integrations", href: "/integrations" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ's", href: "/faq" },
  { label: "Contact", href: "/contact" },
];
