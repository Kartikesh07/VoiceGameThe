export type Category =
  | "NEWS"
  | "REVIEWS"
  | "IMPRESSIONS"
  | "FEATURES"
  | "DEVELOPMENT"
  | "INTERVIEWS"
  | "DOCUMENTARIES";

export interface ReviewMetadata {
  score: number;
  verdict: string;
  gameTitle: string;
  developer: string;
  publisher?: string;
  platform: string[];
  releaseDate: string;
  pros: string[];
  cons: string[];
  playtime?: string;
  summary: string;
}

export interface InterviewMetadata {
  interviewee: string;
  role: string;
  studio: string;
  location?: string;
  pullQuote?: string;
}

export interface DocumentaryMetadata {
  duration: string;
  director?: string;
  productionYear: string;
  videoUrl?: string;
  chapters?: { time: string; title: string }[];
}

export interface Author {
  name: string;
  role: string;
  avatar?: string;
}

export interface ArticleSubsection {
  heading: string;
  paragraphs: string[];
  image?: string;
  imageCaption?: string;
}

export interface ArticleContent {
  lead?: string;
  paragraphs: string[];
  pullQuote?: {
    quote: string;
    attribution?: string;
  };
  subsections?: ArticleSubsection[];
}

export interface Story {
  editorialStatus: "demonstration" | "source-summary";
  source?: { url: string; publication: string; originalTitle: string };
  artworkCredit: string;
  id: string;
  slug: string;
  category: Category;
  title: string;
  subtitle?: string;
  excerpt: string;
  coverImage: string;
  alt: string;
  author: Author;
  publishedAt: string;
  readTime: string;
  featured?: boolean;
  trending?: boolean;
  tags: string[];
  review?: ReviewMetadata;
  interview?: InterviewMetadata;
  documentary?: DocumentaryMetadata;
  content: ArticleContent;
}
