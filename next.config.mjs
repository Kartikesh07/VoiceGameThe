/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingIncludes: {
    "/social": ["./public/worlds.png"],
    "/articles/*/social": ["./public/**/*.png", "./public/**/*.jpg", "./public/**/*.jpeg", "./public/**/*.webp"],
  },
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;

