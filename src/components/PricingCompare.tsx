import Icon from "./Icon";
import { compare } from "@/content/pricing";

const cols = ["Starter", "Growth", "Pro", "Enterprise"];

function Cell({ v }: { v: string | boolean }) {
  if (v === true) return <Icon name="check" className="mx-auto h-5 w-5 text-mcd-blue" />;
  if (v === false) return <span className="block text-center text-mcd-muted/40">—</span>;
  return <span className="block text-center text-xs font-medium leading-snug sm:text-sm">{v}</span>;
}

/**
 * Mobile-first comparison. The table scrolls horizontally inside its own container with a
 * sticky first column, so the page never scrolls sideways. Desktop shows all columns.
 */
export default function PricingCompare() {
  return (
    <div className="space-y-10">
      {compare.map((g) => (
        <section key={g.title} aria-labelledby={g.title.replace(/\s+/g, "-")}>
          <h3 id={g.title.replace(/\s+/g, "-")} className="mb-3 text-lg font-extrabold text-mcd-navy sm:text-xl">{g.title}</h3>
          <div className="overflow-x-auto rounded-xl2 border border-mcd-line bg-white shadow-sm">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr className="bg-mcd-surface text-mcd-navy">
                  <th scope="col" className="sticky left-0 z-10 w-48 bg-mcd-surface px-4 py-3 text-left text-xs font-bold uppercase tracking-wider sm:w-64">Feature</th>
                  {cols.map((c) => <th key={c} scope="col" className="px-3 py-3 text-center text-xs font-bold uppercase tracking-wider">{c}</th>)}
                </tr>
              </thead>
              <tbody>
                {g.rows.map((r, i) => (
                  <tr key={r.label} className={i % 2 ? "bg-mcd-surface/40" : ""}>
                    <th scope="row" className={`sticky left-0 z-10 px-4 py-3 text-left font-semibold text-mcd-ink ${i % 2 ? "bg-[#fbfcfe]" : "bg-white"}`}>
                      {r.label}
                      {r.tip && <span className="mt-0.5 block text-[11px] font-normal leading-snug text-mcd-muted">{r.tip}</span>}
                    </th>
                    {r.cells.map((c, j) => <td key={j} className="px-3 py-3 align-middle"><Cell v={c} /></td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </div>
  );
}
