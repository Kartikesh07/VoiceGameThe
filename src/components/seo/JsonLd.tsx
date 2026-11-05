import { serializeJsonLd, type SchemaObject } from "@/lib/structured-data";

export function JsonLd({ data }: { data: SchemaObject[] }) {
  if (!data.length) return null;
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }} />;
}
