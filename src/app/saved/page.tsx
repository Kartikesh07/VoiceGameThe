"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Bookmark, Trash2, ArrowRight, Clock, BookOpen } from "lucide-react";
import { useBookmarks } from "@/context/BookmarkContext";
import { stories } from "@/data/stories";
import { ArticleCard } from "@/components/articles/ArticleCard";

export default function SavedPage() {
  const { bookmarks, removeBookmark, clearBookmarks, mounted } = useBookmarks();
  const [confirmClear, setConfirmClear] = useState(false);

  // Retrieve story objects matching saved IDs
  const savedStories = stories.filter((s) => bookmarks.includes(s.id));

  // Calculate total reading time
  const totalReadTimeMins = savedStories.reduce((acc, curr) => {
    const mins = parseInt(curr.readTime) || 7;
    return acc + mins;
  }, 0);

  if (!mounted) {
    return (
      <div className="editorial-wrap py-24 text-center text-[#A1A1AA]">
        Loading your saved reading list…
      </div>
    );
  }

  return (
    <div className="editorial-wrap py-10 lg:py-16 space-y-10">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#2B3038]">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#BEF264] flex items-center gap-2 mb-2">
            <Bookmark size={14} className="text-[#BEF264]" />
            PERSONAL EDITORIAL DOSSIER
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#F5F5F4] tracking-tight">
            Saved Reading List<span className="text-[#BEF264]">.</span>
          </h1>
          <p className="text-sm text-[#A1A1AA] max-w-xl mt-2 leading-relaxed">
            Stories and investigations persisted locally on your device for distraction-free offline reading.
          </p>
        </div>

        {savedStories.length > 0 && (
          <div className="flex flex-wrap items-center gap-3">
            <div className="bg-[#15191F] border border-[#2B3038] px-4 py-2 rounded-lg text-xs text-[#A1A1AA] flex items-center gap-2">
              <Clock size={14} className="text-[#BEF264]" />
              <span>
                <b>{savedStories.length}</b> {savedStories.length === 1 ? "story" : "stories"} · ~
                <b>{totalReadTimeMins} min</b> read
              </span>
            </div>

            {confirmClear ? (
              <div className="flex items-center gap-2 bg-[#1C2229] border border-red-500/40 p-1 rounded-lg animate-in fade-in">
                <span className="text-[11px] text-red-400 px-2 font-medium">Clear all?</span>
                <button
                  type="button"
                  onClick={() => {
                    clearBookmarks();
                    setConfirmClear(false);
                  }}
                  className="px-2.5 py-1 bg-red-600 text-white rounded text-xs font-bold hover:bg-red-700 transition-colors"
                >
                  Yes, clear
                </button>
                <button
                  type="button"
                  onClick={() => setConfirmClear(false)}
                  className="px-2.5 py-1 bg-[#2B3038] text-[#F5F5F4] rounded text-xs hover:bg-[#3B434E] transition-colors"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setConfirmClear(true)}
                className="px-3.5 py-2 rounded-lg border border-[#2B3038] bg-[#15191F] text-xs font-semibold text-[#A1A1AA] hover:text-red-400 hover:border-red-500/40 transition-colors flex items-center gap-1.5"
              >
                <Trash2 size={13} />
                <span>Clear list</span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Saved Articles List or Empty State */}
      {savedStories.length > 0 ? (
        <div className="space-y-4">
          {savedStories.map((story) => (
            <ArticleCard key={story.id} story={story} variant="row" />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center bg-[#15191F]/50 border border-[#2B3038] rounded-2xl p-8 max-w-2xl mx-auto space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#1C2229] border border-[#2B3038] flex items-center justify-center mx-auto text-[#BEF264]">
            <BookOpen size={26} />
          </div>
          <h2 className="text-2xl font-bold text-[#F5F5F4]">
            Your reading list is empty
          </h2>
          <p className="text-sm text-[#A1A1AA] leading-relaxed max-w-md mx-auto">
            Bookmark interesting essays, verified game reviews, or developer interviews as you explore to save them here for later.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="px-6 py-3 bg-[#BEF264] text-[#0B0D10] rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#d5f88b] transition-colors inline-flex items-center gap-2"
            >
              <span>Explore Homepage</span>
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/reviews"
              className="px-6 py-3 bg-[#15191F] border border-[#2B3038] text-[#F5F5F4] rounded-lg text-xs font-bold uppercase tracking-wider hover:border-[#BEF264] transition-colors inline-flex items-center gap-2"
            >
              <span>Browse Reviews</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

