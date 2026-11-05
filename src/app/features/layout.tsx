import { CategoryArchive } from "@/components/seo/CategoryArchive";
import { stories } from "@/data/stories";
import { isPublishedStory } from "@/lib/editorial-seo";
import { categoryMetadata } from "@/lib/seo";

export const metadata = categoryMetadata("FEATURES", stories.some((story) => story.category === "FEATURES" && isPublishedStory(story)));

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}<CategoryArchive category="FEATURES" /></>;
}
