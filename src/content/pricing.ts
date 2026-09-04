/**
 * Standard (Site) pricing — LOCKED 2026-06-25.
 * Monthly: $1,595 / $1,995 / $3,995. Annual billed upfront (~25% off): $14,355 / $17,955 / $35,955.
 */
export type TierId = "starter" | "growth" | "pro";

export type Tier = {
  id: TierId;
  name: string;
  blurb: string;
  monthly: number;
  annualTotal: number;
  cta: string;
  /** Shorter label used on the Pricing page cards (desktop width is tighter) */
  ctaShort?: string;
  popular?: boolean;
  features: { title: string; detail: string; muted?: boolean }[];
};

export const tiers: Tier[] = [
  {
    id: "starter",
    name: "Starter",
    blurb: "For startups & small businesses",
    monthly: 1595,
    annualTotal: 14355,
    cta: "Launch Starter",
    features: [
      { title: "1 Mercury Call Desk assistant", detail: "One dedicated AI assistant trained on your business to handle all incoming calls professionally" },
      { title: "100+ Mercury Call Desk voices", detail: "Choose from over 100 natural-sounding voices." },
      { title: "Multi-language capabilities", detail: "Serve customers in 40+ languages with automatic language detection and seamless switching" },
      { title: "SMS & Email notifications", detail: "Get instant alerts for important calls, messages, and customer interactions via text and email" },
      { title: "AI conversation summaries", detail: "Automatic summaries of every call with key details, next steps, and customer insights" },
      { title: "Recording & Transcripts", detail: "Full call recordings with searchable transcripts for quality assurance and training" },
      { title: "Lead Tracker", detail: "Track which marketing channels generate your phone leads with detailed attribution reporting - available in higher tiers", muted: true },
      { title: "Integrations & Automations", detail: "Custom workflow automations and advanced integrations available in Pro tier", muted: true },
    ],
  },
  {
    id: "growth",
    name: "Growth",
    blurb: "For growing businesses",
    monthly: 1995,
    annualTotal: 17955,
    cta: "Grow With Mercury Call Desk",
    ctaShort: "Start Growth",
    popular: true,
    features: [
      { title: "Everything in Starter", detail: "All features from the Starter plan plus the additional Growth benefits listed below" },
      { title: "3 Mercury Call Desk assistants", detail: "Deploy multiple AI assistants for different departments, phone lines, or business locations simultaneously" },
      { title: "2 local routing numbers", detail: "Get additional local phone numbers for different markets, departments, or marketing campaigns" },
      { title: "15 custom FAQ responses", detail: "Pre-program 15 personalized answers to your most common business questions for instant, accurate responses" },
      { title: "Advanced customer support", detail: "Get faster response times and support for technical issues and setup assistance" },
      { title: "Advanced call analytics", detail: "Detailed insights including call patterns, peak hours, conversion rates, and performance metrics" },
      { title: "Lead Tracker", detail: "Track which marketing channels generate your phone leads with detailed attribution reporting - available in Pro tier", muted: true },
      { title: "Integrations & Automations", detail: "Custom workflow automations and advanced CRM integrations available in Pro tier", muted: true },
    ],
  },
  {
    id: "pro",
    name: "Pro",
    blurb: "For custom business needs",
    monthly: 3995,
    annualTotal: 35955,
    cta: "Go Pro",
    features: [
      { title: "Everything in Growth", detail: "All features from the Growth plan plus the additional Pro benefits listed below" },
      { title: "White Glove Onboarding", detail: "Dedicated setup specialist handles complete configuration, training, and testing to get you live faster" },
      { title: "5 Mercury Call Desk assistants", detail: "Deploy up to 5 specialized AI assistants for different departments, locations, or business functions" },
      { title: "5 local routing numbers", detail: "Get 5 local phone numbers for multiple markets, departments, or dedicated marketing campaigns" },
      { title: "Priority customer support", detail: "Direct access to our support team via dedicated Slack channel for fastest response times" },
      { title: "Outbound Calling", detail: "One of your Mercury Call Desk assistants can make outbound calls for appointment reminders, follow-ups, and customer outreach" },
      { title: "Lead Tracker", detail: "Track which marketing channels generate your phone leads with detailed attribution reporting and ROI insights" },
      { title: "Integrations & Automations", detail: "Custom workflow automations and advanced integrations with CRM, scheduling, and business management tools" },
    ],
  },
];

export const enterprise = {
  name: "Enterprise",
  price: "Custom",
  blurb: "For Your Business",
  cta: "Talk with Us",
};

