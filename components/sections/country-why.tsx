import Image from 'next/image';

import PrimaryCard from '@/components/cards/primary-card';
import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import { cn } from '@/lib/utils';

import {
  getCountryWhyContent,
  type CountryWhyFeature,
  type CountryWhySlug,
} from '@/components/countryPanel/country-why-content';

function CountryWhyCard({
  title,
  description,
  icon,
  iconWidth,
  iconHeight,
}: CountryWhyFeature) {
  return (
    <PrimaryCard
      bg="card-11"
      className="relative min-h-[280px] w-full gap-0 overflow-hidden rounded-2xl border border-[#ffcbe5]/70 p-0 px-4 py-3.5 ring-0"
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
          <div
            className="relative z-10 shrink-0"
            style={{ width: iconWidth, height: iconHeight }}
          >
            <Image
              src={icon}
              alt=""
              aria-hidden
              width={iconWidth}
              height={iconHeight}
              quality={100}
              className="size-full object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
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

function ColumnConnector({ src }: { src: string }) {
  return (
    <Image
      src={src}
      alt=""
      aria-hidden
      width={24}
      height={126}
      className="h-[100px] w-6 shrink-0 sm:h-[126px]"
      unoptimized
    />
  );
}

function FeatureColumn({
  features,
  connectorSrc,
  className,
}: {
  features: [CountryWhyFeature, CountryWhyFeature];
  connectorSrc: string;
  className?: string;
}) {
  return (
    <div className={cn('flex w-full min-w-0 flex-col items-center gap-4', className)}>
      <CountryWhyCard {...features[0]} />
      <ColumnConnector src={connectorSrc} />
      <CountryWhyCard {...features[1]} />
    </div>
  );
}

type CountryWhyProps = {
  slug: CountryWhySlug;
};

export default function CountryWhy({ slug }: CountryWhyProps) {
  const {
    badge,
    title,
    subtitle,
    centerFlag,
    leftFeatures,
    rightFeatures,
    underlineSrc,
    underlineWidth,
    titleClassName,
    subtitleClassName,
  } = getCountryWhyContent(slug);

  return (
    <PrimarySection bg="section-14" className="relative overflow-hidden py-16 sm:py-20">
      <Image
        src="/images/country/uk/why-decorative-wave.svg"
        alt=""
        aria-hidden
        width={1614}
        height={959}
        className="pointer-events-none absolute -left-[40%] top-[-35%] hidden h-auto w-[min(140vw,1300px)] opacity-90 lg:block"
        
      />

      <div className="container relative flex flex-col gap-10 sm:gap-12 lg:gap-16">
        <SectionHeading
          badge={badge}
          title={title}
          subtitle={subtitle}
          underlineSrc={underlineSrc}
          underlineWidth={underlineWidth}
          titleClassName={titleClassName}
          subtitleClassName={subtitleClassName}
        />

        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
          <FeatureColumn
            features={leftFeatures}
            connectorSrc="/images/country/uk/why-column-connector-left.svg"
            className="lg:max-w-[696px]"
          />

          <div className="relative z-10 flex shrink-0 justify-center">
            <Image
              src={centerFlag.src}
              alt={centerFlag.alt}
              width={centerFlag.width}
              height={centerFlag.height}
              className="h-[130px] w-[180px] rounded-[20px] object-cover xl:w-[150px]"
            />
          </div>

          <FeatureColumn
            features={rightFeatures}
            connectorSrc="/images/country/uk/why-column-connector-right.svg"
            className="lg:max-w-[696px]"
          />
        </div>
      </div>
    </PrimarySection>
  );
}
