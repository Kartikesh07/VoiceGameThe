"use client";

import React from "react";
import Link from "next/link";
import { Mic, MessageSquare, ArrowUpRight, MapPin } from "lucide-react";
import { getStoriesByCategory } from "@/data/stories";
import { Artwork, Label, BookmarkButton } from "@/components/ui/editorial";

export default function InterviewsPage() {
  const interviews = getStoriesByCategory("INTERVIEWS");
  const featured = interviews[0];
  const others = interviews.slice(1);

  return (
    <div className="editorial-wrap py-10 lg:py-16 space-y-12">
      {/* Header */}
      <div>
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#BEF264] flex items-center gap-2 mb-2">
          <Mic size={14} className="text-[#BEF264]" />
          VOICES OF THE CREATORS
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#F5F5F4] tracking-tight">
          Developer Interviews & Dialogues<span className="text-[#BEF264]">.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#A1A1AA] max-w-2xl mt-2 leading-relaxed">
          Extended conversations with creative directors, sound designers, narrative architects, and indie pioneers.
        </p>
      </div>

      {/* Featured Interview Hero */}
      {featured && (
        <article className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden border border-[#2B3038] bg-[#15191F] group">
          <div className="lg:col-span-6 relative min-h-[360px] lg:min-h-[460px]">
            <Link href={`/articles/${featured.slug}`} className="block h-full">
              <Artwork
                story={featured}
                priority
                aspectRatio="aspect-auto"
                className="absolute inset-0 h-full w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-transparent to-transparent lg:hidden" />
            </Link>
            <div className="absolute top-4 right-4 z-10">
              <BookmarkButton storyId={featured.id} />
            </div>
          </div>

          <div className="lg:col-span-6 p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Label>KEY INTERVIEW</Label>
                {featured.interview?.location && (
                  <span className="text-xs text-[#A1A1AA] flex items-center gap-1">
                    <MapPin size={12} /> {featured.interview.location}
                  </span>
                )}
              </div>

              <Link href={`/articles/${featured.slug}`}>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F4] group-hover:text-[#BEF264] transition-colors leading-snug mb-3">
                  {featured.title}
                </h2>
              </Link>

              {featured.interview && (
                <div className="mb-4">
                  <span className="text-xs font-bold text-[#BEF264] block">
                    {featured.interview.interviewee} — {featured.interview.role}, {featured.interview.studio}
                  </span>
                </div>
              )}

              {featured.interview?.pullQuote && (
                <blockquote className="my-4 pl-4 border-l-2 border-[#BEF264] text-sm text-[#F5F5F4] italic leading-relaxed bg-[#1C2229]/60 p-3 rounded-r">
                  "{featured.interview.pullQuote}"
                </blockquote>
              )}

              <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                {featured.excerpt}
              </p>
            </div>

            <div className="pt-6 border-t border-[#2B3038] flex items-center justify-between">
              <span className="text-xs text-[#A1A1AA]">
                CONDUCTED BY {featured.author.name.toUpperCase()}
              </span>
              <Link
                href={`/articles/${featured.slug}`}
                className="px-5 py-2.5 bg-[#BEF264] text-[#0B0D10] hover:bg-[#d5f88b] rounded-lg text-xs font-bold tracking-wider uppercase transition-colors flex items-center gap-1"
              >
                <span>Read Full Interview</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </article>
      )}

      {/* Other Interviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {others.map((story) => (
          <article
            key={story.id}
            className="group bg-[#15191F] border border-[#2B3038] hover:border-[#BEF264]/40 rounded-xl overflow-hidden flex flex-col transition-all duration-300"
          >
            <div className="relative">
              <Link href={`/articles/${story.slug}`} className="block overflow-hidden">
                <Artwork story={story} aspectRatio="aspect-[16/10]" />
              </Link>
              <div className="absolute top-3 right-3 z-10">
                <BookmarkButton storyId={story.id} size={15} />
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[10px] text-[#A1A1AA] mb-2">
                  <Label>INTERVIEW</Label>
                  <span>{story.readTime}</span>
                </div>

                <Link href={`/articles/${story.slug}`}>
                  <h3 className="text-xl font-bold text-[#F5F5F4] group-hover:text-[#BEF264] transition-colors leading-snug mb-2">
                    {story.title}
                  </h3>
                </Link>

                {story.interview && (
                  <p className="text-xs font-semibold text-[#BEF264] mb-3">
                    {story.interview.interviewee} · {story.interview.studio}
                  </p>
                )}

                {story.interview?.pullQuote && (
                  <blockquote className="my-3 pl-3 border-l-2 border-[#BEF264] text-xs text-[#F5F5F4] italic">
                    "{story.interview.pullQuote}"
                  </blockquote>
                )}

                <p className="text-xs text-[#A1A1AA] line-clamp-2">
                  {story.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#2B3038] flex items-center justify-between text-xs text-[#A1A1AA]">
                <span>BY {story.author.name.toUpperCase()}</span>
                <Link
                  href={`/articles/${story.slug}`}
                  className="text-[#BEF264] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  READ Q&A →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

