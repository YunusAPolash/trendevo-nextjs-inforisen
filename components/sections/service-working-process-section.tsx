import Image from 'next/image';
import type { ReactNode } from 'react';

import PrimaryCard, { type CardBgKey } from '@/components/cards/primary-card';
import PrimarySection, { type SectionBgKey } from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import { cn } from '@/lib/utils';

export type ServiceWorkingProcessStep = {
  number: string;
  title: ReactNode;
  description: string;
};

export type ServiceWorkingProcessSectionProps = {
  badge: string;
  title: ReactNode;
  subtitle: string;
  steps: ServiceWorkingProcessStep[];
  bg?: SectionBgKey;
  cardBg?: CardBgKey;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  underlineSrc?: string;
  underlineWidth?: number;
  stepHexSrc?: string;
  flowConnectorsSrc?: string;
  titleBulletSrc?: string;
};

const DEFAULT_STEP_HEX_SRC = '/images/service-smm-panel/working-process-step-hex.svg';
const DEFAULT_FLOW_CONNECTORS_SRC =
  '/images/service-smm-panel/working-process-flow-connectors.svg';
const DEFAULT_TITLE_BULLET_SRC = '/images/why-choose-us/title-bullet.svg';

function ProcessStepCard({
  number,
  title,
  description,
  cardBg,
  stepHexSrc,
  titleBulletSrc,
}: ServiceWorkingProcessStep & {
  cardBg: CardBgKey;
  stepHexSrc: string;
  titleBulletSrc: string;
}) {
  return (
    <PrimaryCard
      bg={cardBg}
      className="relative flex h-full min-h-[240px] flex-col gap-6 rounded-xl border border-[#e1d8ff] p-3 ring-0"
    >
      <div className="relative flex size-[60px] shrink-0 items-center justify-center sm:size-[82px]">
        <Image
          src={stepHexSrc}
          alt=""
          aria-hidden
          width={82}
          height={82}
          className="absolute inset-0 size-[60px] sm:size-[82px]"
        />
        <span className="text-gradient relative z-10 text-[22px] font-semibold leading-none sm:text-[28px]">
          {number}
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Image
            src={titleBulletSrc}
            alt=""
            aria-hidden
            width={10}
            height={10}
            className="size-2.5 shrink-0"
          />
          <h3 className="text-lg font-semibold leading-normal tracking-[0.2px] text-[#232323] sm:text-xl">
            {title}
          </h3>
        </div>
        <p className="text-base leading-normal text-[#5a5a5a]">{description}</p>
      </div>
    </PrimaryCard>
  );
}

export default function ServiceWorkingProcessSection({
  badge,
  title,
  subtitle,
  steps,
  bg = 'section-9',
  cardBg = 'card-9',
  className,
  titleClassName,
  subtitleClassName,
  underlineSrc,
  underlineWidth,
  stepHexSrc = DEFAULT_STEP_HEX_SRC,
  flowConnectorsSrc = DEFAULT_FLOW_CONNECTORS_SRC,
  titleBulletSrc = DEFAULT_TITLE_BULLET_SRC,
}: ServiceWorkingProcessSectionProps) {
  return (
    <PrimarySection
      bg={bg}
      className={cn('overflow-hidden py-16 sm:py-20', className)}
    >
      <div className="container flex flex-col gap-10 sm:gap-12 lg:gap-16">
        <SectionHeading
          badge={badge}
          title={title}
          subtitle={subtitle}
          underlineSrc={underlineSrc}
          underlineWidth={underlineWidth}
          titleClassName={titleClassName}
          subtitleClassName={subtitleClassName}
        />

        <div className="flex flex-col items-center gap-3">
          <div className="grid w-full gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
            {steps.map((step) => (
              <ProcessStepCard
                key={step.number}
                {...step}
                cardBg={cardBg}
                stepHexSrc={stepHexSrc}
                titleBulletSrc={titleBulletSrc}
              />
            ))}
          </div>

          <Image
            src={flowConnectorsSrc}
            alt=""
            aria-hidden
            width={1123}
            height={74}
            className="hidden h-auto w-full max-w-[1123px] xl:block"
            unoptimized
          />
        </div>
      </div>
    </PrimarySection>
  );
}
