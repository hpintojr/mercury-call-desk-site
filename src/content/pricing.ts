/**
 * Mercury CRM platform pricing, updated 2026-10-15 (Starter $99/5 sub-accounts; Professional $299 with usage rebilling; Agencies $399 limited-time with dispatch; Enterprise 4th column).
 * Monthly platform fee + transparent usage (published per-tier rates).
 * Annual billing = 2 months free.
 */
export type TierId = "starter" | "professional" | "agencies";

export type Tier = {
  id: TierId;
  name: string;
  blurb: string;
  monthly: number;
  annualTotal: number;
  cta: string;
  /** Shorter label used on compact cards */
  ctaShort?: string;
  popular?: boolean;
  badge?: string;
  /** Line above the card's list, e.g. "Everything in Starter, plus:" */
  lead: string;
  /** What this tier adds. Items every plan shares live in `everyPlan`; full detail lives in `compare`. */
  features: { title: string; detail: string }[];
};

/** Shown once above the pricing cards so each card only lists what its tier adds. */
export const everyPlan: { title: string; detail: string }[] = [
  { title: "Mercury CRM included", detail: "Or keep the CRM you already use: we connect to HubSpot, Salesforce, Pipedrive, Zoho CRM and more" },
  { title: "Unlimited users and contacts", detail: "Add your whole team and grow your database with no caps" },
  { title: "AI voice", detail: "AI front desk answers every call 24/7, books appointments, sends SMS follow-ups" },
  { title: "Full dialer + phone system", detail: "Outbound dialing, local numbers, call recording and transcripts" },
  { title: "40+ languages", detail: "Automatic language detection and seamless switching" },
  { title: "Advanced API and MCP access", detail: "Full API access, and connect Claude, ChatGPT, and AI agents directly to your CRM. Never gated behind an upsell." },
];

export const tiers: Tier[] = [
  {
    id: "starter",
    name: "Starter",
    blurb: "For solo operators getting started",
    monthly: 99,
    annualTotal: 990,
    cta: "Start with Starter",
    lead: "Starter includes:",
    features: [
      { title: "5 sub-accounts", detail: "GoHighLevel gives you 3 at $97. We give you 5 at $99." },
      { title: "10 GB storage", detail: "Call recordings, files, and documents" },
      { title: "$5 monthly usage credits", detail: "Applied automatically to SMS and voice usage" },
    ],
  },
  {
    id: "professional",
    name: "Professional",
    blurb: "For growing businesses that run on their phones",
    monthly: 299,
    annualTotal: 2990,
    cta: "Start with Professional",
    ctaShort: "Start Professional",
    popular: true,
    lead: "Everything in Starter, plus:",
    features: [
      { title: "Unlimited white-label sub-accounts", detail: "Brand client accounts as your own, with no per-account fee" },
      { title: "Usage rebilling", detail: "Mark up phone, email, SMS, and AI usage for your clients. GoHighLevel rebills at cost unless you're on its $497 plan; we let you profit from it here." },
      { title: "Financials, marketing and AI automation", detail: "Invoices and estimates; campaigns, broadcasts and social; workflows and reputation management" },
      { title: "50 GB storage", detail: "More recordings, files, and documents" },
      { title: "$15 monthly usage credits", detail: "Applied automatically to SMS and voice usage" },
    ],
  },
  {
    id: "agencies",
    name: "Agencies",
    blurb: "For agencies reselling the platform under their own brand. Limited-time pricing.",
    monthly: 399,
    annualTotal: 3990,
    badge: "Limited Time",
    cta: "Start with Agencies",
    lead: "Everything in Professional, plus:",
    features: [
      { title: "SaaS resale rights", detail: "Sell the platform under your brand at whatever price you set" },
      { title: "Dispatch", detail: "Job tracking, technician 'I'm on my way' status updates, and AI customer notifications. GoHighLevel relies on Jobber or marketplace apps." },
      { title: "AI agentic", detail: "AI agents that build workflows, manage dispatch, and handle follow-ups autonomously" },
      { title: "Data migration", detail: "HighLevel import and custom MCP data tools" },
      { title: "Lower usage rates", detail: "2.00x wholesale on SMS and voice" },
      { title: "100 GB storage + $30 monthly credits", detail: "Deep recording retention; credits applied automatically to SMS and voice" },
    ],
  },
];

