import PageHero from "./PageHero";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import Icon, { type IconName } from "./Icon";
import FeatureCard from "./FeatureCard";
import { links, site, aiLine } from "@/config/site";
import type { Comparison, CompareCell } from "../content/comparisons";
import { tiers } from "../content/pricing";

const cardIcons: IconName[] = ["mic", "phone", "zap", "chart"];

/** Competitor cells that state the feature is missing get the red X; add-on or partial answers get the amber dash. */
const missing = /^(Not offered|Not native|Not listed|Not published|None found|Planned, not live)/;

type Mark = "yes" | "no" | "partial";
const markStyle: Record<Mark, { bg: string; icon: IconName | null; label: string }> = {
  yes: { bg: "bg-[#22C55E]", icon: "check", label: "Included" },
  no: { bg: "bg-[#EF4444]", icon: "x", label: "Not included" },
  partial: { bg: "bg-amber-400", icon: null, label: "Partly, or as an add-on" },
};

function Badge({ mark }: { mark: Mark }) {
  const m = markStyle[mark];
  return (
    <span aria-hidden="true" className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${m.bg}`}>
      {m.icon ? <Icon name={m.icon} className="h-4 w-4 text-white [stroke-width:3]" /> : <span className="h-[3px] w-3 rounded-full bg-white" />}
    </span>
  );
}

/** In the setup-fees row "None" is the good answer, so it gets the check and a required fee gets the X. */
function markFor(value: CompareCell, side: "mercury" | "competitor", label: string): Mark {
  if (value === true) return "yes";
  if (value === false) return "no";
  if (typeof value === "object") return "no";
  if (side === "mercury") return "yes";
  if (label === "Setup fees") return /^None/.test(value) ? "yes" : "no";
  return missing.test(value) ? "no" : "partial";
}

function Cell({ value, side, label }: { value: CompareCell; side: "mercury" | "competitor"; label: string }) {
  const mark = markFor(value, side, label);
  const text = typeof value === "object" ? value.text : typeof value === "string" && !missing.test(value) ? value : null;
  return (
    <span className="flex flex-col items-center justify-center gap-1.5">
      <Badge mark={mark} />
      <span className="sr-only">{markStyle[mark].label}{text ? ": " : ""}</span>
      {text && <span className={`text-[11px] leading-snug sm:text-xs ${side === "mercury" ? "text-white/70" : "text-mcd-muted"}`}>{text}</span>}
    </span>
  );
}

function CompareTable({ comparison }: { comparison: Comparison }) {
  const { logo } = comparison;
  return (
    <div className="overflow-hidden rounded-[1.25rem] border border-mcd-line bg-white shadow-xl shadow-mcd-navy/5">
      <table className="w-full table-fixed border-collapse text-left">
        <colgroup>
          <col className="w-[34%] sm:w-[40%]" />
          <col className="w-[33%] sm:w-[30%]" />
          <col className="w-[33%] sm:w-[30%]" />
        </colgroup>
        <thead>
          <tr className="bg-[#DCE9FD]">
            <th scope="col" className="px-3 py-5 text-center text-sm font-extrabold text-mcd-navy sm:px-6 sm:text-lg">Features</th>
            <th scope="col" className="px-2 py-5 text-center sm:px-4">
              <span className="flex items-center justify-center">
                {logo ? (
                  <span className={logo.onDark ? "inline-flex items-center rounded-lg bg-mcd-navy px-2 py-1.5" : "inline-flex items-center"}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={logo.src} alt={logo.wordmark ? comparison.competitor : ""} className={`${logo.wordmark ? "h-5 max-w-full sm:h-7 sm:max-w-[160px]" : "h-7 w-7"} object-contain`} />
                  </span>
                ) : null}
                <span className={logo?.wordmark ? "sr-only" : "ml-2 text-sm font-extrabold text-mcd-navy sm:text-lg"}>{comparison.competitor}</span>
              </span>
            </th>
            <th scope="col" className="px-2 py-3 text-center sm:px-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/mcd-logo-light.svg" alt="Mercury Call Desk" className="mx-auto -my-4 h-12 w-auto max-w-full object-contain sm:h-20 sm:max-w-[240px]" />
            </th>
          </tr>
        </thead>
        <tbody>
          {[...comparison.rows, ...(comparison.extraRows ?? [])].map((row) => (
            <tr key={row.label} className="border-t border-mcd-line">
              <th scope="row" className="px-3 py-5 text-xs font-medium text-mcd-navy sm:px-6 sm:text-base">
                {row.label}
              </th>
              <td className="px-2 py-4 text-center align-middle sm:px-4">
                <Cell value={row.competitor} side="competitor" label={row.label} />
              </td>
              <td className="border-t border-white/10 bg-[#0B1C3A] px-2 py-4 text-center align-middle sm:px-4">
                <Cell value={row.mercury} side="mercury" label={row.label} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** One-line summary per tier for the pricing strip; prices come from src/content/pricing.ts. */
const stripNotes: Record<(typeof tiers)[number]["id"], string> = {
  starter: "5 sub-accounts",
  professional: "unlimited sub-accounts and usage rebilling",
  agencies: "limited time, dispatch and SaaS resale",
};

function PricingStrip({ comparison }: { comparison: Comparison }) {
  const { brandColor, darkHeader } = comparison;
  return (
    <section className="py-14 sm:py-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple math"
          body="One flat monthly rate against per-seat, per-agent, and per-product pricing."
        />
        <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-2">
          <div
            className="flex flex-col rounded-xl2 border border-mcd-line bg-white p-6 shadow-sm sm:p-8"
            style={{ borderTop: `4px solid ${brandColor}` }}
          >
            <p
              className="eyebrow"
              style={{ color: darkHeader ? "#1A1A1A" : brandColor }}
            >
              {comparison.competitor}
            </p>
            <p className="mt-3 text-3xl font-extrabold text-mcd-navy">
              {comparison.competitorPrice}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-mcd-muted">
              Before the add-ons it takes to match Mercury: AI voice agents,
              a real dialer, and dispatch.
            </p>
          </div>
          <div className="flex flex-col rounded-xl2 border-2 border-mcd-navy bg-white p-6 shadow-md sm:p-8">
            <p className="eyebrow">Mercury Call Desk</p>
            <ul className="mt-4 space-y-3 text-sm text-mcd-ink">
              {tiers.map((t) => (
                <li key={t.id} className="flex gap-3">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                  <span>
                    <span className="font-extrabold text-mcd-navy">${t.monthly}/mo</span> {t.name}, {stripNotes[t.id]}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-mcd-muted">
              Unlimited users and contacts on every plan. No setup fees. Published usage rates. Enterprise custom.
            </p>
            <div className="mt-auto pt-6">
              <Button href="/pricing" variant="primary">
                See full pricing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ComparePage({ comparison }: { comparison: Comparison }) {
  return (
    <>
      <PageHero
        crumb={`Vs ${comparison.competitor}`}
        title={`Mercury vs ${comparison.competitor}`}
        body={comparison.tagline}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href={links.demoCall} size="lg" variant="white">
            <Icon name="phone" className="h-4 w-4" /> Call {aiLine.display}
          </Button>
          <Button href={links.demo} size="lg" variant="ghost">
            Schedule a Demo
          </Button>
        </div>
      </PageHero>

      <section className="py-14 sm:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why Mercury"
            title={`Why choose Mercury over ${comparison.competitor}?`}
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {comparison.differentiators.map((d, i) => (
              <FeatureCard
                key={d.title}
                title={d.title}
                body={d.body}
                icon={cardIcons[i % cardIcons.length]}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mcd-surface py-14 sm:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Side by side"
            title="Feature comparison"
            body={`How Mercury Call Desk stacks up against ${comparison.competitor}.`}
          />
          <div className="mt-10">
            <CompareTable comparison={comparison} />
            <p className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-mcd-muted">
              {(["yes", "partial", "no"] as const).map((m) => (
                <span key={m} className="inline-flex items-center gap-2"><span className="scale-75"><Badge mark={m} /></span>{markStyle[m].label}</span>
              ))}
            </p>
          </div>
          {comparison.sources && comparison.sources.length > 0 && (
            <p className="mt-3 text-xs leading-relaxed text-mcd-muted">
              {comparison.competitor} details from public sources{comparison.checked ? `, checked ${comparison.checked}` : ""}:{" "}
              {comparison.sources.map((src, i) => (
                <span key={src.url}>
                  {i > 0 && ", "}
                  <a href={src.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-mcd-blue">{src.label}</a>
                </span>
              ))}
              . Pricing and features change; check with {comparison.competitor} for current terms.
            </p>
          )}
          <p className="mx-auto mt-10 max-w-3xl text-center text-lg leading-relaxed text-mcd-ink">
            {comparison.verdict}
          </p>
        </div>
      </section>

      <PricingStrip comparison={comparison} />

      <section className="bg-mcd-navy py-14 text-white sm:py-20">
        <div className="container-x text-center">
          <p className="eyebrow text-mcd-cyan">Get Started</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-extrabold sm:text-3xl lg:text-4xl">
            Ready to leave {comparison.competitor} behind?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Call {aiLine.display} right now and try to stump the assistant, or
            schedule a custom demo at a time that works for you.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={links.demoCall} size="lg" variant="white">
              <Icon name="phone" className="h-4 w-4" /> Talk to {site.shortName} now
            </Button>
            <Button href={links.demo} size="lg" variant="ghost">
              Schedule a Custom Demo
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
