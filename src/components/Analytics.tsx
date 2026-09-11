"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { captureAttribution, track } from "@/lib/track";

const GTM = process.env.NEXT_PUBLIC_GTM_ID;
const GA4 = process.env.NEXT_PUBLIC_GA4_ID;
const PIXEL = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const ADS = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

/**
 * Site-wide tags + click delegation. Every tag is env-gated so nothing loads until an ID is set
 * (Vercel → Settings → Environment Variables). Prefer NEXT_PUBLIC_GTM_ID and manage the rest in GTM.
 */
export default function Analytics() {
  const pathname = usePathname();

  // Attribution capture + SPA page views
  useEffect(() => {
    captureAttribution();
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({ event: "page_view", page_path: pathname });
    window.fbq?.("track", "PageView");
  }, [pathname]);

  // tel: click delegation → call_click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest?.("a[href^='tel:']") as HTMLAnchorElement | null;
      if (!a) return;
      track("call_click", { phone: a.getAttribute("href")?.replace("tel:", ""), placement: a.dataset.placement ?? pathname });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [pathname]);

  return (
    <>
      {GTM && (
        <Script id="gtm" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM}');`}</Script>
      )}
      {(GA4 || ADS) && !GTM && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA4 ?? ADS}`} strategy="afterInteractive" />
          <Script id="gtag" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());${GA4 ? `gtag('config','${GA4}');` : ""}${ADS ? `gtag('config','${ADS}');` : ""}`}</Script>
        </>
      )}
      {PIXEL && !GTM && (
        <Script id="meta-pixel" strategy="afterInteractive">{`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${PIXEL}');fbq('track','PageView');`}</Script>
      )}
    </>
  );
}
