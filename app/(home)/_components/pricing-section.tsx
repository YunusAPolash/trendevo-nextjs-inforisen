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
      className={cn(
        'flex w-full flex-col items-start justify-center rounded-[8px] px-[16px] py-[10px] transition-all sm:w-[220px]',
        !isActive && 'border-[0.5px] border-solid border-[#8f2acd]',
      )}
      style={{
        backgroundImage: isActive ? ACTIVE_TAB_BG : INACTIVE_TAB_BG,
      }}
    >
      <span className="flex w-full items-center justify-center gap-2">
        <span className="relative flex size-[38px] shrink-0 items-center justify-center p-[9px]">
          <HexBgIcon className="absolute left-1/2 top-1/2 size-[38px] -translate-x-1/2 -translate-y-1/2" />
          <Image
            src={icon}
            alt=""
            aria-hidden
            width={20}
            height={20}
            className="relative z-10 size-5 object-contain"
          />
          <span className="sr-only">{label}</span>
        </span>
        <span
          className={cn(
            'whitespace-nowrap text-[18px] font-semibold leading-normal',
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
    <article className="relative flex h-full w-full min-w-[min(100%,280px)] max-w-[464px] flex-[1_1_320px] flex-col gap-6 overflow-visible rounded-3xl border-[0.7px] border-[#ffc0e4] bg-white pb-12 xl:max-w-none xl:flex-1 xl:basis-0">
      <Image
        src="/images/pricing/card-instagram.png"
        alt=""
        aria-hidden
        width={83}
        height={93}
        className="pointer-events-none absolute right-4 top-[-14px] z-20 h-[72px] w-[64px] sm:right-6 sm:top-[-18px] sm:h-[93px] sm:w-[83px]"
      />

      <div
        className="relative flex w-full flex-col gap-6 overflow-hidden rounded-t-3xl border-x border-t border-[#ffc0e4] px-6 py-7"
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

        <div className="relative z-10 flex flex-col gap-[22px]">
          <div className="flex flex-col gap-[5px]">
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
                className="size-6 shrink-0"
              />
              <p className="text-2xl font-medium leading-[1.48] text-[#13203b]">{name}</p>
            </div>
            <p className="text-base font-medium leading-normal text-[#404a60]">
              {description}
            </p>
          </div>

          <p className="tracking-[0.48px] text-[#222e48]">
            <span className="text-[36px] font-semibold leading-[1.35] sm:text-[48px]">
              {price}
            </span>
            <span className="text-xl font-medium leading-[1.48] text-[#5b6477] sm:text-2xl">
              /month
            </span>
          </p>
        </div>

        <button
          type="button"
          className={cn(
            'relative z-10 flex h-[50px] w-full items-center justify-center overflow-hidden rounded-[10px] border-[1.5px] px-[18px] py-2.5 text-base font-semibold',
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

      <ul className="flex flex-col gap-4 px-6">
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
            <span className="text-lg font-medium leading-normal text-[#0c070f]">
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
    <PrimarySection bg="section-11" className="py-20">
      <div className="container flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-[34px]">
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
            titleClassName="max-w-none whitespace-normal text-center text-[32px] tracking-[0.48px] text-[#071431] sm:text-[40px] lg:text-[48px]"
            subtitleClassName="max-w-[1090px] text-center text-lg leading-normal text-[#404a60]"
          />

          <div className="flex flex-wrap items-center justify-center gap-6">
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

        <div className="flex w-full max-w-[1440px] flex-wrap items-end justify-center gap-6 xl:flex-nowrap xl:justify-between">
          {plans.map((plan, index) => (
            <PricingCard key={`${plan.name}-${plan.planType}-${index}`} {...plan} />
          ))}
        </div>
      </div>
    </PrimarySection>
  );
}
