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
 *
 * The booking widget suppresses its own logo/title header when it detects it's running
 * inside an iframe (it assumes the host page provides branding), so we render the MCD
 * logo + heading ourselves above the embed to match sulus.ai's own drawer layout.
 *
 * The iframe is NOT loaded up front (it would compete with the main page for bandwidth).
 * Instead we wait until the main page has finished loading, then quietly preload the iframe
 * in the background (hidden) during idle time, so by the time someone actually clicks
 * "Demo" the booking widget is already warm and opens instantly instead of showing its
 * own ~2s load.
 */
export default function DemoDrawerProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // becomes true once the iframe should exist in the DOM
  const open = useCallback(() => { setMounted(true); setOpen(true); }, []);
  const close = useCallback(() => setOpen(false), []);

  // Preload the booking iframe in the background, but only after the main page is done loading.
  useEffect(() => {
    if (mounted) return;

    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const schedulePreload = () => {
      const ric = (window as any).requestIdleCallback as
        | ((cb: () => void, opts?: { timeout: number }) => number)
        | undefined;
      if (ric) {
        idleId = ric(() => setMounted(true), { timeout: 3000 });
      } else {
        // Safari / older browsers: fall back to a short delay after load.
        timeoutId = setTimeout(() => setMounted(true), 1500);
      }
    };

    if (document.readyState === "complete") {
      schedulePreload();
    } else {
      window.addEventListener("load", schedulePreload, { once: true });
    }

    return () => {
      window.removeEventListener("load", schedulePreload);
      const cic = (window as any).cancelIdleCallback as ((id: number) => void) | undefined;
      if (idleId !== undefined && cic) cic(idleId);
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, [mounted]);

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
        <header className="relative flex flex-col items-center gap-1 border-b border-mcd-line px-5 pb-4 pt-6 text-center">
          <button type="button" onClick={close} aria-label="Close" className="tap absolute right-3 top-3 inline-flex items-center justify-center rounded-full text-mcd-muted hover:bg-mcd-surface hover:text-mcd-navy">
            <Icon name="x" className="h-5 w-5" />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/mcd-icon.svg" alt="" className="h-9 w-9" />
          <p className="eyebrow mt-1">Live demo</p>
          <h2 className="text-lg font-extrabold text-mcd-navy">See {site.name} in Action</h2>
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
