'use client';

import Image from 'next/image';
import {
  FaqAccordion,
  FaqAccordionContent,
  FaqAccordionItem,
  FaqAccordionTrigger,
} from '@/components/ui/faq-accordion';
import PrimaryButton from '@/components/buttons/primary-button';
import PrimarySection, {
  type SectionBgKey,
  type SectionDarkBgKey,
} from '@/components/sections/primary-section';
import { cn } from '@/lib/utils';

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqSectionProps = {
  label: string;
  title: React.ReactNode;
  subtitle: string;
  items: FaqItem[];
  bg?: SectionBgKey | null;
  darkBg?: SectionDarkBgKey | null;
  className?: string;
  ctaTitle?: string;
  ctaSubtitle?: React.ReactNode;
  ctaButtonLabel?: string;
  ctaButtonHref?: string;
};

function splitFaqColumns(items: FaqItem[]) {
  const midpoint = Math.ceil(items.length / 2);
  return [items.slice(0, midpoint), items.slice(midpoint)];
}

function FaqColumn({ items, columnId }: { items: FaqItem[]; columnId: string }) {
  return (
    <div className="rounded-xl border border-[#f2e9f8] bg-[rgba(143,42,205,0.1)] p-3 sm:p-4 dark:border-[rgba(215,148,255,0)] dark:bg-[rgba(112,23,165,0.11)]">
      <FaqAccordion type="single" collapsible>
        {items.map((item, index) => (
          <FaqAccordionItem key={item.question} value={`${columnId}-${index}`}>
            <FaqAccordionTrigger>{item.question}</FaqAccordionTrigger>
            <FaqAccordionContent>{item.answer}</FaqAccordionContent>
          </FaqAccordionItem>
        ))}
      </FaqAccordion>
    </div>
  );
}

export default function FaqSection({
  label,
  title,
  subtitle,
  items,
  bg = 'section-7',
  darkBg = 'section-21-dark',
  className,
  ctaTitle = 'Still have questions?',
  ctaSubtitle = (
    <>
      Can&apos;t find the answer you&apos;re looking for? Please{' '}
      <span className="text-gradient font-semibold">get in touch</span> with our team.
    </>
  ),
  ctaButtonLabel = 'Get in Touch',
  ctaButtonHref = '#contact',
}: FaqSectionProps) {
  const [leftColumn, rightColumn] = splitFaqColumns(items);

  return (
    <PrimarySection
      bg={bg ?? undefined}
      darkBg={darkBg ?? undefined}
      // backgroundSize="full"
      className={cn('overflow-hidden py-12 sm:py-16 lg:py-20', className)}
    >
      <div className="container relative flex flex-col gap-8 sm:gap-12">
        <Image
          src="/images/faq/faq-decorative-purple-question.webp"
          alt=""
          width={224}
          height={234}
          loading="lazy"
          className="pointer-events-none absolute -left-16 bottom-8 hidden w-40 rotate-[-4deg] opacity-90 lg:block xl:w-52"
        />
        <Image
          src="/images/faq/faq-decorative-orange-question.webp"
          alt=""
          width={225}
          height={225}
          loading="lazy"
          className="pointer-events-none absolute -right-12 top-8 hidden w-40 rotate-[1.5deg] opacity-90 lg:block xl:w-52"
        />

        <div className="relative z-10 mx-auto flex max-w-[996px] flex-col items-center gap-[18px] text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <span className="text-gradient text-lg font-semibold leading-snug sm:text-[22px]">
                {label}
              </span>
              <Image
                src="/images/icons/faq-badge-underline.svg"
                alt=""
                width={44}
                height={8}
                className="h-2 w-11"
              />
            </div>
            <h2 className="text-2xl font-semibold leading-[1.35] tracking-wide text-[#071431] sm:text-4xl md:text-5xl dark:text-[#efedf1]">
              {title}
            </h2>
          </div>
          <p className="max-w-3xl text-sm leading-relaxed text-[#404a60] sm:text-base md:text-lg dark:text-[#dfe0e4]">
            {subtitle}
          </p>
        </div>

        <div className="relative z-10 grid items-start gap-4 sm:gap-6 lg:grid-cols-2">
          <FaqColumn items={leftColumn} columnId="left" />
          <FaqColumn items={rightColumn} columnId="right" />
        </div>

        <div
          className={cn(
            'relative z-10 mx-auto w-full max-w-4xl rounded-[14px] border border-[#d181ff]/60 px-4 py-4 sm:px-7 sm:py-[22px]',
            'bg-[linear-gradient(119.56deg,rgb(255,255,255)_3.42%,rgb(255,243,253)_55.68%,rgb(255,255,255)_107.93%)]',
            'dark:border-[#8a22c8]/60 dark:bg-[#260d35] dark:bg-none',
          )}
        >
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="space-y-1.5">
              <div className="flex items-center gap-1">
                <Image
                  src="/images/faq/faq-cta-question-dice.webp"
                  alt=""
                  width={36}
                  height={34}
                  className="size-9 rotate-[-20deg] object-contain"
                />
                <h3 className="text-gradient text-sm font-medium sm:text-base">{ctaTitle}</h3>
              </div>
              <p className="text-sm leading-relaxed text-[#071431] sm:text-base dark:text-white">
                {ctaSubtitle}
              </p>
            </div>
            <PrimaryButton
              href={ctaButtonHref}
              className="w-full shrink-0 rounded-xl border-0 shadow-[inset_0_2px_8px_rgba(255,255,255,0.12)] sm:w-auto"
            >
              {ctaButtonLabel}
            </PrimaryButton>
          </div>
        </div>
      </div>
    </PrimarySection>
  );
}
