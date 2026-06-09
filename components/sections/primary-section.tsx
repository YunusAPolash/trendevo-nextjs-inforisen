import React from 'react';
import { cn } from '@/lib/utils';

const sectionBackgroundClasses = {
  'section-1': "bg-[url('/images/backgrounds/section-bg-1.svg')]",
  'section-2': "bg-[url('/images/backgrounds/section-bg-2.svg')]",
  'section-3': "bg-[url('/images/backgrounds/section-bg-3.svg')]",
  'section-4': "bg-[url('/images/backgrounds/section-bg-4.svg')]",
  'section-5': "bg-[url('/images/backgrounds/section-bg-5.svg')]",
  'section-6': "bg-[url('/images/backgrounds/section-bg-6.svg')]",
  'section-7': "bg-[url('/images/backgrounds/section-bg-7.svg')]",
  'section-8': "bg-[url('/images/backgrounds/section-bg-8.svg')]",
  'section-9': "bg-[url('/images/backgrounds/section-bg-9.svg')]",
  'section-10': "bg-[url('/images/backgrounds/section-bg-10.svg')]",
  'section-15': "bg-[url('/images/backgrounds/section-bg-15.svg')]",
  'section-11': "bg-[url('/images/backgrounds/section-bg-11.svg')]",
  'section-12': "bg-[url('/images/backgrounds/section-bg-12.svg')]",
} as const;

export type SectionBgKey = keyof typeof sectionBackgroundClasses;

export default function PrimarySection({
  className,
  bg,
  style,
  children,
  ...props
}: React.ComponentPropsWithoutRef<'section'> & { bg?: SectionBgKey }) {
  return (
    <section
      className={cn('relative isolate px-4 ', className)}
      style={style}
      {...props}
    >
      {bg ? (
        <div
          aria-hidden
          className={cn(
            'absolute inset-0 bg-cover bg-center bg-no-repeat',
            sectionBackgroundClasses[bg],
          )}
        />
      ) : null}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
