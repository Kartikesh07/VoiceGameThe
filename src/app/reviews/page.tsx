"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Star, SlidersHorizontal, ArrowUpRight, ShieldCheck } from "lucide-react";
import { getStoriesByCategory } from "@/data/stories";
import { Artwork, Label, BookmarkButton } from "@/components/ui/editorial";
import { ReviewCard } from "@/components/reviews/ReviewCard";

export default function ReviewsPage() {
  const allReviews = getStoriesByCategory("REVIEWS");
  const [platformFilter, setPlatformFilter] = useState<string>("ALL");
  const [sortBy, setSortBy] = useState<"score" | "newest">("score");

  const platforms = ["ALL", "PC", "PlayStation 5", "Xbox Series X", "Nintendo Switch", "Steam Deck"];

  // Filter
  const filtered = allReviews.filter((story) => {
    if (platformFilter === "ALL") return true;
    return story.review?.platform.includes(platformFilter);
  });

  // Sort
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "score") {
      return (b.review?.score || 0) - (a.review?.score || 0);
    }
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });

  const featuredReview = sorted[0];

  return (
    <div className="editorial-wrap py-10 lg:py-16 space-y-12">
      {/* Page Title */}
      <div>
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#BEF264] flex items-center gap-2 mb-2">
          <ShieldCheck size={14} className="text-[#BEF264]" />
          INDEPENDENT CRITIQUE
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#F5F5F4] tracking-tight">
          Game Reviews & The Verdict<span className="text-[#BEF264]">.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#A1A1AA] max-w-2xl mt-2 leading-relaxed">
          Exhaustive, ad-free video game evaluations scored with uncompromised critical rigor and transparent metrics.
        </p>
      </div>

      {/* Featured Review Hero */}
      {featuredReview && (
        <section
          aria-label="Featured Game Review"
          className="relative bg-[#15191F] border border-[#2B3038] rounded-2xl overflow-hidden group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-7 relative min-h-[360px] lg:min-h-[480px]">
              <Link href={`/articles/${featuredReview.slug}`} className="block h-full">
                <Artwork
                  story={featuredReview}
                  priority
                  aspectRatio="aspect-auto"
                  className="absolute inset-0 h-full w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-transparent to-transparent lg:hidden" />
              </Link>
              <div className="absolute top-4 right-4 z-10">
                <BookmarkButton storyId={featuredReview.id} />
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#BEF264] bg-[#0B0D10] px-3 py-1 rounded border border-[#2B3038]">
                    CRITIC'S CHOICE
                  </span>
                  {featuredReview.review && (
                    <div className="flex items-baseline gap-1 text-[#BEF264]">
                      <Star size={14} fill="currentColor" />
                      <span className="text-2xl font-black tabular-nums">
                        {featuredReview.review.score.toFixed(1)}
                      </span>
                      <span className="text-xs text-[#A1A1AA]">/ 10</span>
                    </div>
                  )}
                </div>

                <Link href={`/articles/${featuredReview.slug}`}>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F4] group-hover:text-[#BEF264] transition-colors leading-tight mb-3">
                    {featuredReview.title}
                  </h2>
                </Link>

                {featuredReview.review && (
                  <p className="text-xs sm:text-sm text-[#F5F5F4] italic font-medium mb-4 leading-relaxed">
                    "{featuredReview.review.summary}"
                  </p>
                )}

                <p className="text-xs text-[#A1A1AA] leading-relaxed mb-6 line-clamp-3">
                  {featuredReview.excerpt}
                </p>

                {featuredReview.review && (
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {featuredReview.review.platform.map((p) => (
                      <span
                        key={p}
                        className="text-[10px] bg-[#1C2229] border border-[#2B3038] px-2.5 py-1 rounded text-[#A1A1AA]"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[#2B3038] flex items-center justify-between">
                <span className="text-xs text-[#A1A1AA]">
                  REVIEWED BY {featuredReview.author.name.toUpperCase()}
                </span>
                <Link
                  href={`/articles/${featuredReview.slug}`}
                  className="px-5 py-2.5 bg-[#BEF264] text-[#0B0D10] hover:bg-[#d4f88e] rounded-lg text-xs font-bold tracking-wider uppercase transition-colors flex items-center gap-1"
                >
                  <span>Full Review</span>
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter and Sort Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#2B3038]">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {platforms.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPlatformFilter(p)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-full whitespace-nowrap transition-colors cursor-pointer ${
                platformFilter === p
                  ? "bg-[#BEF264] text-[#0B0D10]"
                  : "bg-[#15191F] text-[#A1A1AA] hover:text-[#F5F5F4] border border-[#2B3038]"
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 text-xs text-[#A1A1AA] shrink-0 self-end sm:self-auto">
          <SlidersHorizontal size={14} />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "score" | "newest")}
            className="bg-[#15191F] border border-[#2B3038] text-[#F5F5F4] text-xs px-2.5 py-1 rounded focus:outline-none focus:ring-1 focus:ring-[#BEF264]"
          >
            <option value="score">Highest Review Score</option>
            <option value="newest">Newest Reviews First</option>
          </select>
        </div>
      </div>

      {/* Review Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sorted.map((story) => (
          <ReviewCard key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
}

