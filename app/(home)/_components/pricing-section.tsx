'use client';

import Image from 'next/image';
import { useState } from 'react';

import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import { cn } from '@/lib/utils';

const platforms = [
  { id: 'instagram', label: 'Instagram', icon: '/images/icons/platform-instagram.png' },
  { id: 'facebook', label: 'Facebook', icon: '/images/icons/platform-facebook.png' },
  { id: 'youtube', label: 'YouTube', icon: '/images/icons/platform-youtube.png' },
  { id: 'tiktok', label: 'TikTok', icon: '/images/icons/platform-tiktok.png' },
] as const;

const CARD_HEADER_GRADIENT_BASIC =
  'linear-gradient(34.63deg, rgb(251, 245, 255) 10.39%, rgb(255, 250, 252) 58.1%, rgb(255, 137, 198) 126.5%)';

const CARD_HEADER_GRADIENT_PRO =
  'linear-gradient(34.63deg, rgb(251, 245, 255) 10.39%, rgb(255, 250, 252) 58.1%, rgb(255, 189, 252) 126.5%)';

const INACTIVE_TAB_GRADIENT =
  'linear-gradient(111.82deg, rgba(214, 144, 255, 0.04) 4.77%, rgba(215, 148, 255, 0.04) 39.51%, rgba(179, 100, 226, 0.04) 74.24%)';

const ACTIVE_TAB_BG =
  'linear-gradient(102.9deg, rgb(209, 129, 255) 2.85%, rgb(255, 99, 190) 90.53%)';

const INACTIVE_TAB_BG =
  'linear-gradient(111.82deg, rgba(214, 144, 255, 0.08) 4.77%, rgba(215, 148, 255, 0.08) 39.51%, rgba(179, 100, 226, 0.08) 74.24%)';

const features = [
  { label: 'Guarantee Fast Delivery', icon: '/images/pricing/feature-security.svg' },
  { label: 'Instant Start', icon: '/images/pricing/feature-instant.svg' },
  { label: 'Never Drop', icon: '/images/pricing/feature-never-drop.svg' },
  { label: 'No Password Required', icon: '/images/pricing/feature-password.svg', size: 24 },
  { label: 'Geo: Global', icon: '/images/pricing/feature-global.svg' },
] as const;

const plans = [
  {
    name: 'Basic',
    planType: 'basic' as const,
    price: '$45.00',
    description: 'Instagram High Quality Followers',
    featured: false,
    featureCount: 5,
  },
  {
    name: 'Professional',
    planType: 'professional' as const,
    price: '$45.00',
    description: 'Instagram High Quality Followers',
    featured: true,
    featureCount: 6,
  },
  {
    name: 'Basic',
    planType: 'basic' as const,
    price: '$45.00',
    description: 'Instagram High Quality Followers',
    featured: false,
    featureCount: 5,
  },
] as const;

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

function PlatformTab({
  label,
  icon,
  isActive,
  onClick,
}: {
  label: string;
  icon: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={cn(
        'flex w-full items-center justify-center rounded-[8px] px-2 py-2 transition-all sm:w-[220px] sm:px-3 sm:py-2.5 md:px-[16px] md:py-[10px]',
        !isActive && 'border-[0.5px] border-solid border-[#8f2acd]',
      )}
      style={{
        backgroundImage: isActive ? ACTIVE_TAB_BG : INACTIVE_TAB_BG,
      }}
    >
      <span className="flex w-full items-center justify-center gap-0 sm:gap-2">
        <span className="relative flex size-8 shrink-0 items-center justify-center p-1.5 sm:size-[38px] sm:p-[9px]">
          <HexBgIcon className="absolute left-1/2 top-1/2 size-8 -translate-x-1/2 -translate-y-1/2 sm:size-[38px]" />
          <Image
            src={icon}
            alt=""
            aria-hidden
            width={20}
            height={20}
            className="relative z-10 size-4 object-contain sm:size-5"
          />
          <span className="sr-only">{label}</span>
        </span>
        <span
          className={cn(
            'hidden whitespace-nowrap text-sm font-semibold leading-normal sm:inline md:text-[18px]',
            isActive ? 'text-white' : 'text-[#343e56]',
          )}
        >
          {label}
        </span>
      </span>
    </button>
  );
}

