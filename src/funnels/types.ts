import type { IconName } from "@/components/Icon";

/**
 * Webinar / VSL funnel template.
 *
 * One config object drives both pages (register + confirm). To rebrand for a client,
 * copy `mercury-webinar.ts`, change the values, add it to `src/funnels/index.ts`, and
 * add two thin route files (see src/funnels/README.md).
 */
export type FunnelConfig = {
  /** Unique id, sent to the CRM as `funnel` and used in tags. */
  id: string;
  /** Route of the register page, e.g. "/webinar". The confirm page lives at `${basePath}/confirm`. */
  basePath: string;

  brand: {
    name: string;
    /** Logo on dark backgrounds (header + footer). */
    logoOnDark: string;
    logoWidth: number;
    logoHeight: number;
    /** Brand colors. Used as CSS variables, so every component picks them up. */
    colors: {
      /** Page background (dark). */
      bg: string;
      /** Raised surface (cards) on the dark background. */
      surface: string;
      /** Primary accent (buttons, highlights). */
      primary: string;
      /** Second accent for gradients. */
      secondary: string;
      /** Text color used on primary buttons. */
      onPrimary: string;
    };
    supportEmail: string;
    supportPhone: string;
    supportPhoneHref: string;
    legalName: string;
    privacyUrl: string;
    termsUrl: string;
    /** Small print under the footer, e.g. the Meta ads disclaimer. Leave empty to hide. */
    adDisclaimer: string;
  };

  /** The live event. Set `startsAt` to an ISO time with offset. */
  event: {
    title: string;
    startsAt: string;
    durationMinutes: number;
    /** Shown next to the date, e.g. "11:00 AM PT / 2:00 PM ET". */
    timeLabel: string;
    /** Where the live session happens (Zoom link etc). Shown in calendar invites. Leave empty until known. */
    joinUrl: string;
    /** Shown in calendar invites. */
    calendarDescription: string;
  };

  /** Optional per-funnel CRM webhook. Read on the server only, from these env var NAMES (never put the URL itself here). */
  crm: {
    webhookUrlEnv: string;
    webhookSecretEnv: string;
    tags: string[];
  };

  seo: { title: string; description: string };

  register: {
    headerCta: string;
    eyebrow: string;
    headline: string;
    /** Part of the headline to render in the brand gradient. Must appear in `headline`. */
    headlineHighlight?: string;
    subheadline: string;
    video: VideoConfig;
    cta: string;
    ctaSubtext: string;
    trust: { heading: string; logos: { name: string; src?: string }[] };
    problem: { heading: string; intro?: string; items: { title: string; body: string; icon: IconName }[] };
    solution: { eyebrow: string; heading: string; blocks: { title: string; body: string; icon: IconName; stat: string; statLabel: string }[] };
    features: { heading: string; items: { title: string; body: string; icon: IconName }[] };
    results: {
      heading: string;
      /** Set true until real, approved customer results replace the samples. Shows a "Sample" label on each card. */
      samples: boolean;
      items: { metric: string; metricLabel: string; quote: string; name: string; role: string }[];
    };
    faq: { heading: string; items: { q: string; a: string }[] };
    footerCta: { heading: string; body: string; cta: string };
    form: {
      heading: string;
      subheading: string;
      submit: string;
      consent: string;
      /** Ask for company name (optional field). */
      askCompany: boolean;
    };
  };

  confirm: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    video: VideoConfig;
    /** `calendar: true` shows Add to Google / Apple / Outlook buttons; `cta` adds a link button (e.g. the intake form). */
    steps: { title: string; body: string; calendar?: boolean; cta?: { label: string; href: string } }[];
    resources: { heading: string; links: { label: string; href: string; icon: IconName }[] };
    support: { heading: string; body: string; dispatchLabel: string };
  };
};

export type VideoConfig = {
  /**
   * Leave empty to show the 16:9 placeholder. Accepts a YouTube, Vimeo, Wistia or Loom
   * share/embed URL, or a direct .mp4 link.
   */
  url: string;
  placeholderTitle: string;
  placeholderNote: string;
  /** Fake duration shown on the placeholder's control bar. */
  placeholderDuration: string;
};