/**
 * Enterprise is quote-only (modeled on GoHighLevel's Enterprise block): no published price,
 * shown as the 4th pricing column next to the priced tiers.
 */
export const enterprise = {
  name: "Enterprise",
  eyebrow: "Enterprise plan",
  title: "Built around your business",
  blurb: "Custom tailored for high-volume businesses and agencies",
  body: "Designed for high-volume businesses and agencies, the Enterprise plan is custom tailored to each account. We price it to fit your volume and protect your margins, with the full platform and a team behind it.",
  lead: "Everything in Agencies, plus:",
  points: [
    "Dedicated account manager",
    "Unlimited storage",
    "Volume usage rates",
    "Custom builds, integrations and MCP data tools",
    "White-glove migration from HighLevel",
    "Priority support",
  ],
  cta: "Speak with Our Enterprise Team",
};

/** Published usage rates — transparent wholesale-plus pricing per tier. */
export type UsageRate = {
  label: string;
  unit: string;
  starter: string;
  professional: string;
  agencies: string;
  wholesale: string;
};

export const usageRates: UsageRate[] = [
  {
    label: "SMS",
    unit: "per segment",
    starter: "$0.045",
    professional: "$0.0375",
    agencies: "$0.030",
    wholesale: "$0.015",
  },
  {
    label: "Voice",
    unit: "per minute",
    starter: "$0.075",
    professional: "$0.0625",
    agencies: "$0.050",
    wholesale: "$0.025",
  },
];

export const usageExplainers = [
  {
    title: "SMS segments",
    body: "One segment covers up to 160 characters of plain text. Longer messages use multiple segments. Your plan's monthly credits apply first, then usage bills at your tier's published rate.",
  },
  {
    title: "Voice minutes",
    body: "Billed per minute of talk time on inbound and outbound calls, including AI assistant conversations. Recordings and transcripts are included in your storage, not billed per minute.",
  },
  {
    title: "Monthly credits",
    body: "Every plan includes monthly usage credits ($5 to $30 depending on tier) applied automatically. Credits reset each billing cycle and do not roll over.",
  },
];

/** Feature comparison table (Pricing page). Column order: Starter, Professional, Agencies, Enterprise. */
export type CompareCell = string | boolean;
export type CompareRow = { label: string; tip?: string; cells: [CompareCell, CompareCell, CompareCell, CompareCell] };
export type CompareGroup = { title: string; rows: CompareRow[] };

export const compare: CompareGroup[] = [
  {
    title: "Platform",
    rows: [
      { label: "Users", cells: ["Unlimited", "Unlimited", "Unlimited", "Unlimited"] },
      { label: "Contacts", cells: ["Unlimited", "Unlimited", "Unlimited", "Unlimited"] },
      { label: "Storage", cells: ["10 GB", "50 GB", "100 GB", "Unlimited"] },
      { label: "Monthly usage credits", tip: "Credits applied automatically to SMS and voice usage each billing cycle.", cells: ["$5", "$15", "$30", "Custom"] },
      { label: "Sub-accounts", tip: "Separate client or location accounts under your agency.", cells: ["5", "Unlimited", "Unlimited", "Unlimited"] },
    ],
  },
  {
    title: "Modules",
    rows: [
      { label: "Core CRM (contacts, companies, conversations)", cells: [true, true, true, true] },
      { label: "Sales (calendar, pipelines, opportunities)", cells: [true, true, true, true] },
      { label: "Web Presence (forms, websites, files)", cells: [true, true, true, true] },
      { label: "Financials (invoices, estimates, documents)", cells: [false, true, true, true] },
      { label: "Marketing (campaigns, broadcasts, social)", cells: [false, true, true, true] },
      { label: "AI automation (workflows, reputation)", cells: [false, true, true, true] },
      { label: "White-label sub-accounts (unlimited)", tip: "Brand client accounts as your own, with no per-account fee.", cells: [false, true, true, true] },
      { label: "Dispatch (job tracking, technician updates)", tip: "Track jobs and technicians; AI notifies customers automatically.", cells: [false, false, true, true] },
      { label: "AI agentic (autonomous agents)", cells: [false, false, true, true] },
      { label: "Advanced API access", cells: [true, true, true, true] },
      { label: "Advanced MCP access", cells: [true, true, true, true] },
      { label: "Data Migration (HighLevel import, MCP)", cells: [false, false, true, true] },
      { label: "Usage rebilling (markup phone, SMS, email, AI)", tip: "Rebill client usage at your own markup instead of absorbing the cost.", cells: [false, true, true, true] },
      { label: "SaaS resale rights", tip: "Resell Mercury CRM under your own brand at whatever price you set.", cells: [false, false, true, true] },
      { label: "Dedicated account manager", cells: [false, false, false, true] },
      { label: "Volume usage rates", cells: [false, false, false, true] },
    ],
  },
  {
    title: "Phone System",
    rows: [
      { label: "AI voice (24/7 front desk)", tip: "AI assistants answer every inbound call, book appointments, and follow up.", cells: [true, true, true, true] },
      { label: "Outbound dialer (10 lines per account)", tip: "Parallel dialer that runs up to 10 lines per account at once, for follow-ups, reminders, and sales outreach.", cells: [true, true, true, true] },
      { label: "Local phone numbers", cells: [true, true, true, true] },
      { label: "Call recording & transcripts", cells: [true, true, true, true] },
      { label: "SMS messaging", cells: [true, true, true, true] },
      { label: "40+ languages", cells: [true, true, true, true] },
      { label: "DNC list, consent checks & calling hours", tip: "In-system DNC list, automatic consent checks, and calling-hour enforcement before every dial. Scrub lists against the National DNC Registry before uploading.", cells: [true, true, true, true] },
      { label: "A2P 10DLC registration", tip: "Business SMS campaign registration handled for you.", cells: [true, true, true, true] },
    ],
  },
];

