import type { MetadataRoute } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    // Keep pages crawlable so crawlers can read their noindex metadata.
    rules: { userAgent: "*", allow: "/" },
    sitemap: siteConfig.allowIndexing ? absoluteUrl("/sitemap.xml") : undefined,
  };
}
