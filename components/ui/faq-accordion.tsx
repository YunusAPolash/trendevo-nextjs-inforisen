'use client';

import Image from 'next/image';

import {
  Accordion,
  AccordionItem,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import { Accordion as AccordionPrimitive } from 'radix-ui';

const faqItemDarkPlusGradient =
  'dark:bg-[linear-gradient(93.46deg,rgb(209,129,255)_2.85%,rgb(255,99,190)_90.53%)]';

function FaqAccordion({
  className,
  ...props
}: React.ComponentProps<typeof Accordion>) {
  return (
    <Accordion
      className={cn('flex flex-col gap-3.5 rounded-none border-0', className)}
      {...props}
    />
  );
}

function FaqAccordionItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionItem>) {
  return (
    <AccordionItem
      className={cn(
        'relative isolate overflow-hidden rounded-[14px] border-0 bg-white shadow-[0_0_12px_rgba(185,185,185,0.25)] not-last:border-b-0 data-open:bg-white',
        'dark:border-2 dark:border-[rgba(143,42,205,0)] dark:bg-[rgba(18,4,26,0.05)] dark:px-5 dark:py-[15px] dark:shadow-none dark:data-open:bg-[rgba(18,4,26,0.05)]',
        className,
      )}
      {...props}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-6 -top-60 h-[482px] w-[724px] bg-[url('/images/faq/faq-item-fabric-pattern-decoration.webp')] bg-cover bg-center opacity-50 dark:left-[-26px] dark:top-[-243px] dark:opacity-10"
      />
      {children}
    </AccordionItem>
  );
}

function FaqAccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          'group/faq-trigger relative z-10 flex w-full flex-1 items-center justify-between gap-3 px-4 py-3 text-left outline-none hover:no-underline disabled:pointer-events-none disabled:opacity-50 sm:gap-4 sm:px-5 sm:py-[15px] dark:gap-0 dark:px-0 dark:py-0',
          className,
        )}
        {...props}
      >
        <span className="flex-1 text-base font-semibold leading-snug text-[#232323] sm:text-lg sm:leading-normal dark:text-white">
          {children}
        </span>
        <span
          className={cn(
            'bg-brand-gradient flex size-8 shrink-0 items-center justify-center rounded-full p-1.5 transition-transform duration-200 group-data-[state=open]/faq-trigger:rotate-45 sm:size-10 dark:size-10',
            faqItemDarkPlusGradient,
          )}
        >
          <Plus
            className="size-5 text-white dark:hidden sm:size-[25px]"
            strokeWidth={2.5}
          />
          <Image
            src="/images/icons/faq-plus-icon.svg"
            alt=""
            width={25}
            height={25}
            className="hidden size-[25px] dark:block"
            aria-hidden
          />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function FaqAccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={cn(
        'relative z-10 overflow-hidden px-4 pb-4 pt-2.5 text-sm leading-relaxed text-[#404a60] data-closed:hidden sm:px-5 sm:pb-5 sm:text-base dark:px-0 dark:pb-0 dark:pt-2.5 dark:text-[#dfe0e4]',
        className,
      )}
      {...props}
    >
      {children}
    </AccordionPrimitive.Content>
  );
}

export {
  FaqAccordion,
  FaqAccordionContent,
  FaqAccordionItem,
  FaqAccordionTrigger,
};
