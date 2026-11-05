import { CategoryArchive } from "@/components/seo/CategoryArchive";
import { stories } from "@/data/stories";
import { isPublishedStory } from "@/lib/editorial-seo";
import { categoryMetadata } from "@/lib/seo";

export const metadata = categoryMetadata("DOCUMENTARIES", stories.some((story) => story.category === "DOCUMENTARIES" && isPublishedStory(story)));

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}<CategoryArchive category="DOCUMENTARIES" /></>;
}
