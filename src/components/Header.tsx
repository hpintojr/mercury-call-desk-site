"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Button from "./Button";
import Icon from "./Icon";
import { nav, links } from "@/config/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`sticky top-0 z-50 bg-mcd-navy text-white transition-shadow ${scrolled ? "shadow-lg shadow-black/20" : ""}`}>
      <div className="container-x flex h-20 items-center justify-between gap-4 sm:h-24 lg:h-28">
        <Logo />

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => {
            const active = pathname === n.href;
            return (
              <Link key={n.href} href={n.href} className={`rounded-full px-4 py-2 text-sm font-medium transition hover:bg-white/10 ${active ? "text-mcd-cyan" : "text-white/85"}`} aria-current={active ? "page" : undefined}>
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button href={links.login} variant="ghost">Dashboard</Button>
          <Button href={links.demo}>Demo</Button>
        </div>

        {/* Mobile: quick call + menu */}
        <div className="flex items-center gap-1 lg:hidden">
          <a href={links.demoCall} className="tap inline-flex items-center justify-center rounded-full text-white/90 hover:bg-white/10" aria-label="Call our AI assistant">
            <Icon name="phone" />
          </a>
          <button type="button" onClick={() => setOpen((v) => !v)} className="tap inline-flex items-center justify-center rounded-full hover:bg-white/10" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>
            <Icon name={open ? "x" : "menu"} className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div id="mobile-menu" hidden={!open} className="lg:hidden">
        <div className="fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto bg-mcd-navy sm:top-24">
          <nav aria-label="Mobile" className="container-x flex flex-col py-4">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className={`flex items-center justify-between border-b border-white/10 py-4 text-lg font-semibold ${pathname === n.href ? "text-mcd-cyan" : "text-white"}`}>
                {n.label}
                <Icon name="arrow" className="h-5 w-5 text-white/40" />
              </Link>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <Button href={links.demo} size="lg" full>Schedule a Demo</Button>
              <Button href={links.login} variant="ghost" size="lg" full>Dashboard Login</Button>
            </div>
            <p className="mt-8 text-center text-xs text-white/50">Never miss a call again.</p>
          </nav>
        </div>
      </div>
    </header>
  );
}
