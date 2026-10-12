/** Content for the /platform page: the Sulus CRM tour. */

export const platformHero = {
  crumb: "Platform",
  title: "Mercury CRM: the whole phone operation, one platform",
  body: "Your customer database, a full dialer and phone system, and Mercury Call Desk AI assistants, working as one. This is the tour.",
};

export const platformSections = [
  {
    eyebrow: "Core CRM",
    title: "Every call lands in your CRM",
    body: "Contacts, companies, and conversations live in Mercury CRM. No syncing from a separate phone tool, no CSV exports, no data lost between systems. When the AI books an appointment, the contact, the booking, and the transcript are already there.",
    icon: "users",
    points: ["Contacts, companies, and full conversation history", "Pipelines and opportunities tied to every call", "Files, forms, and websites in the same workspace"],
  },
  {
    eyebrow: "AI Front Desk",
    title: "Assistants that answer like your best employee",
    body: "Mercury Call Desk AI assistants pick up in under a second, hold natural conversations, book appointments, qualify leads, and follow up by SMS. 40+ languages with automatic detection, 24/7, including nights, weekends, and holidays.",
    icon: "phone",
    points: ["Answers in under 1 second, every call, every time", "Books, qualifies, and follows up automatically", "100+ natural voices, 40+ languages"],
  },
  {
    eyebrow: "Phone System + Dialer",
    title: "A real phone system, not an add-on",
    body: "Inbound handling, outbound dialing, local numbers, call recording with searchable transcripts, and SMS, all native to the platform. Your team, your AI, or both can run the phones.",
    icon: "zap",
    points: ["Outbound dialer with local presence numbers", "Call recording, transcripts, and AI summaries", "SMS messaging with A2P 10DLC handled"],
  },
  {
    eyebrow: "Automation",
    title: "Workflows that work while you sleep",
    body: "Missed-call text-back, appointment reminders, review requests, and pipeline follow-ups run automatically. Build them visually, trigger them from any call event.",
    icon: "bolt",
    points: ["Missed-call text-back and speed-to-lead flows", "Appointment reminders and review requests", "Reputation management built in"],
  },
  {
    eyebrow: "Reporting",
    title: "See what your phones are doing",
    body: "Call volume, answer rates, booking conversion, and lead capture, per location and per campaign. The 98.5% lead capture rate isn't a slogan, it's a dashboard.",
    icon: "chart",
    points: ["Call outcomes and conversion tracking", "Lead source attribution", "Per-location and per-agent reporting"],
  },
  {
    eyebrow: "Migration",
    title: "Switch from GoHighLevel in days, not months",
    body: "We built the API to transfer your GoHighLevel data straight into Mercury CRM: contacts, pipelines, workflows, and history. During setup we rework your workflows so they run cleaner and faster than before, and you get MCP access to connect your own data tools. Most migrations finish in days.",
    icon: "plug",
    points: ["Direct GHL data transfer via our migration API", "Workflows rebuilt and optimized during setup", "MCP access for your own data tools", "White-glove migration on Agencies and Enterprise"],
  },
];

export const tierGating = [
  { tier: "Starter", detail: "Core CRM, Sales, and Web Presence modules. Everything a solo operator needs." },
  { tier: "Professional", detail: "Adds Financials, Marketing, and Automation. The growth engine for most businesses." },
  { tier: "Agencies", detail: "Adds white-label sub-accounts with rebilling, Advanced Tools and HighLevel data migration." },
  { tier: "Enterprise", detail: "Unlimited white-label sub-accounts, users and storage, plus the best usage rates." },
];
