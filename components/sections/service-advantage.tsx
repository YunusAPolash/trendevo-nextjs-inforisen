import Image from 'next/image';

import PrimaryCard from '@/components/cards/primary-card';
import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import { cn } from '@/lib/utils';

import {
  getServiceAdvantageContent,
  type ServiceAdvantageItem,
  type ServiceAdvantageSlug,
} from '../serviceSmmPanel/service-advantage-content';

function StepBadge({
  step,
  compact = false,
  className,
}: {
  step: string;
  compact?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-full bg-[rgba(234,230,255,0.16)]',
        compact ? 'size-14 p-1.5' : 'w-[107px] p-2.5',
        className,
      )}
    >
      <div
        className={cn(
          'bg-brand-gradient relative flex items-center justify-center rounded-full border-2 border-dashed border-white shadow-[inset_0px_2px_6px_0px_rgba(255,255,255,0.1)]',
          compact ? 'size-11' : 'size-[85px] p-5',
        )}
      >
        <span
          className={cn(
            'font-medium leading-none text-white',
            compact ? 'text-lg' : 'text-[32px]',
          )}
        >
          {step}
        </span>
      </div>
    </div>
  );
}

function AdvantageTimeline({ steps }: { steps: string[] }) {
  return (
    <div className="relative flex w-14 shrink-0 self-stretch sm:w-20 lg:w-[107px]">
      <div
        aria-hidden
        className="bg-brand-gradient absolute left-1/2 top-10 bottom-10 w-1 -translate-x-1/2 rounded-full lg:top-[80px] lg:bottom-[80px] lg:w-2.5"
      />
      <div className="relative flex w-full flex-col justify-between py-2 lg:py-0">
        {steps.map((step) => (
          <div key={step} className="flex justify-center lg:block">
            <StepBadge step={step} compact className="lg:hidden" />
            <StepBadge step={step} className="hidden lg:flex" />
          </div>
        ))}
      </div>
    </div>
  );
}

function AdvantageCard({
  title,
  description,
  icon,
  className,
}: Omit<ServiceAdvantageItem, 'step'> & { className?: string }) {
  return (
    <PrimaryCard
      bg="card-3"
      className={cn(
        'relative min-h-[232px] gap-0 overflow-hidden rounded-2xl border border-[#e7abff]/70 p-0 px-4 py-3.5 ring-0',
        className,
      )}
    >
      <div className="relative z-10 flex flex-col gap-[18px]">
        <div className="relative flex size-[77px] shrink-0 items-center justify-center">
          <Image
            src="/images/why-choose-us/hex-icon.svg"
            alt=""
            aria-hidden
            width={77}
            height={77}
            className="absolute inset-0 size-[77px]"
          />
          <Image
            src={icon}
            alt=""
            aria-hidden
            width={54}
            height={54}
            quality={100}
            className="relative z-10 size-[54px] object-contain"
          />
        </div>

        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-1.5">
            <Image
              src="/images/why-choose-us/title-bullet.svg"
              alt=""
              aria-hidden
              width={12}
              height={12}
              className="size-3 shrink-0"
            />
            <h3 className="text-lg font-semibold leading-none text-[#343e56] sm:text-[22px]">
              {title}
            </h3>
          </div>
          <p className="text-base leading-normal text-[#313131]">{description}</p>
        </div>
      </div>
    </PrimaryCard>
  );
}

function AdvantageColumn({ advantages }: { advantages: ServiceAdvantageItem[] }) {
  return (
    <div className="flex w-full min-w-0 flex-col gap-7 lg:max-w-[580px]">
      {advantages.map(({ step, ...advantage }) => (
        <AdvantageCard key={step} {...advantage} />
      ))}
    </div>
  );
}

type ServiceAdvantageProps = {
  slug: ServiceAdvantageSlug;
};

export default function ServiceAdvantage({ slug }: ServiceAdvantageProps) {
  const {
    badge,
    title,
    subtitle,
    leftAdvantages,
    rightAdvantages,
    titleClassName,
    subtitleClassName,
  } = getServiceAdvantageContent(slug);

  return (
    <PrimarySection bg="section-4" className="relative overflow-hidden py-16 sm:py-20">
      <Image
        src="/images/service-smm-panel/decorative-wave-top-left.png"
        alt=""
        aria-hidden
        width={1651}
        height={932}
        className="pointer-events-none absolute -left-[30%] -top-32 hidden h-auto w-[min(120vw,1651px)] rotate-[1.3deg] opacity-90 lg:block"
      />
      <Image
        src="/images/service-smm-panel/decorative-wave-bottom-right.png"
        alt=""
        aria-hidden
        width={1651}
        height={932}
        className="pointer-events-none absolute -bottom-32 -right-[25%] hidden h-auto w-[min(120vw,1651px)] -rotate-[178.7deg] opacity-90 lg:block"
      />

      <div className="container relative flex flex-col gap-10 sm:gap-12 lg:gap-16">
        <SectionHeading
          badge={badge}
          title={title}
          subtitle={subtitle}
          titleClassName={titleClassName}
          subtitleClassName={subtitleClassName}
        />

        <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-6">
          <div className="flex w-full min-w-0 flex-row items-stretch gap-3 sm:gap-5">
            <AdvantageTimeline steps={leftAdvantages.map((item) => item.step)} />
            <AdvantageColumn advantages={leftAdvantages} />
          </div>

          <div className="flex w-full min-w-0 flex-row items-stretch gap-3 sm:gap-5">
            <AdvantageTimeline steps={rightAdvantages.map((item) => item.step)} />
            <AdvantageColumn advantages={rightAdvantages} />
          </div>
        </div>
      </div>
    </PrimarySection>
  );
}
