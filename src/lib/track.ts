/**
 * Client-side tracking helpers. Everything goes through window.dataLayer so a single
 * GTM container (or the direct tags in <Analytics/>) can fan events out to GA4, Meta and Google Ads.
 *
 * Events pushed:
 *   call_click        { phone, placement }   — any tel: link click (AI line vs office line)
 *   callback_request  { slug, industry }     — landing-page callback form submitted
 *   contact_submit    { }                    — /contact form submitted
 *   book_open         { placement }          — demo calendar opened / scrolled into view
 */
declare global {
  interface Window {
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(event: string, params: Record<string, string | number | boolean | undefined> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...params });
  // Direct tags (when GTM is not in use)
  try {
    if (event === "callback_request" || event === "contact_submit") {
      window.fbq?.("track", "Lead", { content_name: String(params.slug ?? event) });
      window.gtag?.("event", "generate_lead", params);
    } else if (event === "call_click") {
      window.fbq?.("track", "Contact", { content_name: String(params.placement ?? "") });
      window.gtag?.("event", "call_click", params);
    } else if (event === "book_open") {
      window.fbq?.("trackCustom", "BookOpen", params);
      window.gtag?.("event", "book_open", params);
    }
  } catch {
    /* tags not loaded */
  }
}

const ATTR_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "fbclid"] as const;
const STORE = "mcd_attr";

/** Capture first-touch attribution from the URL once, keep it in sessionStorage for forms on later pages. */
export function captureAttribution(): Record<string, string> {
  if (typeof window === "undefined") return {};
  let stored: Record<string, string> = {};
  try { stored = JSON.parse(sessionStorage.getItem(STORE) ?? "{}"); } catch { /* ignore */ }
  const url = new URL(window.location.href);
  const fresh: Record<string, string> = {};
  for (const k of ATTR_KEYS) { const v = url.searchParams.get(k); if (v) fresh[k] = v.slice(0, 200); }
  if (Object.keys(fresh).length || !stored.landing_page) {
    fresh.landing_page = url.pathname;
    if (document.referrer) fresh.referrer = document.referrer.slice(0, 200);
  }
  const merged = { ...stored, ...fresh };
  try { sessionStorage.setItem(STORE, JSON.stringify(merged)); } catch { /* ignore */ }
  return merged;
}

export function getAttribution(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try { return JSON.parse(sessionStorage.getItem(STORE) ?? "{}"); } catch { return {}; }
}
