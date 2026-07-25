import { MetadataRoute } from "next";
import { SiteConfig } from "@/data/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/private"],
    },
    sitemap: `${SiteConfig.seo.url}/sitemap.xml`,
  };
}
