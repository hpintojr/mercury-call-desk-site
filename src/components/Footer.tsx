import Link from "next/link";
import Logo from "./Logo";
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
            <li><Link href="/faq" className="hover:text-mcd-cyan">FAQs</Link></li>
            <li><a href={links.partner} className="hover:text-mcd-cyan">Become a Sales Partner</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white/90">Get in touch</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><a href={site.phoneHref} className="hover:text-mcd-cyan">{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`} className="hover:text-mcd-cyan">{site.email}</a></li>
            <li className="pt-2"><a href={site.social.facebook} className="hover:text-mcd-cyan">Facebook</a></li>
            <li><a href={site.social.x} className="hover:text-mcd-cyan">X</a></li>
            <li><a href={site.social.linkedin} className="hover:text-mcd-cyan">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.legalName}. All Rights Reserved.</p>
          <div className="flex gap-5">
            <Link href={links.legal.terms} className="hover:text-white">Terms & Conditions</Link>
            <Link href={links.legal.privacy} className="hover:text-white">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
