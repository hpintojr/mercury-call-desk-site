/** Content for the /dialer page: the full dialer + compliance. */

export const dialerHero = {
  crumb: "Dialer",
  title: "A full dialer, built into your CRM",
  body: "A 10-line parallel dialer, local numbers, recordings, and SMS, in the same CRM your inbound calls land in. Your team, your AI, or both on the phones.",
};

export const dialerFeatures = [
  {
    title: "10-line parallel dialing",
    body: "Your account dials up to 10 lines at once (10:1), so reps spend the hour talking instead of waiting on rings and voicemail. Lists, dispositions, and callbacks stay in the CRM.",
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
    body: "Every opt-out, STOP reply, and do-not-call request lands on your in-system DNC list and is suppressed across calls and texts automatically. Import your existing suppression lists too.",
  },
  {
    title: "Scrub before you upload",
    body: "Mercury CRM does not check numbers against the National Do Not Call Registry. Scrub purchased or cold lists against the federal registry and your state lists before you upload them.",
  },
  {
    title: "Automatic consent checks",
    body: "AI-generated voices count as artificial voices under the TCPA (FCC ruling, Feb 2024), so AI-placed marketing calls need prior express written consent. The dialer checks for consent on the contact before it dials and keeps the record. Violations run $500 to $1,500 per call.",
  },
  {
    title: "Calling-hour enforcement",
    body: "Campaigns only dial inside allowed calling hours in the recipient's local timezone. No 6 AM calls to the wrong coast.",
  },
  {
    title: "AI disclosure in the greeting",
    body: "Set your AI assistant to say it's an AI at the start of every call, which California requires and more states are following.",
  },
  {
    title: "A2P 10DLC handled",
    body: "Business SMS requires registered campaigns. We handle your A2P 10DLC registration so your messages get delivered instead of filtered.",
  },
  {
    title: "Opt-out automation",
    body: "Revocations are honored within 10 business days by any reasonable means: reply STOP, a call, or an email. The platform processes them automatically and logs the record.",
  },
];

export const dialerFaq = [
  { q: "Do I need consent before the AI calls someone?", a: "For AI-placed marketing calls to mobile numbers, yes: prior express written consent is required under the TCPA. The dialer checks for that consent on the contact before dialing and keeps the record. Collecting the consent in the first place is your responsibility." },
  { q: "Do you scrub my lists against the National Do Not Call Registry?", a: "No. Scrub any list against the federal registry and applicable state lists before you upload it. Once numbers are in, the in-system DNC list suppresses opt-outs and do-not-call requests across voice and SMS automatically." },
  { q: "How many lines does the dialer run?", a: "Up to 10 lines per account at once (a 10:1 ratio). When someone answers, the call connects to the rep and the other lines drop." },
  { q: "Can my human team use the dialer too?", a: "Yes. The dialer works for human agents, AI assistants, or a mix. Recordings, transcripts, and dispositions are identical either way." },
  { q: "What happens if someone asks to be removed?", a: "They're suppressed immediately across voice and SMS, and the revocation is logged for your records." },
];
