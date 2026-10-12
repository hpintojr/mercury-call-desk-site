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
    title: "Built-in DNC list",
    body: "Mark any contact Do Not Call and the platform blocks calls and texts to them across every campaign, the same way GoHighLevel's DND works. Opt-outs and removal requests go straight onto the list.",
  },
  {
    title: "You scrub against the registries",
    body: "The in-system DNC list does not check the National Do Not Call Registry or state lists. Scrub every list against those registries before you upload it.",
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
  { q: "Do you have a Do Not Call list?", a: "Yes. Every account has a built-in DNC list. Contacts on it are blocked from calls and texts across all campaigns. It does not check the National Do Not Call Registry or state lists, so scrub your lists against those before you upload them." },
  { q: "Do I need consent before the AI calls someone?", a: "For AI-placed or automated marketing calls to mobile numbers, yes: prior express written consent is required under the TCPA. Getting and keeping that consent is your responsibility, so only upload contacts who have given it." },
  { q: "Can my human team use the dialer too?", a: "Yes. The dialer works for human agents, AI assistants, or a mix. Recordings, transcripts, and dispositions are identical either way." },
  { q: "How does the parallel dialer work?", a: "It dials up to 10 numbers at once for each rep and connects the rep to the first person who answers, so your team spends its time talking instead of listening to rings." },
  { q: "What happens if someone asks to be removed?", a: "Mark them Do Not Call and the platform stops calling and texting them across every campaign. Revocations must be honored within 10 business days, by any reasonable means the person uses to ask." },
];
