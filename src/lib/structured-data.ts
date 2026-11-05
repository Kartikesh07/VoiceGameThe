import type { Story } from "@/types";
import { articlePath, isPublishedStory } from "./editorial-seo";
import { editorialSections } from "./seo";
import { absoluteUrl, siteConfig } from "./site-config";

type SchemaValue = string | number | boolean | undefined | SchemaObject | SchemaValue[];
export interface SchemaObject { [key: string]: SchemaValue }

export function websiteStructuredData(): SchemaObject[] {
  const url = absoluteUrl("/");
  if (!url) return [];
  return [
    { "@context": "https://schema.org", "@type": "Organization", "@id": `${url}#organization`, name: siteConfig.name, alternateName: siteConfig.alternateName, url },
    { "@context": "https://schema.org", "@type": "WebSite", "@id": `${url}#website`, name: siteConfig.name, alternateName: siteConfig.alternateName, url, description: siteConfig.description, inLanguage: "en", publisher: { "@id": `${url}#organization` } },
  ];
}

export function articleStructuredData(story: Story): SchemaObject[] {
  const url = absoluteUrl(articlePath(story));
  const home = absoluteUrl("/");
  if (!url || !home) return [];
  const section = editorialSections[story.category];
  const breadcrumbs: SchemaObject = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: home },
      { "@type": "ListItem", position: 2, name: section.name, item: absoluteUrl(section.path) },
      { "@type": "ListItem", position: 3, name: story.title, item: url },
    ],
  };
  if (!isPublishedStory(story)) return [breadcrumbs];
  const image = story.socialImage;
  // Preserve real editorial imagery in Article schema; never use a text-only card here.
  const imageUrl = image ? (image.url.startsWith("/") ? absoluteUrl(image.url) : image.url) :
    /\.(png|jpe?g|webp)(?:\?|$)/i.test(story.coverImage) ? (story.coverImage.startsWith("/") ? absoluteUrl(story.coverImage) : story.coverImage) : undefined;
  return [breadcrumbs, {
    "@context": "https://schema.org",
    "@type": story.category === "NEWS" ? "NewsArticle" : "Article",
    "@id": `${url}#article`, url, mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: story.title, description: story.excerpt,
    author: story.author.name ? { "@type": "Person", name: story.author.name } : undefined,
    publisher: { "@type": "Organization", "@id": `${home}#organization`, name: siteConfig.name, url: home },
    datePublished: story.publishedAt, dateModified: story.modifiedAt,
    image: imageUrl, articleSection: section.name, keywords: story.tags.join(", "), inLanguage: "en",
  }];
}

export function serializeJsonLd(data: SchemaObject | SchemaObject[]): string {
  return JSON.stringify(data).replace(/</g, "\\u003c").replace(/>/g, "\\u003e").replace(/&/g, "\\u0026").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
}
