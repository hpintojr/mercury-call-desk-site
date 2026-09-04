import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/features", "/integrations", "/pricing", "/faq", "/contact"];
  return routes.map((r) => ({ url: `${site.url}${r}`, lastModified: new Date(), changeFrequency: "monthly", priority: r === "" ? 1 : 0.8 }));
}
