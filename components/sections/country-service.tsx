'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import PrimaryButton from '@/components/buttons/primary-button';
import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import { cn } from '@/lib/utils';

import {
  getCountryServiceContent,
  type CountryServicePlatform,
  type CountryServiceSlug,
} from '@/components/countryPanel/country-service-content';

const GRADIENT_TEXT =
  'bg-gradient-to-r from-[#ad26ff] to-[#ff3f85] bg-clip-text text-transparent';

const ACTIVE_TAB_BG =
  'linear-gradient(102.9deg, rgb(209, 129, 255) 2.85%, rgb(255, 99, 190) 90.53%)';

const INACTIVE_TAB_BG =
  'linear-gradient(111.82deg, rgba(214, 144, 255, 0.08) 4.77%, rgba(215, 148, 255, 0.08) 39.51%, rgba(179, 100, 226, 0.08) 74.24%)';

const SERVICE_HERO_ILLUSTRATION =
  '/images/our-services/decorations/hero-illustration.png';

function HexBgIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="37"
      viewBox="0 0 33 37"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M13.5039 0.890625C15.3294 -0.163308 17.5788 -0.163308 19.4043 0.890625L29.8584 6.92676C31.6838 7.98065 32.8085 9.92836 32.8086 12.0361V24.1084C32.8085 26.2162 31.6838 28.1639 29.8584 29.2178L19.4043 35.2539C17.5788 36.3078 15.3294 36.3078 13.5039 35.2539L3.0498 29.2178C1.22441 28.1639 0.0996928 26.2162 0.0996094 24.1084V12.0361C0.0996928 9.92836 1.22441 7.98065 3.0498 6.92676L13.5039 0.890625Z"
        fill="white"
        stroke="#C081E6"
        strokeWidth="1"
      />
    </svg>
  );
}

function ServiceTopRightDecoration({ imageSrc }: { imageSrc: string }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-full max-w-[1920px] -translate-x-1/2 lg:block"
    >
      <div className="absolute left-[91.5625%] top-[107px] h-[212px] w-[217.591px] overflow-hidden blur-[2px]">
        <div className="relative size-full">
          <Image
            key={imageSrc}
            src={imageSrc}
            alt=""
            aria-hidden
            fill
            className="object-contain object-center"
            sizes="218px"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}

function ServiceBottomLeftDecoration({ imageSrc }: { imageSrc: string }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute bottom-[88px] left-[calc((100%-100vw)/2-84px)] z-0 hidden h-[274px] w-[273px] items-center justify-center lg:flex"
    >
      <div className="rotate-[-21deg]">
        <div className="relative h-[212px] w-[211px] overflow-hidden blur-[2px]">
          <Image
            key={imageSrc}
            src={imageSrc}
            alt=""
            aria-hidden
            fill
            className="object-contain object-center"
            sizes="211px"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}

function PlatformIcon({
  src,
  label,
  className,
}: {
  src: string;
  label: string;
  className?: string;
}) {
  const isSvg = src.endsWith('.svg');

  return (
    <div className="relative flex size-8 shrink-0 items-center justify-center p-1.5 sm:size-[38px] sm:p-[9px]">
      <HexBgIcon className="absolute left-1/2 top-1/2 size-8 -translate-x-1/2 -translate-y-1/2 sm:size-[38px]" />
      <Image
        src={src}
        alt=""
        aria-hidden
        width={20}
        height={20}
        className={cn(
          'relative z-10 size-4 object-contain sm:size-5',
          className,
        )}
        unoptimized={isSvg}
      />
      <span className="sr-only">{label}</span>
    </div>
  );
}

function ServiceNumberBadge({ number }: { number: string }) {
  return (
    <div className="relative flex size-9 shrink-0 items-center justify-center sm:size-[44px]">
      <Image
        src="/images/our-services/ui/hex-number.svg"
        alt=""
        aria-hidden
        width={38}
        height={38}
        className="absolute left-1/2 top-1/2 size-8 -translate-x-1/2 -translate-y-1/2 sm:size-[38px]"
      />
      <span className="relative z-10 text-sm font-semibold leading-normal text-white sm:text-base">
        {number}
      </span>
    </div>
  );
}

