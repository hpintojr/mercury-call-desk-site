/**
 * Competitor comparison data for the /vs/[slug] pages.
 * Every page shares one layout (see components/ComparePage.tsx); only this data changes.
 *
 * Copy rules: no em dashes, no invented statistics, no testimonial quotes,
 * no customer names. Every competitor cell and claim must trace to a public source
 * listed in that entry's `sources` (full notes with confidence levels live in
 * /mnt/project-files/research/vs-pages/<slug>.md). Re-check before changing a cell.
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
  /**
   * Competitor logo in /public/vs-logos/ shown in the table header. `wordmark` = the logo
   * already spells the name, so the text label is visually hidden.
   */
  /** onDark: the file is a light/white logo, so it sits on a dark pill instead of white. */
  logo?: { src: string; wordmark?: boolean; onDark?: boolean };
  /** Where the competitor facts on this page come from; shown under the table. */
  sources?: { label: string; url: string }[];
  /** Month the competitor facts were last checked, e.g. "October 2026". */
  checked?: string;
  /** One-line subhead for the hero. */
  tagline: string;
  /** Short price summary for the pricing strip. */
  competitorPrice: string;
  differentiators: Differentiator[];
  rows: CompareRow[];
  /** 2-3 sentence close, shown above the final CTA. */
  verdict: string;
};

/**
 * Mercury's side of every table. Tier-gated items name the lowest plan that includes them
 * (see src/content/pricing.ts) so the page never implies a feature is on every plan.
 */
const mercuryRows = (competitorCells: CompareCell[]): CompareRow[] => [
  { label: "AI voice agents", mercury: true, competitor: competitorCells[0] },
  { label: "Outbound dialer", mercury: "Native, 10 lines per account", competitor: competitorCells[1] },
  { label: "Dispatch", mercury: "Agencies and up", competitor: competitorCells[2] },
  { label: "Usage rebilling for agencies", mercury: "Professional and up", competitor: competitorCells[3] },
  { label: "Unlimited sub-accounts", mercury: "Professional and up", competitor: competitorCells[4] },
  { label: "Published usage rates", mercury: true, competitor: competitorCells[5] },
  { label: "MCP access", mercury: true, competitor: competitorCells[6] },
  { label: "Setup fees", mercury: "None", competitor: competitorCells[7] },
  { label: "Migration help", mercury: "Agencies and up", competitor: competitorCells[8] },
];

/** Competitor facts below were checked against public sources on this date. Research notes: /mnt/project-files/research/vs-pages/. */
const CHECKED = "October 2026";

