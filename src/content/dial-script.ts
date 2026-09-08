/**
 * Dial Script — outbound call script for the Mercury Call Desk sales team.
 * Rendered at /dial-script (password-protected, see src/middleware.ts).
 *
 * Edit the copy here; the page rebuilds itself.
 *
 * Text conventions:
 *   [placeholder]  → shown in amber; the agent swaps in the real detail, never reads it out.
 *   {price}        → replaced with dialScript.priceMonthly (e.g. "$1,595").
 *   {trial}        → replaced with dialScript.trialPrice (e.g. "$197").
 *   {days}         → replaced with dialScript.trialDays (e.g. "30").
 *   {brand}        → replaced with dialScript.brand.
 *   <b>…</b>       → bold, allowed in "note" blocks only.
 *
 * Block types: say | cue | note | key | h3
 */

export const dialScript = {
  brand: "Mercury Call Desk",
  shortName: "MCD",
  version: "v1",
  updated: "8 Sep 2026",
  /** Starter package price — quoted in the script + ROI math. Edit here only. */
  priceMonthly: 1595,
  /** One-time trial price and length (Starter package). */
  trialPrice: 197,
  trialDays: 30,
  /** Hero stat cards */
  stats: [
    { big: "80%", small: "of voicemail callers hang up and call the next company" },
    { big: "{price}", small: "per month on the Starter package" },
    { big: "{trial}", small: "one-time trial, {days} days on Starter" },
    { big: "{days} days", small: "to decide, exact renewal date on their calendar" },
  ],
  lede: "Low-pressure opener, curiosity hook, live demo call-in, ROI math using their own numbers, then a {trial} trial close.",
};

export type Block = { t: "say" | "cue" | "note" | "key" | "h3"; text: string; label?: string };

export type Section = {
  id: string;
  n: string;
  title: string;
  tag?: string;
  goal?: string;
  blocks: Block[];
  /** Render the "early" objections inline (section 1b) */
  objections?: boolean;
  /** Render every objection (reference section) */
  objectionsAll?: boolean;
  /** Render the missed-call calculator after the blocks */
  calc?: boolean;
  phrases?: string[];
};

export type Objection = {
  id: string;
  /** Also shown in section 1b (Early brush-offs) */
  early?: boolean;
  q: string;
  /** What renders on the page */
  full: Block[];
  /** Search keywords only (never displayed) — widens what the search box matches */
  short: string;
};

