/**
 * /agencies — ad landing page for agencies currently on GoHighLevel. Linked only from the footer.
 * Unlike the template pages in landing.ts, this one names the competitor, so every GoHighLevel
 * fact below must trace to a dated public source (see `sources`, and the research notes in
 * /mnt/project-files/research/vs-pages/gohighlevel.md). Never claim we beat GHL on per-minute or
 * per-text rates: we don't. We win on what each plan lets an agency do and earn.
 *
 * Layout (Hamilton, 2026-10-15 call): plan-to-plan pairs, GoHighLevel on the left in its own
 * colors, Mercury on the right. GHL Unlimited $297 vs Professional $299; GHL Agency Pro $497 vs
 * Agencies $399. No "AI Employee x clients" bill math: GHL's AI add-on and our AI both carry usage,
 * so that comparison overstated the gap.
 */
import type { IconName } from "@/components/Icon";
import { tiers } from "@/content/pricing";

export const agenciesSlug = "agencies";

const pro = tiers.find((t) => t.id === "professional")!;
const agencies = tiers.find((t) => t.id === "agencies")!;

/** GoHighLevel list prices, checked October 2026 on gohighlevel.com/pricing. */
export const ghl = {
  unlimited: { name: "GoHighLevel Unlimited", price: 297 },
  agencyPro: { name: "GoHighLevel Agency Pro", price: 497 },
};

export const agenciesMeta = {
  title: "The GoHighLevel alternative for agencies | Mercury CRM",
  description: `Mark up your clients' phone, SMS, email and AI usage from $${pro.monthly}/mo with unlimited white-label sub-accounts. GoHighLevel needs its $${ghl.agencyPro.price} plan for that. Compare plan to plan.`,
};

export const agenciesHero = {
  eyebrow: "For agencies running on GoHighLevel",
  headline: `Profit from your clients' usage at $${pro.monthly}. GoHighLevel makes you pay $${ghl.agencyPro.price} for that.`,
  sub: `On GoHighLevel's $${ghl.unlimited.price} Unlimited plan, client usage is rebilled at cost, so you earn nothing on it. Marking it up takes Agency Pro at $${ghl.agencyPro.price}. Mercury CRM Professional is $${pro.monthly} with unlimited white-label sub-accounts and markup on phone, SMS, email and AI usage, with AI voice and a parallel dialer included.`,
};

/** Hero price card: plan fee and whether the plan lets an agency mark up client usage. No usage math. */
export const priceCard = {
  title: "Mark up your clients' usage",
  rows: [
    { name: ghl.unlimited.name, price: ghl.unlimited.price, cell: { text: "Rebilled at cost, no markup", no: true } },
    { name: ghl.agencyPro.name, price: ghl.agencyPro.price, cell: { text: "Markup allowed", ok: true } },
  ],
  mcd: { name: "Mercury CRM Professional", price: pro.monthly, cell: { text: "Markup allowed", ok: true } },
};

export type PairCell = { text: string; ok?: boolean; no?: boolean };
export type PlanPair = {
  eyebrow: string;
  title: string;
  ghl: { name: string; price: number };
  mcd: { name: string; price: number; badge?: string };
  rows: { label: string; ghl: PairCell; mcd: PairCell }[];
};

export const pairs: PlanPair[] = [
  {
    eyebrow: "Same price",
    title: `$${ghl.unlimited.price} vs $${pro.monthly}: one of them lets you earn on usage`,
    ghl: ghl.unlimited,
    mcd: { name: "Mercury CRM Professional", price: pro.monthly },
    rows: [
      { label: "Client sub-accounts", ghl: { text: "Unlimited", ok: true }, mcd: { text: "Unlimited, white-label", ok: true } },
      { label: "Mark up client usage", ghl: { text: "Rebilled at cost only", no: true }, mcd: { text: "Phone, SMS, email and AI", ok: true } },
      { label: "AI voice agents", ghl: { text: "Add-on, $50 or $97/mo per sub-account" }, mcd: { text: "Included, usage applies", ok: true } },
      { label: "Parallel dialer", ghl: { text: "Not native", no: true }, mcd: { text: "10 lines per account", ok: true } },
    ],
  },
  {
    eyebrow: "The reseller plans",
    title: `$${ghl.agencyPro.price} vs $${agencies.monthly}: more in the box for $${ghl.agencyPro.price - agencies.monthly} less`,
    ghl: ghl.agencyPro,
    mcd: { name: "Mercury CRM Agencies", price: agencies.monthly, badge: "Limited time" },
    rows: [
      { label: "Mark up client usage", ghl: { text: "Included", ok: true }, mcd: { text: "Included", ok: true } },
      { label: "SaaS resale under your brand", ghl: { text: "Included", ok: true }, mcd: { text: "Included", ok: true } },
      { label: "Dispatch", ghl: { text: "Not native; Jobber or marketplace apps", no: true }, mcd: { text: "Native job tracking and tech updates", ok: true } },
      { label: "AI voice agents", ghl: { text: "Add-on, $50 or $97/mo per sub-account" }, mcd: { text: "Included, usage applies", ok: true } },
      { label: "Parallel dialer", ghl: { text: "Not native", no: true }, mcd: { text: "10 lines per account", ok: true } },
    ],
  },
];