/** Feature comparison table (Pricing page). Column order: Starter, Growth, Pro, Enterprise. */
export type CompareCell = string | boolean;
export type CompareRow = { label: string; tip?: string; cells: [CompareCell, CompareCell, CompareCell, CompareCell] };
export type CompareGroup = { title: string; rows: CompareRow[] };

export const compare: CompareGroup[] = [
  {
    title: "Core Platform",
    rows: [
      { label: "Inbound Assistants", tip: "Dedicated inbound phone agents trained specifically for your business, each with unique personalities, knowledge bases, and workflows.", cells: ["1 Assistant", "3 Assistants", "5 Assistants", "Unlimited"] },
      { label: "Outbound Assistants", tip: "Dedicated outbound phone agents for follow-ups, reminders, and outreach.", cells: [false, false, "1 Assistant", "Unlimited"] },
      { label: "Minutes (monthly)", tip: "Total monthly talk time included. Additional minutes are charged at competitive overage rates with no service interruption.", cells: ["100 min", "300 min", "1,000 min", "Custom"] },
      { label: "Overage rate per minute", cells: ["$.60", "$.50", "$.45", "As low as $.05"] },
      { label: "Voice Selection", tip: "Over 100 natural-sounding AI voices across accents and speaking styles.", cells: ["100+ voices", "100+ voices", "100+ voices", "100+ voices + custom voice cloning"] },
      { label: "Multi-Language Support", tip: "Automatic language detection and seamless switching across 40+ languages.", cells: [true, true, true, true] },
      { label: "Concurrent Call Handling", tip: "Simultaneous calls your assistants can handle — no busy signals.", cells: ["10", "10", "10", "Unlimited"] },
      { label: "Call Recording & Transcripts", cells: [true, true, true, true] },
      { label: "SMS & Email Notifications", cells: [true, true, true, true] },
      { label: "Website Voice Assistant", tip: "Visitors click a button on your website and immediately start talking to your assistant.", cells: [false, true, true, true] },
    ],
  },
  {
    title: "Workflows & Automations",
    rows: [
      { label: "Email & SMS Automations", cells: ["Automatic notifications", "Automatic notifications", "Advanced workflows", "Custom automation rules"] },
      { label: "Call transfer & routing", cells: [false, false, "Advanced call transfer & routing", "Custom call routing & transferring"] },
      { label: "Tasks (monthly)", tip: "Individual automation actions triggered by conversations — follow-up emails, calendar bookings, record updates, payments.", cells: [false, "250 included", "1,000 included", "Talk with us"] },
      { label: "Overage rate per task", cells: [false, "$.10", "$.10", "Talk with us"] },
      { label: "Custom Workflow Actions", cells: [false, false, "15 custom actions", "Talk with us"] },
      { label: "Data Sync & Updates", cells: [false, false, "Real-time data sync", "Bi-directional data sync"] },
      { label: "Conditional Logic Rules", cells: [false, false, "10 conditional rules", "Talk with us"] },
      { label: "Webhook Integrations", cells: [false, false, "Incoming webhooks", "Incoming + outgoing webhooks"] },
    ],
  },
  {
    title: "Business Intelligence",
    rows: [
      { label: "Business Intelligence", cells: ["Basic call logs", "Advanced dashboard", "Advanced dashboard", "Custom reporting suite"] },
      { label: "Conversation Intelligence", cells: [false, "Sentiment analysis", "Sentiment + topic tracking", "AI-powered insights + trends"] },
      { label: "Performance Metrics", cells: ["Call count & duration", "Response times, success rates", "Conversion tracking, ROI metrics", "Custom KPIs + benchmarking"] },
      { label: "Lead Attribution Tracking", cells: [false, false, "Full marketing attribution", "Full marketing attribution"] },
      { label: "Real-Time Monitoring", cells: [false, "Live call status", "Live call status + alerts", "Multi-location monitoring"] },
      { label: "Data Export & API", cells: [false, "CSV exports", "CSV + API access", "Full API + custom integrations"] },
      { label: "Historical Reporting", cells: ["30 Days", "6 months", "2 years", "Unlimited retention"] },
    ],
  },
  {
    title: "CRM Integration",
    rows: [
      { label: "CRM Integration", cells: [false, "Basic CRMs", "Major CRMs", "Custom CRM connections"] },
      { label: "GoHighLevel", cells: [false, true, true, true] },
      { label: "Salesforce", cells: [false, false, true, true] },
      { label: "HubSpot", cells: [false, false, true, true] },
      { label: "Pipedrive", cells: [false, false, true, true] },
      { label: "Zoho CRM", cells: [false, false, true, true] },
      { label: "Other Major CRMs", cells: [false, false, true, true] },
      { label: "Custom CRMs", cells: [false, false, false, true] },
    ],
  },
  {
    title: "Calendar Integration",
    rows: [
      { label: "Calendar Scheduling", cells: [false, "Basic appointment booking", "Multi-calendar sync", "Enterprise calendar systems"] },
      { label: "Google Calendar", cells: [false, true, true, true] },
      { label: "Microsoft Outlook", cells: [false, true, true, true] },
      { label: "Calendly", cells: [false, false, true, true] },
      { label: "Cal.com", cells: [false, false, true, true] },
      { label: "Other Major Scheduling & Calendar Integrations", cells: [false, false, true, true] },
      { label: "Custom Scheduling & Calendar Integrations", cells: [false, false, false, true] },
    ],
  },
  {
    title: "Payment Processing Integration",
    rows: [
      { label: "Payment Processing", cells: [false, false, "Stripe, Square, QuickBooks, Zoho integration", "Custom payment gateways"] },
      { label: "Stripe", cells: [false, false, true, true] },
      { label: "PayPal", cells: [false, false, true, true] },
      { label: "QuickBooks", cells: [false, false, true, true] },
      { label: "FreshBooks", cells: [false, false, true, true] },
      { label: "Square", cells: [false, false, true, true] },
      { label: "Other Major Payment Processors", cells: [false, false, true, true] },
      { label: "Custom Payment Processors", cells: [false, false, false, true] },
    ],
  },
  {
    title: "Third-Party App Connections",
    rows: [
      { label: "Third-Party App Integrations", cells: [false, false, "Zapier, Make, n8n, Microsoft Power Automate, and many more", "Custom third-party tools with API connections"] },
      { label: "Zapier", cells: [false, false, true, true] },
      { label: "Make", cells: [false, false, true, true] },
      { label: "n8n", cells: [false, false, true, true] },
      { label: "Microsoft Power Automate", cells: [false, false, true, true] },
      { label: "IFTTT", cells: [false, false, true, true] },
      { label: "Other Major Integration Platforms", cells: [false, false, true, true] },
      { label: "Custom Business Integrations", cells: [false, false, false, true] },
    ],
  },
  {
    title: "Lead Capture & Routing",
    rows: [
      { label: "Lead Information Capture", cells: ["Basic caller details", "Basic caller details", "Complete lead profiles", "Custom data fields"] },
      { label: "Lead Qualification Scoring", cells: [false, false, "AI-powered scoring", "Custom scoring models"] },
      { label: "Smart Lead Routing", cells: [false, false, false, "Dynamic routing rules"] },
      { label: "Lead Source Tracking", cells: [false, false, "Multi-channel sequences", "Full attribution tracking"] },
      { label: "Follow-up Automation", cells: [false, false, "Marketing attribution", "Personalized campaigns"] },
      { label: "Priority Lead Alerts", cells: [false, false, "High-value alerts", "Custom alert rules"] },
    ],
  },
];

