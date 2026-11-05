import type { MetadataRoute } from "next";
import { stories } from "@/data/stories";
import { articlePath, isPublishedStory } from "@/lib/editorial-seo";
import { editorialSections } from "@/lib/seo";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.allowIndexing) return [];
  const published = stories.filter(isPublishedStory);
  const paths = ["/", ...Object.entries(editorialSections)
    .filter(([category]) => published.some((story) => story.category === category))
    .map(([, section]) => section.path)];
  return [
    ...paths.map((path) => ({ url: absoluteUrl(path)! })),
    ...published.map((story) => ({
      url: absoluteUrl(articlePath(story))!,
      // No invented deployment timestamps or original-source dates.
      lastModified: story.modifiedAt ?? story.publishedAt,
    })),
  ];
}
