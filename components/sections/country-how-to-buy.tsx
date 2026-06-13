'use client';

import Image from 'next/image';
import { useState } from 'react';

import PrimaryButton from '@/components/buttons/primary-button';
import PrimarySection from '@/components/sections/primary-section';
import { signUpUrl } from '@/lib/auth-urls';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from '@/components/ui/accordion';
import SectionHeading from '@/components/ui/section-heading';
import { cn } from '@/lib/utils';
import { Accordion as AccordionPrimitive } from 'radix-ui';

import {
  getCountryHowToBuyContent,
  type CountryHowToBuySlug,
  type CountryHowToBuyStep,
} from '@/components/countryPanel/country-how-to-buy-content';

function HowToBuyAccordionTrigger({
  title,
  activeStepIcon,
  inactiveStepIcon,
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
  title: string;
  activeStepIcon: string;
  inactiveStepIcon: string;
}) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          'group/how-to-buy-trigger flex w-full flex-1 items-start gap-5 p-6 text-left outline-none transition-all hover:no-underline disabled:pointer-events-none disabled:opacity-50 sm:gap-[26px]',
          className,
        )}
        {...props}
      >
        <span className="min-w-0 flex-1 text-lg font-semibold leading-normal text-[#313131] group-data-[state=open]/how-to-buy-trigger:text-[#f7f2f2] dark:text-white sm:text-xl">
          {title}
        </span>

        <Image
          src={inactiveStepIcon}
          alt=""
          aria-hidden
          width={28}
          height={28}
          className="size-7 shrink-0 group-data-[state=open]/how-to-buy-trigger:hidden"
          unoptimized
        />
        <Image
          src={activeStepIcon}
          alt=""
          aria-hidden
          width={28}
          height={28}
          className="hidden size-7 shrink-0 group-data-[state=open]/how-to-buy-trigger:block"
          unoptimized
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function HowToBuyStepsAccordion({
  steps,
  activeStepIcon,
  inactiveStepIcon,
}: {
  steps: CountryHowToBuyStep[];
  activeStepIcon: string;
  inactiveStepIcon: string;
}) {
  const [activeValue, setActiveValue] = useState('step-0');

  const activeIndex = activeValue.startsWith('step-')
    ? Number(activeValue.replace('step-', ''))
    : -1;

  return (
    <Accordion
      type="single"
      collapsible
      value={activeValue}
      onValueChange={setActiveValue}
      className="w-full max-w-[685px] gap-0 overflow-visible rounded-none border-0"
    >
      {steps.map((step, index) => {
        const isOpen = activeValue === `step-${index}`;
        const isAboveOpenItem = activeIndex >= 0 && index === activeIndex - 1;
        const showDashedBorder = !isOpen && !isAboveOpenItem;

        return (
          <AccordionItem
            key={step.title}
            value={`step-${index}`}
            className={cn(
              'overflow-hidden transition-all',
              isOpen &&
                'rounded-2xl border-[1.5px] border-[#cc7aff] [background-image:linear-gradient(120.55deg,rgb(209,129,255)_2.89%,rgb(237,99,255)_94.79%)] dark:[background-image:linear-gradient(96.49deg,#B04AEA_2.89%,#DB50ED_94.79%)]',
              showDashedBorder && '!border-b !border-dashed !border-[#c1c4cc] dark:!border-white/25',
              !isOpen && !showDashedBorder && '!border-b-0',
            )}
          >
            <HowToBuyAccordionTrigger
              title={step.title}
              activeStepIcon={activeStepIcon}
              inactiveStepIcon={inactiveStepIcon}
            />
            {step.description ? (
              <AccordionContent className="px-3 pb-6 pt-0 text-sm font-medium leading-normal text-[#f7f2f2] data-closed:hidden">
                {step.description}
              </AccordionContent>
            ) : null}
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

type CountryHowToBuyProps = {
  slug: CountryHowToBuySlug;
};

export default function CountryHowToBuy({ slug }: CountryHowToBuyProps) {
  const {
    badge,
    title,
    subtitle,
    buttonLabel,
    steps,
    underlineSrc,
    underlineWidth,
    titleClassName,
    subtitleClassName,
    sectionBg,
    sectionClassName,
    activeStepIcon,
    inactiveStepIcon,
  } = getCountryHowToBuyContent(slug);

  return (
    <PrimarySection
      bg="section-16"
      darkBg="section-14-dark"
      backgroundSize="full"
      className={sectionClassName}
    >
      <div className="container relative flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-8 xl:gap-12">
        <div className="flex w-full max-w-[677px] flex-col gap-6">
          <SectionHeading
            badge={badge}
            title={title}
            subtitle={subtitle}
            align="left"
            underlineSrc={underlineSrc}
            underlineWidth={underlineWidth}
            badgeClassName="dark:bg-none dark:bg-clip-border dark:text-white"
            titleClassName={cn(titleClassName, 'dark:text-white')}
            subtitleClassName={cn(subtitleClassName, 'dark:text-[#c1c4cc]')}
          />

          <PrimaryButton
            href={signUpUrl}
            showArrow
            className="w-fit border-[1.5px] border-[#cc7aff] pl-3.5 pr-3"
          >
            {buttonLabel}
          </PrimaryButton>
        </div>

        <HowToBuyStepsAccordion
          key={slug}
          steps={steps}
          activeStepIcon={activeStepIcon}
          inactiveStepIcon={inactiveStepIcon}
        />
      </div>
    </PrimarySection>
  );
}