export const included: { icon: IconName; title: string; body: string }[] = [
  { icon: "chart", title: "Earn on every client's usage", body: `From Professional ($${pro.monthly}), rebill phone, SMS, email and AI usage at the markup you set. Usage becomes a margin line instead of a pass-through.` },
  { icon: "users", title: "Unlimited white-label sub-accounts", body: "Give every client a branded account under your agency. No per-account fee, so adding a client doesn't add to your platform bill." },
  { icon: "mic", title: "AI voice on every plan", body: "AI front desk that answers calls 24/7 in 40+ languages, books appointments and texts follow-ups. Part of the plan, not a per-client add-on; calls bill as usage." },
  { icon: "zap", title: "10-line parallel dialer", body: "Your account dials up to 10 lines at once. When someone answers, the call connects and the other lines drop. Built-in DNC list, consent checks and calling-hour enforcement." },
  { icon: "pin", title: "Dispatch on Agencies", body: `Job tracking, technician on-my-way updates and AI customer notifications, native on the $${agencies.monthly} Agencies plan.` },
  { icon: "plug", title: "API and MCP on every plan", body: "Full API access and MCP, so Claude, ChatGPT and your own agents can build workflows and snapshots inside the CRM. Never gated behind an upsell." },
];

export const steps = [
  { title: "Walk through your stack", body: "Show us what you run in GoHighLevel today: sub-accounts, snapshots, dialer, AI. We map it to the right Mercury CRM plan." },
  { title: "Import your data", body: "Contacts, pipelines and conversations come across with the HighLevel import tools on the Agencies plan. We set up your white-label branding for each client." },
  { title: "Launch your first client", body: "Numbers provisioned, AI front desk trained on the client's business, markup set. Move the rest of your book when you're ready." },
];

export const agenciesFaq = [
  {
    q: "Are your call and text rates cheaper than GoHighLevel's?",
    a: "No, and we won't pretend otherwise. GoHighLevel's per-minute and per-text rates are lower than ours. Where Mercury comes out ahead is what each plan lets you do: mark up client usage from $299 instead of $497, AI voice and a parallel dialer included, and dispatch on Agencies. Our rates are published on the pricing page.",
  },
  {
    q: "Which plan do I need to rebill clients at a markup?",
    a: `Professional at $${pro.monthly} a month. Agencies at $${agencies.monthly} adds SaaS resale rights, dispatch, HighLevel import tools and lower usage rates for your agency. On GoHighLevel, markup takes Agency Pro at $${ghl.agencyPro.price}; their $${ghl.unlimited.price} plan rebills at cost.`,
  },
  {
    q: "How many users and contacts are included?",
    a: "Unlimited users and contacts on every plan, and unlimited white-label sub-accounts from Professional up. Professional includes 50 GB of storage and Agencies 100 GB. Enterprise is custom-built around your volume.",
  },
  {
    q: "Do I have to move every client at once?",
    a: "No. Plans are month to month with no setup fee, so most agencies start with one or two clients, prove it out, then move the rest.",
  },
  {
    q: "Is the dialer compliant for outbound campaigns?",
    a: "The dialer keeps a built-in DNC list, checks for consent on each contact and only dials inside allowed calling hours in the recipient's timezone. It does not check numbers against the National Do Not Call Registry: scrub purchased or cold lists against the federal and state registries before you upload them.",
  },
  {
    q: "Is there a contract?",
    a: `No long-term contract and no setup fee. Monthly billing, or annual at $${pro.annualTotal.toLocaleString("en-US")} for Professional and $${agencies.annualTotal.toLocaleString("en-US")} for Agencies (two months free).`,
  },
];

/** Every GoHighLevel figure on the page comes from one of these. Checked October 2026. */
export const sources = [
  { label: "GoHighLevel pricing page", href: "https://www.gohighlevel.com/pricing" },
  { label: "HighLevel phone dialer overview", href: "https://help.gohighlevel.com/support/solutions/articles/155000005807-the-phone-dialer-overview" },
  { label: "HighLevel LC Phone pricing", href: "https://help.gohighlevel.com/en/support/solutions/articles/48001223556" },
  { label: "HighLevel field management app request", href: "https://ideas.gohighlevel.com/app-marketplace/p/field-management-app-for-landscaping-and-home-service-businesses" },
];
