"use client";

import { useEffect, useRef, useState } from "react";
import { links } from "@/config/site";
import { track } from "@/lib/track";

/**
 * The Sulus CRM booking calendar embedded inline (not linked) so the conversion happens on
 * this page. Loads when scrolled near, fires book_open once when it comes into view.
 */
export default function BookEmbed({ slug }: { slug: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [load, setLoad] = useState(false);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setLoad(true);
            if (!fired.current) { fired.current = true; track("book_open", { placement: slug }); }
          }
        }
      },
      { rootMargin: "600px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [slug]);

  return (
    <div ref={ref} className="relative min-h-[640px] overflow-hidden rounded-xl2 border border-mcd-line bg-white shadow-sm">
      {load ? (
        <iframe src={links.demo} title="Book a time with Mercury Call Desk" className="absolute inset-0 h-full w-full" allow="payment" loading="lazy" />
      ) : (
        <div className="flex h-[640px] items-center justify-center text-sm text-mcd-muted">Loading calendar…</div>
      )}
    </div>
  );
}
