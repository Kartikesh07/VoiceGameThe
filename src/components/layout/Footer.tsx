"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Camera, Video } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="border-t border-[#2B3038] bg-[#080A0D] text-[#A1A1AA] mt-24">
      {/* Newsletter Dispatch Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16 border-b border-[#2B3038]">
        <div className="bg-[#E8E9E4] text-[#111814] rounded-2xl p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="flex items-center gap-2 text-[10px] font-extrabold tracking-[0.16em] uppercase text-[#4C612D] mb-3">
              <i className="w-1.5 h-1.5 rounded-full bg-[#617D3A] inline-block" />
              THE GAMEVOICE DISPATCH
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#111814] leading-[1.05]">
              Stay ahead of<br />the conversation<span className="text-[#719A32]">.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#464D48] max-w-md leading-relaxed">
              Thoughtful essays, critical breakdowns, and curated explorations of virtual craft. Delivered weekly without promotional spam.
            </p>
          </div>

          <div className="lg:pl-8">
            {subscribed ? (
              <div className="bg-[#D9DDD3] border border-[#BAC1B2] rounded-xl p-6 flex items-center gap-4 text-[#111814] animate-in fade-in">
                <CheckCircle2 size={24} className="text-[#4C612D] shrink-0" />
                <div>
                  <h4 className="font-bold text-sm">Welcome to the Dispatch.</h4>
                  <p className="text-xs text-[#525B54] mt-0.5">
                    We've saved your address for the next editorial issue.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address for newsletter
                </label>
                <div className="flex flex-col sm:flex-row items-stretch gap-2 bg-[#FAFBF9] border border-[#BAC1B2] rounded-xl p-1.5 focus-within:ring-2 focus-within:ring-[#4C612D] transition-all">
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    placeholder="Enter your email address…"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 bg-transparent text-[#111814] placeholder-[#79827B] text-sm focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#111814] text-[#F5F5F4] hover:bg-[#202722] rounded-lg text-xs font-extrabold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Subscribe</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
                <p className="text-[11px] text-[#636C65]">
                  No marketing bloat. Instant unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-4">
          <Link
            href="/"
            className="wordmark text-2xl font-extrabold tracking-[-1.2px] text-[#F5F5F4] block"
          >
            THE<span className="font-light text-[#A1A1AA]">GAME</span>VOICE
            <b className="text-[#BEF264]">.</b>
          </Link>
          <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-sm leading-relaxed">
            A premium independent publication examining game design, spatial architecture, developer culture, and the extraordinary worlds we get lost in.
          </p>
          <div className="pt-2 flex items-center gap-3">
            <span className="text-[10px] font-mono tracking-widest text-[#BEF264] bg-[#15191F] px-2.5 py-1 rounded border border-[#2B3038]">
              EST. FOR THE CURIOUS
            </span>
            <span className="text-[10px] text-[#A1A1AA]">· ISSUE 2026.10</span>
          </div>
        </div>

        {/* Editorial Categories */}
        <div className="space-y-3">
          <h4 className="text-[10px] font-extrabold tracking-widest uppercase text-[#F5F5F4]">
            EDITORIAL
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/news" className="hover:text-[#BEF264] transition-colors">
                Gaming News
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="hover:text-[#BEF264] transition-colors">
                Game Reviews & Verdicts
              </Link>
            </li>
            <li>
              <Link href="/impressions" className="hover:text-[#BEF264] transition-colors">
                First Impressions
              </Link>
            </li>
            <li>
              <Link href="/features" className="hover:text-[#BEF264] transition-colors">
                Long-Form Features
              </Link>
            </li>
          </ul>
        </div>

        {/* Craft & Industry */}
        <div className="space-y-3">
          <h4 className="text-[10px] font-extrabold tracking-widest uppercase text-[#F5F5F4]">
            CRAFT & CULTURE
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/development" className="hover:text-[#BEF264] transition-colors">
                Game Development
              </Link>
            </li>
            <li>
              <Link href="/interviews" className="hover:text-[#BEF264] transition-colors">
                Developer Interviews
              </Link>
            </li>
            <li>
              <Link href="/documentaries" className="hover:text-[#BEF264] transition-colors">
                Documentaries & Motion
              </Link>
            </li>
            <li>
              <Link href="/search" className="hover:text-[#BEF264] transition-colors">
                Search Archive
              </Link>
            </li>
          </ul>
        </div>

        {/* Reader Utilities */}
        <div className="space-y-3">
          <h4 className="text-[10px] font-extrabold tracking-widest uppercase text-[#F5F5F4]">
            READER TOOLS
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/saved" className="hover:text-[#BEF264] transition-colors">
                Saved Articles Reading List
              </Link>
            </li>
            <li>
              <Link href="/search?q=worldbuilding" className="hover:text-[#BEF264] transition-colors">
                Worldbuilding Archive
              </Link>
            </li>
            <li>
              <span className="text-[#A1A1AA]/60">Editorial Guidelines</span>
            </li>
            <li>
              <span className="text-[#A1A1AA]/60">Masthead & Ethics</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#2B3038] py-6 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-semibold text-[#A1A1AA] tracking-wider uppercase">
        <p>© 2026 THEGAMEVOICE. ALL EDITORIAL CONTENT CURATED FOR THE LOVE OF PLAY.</p>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-[#BEF264]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BEF264] animate-pulse" />
            LIVE EDITORIAL PROTOTYPE
          </span>
          <span className="text-[#F5F5F4]/60">ART DIRECTION BY TGVOICE</span>
        </div>
      </div>
    </footer>
  );
}
