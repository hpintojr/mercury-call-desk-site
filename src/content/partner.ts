/**
 * /partner — "Become a Partner" page for agencies and resellers (footer: Become an Affiliate).
 * Structure modeled on the reseller partner page we were shown; copy is Mercury CRM only.
 */
import type { IconName } from "@/components/Icon";

export const partnerMeta = {
  title: "Become a Partner",
  description: "Resell Mercury CRM, AI receptionists and a 10-line parallel dialer under your own brand. Unlimited white-label sub-accounts, usage rebilling and recurring revenue.",
};

export const partnerHero = {
  eyebrow: "Your growth partner",
  title: "Offer Mercury CRM, AI receptionists and a real dialer under your brand",
  body: "Add a recurring line of revenue to your agency. Your clients get a CRM, a phone system, a 10-line dialer and AI that answers every call, all branded as yours. We run it in the background.",
};

export const whyPartner: { icon: IconName; title: string; body: string }[] = [
  { icon: "users", title: "White-label ready", body: "Unlimited client sub-accounts under your brand, with no per-account fee. Your clients see your name, not ours." },
  { icon: "chart", title: "Recurring revenue engine", body: "Set your own price for every client and rebill their calls and texts at your markup. Predictable monthly income without adding staff." },
  { icon: "shield", title: "Dedicated partner support", body: "A team in Riverside, California helps from your first onboarding call through each client launch." },
];

export const partnerSteps = [
  { title: "Book a partner call", body: "Thirty minutes with our team to walk through the program, the white-label setup and what to charge your clients." },
  { title: "Onboard your clients", body: "Launch branded client accounts, train an AI front desk on each business and provision numbers. No technical background needed." },
  { title: "Grow recurring revenue", body: "Bill your clients monthly for the platform and their usage. Add clients without adding to your platform fee." },
];

export const partnerBenefits: { icon: IconName; title: string; body: string }[] = [
  { icon: "plug", title: "Expand your services", body: "Add CRM, phone, dialer and AI answering to what you already sell, without building any of it." },
  { icon: "zap", title: "Unlock recurring revenue", body: "Turn one-off projects into monthly retainers that renew on their own." },
  { icon: "star", title: "Upsell existing clients", body: "Every client who misses calls or chases leads by hand is an easy add-on sale." },
  { icon: "chat", title: "Partner resources & support", body: "Onboarding help, migration from HighLevel and a team you can reach by phone." },
];

/** Partner plans. Prices mirror src/content/pricing.ts. */
export const partnerPlans = [
  {
    name: "Professional",
    price: "$299/mo",
    blurb: "Start reselling under your brand",
    points: ["Unlimited white-label sub-accounts", "No per-account fee", "AI front desk and 10-line dialer", "Unlimited users and contacts"],
    cta: "Book a partner call",
  },
  {
    name: "Agencies",
    price: "$399/mo",
    blurb: "Run it as your own SaaS",
    points: ["Everything in Professional", "Usage rebilling at your markup", "SaaS resale rights", "HighLevel data migration", "Unlimited users and contacts"],
    cta: "Book a partner call",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    blurb: "High-volume agencies and resellers",
    points: ["Everything in Agencies", "Unlimited users, contacts and storage", "Volume usage rates", "Dedicated account manager"],
    cta: "Talk with us",
  },
];
