import { StoryStatus } from "@/components/ui/StoryStatus";

import { Artwork, BookmarkButton, Label } from "@/components/ui/editorial";
import type { Story } from "@/types";
import { ArrowUpRight, Clock } from "lucide-react";
import Link from "next/link";

interface ArticleCardProps {
  story: Story;
  variant?: "grid" | "row" | "compact" | "featured" | "mini";
  index?: number;
  priority?: boolean;
  className?: string;
}

export function ArticleCard({
  story,
  variant = "grid",
  index,
  priority = false,
  className = "",
}: ArticleCardProps) {
  const href = `/articles/${story.slug}`;

  if (variant === "row") {
    return (
      <article
        className={`group relative flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 py-6 border-b border-[#2B3038] transition-colors hover:bg-[#15191F]/40 px-2 sm:px-3 rounded-lg ${className}`}
      >
        <Link href={href} className="w-full sm:w-48 md:w-56 shrink-0 block">
          <Artwork
            story={story}
            priority={priority}
            aspectRatio="aspect-[16/10]"
            className="rounded-md"
          />
        </Link>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <Label>{story.category}</Label>
            <span className="text-[10px] text-[#A1A1AA] tracking-wider uppercase">
              {story.publishedAt}
            </span>
          </div>

          <Link href={href} className="block group-hover:text-[#BEF264] transition-colors">
            <StoryStatus story={story} /><h3 className="text-lg sm:text-xl font-bold text-[#F5F5F4] leading-snug line-clamp-2">
              {story.title}
            </h3>
          </Link>

          <p className="text-xs sm:text-sm text-[#A1A1AA] line-clamp-2 mt-1.5 leading-relaxed">
            {story.excerpt}
          </p>

          <div className="flex items-center gap-4 mt-3 text-[10px] font-semibold text-[#A1A1AA] tracking-wider">
            <span>BY {story.author.name.toUpperCase()}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock size={11} />
              {story.readTime}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
          <BookmarkButton storyId={story.id} size={16} />
          <Link
            href={href}
            aria-label={`Read ${story.title}`}
            className="w-9 h-9 rounded-full border border-[#2B3038] flex items-center justify-center text-[#A1A1AA] group-hover:text-[#0B0D10] group-hover:bg-[#BEF264] group-hover:border-[#BEF264] transition-all"
          >
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </article>
    );
  }

  if (variant === "compact") {
    return (
      <article
        className={`group relative flex items-start gap-4 py-4 border-b border-[#2B3038] last:border-b-0 hover:bg-[#15191F]/30 px-2 rounded-md transition-colors ${className}`}
      >
        {typeof index === "number" && (
          <span className="text-xl font-extrabold text-[#A1A1AA]/50 group-hover:text-[#BEF264] transition-colors font-mono tabular-nums shrink-0 pt-0.5">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <Label className="text-[9px]">{story.category}</Label>
            <span className="text-[9px] text-[#A1A1AA]">· {story.readTime}</span>
          </div>
          <Link href={href} className="block group-hover:text-[#BEF264] transition-colors">
            <h4 className="text-sm font-bold text-[#F5F5F4] leading-snug line-clamp-2">
              {story.title}
            </h4>
          </Link>
        </div>

        <Link href={href} className="w-16 h-16 shrink-0 block">
          <Artwork
            story={story}
            aspectRatio="aspect-square"
            className="rounded-md"
          />
        </Link>
      </article>
    );
  }

  // Default "grid" card
  return (
    <article
      className={`group relative flex flex-col bg-[#15191F]/50 hover:bg-[#15191F] border border-[#2B3038] hover:border-[#BEF264]/40 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 ${className}`}
    >
      <div className="relative">
        <Link href={href} className="block overflow-hidden">
          <Artwork
            story={story}
            priority={priority}
            aspectRatio="aspect-[16/10]"
          />
        </Link>
        {typeof index === "number" && (
          <span className="absolute top-3 left-3 bg-[#BEF264] text-[#0B0D10] text-[10px] font-black font-mono px-2 py-0.5 rounded shadow">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
        <div className="absolute top-3 right-3 z-10">
          <BookmarkButton storyId={story.id} size={15} />
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center justify-between text-[10px] mb-2 text-[#A1A1AA]">
          <Label>{story.category}</Label>
          <span className="tracking-wider uppercase">{story.publishedAt}</span>
        </div>

        <Link href={href} className="block group-hover:text-[#BEF264] transition-colors mb-2">
          <StoryStatus story={story} /><h3 className="text-lg font-bold text-[#F5F5F4] leading-snug line-clamp-2">
            {story.title}
          </h3>
        </Link>

        <p className="text-xs text-[#A1A1AA] line-clamp-2 leading-relaxed mb-4 flex-1">
          {story.excerpt}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-[#2B3038]/80 text-[10px] font-semibold text-[#A1A1AA] tracking-wider">
          <span className="truncate max-w-[150px]">BY {story.author.name.toUpperCase()}</span>
          <span className="flex items-center gap-1 text-[#F5F5F4]/80">
            <Clock size={11} />
            {story.readTime}
          </span>
        </div>
      </div>
    </article>
  );
}

