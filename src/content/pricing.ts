/**
 * Mercury CRM platform pricing — updated 2026-10-12 (Agencies $397 with rebilling + SaaS; Enterprise quote-only).
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
  features: { title: string; detail: string; muted?: boolean }[];
};

export const tiers: Tier[] = [
  {
    id: "starter",
    name: "Starter",
    blurb: "For solo operators getting started",
    monthly: 97,
    annualTotal: 970,
    cta: "Start with Starter",
    features: [
      { title: "Mercury CRM included", detail: "Or keep the CRM you already use: we connect to HubSpot, Salesforce, Pipedrive, Zoho CRM and more" },
      { title: "1 user", detail: "One seat for the owner-operator" },
      { title: "2,500 contacts", detail: "Contacts, companies, and conversations in Mercury CRM" },
      { title: "10 GB storage", detail: "Call recordings, files, and documents" },
      { title: "$5 monthly usage credits", detail: "Applied automatically to SMS and voice usage" },
      { title: "AI Front Desk", detail: "AI assistant answers every call 24/7, books appointments, sends SMS follow-ups" },
      { title: "Full dialer + phone system", detail: "Outbound dialing, local numbers, call recording and transcripts" },
      { title: "40+ languages", detail: "Automatic language detection and seamless switching" },
    ],
  },
  {
    id: "professional",
    name: "Professional",
    blurb: "For growing businesses that run on their phones",
    monthly: 297,
    annualTotal: 2970,
    cta: "Start with Professional",
    ctaShort: "Start Professional",
    popular: true,
    features: [
      { title: "Mercury CRM included", detail: "Or keep the CRM you already use: we connect to HubSpot, Salesforce, Pipedrive, Zoho CRM and more" },
      { title: "Everything in Starter", detail: "All Starter features plus the Professional benefits below" },
      { title: "5 users", detail: "Seats for your whole front office" },
      { title: "10,000 contacts", detail: "Room to grow your database" },
      { title: "50 GB storage", detail: "More recordings, files, and documents" },
      { title: "$15 monthly usage credits", detail: "Applied automatically to SMS and voice usage" },
      { title: "Financials", detail: "Invoices, estimates, and documents" },
      { title: "Marketing", detail: "Campaigns, broadcasts, and social" },
      { title: "Automation", detail: "Workflows and reputation management" },
    ],
  },
  {
    id: "agencies",
    name: "Agencies",
    blurb: "For agencies reselling the platform under their own brand",
    monthly: 397,
    annualTotal: 3970,
    badge: "Agency SaaS",
    cta: "Start with Agencies",
    features: [
      { title: "Mercury CRM included", detail: "Or keep the CRM you already use: we connect to HubSpot, Salesforce, Pipedrive, Zoho CRM and more" },
      { title: "Everything in Professional", detail: "All Professional features plus the Agencies benefits below" },
      { title: "10 users", detail: "Seats across locations and departments" },
      { title: "50,000 contacts", detail: "High-volume database capacity" },
      { title: "100 GB storage", detail: "Deep recording and file retention" },
      { title: "$30 monthly usage credits", detail: "Applied automatically to SMS and voice usage" },
      { title: "Advanced tools", detail: "Reporting, products, and dispatch" },
      { title: "Unlimited white-label sub-accounts", detail: "Brand client accounts as your own, with no per-account fee" },
      { title: "Usage rebilling", detail: "Rebill your clients' calls and texts at your own markup" },
      { title: "SaaS resale rights", detail: "Sell the platform under your brand at whatever price you set" },
      { title: "Data migration", detail: "HighLevel import and custom MCP data tools" },
      { title: "Lower usage rates", detail: "2.00x wholesale on SMS and voice" },
    ],
  },
];

/**
 * Enterprise is quote-only (modeled on GoHighLevel's Enterprise block): no published price,
 * shown as a full-width "talk to us" block under the priced tiers.
 */
