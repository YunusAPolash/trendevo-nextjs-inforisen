import Link from 'next/link';
import { Fragment, type ReactNode } from 'react';
import { resellerApiUrl, signUpUrl } from '@/lib/auth-urls';

export const inlineLinkClassName =
  'font-semibold text-[#8f2acd] underline decoration-[#8f2acd]/35 underline-offset-2 transition-colors hover:text-[#ae4de8] hover:decoration-[#ae4de8] dark:text-[#ae4de8] dark:decoration-[#ae4de8]/40 dark:hover:text-[#cc7aff]';

function resolveLinkHref(href: string): string {
  const normalized = href.startsWith('/') ? href : `/${href}`;

  if (normalized === '/signup') {
    return signUpUrl;
  }

  if (normalized === '/api') {
    return resellerApiUrl;
  }

  return normalized;
}

function InlineLink({ href, label }: { href: string; label: string }) {
  const resolvedHref = resolveLinkHref(href);
  const isExternal = resolvedHref.startsWith('http') || resolvedHref === '#';

  if (isExternal) {
    return (
      <a href={resolvedHref} className={inlineLinkClassName}>
        {label}
      </a>
    );
  }

  return (
    <Link href={resolvedHref} className={inlineLinkClassName}>
      {label}
    </Link>
  );
}

function renderStyledLine(line: string, lineKey: number): ReactNode[] {
  const parts = line.split(/(gt<[^>]+>|lnk<[^>]+>)/);

  return parts.flatMap((part, i) => {
    const gradientMatch = part.match(/gt<(.+)>/);
    if (gradientMatch) {
      return (
        <span key={`${lineKey}-g-${i}`} className="text-gradient">
          {gradientMatch[1]}
        </span>
      );
    }

    const linkMatch = part.match(/lnk<(\/?[^|>]*)\|([^>]+)>/);
    if (linkMatch) {
      const href = linkMatch[1] === '' ? '/' : linkMatch[1];
      return (
        <InlineLink
          key={`${lineKey}-l-${i}`}
          href={href}
          label={linkMatch[2]}
        />
      );
    }

    if (!part) {
      return [];
    }

    return <Fragment key={`${lineKey}-t-${i}`}>{part}</Fragment>;
  });
}

export function renderText(text: string): ReactNode {
  const lines = text.split('\n');

  return lines.flatMap((line, i) => {
    const rendered = renderStyledLine(line, i);

    return i < lines.length - 1
      ? [...rendered, <br key={`br-${i}`} />]
      : rendered;
  });
}
