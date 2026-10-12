/**
 * /agencies — ad landing page for agencies currently on GoHighLevel. Linked only from the footer.
 * Unlike the template pages in landing.ts, this one names the competitor, so every GoHighLevel
 * fact below must trace to a dated public source (see `sources`). Never claim we beat GHL on
 * per-minute or per-text rates: we don't. We win on the all-in bill.
 */
import type { IconName } from "@/components/Icon";

export const agenciesSlug = "agencies";

export const agenciesMeta = {
  title: "The GoHighLevel alternative for agencies | Mercury CRM",
  description:
    "White-label client accounts with no per-account fee, AI receptionists and a 10-line parallel dialer in one $397/mo plan. Compare it with your GoHighLevel bill.",
};

export const agenciesHero = {
  eyebrow: "For agencies running on GoHighLevel",
  headline: "White-label CRM, AI receptionists and a 10-line dialer. $397 a month, no per-client fees.",
  sub: "On GoHighLevel, the $297 plan is where the bill starts: the AI Employee is $50 to $97 a month for every client that uses it, and dialing more than one line at a time means paying another vendor. Mercury CRM's Agencies plan includes white-label client accounts with no per-account fee, an AI front desk and a 10-line parallel dialer.",
};

/**
 * Calculator inputs: the agency's monthly software cost, before usage on either platform.
 * GHL = Unlimited plan + AI Employee per sub-account on AI + one parallel-dialer bolt-on.
 * MCD = Agencies plan flat (no per-account fee, AI front desk and dialer included).
 */
export const calc = {
  ghlPlan: { item: "GoHighLevel Unlimited", price: 297 },
  ghlAi: [
    { id: "unlimited", label: "AI Employee Unlimited", price: 97 },
    { id: "growth", label: "AI Employee Growth", price: 50 },
  ],
  ghlDialer: { item: "Parallel dialer bolt-on (Hot Prospector)", price: 137 },
  mcdPlan: { item: "Mercury CRM Agencies", price: 397 },
  defaultClients: 5,
  maxClients: 30,
  note: "Monthly software fees before usage. Calls and texts bill separately on both platforms at published rates.",
};

export type CompareCell = { text: string; good?: boolean };
export const compareRows: { label: string; ghl: CompareCell; mcd: CompareCell }[] = [
  { label: "Plan price", ghl: { text: "$297/mo (Unlimited)" }, mcd: { text: "$397/mo (Agencies)" } },
  { label: "White-label client sub-accounts", ghl: { text: "Yes", good: true }, mcd: { text: "Yes, no per-account fee", good: true } },
  {
    label: "AI receptionist",
    ghl: { text: "Add-on: $50 or $97/mo per sub-account" },
    mcd: { text: "AI front desk included", good: true },
  },
  {
    label: "Outbound dialer",
    ghl: { text: "Single line: one call at a time from a manual call queue" },
    mcd: { text: "10 lines per rep, dialing in parallel", good: true },
  },
  {
    label: "Multi-line dialing",
    ghl: { text: "Third-party bolt-on, e.g. Hot Prospector from $137/mo" },
    mcd: { text: "Included", good: true },
  },
  {
    label: "Rebill client usage at a markup",
    ghl: { text: "Agency Pro plan, $497/mo" },
    mcd: { text: "Enterprise plan, $1,250/mo" },
  },
];

export const included: { icon: IconName; title: string; body: string }[] = [
  { icon: "users", title: "White-label sub-accounts", body: "Give every client a branded account under your agency. No per-account fee, so adding a client doesn't add to your bill." },
  { icon: "mic", title: "AI front desk", body: "AI assistants that answer every call 24/7 in 40+ languages, book appointments and text follow-ups. Part of the plan, not a per-client add-on." },
  { icon: "zap", title: "10-line parallel dialer", body: "Each rep dials up to 10 lines at once. When someone answers, the call connects and the other lines drop. Lists, dispositions and callbacks stay in the CRM." },
  { icon: "phone", title: "A real phone system", body: "Local numbers, call recording, searchable transcripts and SMS from the same numbers, with A2P 10DLC registration handled by our team." },
  { icon: "shield", title: "Compliance built into the dialer", body: "Built-in DNC list, automatic consent checks and calling-hour enforcement before every dial. You scrub lists against the National DNC Registry before upload." },
  { icon: "plug", title: "Bring your HighLevel data", body: "HighLevel import tools are part of the Agencies plan, so contacts, pipelines and conversations come with you." },
];

export const steps = [
  { title: "Walk through your stack", body: "Show us what you run in GoHighLevel today: sub-accounts, snapshots, dialer, AI. We map it to Mercury CRM and price it against your current bill." },
  { title: "Import your data", body: "Contacts, pipelines and conversations come across with the HighLevel import tools. We set up your white-label branding for each client." },
  { title: "Launch your first client", body: "Numbers provisioned, AI front desk trained on the client's business, dialer ready. Move the rest of your book when you're ready." },
];

export const agenciesFaq = [
  {
    q: "Are your call and text rates cheaper than GoHighLevel's?",
    a: "No, and we won't pretend otherwise. GoHighLevel's per-minute and per-text rates are lower than ours. The Agencies plan comes out ahead on the total bill because client accounts carry no per-account fee and the AI front desk and a 10-line dialer are in the plan instead of added per client or bought from another vendor. It also includes $30 of usage credit every month. Our rates are published on the pricing page.",
  },
  {
    q: "How many users and contacts does the Agencies plan include?",
    a: "10 users, 50,000 contacts and 100 GB of storage. If you need unlimited users, contacts and sub-accounts, the Enterprise plan ($1,250/mo) removes the caps.",
  },
  {
    q: "Can I rebill my clients for their usage?",
    a: "Usage rebilling is on the Enterprise plan ($1,250/mo), which also removes the caps on users, contacts and sub-accounts. On the Agencies plan, client accounts are white-labeled under your brand, usage bills to your agency at our published rates, and you charge your clients whatever you like for your service.",
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
    a: "No long-term contract and no setup fee. Monthly billing, or annual at $3,970 (two months free).",
  },
];

/** Every GoHighLevel figure on the page comes from one of these. Checked October 2026. */
export const sources = [
  { label: "GoHighLevel pricing page", href: "https://www.gohighlevel.com/pricing" },
  { label: "HighLevel phone dialer overview", href: "https://help.gohighlevel.com/support/solutions/articles/155000005807-the-phone-dialer-overview" },
  { label: "Hot Prospector: GHL dialer vs power dialer", href: "https://hotprospector.com/blog/ghl-dialer-vs-power-dialer" },
];