export const enterprise = {
  name: "Enterprise",
  eyebrow: "Enterprise plan",
  title: "Built around your business",
  body: "Designed for high-volume businesses and agencies, the Enterprise plan is custom tailored to each account. We price it to fit your volume and protect your margins, with the full platform and a team behind it.",
  points: [
    "Dedicated account manager",
    "Unlimited users, contacts and storage",
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
    starter: "$0.0375",
    professional: "$0.0375",
    agencies: "$0.030",
    wholesale: "$0.015",
  },
  {
    label: "Voice",
    unit: "per minute",
    starter: "$0.0625",
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

/** Feature comparison table (Pricing page). Column order: Starter, Professional, Agencies. */
export type CompareCell = string | boolean;
export type CompareRow = { label: string; tip?: string; cells: [CompareCell, CompareCell, CompareCell] };
export type CompareGroup = { title: string; rows: CompareRow[] };

export const compare: CompareGroup[] = [
  {
    title: "Platform",
    rows: [
      { label: "Users", cells: ["1", "5", "10"] },
      { label: "Contacts", cells: ["2,500", "10,000", "50,000"] },
      { label: "Storage", cells: ["10 GB", "50 GB", "100 GB"] },
      { label: "Monthly usage credits", tip: "Credits applied automatically to SMS and voice usage each billing cycle.", cells: ["$5", "$15", "$30"] },
    ],
  },
  {
    title: "Modules",
    rows: [
      { label: "Core CRM (contacts, companies, conversations)", cells: [true, true, true] },
      { label: "Sales (calendar, pipelines, opportunities)", cells: [true, true, true] },
      { label: "Web Presence (forms, websites, files)", cells: [true, true, true] },
      { label: "Financials (invoices, estimates, documents)", cells: [false, true, true] },
      { label: "Marketing (campaigns, broadcasts, social)", cells: [false, true, true] },
      { label: "Automation (workflows, reputation)", cells: [false, true, true] },
      { label: "Advanced Tools (reporting, products, dispatch)", cells: [false, false, true] },
      { label: "Data Migration (HighLevel import, MCP)", cells: [false, false, true] },
      { label: "White-label sub-accounts (unlimited)", tip: "Brand client accounts as your own, with no per-account fee.", cells: [false, false, true] },
      { label: "SaaS Reseller (usage rebilling + resale rights)", tip: "Resell Mercury CRM under your own brand and rebill client usage at your own markup.", cells: [false, false, true] },
    ],
  },
  {
    title: "Phone System",
    rows: [
      { label: "AI Front Desk (inbound)", tip: "AI assistants answer every inbound call, book appointments, and follow up.", cells: [true, true, true] },
      { label: "Outbound dialer (10 lines per rep)", tip: "Parallel dialer that runs up to 10 lines per rep at once, for follow-ups, reminders, and sales outreach.", cells: [true, true, true] },
      { label: "Local phone numbers", cells: [true, true, true] },
      { label: "Call recording & transcripts", cells: [true, true, true] },
      { label: "SMS messaging", cells: [true, true, true] },
      { label: "40+ languages", cells: [true, true, true] },
      { label: "DNC list, consent checks & calling hours", tip: "In-system DNC list, automatic consent checks, and calling-hour enforcement before every dial. Scrub lists against the National DNC Registry before uploading.", cells: [true, true, true] },
      { label: "A2P 10DLC registration", tip: "Business SMS campaign registration handled for you.", cells: [true, true, true] },
    ],
  },
];

export const pricingFaq = [
  { q: "What happens when my usage credits run out?", a: "Usage keeps working without interruption and bills at your plan's published per-segment and per-minute rates. Every charge is itemized on your invoice, so there are never surprise fees." },
  { q: "Can I change tiers later?", a: "Yes. Upgrade or downgrade anytime to match your business. Changes take effect immediately with no service interruption." },
  { q: "Is there a setup fee?", a: "No setup fees and no long-term contracts. Monthly billing, cancel anytime." },
  { q: "Do you help with A2P 10DLC registration?", a: "Yes. Business SMS requires registered campaigns, and our team handles your A2P 10DLC registration for you so your messages get delivered." },
  { q: "Does every plan include a CRM? Can I keep my current one?", a: "Yes. Every plan includes Mercury CRM at no extra cost: contacts, pipelines, conversations and automations. If you already run on HubSpot, Salesforce, Pipedrive, Zoho CRM or another system, you can keep it. We connect the AI front desk and dialer to your existing CRM instead." },
  { q: "Is outbound dialing included on every tier?", a: "Yes. Every tier includes the full dialer: outbound calling, local numbers, call recording, transcripts, and SMS. Higher tiers add users, contacts, modules, and better usage rates." },
  { q: "How does annual billing work?", a: "Pay annually and get 2 months free. Starter is $970/yr, Professional $2,970/yr and Agencies $3,970/yr. Enterprise is quoted to fit your account." },
];

export const whyChoose = [
  { title: "One Platform, One Bill", body: "CRM, phone system, dialer, and AI assistants in a single subscription. No stitching vendors together." },
  { title: "Transparent Usage Pricing", body: "Published per-segment and per-minute rates on every tier. Competitors hide overages until the invoice; we print ours." },
  { title: "Live in Days, Not Months", body: "AI assistants trained on your business, numbers provisioned, CRM configured. No complex installations." },
  { title: "Built-In Compliance Tools", body: "An in-system DNC list, automatic consent checks, calling-hour enforcement, automatic opt-outs, and A2P 10DLC registration handled." },
  { title: "Scales to White-Label", body: "Grow from a single location to a resold SaaS product. Agencies unlocks unlimited white-label sub-accounts, usage rebilling and SaaS resale." },
  { title: "Real Human Backup", body: "AI handles the routine; your team handles the exceptions. Call transfer and routing keep humans one tap away." },
];
