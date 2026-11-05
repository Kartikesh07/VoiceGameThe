import { socialImage } from "@/lib/social-image";

export const runtime = "nodejs";

export function GET() {
  return socialImage("Gaming News, Reviews & Indie Games", "Independent perspectives on games and their creators", "/worlds.png");
}