export const SECTIONS: Section[] = [
  {
    id: "opener", n: "1", title: "Opener", tag: "Pattern interrupt, not a pitch",
    goal: "Get a real answer about their current setup before they clock you as a sales call.",
    blocks: [
      { t: "say", text: "Hey, I was just curious, what time do you guys shut down for the day?" },
      { t: "cue", text: "If they answer, follow with:" },
      { t: "say", text: "Gotcha. If I were to call after [their close time] for any reason, does it just go to voicemail, or do you guys still pick up?" },
      { t: "note", text: "This gets them describing their own gap before you've said a word about your product." },
    ],
  },
  {
    id: "brushoffs", n: "1b", title: "Early brush-offs", tag: "Before they've heard anything",
    goal: "Don't argue. Ask permission for one more question, then use that question to pull them back in.",
    objections: true, blocks: [],
  },
  {
    id: "diagnose", n: "2", title: "Diagnose the gap",
    blocks: [
      { t: "say", text: "So I was actually calling to see how you're currently handling after hour calls." },
      { t: "note", text: "Whatever they say, don't argue with it. If they say \"it depends,\" or \"we might pick it up, might not,\" that's your opening:" },
      { t: "say", text: "Yeah, so I'm not sure this would even make sense for you, but have you considered using a voice agent to help with some of those calls? Have you seen the new voice agent technology out there?" },
      { t: "note", text: "Note the soft framing: <b>\"I'm not sure this would even make sense for you.\"</b> It disarms the pitch reflex." },
    ],
  },
  {
    id: "reframe", n: "3", title: "Reframe away from selling",
    blocks: [
      { t: "cue", text: "If there's any resistance (\"we don't get calls like that\"):" },
      { t: "say", text: "Yeah, I wasn't trying to sell you anything today. I'm only trying to help if you have a problem. What I was really trying to do is get you to listen to a demo I've already built for you. It's a voice agent that could handle your calls. I'd just loop it in on a conference call, kind of like right now, and you could hear it live." },
      { t: "key", label: "Key line — reuse anywhere", text: "It wouldn't be a hard sales pitch. You either like it or you don't." },
    ],
  },
  {
    id: "seen-before", n: "4", title: "Push past \"I've seen this before\"",
    blocks: [
      { t: "cue", text: "If they say they've seen similar tech:" },
      { t: "say", text: "You really wouldn't know until you hear it." },
      { t: "cue", text: "Then immediately soften the ask:" },
      { t: "say", text: "It won't hurt. I'm not going to hard sell you on it. I'll be honest, I even offer a low-cost {days} day trial to businesses if they're not sure they're getting enough calls to see if it adds value. We're not even at that point yet. I'm just trying to see if you like what I can build, because we're pretty good at it. We work with a lot of other [their industry] companies." },
    ],
  },
  {
    id: "demo", n: "5", title: "Get the live demo agreement",
    blocks: [
      { t: "say", text: "Yeah, like I said, I'm not trying to hard sell you. I just want to show you what I build, and if you think it adds value, I can put you on our {days} day trial so you can see it in action before the full investment." },
      { t: "cue", text: "Then ask for the yes:" },
      { t: "say", text: "If you're around, I could shoot over an invite for tomorrow, quick call, less than five minutes. I'll run a simulation on the phone with you, then you can ask questions." },
      { t: "cue", text: "Or, if they're open right now:" },
      { t: "say", text: "I'm willing to listen to it right now if that works for you. Let me get the phone number." },
      { t: "cue", text: "Set expectations before dialing in:" },
      { t: "say", text: "This will be a generic version of what I'd normally build, since normally I'd put together more of a knowledge base for you. But it'll give you an idea. I'll ask it some questions, run through the intake process, then hang up and you can ask me anything." },
    ],
  },
  {
    id: "qualify", n: "6", title: "After the demo: qualify with their own numbers",
    goal: "Don't ask if they liked it in the abstract. Get concrete numbers immediately.",
    calc: true,
    blocks: [
      { t: "say", text: "What did you think of the call flow? In comparison to how your calls normally go, how was that?" },
      { t: "cue", text: "Then:" },
      { t: "say", text: "What's an average ticket for you if someone calls and books a job?" },
      { t: "say", text: "Do you have a rough idea of how many calls you might be missing on a weekly basis?" },
      { t: "cue", text: "Then get what they already spend to make the phone ring:" },
      { t: "say", text: "And roughly what are you paying a month for your phone service right now?" },
      { t: "say", text: "What about marketing, ads, Google, that kind of thing. What do you put into that in a typical month?" },
      { t: "note", text: "Don't comment on the numbers yet. You'll use them two ways: the missed-call math shows the revenue leaking out, and the phone bill plus marketing spend shows they're <b>already paying every month to make the phone ring</b>, then letting some of those calls go to voicemail. Both go in the calculator below." },
      { t: "note", text: "Do the math out loud, using <b>their</b> numbers, not yours:" },
      { t: "say", text: "So let's make it easy. Say it's four missed calls a week, average job is $500, that's $2,000 a week, times four weeks, around $8,000 a month potentially slipping through the cracks. Our service normally starts around {price} a month." },
      { t: "cue", text: "Then tie it to what they already spend:" },
      { t: "say", text: "And you're already spending about [phone bill] on phone service and [marketing spend] on marketing to get those calls in the first place. This just makes sure the calls you're already paying for actually get picked up." },
      { t: "h3", text: "If they say they don't get enough calls to justify it" },
      { t: "note", text: "Don't let this stall the conversation. Pivot to the Google Maps ranking angle, since low call volume is often partly a visibility problem, not just a coverage problem:" },
      { t: "say", text: "Are you listed 24 hours on Google, by chance?" },
      { t: "cue", text: "If no:" },
      { t: "say", text: "Yeah, so that could be some of the reason. Google tends to rank companies that are 24 hours a little higher on Google Maps, especially for people searching later at night, they put those ones near the top of the list. Once you have an agent like this, you could flip your hours to 24/7 on Google and you'd be right up there, right under [big national competitor]. So you might actually get more calls by doing that. That's one thing this service lets you do that you can't really do without it." },
      { t: "note", text: "This reframes the objection: it's not \"you don't need this because call volume is low,\" it's <b>\"call volume might be low partly because you're not showing as always-open, and this fixes that too.\"</b> Then loop back into the missed-call math once they've engaged with the visibility angle." },
    ],
  },
  {
    id: "close", n: "7", title: "Low risk close", tag: "The {trial} trial",
    blocks: [
      { t: "say", text: "What we'd normally do here is put you on our {days} day trial. It's {trial} one time, and that covers getting you fully set up on our Starter package: we build your agent, run the test calls, and turn it on. You'll see if it actually picks up calls and generates revenue, and after {days} days you decide whether to keep it or not. No commitment past that." },
      { t: "cue", text: "If they show interest but hesitate:" },
      { t: "note", text: "Be straight about the terms if asked: the {trial} is a one-time setup fee, <b>non-refundable</b>, and it is <b>not</b> credited toward the first month. Don't imply otherwise." },
      { t: "say", text: "It's the {trial} trial. About as low risk as it gets. I send over the doc, you fill it out like any other vendor paperwork, and you're in for {trial}. That covers the setup work, so it's non-refundable, but that's the only money on the table. We set up the billing account, you'll know the exact renewal date, it's on your calendar, and if you cancel before then, {trial} is all you're out. If you keep it, it's {price} a month on the Starter package." },
    ],
  },
  {
    id: "onboarding", n: "8", title: "Set onboarding expectations and lock the next call",
    blocks: [
      { t: "say", text: "It'll take some time to onboard you. Even if you get the doc back tomorrow, we'd still need about a week to make sure everything's solid, run test calls on the agent, and confirm it's working right." },
      { t: "cue", text: "Confirm carrier for call forwarding:" },
      { t: "say", text: "What mobile carrier do you have, T-Mobile, Verizon, AT&T?" },
      { t: "say", text: "We have a lot of [carrier] clients. It's conditional call forwarding, a simple dial in code on your phone with the forwarding number for your agent. After that's set up, instead of going to voicemail, we answer those calls and send you after call summaries plus your own dashboard." },
      { t: "cue", text: "Close with a specific day/time, not \"I'll follow up\":" },
      { t: "say", text: "What's your schedule look like? I have availability tomorrow afternoon, or we could do Monday." },
    ],
  },
  {
    id: "voicemail", n: "VM", title: "Voicemail script", tag: "When the call goes straight to voicemail",
    goal: "Keep it short. No pause for a callback close — just plant the hook and leave the number once, naturally.",
    blocks: [
      { t: "say", text: "Hello, my name is [name] with {brand}. I just wanted to see if you had anything in place other than this voicemail system for handling your overflow and after-hours calls? You might already be aware of this but, 80% of people who hit your voicemail just hang up and call the next company, so I've been helping other [industry] companies capture those calls with custom voice agents. If you're looking for an easy way to capture more calls, feel free to give me a call back, my number is [phone number]. Thank you!" },
    ],
  },
  {
    id: "objections", n: "OBJ", title: "Objection handling reference", tag: "Every objection, one place",
    objectionsAll: true, blocks: [],
  },
  {
    id: "phrases", n: "TONE", title: "Reusable phrases", tag: "Tone-setting lines",
    phrases: [
      "I wasn't trying to sell you anything today.",
      "It wouldn't be a hard sales pitch. You either like it or you don't.",
      "We're not even at that point yet.",
      "It's as low risk as you'd probably be able to get it.",
      "No hard feelings if not.",
    ],
    blocks: [
      { t: "note", text: "These lines consistently lower resistance because they explicitly disclaim the pushy-salesperson frame before the prospect has to defend against it." },
    ],
  },
  {
    id: "edge", n: "EDGE", title: "Edge case",
    blocks: [
      { t: "note", text: "If someone swears at you:" },
      { t: "say", text: "Oh yeahhh, oh yeahhh, Big Man, Big Man." },
      { t: "note", text: "Then proceed to booking a time." },
    ],
  },
];

