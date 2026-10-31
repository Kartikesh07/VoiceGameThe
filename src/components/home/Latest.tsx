"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Filter, SlidersHorizontal } from "lucide-react";
import { stories, getStoriesByCategory } from "@/data/stories";
import type { Category } from "@/types";
import { SectionTitle } from "@/components/ui/editorial";
import { ArticleCard } from "@/components/articles/ArticleCard";

const filterCategories: { label: string; value: Category | "ALL" }[] = [
  { label: "All Coverage", value: "ALL" },
  { label: "News", value: "NEWS" },
  { label: "Reviews", value: "REVIEWS" },
  { label: "Impressions", value: "IMPRESSIONS" },
  { label: "Features", value: "FEATURES" },
  { label: "Development", value: "DEVELOPMENT" },
  { label: "Interviews", value: "INTERVIEWS" },
  { label: "Documentaries", value: "DOCUMENTARIES" },
];

export default function Latest() {
  const [selectedFilter, setSelectedFilter] = useState<Category | "ALL">("ALL");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [visibleCount, setVisibleCount] = useState<number>(5);

  // Filter and sort stories
  const categoryStories = getStoriesByCategory(selectedFilter);
  const sortedStories = [...categoryStories].sort((a, b) => {
    const dateA = new Date(a.publishedAt).getTime();
    const dateB = new Date(b.publishedAt).getTime();
    return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
  });

  const displayedStories = sortedStories.slice(0, visibleCount);
  const hasMore = visibleCount < sortedStories.length;

  // Editor's picks (curated 4 stories)
  const editorsPicks = [stories[0], stories[4], stories[6], stories[7]];

  const handleFilterChange = (filter: Category | "ALL") => {
    setSelectedFilter(filter);
    setVisibleCount(5);
  };

  return (
    <section className="editorial-wrap py-16 lg:py-24" id="latest">
      <SectionTitle
        eyebrow="CONTINUOUS COVERAGE"
        title="The Latest Stream"
        description="Every critical shift, thoughtful critique, and deep dive published by our desks."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
        {/* Main Feed Column (2 cols) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#2B3038]">
            {/* Filter Pills */}
            <div
              className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none"
              role="tablist"
              aria-label="Filter stories by editorial desk"
            >
              {filterCategories.map((cat) => {
                const isSelected = selectedFilter === cat.value;
                return (
                  <button
                    key={cat.value}
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => handleFilterChange(cat.value)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-full whitespace-nowrap transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-[#BEF264] text-[#0B0D10]"
                        : "bg-[#15191F] text-[#A1A1AA] hover:text-[#F5F5F4] hover:bg-[#1C2229] border border-[#2B3038]"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Sort Toggle */}
            <div className="flex items-center gap-2 text-xs text-[#A1A1AA] shrink-0 self-end sm:self-auto">
              <SlidersHorizontal size={14} />
              <label htmlFor="stream-sort" className="sr-only">
                Sort stories
              </label>
              <select
                id="stream-sort"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as "newest" | "oldest")}
                className="bg-[#15191F] border border-[#2B3038] text-[#F5F5F4] text-xs px-2.5 py-1 rounded focus:outline-none focus:ring-1 focus:ring-[#BEF264]"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>

          {/* Stories List */}
          <div className="space-y-2">
            {displayedStories.length > 0 ? (
              displayedStories.map((story, i) => (
                <ArticleCard
                  key={story.id}
                  story={story}
                  variant="row"
                  priority={i === 0}
                />
              ))
            ) : (
              <div className="py-16 text-center text-[#A1A1AA] bg-[#15191F]/40 rounded-lg border border-[#2B3038]">
                <p className="text-base font-semibold">No stories found in this section yet.</p>
                <p className="text-xs mt-1">Check back soon as our desks file new reports.</p>
              </div>
            )}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#2B3038]">
              <span className="text-xs text-[#A1A1AA]">
                Showing {displayedStories.length} of {sortedStories.length} stories
              </span>
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + 4)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-[#2B3038] hover:border-[#BEF264] text-xs font-bold uppercase tracking-wider text-[#F5F5F4] hover:text-[#BEF264] bg-[#15191F] transition-all cursor-pointer"
              >
                <span>Load More Stories</span>
                <ArrowRight size={14} />
              </button>
            </div>
          )}
        </div>

        {/* Sidebar Column (1 col) */}
        <aside className="space-y-8">
          {/* Editor's Picks Widget */}
          <div className="bg-[#15191F]/70 border border-[#2B3038] rounded-xl p-6">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#2B3038]">
              <h3 className="text-lg font-bold text-[#F5F5F4] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#BEF264]" />
                Editor's Picks
              </h3>
              <span className="text-[10px] font-mono tracking-wider uppercase text-[#A1A1AA]">
                CURATED
              </span>
            </div>

            <div className="divide-y divide-[#2B3038]/60">
              {editorsPicks.map((story, index) => (
                <ArticleCard
                  key={story.id}
                  story={story}
                  variant="compact"
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Category Quick Index */}
          <div className="bg-[#15191F]/50 border border-[#2B3038] rounded-xl p-6">
            <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-[#BEF264] mb-4">
              EDITORIAL DESKS
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                { name: "News", href: "/news", count: "3 Stories" },
                { name: "Reviews", href: "/reviews", count: "3 Verified" },
                { name: "Impressions", href: "/impressions", count: "3 Hands-On" },
                { name: "Features", href: "/features", count: "4 Essays" },
                { name: "Development", href: "/development", count: "3 Tech" },
                { name: "Interviews", href: "/interviews", count: "3 Deep Dives" },
              ].map((desk) => (
                <Link
                  key={desk.name}
                  href={desk.href}
                  className="p-3 bg-[#1C2229]/60 hover:bg-[#1C2229] border border-[#2B3038] hover:border-[#BEF264]/40 rounded-lg transition-colors group"
                >
                  <span className="font-bold text-[#F5F5F4] group-hover:text-[#BEF264] transition-colors block">
                    {desk.name}
                  </span>
                  <span className="text-[10px] text-[#A1A1AA]">{desk.count}</span>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