export const pricingFaq = [
  { q: "How quickly can I get started?", a: "Most businesses are live and handling calls professionally within 5-10 minutes of setup. Our streamlined onboarding process gets you operational immediately." },
  { q: "Can I change my plan later?", a: "Absolutely. Upgrade or downgrade anytime to match your business needs. Changes take effect immediately with no service interruption." },
  { q: "What is your cancellation policy?", a: "No long-term contracts required. Cancel anytime with 30 days notice. Your call recordings and data remain accessible for 90 days after cancellation." },
  { q: "Can this work with my existing phone system?", a: "We integrate seamlessly with your current cell phone, phone setup, or provide new local numbers - whatever works best for your business operations." },
  { q: "How does billing work?", a: "Simple monthly billing with no setup fees, hidden costs, or surprise charges. Annual billing available with cost savings. Overage minutes are billed at transparent rates with detailed usage reports." },
  { q: "What happens to my call data?", a: "All conversation recordings, transcripts, and business data are securely stored with bank-level encryption and remain fully accessible throughout your subscription." },
];

export const whyChoose = [
  { title: "Professional Results", body: "AI assistants trained specifically for business phone coverage with industry-specific knowledge and natural conversation abilities." },
  { title: "Rapid Deployment", body: "Live in minutes, not weeks like traditional phone systems. No complex installations or technical expertise required." },
  { title: "Custom Workflows", body: "Business-specific automation that goes beyond basic call handling to integrate with your existing tools and processes." },
  { title: "24/7 Reliability", body: "Enterprise-grade infrastructure ensures your phone coverage never fails, even during peak demand or system maintenance." },
  { title: "Proven ROI", body: "Customers report 25-40% revenue increases within 30 days through improved call capture and professional customer interactions." },
  { title: "Scalable Growth", body: "Start with essential features and expand to advanced automation as your business grows - no platform migrations required." },
];
