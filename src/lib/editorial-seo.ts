import type { Story } from "@/types";

/** Source-summary dates/bylines describe the original, not a new publication here. */
export function isPublishedStory(story: Story): boolean {
  return story.editorialStatus === "published" &&
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(story.slug) &&
    Boolean(story.title.trim() && story.excerpt.trim()) &&
    Boolean(story.content.lead?.trim() || story.content.paragraphs.some((p) => p.trim())) &&
    Boolean(story.publishedAt && Number.isFinite(Date.parse(story.publishedAt)) &&
      Date.parse(story.publishedAt) <= Date.now());
}

export function articlePath(story: Pick<Story, "slug">): string {
  return `/articles/${encodeURIComponent(story.slug)}`;
}
