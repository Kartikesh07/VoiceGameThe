
import { Artwork, BookmarkButton, Label } from "@/components/ui/editorial";
import { getStoriesByCategory } from "@/data/stories";
import { ArrowUpRight, Eye } from "lucide-react";
import Link from "next/link";

export default function ImpressionsPage() {
  const impressions = getStoriesByCategory("IMPRESSIONS");
  const leadImpression = impressions[0];
  const otherImpressions = impressions.slice(1);

  return (
    <div className="category-page category-impressions editorial-wrap py-10 lg:py-16 space-y-12">
      {/* Page Title */}
      <div>
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#BEF264] flex items-center gap-2 mb-2">
          <Eye size={14} className="text-[#BEF264]" />
          EARLY HANDS-ON
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#F5F5F4] tracking-tight">
          First Impressions & Field Reports<span className="text-[#BEF264]">.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#A1A1AA] max-w-2xl mt-2 leading-relaxed">
          Published impressions and speculative design notebooks. Source notes link to the original coverage; fictional concepts are labeled as samples.
        </p>
      </div>

      {/* Featured Wide Impression Card */}
      {leadImpression && (
        <article className="group relative bg-[#15191F] border border-[#2B3038] hover:border-[#BEF264]/40 rounded-2xl overflow-hidden transition-all">
          <div className="relative min-h-[420px] lg:min-h-[520px]">
            <Artwork
              story={leadImpression}
              priority
              aspectRatio="aspect-auto"
              className="absolute inset-0 h-full w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-[#0B0D10]/60 to-transparent" />

            <div className="absolute top-4 right-4 z-10">
              <BookmarkButton storyId={leadImpression.id} />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-12 z-10 max-w-3xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] font-extrabold tracking-widest uppercase bg-[#BEF264] text-[#0B0D10] px-3 py-0.5 rounded">
                  HANDS-ON REPORT
                </span>
                <span className="text-xs text-[#A1A1AA]">
                  {leadImpression.readTime}
                </span>
              </div>

              <Link href={`/articles/${leadImpression.slug}`}>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F5F4] group-hover:text-[#BEF264] transition-colors leading-tight mb-4">
                  {leadImpression.title}
                </h2>
              </Link>

              <p className="text-sm sm:text-base text-[#D0D2D0] leading-relaxed mb-6">
                {leadImpression.excerpt}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-[#2B3038]/80 text-xs text-[#A1A1AA]">
                <span>BY {leadImpression.author.name.toUpperCase()}</span>
                <Link
                  href={`/articles/${leadImpression.slug}`}
                  className="px-5 py-2.5 bg-[#BEF264] text-[#0B0D10] hover:bg-[#d5f88b] rounded-lg text-xs font-bold tracking-wider uppercase transition-colors flex items-center gap-1"
                >
                  <span>Read Full Impressions</span>
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </article>
      )}

      {/* Asymmetric Impressions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {otherImpressions.map((story) => (
          <article
            key={story.id}
            className="group bg-[#15191F] border border-[#2B3038] hover:border-[#BEF264]/40 rounded-xl overflow-hidden flex flex-col transition-all duration-300"
          >
            <div className="relative">
              <Link href={`/articles/${story.slug}`} className="block overflow-hidden">
                <Artwork story={story} aspectRatio="aspect-[16/10]" />
              </Link>
              <div className="absolute top-3 left-3 bg-[#0B0D10]/80 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-mono text-[#BEF264] border border-[#2B3038]">
                CONCEPT NOTE
              </div>
              <div className="absolute top-3 right-3 z-10">
                <BookmarkButton storyId={story.id} size={15} />
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[10px] text-[#A1A1AA] mb-2">
                  <Label>IMPRESSIONS</Label>
                  <span>{story.readTime}</span>
                </div>

                <Link href={`/articles/${story.slug}`}>
                  <h3 className="text-xl font-bold text-[#F5F5F4] group-hover:text-[#BEF264] transition-colors leading-snug mb-3">
                    {story.title}
                  </h3>
                </Link>

                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-4">
                  {story.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#2B3038] flex items-center justify-between text-xs text-[#A1A1AA]">
                <span>BY {story.author.name.toUpperCase()}</span>
                <Link
                  href={`/articles/${story.slug}`}
                  className="text-[#BEF264] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  READ REPORT →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