export const OBJECTIONS: Objection[] = [
  {
    id: "o-not-interested", early: true, q: "I'm not interested.",
    full: [
      { t: "say", text: "Okay, that's fair. Before I let you go, can I just ask one thing?" },
      { t: "cue", text: "If yes:" },
      { t: "say", text: "Are you trying to capture more leads for your business right now?" },
      { t: "cue", text: "If yes:" },
      { t: "say", text: "Well, 80% of callers who hit your voicemail hang up and call the next company. Before you spend money on ads or marketing, wouldn't it make sense to capture all the calls you're currently getting?" },
    ],
    short: "Ask permission for one more question, then: \"Are you trying to capture more leads right now?\" If yes, use the 80% voicemail abandonment stat to reframe toward capturing calls before spending on ads.",
  },
  {
    id: "o-tried-it", early: true, q: "I tried that once and it didn't work / I didn't like it.",
    full: [
      { t: "say", text: "Okay, that's fair. Before I let you go, can I just ask one thing?" },
      { t: "cue", text: "If yes:" },
      { t: "say", text: "I know the one you tried kind of sucked, I get it, I think a lot of them suck too. But what if there was a scenario where there was one that didn't suck?" },
    ],
    short: "Ask permission for one more question, then hand them a scenario where a better version exists.",
  },
  {
    id: "o-bad-time", early: true, q: "Now's not a good time.",
    full: [
      { t: "say", text: "That's fine, I wasn't trying to get into the details right now. I was hoping to schedule a time with you when you're free." },
    ],
    short: "Move straight to booking. Don't pitch.",
  },
  {
    id: "o-already-have", early: true, q: "We already have something for that.",
    full: [
      { t: "say", text: "Nice. How's your experience been with it so far?" },
      { t: "note", text: "Let their answer surface the gap (cost, quality, missed edge cases) rather than pitching against a competitor directly." },
    ],
    short: "Let them surface the gap instead of pitching against a named competitor.",
  },
  {
    id: "o-send-email", early: true, q: "Just send me an email / send me info.",
    full: [
      { t: "say", text: "I can send you an email, but the proof is in the pudding. I can call you, we can do a conference call, you'll be able to see how the product works and hear the agent yourself. That's the only way you're going to know if it can help you or not." },
    ],
    short: "A quick conference call lets them hear the agent live. That's the only way to know if it helps.",
  },
  {
    id: "o-too-busy", early: true, q: "We're too busy / it's our busy season.",
    full: [
      { t: "say", text: "Got it. Just out of curiosity, how many calls do you get during your busy season compared to when things are slow?" },
      { t: "note", text: "Use the answer to set up the missed-call math later in the call." },
    ],
    short: "Feed their busy-season number into the missed-call math later.",
  },
  {
    id: "o-partner", early: true, q: "I need to talk to my partner / boss first.",
    full: [
      { t: "say", text: "That's fine, you can consult them. But when it comes to voice agents, we're really the experts, so would it be helpful to set up a time where we can all get on a call together and I can answer any questions they might have?" },
    ],
    short: "Agree, then get everyone on one call so you can answer their questions directly.",
  },
  {
    id: "o-no-consistent", q: "We don't get consistent calls like that.",
    full: [
      { t: "say", text: "Yeah, that's fair. I wasn't trying to sell you anything today, just trying to help if there's a problem. What I'd really like is for you to hear the demo I already built. You either like it or you don't." },
    ],
    short: "Disclaim the pitch, then ask them to just hear the demo.",
  },
  {
    id: "o-seen-similar", q: "I've seen something similar before.",
    full: [
      { t: "say", text: "You really wouldn't know until you hear it. And it won't hurt, I'm not going to hard sell you. I even offer a {days} day trial so businesses can see if it adds value before committing to anything." },
    ],
    short: "They can't judge it until they hear it, and there's a low-cost trial behind it anyway.",
  },
  {
    id: "o-vague", q: "Vague / non-committal (\"I guess it wouldn't be that... I mean...\")",
    full: [
      { t: "note", text: "Redirect to numbers immediately. Get them doing math with you instead of talking themselves out of it." },
      { t: "say", text: "What's an average ticket for you if someone calls and books a job?" },
    ],
    short: "Redirect straight to their numbers.",
  },
  {
    id: "o-not-enough-calls", q: "We don't really get enough calls to justify this.",
    full: [
      { t: "say", text: "Are you listed 24 hours on Google, by chance?" },
      { t: "cue", text: "If no:" },
      { t: "say", text: "That could be part of why. Google ranks 24 hour businesses higher on Maps, especially for late night searches. Flip your hours to 24/7 once you have this and you show up higher, right near the big national competitors, which could actually bring in more calls." },
      { t: "note", text: "Then bridge back into the missed-call math once they engage." },
    ],
    short: "Pivot to the Google Maps visibility angle, then bridge back to the missed-call math.",
  },
  {
    id: "o-overnight-only", q: "We only need it overnight, not for day calls.",
    full: [
      { t: "say", text: "Do you find yourself missing calls during the day too, like when you're on a job site or get more than one caller at once?" },
      { t: "note", text: "Reframe as backup coverage, not a full replacement." },
    ],
    short: "Reframe as backup coverage, not a full replacement.",
  },
  {
    id: "o-price-early", q: "Price hesitation before you've even quoted a number",
    full: [
      { t: "note", text: "Don't quote price first. Build the missed revenue math with their numbers, then introduce the monthly price as small relative to what's already leaking." },
      { t: "say", text: "Before we get into price, what are you paying for your phone service and marketing right now? I want to make sure this actually makes sense next to what you're already spending." },
      { t: "note", text: "Their phone bill plus marketing spend is the number the price gets compared to, not zero." },
    ],
    short: "Don't quote price first. Build the leak first and anchor to their phone bill and marketing spend, then the price looks small.",
  },
  {
    id: "o-think-about-it", q: "Let me think about it / stalling on the trial",
    full: [
      { t: "say", text: "It's the {trial} trial, so it's about as low risk as it gets. {trial} covers the setup, and that's the only money on the table. You get an exact renewal date on your calendar. If you're not seeing value by then, you cancel and {trial} is all you're out." },
    ],
    short: "Lean on the {trial} trial and the exact renewal date on their calendar.",
  },
  {
    id: "o-delay-schedule", q: "Asking to delay scheduling",
    full: [
      { t: "note", text: "Don't leave it open ended. Offer two specific times." },
      { t: "say", text: "I have availability tomorrow afternoon, or we could do Monday, what works?" },
    ],
    short: "Never open-ended. Offer two specific times.",
  },
];
