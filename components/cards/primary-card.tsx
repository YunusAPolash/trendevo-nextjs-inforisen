import React from 'react';
import { cn } from '@/lib/utils';

const cardBackgroundClasses = {
  'card-1': "bg-[url('/images/backgrounds/card-bg-1.svg')]",
  'card-2': "bg-[url('/images/backgrounds/card-bg-2.svg')]",
  'card-3': "bg-[url('/images/backgrounds/card-bg-3.svg')]",
} as const;

export type CardBgKey = keyof typeof cardBackgroundClasses;

const cardBaseClassName =
  'group/card flex flex-col gap-4 overflow-hidden rounded-xl bg-card py-4 text-sm text-card-foreground ring-1 ring-foreground/10 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl';

export default function PrimaryCard({
  className,
  bg,
  style,
  ...props
}: React.ComponentProps<'article'> & { bg?: CardBgKey }) {
  return (
    <article
      data-slot="card"
      className={cn(
        cardBaseClassName,
        'p-6 ring-0 bg-cover bg-center bg-no-repeat',
        bg && cardBackgroundClasses[bg],
        className,
      )}
      style={style}
      {...props}
    />
  );
}