function PricingCard({
  name,
  planType,
  price,
  description,
  featured,
  featureCount,
}: (typeof plans)[number]) {
  const planFeatures = [
    ...features,
    ...(featureCount > 5
      ? [{ label: '24/7 Support', icon: '/images/pricing/feature-global.svg', size: 20 as const }]
      : []),
  ];

  return (
    <article className="relative flex h-full w-full min-w-0 max-w-[464px] flex-[1_1_100%] flex-col gap-4 overflow-visible rounded-3xl border-[0.7px] border-[#ffc0e4] bg-white pb-8 sm:min-w-[min(100%,280px)] sm:flex-[1_1_320px] sm:gap-6 sm:pb-12 xl:max-w-none xl:flex-1 xl:basis-0">
      <Image
        src="/images/pricing/card-instagram.png"
        alt=""
        aria-hidden
        width={83}
        height={93}
        className="pointer-events-none absolute right-4 top-[-14px] z-20 h-[72px] w-[64px] sm:right-6 sm:top-[-18px] sm:h-[93px] sm:w-[83px]"
      />

      <div
        className="relative flex w-full flex-col gap-4 overflow-hidden rounded-t-3xl border-x border-t border-[#ffc0e4] px-4 py-5 sm:gap-6 sm:px-6 sm:py-7"
        style={{
          backgroundImage:
            planType === 'professional'
              ? CARD_HEADER_GRADIENT_PRO
              : CARD_HEADER_GRADIENT_BASIC,
        }}
      >
        {featured ? (
          <Image
            src="/images/pricing/card-halftone.png"
            alt=""
            aria-hidden
            width={703}
            height={703}
            className="pointer-events-none absolute -left-2.5 -top-[432px] size-[703px] object-cover opacity-[0.08]"
            unoptimized
          />
        ) : null}

        <div className="relative z-10 flex flex-col gap-4 sm:gap-[22px]">
          <div className="flex flex-col gap-1 sm:gap-[5px]">
            <div className="flex items-center gap-2">
              <Image
                src={
                  planType === 'professional'
                    ? '/images/pricing/plan-pro-icon.svg'
                    : '/images/pricing/plan-basic-icon.svg'
                }
                alt=""
                aria-hidden
                width={24}
                height={24}
                className="size-5 shrink-0 sm:size-6"
              />
              <p className="text-xl font-medium leading-[1.48] text-[#13203b] sm:text-2xl">
                {name}
              </p>
            </div>
            <p className="text-sm font-medium leading-normal text-[#404a60] sm:text-base">
              {description}
            </p>
          </div>

          <p className="tracking-[0.48px] text-[#222e48]">
            <span className="text-3xl font-semibold leading-[1.35] sm:text-[36px] md:text-[48px]">
              {price}
            </span>
            <span className="text-lg font-medium leading-[1.48] text-[#5b6477] sm:text-xl md:text-2xl">
              /month
            </span>
          </p>
        </div>

        <button
          type="button"
          className={cn(
            'relative z-10 flex h-10 w-full items-center justify-center overflow-hidden rounded-[10px] border-[1.5px] px-4 py-2 text-sm font-semibold sm:h-11 sm:px-5 sm:text-base md:h-[50px] md:px-[18px]',
            featured
              ? 'border-[#cc7aff] bg-brand-gradient text-white'
              : 'border-[#d181ff] bg-transparent',
          )}
        >
          <span className={cn(!featured && 'text-gradient')}>Get Started</span>
          <Image
            src="/images/pricing/button-glow.svg"
            alt=""
            aria-hidden
            width={273}
            height={68}
            className="pointer-events-none absolute bottom-[-61.5px] left-1/2 h-[68px] w-[273px] -translate-x-1/2"
          />
        </button>
      </div>

      <ul className="flex flex-col gap-3 px-4 sm:gap-4 sm:px-6">
        {planFeatures.map((feature) => (
          <li key={feature.label} className="flex items-center gap-2">
            <Image
              src={feature.icon}
              alt=""
              aria-hidden
              width={'size' in feature && feature.size ? feature.size : 20}
              height={'size' in feature && feature.size ? feature.size : 20}
              className={cn(
                'shrink-0',
                'size' in feature && feature.size === 24 ? 'size-6' : 'size-5',
              )}
            />
            <span className="text-sm font-medium leading-normal text-[#0c070f] sm:text-base md:text-lg">
              {feature.label}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function PricingSection() {
  const [activePlatform, setActivePlatform] =
    useState<(typeof platforms)[number]['id']>('instagram');

  return (
    <PrimarySection bg="section-11" className="overflow-x-hidden py-12 sm:py-16 lg:py-20">
      <div className="container flex flex-col items-center gap-8 sm:gap-12 lg:gap-16">
        <div className="flex w-full flex-col items-center gap-6 sm:gap-8 lg:gap-[34px]">
          <SectionHeading
            badge="PRICING"
            underlineSrc="/images/pricing/underline.svg"
            underlineWidth={90}
            title={
              <>
                Pricing Preview of Our{' '}
                <span className="text-gradient">SMM Panel Services</span>
              </>
            }
            subtitle="Simple, Clear, and Affordable for Everyone. We make social media growth easy without high costs. Our prices are clear, fair, and fit every budget."
            titleClassName="max-w-none whitespace-normal text-center text-2xl tracking-[0.48px] text-[#071431] sm:text-[32px] md:text-[40px] lg:text-[48px]"
            subtitleClassName="max-w-[1090px] text-center text-sm leading-normal text-[#404a60] sm:text-base md:text-lg"
          />

          <div className="grid w-full max-w-[360px] grid-cols-2 gap-2 sm:flex sm:max-w-none sm:flex-wrap sm:items-center sm:justify-center sm:gap-4 md:gap-6">
            {platforms.map((platform) => (
              <PlatformTab
                key={platform.id}
                label={platform.label}
                icon={platform.icon}
                isActive={activePlatform === platform.id}
                onClick={() => setActivePlatform(platform.id)}
              />
            ))}
          </div>
        </div>

        <div className="flex w-full max-w-[1440px] flex-col items-stretch justify-center gap-5 sm:flex-row sm:flex-wrap sm:items-end sm:gap-6 xl:flex-nowrap xl:justify-between">
          {plans.map((plan, index) => (
            <PricingCard key={`${plan.name}-${plan.planType}-${index}`} {...plan} />
          ))}
        </div>
      </div>
    </PrimarySection>
  );
}
