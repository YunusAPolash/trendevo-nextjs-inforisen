import type { JsonLd } from '@/lib/seo/json-ld';

type JsonLdScriptProps = {
  data: JsonLd | JsonLd[];
};

/** Renders one or more JSON-LD graph objects as script tags. */
export default function JsonLdScript({ data }: JsonLdScriptProps) {
  const items = Array.isArray(data) ? data : [data];

  return (
    <>
      {items.map((item, index) => (
        <script
          // Stable enough for static graphs; index only used for multi-graph pages
          key={`${String(item['@type'] ?? 'ld')}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
