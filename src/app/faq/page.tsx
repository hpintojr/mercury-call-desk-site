import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FAQAccordion from "@/components/FAQAccordion";
import { site } from "@/config/site";
import { faqSections } from "@/content/faq";

export const metadata: Metadata = {
  title: "Help & FAQ",
  description: "Everything you need to know about your AI phone assistant, from setup to optimization. FAQs, quick fixes, and official info on every feature.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero crumb="FAQ's" title={`Get the most from your ${site.name} assistant`} body="Everything you need to know about your AI phone assistant, from setup to optimization. FAQs, quick fixes, and official info on every feature." />

      {/* Section jump nav — horizontal chips on mobile, sticky sidebar on desktop */}
      <section className="py-10 sm:py-16">
        <div className="container-x lg:grid lg:grid-cols-12 lg:gap-10">
          <nav aria-label="FAQ sections" className="lg:col-span-3">
            <ul className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] lg:sticky lg:top-24 lg:mx-0 lg:flex-col lg:px-0 [&::-webkit-scrollbar]:hidden">
              {faqSections.map((s) => (
                <li key={s.id} className="shrink-0">
                  <a href={`#${s.id}`} className="tap inline-flex items-center rounded-full border border-mcd-line bg-white px-4 text-sm font-semibold text-mcd-navy hover:border-mcd-blue hover:text-mcd-blue lg:w-full">{s.title}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-8 space-y-14 lg:col-span-9 lg:mt-0">
            {faqSections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-24">
                <h2 className="text-2xl font-extrabold text-mcd-navy sm:text-3xl">{s.title}</h2>
                <p className="mt-2 text-mcd-muted">{s.subtitle}</p>
                <div className="mt-6"><FAQAccordion items={s.items} /></div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