function PlatformTab({
  platform,
  isActive,
  onSelect,
}: {
  platform: CountryServicePlatform;
  isActive: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isActive}
      aria-label={platform.label}
      className={cn(
        'flex w-full items-center justify-center rounded-[8px] px-2 py-2 transition-all sm:px-3 sm:py-2.5 md:px-[16px] md:py-[10px]',
        !isActive && 'border-[0.5px] border-solid border-[#8f2acd]',
      )}
      style={{
        backgroundImage: isActive ? ACTIVE_TAB_BG : INACTIVE_TAB_BG,
      }}
    >
      <div className="flex w-full items-center justify-center gap-0 sm:gap-2">
        <PlatformIcon
          src={platform.icon}
          label={platform.label}
          className={platform.iconClassName}
        />
        <span
          className={cn(
            'hidden text-center text-xs font-semibold leading-tight sm:inline sm:whitespace-nowrap sm:text-sm md:text-[18px]',
            isActive ? 'text-white' : 'text-[#343e56]',
          )}
        >
          {platform.label}
        </span>
      </div>
    </button>
  );
}

type CountryServiceProps = {
  slug: CountryServiceSlug;
};

export default function CountryService({ slug }: CountryServiceProps) {
  const content = getCountryServiceContent(slug);
  const [activePlatformId, setActivePlatformId] = useState(
    content.defaultPlatformId,
  );

  useEffect(() => {
    setActivePlatformId(content.defaultPlatformId);
  }, [slug, content.defaultPlatformId]);

  const activePlatform =
    content.platforms.find((platform) => platform.id === activePlatformId) ??
    content.platforms[0];

  return (
    <PrimarySection
      bg={content.sectionBg ?? 'section-2'}
      className="overflow-hidden py-12 sm:py-16 lg:py-20"
    >
      <ServiceTopRightDecoration imageSrc={activePlatform.decorationImage} />

      <div className="container relative z-10 flex flex-col items-center gap-8 sm:gap-10 lg:gap-12">
        <SectionHeading
          badge={content.badge}
          title={content.title}
          subtitle={content.subtitle}
          titleClassName={content.titleClassName}
          subtitleClassName={content.subtitleClassName}
        />

        <div className="flex w-full flex-col gap-6 sm:gap-8 lg:gap-9">
          <div className="grid w-full grid-cols-3 gap-2 sm:gap-3 md:gap-[18px] xl:grid-cols-6">
            {content.platforms.map((platform) => (
              <PlatformTab
                key={platform.id}
                platform={platform}
                isActive={activePlatformId === platform.id}
                onSelect={() => setActivePlatformId(platform.id)}
              />
            ))}
          </div>

          <div className="relative">
            <ServiceBottomLeftDecoration
              imageSrc={activePlatform.decorationImage}
            />

            <article className="relative z-10 flex flex-col items-center justify-between gap-6 rounded-[12px] border border-[#d181ff] p-4 sm:gap-8 sm:p-6 lg:flex-row lg:py-7 lg:pl-7 lg:pr-8">
              <div className="relative h-[220px] w-full max-w-[571px] shrink-0 overflow-hidden rounded-2xl sm:h-[320px] md:h-[420px] lg:h-[496px]">
                <Image
                  src={SERVICE_HERO_ILLUSTRATION}
                  alt=""
                  aria-hidden
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 1024px) 100vw, 571px"
                />
              </div>

              <div className="flex w-full max-w-[745px] flex-col gap-4 sm:gap-[18px]">
                <div className="flex flex-col gap-3 sm:gap-[18px]">
                  <h3
                    className={cn(
                      'text-xl font-semibold leading-tight sm:text-2xl md:text-[28px] md:leading-none',
                      GRADIENT_TEXT,
                    )}
                  >
                    {activePlatform.marketingTitle}
                  </h3>
                  <p className="text-sm font-medium leading-normal text-[#222e48] sm:text-base">
                    {activePlatform.description}
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:gap-6">
                  <ul className="flex flex-col gap-2">
                    {activePlatform.services.map((service) => (
                      <li
                        key={service.number}
                        className="flex items-start gap-2 sm:items-center"
                      >
                        <ServiceNumberBadge number={service.number} />
                        <p className="text-sm leading-normal sm:text-base">
                          <span className={cn('font-medium', GRADIENT_TEXT)}>
                            {service.title}{' '}
                          </span>
                          <span className="font-medium text-[#404a60]">
                            {service.description}
                          </span>
                        </p>
                      </li>
                    ))}
                  </ul>

                  <PrimaryButton
                    type="button"
                    className="h-10 self-start px-4 text-sm sm:h-11 sm:px-5 sm:text-base md:h-[50px] md:px-[18px]"
                  >
                    {activePlatform.buttonLabel}
                  </PrimaryButton>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </PrimarySection>
  );
}
