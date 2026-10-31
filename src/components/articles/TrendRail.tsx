"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import type { Story } from "@/types";
import { Artwork, Label, BookmarkButton } from "@/components/ui/editorial";

export function TrendRail({ stories }: { stories: Story[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const distance = 360;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-[#A1A1AA] tracking-wider uppercase font-semibold">
          Curated Editorial Radar · {stories.length} Key Stories
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Scroll trending left"
            className="w-8 h-8 rounded-full border border-[#2B3038] bg-[#15191F] flex items-center justify-center text-[#A1A1AA] hover:text-[#BEF264] hover:border-[#BEF264] transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Scroll trending right"
            className="w-8 h-8 rounded-full border border-[#2B3038] bg-[#15191F] flex items-center justify-center text-[#A1A1AA] hover:text-[#BEF264] hover:border-[#BEF264] transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-4 scrollbar-none scroll-smooth snap-x snap-mandatory"
        tabIndex={0}
        aria-label="Trending stories rail"
      >
        {stories.map((story, i) => {
          const href = `/articles/${story.slug}`;
          return (
            <article
              key={story.id}
              className="group min-w-[280px] sm:min-w-[320px] max-w-[320px] shrink-0 bg-[#15191F]/70 border border-[#2B3038] hover:border-[#BEF264]/40 rounded-lg overflow-hidden flex flex-col snap-start transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                <Link href={href} className="block overflow-hidden">
                  <Artwork story={story} aspectRatio="aspect-[16/10]" />
                </Link>
                <span className="absolute top-3 left-3 bg-[#BEF264] text-[#0B0D10] text-[10px] font-black font-mono px-2 py-0.5 rounded shadow">
                  0{i + 1}
                </span>
                <div className="absolute top-3 right-3 z-10">
                  <BookmarkButton storyId={story.id} size={15} />
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col">
                <div className="flex items-center justify-between text-[10px] mb-2 text-[#A1A1AA]">
                  <Label>{story.category}</Label>
                  <span>{story.readTime}</span>
                </div>

                <Link href={href} className="block group-hover:text-[#BEF264] transition-colors mb-2">
                  <h3 className="text-base font-bold text-[#F5F5F4] leading-snug line-clamp-2">
                    {story.title}
                  </h3>
                </Link>

                <p className="text-xs text-[#A1A1AA] line-clamp-2 leading-relaxed mb-4 flex-1">
                  {story.excerpt}
                </p>

                <div className="pt-3 border-t border-[#2B3038]/80 flex items-center justify-between text-[10px] font-bold tracking-wider text-[#A1A1AA]">
                  <span>BY {story.author.name.toUpperCase()}</span>
                  <Link
                    href={href}
                    className="text-[#BEF264] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                    aria-label={`Read ${story.title}`}
                  >
                    READ <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

