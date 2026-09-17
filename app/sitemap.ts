import type { MetadataRoute } from "next";
import { readdirSync } from "fs";
import { join } from "path";
import { posts } from "./blog/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://builtsimple.dev";

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/work`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/work/lessondraft`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/work/lessondraft-social`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/resources/website-planning-checklist`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/products`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/referral-program`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/jacob-cascone`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/accessibility`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  // Dynamically discover all /for/ pages from the filesystem
  const forDir = join(process.cwd(), "app/for");
  let forPages: MetadataRoute.Sitemap = [];
  try {
    const entries = readdirSync(forDir, { withFileTypes: true });
    forPages = entries
      .filter((e) => e.isDirectory())
      .map((e) => ({
        url: `${baseUrl}/for/${e.name}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      }));
  } catch {
    // If filesystem read fails (e.g. edge runtime), fall back to empty
  }

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date + "T12:00:00"),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const tags = Array.from(new Set(posts.flatMap((p) => p.tags)));
  const tagPages: MetadataRoute.Sitemap = tags.map((tag) => ({
    url: `${baseUrl}/blog/tag/${encodeURIComponent(tag.toLowerCase())}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.4,
  }));

  return [...staticPages, ...forPages, ...blogPages, ...tagPages];
}
