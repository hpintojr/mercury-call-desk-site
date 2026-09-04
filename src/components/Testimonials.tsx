import Icon from "./Icon";
import { testimonials } from "@/content/testimonials";

/** Horizontal snap-scroll on mobile/tablet; 3-column grid on desktop. */
export default function Testimonials({ limit }: { limit?: number }) {
  const list = limit ? testimonials.slice(0, limit) : testimonials;
  return (
    <ul className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {list.map((t) => (
        <li key={t.name} className="flex w-[85%] shrink-0 snap-start flex-col rounded-xl2 border border-mcd-line bg-white p-6 shadow-sm sm:w-[60%] lg:w-auto">
          <Icon name="quote" className="h-6 w-6 text-mcd-sky" />
          <p className="mt-3 flex-1 text-sm leading-relaxed text-mcd-ink">&ldquo;{t.quote}&rdquo;</p>
          <footer className="mt-5">
            <p className="font-bold text-mcd-navy">{t.name}</p>
            <p className="text-xs text-mcd-muted">{t.role}</p>
          </footer>
        </li>
      ))}
    </ul>
  );
}
