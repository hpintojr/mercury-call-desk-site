import PageHero from "./PageHero";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import Icon, { type IconName } from "./Icon";
import FeatureCard from "./FeatureCard";
import { links, site, aiLine } from "@/config/site";
import type { Comparison, CompareCell } from "../content/comparisons";
import { tiers } from "../content/pricing";

const cardIcons: IconName[] = ["mic", "phone", "zap", "chart"];

function Cell({ value }: { value: CompareCell }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center">
        <Icon name="check" className="h-5 w-5 text-green-600" />
        <span className="sr-only">Included</span>
      </span>
    );
  }
  if (value === false) {
    return <span className="text-mcd-muted"><span aria-hidden="true">-</span><span className="sr-only">Not included</span></span>;
  }
  return <span className="text-xs font-medium text-mcd-ink sm:text-sm">{value}</span>;
}

function CompareTable({ comparison }: { comparison: Comparison }) {
  const { brandColor, darkHeader } = comparison;
  const headerStyle = darkHeader
    ? { backgroundColor: brandColor, color: "#ffffff" }
    : { backgroundColor: `${brandColor}1A`, color: brandColor };
  const cellTint = { backgroundColor: `${brandColor}0D` };

  return (
    <div className="overflow-x-auto rounded-xl2 border border-mcd-line bg-white shadow-sm">
      <table className="w-full min-w-[340px] table-fixed border-collapse text-left text-sm">
        <colgroup>
          <col className="w-[32%] sm:w-[38%]" />
          <col className="w-[31%]" />
          <col className="w-[31%]" />
        </colgroup>
        <thead>
          <tr className="border-b border-mcd-line">
            <th scope="col" className="sticky left-0 z-10 bg-mcd-surface px-3 py-4 sm:px-5 text-xs font-bold uppercase tracking-wider text-mcd-navy">Feature</th>
            <th scope="col" className="px-3 py-4 sm:px-5 text-center font-bold" style={headerStyle}>
              <span className="flex flex-col items-center justify-center gap-2 sm:flex-row">
                {comparison.logo && (
                  <span className={`inline-flex h-9 items-center rounded-lg px-2 shadow-sm ${comparison.logo.onDark ? "bg-mcd-navy ring-1 ring-white/20" : "bg-white"}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={comparison.logo.src} alt={comparison.logo.wordmark ? comparison.competitor : ""} className={`${comparison.logo.wordmark ? "h-6 max-w-[120px]" : "h-6 w-6"} object-contain`} />
                  </span>
                )}
                <span className={comparison.logo?.wordmark ? "sr-only" : ""}>{comparison.competitor}</span>
              </span>
            </th>
            <th scope="col" className="bg-mcd-navy px-3 py-4 sm:px-5 text-center font-bold text-white">
              <span className="flex flex-col items-center justify-center gap-2 sm:flex-row">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/brand/mcd-icon.svg" alt="" className="h-6 w-auto" />
                <span>Mercury Call Desk</span>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {comparison.rows.map((row) => (
            <tr key={row.label} className="border-b border-mcd-line last:border-0">
              <th scope="row" className="sticky left-0 z-10 bg-white px-3 py-4 text-xs font-bold text-mcd-navy sm:px-5 sm:text-sm">
                {row.label}
              </th>
              <td className="px-3 py-4 sm:px-5 text-center" style={cellTint}>
                <Cell value={row.competitor} />
              </td>
              <td className="bg-green-50/40 px-3 py-4 sm:px-5 text-center">
                <Cell value={row.mercury} />
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
