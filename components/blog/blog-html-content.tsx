'use client';

import { useRef } from 'react';
import { sanitizeBlogHtml } from '@/lib/normalize-rich-text';
import { useBlogHtmlLinks } from '@/lib/use-blog-html-links';

/** Renders GrapesJS canvas HTML only. Editor CSS is injected via BlogEditorStyles. */
const DEFAULT_CONTENT_CLASS = 'blog-canvas-content';

type BlogHtmlContentProps = {
  html: string;
  className?: string;
};

export function BlogHtmlContent({
  html,
  className = DEFAULT_CONTENT_CLASS,
}: BlogHtmlContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sanitizedHtml = sanitizeBlogHtml(html);

  useBlogHtmlLinks(containerRef, sanitizedHtml);

  return (
    <div
      ref={containerRef}
      className={className}
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  );
}
