'use client';

import { useEffect, type RefObject } from 'react';
import { useRouter } from 'next/navigation';

export function useBlogHtmlLinks(
  containerRef: RefObject<HTMLElement | null>,
  html: string,
) {
  const router = useRouter();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest?.(
        'a[data-next-link]',
      ) as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      if (
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        event.button !== 0
      ) {
        return;
      }

      event.preventDefault();
      router.push(href);
    };

    container.addEventListener('click', handleClick);
    return () => container.removeEventListener('click', handleClick);
  }, [containerRef, router, html]);
}
