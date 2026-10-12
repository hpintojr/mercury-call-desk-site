/** Content for the /dialer page: the full dialer + compliance. */

export const dialerHero = {
  crumb: "Dialer",
  title: "A full dialer, built into your CRM",
  body: "Outbound campaigns, local numbers, recordings, and SMS, with compliance controls enforced natively. Your team, your AI, or both on the phones.",
};

export const dialerFeatures = [
  {
    title: "Outbound dialing",
    body: "Run follow-up, reminder, and sales campaigns from the same place your inbound calls land. Lists, dispositions, and callbacks stay in the CRM.",
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
    title: "TCPA controls, native",
    body: "AI-generated voices count as artificial voices under the TCPA (FCC ruling, Feb 2024). The dialer enforces prior-express-consent checks before AI-placed marketing calls go out. Violations run $500 to $1,500 per call, so this isn't optional.",
  },
  {
    title: "DNC scrubbing",
    body: "Federal and internal do-not-call lists are scrubbed automatically before every campaign. Suppression is enforced at dial time, not as a manual export.",
  },
  {
    title: "Timezone-aware calling windows",
    body: "Campaigns respect the recipient's local timezone. No 6 AM calls to the wrong coast, no after-hours violations.",
  },
  {
    title: "AI call disclosure",
    body: "The platform discloses the AI nature of the call automatically, meeting California's spoken-disclosure requirement and keeping you ahead of pending federal rules.",
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
  { q: "Do I need consent before the AI calls someone?", a: "For AI-placed marketing calls to mobile numbers, yes: prior express written consent is required under the TCPA. The dialer checks consent before dialing and keeps the records." },
  { q: "Can my human team use the dialer too?", a: "Yes. The dialer works for human agents, AI assistants, or a mix. Recordings, transcripts, and dispositions are identical either way." },
  { q: "What happens if someone asks to be removed?", a: "They're suppressed immediately across voice and SMS, and the revocation is logged for your records." },
];