export const pricingFaq = [
  { q: "What happens when my usage credits run out?", a: "Usage keeps working without interruption and bills at your plan's published per-segment and per-minute rates. Every charge is itemized on your invoice, so there are never surprise fees." },
  { q: "Can I change tiers later?", a: "Yes. Upgrade or downgrade anytime to match your business. Changes take effect immediately with no service interruption." },
  { q: "Is there a setup fee?", a: "No setup fees and no long-term contracts. Monthly billing, cancel anytime." },
  { q: "Do you help with A2P 10DLC registration?", a: "Yes. Business SMS requires registered campaigns, and our team handles your A2P 10DLC registration for you so your messages get delivered." },
  { q: "Does every plan include a CRM? Can I keep my current one?", a: "Yes. Every plan includes Mercury CRM at no extra cost: contacts, pipelines, conversations and automations. If you already run on HubSpot, Salesforce, Pipedrive, Zoho CRM or another system, you can keep it. We connect the AI front desk and dialer to your existing CRM instead." },
  { q: "Is outbound dialing included on every tier?", a: "Yes. Every tier includes the full dialer: outbound calling, local numbers, call recording, transcripts, and SMS. Every tier includes unlimited users and contacts. Higher tiers add storage, modules, and better usage rates." },
  { q: "How does annual billing work?", a: "Pay annually and get 2 months free. Starter is $990/yr, Professional $2,990/yr and Agencies $3,990/yr. Enterprise is quoted to fit your account." },
];

export const whyChoose = [
  { title: "One Platform, One Bill", body: "CRM, phone system, dialer, and AI assistants in a single subscription. No stitching vendors together." },
  { title: "Transparent Usage Pricing", body: "Published per-segment and per-minute rates on every tier. Competitors hide overages until the invoice; we print ours." },
  { title: "Live in Days, Not Months", body: "AI assistants trained on your business, numbers provisioned, CRM configured. No complex installations." },
  { title: "Built-In Compliance Tools", body: "An in-system DNC list, automatic consent checks, calling-hour enforcement, automatic opt-outs, and A2P 10DLC registration handled." },
  { title: "Scales to White-Label", body: "Grow from a single location to a resold SaaS product. Professional unlocks unlimited white-label sub-accounts; Agencies adds usage rebilling and SaaS resale." },
  { title: "Real Human Backup", body: "AI handles the routine; your team handles the exceptions. Call transfer and routing keep humans one tap away." },
];

/** Carrier pass-through fees are billed on top of usage rates, plus this markup (Hamilton, 2026-10-16). Enterprise pays them at cost. */
export const carrierFeeMarkup = { starter: 2.5, professional: 2.25, agencies: 2.0 };
