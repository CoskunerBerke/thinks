import { MetadataRoute } from "next";
import { SiteConfig } from "@/data/site-config";
import { menuItems } from "@/data/menu";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SiteConfig.seo.url;

  // Static routes
  const staticRoutes = [
    "",
    "/menu",
    "/galeri",
    "/hakkimizda",
    "/iletisim",
    "/kvkk",
    "/gizlilik-politikasi",
    "/cerez-politikasi",
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic product routes
  const productEntries = menuItems
    .filter((item) => item.available && item.verified)
    .map((item) => ({
      url: `${baseUrl}/menu/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  return [...staticEntries, ...productEntries];
}
