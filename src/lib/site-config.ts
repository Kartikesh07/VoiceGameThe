function configuredSiteUrl(): URL | undefined {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!value) return process.env.NODE_ENV === "development" ? new URL("http://localhost:3000") : undefined;

  const url = new URL(value);
  if (!["http:", "https:"].includes(url.protocol) || url.username || url.password ||
      url.pathname !== "/" || url.search || url.hash) {
    throw new Error("NEXT_PUBLIC_SITE_URL must be an HTTP(S) origin without credentials, a path, query or fragment.");
  }
  return url;
}

const siteUrl = configuredSiteUrl();
const indexingRequested = process.env.SEO_ALLOW_INDEXING === "true";
const localHost = siteUrl && /^(localhost|.*\.localhost|127(?:\.\d+){3}|\[::1\]|0\.0\.0\.0)$/.test(siteUrl.hostname);

if (indexingRequested && (!siteUrl || siteUrl.protocol !== "https:" || localHost)) {
  throw new Error("Indexing requires NEXT_PUBLIC_SITE_URL to be the public HTTPS production origin.");
}

export const siteConfig = {
  name: "The Game Voice",
  alternateName: "TheGameVoice",
  title: "The Game Voice | Gaming News, Reviews & Indie Games",
  description: "Explore gaming news, independent game reviews, indie game discoveries, developer interviews, and gaming industry insights at The Game Voice.",
  url: siteUrl,
  // Opt in only in the production deployment's environment, never shared preview settings.
  allowIndexing: indexingRequested && process.env.NODE_ENV === "production" &&
    (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production"),
} as const;

/** Resolve site paths only; queries, fragments and trailing slashes are never canonical. */
export function absoluteUrl(path: string): string | undefined {
  if (!siteConfig.url) return undefined;
  if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) {
    throw new Error("Expected a root-relative site path.");
  }
  const pathname = path.split(/[?#]/, 1)[0].replace(/\/+$/, "") || "/";
  const url = new URL(pathname, siteConfig.url);
  if (url.origin !== siteConfig.url.origin) throw new Error("Expected a same-origin site path.");
  return url.href;
}
