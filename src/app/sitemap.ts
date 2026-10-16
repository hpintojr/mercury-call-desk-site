import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { allLandingSlugs } from "@/content/landing";
import { comparisons } from "@/content/comparisons";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/platform", "/features", "/integrations", "/pricing", "/faq", "/contact", "/terms", "/privacy", "/partner", "/affiliate-agreement", ...allLandingSlugs.map((s) => "/" + s), ...comparisons.map((c) => "/vs/" + c.slug)];
  return routes.map((r) => ({ url: `${site.url}${r}`, lastModified: new Date(), changeFrequency: "monthly", priority: r === "" ? 1 : 0.8 }));
}
