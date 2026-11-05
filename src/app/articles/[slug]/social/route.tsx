import { getStoryBySlug } from "@/data/stories";
import { editorialSections } from "@/lib/seo";
import { socialImage } from "@/lib/social-image";

export const runtime = "nodejs";

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) return new Response("Not found", { status: 404, headers: { "X-Robots-Tag": "noindex" } });
  const section = `${editorialSections[story.category].name}${story.editorialStatus === "published" ? "" : " · Editorial preview"}`;
  return socialImage(story.title, section, story.coverImage);
}
