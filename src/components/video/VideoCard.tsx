import { Artwork, BookmarkButton, Label } from "@/components/ui/editorial";
import type { Story } from "@/types";
import { ArrowUpRight, Film } from "lucide-react";
import Link from "next/link";

// Only direct HTTPS media files are supported. Other URLs stay article previews.
export function supportedVideoUrl(value?: string) {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    return url.protocol === "https:" && /\.(mp4|webm)$/i.test(url.pathname) ? url.href : undefined;
  } catch { return undefined; }
}

export function VideoCard({ story, featured = false }: { story: Story; featured?: boolean }) {
  const media = supportedVideoUrl(story.documentary?.videoUrl);
  return (
    <article className={`video-story group ${featured ? "video-feature" : ""}`}>
      <div className="relative">
        {media ? <video controls preload="none" poster={story.coverImage} className="w-full aspect-video" aria-label={story.title}><source src={media} />Your browser cannot play this video.</video> : (
          <Link href={`/articles/${story.slug}`} className="block" aria-label={`Read documentary concept: ${story.title}`}>
            <Artwork story={story} aspectRatio={featured ? "aspect-[16/9] md:aspect-[21/9]" : "aspect-[16/10]"} sizes={featured ? "100vw" : undefined} />
            <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 bg-[#0B0D10] px-3 py-2 text-xs text-[#F5F5F4]"><Film size={15} /> Written concept · no video</span>
          </Link>
        )}
        <div className="absolute top-4 right-4"><BookmarkButton storyId={story.id} /></div>
      </div>
      <div className={featured ? "py-6 md:grid md:grid-cols-[1.4fr_1fr] md:gap-12" : "py-5"}>
        <div><Label>Documentary treatment</Label><Link href={`/articles/${story.slug}`}><h3 className={`${featured ? "text-3xl md:text-5xl" : "text-2xl"} leading-tight mt-3 group-hover:text-[#BEF264] transition-colors`}>{story.title}</h3></Link></div>
        <div><p className="text-sm mt-3 mb-4">{story.excerpt}</p><Link href={`/articles/${story.slug}`} className="inline-flex min-h-11 items-center gap-2 text-xs font-bold text-[#BEF264]">Read the concept <ArrowUpRight size={16} /></Link></div>
      </div>
    </article>
  );
}
