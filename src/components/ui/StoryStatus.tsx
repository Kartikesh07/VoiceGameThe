import type { Story } from "@/types";
export function StoryStatus({ story }: { story: Story }) {
  return <span className="story-status">{story.editorialStatus === "source-summary" ? "From the published archive" : "Editorial sample"}</span>;
}
