"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Clock, Filter, ArrowUpRight, Flame, SlidersHorizontal } from "lucide-react";
import { getStoriesByCategory, getTrendingStories } from "@/data/stories";
import { SectionTitle, Label, BookmarkButton } from "@/components/ui/editorial";
import { ArticleCard } from "@/components/articles/ArticleCard";

export default function NewsPage() {
  const allNews = getStoriesByCategory("NEWS");
  const trending = getTrendingStories().slice(0, 4);

  const [topicFilter, setTopicFilter] = useState<string>("ALL");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;

  const topics = ["ALL", "Hardware", "Preservation", "Open Source", "Industry"];

  // Filter by topic
  const filteredNews = allNews.filter((item) => {
    if (topicFilter === "ALL") return true;
    return item.tags.some((t) => t.toLowerCase() === topicFilter.toLowerCase());
  });

  // Sort
  const sortedNews = [...filteredNews].sort((a, b) => {
    const timeA = new Date(a.publishedAt).getTime();
    const timeB = new Date(b.publishedAt).getTime();
    return sortOrder === "newest" ? timeB - timeA : timeA - timeB;
  });

  const totalPages = Math.ceil(sortedNews.length / itemsPerPage);
  const currentItems = sortedNews.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const leadStory = sortedNews[0];

  return (
    <div className="editorial-wrap py-10 lg:py-16 space-y-12">
      {/* Header */}
      <div>
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#BEF264] flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-[#BEF264] animate-ping" />
          DISPATCH WIRE
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#F5F5F4] tracking-tight">
          Gaming News & Analysis<span className="text-[#BEF264]">.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#A1A1AA] max-w-2xl mt-2 leading-relaxed">
          Critical coverage of industry policies, legal preservation, hardware breakthroughs, and creative movements.
        </p>
      </div>

      {/* Breaking / Lead Headline Banner */}
      {leadStory && (
        <div className="bg-[#15191F] border border-[#2B3038] hover:border-[#BEF264]/40 rounded-xl p-6 sm:p-8 relative group transition-all">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="bg-[#BEF264] text-[#0B0D10] text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded">
                  HEADLINE REPORT
                </span>
                <span className="text-xs text-[#A1A1AA] flex items-center gap-1 font-mono">
                  <Clock size={12} /> FILED {leadStory.publishedAt}
                </span>
              </div>

              <Link href={`/articles/${leadStory.slug}`}>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F4] group-hover:text-[#BEF264] transition-colors leading-snug">
                  {leadStory.title}
                </h2>
              </Link>

              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                {leadStory.excerpt}
              </p>

              <div className="flex items-center gap-4 text-xs text-[#A1A1AA] pt-2">
                <span>BY {leadStory.author.name.toUpperCase()}</span>
                <span>·</span>
                <span>{leadStory.readTime}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 self-start lg:self-center">
              <BookmarkButton storyId={leadStory.id} />
              <Link
                href={`/articles/${leadStory.slug}`}
                className="px-5 py-2.5 bg-[#BEF264] text-[#0B0D10] hover:bg-[#d5f78b] rounded-lg text-xs font-bold tracking-wider uppercase transition-colors flex items-center gap-1"
              >
                <span>Read Story</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* News Stream + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Stream Column (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#2B3038]">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {topics.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => {
                    setTopicFilter(t);
                    setPage(1);
                  }}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-full whitespace-nowrap transition-colors cursor-pointer ${
                    topicFilter === t
                      ? "bg-[#BEF264] text-[#0B0D10]"
                      : "bg-[#15191F] text-[#A1A1AA] hover:text-[#F5F5F4] border border-[#2B3038]"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs text-[#A1A1AA] shrink-0 self-end sm:self-auto">
              <SlidersHorizontal size={14} />
              <select
                value={sortOrder}
                onChange={(e) => {
                  setSortOrder(e.target.value as "newest" | "oldest");
                  setPage(1);
                }}
                className="bg-[#15191F] border border-[#2B3038] text-[#F5F5F4] text-xs px-2.5 py-1 rounded focus:outline-none focus:ring-1 focus:ring-[#BEF264]"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>

          {/* News List */}
          <div className="space-y-4">
            {currentItems.length > 0 ? (
              currentItems.map((story) => (
                <ArticleCard key={story.id} story={story} variant="row" />
              ))
            ) : (
              <div className="py-16 text-center text-[#A1A1AA] bg-[#15191F]/40 rounded-lg border border-[#2B3038]">
                <p className="text-base font-semibold">No news items found under "{topicFilter}".</p>
                <button
                  type="button"
                  onClick={() => setTopicFilter("ALL")}
                  className="mt-3 text-xs text-[#BEF264] font-bold underline"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between pt-6 border-t border-[#2B3038] text-xs text-[#A1A1AA]">
              <span>
                Page {page} of {totalPages}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={page === 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className="px-3 py-1.5 rounded border border-[#2B3038] bg-[#15191F] disabled:opacity-40 disabled:cursor-not-allowed hover:border-[#BEF264] transition-colors"
                >
                  Previous
                </button>
                <button
                  type="button"
                  disabled={page === totalPages}
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  className="px-3 py-1.5 rounded border border-[#2B3038] bg-[#15191F] disabled:opacity-40 disabled:cursor-not-allowed hover:border-[#BEF264] transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar (4 cols) */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-[#15191F] border border-[#2B3038] rounded-xl p-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#F5F5F4] flex items-center gap-2 mb-4 pb-3 border-b border-[#2B3038]">
              <Flame size={16} className="text-[#BEF264]" />
              Trending Discussions
            </h3>
            <div className="divide-y divide-[#2B3038]/60">
              {trending.map((story, i) => (
                <ArticleCard
                  key={story.id}
                  story={story}
                  variant="compact"
                  index={i}
                />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

