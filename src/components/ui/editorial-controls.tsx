"use client";
import { useBookmarks } from "@/context/BookmarkContext";
import type { ReviewMetadata } from "@/types";
import { Bookmark, Check, ChevronDown, ChevronUp, Share2 } from "lucide-react";
import React, { useEffect, useState } from "react";

export function BookmarkButton({
  storyId,
  className = "",
  size = 18,
}: {
  storyId: string;
  className?: string;
  size?: number;
}) {
  const { isBookmarked, toggleBookmark, mounted } = useBookmarks();
  const bookmarked = mounted && isBookmarked(storyId);

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleBookmark(storyId);
      }}
      aria-label={bookmarked ? "Remove from bookmarks" : "Save article for later"}
      aria-pressed={bookmarked}
      disabled={!mounted}
      className={`min-h-11 min-w-11 inline-flex items-center justify-center p-2 rounded-full transition-all active:scale-90 border ${
        bookmarked
          ? "bg-[#BEF264] text-[#0B0D10] border-[#BEF264]"
          : "bg-[#15191F]/80 text-[#A1A1AA] hover:text-[#F5F5F4] hover:bg-[#1C2229] border-[#2B3038]"
      } ${className}`}
    >
      <Bookmark size={size} fill={bookmarked ? "currentColor" : "none"} />
    </button>
  );
}

export function ShareButton({
  title,
  slug,
  className = "",
}: {
  title: string;
  slug: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  const [shareError, setShareError] = useState(false);

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const url = typeof window !== "undefined" ? `${window.location.origin}/articles/${slug}` : "";
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setShareError(false);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setShareError(true);
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      aria-label={`Copy link to ${title}`}
      aria-live="polite"
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all ${
        copied
          ? "bg-[#BEF264]/10 text-[#BEF264] border-[#BEF264]"
          : "bg-[#15191F] text-[#A1A1AA] hover:text-[#F5F5F4] hover:border-[#BEF264]/50 border-[#2B3038]"
      } ${className}`}
    >
      {copied ? (
        <>
          <Check size={14} className="text-[#BEF264]" />
          <span>Link copied!</span>
        </>
      ) : (
        <>
          <Share2 size={14} />
          <span>{shareError ? "Copy unavailable — use address bar" : "Share"}</span>
        </>
      )}
    </button>
  );
}

export function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const updateProgress = () => {
      frame = 0;
      const body = document.getElementById("article-body");
      if (!body) return;
      const start = body.getBoundingClientRect().top + window.scrollY - 100;
      const distance = Math.max(1, body.offsetHeight - window.innerHeight + 100);
      setProgress(Math.min(100, Math.max(0, (window.scrollY - start) / distance * 100)));
    };

    const scheduleProgress = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    };
    window.addEventListener("scroll", scheduleProgress, { passive: true });
    window.addEventListener("resize", scheduleProgress);
    updateProgress();
    return () => {
      window.removeEventListener("scroll", scheduleProgress);
      window.removeEventListener("resize", scheduleProgress);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      className="fixed top-[76px] left-0 right-0 h-[3px] bg-transparent z-40 pointer-events-none"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Article reading progress"
    >
      <div
        className="h-full bg-[#BEF264] origin-left transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress / 100})` }}
      />
    </div>
  );
}

export function VerdictCard({ review }: { review: ReviewMetadata }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      aria-labelledby="review-verdict-heading"
      className="my-10 p-6 md:p-8 bg-[#15191F] border border-[#2B3038] rounded-lg"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#2B3038]">
        <div>
          <span className="text-[10px] font-extrabold tracking-[0.14em] uppercase text-[#BEF264] mb-1 block">
            DEMONSTRATION VERDICT · FICTIONAL GAME
          </span>
          <h3 id="review-verdict-heading" className="text-2xl md:text-3xl font-extrabold text-[#F5F5F4]">
            {review.gameTitle}
          </h3>
          <p className="text-xs text-[#A1A1AA] mt-1">
            Developed by {review.developer} · Platforms: {review.platform.join(", ")}
          </p>
        </div>

        <div className="flex items-center gap-4 bg-[#1C2229] px-6 py-4 rounded-lg border border-[#2B3038]/80 self-start md:self-auto">
          <div className="text-right">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#A1A1AA] block">
              Verdict
            </span>
            <span className="text-lg font-bold text-[#BEF264]">{review.verdict}</span>
          </div>
          <div className="w-[1px] h-10 bg-[#2B3038]" />
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-extrabold text-[#F5F5F4] tabular-nums">
              {review.score.toFixed(1)}
            </span>
            <span className="text-xs text-[#A1A1AA]">/ 10</span>
          </div>
        </div>
      </div>

      <div className="py-6">
        <p className="text-base md:text-lg text-[#F5F5F4] leading-relaxed font-medium italic">
          &quot;{review.summary}&quot;
        </p>
      </div>

      <div className="pt-2">
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#BEF264] hover:text-[#d4f88e] transition-colors"
        >
          <span>{expanded ? "Hide Breakdown & Highlights" : "View Pros, Cons & Details"}</span>
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {expanded && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-[#2B3038]">
            <div className="bg-[#1C2229]/60 p-4 rounded-md border border-[#2B3038]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#BEF264] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#BEF264]" />
                The Highlights (Pros)
              </h4>
              <ul className="space-y-2 text-xs md:text-sm text-[#F5F5F4]">
                {review.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#BEF264] font-bold">✓</span>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#1C2229]/60 p-4 rounded-md border border-[#2B3038]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#A1A1AA] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#A1A1AA]" />
                Considerations (Cons)
              </h4>
              <ul className="space-y-2 text-xs md:text-sm text-[#A1A1AA]">
                {review.cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#A1A1AA] font-bold">–</span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
