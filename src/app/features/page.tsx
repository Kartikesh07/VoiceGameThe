"use client";

import { Artwork, BookmarkButton, Label } from "@/components/ui/editorial";
import { getStoriesByCategory } from "@/data/stories";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function FeaturesPage() {
  const allFeatures = getStoriesByCategory("FEATURES");
  const [readFilter, setReadFilter] = useState<"ALL" | "SHORT" | "LONG">("ALL");

  const filtered = allFeatures.filter((item) => {
    const mins = parseInt(item.readTime) || 8;
    if (readFilter === "SHORT") return mins <= 6;
    if (readFilter === "LONG") return mins > 6;
    return true;
  });

  const lead = filtered[0];
  const list = filtered.slice(1);

  return (
    <div className="category-page category-features editorial-wrap py-10 lg:py-16 space-y-12">
      {/* Header */}
      <div>
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#BEF264] flex items-center gap-2 mb-2">
          <BookOpen size={14} className="text-[#BEF264]" />
          LONG-FORM JOURNALISM
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#F5F5F4] tracking-tight">
          Features & Critical Essays<span className="text-[#BEF264]">.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#A1A1AA] max-w-2xl mt-2 leading-relaxed">
          Deep-dive explorations of spatial memory, environmental storytelling, acoustic architecture, and narrative agency.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-[#2B3038] pb-4">
        <span className="text-xs text-[#A1A1AA] mr-2">Filter Length:</span>
        {[
          { label: "All Essays", value: "ALL" },
          { label: "Short Reads (≤6 min)", value: "SHORT" },
          { label: "Deep Dives (>6 min)", value: "LONG" },
        ].map((tab) => (
          <button
            key={tab.value}
                  aria-pressed={readFilter === tab.value}
            type="button"
            onClick={() => setReadFilter(tab.value as "ALL" | "SHORT" | "LONG")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-colors cursor-pointer ${
              readFilter === tab.value
                ? "bg-[#BEF264] text-[#0B0D10]"
                : "bg-[#15191F] text-[#A1A1AA] hover:text-[#F5F5F4] border border-[#2B3038]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Lead Feature Split */}
      {!lead && <p role="status" className="py-12">No essays match this reading length. Choose another length to continue.</p>}
      {lead && (
        <article className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden border border-[#2B3038] bg-[#15191F] group">
          <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[500px]">
            <Link href={`/articles/${lead.slug}`} className="block h-full">
              <Artwork
                story={lead}
                priority
                aspectRatio="aspect-auto"
                className="absolute inset-0 h-full w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-transparent to-transparent lg:hidden" />
            </Link>
            <div className="absolute top-4 right-4 z-10">
              <BookmarkButton storyId={lead.id} />
            </div>
          </div>

          <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Label>COVER FEATURE</Label>
                <span className="text-xs text-[#A1A1AA]">· {lead.readTime}</span>
              </div>

              <Link href={`/articles/${lead.slug}`}>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F4] group-hover:text-[#BEF264] transition-colors leading-[1.1] mb-4">
                  {lead.title}
                </h2>
              </Link>

              {lead.subtitle && lead.subtitle !== lead.excerpt && (
                <p className="text-sm font-medium text-[#BEF264] mb-4 italic">
                  &quot;{lead.subtitle}&quot;
                </p>
              )}

              <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                {lead.excerpt}
              </p>
            </div>

            <div className="pt-6 border-t border-[#2B3038] flex items-center justify-between">
              <span className="text-xs text-[#A1A1AA]">
                BY {lead.author.name.toUpperCase()}
              </span>
              <Link
                href={`/articles/${lead.slug}`}
                className="px-5 py-2.5 bg-[#BEF264] text-[#0B0D10] hover:bg-[#d5f88b] rounded-lg text-xs font-bold tracking-wider uppercase transition-colors flex items-center gap-1"
              >
                <span>Read Full Essay</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </article>
      )}

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {list.map((story) => (
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
                  <Label>ESSAY</Label>
                  <span className="flex items-center gap-1">
                    <Clock size={11} /> {story.readTime}
                  </span>
                </div>

                <Link href={`/articles/${story.slug}`}>
                  <h3 className="text-xl font-bold text-[#F5F5F4] group-hover:text-[#BEF264] transition-colors leading-snug mb-3">
                    {story.title}
                  </h3>
                </Link>

                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-4 line-clamp-3">
                  {story.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#2B3038] flex items-center justify-between text-xs text-[#A1A1AA]">
                <span>BY {story.author.name.toUpperCase()}</span>
                <Link
                  href={`/articles/${story.slug}`}
                  className="text-[#BEF264] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  READ →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

