"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, ChevronUp, Star } from "lucide-react";
import type { Story } from "@/types";
import { Artwork, Label, BookmarkButton } from "@/components/ui/editorial";

export function ReviewCard({ story, priority = false }: { story: Story; priority?: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const review = story.review;
  const href = `/articles/${story.slug}`;

  return (
    <article className="group bg-[#15191F] border border-[#2B3038] hover:border-[#BEF264]/40 rounded-lg overflow-hidden flex flex-col transition-all duration-300">
      <div className="relative">
        <Link href={href} className="block overflow-hidden">
          <Artwork
            story={story}
            priority={priority}
            aspectRatio="aspect-[16/10]"
          />
        </Link>
        {review && (
          <div className="absolute top-3 left-3 bg-[#0B0D10]/90 backdrop-blur-md border border-[#2B3038] px-2.5 py-1 rounded flex items-center gap-1.5 shadow-md">
            <span className="text-[#BEF264] text-xs font-black">★</span>
            <span className="text-sm font-extrabold text-[#F5F5F4] tabular-nums">
              {review.score.toFixed(1)}
            </span>
          </div>
        )}
        <div className="absolute top-3 right-3 z-10">
          <BookmarkButton storyId={story.id} size={15} />
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center justify-between text-[10px] mb-2 text-[#A1A1AA]">
          <Label>REVIEW</Label>
          {review && (
            <span className="text-[10px] font-bold text-[#BEF264] tracking-wider uppercase">
              {review.verdict}
            </span>
          )}
        </div>

        <Link href={href} className="block group-hover:text-[#BEF264] transition-colors mb-2">
          <h3 className="text-xl font-bold text-[#F5F5F4] leading-snug">
            {story.title}
          </h3>
        </Link>

        {review && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {review.platform.map((p) => (
              <span
                key={p}
                className="text-[9px] font-semibold bg-[#1C2229] text-[#A1A1AA] border border-[#2B3038] px-2 py-0.5 rounded"
              >
                {p}
              </span>
            ))}
          </div>
        )}

        <p className="text-xs text-[#A1A1AA] line-clamp-3 leading-relaxed mb-4 flex-1">
          {story.excerpt}
        </p>

        {review && (
          <div className="border-t border-[#2B3038] pt-3">
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              className="flex items-center justify-between w-full text-[11px] font-semibold text-[#A1A1AA] hover:text-[#BEF264] transition-colors py-1"
            >
              <span>{expanded ? "Hide Verdict Highlights" : "Quick Verdict Summary"}</span>
              {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>

            {expanded && (
              <div className="mt-3 p-3 bg-[#1C2229] border border-[#2B3038] rounded text-xs space-y-2 animate-in fade-in duration-200">
                <p className="text-[#F5F5F4] italic font-medium leading-relaxed">
                  "{review.summary}"
                </p>
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#2B3038]/60 text-[11px]">
                  <div>
                    <span className="text-[9px] uppercase font-bold text-[#BEF264] block mb-1">
                      Key Pro
                    </span>
                    <span className="text-[#A1A1AA] line-clamp-2">✓ {review.pros[0]}</span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-bold text-[#A1A1AA] block mb-1">
                      Key Con
                    </span>
                    <span className="text-[#A1A1AA] line-clamp-2">– {review.cons[0]}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="mt-4 pt-3 border-t border-[#2B3038] flex items-center justify-between text-[10px] font-bold text-[#A1A1AA]">
          <span>BY {story.author.name.toUpperCase()}</span>
          <Link
            href={href}
            className="text-[#BEF264] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
          >
            FULL REVIEW <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>
    </article>
  );
}

