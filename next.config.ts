import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: { formats: ["image/avif", "image/webp"] },
  // The dialer page was folded into /features (Hamilton, 2026-10-16); keep old links and ads working.
  async redirects() {
    return [{ source: "/dialer", destination: "/features#dialer", permanent: true }];
  },
};

export default nextConfig;
