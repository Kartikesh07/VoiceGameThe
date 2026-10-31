import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock, Star, Play } from "lucide-react";
import { stories, getTrendingStories, getStoriesByCategory } from "@/data/stories";
import { Artwork, Label, SectionTitle, BookmarkButton } from "@/components/ui/editorial";
import { TrendRail } from "@/components/articles/TrendRail";
import Latest from "@/components/home/Latest";
import { ReviewCard } from "@/components/reviews/ReviewCard";
import { VideoCard } from "@/components/video/VideoCard";

export default function HomePage() {
  const heroStory = stories[0]; // "The worlds we lose ourselves in"
  const heroSideStories = [stories[1], stories[2]];
  const trendingStories = getTrendingStories();
  const reviewStories = getStoriesByCategory("REVIEWS").slice(0, 3);
  const devStory = stories[6]; // Indian studios
  const interviewStory = stories[7]; // Elena Rostova
  const docStory = stories[10]; // Abandoned servers
  const docSecondaryStories = [stories[11], stories[18]];

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* 1. Edition Ticker Strip */}
      <div className="border-b border-[#2B3038] bg-[#0E1116]">
        <div className="editorial-wrap py-3 flex flex-wrap items-center justify-between gap-3 text-[11px] font-semibold text-[#A1A1AA] tracking-wider uppercase">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[#BEF264]">
              <span className="w-2 h-2 rounded-full bg-[#BEF264] inline-block animate-pulse" />
              INDEPENDENT VOICES
            </span>
            <span className="text-[#2B3038]">|</span>
            <span className="hidden sm:inline">EXTRAORDINARY VIRTUAL WORLDS</span>
          </div>
          <div className="flex items-center gap-4 text-[10px]">
            <span>OCTOBER 2026 EDITION</span>
            <span className="text-[#2B3038]">|</span>
            <span className="text-[#F5F5F4]/80">VOL. IV · NO. 28</span>
          </div>
        </div>
      </div>

      {/* 2. Featured Hero Section */}
      <section className="editorial-wrap" aria-label="Hero Spotlight">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Hero Card (8 cols) */}
          <div className="lg:col-span-8 group relative rounded-xl overflow-hidden border border-[#2B3038] bg-[#15191F] flex flex-col justify-end min-h-[460px] sm:min-h-[560px] lg:min-h-[620px]">
            <Link
              href={`/articles/${heroStory.slug}`}
              className="absolute inset-0 z-0"
              aria-label={`Read featured story: ${heroStory.title}`}
            >
              <Artwork
                story={heroStory}
                priority
                aspectRatio="aspect-auto"
                className="absolute inset-0 h-full w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-[#0B0D10]/60 to-transparent" />
            </Link>

            <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
              <span className="bg-[#0B0D10]/80 backdrop-blur-md text-[#A1A1AA] text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded border border-[#2B3038]">
                COVER FEATURE
              </span>
              <BookmarkButton storyId={heroStory.id} />
            </div>

            <div className="relative z-10 p-6 sm:p-10 lg:p-12 max-w-3xl">
              <div className="flex items-center gap-3 mb-3">
                <Label>{heroStory.category}</Label>
                <span className="text-[10px] text-[#A1A1AA] font-semibold">
                  · {heroStory.readTime}
                </span>
              </div>

              <Link href={`/articles/${heroStory.slug}`}>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F5F5F4] group-hover:text-[#BEF264] transition-colors leading-[1.05] tracking-tight mb-4">
                  {heroStory.title}
                  <span className="text-[#BEF264]">.</span>
                </h1>
              </Link>

              <p className="text-sm sm:text-base text-[#D0D2D0] leading-relaxed max-w-xl mb-6">
                {heroStory.excerpt}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-[#2B3038]/80 text-xs font-semibold text-[#A1A1AA]">
                <span>BY {heroStory.author.name.toUpperCase()}</span>
                <Link
                  href={`/articles/${heroStory.slug}`}
                  className="w-10 h-10 rounded-full border border-[#A1A1AA]/40 flex items-center justify-center text-[#F5F5F4] group-hover:bg-[#BEF264] group-hover:text-[#0B0D10] group-hover:border-[#BEF264] transition-all"
                  aria-label="Read full feature"
                >
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </div>

          {/* Hero Side Cards (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {heroSideStories.map((story, i) => (
              <article
                key={story.id}
                className="group relative flex-1 rounded-xl overflow-hidden border border-[#2B3038] bg-[#15191F] flex flex-col justify-end min-h-[280px]"
              >
                <Link
                  href={`/articles/${story.slug}`}
                  className="absolute inset-0 z-0"
                  aria-label={`Read story: ${story.title}`}
                >
                  <Artwork
                    story={story}
                    priority
                    aspectRatio="aspect-auto"
                    className="absolute inset-0 h-full w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-[#0B0D10]/70 to-[#0B0D10]/20" />
                </Link>

                <div className="absolute top-3 right-3 z-10 flex items-center gap-2">
                  <span className="text-[9px] font-mono text-[#A1A1AA] bg-[#0B0D10]/80 px-2 py-0.5 rounded border border-[#2B3038]">
                    0{i + 2} / 03
                  </span>
                  <BookmarkButton storyId={story.id} size={15} />
                </div>

                <div className="relative z-10 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Label className="text-[9px]">{story.category}</Label>
                    <span className="text-[9px] text-[#A1A1AA]">· {story.readTime}</span>
                  </div>

                  <Link href={`/articles/${story.slug}`}>
                    <h2 className="text-xl font-bold text-[#F5F5F4] group-hover:text-[#BEF264] transition-colors leading-snug mb-2 line-clamp-2">
                      {story.title}
                    </h2>
                  </Link>

                  <p className="text-xs text-[#A1A1AA] line-clamp-2 mb-3">
                    {story.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-[10px] text-[#A1A1AA] pt-2 border-t border-[#2B3038]/60">
                    <span>BY {story.author.name.toUpperCase()}</span>
                    <span className="text-[#BEF264] font-bold group-hover:underline">
                      READ →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Trending Stories Rail */}
      <section className="editorial-wrap" aria-label="Trending Stories Rail">
        <SectionTitle
          eyebrow="ON OUR RADAR"
          title="Trending Stories"
          description="The discussions, critical essays, and breakthroughs capturing the gaming community right now."
        />
        <TrendRail stories={trendingStories} />
      </section>

      {/* 4. Latest Continuous Coverage Stream */}
      <Latest />

      {/* 5. Reviews Spotlight */}
      <section className="bg-[#12151B] border-y border-[#2B3038] py-16 lg:py-24" aria-label="Game Reviews Spotlight">
        <div className="editorial-wrap">
          <SectionTitle
            eyebrow="CRITICAL ANALYSIS"
            title="The Verdict"
            description="Exhaustive, independent game reviews scored with rigorous editorial standards."
            linkHref="/reviews"
            linkText="Browse all reviews archive"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviewStories.map((story, i) => (
              <ReviewCard key={story.id} story={story} priority={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Long-Form Editorial Showcase (High Contrast Asymmetric Split) */}
      <section className="editorial-wrap" aria-label="Long-Form Feature">
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden border border-[#2B3038]">
          {/* Visual Side (6 cols) */}
          <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-[500px]">
            <Artwork
              story={heroStory}
              aspectRatio="aspect-auto"
              className="absolute inset-0 h-full w-full"
            />
            <div className="absolute bottom-4 left-4 z-10 bg-[#0B0D10]/80 backdrop-blur-md px-3 py-1.5 rounded text-[10px] font-mono text-[#BEF264] tracking-widest border border-[#2B3038]">
              LONG READ · ESSAY 01
            </div>
          </div>

          {/* Copy Side (6 cols) - Editorial Parchment Theme */}
          <div className="lg:col-span-6 bg-[#E8E9E4] text-[#111814] p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <span className="flex items-center gap-2 text-[10px] font-extrabold tracking-[0.16em] uppercase text-[#4C612D] mb-3">
              <i className="w-1.5 h-1.5 rounded-full bg-[#617D3A] inline-block" />
              THE ESSAY COLLECTION
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111814] leading-[1.05] mb-4">
              More than an<br />escapist pastime<span className="text-[#719A32]">.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#464D48] leading-relaxed mb-6 max-w-md">
              Some worlds refuse to end when the display goes dark. We examine spatial memory, acoustic geometry, and why digital ruins resonate as deeply as physical history.
            </p>

            <div className="flex items-center gap-6 pt-4 border-t border-[#BAC1B2]">
              <Link
                href={`/articles/${heroStory.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#111814] text-[#F5F5F4] hover:bg-[#202722] text-xs font-extrabold uppercase tracking-wider transition-colors"
              >
                <span>Read Full Essay</span>
                <ArrowRight size={14} />
              </Link>
              <span className="text-xs text-[#636C65] font-semibold">
                8 MIN READ · BY EDITORIAL DESK
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Development & Interviews Split Showcase */}
      <section className="editorial-wrap" aria-label="Development and Interviews">
        <SectionTitle
          eyebrow="THE MINDS BEHIND PLAY"
          title="Craft & Culture"
          description="In-depth studio investigations, technical engine breakthroughs, and extended creator interviews."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Dev Feature (7 cols) */}
          <article className="lg:col-span-7 bg-[#15191F] border border-[#2B3038] hover:border-[#BEF264]/40 rounded-xl overflow-hidden flex flex-col group transition-all">
            <div className="relative">
              <Link href={`/articles/${devStory.slug}`} className="block overflow-hidden">
                <Artwork story={devStory} aspectRatio="aspect-[16/9]" />
              </Link>
              <div className="absolute top-4 left-4 bg-[#0B0D10]/80 backdrop-blur-md px-3 py-1 rounded text-[10px] font-bold text-[#BEF264] border border-[#2B3038]">
                STUDIO SPOTLIGHT
              </div>
              <div className="absolute top-4 right-4 z-10">
                <BookmarkButton storyId={devStory.id} />
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[10px] text-[#A1A1AA] mb-2">
                  <Label>DEVELOPMENT</Label>
                  <span>· {devStory.readTime}</span>
                </div>

                <Link href={`/articles/${devStory.slug}`}>
                  <h3 className="text-2xl font-bold text-[#F5F5F4] group-hover:text-[#BEF264] transition-colors leading-snug mb-3">
                    {devStory.title}
                  </h3>
                </Link>

                <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                  {devStory.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#2B3038] flex items-center justify-between text-xs text-[#A1A1AA]">
                <span>BY {devStory.author.name.toUpperCase()}</span>
                <Link
                  href={`/articles/${devStory.slug}`}
                  className="text-[#BEF264] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  EXPLORE STUDIO →
                </Link>
              </div>
            </div>
          </article>

          {/* Interview Spotlight (5 cols) */}
          <article className="lg:col-span-5 bg-[#15191F] border border-[#2B3038] hover:border-[#BEF264]/40 rounded-xl p-6 sm:p-8 flex flex-col justify-between group transition-all">
            <div>
              <div className="flex items-center justify-between text-[10px] mb-4 text-[#A1A1AA]">
                <Label>CREATOR INTERVIEW</Label>
                <BookmarkButton storyId={interviewStory.id} size={15} />
              </div>

              <Link href={`/articles/${interviewStory.slug}`} className="block overflow-hidden rounded-lg mb-6">
                <Artwork story={interviewStory} aspectRatio="aspect-[16/10]" />
              </Link>

              <Link href={`/articles/${interviewStory.slug}`}>
                <h3 className="text-xl font-bold text-[#F5F5F4] group-hover:text-[#BEF264] transition-colors leading-snug mb-3">
                  {interviewStory.title}
                </h3>
              </Link>

              {interviewStory.interview?.pullQuote && (
                <blockquote className="my-4 pl-4 border-l-2 border-[#BEF264] text-xs sm:text-sm text-[#F5F5F4] italic leading-relaxed">
                  "{interviewStory.interview.pullQuote}"
                </blockquote>
              )}

              <p className="text-xs text-[#A1A1AA] line-clamp-2">
                {interviewStory.excerpt}
              </p>
            </div>

            <div className="pt-6 border-t border-[#2B3038] flex items-center justify-between text-xs text-[#A1A1AA]">
              <span>WITH {interviewStory.interview?.interviewee.toUpperCase()}</span>
              <Link
                href={`/articles/${interviewStory.slug}`}
                className="text-[#BEF264] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
              >
                READ Q&A →
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* 8. Documentaries & Motion Gallery */}
      <section className="bg-[#0E1116] border-y border-[#2B3038] py-16 lg:py-24" aria-label="Documentaries in Motion">
        <div className="editorial-wrap">
          <SectionTitle
            eyebrow="WATCH & DISCOVER"
            title="Stories in Motion"
            description="Feature-length video journalism, archival software archaeology, and intimate craft chronicles."
            linkHref="/documentaries"
            linkText="Browse all documentaries"
          />

          <div className="space-y-8">
            {/* Featured Video Theatre Banner */}
            <VideoCard story={docStory} featured />

            {/* Secondary Video Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {docSecondaryStories.map((s) => (
                <VideoCard key={s.id} story={s} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
