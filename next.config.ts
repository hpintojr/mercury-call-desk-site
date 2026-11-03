import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: { formats: ["image/avif", "image/webp"] },
  // The dialer page was folded into /features (Hamilton, 2026-10-16); keep old links and ads working.
  async redirects() {
    return [
      { source: "/dialer", destination: "/features#dialer", permanent: true },
      // The cohort offer page moved from a static public/cohort.html into the app (Hamilton, 2026-11-03) so it shares the site's fonts, header and footer.
      { source: "/cohort.html", destination: "/cohort", permanent: true },
    ];
  },
};

export default nextConfig;
