import Link from "next/link";
import Logo from "./Logo";
import Icon, { type IconName } from "./Icon";
import { site, nav, links } from "@/config/site";
import { comparisons } from "@/content/comparisons";

const socials: { label: string; href: string; icon: IconName }[] = [
  { label: "Facebook", href: site.social.facebook, icon: "facebook" },
  { label: "Instagram", href: site.social.instagram, icon: "instagram" },
  { label: "X", href: site.social.x, icon: "xsocial" },
  { label: "YouTube", href: site.social.youtube, icon: "youtube" },
  { label: "LinkedIn", href: site.social.linkedin, icon: "linkedin" },
];

const heading = "text-sm font-bold uppercase tracking-wider text-white/90";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-mcd-navy text-white">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-white/70">
            Mercury CRM, a full phone system and dialer, and AI assistants that answer every call, book the job and follow up. One platform, one bill.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-mcd-cyan hover:text-mcd-cyan">
                <Icon name={s.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className={heading}>Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {nav.map((n) => <li key={n.href}><Link href={n.href} className="hover:text-mcd-cyan">{n.label}</Link></li>)}
            <li><a href={links.demo} className="hover:text-mcd-cyan">Demo</a></li>
            <li><a href={links.login} className="hover:text-mcd-cyan">Login</a></li>
          </ul>
        </div>

        <div>
          <h3 className={heading}>Company</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><Link href="/agencies" className="hover:text-mcd-cyan">For Agencies: GoHighLevel Alternative</Link></li>
            <li><Link href="/faq" className="hover:text-mcd-cyan">FAQ&apos;s</Link></li>
          </ul>
          <h3 className={`${heading} mt-6`}>Affiliate Program</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><a href={links.affiliate} className="hover:text-mcd-cyan">Become an Affiliate</a></li>
            <li><a href={links.affiliateAgreement} className="hover:text-mcd-cyan">Affiliate Agreement</a></li>
          </ul>
        </div>

        <div>
          <h3 className={heading}>Compare</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {comparisons.map((c) => <li key={c.slug}><Link href={`/vs/${c.slug}`} className="hover:text-mcd-cyan">Mercury vs {c.competitor}</Link></li>)}
          </ul>
        </div>

        <div>
          <h3 className={heading}>Contact Us</h3>
          <address className="mt-4 space-y-3 text-sm not-italic text-white/70">
            <p>
              <span className="block font-semibold text-white/90">Corporate HQ</span>
              {site.address.map((line) => <span key={line} className="block">{line}</span>)}
            </p>
            <p><a href={site.phoneHref} className="hover:text-mcd-cyan">{site.phone}</a></p>
            <p><a href={`mailto:${site.email}`} className="hover:text-mcd-cyan">{site.email}</a></p>
            <p><Link href="/contact" className="font-semibold text-mcd-cyan hover:underline">Contact us</Link></p>
          </address>
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
