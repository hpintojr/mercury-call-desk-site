import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { site, links } from "@/config/site";

export const metadata: Metadata = {
  title: "Affiliate Agreement",
  description: `The terms of the ${site.name} affiliate program: commissions, payouts, marketing rules, and obligations.`,
};

/** Program economics. TODO: confirm with Hamilton before launch. */
const terms = {
  updated: "October 13, 2026",
  directRate: "40%",
  secondTierRate: "5%",
  cookieDays: 90,
  qualifyDays: 45,
  postCancelDays: 30,
  minPayout: "$50",
  forfeitDays: 120,
  payDay: "15th",
  noticeDays: 30,
  liabilityCap: "$1,500",
  nonSolicitMonths: 12,
  venue: "Riverside County, California",
};

function H({ id, children }: { id?: string; children: React.ReactNode }) {
  return <h2 id={id} className="mt-10 scroll-mt-24 text-xl font-extrabold text-mcd-navy sm:text-2xl">{children}</h2>;
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
function B({ children }: { children: React.ReactNode }) {
  return <strong className="text-mcd-navy">{children}</strong>;
}

const toc = [
  ["definitions", "Definitions"],
  ["enrollment", "Enrollment and Relationship"],
  ["obligations", "Your Obligations"],
  ["commissions", "Commissions and Payouts"],
  ["confidentiality", "Confidentiality"],
  ["license", "License to Our Marks"],
  ["termination", "Term and Termination"],
  ["indemnification", "Indemnification"],
  ["liability", "Limitation of Liability"],
  ["disputes", "Governing Law and Disputes"],
  ["non-solicitation", "Non-Solicitation"],
  ["force-majeure", "Force Majeure"],
  ["general", "General Terms"],
] as const;

export default function AffiliateAgreementPage() {
  return (
    <>
      <PageHero crumb="Affiliate Agreement" title="Affiliate Agreement" body={`Last updated ${terms.updated}`} />
      <section className="py-14 sm:py-20">
        <div className="container-x max-w-3xl">
          <P>
            This Affiliate Agreement ("Agreement") is between you ("Affiliate," "you," or "your") and{" "}
            <B>{site.legalName}</B> ("{site.shortName}," "we," "us," or "our"), located at {site.address.join(", ")}.
            It governs your participation in the {site.name} Affiliate Program (the "Program"). By applying to or
            participating in the Program, you agree to this Agreement, our{" "}
            <Link href={links.legal.terms} className="font-semibold text-mcd-blue hover:underline">Terms & Conditions</Link>, and our{" "}
            <Link href={links.legal.privacy} className="font-semibold text-mcd-blue hover:underline">Privacy Policy</Link>.
            If you do not agree, do not join or participate in the Program.
          </P>
          <P>
            We may update this Agreement from time to time. Changes take effect when posted here with a new "Last
            updated" date. Continuing to participate after a change means you accept it.
          </P>

          <nav aria-label="Contents" className="mt-8 rounded-2xl border border-mcd-line bg-mcd-surface p-5 sm:p-6">
            <p className="text-sm font-bold uppercase tracking-wide text-mcd-navy">Contents</p>
            <ol className="mt-3 grid gap-1.5 text-sm sm:grid-cols-2">
              {toc.map(([id, label], i) => (
                <li key={id}>
                  <a href={`#${id}`} className="text-mcd-muted hover:text-mcd-blue">{i + 1}. {label}</a>
                </li>
              ))}
            </ol>
          </nav>

          <H id="definitions">1. Definitions</H>
          <UL items={[
            <><B>Affiliate Link</B> means the unique tracking link we issue to you to refer prospects to {site.name}.</>,
            <><B>Referred Customer</B> means a new customer who first reaches us through your Affiliate Link and purchases a paid {site.name} or Mercury CRM subscription.</>,
            <><B>Qualified Purchase</B> means a paid subscription by a Referred Customer that meets every requirement in Section 4.</>,
            <><B>Net Revenue</B> means the subscription fees we actually collect from a Referred Customer, excluding usage charges (calls, text messages, AI minutes), taxes, refunds, chargebacks, credits, discounts, and payment processing fees.</>,
            <><B>Commission</B> means the amount we pay you for a Qualified Purchase under Section 4.</>,
            <><B>Second-Tier Affiliate</B> means another affiliate who joins the Program through your Affiliate Link.</>,
            <><B>Marks</B> means our names, logos, trademarks, and brand assets, including "{site.name}" and "Mercury CRM."</>,
          ]} />

          <H id="enrollment">2. Enrollment and Relationship</H>
          <P>
            To join, you must submit a complete and accurate application and be at least 18 years old. We review every
            application and may accept or decline it for any reason. Acceptance is confirmed when we send you your
            Affiliate Link. You may hold only one affiliate account.
          </P>
          <P>
            You are an independent contractor. Nothing in this Agreement creates an employment, partnership, joint
            venture, franchise, or agency relationship. You may not make commitments, sign contracts, or make
            statements on our behalf. You are responsible for your own expenses and for all taxes on the Commissions
            you earn, and you must give us a completed W-9 (or the equivalent form for your country) before we pay you.
          </P>

          <H id="obligations">3. Your Obligations</H>
          <P>You agree to promote {site.name} honestly and lawfully. In particular, you will:</P>
          <UL items={[
            <>clearly disclose your affiliate relationship with us wherever you promote us, as required by the FTC Endorsement Guides;</>,
            <>comply with all marketing laws, including the Telephone Consumer Protection Act (TCPA), the CAN-SPAM Act, state telemarketing and texting laws, and all applicable privacy laws;</>,
            <>describe our products, features, and pricing accurately, using only claims we publish on our website;</>,
            <>never send unsolicited email, text messages, or calls (spam) to promote us; and</>,
            <>keep your contact and payout information up to date.</>,
          ]} />
          <P>You will not:</P>
          <UL items={[
            <>bid on our Marks, or misspellings of them, in paid search or social advertising, or use them in domain names, social handles, or ad copy without our written approval;</>,
            <>use cookie stuffing, forced clicks, misleading redirects, or any method that sets your tracking cookie without a real visit;</>,
            <>offer cash back, rebates, or part of your Commission to induce sign-ups, unless we approve it in writing;</>,
            <>refer yourself, your own business, or accounts you control, or create fake accounts to earn Commissions;</>,
            <>promote us on sites or channels with illegal, hateful, violent, sexually explicit, or deceptive content; or</>,
            <>pose as {site.name}, our staff, or our support team.</>,
          ]} />
          <P>
            You must notify us in writing within 14 days if you become subject to any investigation, complaint, or
            legal claim related to your marketing, and within 24 hours if you learn of any unauthorized use of our
            Marks or any security issue involving your account.
          </P>

          <H id="commissions">4. Commissions and Payouts</H>
          <P>
            <B>Qualified Purchase.</B> A purchase becomes a Qualified Purchase when the Referred Customer remains a paying
            customer in good standing for at least {terms.qualifyDays} days after their first payment, with no refund,
            chargeback, or cancellation in that period.
          </P>
          <P>
            <B>Attribution.</B> We credit a referral to the last affiliate whose Affiliate Link the customer clicked
            before purchasing, within a {terms.cookieDays}-day window. Our tracking records are final. Sign-ups that
            arrive without valid tracking, or that are made by existing or former customers, do not earn Commissions.
          </P>
          <P>
            <B>Rates.</B> For each Qualified Purchase you earn a recurring Commission of{" "}
            <B>{terms.directRate} of Net Revenue</B> for as long as the Referred Customer keeps an active paid
            subscription and you remain in the Program. You also earn <B>{terms.secondTierRate} of Net Revenue</B> from
            customers referred by your Second-Tier Affiliates. We may change rates with at least {terms.noticeDays} days'
            notice; changes apply only to sales made after the effective date.
          </P>
          <P>
            <B>Cancellations.</B> Commissions stop when a Referred Customer cancels or stops paying. If a Referred Customer
            returns more than {terms.postCancelDays} days after cancelling, the new subscription is not credited to you.
          </P>
          <P>
            <B>Payouts.</B> We pay earned Commissions monthly, on or around the {terms.payDay} of each month, for
            Qualified Purchases confirmed in the prior month. Payouts are made only when your balance reaches{" "}
            {terms.minPayout}; smaller balances roll over. A balance that stays under {terms.minPayout} for more than{" "}
            {terms.forfeitDays} days, or any balance on an account closed for a violation of this Agreement, is
            forfeited.
          </P>
          <P>
            <B>Clawbacks.</B> If a Commission is paid on a sale that is later refunded, charged back, found to be
            fraudulent, or made in violation of this Agreement, we may deduct that amount from future Commissions or ask
            you to repay it.
          </P>

          <H id="confidentiality">5. Confidentiality</H>
          <P>
            You may receive non-public information from us, such as commission details, product roadmaps, pricing
            plans, and customer information. You will keep it confidential, use it only to take part in the Program,
            and not share it with anyone else. This duty continues after this Agreement ends. You may never contact
            our customers using information you obtained through the Program.
          </P>

          <H id="license">6. License to Our Marks</H>
          <P>
            While you are in good standing, we grant you a limited, non-exclusive, non-transferable, revocable license
            to use the Marks and marketing materials we provide, only to promote {site.name} under this Agreement. You
            may not alter the Marks, combine them with other marks, or register any name or account that includes
            them. All goodwill from using the Marks belongs to us. The license ends automatically when this Agreement
            ends, and you must then remove the Marks from your materials.
          </P>

          <H id="termination">7. Term and Termination</H>
          <P>
            This Agreement starts when we accept your application and continues until ended. Either party may end it
            for any reason with {terms.noticeDays} days' written notice. We may end it immediately, and withhold unpaid
            Commissions, if you breach this Agreement, engage in fraud, or harm our reputation. After termination we
            will pay any earned Commissions that are above the payout minimum and not subject to clawback, and no
            further Commissions will accrue. Sections 4 (clawbacks), 5, 8, 9, 10, and 11 survive termination.
          </P>

          <H id="indemnification">8. Indemnification</H>
          <P>
            You will defend, indemnify, and hold harmless {site.shortName}, its owners, employees, and partners from any
            claims, losses, fines, or expenses (including reasonable attorneys' fees) arising from your marketing
            activities, your breach of this Agreement, or your violation of any law or third-party right.
          </P>

          <H id="liability">9. Limitation of Liability</H>
          <P>
            The Program and our products are provided "as is." We do not guarantee any level of sales or earnings, or
            that tracking will be uninterrupted or error-free. To the fullest extent the law allows, we are not liable
            for any indirect, incidental, special, consequential, or punitive damages, or for lost profits. Our total
            liability under this Agreement will not exceed the lesser of (a) three times the Commissions paid to you
            in the month before the claim arose or (b) {terms.liabilityCap}.
          </P>

          <H id="disputes">10. Governing Law and Disputes</H>
          <P>
            This Agreement is governed by the laws of the State of California, without regard to its conflict-of-law
            rules. Before starting any formal proceeding, both parties will try in good faith to resolve a dispute
            informally for at least 30 days. Any dispute not resolved that way will be settled by binding individual
            arbitration administered by the American Arbitration Association under its Commercial Arbitration Rules,
            held in {terms.venue}. Either party may seek injunctive relief in court to protect its intellectual
            property or confidential information. Claims must be brought individually, not as a class or
            representative action.
          </P>

          <H id="non-solicitation">11. Non-Solicitation</H>
          <P>
            During this Agreement and for {terms.nonSolicitMonths} months after it ends, you will not use information
            obtained through the Program to persuade our customers or other affiliates to stop working with us, or to
            move them to a competing product.
          </P>

          <H id="force-majeure">12. Force Majeure</H>
          <P>
            Neither party is liable for a delay or failure to perform (other than payment obligations) caused by events
            beyond its reasonable control, such as natural disasters, outages of carriers or cloud providers, labor
            actions, government actions, or war.
          </P>

          <H id="general">13. General Terms</H>
          <UL items={[
            <>This Agreement, with our Terms & Conditions and Privacy Policy, is the entire agreement between us about the Program.</>,
            <>You may not assign this Agreement without our written consent. We may assign it to an affiliate or successor.</>,
            <>If any provision is found unenforceable, the rest remains in effect.</>,
            <>Our failure to enforce any provision is not a waiver of it.</>,
            <>Notices to you may be sent to the email on your affiliate account. Notices to us go to <a href={`mailto:${site.email}`} className="font-semibold text-mcd-blue hover:underline">{site.email}</a>.</>,
          ]} />

          <H>Questions</H>
          <P>
            Contact us at <a href={`mailto:${site.email}`} className="font-semibold text-mcd-blue hover:underline">{site.email}</a>{" "}
            or {site.phone}. Ready to join?{" "}
            <Link href={links.affiliate} className="font-semibold text-mcd-blue hover:underline">Become an affiliate</Link>.
          </P>
        </div>
      </section>
    </>
  );
}
