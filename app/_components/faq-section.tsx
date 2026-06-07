'use client';

import PrimaryCard from '@/components/cards/primary-card';
import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  'What is an SMM panel and how does TrendEvo work?',
  'How fast will my order be delivered?',
  'Are the followers and engagement real?',
  'What payment methods do you accept?',
  'Do you offer reseller or API access?',
  'Is my account information safe?',
  'What happens if an order drops?',
  'How can I contact support?',
  'Can I place bulk orders?',
  'Do you offer refunds?',
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <PrimarySection bg="section-7">
      <div className="container flex flex-col gap-12">
        <SectionHeading
          badge="FAQ"
          title={
            <>
              Frequently Asked <span className="text-gradient">Questions</span>
            </>
          }
          subtitle="Find quick answers about orders, payments, delivery, and support for TrendEvo SMM services."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {faqs.map((question, index) => (
            <PrimaryCard
              key={question}
              bg={index % 2 === 0 ? 'card-1' : 'card-2'}
              className="border border-[#ff7fc1]/20 bg-white/90 p-0"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-medium text-[#071431]">{question}</span>
                <span
                  className={cn(
                    'flex size-10 shrink-0 items-center justify-center rounded-full bg-[#f8f0ff] transition-transform',
                    openIndex === index && 'rotate-45',
                  )}
                >
                  <Plus className="size-5 text-[#8f2acd]" />
                </span>
              </button>
              {openIndex === index ? (
                <p className="border-t border-[#ff7fc1]/10 px-5 pb-5 pt-3 text-sm leading-relaxed text-[#404a60]">
                  TrendEvo provides fast, secure SMM services with transparent pricing,
                  multiple payment options, and 24/7 support to help you grow across all
                  major social platforms.
                </p>
              ) : null}
            </PrimaryCard>
          ))}
        </div>

        <PrimaryCard
          bg="card-1"
          className="mx-auto flex w-full max-w-4xl flex-col items-start justify-between gap-6 border border-[#ff7fc1]/20 bg-white/90 p-6 md:flex-row md:items-center"
        >
          <div>
            <h3 className="text-lg font-semibold text-[#071431]">
              Still have questions?
            </h3>
            <p className="mt-1 text-[#404a60]">
              Can&apos;t find the answer you&apos;re looking for? Please get in touch
              with our team.
            </p>
          </div>
          <Button
            id="contact"
            className="bg-brand-gradient h-[50px] shrink-0 rounded-[10px] border-0 px-6 font-semibold text-white hover:opacity-90"
          >
            Get in Touch
          </Button>
        </PrimaryCard>
      </div>
    </PrimarySection>
  );
}
