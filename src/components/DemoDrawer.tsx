"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import Icon from "./Icon";
import { links, site } from "@/config/site";

type Ctx = { open: () => void; close: () => void; isOpen: boolean };
const DemoCtx = createContext<Ctx>({ open: () => {}, close: () => {}, isOpen: false });
export const useDemo = () => useContext(DemoCtx);

/**
 * Left slide-in drawer with the Sulus CRM booking calendar embedded (mirrors sulus.ai's "Demo" UX).
 * Any <a href={links.demo}> anywhere on the site opens the drawer instead of navigating
 * (click delegation), so the plain URL remains the no-JS / crawler fallback.
 */
export default function DemoDrawerProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // lazy-load the iframe on first open
  const open = useCallback(() => { setMounted(true); setOpen(true); }, []);
  const close = useCallback(() => setOpen(false), []);

  // Intercept every demo link on the page.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      const a = (e.target as HTMLElement).closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      if (a.getAttribute("href") === links.demo || a.href === links.demo) { e.preventDefault(); open(); }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [open]);

  // ESC to close + scroll lock
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [isOpen, close]);

  return (
    <DemoCtx.Provider value={{ open, close, isOpen }}>
      {children}

      {/* Backdrop */}
      <div aria-hidden onClick={close} className={`fixed inset-0 z-[70] bg-mcd-navy/60 backdrop-blur-[2px] transition-opacity duration-300 ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`} />

      {/* Drawer */}
      <aside role="dialog" aria-modal="true" aria-label={`See ${site.name} in action`} aria-hidden={!isOpen}
        className={`fixed inset-y-0 left-0 z-[80] flex w-full flex-col bg-white shadow-2xl transition-transform duration-300 ease-out sm:w-[420px] ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <header className="flex items-center justify-between gap-3 border-b border-mcd-line px-5 py-4">
          <div>
            <p className="eyebrow">Live demo</p>
            <h2 className="text-lg font-extrabold text-mcd-navy">See {site.name} in Action</h2>
          </div>
          <button type="button" onClick={close} aria-label="Close" className="tap inline-flex items-center justify-center rounded-full text-mcd-muted hover:bg-mcd-surface hover:text-mcd-navy">
            <Icon name="x" className="h-5 w-5" />
          </button>
        </header>
        <div className="relative flex-1 bg-mcd-surface">
          {mounted && (
            <iframe src={links.demo} title="Book a demo" className="absolute inset-0 h-full w-full" allow="payment" loading="lazy" />
          )}
        </div>
        <footer className="border-t border-mcd-line px-5 py-3 text-center text-xs text-mcd-muted">
          Prefer to talk now? <a href={links.demoCall} className="font-semibold text-mcd-blue">Call {site.phone}</a>
        </footer>
      </aside>
    </DemoCtx.Provider>
  );
}
