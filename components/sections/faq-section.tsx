'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  FaqAccordion,
  FaqAccordionContent,
  FaqAccordionItem,
  FaqAccordionTrigger,
} from '@/components/ui/faq-accordion';
import PrimarySection, { type SectionBgKey } from '@/components/sections/primary-section';
import { Button } from '@/components/ui/button';
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
  bg?: SectionBgKey;
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
    <div className="rounded-xl border border-[#f2e9f8] bg-[rgba(143,42,205,0.1)] p-4">
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
    <PrimarySection bg={bg} className={cn('overflow-hidden py-16 lg:py-20', className)}>
      <div className="container relative flex flex-col gap-12">
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
              <span className="text-gradient text-[22px] font-semibold leading-snug">
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
            <h2 className="text-4xl font-semibold leading-[1.35] tracking-wide text-[#071431] md:text-5xl">
              {title}
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-relaxed text-[#404a60]">{subtitle}</p>
        </div>

        <div className="relative z-10 grid gap-6 lg:grid-cols-2">
          <FaqColumn items={leftColumn} columnId="left" />
          <FaqColumn items={rightColumn} columnId="right" />
        </div>

        <div
          className="relative z-10 mx-auto w-full max-w-4xl rounded-[14px] border border-[#d181ff]/60 px-7 py-[22px]"
          style={{
            backgroundImage:
              'linear-gradient(119.56deg, rgb(255, 255, 255) 3.42%, rgb(255, 243, 253) 55.68%, rgb(255, 255, 255) 107.93%)',
          }}
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
                <h3 className="text-gradient text-base font-medium">{ctaTitle}</h3>
              </div>
              <p className="text-base leading-relaxed text-[#071431]">{ctaSubtitle}</p>
            </div>
            <Button
              asChild
              className="bg-brand-gradient h-[50px] shrink-0 rounded-xl border-0 px-5 text-base font-semibold text-white shadow-[inset_0_2px_8px_rgba(255,255,255,0.12)] hover:opacity-90"
            >
              <Link href={ctaButtonHref}>{ctaButtonLabel}</Link>
            </Button>
          </div>
        </div>
      </div>
    </PrimarySection>
  );
}
