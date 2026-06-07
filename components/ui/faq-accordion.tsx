'use client';

import {
  Accordion,
  AccordionItem,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import { Accordion as AccordionPrimitive } from 'radix-ui';

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
        className,
      )}
      {...props}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-6 -top-60 h-[482px] w-[724px] bg-[url('/images/faq/faq-item-fabric-pattern.webp')] bg-cover bg-center opacity-50"
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
          'group/faq-trigger relative z-10 flex w-full flex-1 items-center gap-4 px-5 py-[15px] text-left outline-none hover:no-underline disabled:pointer-events-none disabled:opacity-50',
          className,
        )}
        {...props}
      >
        <span className="flex-1 text-lg font-semibold leading-snug text-[#232323]">
          {children}
        </span>
        <span className="bg-brand-gradient flex size-10 shrink-0 items-center justify-center rounded-full transition-transform duration-200 group-data-[state=open]/faq-trigger:rotate-45">
          <Plus className="size-[25px] text-white" strokeWidth={2.5} />
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
        'relative z-10 overflow-hidden px-5 pb-5 text-base leading-relaxed text-[#404a60] data-[state=closed]:hidden',
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
