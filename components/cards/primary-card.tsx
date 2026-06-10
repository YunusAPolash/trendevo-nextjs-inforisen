import React from 'react';
import { cn } from '@/lib/utils';

const cardBackgroundClasses = {
  'card-1': "bg-[url('/images/backgrounds/card-bg-1.svg')]",
  'card-2': "bg-[url('/images/backgrounds/card-bg-2.svg')]",
  'card-3': "bg-[url('/images/backgrounds/card-bg-3.svg')]",
  'card-4': "bg-[url('/images/backgrounds/card-bg-4.svg')]",
  'card-5': "bg-[url('/images/backgrounds/card-bg-5.png')]",
  'card-7': "bg-[url('/images/backgrounds/card-bg-7.svg')]",
  'card-9': "bg-[url('/images/backgrounds/card-bg-9.svg')]",
  'card-10': "bg-[url('/images/backgrounds/card-bgg-10.svg')]",
  'card-8': "bg-[url('/images/backgrounds/card-bg-8.svg')]",
  'card-11': "bg-[url('/images/backgrounds/card-bg-11.svg')]",
} as const;

const cardDarkBackgroundClasses = {
  'card-1-dark': "dark:bg-[url('/images/backgrounds/card-bg-1-dark.svg')]",
} as const;

export type CardBgKey = keyof typeof cardBackgroundClasses;
export type CardDarkBgKey = keyof typeof cardDarkBackgroundClasses;

const cardBaseClassName =
  'group/card flex flex-col gap-4 overflow-hidden rounded-xl bg-card py-4 text-sm text-card-foreground ring-1 ring-foreground/10 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl';

export default function PrimaryCard({
  className,
  bg,
  darkBg,
  style,
  ...props
}: React.ComponentProps<'article'> & {
  bg?: CardBgKey;
  darkBg?: CardDarkBgKey;
}) {
  return (
    <article
      data-slot="card"
      className={cn(
        cardBaseClassName,
        'p-6 ring-0 bg-cover bg-center bg-no-repeat',
        bg && cardBackgroundClasses[bg],
        darkBg && cardDarkBackgroundClasses[darkBg],
        className,
      )}
      style={style}
      {...props}
    />
  );
}
