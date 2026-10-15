/**
 * Competitor comparison data for the /vs/[slug] pages.
 * Every page shares one layout (see components/ComparePage.tsx); only this data changes.
 *
 * Copy rules: no em dashes, no invented statistics, no testimonial quotes,
 * no customer names. Competitor claims are limited to verified facts or
 * honest markers ("Not native", "Add-on", "-").
 */

export type CompareCell = string | boolean;

export type CompareRow = {
  label: string;
  /** Mercury column: true renders a green check, a string renders text. */
  mercury: CompareCell;
  /** Competitor column: strings render as text, true/false render check/dash. */
  competitor: CompareCell;
};

export type Differentiator = {
  title: string;
  body: string;
};

export type Comparison = {
  slug: string;
  competitor: string;
  /** Brand color used to tint the competitor's column. */
  brandColor: string;
  /** If true, the competitor header cell uses dark background with light text. */
  darkHeader?: boolean;
  /** One-line subhead for the hero. */
  tagline: string;
  /** Short price summary for the pricing strip. */
  competitorPrice: string;
  differentiators: Differentiator[];
  rows: CompareRow[];
  /** 2-3 sentence close, shown above the final CTA. */
  verdict: string;
};

const mercuryRows = (competitorCells: CompareCell[]): CompareRow[] => [
  { label: "AI voice agents", mercury: true, competitor: competitorCells[0] },
  { label: "Outbound dialer", mercury: true, competitor: competitorCells[1] },
  { label: "Dispatch", mercury: true, competitor: competitorCells[2] },
  { label: "Usage rebilling for agencies", mercury: true, competitor: competitorCells[3] },
  { label: "Unlimited sub-accounts", mercury: "Pro and up", competitor: competitorCells[4] },
  { label: "Published usage rates", mercury: true, competitor: competitorCells[5] },
  { label: "MCP access", mercury: true, competitor: competitorCells[6] },
  { label: "Setup fees", mercury: "None", competitor: competitorCells[7] },
  { label: "White-glove migration", mercury: true, competitor: competitorCells[8] },
];

const standardCells: CompareCell[] = [
  "Not native",
  "Not native",
  "Not native",
  "Not available",
  "-",
  "-",
  "Not available",
  "-",
  "-",
];

