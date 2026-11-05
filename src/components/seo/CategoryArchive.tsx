import Link from "next/link";
import { stories } from "@/data/stories";
import { articlePath, isPublishedStory } from "@/lib/editorial-seo";
import { editorialSections } from "@/lib/seo";
import type { Category } from "@/types";

/** Native links for the complete archive when interactive pagination is unavailable. */
export function CategoryArchive({ category }: { category: Category }) {
  const published = stories.filter((story) => story.category === category && isPublishedStory(story));
  if (!published.length) return null;
  return (
    <noscript>
      <nav aria-label={`Complete ${editorialSections[category].name} archive`} className="editorial-wrap">
        <h2>All {editorialSections[category].name} articles</h2>
        <ul>{published.map((story) => <li key={story.slug}><Link href={articlePath(story)}>{story.title}</Link></li>)}</ul>
      </nav>
    </noscript>
  );
}