export const comparisons: Comparison[] = [
  {
    slug: "gohighlevel",
    logo: { src: "/vs-logos/gohighlevel.svg", wordmark: true, onDark: true },
    competitor: "GoHighLevel",
    brandColor: "#2896FB",
    tagline:
      "The same all-in-one idea, with AI voice included instead of billed per client, and usage markup without the $497 plan.",
    competitorPrice: "From $97/mo",
    differentiators: [
      {
        title: "Mark up usage without the $497 plan",
        body: "On GoHighLevel's $297 Unlimited plan, phone and email usage is rebilled to clients at cost. Marking it up takes Agency Pro at $497. Mercury Professional at $299 includes usage rebilling at your own markup.",
      },
      {
        title: "AI voice without the per-client add-on",
        body: "GoHighLevel's AI Employee is an add-on at $50 or $97 a month for each sub-account that uses it, plus usage. Mercury includes the AI front desk on every plan.",
      },
      {
        title: "Dispatch built in",
        body: "GoHighLevel points field-service businesses to a Jobber integration or marketplace apps. Mercury Agencies includes dispatch: job tracking, technician status updates, and AI customer notifications.",
      },
      {
        title: "More room to start",
        body: "Mercury Starter includes 5 sub-accounts for $99 a month. GoHighLevel Starter includes 3 sub-accounts for $97.",
      },
    ],
    rows: mercuryRows([
      "Add-on, $50 or $97/mo per sub-account",
      "Web dialer, no parallel lines",
      "Via Jobber or marketplace apps",
      "At cost on $297; markup on $497",
      "3 on Starter; unlimited from $297",
      true,
      true,
      "None listed",
      "Free concierge migration",
    ]),
    verdict:
      "GoHighLevel built the category and covers a lot of ground. Mercury matches the platform, includes AI voice and a parallel dialer instead of selling them per client, adds dispatch, and lets agencies mark up usage from the $299 plan.",
    sources: [
      { label: "GoHighLevel pricing", url: "https://www.gohighlevel.com/pricing" },
      { label: "LC Phone rates", url: "https://help.gohighlevel.com/en/support/solutions/articles/48001223556" },
      { label: "Phone dialer overview", url: "https://help.gohighlevel.com/support/solutions/articles/155000005807-the-phone-dialer-overview" },
      { label: "HighLevel MCP", url: "https://help.gohighlevel.com/support/solutions/articles/155000008391-highlevel-mcp-for-anthropic-increased-scopes" },
    ],
    checked: CHECKED,
  },
  {
    slug: "hubspot",
    competitor: "HubSpot",
    brandColor: "#FF7A59",
    tagline:
      "HubSpot charges per seat and per onboarding. Mercury answers, dials, and books for a flat monthly rate with unlimited users.",
    competitorPrice: "Free plan; paid seats from $15/mo",
    differentiators: [
      {
        title: "Flat rates beat per-seat math",
        body: "HubSpot Sales Hub is priced per seat, from Starter through Enterprise. Mercury plans are flat monthly rates with unlimited users on every tier, so adding people does not raise your bill.",
      },
      {
        title: "No onboarding fee",
        body: "HubSpot's Professional and Enterprise hubs carry one-time onboarding fees of $1,500 to $7,000. Mercury has no setup fee on any plan.",
      },
      {
        title: "AI voice that answers and calls",
        body: "HubSpot's voice agent is a beta that takes inbound calls only, on Pro and up, billed in credits. Mercury's AI front desk answers inbound calls and runs outbound follow-up on every plan.",
      },
      {
        title: "A power dialer without Enterprise seats",
        body: "HubSpot's power dialer needs Sales Hub Enterprise. Mercury's dialer runs up to 10 lines per account on every plan.",
      },
    ],
    rows: mercuryRows([
      "Beta, inbound only, Pro and up",
      "Calling included; power dialer Enterprise",
      "Via marketplace apps",
      "Not offered",
      "Not offered",
      "Credits sheet, no SMS rate",
      true,
      "$1,500 to $7,000 onboarding",
      "In paid onboarding or partners",
    ]),
    verdict:
      "HubSpot is a strong CRM for teams that budget per seat. If you need the phones answered, a dialer running, and AI working your pipeline, Mercury delivers it at a flat rate with no onboarding fee.",
    logo: { src: "/vs-logos/hubspot.svg", wordmark: true },
    sources: [
      { label: "Sales Hub pricing", url: "https://blog.hubspot.com/sales/hubspot-sales-hub-pricing" },
      { label: "Customer Agent voice", url: "https://knowledge.hubspot.com/calling/set-up-customer-agent-voice" },
      { label: "Power dialer", url: "https://knowledge.hubspot.com/calling/use-the-sales-power" },
      { label: "Remote MCP server", url: "https://developers.hubspot.com/changelog/remote-hubspot-mcp-server-is-now-generally-available" },
    ],
    checked: CHECKED,
  },
  {
    slug: "activecampaign",
    competitor: "ActiveCampaign",
    brandColor: "#004CFF",
    tagline:
      "Email automation is not a phone system. Mercury adds the AI voice, dialer, and dispatch your follow-up is missing.",
    competitorPrice: "From $15/mo for 1,000 contacts",
    differentiators: [
      {
        title: "Voice, not just email",
        body: "ActiveCampaign has no native calling or AI voice; both come from third-party apps. Mercury includes an AI front desk that answers every call 24/7, a full outbound dialer, and SMS follow-up.",
      },
      {
        title: "One agency plan, not one bill per client",
        body: "ActiveCampaign's Agency Program resells white-label accounts, each billed separately, with no usage rebilling. Mercury Professional includes unlimited white-label sub-accounts and usage rebilling.",
      },
      {
        title: "SMS priced in dollars",
        body: "ActiveCampaign SMS is a paid add-on priced in credits. Mercury publishes its SMS and voice rates in dollars.",
      },
      {
        title: "No per-contact squeeze",
        body: "ActiveCampaign prices by contact band. Mercury includes unlimited contacts and users on every plan.",
      },
    ],
    rows: mercuryRows([
      "Via third-party apps",
      "Via third-party apps",
      "Not offered",
      "Not offered",
      "White-label accounts, billed each",
      "SMS credits, no dollar rate",
      true,
      "None",
      "Free migration",
    ]),
    verdict:
      "ActiveCampaign remains a solid choice for email automation. When your business runs on the phone, Mercury gives you the AI front desk, the dialer, and dispatch in one subscription, with unlimited contacts.",
    logo: { src: "/vs-logos/activecampaign.svg", wordmark: true },
    sources: [
      { label: "ActiveCampaign pricing", url: "https://www.activecampaign.com/pricing" },
      { label: "Agency Program pricing", url: "https://help.activecampaign.com/hc/en-us/articles/115001351324-Agency-Program-pricing" },
      { label: "SMS credits", url: "https://help.activecampaign.com/hc/en-us/articles/218789977-SMS-Pricing-credits-and-From-phone-numbers" },
      { label: "MCP server", url: "https://help.activecampaign.com/hc/en-us/articles/22566179229596" },
    ],
    checked: CHECKED,
  },
  {
    slug: "clickfunnels",
    competitor: "ClickFunnels",
    brandColor: "#080436",
    darkHeader: true,
    logo: { src: "/vs-logos/clickfunnels.svg", wordmark: true },
    tagline:
      "Funnels capture leads. Mercury answers them, calls them back, and books the job.",
    competitorPrice: "From $97/mo",
    differentiators: [
      {
        title: "After the opt-in",
        body: "ClickFunnels builds the page that captures the lead. Mercury's AI voice answers when they call, the dialer follows up, and automation books them into your calendar.",
      },
      {
        title: "Phone and texting built in",
        body: "ClickFunnels has no native calling, and its SMS needs your own Twilio or Bandwidth account. Mercury includes numbers, calling, texting, and published rates.",
      },
      {
        title: "More client accounts",
        body: "ClickFunnels plans include 1 to 20 workspaces. Mercury Professional includes unlimited white-label sub-accounts.",
      },
      {
        title: "Dispatch for service businesses",
        body: "Mercury Agencies adds job tracking and technician notifications, ready for home services out of the box.",
      },
    ],
    rows: mercuryRows([
      "Not offered",
      "Not offered",
      "Not offered",
      "Not offered",
      "1 to 20 workspaces by plan",
      "Bring your own Twilio",
      true,
      "None listed",
      "Not listed",
    ]),
    verdict:
      "ClickFunnels is built to capture leads, and it has a CRM to hold them. Mercury is built to convert them by phone: every call answered, every lead followed up, every job booked, with dispatch to run the work.",
    sources: [
      { label: "ClickFunnels pricing", url: "https://www.clickfunnels.com/pricing" },
      { label: "MessageHub SMS setup", url: "https://support.myclickfunnels.com/docs/messagehub-sms-chat-inbox-configuration/" },
      { label: "ClickFunnels MCP", url: "https://support.myclickfunnels.com/docs/clickfunnels-mcp-server-beta-1/" },
    ],
    checked: CHECKED,
  },
  {
    slug: "keap",
    logo: { src: "/vs-logos/keap.svg", wordmark: true },
    competitor: "Keap",
    brandColor: "#36A635",
    tagline:
      "Small-business CRM with a real phone system attached. Mercury answers, dials, and automates with no required setup fee.",
    competitorPrice: "From $249/mo billed annually",
    differentiators: [
      {
        title: "AI that answers the phone",
        body: "Keap's AI writes emails and builds campaigns. Mercury's AI front desk answers the call itself, 24/7, qualifies the caller, and books the job.",
      },
      {
        title: "A real outbound dialer",
        body: "Keap's business line supports manual calling. Mercury's dialer runs up to 10 lines per account with local numbers, recording, and transcripts.",
      },
      {
        title: "No required implementation fee",
        body: "Keap requires a $500 implementation package. Mercury has no setup fee on any plan.",
      },
      {
        title: "Unlimited users",
        body: "Keap includes 2 users and charges $39 a month for each additional user. Mercury includes unlimited users on every plan.",
      },
    ],
    rows: mercuryRows([
      "Not offered",
      "Manual calling only",
      "Not offered",
      "Not offered",
      "Not offered",
      true,
      "Third-party only",
      "$500 required implementation",
      "In implementation package",
    ]),
    verdict:
      "Keap serves small businesses with solid automation. Mercury adds what service businesses run on: answered phones, a parallel dialer, and dispatch, with unlimited users and no required setup fee.",
    sources: [
      { label: "Keap pricing", url: "https://keap.com/pricing" },
      { label: "Keap business line", url: "https://keap.com/solutions/keap-business-line" },
      { label: "Implementation services", url: "https://keap.com/resources/implementation-services" },
    ],
    checked: CHECKED,
  },
  {
    slug: "linktree",
    competitor: "Linktree",
    brandColor: "#43E55E",
    tagline:
      "Linktree organizes your links. Mercury runs the business behind them: the CRM, the phones, AI, and dispatch.",
    competitorPrice: "Free plan; paid plans available",
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
        body: "Pipelines for jobs, calendars with service types, closed-day holiday handling, and technician dispatch on the Agencies plan.",
      },
      {
        title: "Use them together",
        body: "Keep Linktree for your social profiles and point the links at Mercury forms, booking pages, and your AI-answered number.",
      },
    ],
    rows: mercuryRows([
      "Not offered",
      "Not offered",
      "Not offered",
      "Not offered",
      "Multi-profile on sales-led plans",
      "No phone or SMS usage",
      "None found",
      "None listed",
      "Not offered",
    ]),
    verdict:
      "Linktree is a link-in-bio tool, not a CRM or phone system, so most businesses use it alongside one. When you need the business behind the link, Mercury brings the CRM, the AI front desk, the dialer, and dispatch together.",
    logo: { src: "/vs-logos/linktree.svg" },
    sources: [{ label: "Linktree pricing", url: "https://linktr.ee/s/pricing" }],
    checked: CHECKED,
  },
  {
    slug: "kartra",
    competitor: "Kartra",
    brandColor: "#26BDDE",
    logo: { src: "/vs-logos/kartra.svg", wordmark: true },
    tagline:
      "Marketing all-in-one is not operations all-in-one. Mercury adds the phones, AI voice, and dispatch.",
    competitorPrice: "From $52/mo billed annually",
    differentiators: [
      {
        title: "Voice as a foundation",
        body: "Kartra covers pages, email, and memberships, and its AI writes copy. Mercury adds AI voice agents that answer calls, a full outbound dialer, and 40+ languages.",
      },
      {
        title: "Texting without your own Twilio",
        body: "Kartra SMS runs through your own Twilio, Plivo, or Vonage account. Mercury includes numbers and texting with published rates.",
      },
      {
        title: "Usage margin, not just seat resale",
        body: "Kartra Agency resells client accounts at a discount. Mercury Professional adds usage rebilling, so you mark up calls and texts too.",
      },
      {
        title: "Dispatch for the field",
        body: "Job tracking, technician updates, and AI customer notifications come with Mercury Agencies.",
      },
    ],
    rows: mercuryRows([
      "Not offered",
      "Not offered",
      "Not offered",
      "Subscription markup only",
      "Paid client accounts, 40% off",
      "Bring your own Twilio",
      "None found",
      "None listed",
      "Not listed",
    ]),
    verdict:
      "Kartra bundles marketing tools for creators and small businesses. Mercury is the operations layer underneath: every call answered, every lead worked, every job dispatched.",
    sources: [
      { label: "Kartra pricing", url: "https://kartra.com/plans-and-pricing/" },
      { label: "Kartra Agency", url: "https://support.kartra.com/support/solutions/articles/153000180797-intro-to-kartra-agency" },
      { label: "Kartra SMS setup", url: "https://support.kartra.com/support/solutions/articles/153000169589-sms-twilio" },
    ],
    checked: CHECKED,
  },
  {
    slug: "vendasta",
    logo: { src: "/vs-logos/vendasta.svg", wordmark: true, onDark: true },
    competitor: "Vendasta",
    brandColor: "#072338",
    darkHeader: true,
    tagline:
      "Vendasta sells agencies a catalog with monthly minimums. Mercury is one platform with AI voice, a dialer, and dispatch built in.",
    competitorPrice: "$0 platform, $99/mo minimum spend",
    differentiators: [
      {
        title: "AI voice included, not an add-on",
        body: "Vendasta's AI Voice Receptionist comes with Conversations AI Premium at $79 a month. Mercury includes the AI front desk on every plan.",
      },
      {
        title: "No annual contract",
        body: "Vendasta's Professional and Premium plans carry 1-year contracts and $499 or $999 monthly minimums. Mercury plans are month to month.",
      },
      {
        title: "A native dialer",
        body: "Vendasta connects outbound calling through a Kixie integration. Mercury's dialer is native, with up to 10 lines per account.",
      },
      {
        title: "MCP access today",
        body: "Vendasta lists an official MCP server as planned. Mercury includes MCP access on every plan now.",
      },
    ],
    rows: mercuryRows([
      "Add-on, $79/mo",
      "Via Kixie integration",
      "None found",
      "Product markup; usage unverified",
      "Unlimited client accounts",
      "Partial; AI voice overage only",
      "Planned, not live",
      "None; paid setup optional",
      "Paid setup service",
    ]),
    verdict:
      "Vendasta gives agencies a catalog of products to resell with unlimited client accounts. Mercury gives them one platform that answers the phones, runs the follow-up, and dispatches the work, month to month.",
    sources: [
      { label: "Vendasta pricing", url: "https://www.vendasta.com/pricing/" },
      { label: "Conversations AI", url: "https://www.vendasta.com/conversations-ai" },
      { label: "Kixie integration", url: "https://feedback.vendasta.com/changelog/new-integration-automate-your-sales-outreach-and-close-deals-faster-with-kixie" },
      { label: "MCP roadmap", url: "https://roadmap.vendasta.com/ai-workforce/p/official-vendasta-mcp-model-context-protocol" },
    ],
    checked: CHECKED,
  },
  {
    slug: "sharpspring",
    logo: { src: "/vs-logos/sharpspring.png", wordmark: true },
    competitor: "SharpSpring",
    brandColor: "#0062EA",
    tagline:
      "SharpSpring, now Lead Gen & CRM by Constant Contact, automates marketing without the phones. Mercury adds AI voice, a dialer, and dispatch.",
    competitorPrice: "Quote only, priced by leads stored",
    differentiators: [
      {
        title: "Voice, native",
        body: "Lead Gen & CRM has no native calling; call data comes through a paid CallRail integration. Mercury's AI voice agents answer every call, qualify, and book 24/7.",
      },
      {
        title: "Full outbound dialer",
        body: "Parallel dialing with local numbers, recording, and transcripts built in, up to 10 lines per account.",
      },
      {
        title: "Published prices",
        body: "Lead Gen & CRM is quote only, with overages that vary by account. Mercury publishes its plan prices and its SMS and voice rates.",
      },
      {
        title: "Mark up usage, not just licenses",
        body: "Agencies on Lead Gen & CRM can rebill client licenses. Mercury Professional lets you mark up calls, texts, and AI usage too.",
      },
    ],
    rows: mercuryRows([
      "Not offered",
      "Not native; CallRail sync",
      "Not offered",
      "License rebilling only",
      "Client instances, each licensed",
      "Not published",
      "None found",
      "Onboarding fee reported",
      "Unverified",
    ]),
    verdict:
      "Lead Gen & CRM handles marketing automation for agencies. Mercury handles the conversations: AI answering every call, a dialer working every lead, and dispatch running every job.",
    sources: [
      { label: "Rebrand to Lead Gen & CRM", url: "https://knowledgebase.constantcontact.com/lead-gen-crm/articles/KnowledgeBase/50677-SharpSpring-Rebrand-to-Lead-Gen-CRM" },
      { label: "Pricing structure", url: "https://knowledgebase.constantcontact.com/lead-gen-crm/articles/KnowledgeBase/53857-Direct-Client-Pricing-Structure?lang=en_US" },
      { label: "CallRail integration", url: "https://imgssl.constantcontact.com/kb/PDF/LGCRM-CallRail-Integration-Service-September2025.pdf" },
    ],
    checked: CHECKED,
  },
  {
    slug: "klaviyo",
    logo: { src: "/vs-logos/klaviyo.svg", wordmark: true },
    competitor: "Klaviyo",
    brandColor: "#232426",
    darkHeader: true,
    tagline:
      "Email and SMS marketing is not a phone call answered. Mercury's AI picks up.",
    competitorPrice: "Free to 250 profiles; paid from $20/mo",
    differentiators: [
      {
        title: "The call, answered",
        body: "Klaviyo's AI agent covers chat, email, and WhatsApp. When the customer calls, Mercury's AI front desk answers, qualifies, and books, 24/7.",
      },
      {
        title: "A dialer, not just broadcasts",
        body: "Klaviyo has no dialer. Mercury includes outbound dialing with local numbers, recording, and transcripts.",
      },
      {
        title: "Built for service businesses",
        body: "Klaviyo is built for B2C and ecommerce marketing. Mercury runs jobs, calendars, calls, and follow-up for businesses that work by phone.",
      },
      {
        title: "Dispatch for the field",
        body: "Mercury Agencies adds technician status updates and AI customer notifications for service businesses.",
      },
    ],
    rows: mercuryRows([
      "Not offered",
      "Not offered",
      "Not offered",
      "Not offered",
      "Linked accounts, no white-label",
      "Shown in app, no public table",
      true,
      "None",
      "Enterprise or partners",
    ]),
    verdict:
      "Klaviyo owns the campaign. Mercury owns what happens next: the answered call, the booked job, and the dispatched technician, all tied to the same contact record.",
    sources: [
      { label: "Klaviyo pricing", url: "https://www.klaviyo.com/pricing" },
      { label: "Klaviyo MCP server", url: "https://developers.klaviyo.com/en/docs/klaviyo_mcp_server" },
      { label: "What's new", url: "https://www.klaviyo.com/whats-new" },
      { label: "Portfolio", url: "https://www.klaviyo.com/features/portfolio" },
    ],
    checked: CHECKED,
  },
  {
    slug: "salesforce",
    competitor: "Salesforce",
    brandColor: "#00A1E0",
    tagline:
      "With Salesforce, voice, dialing, and dispatch are each another per-user license. Mercury includes the phones and AI for a flat rate.",
    competitorPrice: "From $25/user/mo; voice and dispatch extra",
    differentiators: [
      {
        title: "Flat rate vs per seat",
        body: "Salesforce editions and add-ons are priced per user. Mercury plans are flat monthly rates with unlimited users, so the bill stays predictable.",
      },
      {
        title: "Phone system included",
        body: "Salesforce sells Agentforce Voice, the Sales Dialer, and Field Service as separate add-ons. Mercury includes the AI front desk and dialer on every plan, and dispatch on Agencies.",
      },
      {
        title: "MCP on every plan",
        body: "Salesforce's hosted MCP servers need Enterprise Edition or higher. Mercury includes MCP access from Starter up.",
      },
      {
        title: "Live in days",
        body: "AI assistants trained on your business, numbers provisioned, CRM configured. No consultants needed to get the basics working.",
      },
    ],
    rows: mercuryRows([
      "Agentforce Voice, add-on",
      "Add-on from $5/user/mo",
      "Field Service from $175/user/mo",
      "Not offered",
      "Not offered",
      "Flex Credits, no per-minute rate",
      "Enterprise Edition and up",
      "None listed; partners typical",
      "Via paid partners",
    ]),
    verdict:
      "Salesforce can do almost anything, one per-user license at a time. Mercury is built for businesses that run on the phone: answered calls, worked leads, and dispatched jobs, live in days for a flat monthly rate.",
    logo: { src: "/vs-logos/salesforce.svg", wordmark: true },
    sources: [
      { label: "Small business pricing", url: "https://www.salesforce.com/small-business/pricing/" },
      { label: "Agentforce Voice", url: "https://admin.salesforce.com/blog/2026/introducing-agentforce-voice" },
      { label: "Sales add-ons", url: "https://www.salesforce.com/sales/pricing/add-ons/" },
      { label: "Field Service pricing", url: "https://www.salesforce.com/service/field-service-management/pricing/" },
      { label: "Hosted MCP servers", url: "https://developer.salesforce.com/blogs/2026/04/salesforce-hosted-mcp-servers-are-now-generally-available" },
    ],
    checked: CHECKED,
  },
  {
    slug: "zoho",
    competitor: "Zoho",
    brandColor: "#226DB4",
    tagline:
      "Zoho splits the phones, the CRM, and dispatch into separate apps. Mercury puts them on one platform with AI that answers.",
    competitorPrice: "CRM free for 3 users; paid from $14/user/mo",
    differentiators: [
      {
        title: "One platform, not three apps",
        body: "Zoho's power dialer lives in Zoho Voice and its dispatch console in Zoho FSM, each priced separately. Mercury includes the dialer on every plan and dispatch on Agencies, in the same platform as your CRM.",
      },
      {
        title: "An AI front desk",
        body: "Zoho Voice connects to third-party AI rather than shipping its own phone agent. Mercury's AI front desk answers every call 24/7 on every plan.",
      },
      {
        title: "Flat rate vs per seat",
        body: "Zoho CRM and the Voice power dialer are priced per user. Mercury plans are flat monthly rates with unlimited users.",
      },
      {
        title: "Agencies keep their margin",
        body: "Mercury Professional includes usage rebilling, so agencies mark up phone, SMS, email, and AI. Zoho's partner program is resale and referral based.",
      },
    ],
    rows: mercuryRows([
      "Third-party AI only",
      "Zoho Voice power dialer, add-on",
      "Zoho FSM, separate app",
      "Not offered",
      "Not offered",
      "Zoho Voice rates in credits",
      true,
      "None; paid Jumpstart optional",
      "Via Jumpstart or partners",
    ]),
    verdict:
      "Zoho offers 50+ apps that cover a little of everything. Mercury runs the phones for local and service businesses, with AI voice, a dialer, and dispatch in one platform at a flat monthly rate.",
    logo: { src: "/vs-logos/zoho.svg", wordmark: true },
    sources: [
      { label: "Zoho CRM pricing", url: "https://zoho.com/en-us/crm/zohocrm-pricing.html" },
      { label: "Zoho Voice pricing", url: "https://www.zoho.com/voice/pricing.html" },
      { label: "Zoho FSM pricing", url: "https://www.zoho.com/fsm/pricing.html" },
      { label: "Zoho CRM MCP", url: "https://www.zoho.com/crm/developer/docs/mcp/overview.html" },
    ],
    checked: CHECKED,
  },
];

export function getComparison(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}
