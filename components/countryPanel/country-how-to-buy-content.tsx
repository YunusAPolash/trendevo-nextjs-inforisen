import type { ReactNode } from 'react';

import type { SectionBgKey } from '@/components/sections/primary-section';

export type CountryHowToBuyStep = {
  title: string;
  description?: string;
};

export type CountryHowToBuyContent = {
  badge: string;
  title: ReactNode;
  subtitle: string;
  buttonLabel: string;
  buttonHref?: string;
  steps: CountryHowToBuyStep[];
  underlineSrc: string;
  underlineWidth: number;
  titleClassName?: string;
  subtitleClassName?: string;
  sectionBg?: SectionBgKey;
  sectionClassName?: string;
  activeStepIcon: string;
  inactiveStepIcon: string;
};

export type CountryHowToBuySlug = 'smm-panel-uk' | 'smm-panel-bangladesh';

export const countryHowToBuyContent: Record<
  CountryHowToBuySlug,
  CountryHowToBuyContent
> = {
  'smm-panel-uk': {
    badge: 'How to Buy',
    title: (
      <>
        How to buy{' '}
        <span className="text-gradient">SMM panel services?</span>
      </>
    ),
    subtitle:
      'Follow a Simple Process to Boost Your Social Growth Instantly',
    buttonLabel: 'Get Started Now',
    buttonHref: '#',
    steps: [
      {
        title: 'Sign Up for Free',
        description:
          'Create your free account in just a few seconds and unlock full access to our powerful SMM panel, designed to help you grow faster and smarter.',
      },
      {
        title: 'Add funds',
        description:
          'Top up your wallet using secure payment options including cards, PayPal, and crypto. Funds are added instantly so you can start ordering right away.',
      },
      {
        title: 'Select service',
        description:
          'Browse our full catalog of SMM services for Instagram, Facebook, TikTok, YouTube, and more. Pick the package that fits your growth goals.',
      },
      {
        title: 'Place your order',
        description:
          'Enter your profile or post link, confirm your order, and watch engagement roll in. Track delivery in real time from your dashboard.',
      },
    ],
    underlineSrc: '/images/country/uk/uk-section-underline.svg',
    underlineWidth: 124,
    titleClassName: 'text-[28px] text-[#13203b] sm:text-[32px] lg:text-[36px]',
    subtitleClassName: 'text-base font-medium text-[#4f586d] sm:text-lg',
    sectionBg: 'section-15',
    sectionClassName: 'overflow-hidden py-12 sm:py-16 lg:py-[60px]',
    activeStepIcon: '/images/country/uk/uk-how-to-buy-step-active-icon.svg',
    inactiveStepIcon: '/images/country/uk/uk-how-to-buy-step-icon.svg',
  },
  'smm-panel-bangladesh': {
    badge: 'How to Buy',
    title: (
      <>
        How to buy{' '}
        <span className="text-gradient">SMM panel services in Bangladesh?</span>
      </>
    ),
    subtitle:
      'Follow a simple process to boost your social growth instantly with TrendEvo',
    buttonLabel: 'Get Started Now',
    buttonHref: '#',
    steps: [
      {
        title: 'Sign Up for Free',
        description:
          'Create your free account in seconds and unlock full access to our SMM panel built for Bangladeshi businesses, creators, and resellers.',
      },
      {
        title: 'Add funds',
        description:
          'Add balance using bKash, Nagad, Rocket, cards, or crypto. Secure payments with instant wallet top-ups.',
      },
      {
        title: 'Select service',
        description:
          'Choose from Facebook, Instagram, TikTok, YouTube, and Telegram services tailored for the Bangladesh market.',
      },
      {
        title: 'Place your order',
        description:
          'Submit your link, confirm the order, and track delivery from your dashboard. Support is available 24/7 in Bangla and English.',
      },
    ],
    underlineSrc: '/images/country/uk/uk-section-underline.svg',
    underlineWidth: 124,
    titleClassName: 'text-[28px] text-[#13203b] sm:text-[32px] lg:text-[36px]',
    subtitleClassName: 'text-base font-medium text-[#4f586d] sm:text-lg',
    sectionBg: 'section-15',
    sectionClassName: 'overflow-hidden py-12 sm:py-16 lg:py-[60px]',
    activeStepIcon: '/images/country/uk/uk-how-to-buy-step-active-icon.svg',
    inactiveStepIcon: '/images/country/uk/uk-how-to-buy-step-icon.svg',
  },
};

export function getCountryHowToBuyContent(
  slug: CountryHowToBuySlug,
): CountryHowToBuyContent {
  return countryHowToBuyContent[slug];
}
