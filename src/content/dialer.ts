/** Content for the /dialer page: the full dialer + who owns outbound compliance. */

export const dialerHero = {
  crumb: "Dialer",
  title: "A full dialer, built into your CRM",
  body: "A 10:1 parallel dialer, local numbers, recordings, and SMS, all inside your CRM. Your team, your AI, or both on the phones.",
};

export const dialerFeatures = [
  {
    title: "10:1 parallel dialer",
    body: "Dial up to 10 lines at once and connect your rep to whoever picks up first. Run sales, follow-up, and reminder campaigns from the same place your inbound calls land; lists, dispositions, and callbacks stay in the CRM.",
    icon: "zap",
  },
  {
    title: "Local presence numbers",
    body: "Provision local numbers for every market you serve. Prospects pick up local calls, and every number's activity rolls up to one dashboard.",
    icon: "phone",
  },
  {
    title: "Recording + transcripts",
    body: "Every call recorded with searchable transcripts and AI summaries. Coach your team, settle disputes, and never lose a detail.",
    icon: "chat",
  },
  {
    title: "SMS built in",
    body: "Text from the same numbers you call from. Missed-call text-back, reminders, and follow-ups, with A2P 10DLC registration handled for you.",
    icon: "chat",
  },
];

export const complianceItems = [
  {
    title: "You scrub your lists",
    body: "The dialer does not scrub against the National Do Not Call Registry, state lists, or your internal DNC list. Scrub every list before you upload it, and keep your internal do-not-call list current.",
  },
  {
    title: "You get consent",
    body: "AI-generated voices count as artificial voices under the TCPA (FCC ruling, Feb 2024). Prior express written consent is required before AI-placed or automated marketing calls and texts to mobile numbers. Violations run $500 to $1,500 per call.",
  },
  {
    title: "You set calling hours",
    body: "Schedule campaigns inside the legal calling hours for each recipient's state and timezone. Federal rules allow 8 AM to 9 PM local time, and some states are stricter.",
  },
  {
    title: "A2P 10DLC handled",
    body: "Business SMS requires registered campaigns. We handle your A2P 10DLC registration so your messages get delivered instead of filtered.",
  },
  {
    title: "Records in your CRM",
    body: "Every call is recorded and transcribed, and dispositions are saved on the contact, so you have a history of who was called, when, and what was said.",
  },
];

export const dialerFaq = [
  { q: "Do you scrub my lists against the Do Not Call registry?", a: "No. The dialer does not scrub lists, so scrub every list against the National Do Not Call Registry, any state lists, and your internal DNC list before you upload it." },
  { q: "Do I need consent before the AI calls someone?", a: "For AI-placed or automated marketing calls to mobile numbers, yes: prior express written consent is required under the TCPA. Getting and keeping that consent is your responsibility, so only upload contacts who have given it." },
  { q: "Can my human team use the dialer too?", a: "Yes. The dialer works for human agents, AI assistants, or a mix. Recordings, transcripts, and dispositions are identical either way." },
  { q: "How does the parallel dialer work?", a: "It dials up to 10 numbers at once for each rep and connects the rep to the first person who answers, so your team spends its time talking instead of listening to rings." },
  { q: "What happens if someone asks to be removed?", a: "Add them to your internal do-not-call list right away and remove them from every campaign. Revocations must be honored within 10 business days, by any reasonable means the person uses to ask." },
];
