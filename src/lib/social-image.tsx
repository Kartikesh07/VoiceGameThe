import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { siteConfig } from "./site-config";

/** Only read existing local raster artwork, never fetch an arbitrary editorial URL. */
async function localArtwork(src?: string): Promise<string | undefined> {
  if (!src?.startsWith("/") || !/\.(png|jpe?g|webp)$/i.test(src)) return undefined;
  const root = path.resolve(process.cwd(), "public");
  const file = path.resolve(root, `.${src}`);
  const relative = path.relative(root, file);
  if (relative.startsWith("..") || path.isAbsolute(relative)) return undefined;
  try {
    const data = await readFile(file);
    const ext = path.extname(src).slice(1).toLowerCase().replace("jpg", "jpeg");
    return `data:image/${ext};base64,${data.toString("base64")}`;
  } catch {
    return undefined;
  }
}

export async function socialImage(title: string, section: string, artwork?: string) {
  const image = await localArtwork(artwork);
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", background: "#0B0D10", color: "#F5F5F4", fontFamily: "sans-serif", position: "relative" }}>
      {image && <img src={image} alt="" width={1200} height={630} style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", opacity: 0.25 }} />}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 64, width: "100%", borderBottom: "12px solid #BEF264" }}>
        <div style={{ display: "flex", fontSize: 30, color: "#BEF264" }}>{siteConfig.name}</div>
        <div style={{ display: "flex", fontSize: title.length > 100 ? 44 : 58, fontWeight: 700, lineHeight: 1.15 }}>{title.length > 180 ? `${title.slice(0, 177)}…` : title}</div>
        <div style={{ display: "flex", fontSize: 24, color: "#D0D2D0" }}>{section}</div>
      </div>
    </div>,
    { width: 1200, height: 630, headers: { "Cache-Control": "public, max-age=3600, s-maxage=86400", "X-Robots-Tag": "noindex" } },
  );
}
