# The Game Voice SEO launch setup

The redesign is a preview. No deployment, Search Console setup or external validation has been performed by this implementation. SEO infrastructure supports discovery; it does not guarantee rankings.

## Deployment configuration

Copy `.env.example` into your local environment configuration or enter the values in the deployment platform. Do not commit private environment files.

- `NEXT_PUBLIC_SITE_URL`: the exact origin for that deployment, such as its assigned HTTPS preview origin or the confirmed official production origin. No path, credentials, query or fragment. No live domain is assumed.
- `SEO_ALLOW_INDEXING`: defaults to false. Set `true` only in the public production deployment after editorial review. Keep staging and preview overrides false, including production-mode staging builds. Vercel previews additionally remain noindex even if this flag is accidentally inherited.

With no URL, development uses `http://localhost:3000`. A production-mode build with no URL stays noindex and omits canonical URLs, absolute social URLs and website JSON-LD; its sitemap is empty. Asking to enable indexing without a public HTTPS origin throws a configuration error rather than silently using localhost. Invalid configured URL syntax also fails early.

`robots.txt` allows crawling so crawlers can read page-level noindex directives. It advertises the sitemap only when indexing is enabled. Non-production HTML has `noindex, follow`; use deployment access controls if a preview needs to be private. Do not disallow search/saved pages in robots.txt: they must remain crawlable to expose noindex.

Rebuild and redeploy after changing environment variables, editorial data or artwork. Next.js can generate metadata and sitemap output during the build; a running deployment does not watch this local data file. A future CMS must supply an appropriate cache invalidation/revalidation policy.

## Editorial data and launch review

Current entries in `src/data/stories.ts` are fictional demonstrations or credited source summaries. **None is marked as an original published article.** They retain their existing URLs and reading experience but receive noindex, no Article/NewsArticle markup, and no sitemap entry. Summary bylines and dates belong to the original linked pieces and are not republished as this site's article metadata. Empty/sample-only categories also remain noindex and outside the sitemap. Once indexing is intentionally enabled, the homepage and categories with published articles become eligible for indexing.

For genuine publication, add a `Story` with `editorialStatus: "published"`, a unique lowercase hyphenated slug, real title/excerpt/body, actual author, actual `publishedAt` (ISO date or timestamp with timezone), tags and descriptive artwork alt text. Only complete stories with valid, non-future dates qualify. Do not simply relabel fictional samples or source summaries. `publishedAt` is the date of this site's publication, not an external article's date. Use `modifiedAt` only for an actual revision, never the deployment time. Slugs must be unique across the source. Scheduled stories require a rebuild at publication time.

Published entries automatically receive metadata, self-canonicals, Article schema (NewsArticle for genuine NEWS reporting), breadcrumbs, social cards and sitemap inclusion. Category data and related-content links derive from the same source. Server-rendered category layouts also provide complete native archive links inside `noscript` so interactive pagination is not required for discovery without JavaScript. The XML sitemap supplies a complete published URL inventory for crawlers. Existing client-side filters, pagination, bookmarks and transitions remain in place.

Supply real raster social artwork through optional `socialImage: { url, width, height, alt }` (public path or absolute HTTPS URL). Use its actual dimensions; 1200×630 is a useful sharing format. Without it, `/articles/[slug]/social` renders a 1200×630 PNG card using the actual title and category. Existing local PNG/JPEG/WebP covers are reused in these cards; SVG covers use a text card for social compatibility. `/social` uses the existing homepage illustration for the publication fallback. These endpoints use Next.js ImageResponse; they need the Node.js runtime and deployment access to the bundled `public` directory. Verify those assets in the deployment package, particularly for custom standalone hosting. Do not block these endpoints or artwork with deployment authentication on the public site.

Article JSON-LD uses real raster editorial artwork when available and does not represent text cards as editorial photographs. It omits unknown images, author names and modification dates. No organization address, logo, social account or review-rating markup is invented. Add verified publication details only after obtaining reliable values. Review-rich-result markup is intentionally absent because current scores describe fictional concepts.

Before enabling indexing, review the homepage's preview notice and sample stories with the editorial team. Existing visible demonstration labels and content have deliberately been preserved. This SEO implementation alone does not turn the prototype into a finished publication.

## Canonical and utility-page policy

All public page canonicals use the configured origin, root-relative route and no trailing slash (except `/`). Query strings and fragments are excluded. Next.js retains its existing default trailing-slash normalization. Articles self-canonicalize; no global homepage canonical is inherited by other routes.

Current category filters, sorts and news pagination use local React state, not distinct server-rendered URL pages. They canonicalize to the category landing page; invented `?page=` URLs are not placed in the sitemap. Search query/category variants canonicalize to `/search` and always remain noindex. `/saved` is personalized and always remains noindex. Both are excluded from the sitemap. If URL-based editorial pagination is later implemented, give distinct useful pages their own metadata, canonicals and crawlable next/previous links rather than reusing this local-state policy.

## Manual checks after deployment

1. Confirm the public origin, HTTPS, redirects and deployment-specific environment values. Inspect returned HTML for the expected title, canonical, robots, JSON-LD and absolute social image URLs. Check a published article, a category, missing slug (404), `/search` and `/saved`. Open `/robots.txt`, `/sitemap.xml`, `/social` and an article's `/social` endpoint; confirm status, PNG content type and dimensions. Preview/staging pages must remain noindex; intentionally launched editorial pages must allow indexing.
2. Verify ownership of the official domain in [Google Search Console](https://search.google.com/search-console), preferably with the supplied DNS verification record for a domain property. No verification token has been supplied or configured here.
3. Submit the production `/sitemap.xml` in Search Console. It must contain only canonical, indexable URLs and genuinely published articles. Review sitemap processing errors and the Page Indexing report.
4. Use [URL Inspection](https://support.google.com/webmasters/answer/9012289) for the homepage, each populated category and representative articles. Compare Google's selected canonical to the declared canonical; run the live inspection and request indexing after corrections. Repeat for important new articles and investigate excluded/noindex/duplicate statuses.
5. Run representative published URLs through [Rich Results Test](https://search.google.com/test/rich-results) and [Schema Markup Validator](https://validator.schema.org/). Confirm author, dates, article section and images match visible content. Missing optional publisher details are preferable to fabricated values.
6. Use [PageSpeed Insights](https://pagespeed.web.dev/) on mobile and desktop after launch. Review LCP, INP and CLS using field data when available; use lab diagnostics to investigate issues. No Lighthouse scores or measured Core Web Vitals improvements are claimed. Current fonts already use next/font with swap; cover aspect ratios reserve space, noncritical artwork is lazy-loaded, and reading-progress scroll work is coalesced per animation frame.
7. Verify Open Graph and X sharing previews on the public deployment. Refresh social caches after artwork or title changes. Confirm that SVG-based stories get the generated raster card and that actual artwork URLs are reachable.
8. In Search Console Performance, monitor branded query variants “The Game Voice”, “TheGameVoice”, “The Game Voice gaming”, “The Game Voice India”, “The Game Voice reviews” and “The Game Voice gaming news”. Compare impressions, clicks, landing pages and country over time. These are monitoring terms, not claims of an India office or local presence. Check important article URLs individually in URL Inspection; a `site:` search alone is not reliable proof of index coverage.

Implementation review was limited to source and diff inspection as requested. No dev server, build, automated tests, browser, Lighthouse audit or deployment was run.
