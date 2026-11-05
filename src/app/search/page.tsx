"use client";

import { ArticleCard } from "@/components/articles/ArticleCard";
import { searchStories } from "@/data/stories";
import type { Category } from "@/types";
import { Search, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const categoryFilters: { label: string; value: Category | "ALL" }[] = [
  { label: "All Stories", value: "ALL" },
  { label: "News", value: "NEWS" },
  { label: "Reviews", value: "REVIEWS" },
  { label: "Impressions", value: "IMPRESSIONS" },
  { label: "Features", value: "FEATURES" },
  { label: "Development", value: "DEVELOPMENT" },
  { label: "Interviews", value: "INTERVIEWS" },
  { label: "Documentaries", value: "DOCUMENTARIES" },
];

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialQuery = searchParams.get("q") || "";
  const initialCategory = categoryFilters.find((c) => c.value === searchParams.get("category"))?.value || "ALL";

  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState<Category | "ALL">(initialCategory);

  // Synchronize browser back/forward navigation before rendering stale filters.
  const [previousParams, setPreviousParams] = useState(searchParams.toString());
  if (previousParams !== searchParams.toString()) {
    setPreviousParams(searchParams.toString());
    setQuery(searchParams.get("q") || "");
    const nextCategory = searchParams.get("category");
    setCategory(categoryFilters.find((c) => c.value === nextCategory)?.value || "ALL");
  }

  // Debounced URL update
  useEffect(() => {
    const handler = setTimeout(() => {
      const params = new URLSearchParams();
      if (query.trim()) params.set("q", query.trim());
      if (category !== "ALL") params.set("category", category);

      const qs = params.toString();
      router.replace(`/search${qs ? `?${qs}` : ""}`, { scroll: false });
    }, 300);

    return () => clearTimeout(handler);
  }, [query, category, router]);

  const results = searchStories(query, category);

  const popularSearches = [
    "Worldbuilding",
    "Chrono Shift",
    "Unreal Engine 5",
    "Preservation",
    "India",
    "Horror",
    "Elena Rostova",
  ];

  return (
    <div className="category-page category-search editorial-wrap py-10 lg:py-16 space-y-10">
      {/* Search Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#BEF264] block">
          ARCHIVE INDEX & RETRIEVAL
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#F5F5F4] tracking-tight">
          Search TheGameVoice<span className="text-[#BEF264]">.</span>
        </h1>
        <p className="text-sm text-[#A1A1AA] leading-relaxed">
          Search article titles, subtitles, summaries, authors and tags, plus review game titles, developers and interview subjects. Full article text is not indexed.
        </p>

        {/* Search Input Box */}
        <div className="relative pt-2">
          <div className="flex items-center gap-3 bg-[#15191F] border border-[#2B3038] focus-within:border-[#BEF264] rounded-xl px-5 py-4 transition-all shadow-lg">
            <Search size={20} className="text-[#A1A1AA] shrink-0" />
            <input
              type="search"
              aria-label="Search the article archive"
              placeholder="Search by game title, topic, author, studio, or concept…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-[#F5F5F4] placeholder-[#A1A1AA] text-base focus:outline-none"
              autoFocus
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search input"
                className="p-1 rounded text-[#A1A1AA] hover:text-[#F5F5F4]"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>

        {/* Popular Query Suggestions */}
        {!query && (
          <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
            <span className="text-[#A1A1AA]">Suggested:</span>
            {popularSearches.map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => setQuery(term)}
                className="bg-[#1C2229] hover:bg-[#252C35] text-[#A1A1AA] hover:text-[#BEF264] border border-[#2B3038] px-3 py-1 rounded-full transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Category Pills Filter */}
      <div className="flex flex-wrap items-center gap-1.5 pb-4 border-b border-[#2B3038]">
        {categoryFilters.map((cat) => (
          <button
            key={cat.value}
                  aria-pressed={category === cat.value}
            type="button"
            onClick={() => setCategory(cat.value)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-full whitespace-nowrap transition-colors cursor-pointer ${
              category === cat.value
                ? "bg-[#BEF264] text-[#0B0D10]"
                : "bg-[#15191F] text-[#A1A1AA] hover:text-[#F5F5F4] border border-[#2B3038]"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Results Live Count Header */}
      <div className="flex items-center justify-between text-xs text-[#A1A1AA]" aria-live="polite">
        <span>
          Showing <b>{results.length}</b> {results.length === 1 ? "article" : "articles"}
          {query.trim() && <> for &quot;{query}&quot;</>}
          {category !== "ALL" && <> in {category}</>}
        </span>
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("ALL");
            }}
            className="text-[#BEF264] hover:underline font-bold"
          >
            Reset search
          </button>
        )}
      </div>

      {/* Results Grid or Empty State */}
      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((story) => (
            <ArticleCard key={story.id} story={story} variant="grid" />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center bg-[#15191F]/50 border border-[#2B3038] rounded-2xl p-8 max-w-2xl mx-auto space-y-4">
          <div className="w-14 h-14 rounded-full bg-[#1C2229] border border-[#2B3038] flex items-center justify-center mx-auto text-[#A1A1AA]">
            <Search size={24} />
          </div>
          <h3 className="text-xl font-bold text-[#F5F5F4]">No matching articles found</h3>
          <p className="text-sm text-[#A1A1AA] leading-relaxed">
            We couldn&apos;t find any stories matching your query. Check your spelling or try broader terms like &quot;worldbuilding&quot;, &quot;review&quot;, or &quot;engine&quot;.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("ALL");
              }}
              className="px-5 py-2.5 bg-[#BEF264] text-[#0B0D10] rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#d5f88b] transition-colors"
            >
              Browse All Stories
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="editorial-wrap py-20 text-center text-[#A1A1AA]">
          Loading archive index…
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}

