import Link from "next/link";

export default function Footer() {
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
              Thoughtful essays, critical breakdowns, and curated explorations of virtual craft. A space for a future editorial newsletter.
            </p>
          </div>

          <div className="lg:pl-8">
            <div className="border-t border-[#BAC1B2] pt-6">
              <span className="text-xs uppercase tracking-widest font-bold text-[#465336]">Newsletter · not connected</span>
              <p className="text-sm text-[#464D48] mt-3 mb-5">Subscriptions are unavailable in this prototype. Explore the archive or save a story for your next visit.</p>
              <Link href="/features" className="inline-flex min-h-11 items-center px-5 bg-[#111814] text-[#F5F5F4] text-sm font-bold">Explore the essays →</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-4">
          <Link
            href="/"
            aria-label="The Game Voice home"
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
            <span className="text-[10px] text-[#A1A1AA]">· DESIGN PREVIEW</span>
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
        <p>© 2026 THEGAMEVOICE. EDITORIAL DESIGN PROTOTYPE.</p>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-[#BEF264]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BEF264]" />
            LOCAL EDITORIAL PROTOTYPE
          </span>
          <span className="text-[#F5F5F4]/60">ORIGINAL ILLUSTRATIVE ARTWORK</span>
        </div>
      </div>
    </footer>
  );
}
