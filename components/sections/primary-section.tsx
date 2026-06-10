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
  'section-13': "bg-[url('/images/backgrounds/section-bg-13.svg')]",
  'section-14': "bg-[url('/images/backgrounds/section-bg-14.svg')]",
  'section-16': "bg-[url('/images/backgrounds/section-bg-16.png')]",
  'section-17': "bg-[url('/images/backgrounds/section-bg-17.svg')]",
  'section-12': "bg-[url('/images/backgrounds/section-bg-12.svg')]",
} as const;

const sectionDarkBackgroundClasses = {
  'section-1-dark': "bg-[url('/images/backgrounds/section-bg-1-dark.svg')]",
  'section-2-dark': "bg-[url('/images/backgrounds/section-bg-2-dark.svg')]",
  'section-10-dark':
    "bg-[url('/images/backgrounds/section-bg-10-dark.svg')]",
  'section-4-dark': "bg-[url('/images/backgrounds/section-bg-4-dark.svg')]",
  'section-7-dark': "bg-[url('/images/backgrounds/section-bg-7-dark.svg')]",
  'section-6-dark': "bg-[url('/images/backgrounds/section-bg-6-dark.svg')]",
  'section-15-dark': "bg-[url('/images/backgrounds/section-bg-15-dark.svg')]",
  'section-13-dark': "bg-[url('/images/backgrounds/section-bg-13-dark.svg')]",
  'section-12-dark': "bg-[url('/images/backgrounds/section-bgg-12-dark.svg')]",
  'section-footer-dark':
    "bg-[url('/images/backgrounds/section-bg-footer.png')]",
} as const;

const sectionBackgroundLayerClassName =
  'absolute inset-0 bg-cover bg-top bg-no-repeat';

const defaultDarkBackgroundClassName = 'bg-[#190A21]';

export type SectionBgKey = keyof typeof sectionBackgroundClasses;
export type SectionDarkBgKey = keyof typeof sectionDarkBackgroundClasses;

export default function PrimarySection({
  className,
  bg,
  darkBg,
  style,
  children,
  ...props
}: React.ComponentPropsWithoutRef<'section'> & {
  bg?: SectionBgKey;
  darkBg?: SectionDarkBgKey;
}) {
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
            sectionBackgroundLayerClassName,
            sectionBackgroundClasses[bg],
            'dark:hidden',
          )}
        />
      ) : null}
      {darkBg ? (
        <div
          aria-hidden
          className={cn(
            sectionBackgroundLayerClassName,
            'hidden dark:block',
            sectionDarkBackgroundClasses[darkBg],
          )}
        />
      ) : bg ? (
        <div
          aria-hidden
          className={cn(
            sectionBackgroundLayerClassName,
            'hidden dark:block',
            defaultDarkBackgroundClassName,
          )}
        />
      ) : null}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
