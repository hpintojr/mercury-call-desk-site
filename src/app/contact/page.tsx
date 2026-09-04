import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import CTABand from "@/components/CTABand";
import Icon from "@/components/Icon";
import { links, site } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Whether you're exploring integrations, reseller opportunities, or custom partnerships, ${site.name} makes it easy to deliver smarter customer communication solutions that scale.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero crumb="Contact" title={`Partner with ${site.name} to Unlock New Opportunities`} body={`Whether you're exploring integrations, reseller opportunities, or custom partnerships, ${site.name} makes it easy to deliver smarter customer communication solutions that scale.`} />

      <section className="py-14 sm:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading align="left" eyebrow="Let's Connect" title={<>Interested in Collaborating with {site.name}?</>} body="We work with technology partners, integration specialists, and resellers to deliver AI-powered communication solutions that transform the way businesses connect with customers." />
            <div className="mt-8"><ContactForm /></div>
          </div>

          <aside className="space-y-5 lg:col-span-5">
            <blockquote className="rounded-xl2 bg-mcd-navy p-6 text-white">
              {/* TODO: replace with Hamilton's approved founder quote */}
              <Icon name="quote" className="h-6 w-6 text-mcd-cyan" />
              <p className="mt-3 text-lg font-semibold leading-snug">&ldquo;Missed calls are missed revenue. We built {site.name} so every business — big or small — can answer every call like their best employee, 24/7.&rdquo;</p>
              <footer className="mt-4 text-sm text-white/70"><span className="font-bold text-white">Hamilton Pinto Jr.</span> · Founder</footer>
            </blockquote>

            {[
              { title: "Knowledge hub", body: `Guides, FAQs, and best practices to help you succeed with ${site.name}.`, href: "/faq", icon: "chat" as const },
              { title: "Talk to Sales", body: `Get tailored guidance on pricing, features, and how ${site.name} can work for your business. Our team is ready to help you find the right fit.`, href: links.demo, icon: "users" as const },
              { title: `Talk to ${site.name}`, body: `Experience ${site.name} for yourself — call in and let our AI assistant answer your questions, just like it would for your customers.`, href: links.demoCall, icon: "phone" as const },
            ].map((c) => {
              const inner = (
                <>
                  <Icon name={c.icon} className="h-6 w-6 shrink-0 text-mcd-blue" />
                  <div><h3 className="font-bold text-mcd-navy">{c.title}</h3><p className="mt-1 text-sm text-mcd-muted">{c.body}</p></div>
                </>
              );
              const cls = "flex gap-4 rounded-xl2 border border-mcd-line bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md";
              return c.href.startsWith("/") ? <Link key={c.title} href={c.href} className={cls}>{inner}</Link> : <a key={c.title} href={c.href} className={cls}>{inner}</a>;
            })}
          </aside>
        </div>
      </section>

      <section className="bg-mcd-surface py-14 sm:py-20">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Proudly US-Based" title="Founded in the USA. Built for Businesses Everywhere." body={`${site.name} is based in Riverside, California — built in the U.S. for businesses everywhere. Unlike companies that only claim a U.S. presence, we're proud to be truly based here, delivering trust and accountability you can count on.`} />
          </div>
          <dl className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-xl2 border border-mcd-line bg-white p-6"><dt className="flex items-center gap-2 font-bold text-mcd-navy"><Icon name="pin" className="h-5 w-5 text-mcd-blue" />Address</dt><dd className="mt-2 text-sm text-mcd-muted">{site.address.map((l) => <span key={l} className="block">{l}</span>)}</dd></div>
            <div className="rounded-xl2 border border-mcd-line bg-white p-6"><dt className="flex items-center gap-2 font-bold text-mcd-navy"><Icon name="clock" className="h-5 w-5 text-mcd-blue" />Working hours</dt><dd className="mt-2 text-sm text-mcd-muted">{site.hours}</dd></div>
            <div className="rounded-xl2 border border-mcd-line bg-white p-6 sm:col-span-2"><dt className="flex items-center gap-2 font-bold text-mcd-navy"><Icon name="phone" className="h-5 w-5 text-mcd-blue" />Call or email</dt><dd className="mt-2 text-sm text-mcd-muted"><a href={site.phoneHref} className="block font-semibold text-mcd-blue">{site.phone}</a><a href={`mailto:${site.email}`} className="block">{site.email}</a></dd></div>
          </dl>
        </div>
      </section>

      <CTABand eyebrow="Launch with ease" title="Professional AI phone solutions that scale with your success" body={`Join the growing network of businesses and partners who trust ${site.name} to deliver exceptional phone coverage and business automation.`} cta="Get Started Today" href="/pricing" />
    </>
  );
}
