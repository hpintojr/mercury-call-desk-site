/**
 * Ad landing pages — one config per URL, rendered by src/components/landing/LandingPage.tsx.
 * These pages have no site nav (SiteChrome hides it) so a paid click has exactly two ways out:
 * call the AI line, or book. Copy rules: outcomes over features, no competitor names,
 * no discounts or trials, every number defensible.
 */
import type { IconName } from "@/components/Icon";

export type Industry = "home-services" | "legal" | "dental-medical" | "other";

export type LandingConfig = {
  slug: string;
  /** <title> and OG title */
  title: string;
  description: string;
  eyebrow: string;
  headline: string;
  sub: string;
  /** Primary CTA — "call" rings the AI line, "book" scrolls to the embedded calendar */
  primary: { label: string; action: "call" | "book" };
  secondary: { label: string; action: "call" | "book" | "callback" };
  /** Pre-select the qualifying answer on the callback form */
  industry: Industry;
  /** A short real-world call the AI handles, shown as a transcript card next to the hero */
  sampleCall: { caller: string; lines: { who: "caller" | "mcd"; text: string }[] };
  outcomes: { icon: IconName; title: string; body: string }[];
  /** The "what a missed call costs" strip — three defensible numbers with their basis */
  stats: { value: string; label: string; basis: string }[];
  /** Optional: how it connects to the tools this vertical already uses */
  integrations?: string[];
  bookEyebrow: string;
  bookTitle: string;
  bookBody: string;
  faq: { q: string; a: string }[];
};

const commonFaq: LandingConfig["faq"] = [
  { q: "Will it sound like a robot?", a: "Call the line and decide for yourself. Responses come back in well under a second, it handles interruptions, and it introduces itself as an AI on every call — callers know what they're talking to and still get what they called for." },
  { q: "What if it doesn't know the answer?", a: "It only speaks from the information you approve during setup. When a question falls outside that, it says so, takes a message or transfers to your team — it never invents a price, a policy or an appointment." },
  { q: "Can it hand off to a real person?", a: "Yes. Warm transfer to any number during the hours you set; outside those hours it books the appointment or takes a detailed message and texts your team the summary." },
  { q: "Which languages does it speak?", a: "Over 40, detected automatically from the caller's first words. A Spanish-speaking caller gets a Spanish conversation without pressing anything." },
  { q: "How long does setup take?", a: "Most businesses are live within a few days. We build the assistant, connect your calendar and CRM, forward your number, and run test calls with you before it takes a real one." },
  { q: "Is there a contract?", a: "No long-term contract and no setup fee. Plans are month to month; annual billing is available at a lower rate. Every plan includes a set number of minutes with a published overage rate — see the pricing page." },
];

