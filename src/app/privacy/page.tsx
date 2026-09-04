import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { site, links } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, and protects your information.`,
};

function H({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 text-xl font-extrabold text-mcd-navy sm:text-2xl">{children}</h2>;
}
function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-6 text-base font-bold text-mcd-navy">{children}</h3>;
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-sm leading-relaxed text-mcd-muted sm:text-base">{children}</p>;
}
function UL({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-mcd-muted sm:text-base">
      {items.map((it, i) => <li key={i}>{it}</li>)}
    </ul>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero crumb="Privacy Policy" title="Privacy Policy" body={`Last updated ${site.legalUpdated}`} />
      <section className="py-14 sm:py-20">
        <div className="container-x max-w-3xl">
          <P>
            <strong className="text-mcd-navy">{site.legalName}</strong> ("{site.shortName},"
            "we," "us," or "our") operates {site.url} and the {site.name} AI phone assistant service
            (collectively, the "Service"). This Privacy Policy explains what information we collect, how we use it,
            and the choices you have. Terms used here that aren&apos;t defined have the meaning given to them in our{" "}
            <Link href={links.legal.terms} className="text-mcd-blue hover:underline">Terms &amp; Conditions</Link>,
            which together with this policy form your agreement with us.
          </P>

          <H>Information We Collect</H>
          <H3>Personal data</H3>
          <P>When you use the Service — for example, by booking a demo, filling out our contact form, or creating a dashboard account — we may collect:</P>
          <UL items={[
            "Name and business name",
            "Phone number",
            "Email address",
            "Billing address and payment details (processed securely by Stripe — we do not store full card numbers)",
            "Any information you choose to share in a form, call, or message to us",
          ]} />

          <H3>Usage data</H3>
          <P>
            We automatically collect certain information when you visit the Site, such as your IP address, browser
            type, the pages you visit, the time and date of your visit, and other diagnostic data.
          </P>

          <H3>Cookies</H3>
          <P>
            We use cookies and similar technologies to operate the Site, remember your preferences, and understand
            how the Site is used. You can instruct your browser to refuse cookies, though some parts of the Site may
            not function properly without them.
          </P>

          <H3>AI phone assistant data</H3>
          <P>
            {site.name} provides AI voice assistants that our business customers use to handle calls on their own
            behalf. When a call is placed to one of our customers&apos; assistants, we may process and store:
          </P>
          <UL items={[
            <><strong className="text-mcd-navy">Call data:</strong> the phone numbers on the call, start/end time, duration, and status.</>,
            <><strong className="text-mcd-navy">Call recordings and transcripts:</strong> if enabled by our customer, the audio of the call and a speech-to-text transcript.</>,
            <><strong className="text-mcd-navy">Call logs:</strong> a summary of the conversation flow, the assistant&apos;s responses, and the outcome (e.g., an appointment booked).</>,
            <><strong className="text-mcd-navy">Assistant configuration:</strong> the prompts, scripts, and knowledge base our customer set up for their assistant.</>,
          ]} />
          <P>
            For calls placed to our customers&apos; assistants, we act as a data processor on our customer&apos;s
            behalf; the business you called is the party responsible for how that data is used. Recordings,
            transcripts, and logs are retained according to our customer&apos;s configuration and applicable law, and
            are deleted on request.
          </P>

          <H>How We Use Your Data</H>
          <UL items={[
            "to provide, operate, and maintain the Service;",
            "to process payments and manage your subscription;",
            "to provide customer support and respond to inquiries;",
            "to send appointment confirmations, reminders, and account or billing notices;",
            "to detect, prevent, and address technical issues and abuse;",
            "to improve the Service, including the accuracy of our AI models; and",
            "to send you product updates or offers, which you may opt out of at any time.",
          ]} />

          <H>Retention &amp; Transfer of Data</H>
          <P>
            We retain personal data only as long as necessary for the purposes described in this policy or as
            required by law. The Service is hosted in the United States; if you access it from outside the US, you
            consent to your data being transferred to and processed in the United States.
          </P>

          <H>How We Disclose Data</H>
          <P>We may share information:</P>
          <UL items={[
            "with service providers who help us operate the Service (see Service Providers below);",
            "if required by law or in response to a valid request by a public authority;",
            "in connection with a merger, acquisition, or sale of assets;",
            "with your consent; or",
            "to protect the rights, property, or safety of Mercury Call Desk, our customers, or others.",
          ]} />
          <P>We do not sell your personal information.</P>

          <H>Service Providers</H>
          <P>We use the following categories of third-party providers to operate the Service:</P>
          <UL items={[
            <><strong className="text-mcd-navy">Payments:</strong> Stripe (<a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-mcd-blue hover:underline">stripe.com/privacy</a>)</>,
            <><strong className="text-mcd-navy">Hosting:</strong> Vercel (<a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-mcd-blue hover:underline">vercel.com/legal/privacy-policy</a>)</>,
            <><strong className="text-mcd-navy">CRM &amp; scheduling:</strong> our AI assistant and booking platform, used to manage demo bookings, calls, and customer data</>,
            <><strong className="text-mcd-navy">Analytics:</strong> tools such as Google Analytics, used to understand Site usage (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-mcd-blue hover:underline">policies.google.com/privacy</a>)</>,
          ]} />

          <H>Your Data Protection Rights</H>
          <H3>GDPR (EU/EEA residents)</H3>
          <P>
            You have the right to access, correct, delete, or restrict the use of your personal data, to object to
            our processing of it, to receive a copy in a portable format, and to withdraw consent at any time. To
            exercise these rights, email us at <a href={`mailto:${site.email}`} className="text-mcd-blue hover:underline">{site.email}</a>.
          </P>
          <H3>CCPA (California residents)</H3>
          <P>
            You have the right to know what personal information we collect about you, to request deletion of that
            information, and to opt out of any "sale" or "sharing" of personal information as defined under
            California law. We do not sell your personal information for monetary consideration. To exercise these
            rights, email <a href={`mailto:${site.email}`} className="text-mcd-blue hover:underline">{site.email}</a> with
            the subject line "California Privacy Request."
          </P>
          <P>
            We honor Do Not Track browser signals where technically feasible.
          </P>

          <H>Security</H>
          <P>
            We use commercially reasonable measures to protect your data, but no method of transmission or storage
            over the internet is 100% secure, and we cannot guarantee absolute security.
          </P>

          <H>Children&apos;s Privacy</H>
          <P>
            The Service is not directed to children under 13, and we do not knowingly collect personal data from
            children under 13. If you believe a child has provided us with personal data, please contact us so we
            can remove it.
          </P>

          <H>Links to Other Sites</H>
          <P>
            The Service may link to third-party websites that we do not operate or control. We encourage you to
            review the privacy policy of every site you visit.
          </P>

          <H>Changes to This Policy</H>
          <P>
            We may update this Privacy Policy from time to time. Changes are effective when posted on this page with
            an updated "Last updated" date, and material changes will be communicated by email or a prominent notice
            on the Service.
          </P>

          <H>Contact Us</H>
          <P>If you have questions about this Privacy Policy, contact us at:</P>
          <UL items={[
            <>{site.legalName}</>,
            <>{site.address.join(", ")}</>,
            <>Phone: <a href={site.phoneHref} className="text-mcd-blue hover:underline">{site.phone}</a></>,
            <>Email: <a href={`mailto:${site.email}`} className="text-mcd-blue hover:underline">{site.email}</a></>,
          ]} />
        </div>
      </section>
    </>
  );
}
