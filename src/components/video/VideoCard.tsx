"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Play, X, Clock, Film } from "lucide-react";
import type { Story } from "@/types";
import { Artwork, Label, BookmarkButton } from "@/components/ui/editorial";

export function VideoCard({
  story,
  featured = false,
}: {
  story: Story;
  featured?: boolean;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const doc = story.documentary;
  const href = `/articles/${story.slug}`;

  if (featured) {
    return (
      <>
        <div className="relative group rounded-xl overflow-hidden border border-[#2B3038] bg-[#15191F]">
          <div className="relative min-h-[380px] md:min-h-[480px]">
            <Artwork
              story={story}
              priority
              aspectRatio="aspect-[21/9]"
              className="absolute inset-0 h-full w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-[#0B0D10]/50 to-transparent" />

            {/* Play Button Overlay */}
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              aria-label={`Watch ${story.title}`}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#BEF264] text-[#0B0D10] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 pl-1 cursor-pointer z-10"
            >
              <Play size={28} fill="currentColor" />
            </button>

            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-10">
              <div className="flex items-center gap-3 mb-2">
                <Label>DOCUMENTARY FEATURE</Label>
                {doc && (
                  <span className="text-[10px] font-bold tracking-wider bg-[#1C2229]/90 text-[#BEF264] px-2.5 py-0.5 rounded border border-[#2B3038] flex items-center gap-1">
                    <Clock size={11} /> {doc.duration}
                  </span>
                )}
              </div>

              <Link href={href} className="block group-hover:text-[#BEF264] transition-colors">
                <h3 className="text-2xl md:text-4xl font-extrabold text-[#F5F5F4] leading-tight mb-2 max-w-3xl">
                  {story.title}
                </h3>
              </Link>

              <p className="text-sm md:text-base text-[#A1A1AA] max-w-2xl line-clamp-2 mb-4">
                {story.excerpt}
              </p>

              <div className="flex items-center gap-4 text-xs text-[#A1A1AA]">
                <span>DIRECTED BY {doc?.director || story.author.name}</span>
                <span>·</span>
                <Link
                  href={href}
                  className="text-[#BEF264] hover:underline font-bold"
                >
                  View Story & Chapters →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Video Player Modal */}
        {isPlaying && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-200"
            onClick={() => setIsPlaying(false)}
            role="dialog"
            aria-modal="true"
            aria-label={story.title}
          >
            <div
              className="relative w-full max-w-4xl bg-[#15191F] border border-[#2B3038] rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-[#2B3038] bg-[#0B0D10]">
                <div className="flex items-center gap-2">
                  <Film size={18} className="text-[#BEF264]" />
                  <span className="text-sm font-bold text-[#F5F5F4] truncate max-w-md">
                    {story.title} ({doc?.duration})
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsPlaying(false)}
                  aria-label="Close video player"
                  className="p-1 rounded text-[#A1A1AA] hover:text-[#F5F5F4] transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="relative aspect-video bg-black flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-[#1C2229] border border-[#2B3038] flex items-center justify-center mb-4 text-[#BEF264]">
                  <Play size={24} fill="currentColor" className="pl-1" />
                </div>
                <h4 className="text-xl font-bold text-[#F5F5F4] mb-2">{story.title}</h4>
                <p className="text-xs text-[#A1A1AA] max-w-md mb-6">
                  Demonstration cinematic stream player · Runtime: {doc?.duration} · 4K UHD 60FPS
                </p>
                <div className="flex flex-wrap justify-center gap-2 max-w-xl">
                  {doc?.chapters?.map((ch, i) => (
                    <span
                      key={i}
                      className="text-[10px] bg-[#1C2229] border border-[#2B3038] px-2.5 py-1 rounded text-[#A1A1AA]"
                    >
                      <b className="text-[#BEF264]">{ch.time}</b> {ch.title}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <article className="group bg-[#15191F] border border-[#2B3038] hover:border-[#BEF264]/40 rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1">
      <div className="relative">
        <Link href={href} className="block overflow-hidden">
          <Artwork story={story} aspectRatio="aspect-[16/10]" />
        </Link>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors pointer-events-none" />

        <div className="absolute bottom-3 left-3 bg-[#0B0D10]/90 backdrop-blur-sm border border-[#2B3038] px-2.5 py-1 rounded flex items-center gap-1.5 text-[10px] font-bold text-[#BEF264]">
          <Play size={11} fill="currentColor" />
          <span>{doc?.duration || "VIDEO"}</span>
        </div>

        <div className="absolute top-3 right-3 z-10">
          <BookmarkButton storyId={story.id} size={15} />
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center justify-between text-[10px] mb-2 text-[#A1A1AA]">
          <Label>DOCUMENTARY</Label>
          <span>{doc?.productionYear || story.publishedAt}</span>
        </div>

        <Link href={href} className="block group-hover:text-[#BEF264] transition-colors mb-2">
          <h3 className="text-base font-bold text-[#F5F5F4] leading-snug line-clamp-2">
            {story.title}
          </h3>
        </Link>

        <p className="text-xs text-[#A1A1AA] line-clamp-2 leading-relaxed mb-4 flex-1">
          {story.excerpt}
        </p>

        <div className="pt-3 border-t border-[#2B3038] flex items-center justify-between text-[10px] font-semibold text-[#A1A1AA]">
          <span>DIR. {doc?.director || story.author.name}</span>
          <Link
            href={href}
            className="text-[#BEF264] font-bold hover:underline"
          >
            WATCH →
          </Link>
        </div>
      </div>
    </article>
  );
}

