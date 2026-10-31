"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Search, Menu, X, ArrowUpRight, Bookmark } from "lucide-react";
import { searchStories } from "@/data/stories";
import { useBookmarks } from "@/context/BookmarkContext";

const navLinks = [
  { name: "News", href: "/news" },
  { name: "Reviews", href: "/reviews" },
  { name: "Impressions", href: "/impressions" },
  { name: "Features", href: "/features" },
  { name: "Development", href: "/development" },
  { name: "Interviews", href: "/interviews" },
  { name: "Documentaries", href: "/documentaries" },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { bookmarks, mounted } = useBookmarks();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Keyboard shortcut listener (⌘K / Ctrl+K & Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setSearchOpen(false);
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const searchResults = searchQuery.trim()
    ? searchStories(searchQuery).slice(0, 5)
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchOpen(false);
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-30 h-[76px] bg-[#0B0D10]/95 backdrop-blur-md border-b border-[#2B3038] px-4 sm:px-8 lg:px-12 flex items-center justify-between gap-4 transition-all">
        {/* Logo Wordmark */}
        <Link
          href="/"
          className="wordmark text-xl sm:text-2xl font-extrabold tracking-[-1.2px] text-[#F5F5F4] whitespace-nowrap group shrink-0"
          aria-label="TheGameVoice Home"
        >
          THE<span className="font-light text-[#A1A1AA]">GAME</span>VOICE
          <b className="text-[#BEF264] transition-colors group-hover:text-white">.</b>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden xl:flex items-center justify-center gap-1 sm:gap-2 lg:gap-4 h-full flex-1 max-w-4xl"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-3 py-2 text-xs font-semibold tracking-wider transition-colors uppercase h-full flex items-center ${
                  isActive
                    ? "text-[#F5F5F4]"
                    : "text-[#A1A1AA] hover:text-[#F5F5F4]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#BEF264] animate-in fade-in duration-200" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Actions: Search, Saved Bookmarks, Mobile Menu */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Quick Search Trigger */}
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Search stories (Press Command+K)"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2B3038] bg-[#15191F]/80 text-[#A1A1AA] hover:text-[#F5F5F4] hover:border-[#BEF264]/50 transition-colors text-xs"
          >
            <Search size={16} />
            <span className="hidden sm:inline">Search</span>
            <kbd className="hidden md:inline-block text-[10px] bg-[#1C2229] border border-[#2B3038] px-1.5 py-0.5 rounded text-[#A1A1AA] font-mono">
              ⌘K
            </kbd>
          </button>

          {/* Bookmarks Link */}
          <Link
            href="/saved"
            aria-label={`Saved articles (${mounted ? bookmarks.length : 0})`}
            className={`relative p-2.5 rounded-full border border-[#2B3038] transition-colors ${
              pathname === "/saved"
                ? "bg-[#BEF264] text-[#0B0D10] border-[#BEF264]"
                : "bg-[#15191F]/80 text-[#A1A1AA] hover:text-[#F5F5F4] hover:border-[#BEF264]/50"
            }`}
          >
            <Bookmark size={17} fill={pathname === "/saved" ? "currentColor" : "none"} />
            {mounted && bookmarks.length > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#BEF264] text-[#0B0D10] text-[9px] font-black flex items-center justify-center tabular-nums">
                {bookmarks.length}
              </span>
            )}
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            className="xl:hidden p-2.5 rounded-full border border-[#2B3038] bg-[#15191F] text-[#F5F5F4] hover:border-[#BEF264] transition-colors"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[76px] z-20 bg-[#0B0D10]/98 backdrop-blur-xl border-t border-[#2B3038] p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-top-2 duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Drawer"
        >
          <div className="space-y-1">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#BEF264] block mb-3">
              EDITORIAL CATEGORIES
            </span>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-3.5 border-b border-[#2B3038]/60 text-base font-bold transition-colors ${
                    isActive ? "text-[#BEF264]" : "text-[#F5F5F4] hover:text-[#BEF264]"
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight size={17} className="text-[#A1A1AA]" />
                </Link>
              );
            })}

            <div className="pt-4 space-y-2">
              <Link
                href="/saved"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3 text-sm font-semibold text-[#A1A1AA] hover:text-[#F5F5F4]"
              >
                <span className="flex items-center gap-2">
                  <Bookmark size={16} /> Saved Reading List
                </span>
                <span className="bg-[#1C2229] border border-[#2B3038] text-[10px] px-2 py-0.5 rounded text-[#BEF264] font-bold">
                  {mounted ? bookmarks.length : 0}
                </span>
              </Link>
              <Link
                href="/search"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3 text-sm font-semibold text-[#A1A1AA] hover:text-[#F5F5F4]"
              >
                <span className="flex items-center gap-2">
                  <Search size={16} /> Search Archive
                </span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>

          <div className="pt-8 border-t border-[#2B3038] text-xs text-[#A1A1AA]">
            <p>THEGAMEVOICE — Independent perspectives on games and virtual architecture.</p>
          </div>
        </div>
      )}

      {/* Quick Search Modal */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center p-4 pt-16 sm:pt-24 animate-in fade-in duration-150"
          onClick={() => setSearchOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Quick search modal"
        >
          <div
            className="w-full max-w-2xl bg-[#15191F] border border-[#2B3038] rounded-xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 sm:p-6 border-b border-[#2B3038]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-extrabold tracking-widest uppercase text-[#BEF264]">
                  EXPLORE THE ARCHIVE
                </span>
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  aria-label="Close search modal"
                  className="p-1 text-[#A1A1AA] hover:text-[#F5F5F4] transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={handleSearchSubmit} className="relative">
                <div className="flex items-center gap-3 bg-[#0B0D10] border border-[#2B3038] focus-within:border-[#BEF264] rounded-lg px-4 py-3 transition-colors">
                  <Search size={18} className="text-[#A1A1AA]" />
                  <input
                    type="search"
                    autoFocus
                    placeholder="Search stories, topics, creators, reviews…"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent text-[#F5F5F4] placeholder-[#A1A1AA] text-sm focus:outline-none"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="text-xs text-[#A1A1AA] hover:text-[#F5F5F4]"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* Results or Suggestions */}
            <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto">
              {searchQuery.trim() ? (
                <div>
                  <div className="flex items-center justify-between text-xs text-[#A1A1AA] mb-3">
                    <span>Matches ({searchResults.length})</span>
                    <button
                      type="button"
                      onClick={handleSearchSubmit}
                      className="text-[#BEF264] hover:underline font-bold"
                    >
                      View all results in search page →
                    </button>
                  </div>

                  {searchResults.length > 0 ? (
                    <div className="space-y-2">
                      {searchResults.map((story) => (
                        <Link
                          key={story.id}
                          href={`/articles/${story.slug}`}
                          onClick={() => setSearchOpen(false)}
                          className="flex items-center justify-between p-3 rounded-lg bg-[#1C2229]/60 hover:bg-[#1C2229] border border-[#2B3038] hover:border-[#BEF264]/40 transition-colors group"
                        >
                          <div className="min-w-0 pr-4">
                            <span className="text-[9px] font-bold tracking-wider uppercase text-[#BEF264] block">
                              {story.category}
                            </span>
                            <h4 className="text-sm font-bold text-[#F5F5F4] group-hover:text-[#BEF264] transition-colors truncate">
                              {story.title}
                            </h4>
                            <p className="text-xs text-[#A1A1AA] truncate mt-0.5">
                              {story.excerpt}
                            </p>
                          </div>
                          <ArrowUpRight
                            size={16}
                            className="text-[#A1A1AA] group-hover:text-[#BEF264] group-hover:translate-x-0.5 transition-all shrink-0"
                          />
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-[#A1A1AA]">
                      <p className="text-sm">No stories found matching "{searchQuery}"</p>
                      <p className="text-xs mt-1">Try searching for "worldbuilding", "review", or "engine".</p>
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#A1A1AA] block mb-3">
                    POPULAR EDITORIAL TOPICS
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Worldbuilding",
                      "Unreal Engine 5",
                      "Chrono Shift",
                      "Documentary",
                      "Indian Gaming",
                      "Survival Horror",
                      "Sound Design",
                    ].map((topic) => (
                      <button
                        key={topic}
                        type="button"
                        onClick={() => setSearchQuery(topic)}
                        className="text-xs bg-[#1C2229] hover:bg-[#252C35] text-[#A1A1AA] hover:text-[#BEF264] border border-[#2B3038] px-3 py-1.5 rounded-full transition-colors"
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="p-3 bg-[#0B0D10] border-t border-[#2B3038] text-[11px] text-[#A1A1AA] flex items-center justify-between px-6">
              <span>Press <b>ESC</b> to close</span>
              <span>Press <b>Enter</b> to full search</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
