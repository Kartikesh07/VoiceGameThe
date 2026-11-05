
import { VideoCard } from "@/components/video/VideoCard";
import { getStoriesByCategory } from "@/data/stories";
import { Film } from "lucide-react";

export default function DocumentariesPage() {
  const docs = getStoriesByCategory("DOCUMENTARIES");
  const featured = docs[0];
  const others = docs.slice(1);

  return (
    <div className="category-page category-documentaries editorial-wrap py-10 lg:py-16 space-y-12">
      {/* Header */}
      <div>
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#BEF264] flex items-center gap-2 mb-2">
          <Film size={14} className="text-[#BEF264]" />
          CINEMA & MOTION JOURNALISM
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#F5F5F4] tracking-tight">
          Documentaries & Stories in Motion<span className="text-[#BEF264]">.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#A1A1AA] max-w-2xl mt-2 leading-relaxed">
          Explore written documentary concepts about preservation, animation and the people who make games. These previews do not include playable films.
        </p>
      </div>

      {/* Featured Video Player Banner */}
      {featured && (
        <section aria-label="Featured Documentary">
          <VideoCard story={featured} featured />
        </section>
      )}

      {/* Video Gallery Grid */}
      <section aria-label="Documentary Archive" className="space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-[#2B3038]">
          <h2 className="text-2xl font-bold text-[#F5F5F4]">
            Documentary Archive ({docs.length})
          </h2>
          <span className="text-xs text-[#A1A1AA]">
            Written film concepts · no video attached
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {others.map((story) => (
            <VideoCard key={story.id} story={story} />
          ))}
        </div>
      </section>
    </div>
  );
}

