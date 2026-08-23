'use client';

import { useRef } from 'react';
import { normalizeRichTextHtml } from '@/lib/normalize-rich-text';
import { useBlogHtmlLinks } from '@/lib/use-blog-html-links';
import 'quill/dist/quill.snow.css';
import '@/styles/blog-rich-content.css';

type BlogRichTextContentProps = {
  html: string;
};

/** Renders Quill/richtext HTML with light + dark .blog-rich-content styles. */
export function BlogRichTextContent({ html }: BlogRichTextContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const normalizedHtml = normalizeRichTextHtml(html);

  useBlogHtmlLinks(containerRef, normalizedHtml);

  return (
    <div
      ref={containerRef}
      className="ql-snow border-0 bg-transparent text-[#313131] dark:text-white"
    >
      <div
        className="ql-editor blog-rich-content max-w-none min-h-0! overflow-visible! border-0! bg-transparent! p-0!"
        dangerouslySetInnerHTML={{ __html: normalizedHtml }}
      />
    </div>
  );
}
