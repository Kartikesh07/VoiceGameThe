import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
export const metadata: Metadata = { title: "TheGameVoice — Stories beyond the screen", description: "A new perspective on games, the people who make them, and the worlds we get lost in." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${inter.variable} ${space.variable}`}>{children}</body></html>; }
