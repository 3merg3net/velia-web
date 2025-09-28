import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "https://velia.finance";
  const pages = ["", "/pricing", "/press", "/roadmap", "/changelog", "/protocol", "/litepaper", "/staking"];
  const now = new Date().toISOString();
  return pages.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.6,
  }));
}
