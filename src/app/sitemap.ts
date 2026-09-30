import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";

export const dynamic = "force-static";

/**
 * When each page's content last really changed (YYYY-MM-DD). Bump a date only
 * when that page's text or images change, not on every deploy: Google stops
 * trusting lastmod on a site where it always says "today". Only loc and
 * lastmod are emitted; Google ignores priority and changefreq.
 */
const pages: [path: string, lastModified: string][] = [
  ["", "2026-09-30"],
  ["/about", "2026-09-28"],
  ["/work", "2026-09-30"],
  ["/services", "2026-09-28"],
  ["/cv", "2026-09-29"],
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(([path, lastModified]) => ({ url: `${siteUrl}${path}`, lastModified }));
}
