import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { site, links } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `The terms and conditions governing your use of ${site.name}.`,
};

function H({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 text-xl font-extrabold text-mcd-navy sm:text-2xl">{children}</h2>;
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

export default function TermsPage() {
  return (
    <>
      <PageHero crumb="Terms & Conditions" title="Terms & Conditions" body={`Last updated ${site.legalUpdated}`} />
      <section className="py-14 sm:py-20">
        <div className="container-x max-w-3xl">
          <P>
            These Terms & Conditions ("Terms") are a binding agreement between you and{" "}
            <strong className="text-mcd-navy">{site.legalName}</strong> ("{site.shortName}," "we," "us," or "our"),
            a company located at {site.address.join(", ")}. They govern your access to and use of {site.url}
            (the "Site"), our customer dashboard, our AI phone assistant service, and any other product or service that
            links to these Terms (collectively, the "Services").
          </P>
          <P>
            By accessing or using the Services, you agree that you have read, understood, and agree to be bound by
            these Terms. If you do not agree, you must not access or use the Services. The Services are intended for
            users who are at least 18 years old; if you are under 18, you may not use the Services.
          </P>
          <P>
            We may update these Terms from time to time. Changes take effect once posted on this page with a new
            "Last updated" date. Your continued use of the Services after changes are posted means you accept the
            revised Terms.
          </P>

          <H>1. Our Services</H>
          <P>
            {site.name} provides AI-powered phone assistants that answer calls, book appointments, qualify leads,
            send text messages, and connect with third-party tools (such as calendars, CRMs, and payment processors)
            on behalf of our business customers. The information on the Site is not intended for distribution in any
            jurisdiction where such distribution would be contrary to law. If you access the Services from outside
            the United States, you are responsible for compliance with your local laws.
          </P>

          <H>2. Intellectual Property Rights</H>
          <P>
            We own or license all intellectual property rights in the Services, including the source code,
            software, designs, text, graphics, and logos (the "Content" and "Marks"). Subject to your compliance
            with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access
            the Services and to download or print Content solely for your personal or internal business use. You may
            not copy, reproduce, republish, sell, or otherwise exploit the Services, Content, or Marks for any
            commercial purpose without our prior written permission.
          </P>

          <H>3. User Representations</H>
          <P>By using the Services, you represent and warrant that:</P>
          <UL items={[
            "all registration and account information you submit is true, accurate, current, and complete, and you will keep it updated;",
            "you have the legal capacity to agree to these Terms and are not a minor in your jurisdiction;",
            "you will not access the Services through automated or non-human means, such as a bot or script;",
            "you will not use the Services for any illegal or unauthorized purpose; and",
            "your use of the Services will not violate any applicable law or regulation.",
          ]} />
          <P>
            If any information you provide is untrue, inaccurate, or incomplete, we may suspend or terminate your
            account and refuse any current or future use of the Services.
          </P>

          <H>4. Account Registration</H>
          <P>
            Certain parts of the Services, such as the customer dashboard, require an account. You are responsible
            for keeping your login credentials confidential and for all activity that occurs under your account. We
            may remove or change a username or account identifier that we determine, in our reasonable discretion,
            to be inappropriate or otherwise objectionable.
          </P>

          <H>5. Purchases &amp; Payment</H>
          <P>
            We use Stripe to process payments and accept major credit and debit cards. You agree to provide current,
            complete, and accurate billing information and to promptly update it as needed. All fees are quoted and
            charged in US dollars, and applicable taxes will be added where required. We may correct pricing errors
            at any time, even after an order has been placed, and we reserve the right to refuse or cancel any order
            at our discretion.
          </P>

          <H>6. Subscriptions</H>
          <P>
            {site.name} plans are offered on a monthly or annual subscription basis and automatically renew at the
            end of each billing cycle unless canceled. By subscribing, you authorize us to charge your payment method
            on a recurring basis until you cancel. You may cancel at any time through your dashboard or by emailing{" "}
            <a href={`mailto:${site.email}`} className="text-mcd-blue hover:underline">{site.email}</a>; cancellation
            takes effect at the end of the then-current billing period. Fees already paid are non-refundable except
            as required by law. We may change subscription pricing from time to time and will provide notice of any
            change before it takes effect on your account.
          </P>

          <H>7. Prohibited Activities</H>
          <P>You agree not to:</P>
          <UL items={[
            "systematically scrape or harvest data from the Services without our written permission;",
            "attempt to trick, defraud, or mislead us or other users, including to learn account credentials;",
            "circumvent or interfere with the security features of the Services;",
            "upload viruses, malware, or other harmful code, or otherwise disrupt the operation of the Services;",
            "use the Services to harass, abuse, or harm another person;",
            "impersonate another person or misrepresent your affiliation with any person or entity;",
            "reverse engineer, decompile, or disassemble any part of the Services except as permitted by law;",
            "use the Services to violate any applicable law, including telemarketing and messaging laws such as the TCPA and FCC regulations; or",
            "use the Services to compete with us or for any unauthorized commercial purpose.",
          ]} />

          <H>8. Third-Party Websites &amp; Content</H>
          <P>
            The Services may link to third-party websites or integrate with third-party tools (such as calendars,
            payment processors, or CRMs) that we do not control. We are not responsible for the content, accuracy,
            or practices of any third-party site or service, and your use of them is governed by their own terms and
            privacy policies.
          </P>

          <H>9. Services Management</H>
          <P>
            We reserve the right, without obligation, to monitor the Services for violations of these Terms, take
            appropriate legal action against anyone who violates the law or these Terms, and to otherwise manage the
            Services in a manner designed to protect our rights and property and to keep the Services running
            properly.
          </P>

          <H>10. Privacy Policy</H>
          <P>
            Please review our <Link href={links.legal.privacy} className="text-mcd-blue hover:underline">Privacy Policy</Link>,
            which explains how we collect, use, and safeguard information and is incorporated into these Terms. The
            Services are hosted in the United States; if you access them from another region, you consent to your
            data being transferred to and processed in the United States.
          </P>

          <H>11. Term &amp; Termination</H>
          <P>
            These Terms remain in effect while you use the Services. We may deny access to, suspend, or terminate
            your use of the Services at any time, without notice or liability, for any reason, including breach of
            these Terms. If we terminate your account, you may not attempt to re-register under a false or borrowed
            identity.
          </P>

          <H>12. Modifications &amp; Interruptions</H>
          <P>
            We may change, suspend, or discontinue any part of the Services at any time without notice, and we are
            not liable for any loss or inconvenience caused by downtime, maintenance, or discontinuance of the
            Services.
          </P>

          <H>13. Governing Law</H>
          <P>
            These Terms and your use of the Services are governed by the laws of the State of California, without
            regard to its conflict-of-law principles.
          </P>

          <H>14. Dispute Resolution</H>
          <P>
            If a dispute arises, the parties agree to first attempt to resolve it informally for at least 30 days
            before pursuing formal proceedings. Any dispute that cannot be resolved informally will be resolved
            exclusively in the state or federal courts located in Riverside County, California, and each party
            consents to personal jurisdiction and venue there. Disputes must be brought individually and not as part
            of a class action.
          </P>

          <H>15. Corrections</H>
          <P>
            The Services may contain typographical errors, inaccuracies, or omissions, including pricing and
            availability. We reserve the right to correct any such errors and to update information at any time
            without prior notice.
          </P>

          <H>16. Disclaimer</H>
          <P>
            THE SERVICES ARE PROVIDED ON AN "AS-IS" AND "AS-AVAILABLE" BASIS. TO THE FULLEST EXTENT PERMITTED BY LAW,
            WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
            PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED,
            SECURE, OR ERROR-FREE.
          </P>

          <H>17. Limitation of Liability</H>
          <P>
            TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL {site.shortName} OR ITS OFFICERS, EMPLOYEES, OR
            AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR PUNITIVE DAMAGES ARISING FROM
            YOUR USE OF THE SERVICES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL LIABILITY TO YOU
            FOR ANY CLAIM ARISING FROM THE SERVICES WILL NOT EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS BEFORE
            THE CLAIM AROSE. SOME JURISDICTIONS DO NOT ALLOW THESE LIMITATIONS, SO SOME OF THE ABOVE MAY NOT APPLY TO
            YOU.
          </P>

          <H>18. Indemnification</H>
          <P>
            You agree to defend, indemnify, and hold us harmless from any claim or demand, including reasonable
            attorneys&apos; fees, made by any third party due to or arising out of your use of the Services, your
            breach of these Terms, or your violation of any law or the rights of a third party.
          </P>

          <H>19. User Data</H>
          <P>
            We maintain certain data you transmit through the Services for the purpose of operating and improving
            the Services. While we perform routine backups, you are responsible for any data you transmit, and you
            agree that we have no liability to you for loss or corruption of such data.
          </P>

          <H>20. Electronic Communications</H>
          <P>
            By using the Services, you consent to receive electronic communications from us, and you agree that any
            notices, agreements, and disclosures we provide electronically satisfy any legal requirement that such
            communication be in writing.
          </P>

          <H>21. SMS Text Messaging</H>
          <P>
            If you opt into text messaging from {site.name} or one of our customers&apos; AI assistants, you consent
            to receive SMS messages such as appointment confirmations, reminders, and account alerts. Message and
            data rates may apply. Reply STOP to any message to opt out, or reply HELP for assistance. You can also
            contact us at <a href={`mailto:${site.email}`} className="text-mcd-blue hover:underline">{site.email}</a>.
          </P>

          <H>22. California Users &amp; Residents</H>
          <P>
            If a complaint with us is not satisfactorily resolved, California residents may contact the Complaint
            Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in
            writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834, or by telephone at
            (800) 952-5210.
          </P>

          <H>23. Miscellaneous</H>
          <P>
            These Terms, together with our Privacy Policy, constitute the entire agreement between you and us
            regarding the Services. Our failure to enforce any right or provision will not be treated as a waiver of
            that right. If any provision is found unenforceable, the remaining provisions remain in full force and
            effect. Nothing in these Terms creates a partnership, joint venture, employment, or agency relationship
            between you and us.
          </P>

          <H>24. Contact Us</H>
          <P>
            Questions about these Terms can be sent to:
          </P>
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
