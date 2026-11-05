import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Saved Reading List",
  description: "Your personal reading list at The Game Voice.",
  path: "/saved",
  noindex: true,
});

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
