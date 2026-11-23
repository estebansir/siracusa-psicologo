interface SchemaProps {
  schema: Record<string, unknown>;
}

// Renders JSON-LD structured data. `<` is escaped as recommended by the Next.js
// JSON-LD guide, so no string in the data can close the script tag.
export default function Schema({ schema }: SchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
    />
  );
}