export const comparisons: Comparison[] = [
  {
    slug: "gohighlevel",
    competitor: "GoHighLevel",
    brandColor: "#F97316",
    tagline:
      "The platform agencies are leaving. Mercury gives you more sub-accounts, real AI voice, and usage you can mark up, for less.",
    competitorPrice: "Starts at $97/mo",
    differentiators: [
      {
        title: "Keep your usage margin",
        body: "At $297 a month, GoHighLevel agencies cannot mark up client usage and end up absorbing roughly $800 a month in costs. Mercury Professional at $299 includes usage rebilling, so you charge your clients instead of eating the cost.",
      },
      {
        title: "AI voice without the per-agent tax",
        body: "GoHighLevel charges about $50 to $97 a month per AI employee, per sub-account. Mercury includes AI voice, AI automation, and AI agentic on every tier, with no per-agent fees.",
      },
      {
        title: "Dispatch, already shipped",
        body: "Technicians tap \u201cI\u2019m on my way\u201d and AI notifies the customer and handles replies. GoHighLevel announced dispatch but has not shipped it.",
      },
      {
        title: "More room to grow",
        body: "Mercury Starter includes 5 sub-accounts for $99 a month. GoHighLevel Starter gives you 3 sub-accounts for $97.",
      },
    ],
    rows: mercuryRows([
      "$50-$97/mo per agent, per sub-account",
      "-",
      "Announced, not shipped",
      "Not at the $297 tier",
      "3 on the Starter plan",
      "-",
      "-",
      "-",
      "-",
    ]),
    verdict:
      "GoHighLevel built the category, but agencies pay for it twice: once in the subscription and again in usage they cannot mark up. Mercury matches the platform, adds AI voice on every tier, ships dispatch today, and lets you keep your usage margin. That is why agencies switch.",
  },
  {
    slug: "hubspot",
    competitor: "HubSpot",
    brandColor: "#FF7A59",
    tagline:
      "Enterprise CRM pricing without the enterprise phone system. Mercury answers, dials, and books for a flat monthly rate.",
    competitorPrice: "Per-user pricing that scales steeply",
    differentiators: [
      {
        title: "Flat rates beat per-seat math",
        body: "HubSpot pricing grows with every seat you add. Mercury plans are flat monthly rates with unlimited users on every tier, so growth does not raise your bill.",
      },
      {
        title: "A phone system, not a plugin",
        body: "Mercury includes a full outbound dialer, AI front desk, and 40+ languages natively. With HubSpot, voice is an integration, not a foundation.",
      },
      {
        title: "AI that does the work",
        body: "AI voice answers every call, AI automation runs your follow-up, and AI agentic handles tasks end to end. No add-on required, on any tier.",
      },
      {
        title: "Built for agencies to resell",
        body: "White-label sub-accounts, usage rebilling, and SaaS resale rights turn the platform into your product. HubSpot was not built for that model.",
      },
    ],
    rows: mercuryRows(standardCells),
    verdict:
      "HubSpot is a strong CRM for large teams with large budgets. If you need the phones answered, the dialer running, and AI working your pipeline around the clock, Mercury delivers it for one flat rate instead of per-seat enterprise pricing.",
  },
  {
    slug: "activecampaign",
    competitor: "ActiveCampaign",
    brandColor: "#356AE6",
    tagline:
      "Email automation is not a phone system. Mercury adds the AI voice, dialer, and dispatch your follow-up is missing.",
    competitorPrice: "Per-contact pricing tiers",
    differentiators: [
      {
        title: "Voice, not just email",
        body: "ActiveCampaign automates email beautifully. Mercury adds AI voice agents that answer every call 24/7, a full outbound dialer, and SMS follow-up in the same platform.",
      },
      {
        title: "Dispatch for field teams",
        body: "Home service businesses get job tracking, technician status updates, and AI customer notifications. Email automation cannot do that.",
      },
      {
        title: "Agencies keep the margin",
        body: "Unlimited white-label sub-accounts and usage rebilling let you resell the platform. ActiveCampaign was built for single businesses, not agency resale.",
      },
      {
        title: "No per-contact squeeze",
        body: "Mercury plans include generous contact capacity with unlimited users. Your bill does not climb every time your list grows.",
      },
    ],
    rows: mercuryRows(standardCells),
    verdict:
      "ActiveCampaign remains a solid choice for email automation. When your business runs on the phone, Mercury gives you the AI front desk, the dialer, and dispatch in one subscription, without per-contact pricing pressure.",
  },
  {
    slug: "clickfunnels",
    competitor: "ClickFunnels",
    brandColor: "#1B3A5C",
    tagline:
      "Funnels capture leads. Mercury answers them, calls them back, and books the job.",
    competitorPrice: "Funnel-builder pricing tiers",
    differentiators: [
      {
        title: "After the opt-in",
        body: "ClickFunnels builds the page that captures the lead. Mercury's AI voice answers when they call, the dialer follows up, and automation books them into your calendar.",
      },
      {
        title: "A real CRM underneath",
        body: "Pipelines, contacts, conversations, and workflows live in Mercury natively. No stitching a funnel tool to a separate CRM.",
      },
      {
        title: "AI on every tier",
        body: "AI voice, AI automation, and AI agentic are included from Starter up. Advanced API and MCP access come standard too.",
      },
      {
        title: "Dispatch for service businesses",
        body: "Job tracking and technician notifications built in, ready for home services out of the box.",
      },
    ],
    rows: mercuryRows(standardCells),
    verdict:
      "ClickFunnels is built to capture leads. Mercury is built to convert them: every call answered, every lead followed up, every job booked, with dispatch to run the work.",
  },
  {
    slug: "keap",
    competitor: "Keap",
    brandColor: "#00B373",
    tagline:
      "Small-business CRM with a real phone system attached. Mercury answers, dials, and automates for one flat rate.",
    competitorPrice: "Per-user pricing tiers",
    differentiators: [
      {
        title: "Native AI voice",
        body: "Keap automates follow-up after the call. Mercury's AI front desk answers the call itself, 24/7, qualifies the caller, and books the job.",
      },
      {
        title: "Full outbound dialer",
        body: "Parallel dialing, local numbers, call recording, and transcripts are native to Mercury. No add-on, no integration.",
      },
      {
        title: "Dispatch included",
        body: "Technician status updates trigger AI customer notifications automatically. Built for home services from day one.",
      },
      {
        title: "Flat pricing, unlimited users",
        body: "Mercury does not charge per seat. Add your whole team without watching the bill climb.",
      },
    ],
    rows: mercuryRows(standardCells),
    verdict:
      "Keap serves small businesses with solid automation. Mercury adds what small service businesses actually run on: answered phones, an outbound dialer, and dispatch, all for a flat monthly rate.",
  },
  {
    slug: "linktree",
    competitor: "Linktree",
    brandColor: "#43E660",
    tagline:
      "A link page is not a business platform. Mercury gives you the CRM, phones, AI, and dispatch behind the link.",
    competitorPrice: "Link-in-bio pricing tiers",
    differentiators: [
      {
        title: "Beyond the bio link",
        body: "Linktree organizes your links. Mercury runs your business: CRM, AI voice agents, dialer, automation, and dispatch in one subscription.",
      },
      {
        title: "Capture and convert",
        body: "Your link page sends visitors somewhere. Mercury answers when they call, follows up by text, and books them automatically.",
      },
      {
        title: "Built for local services",
        body: "Pipelines for jobs, calendars with service types, closed-day holiday handling, and technician dispatch. Made for the trades.",
      },
      {
        title: "Agencies can resell it",
        body: "White-label sub-accounts and usage rebilling turn Mercury into your own SaaS product.",
      },
    ],
    rows: mercuryRows(standardCells),
    verdict:
      "Linktree does one job well: organizing your links. When you need the business behind the link, Mercury brings the CRM, the AI front desk, the dialer, and dispatch together for a flat monthly rate.",
  },
  {
    slug: "kartra",
    competitor: "Kartra",
    brandColor: "#1E88E5",
    tagline:
      "Marketing all-in-one is not operations all-in-one. Mercury adds the phones, AI voice, and dispatch.",
    competitorPrice: "Tiered platform pricing",
    differentiators: [
      {
        title: "Voice as a foundation",
        body: "Kartra covers pages, email, and memberships. Mercury adds native AI voice agents, a full outbound dialer, and 40+ languages.",
      },
      {
        title: "Dispatch for the field",
        body: "Job tracking, technician updates, and AI customer notifications come standard on Mercury's agency tier.",
      },
      {
        title: "AI on every tier",
        body: "AI voice, automation, and agentic capabilities plus advanced API and MCP access, included from Starter up.",
      },
      {
        title: "Resell it as yours",
        body: "White-label sub-accounts, usage rebilling, and SaaS resale rights make Mercury an agency product, not just a tool.",
      },
    ],
    rows: mercuryRows(standardCells),
    verdict:
      "Kartra bundles marketing tools for creators and small businesses. Mercury is the operations layer underneath: every call answered, every lead worked, every job dispatched, with AI doing the heavy lifting.",
  },
  {
    slug: "vendasta",
    competitor: "Vendasta",
    brandColor: "#7C3AED",
    tagline:
      "A marketplace of tools still needs someone to answer the phone. Mercury's AI does it natively.",
    competitorPrice: "Per-product platform pricing",
    differentiators: [
      {
        title: "Native AI voice",
        body: "Vendasta assembles third-party tools for agencies. Mercury's AI front desk, dialer, and automation are built into one platform, not bolted on.",
      },
      {
        title: "Usage you can mark up",
        body: "Rebill SMS, voice, and AI usage at your own rates on Mercury Professional and up. Your margin stays yours.",
      },
      {
        title: "Dispatch, shipped",
        body: "Technician workflows with AI customer notifications, ready for home service clients today.",
      },
      {
        title: "One bill, published rates",
        body: "Flat monthly plans with published SMS and voice rates. No per-product pricing maze.",
      },
    ],
    rows: mercuryRows(standardCells),
    verdict:
      "Vendasta gives agencies a catalog of tools to resell. Mercury gives them one platform that answers the phones, runs the follow-up, and dispatches the work, with usage margins they keep.",
  },
  {
    slug: "sharpspring",
    competitor: "SharpSpring",
    brandColor: "#0891B2",
    tagline:
      "Marketing automation without the phones. Mercury adds AI voice, a dialer, and dispatch to the stack.",
    competitorPrice: "Per-user agency pricing",
    differentiators: [
      {
        title: "Voice, native",
        body: "SharpSpring automates marketing after contact. Mercury's AI voice agents make first contact: answering every call, qualifying, and booking 24/7.",
      },
      {
        title: "Full outbound dialer",
        body: "Parallel dialing with local numbers, recording, and transcripts built in. No integration required.",
      },
      {
        title: "Dispatch for services",
        body: "Job tracking and AI-driven technician notifications, built for home service businesses.",
      },
      {
        title: "Flat rates, unlimited users",
        body: "No per-seat pricing. Mercury plans stay flat as your team and client list grow.",
      },
    ],
    rows: mercuryRows(standardCells),
    verdict:
      "SharpSpring handles marketing automation for agencies. Mercury handles the conversations: AI answering every call, a dialer working every lead, and dispatch running every job.",
  },
  {
    slug: "klaviyo",
    competitor: "Klaviyo",
    brandColor: "#1A1A1A",
    darkHeader: true,
    tagline:
      "Email and SMS marketing is not a phone call answered. Mercury's AI picks up.",
    competitorPrice: "Usage-based email and SMS pricing",
    differentiators: [
      {
        title: "The call, answered",
        body: "Klaviyo sends the campaign. When the customer calls back, Mercury's AI front desk answers, qualifies, and books, 24/7.",
      },
      {
        title: "A dialer, not just broadcasts",
        body: "Full outbound dialing with local presence, recording, and transcripts, native to the platform.",
      },
      {
        title: "CRM underneath it all",
        body: "Contacts, pipelines, conversations, and workflows in one place. Marketing and operations share the same record.",
      },
      {
        title: "Dispatch for the field",
        body: "Technician status updates and AI customer notifications for service businesses.",
      },
    ],
    rows: mercuryRows(standardCells),
    verdict:
      "Klaviyo owns the campaign. Mercury owns what happens next: the answered call, the booked job, and the dispatched technician, all tied to the same contact record.",
  },
  {
    slug: "salesforce",
    competitor: "Salesforce",
    brandColor: "#00A1E0",
    tagline:
      "Enterprise CRM budgets were not built for local business. Mercury delivers the phones, AI, and automation for a flat rate.",
    competitorPrice: "Enterprise per-user pricing",
    differentiators: [
      {
        title: "Flat rate vs per seat",
        body: "Salesforce pricing multiplies with every user. Mercury plans are flat monthly rates with unlimited users, so the bill stays predictable.",
      },
      {
        title: "Phone system included",
        body: "AI front desk, full outbound dialer, and 40+ languages are native to Mercury. With Salesforce, voice is another integration and another invoice.",
      },
      {
        title: "Live in days, not quarters",
        body: "AI assistants trained on your business, numbers provisioned, CRM configured. No certified consultants, no six-month implementation.",
      },
      {
        title: "AI on every tier",
        body: "AI voice, automation, and agentic capabilities plus API and MCP access come standard, not as enterprise add-ons.",
      },
    ],
    rows: mercuryRows(standardCells),
    verdict:
      "Salesforce is built for enterprises with implementation budgets to match. Mercury is built for businesses that run on the phone: answered calls, worked leads, and dispatched jobs, live in days for a flat monthly rate.",
  },
  {
    slug: "zoho",
    competitor: "Zoho",
    brandColor: "#0060A9",
    tagline:
      "A giant suite of apps is not a phone system. Mercury answers your calls, dials your leads, and dispatches your techs out of the box.",
    competitorPrice: "Per-user pricing across 45+ apps",
    differentiators: [
      {
        title: "Built for the phone, not the suite",
        body: "Zoho CRM is one app inside a 45+ product suite. Mercury is built around the phone: AI voice agents, a full outbound dialer, and dispatch, native on every plan.",
      },
      {
        title: "Flat rate vs per seat",
        body: "Zoho pricing multiplies with every user and every add-on. Mercury plans are flat monthly rates, so the bill stays predictable as you grow.",
      },
      {
        title: "Live in days, not projects",
        body: "Numbers provisioned, AI assistants trained on your business, CRM configured. No implementation project, no consultants to get the basics working.",
      },
      {
        title: "Agencies keep their margin",
        body: "Mercury Professional includes usage rebilling, so agencies mark up phone, SMS, email, and AI instead of absorbing the cost. Zoho offers no equivalent.",
      },
    ],
    rows: mercuryRows(standardCells),
    verdict:
      "Zoho is a sprawling suite that does a little of everything. Mercury does one thing better than anyone: it runs the phones for local and service businesses, with AI voice, dialer, and dispatch included at a flat monthly rate.",
  },
];

export function getComparison(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}
