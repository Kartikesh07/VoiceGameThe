import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Search the Archive",
  description: "Search stories, topics and authors in The Game Voice archive.",
  path: "/search",
  noindex: true,
});

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
