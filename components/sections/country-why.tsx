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
      darkBg="card-2-dark"
      className="relative min-h-[280px] w-full gap-0 overflow-hidden rounded-2xl border border-[#ffcbe5]/70 p-0 px-4 py-3.5 ring-0 dark:border-white/20"
    >
      <div className="relative z-10 flex flex-col gap-[18px]">
        <div className="relative flex size-[77px] shrink-0 items-center justify-center">
          <Image
            src="/images/why-choose-us/why-choose-us-hex-icon-decoration.svg"
            alt=""
            aria-hidden
            width={77}
            height={77}
            className="absolute inset-0 size-[77px] dark:hidden"
          />
          <Image
            src="/images/why-choose-us/why-choose-us-hex-icon-dark-decoration.svg"
            alt=""
            aria-hidden
            width={77}
            height={77}
            className="absolute inset-0 hidden size-[77px] dark:block"
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
              src="/images/why-choose-us/why-choose-us-title-bullet-decoration.svg"
              alt=""
              aria-hidden
              width={12}
              height={12}
              className="size-3 shrink-0"
            />
            <h3 className="text-lg font-semibold leading-none text-[#343e56] sm:text-[22px] dark:text-white">
              {title}
            </h3>
          </div>
          <p className="text-base leading-normal text-[#313131] dark:text-[#dfe0e4]">
            {description}
          </p>
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
    <PrimarySection
      bg="section-14"
      darkBg="section-26-dark"
      // backgroundSize="full"
      className="relative overflow-hidden py-16 sm:py-20"
    >
      <Image
        src="/images/country/uk/uk-why-decorative-wave-decoration.svg"
        alt=""
        aria-hidden
        width={1614}
        height={959}
        className="pointer-events-none absolute -left-[40%] top-[-35%] hidden h-auto w-[min(140vw,1300px)] opacity-90 lg:block dark:lg:hidden"
      />

      <div className="container relative flex flex-col gap-10 sm:gap-12 lg:gap-16">
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

        <div className="relative flex w-full flex-col gap-6 sm:gap-8">
          <div className="grid w-full gap-6 sm:gap-14 lg:grid-cols-2">
            <CountryWhyCard {...leftFeatures[0]} />
            <CountryWhyCard {...rightFeatures[0]} />
          </div>

          <div className="relative z-10 flex w-full justify-center ">
            <Image
              src={centerFlag.src}
              alt={centerFlag.alt}
              width={centerFlag.width}
              height={centerFlag.height}
              className="h-[120px] w-[120px] shrink-0 rounded-[20px] object-cover xl:w-[150px]"
            />
          </div>

          <div className="grid w-full gap-6 sm:gap-14 lg:grid-cols-2">
            <CountryWhyCard {...leftFeatures[1]} />
            <CountryWhyCard {...rightFeatures[1]} />
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 bottom-0 hidden lg:grid lg:grid-cols-2 lg:gap-8"
          >
            <div className="flex items-center justify-center">
              <ColumnConnector src="/images/country/uk/uk-why-column-connector-left-decoration.svg" />
            </div>
            <div className="flex items-center justify-center">
              <ColumnConnector src="/images/country/uk/uk-why-column-connector-right-decoration.svg" />
            </div>
          </div>
        </div>
      </div>
    </PrimarySection>
  );
}
