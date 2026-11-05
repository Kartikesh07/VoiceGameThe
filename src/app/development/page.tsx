
import { Artwork, BookmarkButton, Label } from "@/components/ui/editorial";
import { getStoriesByCategory } from "@/data/stories";
import { ArrowUpRight, Cpu } from "lucide-react";
import Link from "next/link";

export default function DevelopmentPage() {
  const devStories = getStoriesByCategory("DEVELOPMENT");
  const heroDev = devStories[1] || devStories[0]; // Indian studios or Inside the art
  const otherDev = devStories.filter((s) => s.id !== heroDev.id);

  return (
    <div className="category-page category-development editorial-wrap py-10 lg:py-16 space-y-12">
      {/* Header */}
      <div>
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#BEF264] flex items-center gap-2 mb-2">
          <Cpu size={14} className="text-[#BEF264]" />
          TECHNICAL & CREATIVE CRAFT
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#F5F5F4] tracking-tight">
          Game Development & Engineering<span className="text-[#BEF264]">.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#A1A1AA] max-w-2xl mt-2 leading-relaxed">
          Inside game engines, procedural algorithms, physics simulations, and the international studio ecosystems shaping production.
        </p>
      </div>

      {/* Featured Studio Investigation */}
      {heroDev && (
        <article className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden border border-[#2B3038] bg-[#15191F] group">
          <div className="lg:col-span-7 relative min-h-[360px] lg:min-h-[460px]">
            <Link href={`/articles/${heroDev.slug}`} className="block h-full">
              <Artwork
                story={heroDev}
                priority
                aspectRatio="aspect-auto"
                className="absolute inset-0 h-full w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-transparent to-transparent lg:hidden" />
            </Link>
            <div className="absolute top-4 left-4 bg-[#0B0D10]/80 backdrop-blur-md px-3 py-1 rounded text-[10px] font-bold text-[#BEF264] border border-[#2B3038]">
              ECOSYSTEM SPOTLIGHT
            </div>
            <div className="absolute top-4 right-4 z-10">
              <BookmarkButton storyId={heroDev.id} />
            </div>
          </div>

          <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Label>STUDIO BLUEPRINT</Label>
                <span className="text-xs text-[#A1A1AA]">· {heroDev.readTime}</span>
              </div>

              <Link href={`/articles/${heroDev.slug}`}>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F4] group-hover:text-[#BEF264] transition-colors leading-snug mb-3">
                  {heroDev.title}
                </h2>
              </Link>

              <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                {heroDev.excerpt}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {heroDev.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold bg-[#1C2229] border border-[#2B3038] px-2.5 py-1 rounded text-[#BEF264]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#2B3038] flex items-center justify-between">
              <span className="text-xs text-[#A1A1AA]">
                BY {heroDev.author.name.toUpperCase()}
              </span>
              <Link
                href={`/articles/${heroDev.slug}`}
                className="px-5 py-2.5 bg-[#BEF264] text-[#0B0D10] hover:bg-[#d5f88b] rounded-lg text-xs font-bold tracking-wider uppercase transition-colors flex items-center gap-1"
              >
                <span>Read Blueprint</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </article>
      )}

      {/* Tech Breakdown Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {otherDev.map((story) => (
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
                  <Label>DEV DEEP DIVE</Label>
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

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {story.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] bg-[#1C2229] border border-[#2B3038] px-2 py-0.5 rounded text-[#A1A1AA]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
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

