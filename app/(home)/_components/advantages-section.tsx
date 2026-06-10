import Image from 'next/image';
import type { ReactNode } from 'react';

import PrimaryCard from '@/components/cards/primary-card';
import { cn } from '@/lib/utils';
import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import {
  getAdvantagesContent,
  type AdvantagesSlug,
} from '@/components/countryPanel/advantages-content';

function AdvantageCard({
  title,
  description,
}: {
  title: ReactNode;
  description: ReactNode;
}) {
  return (
    <PrimaryCard
      bg="card-3"
      darkBg="card-3-dark"
      className="relative w-full overflow-hidden rounded-xl px-3 py-5 ring-0 sm:px-4 sm:py-6 dark:rounded-[12px]"
    >
      <div className="relative z-10 flex min-w-0 flex-col gap-3 sm:gap-4">
        <div className="flex min-w-0 items-start gap-2 sm:gap-2">
          <div
            className="h-7 w-1 shrink-0 rounded-[9.5px] sm:h-[34px] sm:w-[6px]"
            style={{
              backgroundImage:
                'linear-gradient(91.07deg, #cb7ef7 4.77%, #ff9bc1 39.51%, #ee4fac 74.24%)',
            }}
          />
          <h3 className="min-w-0 flex-1 text-base font-semibold leading-snug text-[#13203b] sm:text-lg sm:leading-normal dark:text-white">
            {title}
          </h3>
        </div>
        <div className="text-xs font-medium leading-normal text-[#343e56] sm:text-sm dark:text-[#ebecef]">
          {description}
        </div>
      </div>
    </PrimaryCard>
  );
}

type AdvantagesSectionProps = {
  slug?: AdvantagesSlug;
};

export default function AdvantagesSection({
  slug = 'home',
}: AdvantagesSectionProps) {
  const {
    badge,
    title,
    subtitle,
    underlineSrc,
    underlineWidth,
    titleClassName,
    subtitleClassName,
    centerImage,
    leftAdvantages,
    rightAdvantages,
    sectionBg,
    sectionClassName,
  } = getAdvantagesContent(slug);

  return (
    <PrimarySection
      bg={sectionBg}
      darkBg="section-4-dark"
      className={sectionClassName}
    >
      <div className="container flex min-w-0 flex-col items-center gap-10 sm:gap-12 lg:gap-16">
        <SectionHeading
          badge={badge}
          title={title}
          subtitle={subtitle}
          underlineSrc={underlineSrc}
          underlineWidth={underlineWidth}
          badgeClassName="dark:bg-none dark:bg-clip-border dark:text-white"
          titleClassName={cn(titleClassName, 'dark:text-[#efedf1]')}
          subtitleClassName={cn(subtitleClassName, 'dark:text-[#c1c4cc]')}
        />

        <div className="flex w-full min-w-0 flex-col items-stretch gap-6 sm:gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-6 xl:gap-10">
          <div className="flex w-full min-w-0 flex-col gap-6 lg:max-w-[454px] lg:gap-16">
            {leftAdvantages.map((item, index) => (
              <AdvantageCard
                key={`left-${index}`}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          <div className="relative aspect-[434/555] w-full min-w-0 shrink-0 overflow-hidden rounded-[24px] lg:aspect-auto lg:h-[555px] lg:max-w-[434px] lg:rounded-[30px]">
            <Image
              src={centerImage.src}
              alt={centerImage.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 434px"
              quality={100}
              className="object-contain object-bottom"
              priority
            />
          </div>

          <div className="flex w-full min-w-0 flex-col gap-6 lg:max-w-[454px] lg:gap-16">
            {rightAdvantages.map((item, index) => (
              <AdvantageCard
                key={`right-${index}`}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </PrimarySection>
  );
}
