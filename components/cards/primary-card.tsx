import React from 'react';
import { cn } from '@/lib/utils';

const cardBackgroundClasses = {
  'card-1': "bg-[url('/images/backgrounds/card-bg-1.svg')]",
  'card-2': "bg-[url('/images/backgrounds/card-bg-2.svg')]",
  'card-3': "bg-[url('/images/backgrounds/card-bg-3.svg')]",
  'card-4': "bg-[url('/images/backgrounds/card-bg-4.svg')]",
  'card-5': "bg-[url('/images/backgrounds/card-bg-5.svg')]",
  'card-7': "bg-[url('/images/backgrounds/card-bg-7.svg')]",
  'card-9': "bg-[url('/images/backgrounds/card-bg-9.svg')]",
  'card-10': "bg-[url('/images/backgrounds/card-bgg-10.svg')]",
  'card-8': "bg-[url('/images/backgrounds/card-bg-8.svg')]",
  'card-11': "bg-[url('/images/backgrounds/card-bg-11.svg')]",
} as const;

const cardDarkBackgroundClasses = {
  'card-1-dark': "bg-[url('/images/backgrounds/card-bg-1-dark.svg')]",
  'card-2-dark': "bg-[url('/images/backgrounds/card-bg-2-dark.svg')]",
  'card-9-dark': "bg-[url('/images/backgrounds/card-bg-9-dark.svg')]",
  'card-10-dark': "bg-[url('/images/backgrounds/card-bg-10-dark.svg')]",
  'card-8-dark': "bg-[url('/images/backgrounds/card-bg-8-dark.svg')]",
  'card-3-dark': "bg-[url('/images/backgrounds/card-bg-3-dark.svg')]",
  'card-4-dark': "bg-[url('/images/backgrounds/card-bg-4-dark.svg')]",
  'card-5-dark': "bg-[url('/images/backgrounds/card-bg-5-dark.svg')]",
  'card-11-dark': "bg-[url('/images/backgrounds/card-bg-11-dark.svg')]",
  'blog-hero-dark':
    "bg-[url('/images/backgrounds/blog-hero-dark-bg.svg')]",
} as const;

const cardBackgroundLayerClassName =
  'pointer-events-none absolute inset-0 -z-10 rounded-[inherit] bg-cover bg-center bg-no-repeat';

const defaultDarkBackgroundClassName = 'bg-[#190A21]';

export type CardBgKey = keyof typeof cardBackgroundClasses;
export type CardDarkBgKey = keyof typeof cardDarkBackgroundClasses;

const cardBaseClassName =
  'group/card flex flex-col gap-4 overflow-hidden rounded-xl bg-card py-4 text-sm text-card-foreground ring-1 ring-foreground/10 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl';

export default function PrimaryCard({
  className,
  bg,
  darkBg,
  inheritDarkBackground = true,
  style,
  children,
  ...props
}: React.ComponentProps<'article'> & {
  bg?: CardBgKey;
  darkBg?: CardDarkBgKey;
  inheritDarkBackground?: boolean;
}) {
  const hasBackground = Boolean(bg || darkBg);

  return (
    <article
      data-slot="card"
      className={cn(
        cardBaseClassName,
        'p-6 ring-0',
        hasBackground && 'relative isolate bg-transparent',
        className,
      )}
      style={style}
      {...props}
    >
      {bg ? (
        <div
          aria-hidden
          className={cn(
            cardBackgroundLayerClassName,
            cardBackgroundClasses[bg],
            'dark:hidden',
          )}
        />
      ) : null}
      {darkBg ? (
        <div
          aria-hidden
          className={cn(
            cardBackgroundLayerClassName,
            'hidden dark:block',
            cardDarkBackgroundClasses[darkBg],
          )}
        />
      ) : bg && inheritDarkBackground ? (
        <div
          aria-hidden
          className={cn(
            cardBackgroundLayerClassName,
            'hidden dark:block',
            defaultDarkBackgroundClassName,
          )}
        />
      ) : null}
      {children}
    </article>
  );
}
