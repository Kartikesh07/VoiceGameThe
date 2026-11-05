import type { Metadata } from "next";
import type { Category, Story } from "@/types";
import { articlePath, isPublishedStory } from "./editorial-seo";
import { absoluteUrl, siteConfig } from "./site-config";

export const editorialSections = {
  NEWS: { path: "/news", name: "News", title: "Gaming News & Industry Analysis", description: "Explore gaming news, industry analysis, hardware coverage and game preservation at The Game Voice." },
  REVIEWS: { path: "/reviews", name: "Reviews", title: "Game Reviews & Critical Analysis", description: "Explore independent video game reviews, thoughtful criticism, gameplay impressions, and editorial analysis at The Game Voice." },
  IMPRESSIONS: { path: "/impressions", name: "Impressions", title: "Game Impressions & Previews", description: "Explore gameplay impressions, early perspectives and discoveries from the world of video games at The Game Voice." },
  FEATURES: { path: "/features", name: "Features", title: "Gaming Features & Critical Essays", description: "Read thoughtful essays on game design, virtual worlds, sound, storytelling and gaming culture at The Game Voice." },
  DEVELOPMENT: { path: "/development", name: "Development", title: "Game Development News & Insights", description: "Discover game development insights, developer perspectives, studio stories, and independent game creation coverage." },
  INTERVIEWS: { path: "/interviews", name: "Interviews", title: "Developer Interviews & Creative Perspectives", description: "Explore conversations with game developers, artists and composers, and the creative decisions behind games at The Game Voice." },
  DOCUMENTARIES: { path: "/documentaries", name: "Documentaries", title: "Gaming Documentaries & Behind the Scenes", description: "Explore documentary storytelling about game creation, preservation and the people behind virtual worlds at The Game Voice." },
} as const satisfies Record<Category, { path: string; name: string; title: string; description: string }>;

interface PageSeo {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}

export function pageMetadata({ title, description, path, noindex = false }: PageSeo): Metadata {
  const canonical = absoluteUrl(path);
  const imageUrl = absoluteUrl("/social");
  const fullTitle = `${title} | ${siteConfig.name}`;
  const images = imageUrl ? [{ url: imageUrl, width: 1200, height: 630, alt: `${siteConfig.name} — gaming journalism` }] : [];
  return {
    title,
    description,
    alternates: canonical ? { canonical } : undefined,
    robots: { index: siteConfig.allowIndexing && !noindex, follow: true },
    openGraph: { type: "website", siteName: siteConfig.name, title: fullTitle, description, url: canonical, images },
    twitter: { card: "summary_large_image", title: fullTitle, description, images },
  };
}

export function categoryMetadata(category: Category, hasPublishedContent: boolean): Metadata {
  return pageMetadata({ ...editorialSections[category], noindex: !hasPublishedContent });
}

export function articleMetadata(story: Story): Metadata {
  const published = isPublishedStory(story);
  const title = `${story.title} | ${siteConfig.name}`;
  const metadata = pageMetadata({ title: story.title, description: story.excerpt, path: articlePath(story), noindex: !published });
  const image = story.socialImage;
  // SVG artwork is not supported by all social crawlers. Use an article-specific PNG card.
  const imageUrl = image ? (image.url.startsWith("/") ? absoluteUrl(image.url) : image.url) : absoluteUrl(`${articlePath(story)}/social`);
  const images = imageUrl ? [{ url: imageUrl, width: image?.width ?? 1200, height: image?.height ?? 630, alt: image?.alt ?? story.title }] : [];
  return {
    ...metadata,
    authors: published && story.author.name ? [{ name: story.author.name }] : undefined,
    keywords: story.tags,
    openGraph: {
      type: published ? "article" : "website",
      siteName: siteConfig.name, title, description: story.excerpt,
      url: absoluteUrl(articlePath(story)), images,
      ...(published ? { publishedTime: story.publishedAt, modifiedTime: story.modifiedAt, authors: story.author.name ? [story.author.name] : undefined, section: editorialSections[story.category].name, tags: story.tags } : {}),
    },
    twitter: { card: "summary_large_image", title, description: story.excerpt, images },
  };
}
