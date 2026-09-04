export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-3 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <ul className="flex w-max animate-marquee gap-3" aria-hidden>
        {row.map((t, i) => (
          <li key={i} className="whitespace-nowrap rounded-full border border-mcd-line bg-white px-4 py-2 text-sm font-semibold text-mcd-navy shadow-sm">{t}</li>
        ))}
      </ul>
      <ul className="sr-only">{items.map((t) => <li key={t}>{t}</li>)}</ul>
    </div>
  );
}
