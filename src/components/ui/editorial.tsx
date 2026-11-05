import type { Story } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export { BookmarkButton,ReadingProgressBar,ShareButton,VerdictCard } from "./editorial-controls";

export function Artwork({
  story,
  priority = false,
  className = "",
  aspectRatio = "aspect-[16/10]",
  sizes,
}: {
  story: Pick<Story, "coverImage" | "alt" | "title">;
  priority?: boolean;
  className?: string;
  aspectRatio?: string;
  sizes?: string;
}) {
  return (
    <div className={`art ${className.split(" ").includes("absolute") ? "" : "relative"} overflow-hidden bg-[#15191F] ${aspectRatio} ${className}`}>
      <Image
        src={story.coverImage}
        alt={story.alt || story.title}
        fill
        priority={priority}
        sizes={sizes || (priority ? "(max-width: 1023px) 100vw, 75vw" : "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw")}
        className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.035] group-focus-within:scale-[1.035]"
      />
    </div>
  );
}

export function Label({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`label inline-flex items-center text-[10px] font-bold tracking-[0.14em] uppercase text-[#BEF264] ${className}`}
    >
      {children}
    </span>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  linkHref,
  linkText,
  className = "",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  linkHref?: string;
  linkText?: string;
  className?: string;
}) {
  return (
    <div
      className={`section-heading flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#2B3038] ${className}`}
    >
      <div>
        <span className="eyebrow flex items-center gap-2 text-[10px] font-extrabold tracking-[0.14em] uppercase text-[#BEF264] mb-2">
          <i className="w-1.5 h-1.5 rounded-full bg-[#BEF264] inline-block" />
          {eyebrow}
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F5F4]">
          {title}
          <span className="text-[#BEF264]">.</span>
        </h2>
      </div>
      {(description || linkHref) && (
        <div className="flex flex-col md:items-end gap-2 text-left md:text-right max-w-sm">
          {description && <p className="text-xs md:text-sm text-[#A1A1AA] leading-relaxed">{description}</p>}
          {linkHref && linkText && (
            <Link
              href={linkHref}
              className="text-[11px] font-bold tracking-wider text-[#BEF264] hover:underline flex items-center gap-1 group"
            >
              {linkText}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