export const landingPages: LandingConfig[] = [
  {
    slug: "try",
    title: "Call our AI receptionist — try to stump it",
    description: "Dial (949) 775-0451 and talk to the Mercury Call Desk AI assistant. Ask it anything you'd ask your front desk.",
    eyebrow: "Live demo line · answered by an AI",
    headline: "Call this number. It's an AI. Try to stump it.",
    sub: "Mercury Call Desk answers your business line in under a second, 24/7, in 40+ languages — then books the appointment, writes to your CRM and texts the caller a confirmation. Don't take our word for it; call and ask it anything you'd ask your front desk.",
    primary: { label: "Call (949) 775-0451", action: "call" },
    secondary: { label: "Have it call me in 60 seconds", action: "callback" },
    industry: "other",
    sampleCall: {
      caller: "A homeowner, 7:42 pm on a Friday",
      lines: [
        { who: "mcd", text: "Thanks for calling Summit Plumbing, this is the AI assistant. How can I help?" },
        { who: "caller", text: "My water heater's leaking all over the garage. Is anyone available tonight?" },
        { who: "mcd", text: "I'm sorry — let's get someone out. Is the leak steady or a slow drip, and is the water shut off?" },
        { who: "caller", text: "Steady. I found the valve and shut it." },
        { who: "mcd", text: "Good. The on-call technician has an 8:30 slot tonight. Can I book that and text you the confirmation at this number?" },
        { who: "caller", text: "Yes, please." },
        { who: "mcd", text: "Done — 8:30 pm, 1418 Oak Street. I've notified the technician and you'll get a text in a moment." },
      ],
    },
    outcomes: [
      { icon: "bolt", title: "Answers on the first ring, every time", body: "No hold music, no voicemail, no busy signal — even when three people call at once." },
      { icon: "calendar", title: "Books, dispatches, invoices", body: "Reads your live calendar, schedules the job, notifies the on-call tech and can take a deposit mid-call." },
      { icon: "chart", title: "Writes everything to your CRM", body: "Every call becomes a contact, a summary and a next step — with the follow-up texts already queued." },
    ],
    stats: [
      { value: "62%", label: "of calls to small service businesses go unanswered", basis: "Industry call-handling studies, 2025–2026" },
      { value: "85%", label: "of those callers never call back", basis: "Same studies — they call the next name on the list" },
      { value: "< 1 sec", label: "Mercury Call Desk pick-up time, 168 hours a week", basis: "Measured across live customer lines" },
    ],
    integrations: ["Google Calendar", "Outlook", "Stripe", "GoHighLevel", "Zapier"],
    bookEyebrow: "Front-Desk Audit",
    bookTitle: "See what your missed calls are costing you",
    bookBody: "A 20-minute call with our team: we map your call volume and after-hours gaps, estimate the revenue slipping past voicemail, and show you exactly how the assistant would handle your calls.",
    faq: commonFaq,
  },
  {
    slug: "hvac",
    title: "24/7 AI answering for HVAC, plumbing & electrical",
    description: "Every after-hours call answered, quoted and dispatched in under a second. Call the demo line and hear it handle an emergency.",
    eyebrow: "For HVAC · Plumbing · Electrical · Roofing",
    headline: "Every after-hours call answered, booked and dispatched — in under a second.",
    sub: "Your techs earn money on job sites, not at a desk, so calls arrive exactly when nobody can pick up. Mercury Call Desk answers 24/7, qualifies the emergency, books the slot on your live calendar and notifies the on-call tech — then texts the customer a confirmation.",
    primary: { label: "Call the HVAC demo line", action: "call" },
    secondary: { label: "Book a Front-Desk Audit", action: "book" },
    industry: "home-services",
    sampleCall: {
      caller: "A property manager, Sunday 6:10 am",
      lines: [
        { who: "mcd", text: "Thanks for calling Ridgeline Heating & Air, this is the AI assistant. What's going on?" },
        { who: "caller", text: "Rooftop unit at our Elm Street building is down and it's going to be 104 today. We need someone this morning." },
        { who: "mcd", text: "Understood — a commercial no-cool on a heat day. Is this the 2-story building at 900 Elm, and do you have the maintenance agreement with us?" },
        { who: "caller", text: "Yes, that one. We're on the annual plan." },
        { who: "mcd", text: "Great, that puts you at priority. Marcus is on call and can be there between 8 and 9. I'll dispatch him now and text you his ETA. Is this the best number?" },
        { who: "caller", text: "It is. Thank you." },
      ],
    },
    outcomes: [
      { icon: "clock", title: "Emergency triage at 2 am", body: "Asks the questions your dispatcher would — what's failing, is it safe, are they a member — and prioritizes accordingly." },
      { icon: "users", title: "Dispatches the on-call tech", body: "Books into the right calendar, alerts the technician by text, and gives the customer an arrival window." },
      { icon: "card", title: "Quotes and collects", body: "Gives your approved pricing for diagnostics and tune-ups, and can take a card for the trip charge before anyone rolls a truck." },
    ],
    stats: [
      { value: "35–45%", label: "of home-service calls arrive outside office hours", basis: "Home-services call-timing studies" },
      { value: "$350+", label: "immediate revenue in a single missed tune-up call", basis: "HVAC industry averages; replacements run far higher" },
      { value: "40 of 168", label: "hours a week a full-time front desk actually covers", basis: "A 40-hour week vs. a 24/7 phone" },
    ],
    integrations: ["Google Calendar", "Outlook", "Stripe", "GoHighLevel", "Zapier"],
    bookEyebrow: "Front-Desk Audit for contractors",
    bookTitle: "Find out how many jobs went to voicemail last month",
    bookBody: "Bring your call log or just your gut feel. In 20 minutes we'll estimate your after-hours volume, what those jobs are worth, and show the assistant handling a call from your own script.",
    faq: [
      { q: "Can it tell a real emergency from a routine call?", a: "Yes. You define what counts as urgent (no heat, active leak, no power) and it asks the triage questions, then books into the emergency calendar or the next-available one accordingly." },
      { q: "Does it work with my scheduling software?", a: "It connects natively to Google and Outlook calendars, GoHighLevel and Stripe, and to most field-service platforms through Zapier or a direct integration on the Pro plan. Tell us what you run and we'll confirm before you sign anything." },
      ...commonFaq.slice(0, 3),
      commonFaq[5],
    ],
  },
  {
    slug: "law",
    title: "AI intake for law firms — 24/7 qualification and booking",
    description: "Practice-aware intake that qualifies the caller, screens for conflicts and books the consultation, any hour. Call the demo line.",
    eyebrow: "For personal injury · Criminal defense · Family · Immigration",
    headline: "Intake that never sleeps: qualify the caller, screen for conflicts, book the consult.",
    sub: "Urgent matters don't wait for 9 am Monday, and the first firm to answer usually gets the case. Mercury Call Desk runs your intake script by practice area, captures the facts your attorneys need, checks the opposing party against your list and books the consultation — with the summary in your inbox before the caller hangs up.",
    primary: { label: "Call the legal demo line", action: "call" },
    secondary: { label: "Book a Front-Desk Audit", action: "book" },
    industry: "legal",
    sampleCall: {
      caller: "A prospective client, Saturday 11:20 pm",
      lines: [
        { who: "mcd", text: "Thank you for calling Alvarez & Reed, this is the firm's AI assistant. How can I help you tonight?" },
        { who: "caller", text: "My brother was arrested a few hours ago. I don't know what to do." },
        { who: "mcd", text: "I'm sorry you're dealing with this. I can get an attorney's attention tonight. Where is he being held, and do you know the charge?" },
        { who: "caller", text: "County jail. They said DUI." },
        { who: "mcd", text: "Thank you. Can I take his full name and yours, so I can run a quick check and open the file?" },
        { who: "caller", text: "Sure — it's Daniel Ortiz. I'm Elena." },
        { who: "mcd", text: "Elena, I've flagged this as urgent for the on-call attorney and booked a call with you at 8:00 am. You'll get a text confirmation now, and a call sooner if the attorney is available tonight." },
      ],
    },
    outcomes: [
      { icon: "paragraph", title: "Practice-aware intake scripts", body: "Different questions for PI, criminal, family and immigration — the facts your attorneys want before the first conversation." },
      { icon: "shield", title: "Conflict screening on the call", body: "Checks names against your conflict list before proceeding and flags anything for review." },
      { icon: "calendar", title: "Consults booked, agreements sent", body: "Books into the right attorney's calendar and can send the engagement or contingency agreement for e-signature right after." },
    ],
    stats: [
      { value: "~$81k", label: "fully loaded annual cost of one legal secretary", basis: "BLS median wage plus employer benefits load" },
      { value: "78%", label: "of buyers go with the first business that responds", basis: "Lead-response studies" },
      { value: "42+ hrs", label: "average business response time to a new lead", basis: "Lead-response studies; MCD responds in under a second" },
    ],
    integrations: ["Google Calendar", "Outlook", "GoHighLevel", "Zapier", "E-signature"],
    bookEyebrow: "Front-Desk Audit for law firms",
    bookTitle: "See your intake handled the way your best paralegal would do it",
    bookBody: "Bring your intake questions. We'll walk through how the assistant runs them by practice area, how conflicts are handled, and where the summaries land in your practice-management software.",
    faq: [
      { q: "Is it appropriate for sensitive matters?", a: "It is calm, discreet and never rushes a caller. It collects only what you tell it to collect, states that it's an AI, and escalates to a person for anything you mark as attorney-only. Recordings and transcripts stay in your account." },
      { q: "Does it integrate with our practice-management software?", a: "Google and Outlook calendars, GoHighLevel and e-signature tools connect directly; most practice-management platforms connect through Zapier or a direct integration on the Pro plan. We confirm your stack before you commit." },
      ...commonFaq.slice(0, 3),
      commonFaq[5],
    ],
  },
  {
    slug: "dental",
    title: "AI front desk for dental & medical practices — HIPAA-ready",
    description: "Lunch-hour overflow, recalls and reschedules answered in under a second, with a signed BAA. Call the demo line.",
    eyebrow: "For dental practices · Medical clinics · Multi-location groups",
    headline: "Front-desk overflow, recalls and reschedules — answered in under a second, HIPAA-ready.",
    sub: "Patient calls pile up at opening, at lunch and at closing — exactly when your front desk is busiest. Mercury Call Desk takes the overflow, reschedules, answers insurance and hours questions, works your recall list, and routes anything clinical to a person, with a Business Associate Agreement in place.",
    primary: { label: "Call the dental demo line", action: "call" },
    secondary: { label: "Book a Front-Desk Audit", action: "book" },
    industry: "dental-medical",
    sampleCall: {
      caller: "A patient, Tuesday 12:20 pm",
      lines: [
        { who: "mcd", text: "Thanks for calling Harbor Family Dental, this is the AI assistant. How can I help?" },
        { who: "caller", text: "I need to move my cleaning on Thursday — something came up at work." },
        { who: "mcd", text: "No problem. Can I confirm your date of birth so I pull up the right appointment?" },
        { who: "caller", text: "March 3rd, 1988." },
        { who: "mcd", text: "Thanks. Thursday at 2:00 with Priya. I have Friday at 9:30 or next Tuesday at 4:15 — either work?" },
        { who: "caller", text: "Friday 9:30." },
        { who: "mcd", text: "You're set for Friday at 9:30. I'll text the confirmation, and your insurance on file is still active, so nothing else is needed." },
      ],
    },
    outcomes: [
      { icon: "clock", title: "Takes the overflow", body: "Answers the calls your team can't reach at open, lunch and close — no one hears a busy signal." },
      { icon: "calendar", title: "Reschedules and confirms", body: "Reads the live schedule, moves the appointment, sends the confirmation and reminder texts." },
      { icon: "shield", title: "HIPAA-ready, BAA signed", body: "Business Associate Agreement in place; PHI handled on encrypted infrastructure; clinical questions routed to staff." },
    ],
    stats: [
      { value: "~$67k", label: "fully loaded annual cost of one medical secretary", basis: "BLS median wage plus employer benefits load" },
      { value: "3×", label: "call volume spikes at opening, lunch and closing", basis: "Practice call-pattern data — when the desk is busiest" },
      { value: "< 1 sec", label: "Mercury Call Desk pick-up time, every line, every hour", basis: "Measured across live customer lines" },
    ],
    integrations: ["Google Calendar", "Outlook", "GoHighLevel", "Zapier", "Practice-management systems"],
    bookEyebrow: "Front-Desk Audit for practices",
    bookTitle: "See how many patient calls hit voicemail at lunch last week",
    bookBody: "In 20 minutes we'll look at your call patterns, walk through the HIPAA safeguards and BAA, and show the assistant rescheduling a patient using your own scheduling rules.",
    faq: [
      { q: "How do you handle HIPAA?", a: "Mercury Call Desk signs a Business Associate Agreement with your practice, PHI is handled on encrypted infrastructure, and the assistant only collects the identifiers you approve. Clinical questions are always routed to your staff." },
      { q: "Can it work our recall list?", a: "Yes. Give it the list of patients due for hygiene or follow-up and it will call, text, and book them into open slots on the schedule you choose." },
      ...commonFaq.slice(0, 3),
      commonFaq[5],
    ],
  },
  {
    slug: "crm-automation",
    title: "CRM automation that chases your leads for you",
    description: "We build the follow-up: instant callbacks, text cadences, pipeline updates, review requests — done for you in GoHighLevel.",
    eyebrow: "CRM automation · Done for you",
    headline: "Your CRM should chase leads for you. We build the cadences.",
    sub: "You paid for the lead. Then nobody called them for two days. Mercury Call Desk builds the machine that never lets that happen: an AI callback within 60 seconds, text and email cadences that keep going until they answer, pipeline stages that update themselves, and review requests that go out the moment a job closes.",
    primary: { label: "Book a walkthrough", action: "book" },
    secondary: { label: "Hear the AI callback first", action: "callback" },
    industry: "other",
    sampleCall: {
      caller: "A web lead, 41 seconds after submitting a form",
      lines: [
        { who: "mcd", text: "Hi Jordan, this is the AI assistant from Cascade Roofing — you just requested a quote on our website. Is now an okay time?" },
        { who: "caller", text: "Wow, that was fast. Sure." },
        { who: "mcd", text: "Great. Is this for a repair or a full replacement, and roughly how old is the roof?" },
        { who: "caller", text: "Replacement, probably. It's about 22 years old with some missing shingles." },
        { who: "mcd", text: "Got it. Our estimator can come out Thursday at 10 or Friday at 2 — which is better?" },
        { who: "caller", text: "Thursday." },
        { who: "mcd", text: "Booked — Thursday at 10. You'll get a text confirmation now and a reminder the day before." },
      ],
    },
    outcomes: [
      { icon: "zap", title: "Speed-to-lead, automated", body: "Web forms, ad forms and missed calls trigger an AI call in under a minute, then text and email until the lead responds." },
      { icon: "chart", title: "Pipeline that updates itself", body: "Contacted, qualified, booked, quoted, won — stages move on real events, so your dashboard is finally true." },
      { icon: "star", title: "Reviews and reactivation", body: "Review requests after every completed job; reactivation campaigns to the customers you haven't heard from in a year." },
    ],
    stats: [
      { value: "21×", label: "more likely to qualify a lead when you respond within 5 minutes", basis: "MIT / Harvard Business Review lead-response study" },
      { value: "42+ hrs", label: "average business response time to a new lead", basis: "Lead-response studies" },
      { value: "< 60 sec", label: "from form submit to the AI callback", basis: "Mercury Call Desk workflow timing" },
    ],
    integrations: ["GoHighLevel", "Meta lead forms", "Google lead forms", "Google Calendar", "Stripe", "Zapier"],
    bookEyebrow: "Automation walkthrough",
    bookTitle: "Show us your lead flow. We'll show you the machine.",
    bookBody: "Bring the sources your leads come from and how you follow up today. In 20 minutes we'll map the cadence we'd build, what it connects to, and what it would take to be live.",
    faq: [
      { q: "Do I need to be on GoHighLevel?", a: "We build on GoHighLevel because it runs calls, texts, email, pipelines and calendars in one place. If you're on another CRM we can connect to it, or set up a GoHighLevel account for you as part of the build." },
      { q: "Is the outbound calling compliant?", a: "Callbacks go only to people who asked to be contacted, within legal calling hours, with the assistant identifying itself as an AI. Consent language on your forms and opt-out handling are part of the build." },
      { q: "What's included in the build?", a: "The workflows, the messaging, the pipeline, the AI callback assistant, the calendar and CRM connections, and testing with your team. You get a working system, not a template." },
      commonFaq[4],
      commonFaq[5],
    ],
  },
  {
    slug: "audit",
    title: "Front-Desk Audit — what are your missed calls costing you?",
    description: "A free 20-minute call: we map your call volume and after-hours gaps, estimate the revenue lost to voicemail, and recommend the right plan.",
    eyebrow: "Front-Desk Audit · 20 minutes · No obligation",
    headline: "What are your missed calls costing you?",
    sub: "In 20 minutes our team maps how many calls you get, when they arrive, how many hit voicemail, and what those callers were worth. You leave with a number, a recommendation, and a live look at the assistant handling a call from your own script.",
    primary: { label: "Book the audit", action: "book" },
    secondary: { label: "Call the AI first", action: "call" },
    industry: "other",
    sampleCall: {
      caller: "What the audit covers",
      lines: [
        { who: "mcd", text: "Your call volume by hour and day — and how much lands outside the hours someone is at the desk." },
        { who: "mcd", text: "What a booked call is worth in your business, so the missed ones have a dollar figure." },
        { who: "mcd", text: "Where the assistant plugs in: your number, your calendar, your CRM, your on-call rotation." },
        { who: "mcd", text: "The right plan for your volume, with minutes and pricing stated plainly." },
      ],
    },
    outcomes: [
      { icon: "chart", title: "A number, not a pitch", body: "You'll see the estimated revenue leaking through voicemail before we talk about anything else." },
      { icon: "mic", title: "A live call on your script", body: "We'll run the assistant through a call the way it would happen for your business." },
      { icon: "check", title: "A clear recommendation", body: "Which plan, what it connects to, what setup looks like — and a straight answer if we're not the right fit." },
    ],
    stats: [
      { value: "$1,595", label: "Starter · 1 assistant · 100 minutes/mo", basis: "Month to month, no setup fee; $0.60/min beyond included minutes" },
      { value: "$1,995", label: "Growth · 3 assistants · 300 minutes/mo", basis: "Most popular; $0.50/min beyond included minutes" },
      { value: "$3,995", label: "Pro · 5 assistants · 1,000 minutes/mo", basis: "Integrations & custom automations; $0.45/min beyond included minutes" },
    ],
    bookEyebrow: "Pick a time",
    bookTitle: "Book your Front-Desk Audit",
    bookBody: "Choose a 20-minute slot. You'll get a confirmation by text and a short list of what to have handy (your rough monthly call count and your busiest hours are enough).",
    faq: [
      { q: "Is this a sales call?", a: "It's a working session with a recommendation at the end. If the numbers say you don't need us, we'll tell you." },
      { q: "What should I bring?", a: "Your rough monthly call volume, your business hours, and how you handle calls today. A call log from your phone provider is a bonus, not a requirement." },
      commonFaq[0],
      commonFaq[4],
      commonFaq[5],
    ],
  },
];

export const landingSlugs = landingPages.map((p) => p.slug);
export const getLanding = (slug: string) => landingPages.find((p) => p.slug === slug);
