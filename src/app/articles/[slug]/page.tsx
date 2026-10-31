import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Clock,
  Calendar,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Play,
  Film,
  Sparkles,
} from "lucide-react";
import { stories, getStoryBySlug, getRelatedStories } from "@/data/stories";
import {
  Artwork,
  Label,
  BookmarkButton,
  ShareButton,
  ReadingProgressBar,
  VerdictCard,
} from "@/components/ui/editorial";
import { ArticleCard } from "@/components/articles/ArticleCard";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return stories.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = getStoryBySlug(slug);

  if (!story) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${story.title} — ${story.category}`,
    description: story.excerpt,
    openGraph: {
      title: story.title,
      description: story.excerpt,
      type: "article",
      publishedTime: story.publishedAt,
      authors: [story.author.name],
      tags: story.tags,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);

  if (!story) {
    notFound();
  }

  const related = getRelatedStories(story.slug, 3);
  const currentIndex = stories.findIndex((s) => s.slug === story.slug);
  const prevStory = currentIndex > 0 ? stories[currentIndex - 1] : null;
  const nextStory = currentIndex < stories.length - 1 ? stories[currentIndex + 1] : null;

  const categoryHref = `/${story.category.toLowerCase()}`;

  return (
    <>
      <ReadingProgressBar />

      <article className="min-h-screen pb-24">
        {/* Breadcrumbs Navigation */}
        <div className="border-b border-[#2B3038] bg-[#0E1116]">
          <div className="editorial-wrap py-3.5 flex items-center gap-2 text-xs text-[#A1A1AA] overflow-x-auto scrollbar-none">
            <Link href="/" className="hover:text-[#BEF264] transition-colors whitespace-nowrap">
              Home
            </Link>
            <ChevronRight size={13} className="shrink-0 text-[#2B3038]" />
            <Link
              href={categoryHref}
              className="hover:text-[#BEF264] transition-colors uppercase font-bold text-[10px] tracking-wider whitespace-nowrap"
            >
              {story.category}
            </Link>
            <ChevronRight size={13} className="shrink-0 text-[#2B3038]" />
            <span className="text-[#F5F5F4] truncate font-medium">{story.title}</span>
          </div>
        </div>

        {/* Article Header Container */}
        <header className="editorial-wrap pt-10 pb-8 max-w-4xl">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Label>{story.category}</Label>
              <span className="text-[#2B3038]">·</span>
              <span className="text-xs text-[#A1A1AA] flex items-center gap-1">
                <Clock size={12} /> {story.readTime}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <BookmarkButton storyId={story.id} />
              <ShareButton title={story.title} slug={story.slug} />
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F5F5F4] leading-[1.08] tracking-tight mb-4">
            {story.title}
            <span className="text-[#BEF264]">.</span>
          </h1>

          {story.subtitle && (
            <p className="text-lg sm:text-xl text-[#A1A1AA] font-normal leading-relaxed mb-6">
              {story.subtitle}
            </p>
          )}

          {/* Author and Metadata Bar */}
          <div className="flex items-center justify-between py-4 border-y border-[#2B3038] text-xs text-[#A1A1AA]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#1C2229] border border-[#2B3038] flex items-center justify-center font-bold text-[11px] text-[#BEF264]">
                {story.author.avatar || story.author.name.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <span className="font-bold text-[#F5F5F4] block">{story.author.name}</span>
                <span className="text-[11px] text-[#A1A1AA]">{story.author.role}</span>
              </div>
            </div>

            <div className="text-right">
              <span className="block font-medium text-[#F5F5F4]">Published</span>
              <span className="text-[11px] text-[#A1A1AA]">{story.publishedAt}</span>
            </div>
          </div>
        </header>

        {/* Large Cover Hero Image */}
        <div className="editorial-wrap max-w-5xl mb-12">
          <div className="relative rounded-2xl overflow-hidden border border-[#2B3038] shadow-2xl">
            <Artwork
              story={story}
              priority
              aspectRatio="aspect-[21/10]"
              className="w-full"
            />
            <span className="absolute bottom-3 right-3 bg-[#0B0D10]/80 backdrop-blur-md px-2.5 py-1 rounded text-[9px] font-mono text-[#A1A1AA] border border-[#2B3038]">
              ILLUSTRATIVE ARTWORK
            </span>
          </div>
          {story.alt && (
            <p className="text-xs text-[#A1A1AA] italic mt-2.5 px-2">
              Caption: {story.alt}
            </p>
          )}
        </div>

        {/* Main Article Body */}
        <div className="editorial-wrap max-w-3xl">
          {/* Lead Paragraph */}
          {story.content.lead && (
            <p className="text-lg sm:text-xl font-medium text-[#F5F5F4] leading-relaxed mb-8 first-letter:text-5xl first-letter:font-black first-letter:float-left first-letter:mr-3 first-letter:text-[#BEF264] first-letter:leading-none">
              {story.content.lead}
            </p>
          )}

          {/* Standard Paragraphs */}
          <div className="space-y-6 text-base sm:text-lg text-[#D0D2D0] leading-relaxed">
            {story.content.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Pull Quote Callout */}
          {story.content.pullQuote && (
            <figure className="my-12 p-8 bg-[#15191F] border-l-4 border-[#BEF264] rounded-r-xl">
              <blockquote className="text-xl sm:text-2xl font-bold text-[#F5F5F4] leading-snug tracking-tight">
                "{story.content.pullQuote.quote}"
              </blockquote>
              {story.content.pullQuote.attribution && (
                <figcaption className="text-xs text-[#BEF264] font-bold uppercase tracking-wider mt-3">
                  — {story.content.pullQuote.attribution}
                </figcaption>
              )}
            </figure>
          )}

          {/* Subsections */}
          {story.content.subsections && story.content.subsections.length > 0 && (
            <div className="my-10 space-y-10">
              {story.content.subsections.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F4] tracking-tight pt-4">
                    {section.heading}
                  </h2>
                  <div className="space-y-5 text-base sm:text-lg text-[#D0D2D0] leading-relaxed">
                    {section.paragraphs.map((sp, pi) => (
                      <p key={pi}>{sp}</p>
                    ))}
                  </div>

                  {section.image && (
                    <div className="my-6 rounded-xl overflow-hidden border border-[#2B3038]">
                      <div className="relative aspect-[16/9] bg-[#15191F]">
                        <img
                          src={section.image}
                          alt={section.imageCaption || section.heading}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {section.imageCaption && (
                        <p className="text-xs text-[#A1A1AA] italic p-3 bg-[#11151A] border-t border-[#2B3038]">
                          {section.imageCaption}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Special Reviews Section: Verdict & Score */}
          {story.review && <VerdictCard review={story.review} />}

          {/* Special Documentaries Section: Video Player Preview & Chapters */}
          {story.documentary && (
            <section
              aria-labelledby="documentary-player-heading"
              className="my-10 p-6 md:p-8 bg-[#15191F] border border-[#2B3038] rounded-xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <Film size={18} className="text-[#BEF264]" />
                <h3 id="documentary-player-heading" className="text-lg font-bold text-[#F5F5F4]">
                  Documentary Screening ({story.documentary.duration})
                </h3>
              </div>

              <div className="relative aspect-video bg-black rounded-lg overflow-hidden flex flex-col items-center justify-center p-6 text-center border border-[#2B3038]">
                <div className="w-14 h-14 rounded-full bg-[#BEF264] text-[#0B0D10] flex items-center justify-center mb-3 pl-1 shadow-lg">
                  <Play size={24} fill="currentColor" />
                </div>
                <h4 className="text-base font-bold text-[#F5F5F4] mb-1">{story.title}</h4>
                <p className="text-xs text-[#A1A1AA]">
                  Director: {story.documentary.director} · Production Year: {story.documentary.productionYear}
                </p>
              </div>

              {story.documentary.chapters && (
                <div className="mt-6 pt-6 border-t border-[#2B3038]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#A1A1AA] mb-3">
                    Documentary Chapters & Timestamps
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {story.documentary.chapters.map((ch, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-2 rounded bg-[#1C2229] border border-[#2B3038]"
                      >
                        <span className="font-mono text-[#BEF264] font-bold">{ch.time}</span>
                        <span className="text-[#F5F5F4] truncate">{ch.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          )}

          {/* Tags */}
          <div className="pt-8 pb-4 border-t border-[#2B3038] flex flex-wrap items-center gap-2">
            <span className="text-xs text-[#A1A1AA] mr-2">Filed Under:</span>
            {story.tags.map((tag) => (
              <Link
                key={tag}
                href={`/search?q=${encodeURIComponent(tag)}`}
                className="text-xs bg-[#15191F] hover:bg-[#1C2229] hover:text-[#BEF264] text-[#A1A1AA] border border-[#2B3038] px-3 py-1 rounded-full transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>

          {/* Author Footer Bio Card */}
          <div className="my-8 p-6 bg-[#15191F] border border-[#2B3038] rounded-xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#1C2229] border border-[#2B3038] flex items-center justify-center font-bold text-sm text-[#BEF264] shrink-0">
              {story.author.avatar || story.author.name.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <span className="text-xs font-bold text-[#BEF264] uppercase tracking-wider block">
                WRITTEN BY
              </span>
              <h4 className="text-base font-bold text-[#F5F5F4]">{story.author.name}</h4>
              <p className="text-xs text-[#A1A1AA] mt-0.5">
                Senior journalist at TheGameVoice. Focused on world design, environmental acoustics, and interactive narratives.
              </p>
            </div>
          </div>

          {/* Next / Previous Story Navigation */}
          <nav
            aria-label="Article navigation"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-8 border-t border-[#2B3038]"
          >
            {prevStory ? (
              <Link
                href={`/articles/${prevStory.slug}`}
                className="p-4 rounded-xl bg-[#15191F] hover:bg-[#1C2229] border border-[#2B3038] hover:border-[#BEF264]/40 transition-colors group flex flex-col justify-between"
              >
                <span className="text-[10px] font-bold tracking-wider uppercase text-[#A1A1AA] flex items-center gap-1 mb-2 group-hover:text-[#BEF264]">
                  <ArrowLeft size={12} /> Previous Story
                </span>
                <span className="text-sm font-bold text-[#F5F5F4] line-clamp-2">
                  {prevStory.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {nextStory ? (
              <Link
                href={`/articles/${nextStory.slug}`}
                className="p-4 rounded-xl bg-[#15191F] hover:bg-[#1C2229] border border-[#2B3038] hover:border-[#BEF264]/40 transition-colors group flex flex-col justify-between text-right"
              >
                <span className="text-[10px] font-bold tracking-wider uppercase text-[#A1A1AA] flex items-center justify-end gap-1 mb-2 group-hover:text-[#BEF264]">
                  Next Story <ArrowRight size={12} />
                </span>
                <span className="text-sm font-bold text-[#F5F5F4] line-clamp-2">
                  {nextStory.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </nav>
        </div>

        {/* Related Articles Rail */}
        <aside className="editorial-wrap pt-16 border-t border-[#2B3038] max-w-5xl">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-[#F5F5F4]">
              Related Coverage & Stories
            </h3>
            <Link
              href={categoryHref}
              className="text-xs text-[#BEF264] hover:underline font-bold"
            >
              More in {story.category} →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((relStory) => (
              <ArticleCard key={relStory.id} story={relStory} variant="grid" />
            ))}
          </div>
        </aside>
      </article>
    </>
  );
}

