import Link from "next/link";
import Logo from "./Logo";
import Icon from "./Icon";
import { site, nav, links } from "@/config/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-mcd-navy text-white">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-white/70">
            Intelligent AI phone assistants designed to answer every call, help customers, and free you and your team to focus on what matters most.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white/90">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {nav.map((n) => <li key={n.href}><Link href={n.href} className="hover:text-mcd-cyan">{n.label}</Link></li>)}
            <li><a href={links.demo} className="hover:text-mcd-cyan">Demo</a></li>
            <li><a href={links.login} className="hover:text-mcd-cyan">Login</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white/90">Resources</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><a href={links.login} className="hover:text-mcd-cyan">Dashboard</a></li>
            <li><Link href="/faq" className="hover:text-mcd-cyan">FAQ&apos;s</Link></li>
            <li><a href={links.partner} className="hover:text-mcd-cyan">Become a Sales Partner</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white/90">Get in touch</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><a href={site.phoneHref} className="hover:text-mcd-cyan">{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`} className="hover:text-mcd-cyan">{site.email}</a></li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-mcd-cyan hover:text-mcd-cyan">
              <Icon name="facebook" className="h-4 w-4" />
            </a>
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-mcd-cyan hover:text-mcd-cyan">
              <Icon name="instagram" className="h-4 w-4" />
            </a>
            <a href={site.social.x} target="_blank" rel="noopener noreferrer" aria-label="X" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-mcd-cyan hover:text-mcd-cyan">
              <Icon name="xsocial" className="h-4 w-4" />
            </a>
            <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-mcd-cyan hover:text-mcd-cyan">
              <Icon name="linkedin" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.legalName}. All Rights Reserved.</p>
          <div className="flex gap-5">
            <Link href={links.legal.terms} className="hover:text-white">Terms &amp; Conditions</Link>
            <Link href={links.legal.privacy} className="hover:text-white">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
