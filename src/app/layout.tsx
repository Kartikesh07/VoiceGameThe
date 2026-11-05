import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { BookmarkProvider } from "@/context/BookmarkContext";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | TheGameVoice",
    default: "TheGameVoice — Stories Beyond the Screen",
  },
  description:
    "A premium digital publication with independent perspectives on games, their creators, and the virtual worlds we get lost in.",
  robots: { index: false, follow: false },
  keywords: [
    "Gaming Journalism",
    "Game Reviews",
    "Video Game Features",
    "Game Development",
    "Indie Games",
    "Interviews",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${space.variable} min-h-screen bg-[#0B0D10] text-[#F5F5F4] font-sans antialiased selection:bg-[#BEF264] selection:text-[#0B0D10]`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-[#BEF264] text-[#0B0D10] font-bold px-4 py-2 rounded text-xs tracking-wider uppercase focus:outline-none focus:ring-2 focus:ring-[#BEF264] focus:ring-offset-2"
        >
          Skip to main content
        </a>
        <BookmarkProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main id="main-content" className="flex-1">
              <div className="prototype-note editorial-wrap"><span>Design preview</span> Published reading notes are credited. Other stories, scores and people are fictional samples.</div>
              {children}
            </main>
            <Footer />
          </div>
        </BookmarkProvider>
      </body>
    </html>
  );
}
