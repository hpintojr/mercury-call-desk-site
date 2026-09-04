import Icon from "./Icon";

export default function FAQAccordion({ items }: { items: { q: string; a: string | string[] }[] }) {
  return (
    <div className="divide-y divide-mcd-line rounded-xl2 border border-mcd-line bg-white">
      {items.map((it) => (
        <details key={it.q} className="group">
          <summary className="tap flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-mcd-navy hover:bg-mcd-surface/60">
            <span>{it.q}</span>
            <Icon name="chevron" className="chev h-5 w-5 shrink-0 text-mcd-blue transition-transform" />
          </summary>
          <div className="space-y-3 px-5 pb-5 text-sm leading-relaxed text-mcd-muted">
            {(Array.isArray(it.a) ? it.a : [it.a]).map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </details>
      ))}
    </div>
  );
}
