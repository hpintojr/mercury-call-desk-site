import PageHero from "./PageHero";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import Icon, { type IconName } from "./Icon";
import FeatureCard from "./FeatureCard";
import { links, site, aiLine } from "@/config/site";
import type { Comparison, CompareCell } from "../content/comparisons";

const cardIcons: IconName[] = ["mic", "phone", "zap", "chart"];

function Cell({ value }: { value: CompareCell }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center">
        <Icon name="check" className="h-5 w-5 text-green-600" />
      </span>
    );
  }
  if (value === false) {
    return <span className="text-mcd-muted">-</span>;
  }
  return <span className="text-sm font-medium text-mcd-ink">{value}</span>;
}

function CompareTable({ comparison }: { comparison: Comparison }) {
  const { brandColor, darkHeader } = comparison;
  const headerStyle = darkHeader
    ? { backgroundColor: brandColor, color: "#ffffff" }
    : { backgroundColor: `${brandColor}1A`, color: brandColor };
  const cellTint = { backgroundColor: `${brandColor}0D` };

  return (
    <div className="overflow-x-auto rounded-xl2 border border-mcd-line bg-white shadow-sm">
      <table className="w-full min-w-[560px] text-left text-sm">
        <thead>
          <tr className="border-b border-mcd-line bg-mcd-surface">
            <th className="px-5 py-4 font-bold text-mcd-navy">Feature</th>
            <th className="px-5 py-4 font-bold" style={headerStyle}>
              {comparison.competitor}
            </th>
            <th className="px-5 py-4 font-bold text-mcd-navy">Mercury Call Desk</th>
          </tr>
        </thead>
        <tbody>
          {comparison.rows.map((row) => (
            <tr key={row.label} className="border-b border-mcd-line last:border-0">
              <td className="px-5 py-4">
                <span className="font-bold text-mcd-navy">{row.label}</span>
              </td>
              <td className="px-5 py-4" style={cellTint}>
                <Cell value={row.competitor} />
              </td>
              <td className="px-5 py-4">
                <Cell value={row.mercury} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

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
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div
            className="rounded-xl2 border border-mcd-line bg-white p-8 shadow-sm"
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
          <div className="rounded-xl2 border-2 border-mcd-navy bg-white p-8 shadow-md">
            <p className="eyebrow">Mercury Call Desk</p>
            <ul className="mt-4 space-y-2 text-sm text-mcd-ink">
              <li>
                <span className="font-extrabold text-mcd-navy">$99/mo</span> Starter,
                5 sub-accounts
              </li>
              <li>
                <span className="font-extrabold text-mcd-navy">$299/mo</span> Professional,
                unlimited sub-accounts and usage rebilling
              </li>
              <li>
                <span className="font-extrabold text-mcd-navy">$399/mo</span> Agencies,
                limited time, dispatch and SaaS resale
              </li>
            </ul>
            <p className="mt-4 text-sm text-mcd-muted">
              No setup fees. Published usage rates. Enterprise custom.
            </p>
            <div className="mt-6">
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
