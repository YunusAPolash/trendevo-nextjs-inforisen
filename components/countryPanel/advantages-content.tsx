import type { ReactNode } from 'react';

import type { SectionBgKey } from '@/components/sections/primary-section';

export type AdvantagesItem = {
  title: ReactNode;
  description: ReactNode;
};

export type AdvantagesContent = {
  badge: string;
  title: ReactNode;
  subtitle: string;
  underlineSrc: string;
  underlineWidth: number;
  titleClassName?: string;
  subtitleClassName?: string;
  centerImage: {
    src: string;
    alt: string;
  };
  leftAdvantages: AdvantagesItem[];
  rightAdvantages: AdvantagesItem[];
  sectionBg?: SectionBgKey;
  sectionClassName?: string;
};

export type AdvantagesSlug = 'home' | 'smm-panel-uk' | 'smm-panel-bangladesh';

export const advantagesContent: Record<AdvantagesSlug, AdvantagesContent> = {
  home: {
    badge: 'ADVANTAGES',
    title: (
      <>
        Advantages of using{' '}
        <span className="text-gradient">our panel services</span>
      </>
    ),
    subtitle:
      'We provide SMM services on almost every social media platform. We have everything you would need to increase engagement. Check out our range of services. Choose the one you need!',
    underlineSrc: '/images/advantages/underline.svg',
    underlineWidth: 150,
    titleClassName:
      'whitespace-normal text-2xl tracking-[0.48px] text-[#13203b] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName:
      'max-w-[868px] text-sm font-medium text-[#4f586d] sm:text-base md:text-lg',
    centerImage: {
      src: '/images/advantages/advantage.png',
      alt: 'SMM panel advantages illustration',
    },
    leftAdvantages: [
      {
        title: (
          <>
            Lowest-Cost <span className="text-gradient">SMM</span> and{' '}
            <span className="text-gradient">Social Media</span> Marketing
            Services
          </>
        ),
        description:
          'Affordable SMM services let businesses, freelancers, and creators grow online fast. Gain likes, followers, and engagement across Instagram, Facebook, and Twitter. Start small, test, and scale campaigns while boosting reach and visibility—maximizing results without overspending.',
      },
      {
        title: (
          <>
            Reliable <span className="text-gradient">SMM</span> Reseller Support
            for Growing <span className="text-gradient">Your Business</span>
          </>
        ),
        description:
          'SMM reseller support lets entrepreneurs, agencies, and freelancers grow fast without building from scratch. Deliver ready-made services under your brand, customize packages, and scale confidently while maintaining quality and boosting revenue.',
      },
    ],
    rightAdvantages: [
      {
        title: (
          <>
            Multiple <span className="text-gradient">Safe Payment</span> Options
            for <span className="text-gradient">SMM</span> Orders
          </>
        ),
        description: (
          <>
            <p className="mb-0">
              Enjoy multiple safe payment options, including cards, PayPal, and
              cryptocurrencies.All transactions are secure, encrypted, and
              fraud-protected for peace of mind.
            </p>
            <p>
              Focus on growing your social media presence without any payment
              worries.
            </p>
          </>
        ),
      },
      {
        title: (
          <>
            24/7 Live Support for All{' '}
            <span className="text-gradient">SMM Services</span> What You Needs
          </>
        ),
        description:
          'Get 24/7 live support for all your SMM and Instagram panel needs.Instant help ensures smooth campaigns, quick issue resolution, and peace of mind.Focus on growth while experts are always ready to assist.',
      },
    ],
    sectionBg: 'section-4',
    sectionClassName: 'overflow-x-hidden bg-white py-12 sm:py-16 lg:py-[84px]',
  },
  'smm-panel-uk': {
    badge: 'ADVANTAGES',
    title: (
      <>
        Advantages of using{' '}
        <span className="text-gradient">our panel services in UK</span>
      </>
    ),
    subtitle:
      'We provide SMM services on almost every social media platform. We have everything you would need to increase engagement. Check out our range of services. Choose the one you need!',
    underlineSrc: '/images/advantages/underline.svg',
    underlineWidth: 150,
    titleClassName:
      'whitespace-normal text-2xl tracking-[0.48px] text-[#13203b] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName:
      'max-w-[868px] text-sm font-medium text-[#4f586d] sm:text-base md:text-lg',
    centerImage: {
      src: '/images/advantages/advantages-character.png',
      alt: 'UK SMM panel advantages illustration with globe',
    },
    leftAdvantages: [
      {
        title: (
          <>
            Lowest-Cost <span className="text-gradient">SMM</span> and{' '}
            <span className="text-gradient">Social Media Marketing</span>{' '}
            Services
          </>
        ),
        description:
          'Affordable SMM services let businesses, freelancers, and creators grow online fast. Gain likes, followers, and engagement across Instagram, Facebook, and Twitter. Start small, test, and scale campaigns while boosting reach and visibility—maximizing results without overspending.',
      },
      {
        title: (
          <>
            Reliable <span className="text-gradient">SMM Reseller</span> Support
            for Growing <span className="text-gradient">Your Business</span>
          </>
        ),
        description:
          'SMM reseller support lets entrepreneurs, agencies, and freelancers grow fast without building from scratch. Deliver ready-made services under your brand, customize packages, and scale confidently while maintaining quality and boosting revenue.',
      },
    ],
    rightAdvantages: [
      {
        title: (
          <>
            Multiple <span className="text-gradient">Safe Payment</span> Options
            for <span className="text-gradient">SMM</span> Orders
          </>
        ),
        description: (
          <>
            <p className="mb-0">
              Enjoy multiple safe payment options, including cards, PayPal, and
              cryptocurrencies. All transactions are secure, encrypted, and
              fraud-protected for peace of mind.
            </p>
            <p>
              Focus on growing your social media presence without any payment
              worries.
            </p>
          </>
        ),
      },
      {
        title: (
          <>
            <span className="text-gradient">24/7 Live Support</span> for All{' '}
            <span className="text-gradient">SMM Services</span> What You Needs
          </>
        ),
        description:
          'Get 24/7 live support for all your SMM and Instagram panel needs. Instant help ensures smooth campaigns, quick issue resolution, and peace of mind. Focus on growth while experts are always ready to assist.',
      },
    ],
    sectionBg: 'section-4',
    sectionClassName: 'overflow-x-hidden bg-white py-12 sm:py-16 lg:py-[84px]',
  },
  'smm-panel-bangladesh': {
    badge: 'ADVANTAGES',
    title: (
      <>
        Advantages of using{' '}
        <span className="text-gradient">our panel services in Bangladesh</span>
      </>
    ),
    subtitle:
      'We provide SMM services on almost every social media platform for Bangladeshi businesses and creators. We have everything you would need to increase engagement. Check out our range of services. Choose the one you need!',
    underlineSrc: '/images/advantages/underline.svg',
    underlineWidth: 150,
    titleClassName:
      'whitespace-normal text-2xl tracking-[0.48px] text-[#13203b] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName:
      'max-w-[868px] text-sm font-medium text-[#4f586d] sm:text-base md:text-lg',
    centerImage: {
      src: '/images/advantages/advantage.png',
      alt: 'Bangladesh SMM panel advantages illustration',
    },
    leftAdvantages: [
      {
        title: (
          <>
            Lowest-Cost <span className="text-gradient">SMM</span> and{' '}
            <span className="text-gradient">Social Media Marketing</span>{' '}
            Services
          </>
        ),
        description:
          'Affordable SMM services let Bangladeshi businesses, freelancers, and creators grow online fast. Gain likes, followers, and engagement across Instagram, Facebook, and TikTok. Start small, test, and scale campaigns while boosting reach and visibility—maximizing results without overspending.',
      },
      {
        title: (
          <>
            Reliable <span className="text-gradient">SMM Reseller</span> Support
            for Growing <span className="text-gradient">Your Business</span>
          </>
        ),
        description:
          'SMM reseller support lets entrepreneurs, agencies, and freelancers in Bangladesh grow fast without building from scratch. Deliver ready-made services under your brand, customize packages, and scale confidently while maintaining quality and boosting revenue.',
      },
    ],
    rightAdvantages: [
      {
        title: (
          <>
            Multiple <span className="text-gradient">Safe Payment</span> Options
            for <span className="text-gradient">SMM</span> Orders
          </>
        ),
        description: (
          <>
            <p className="mb-0">
              Enjoy multiple safe payment options, including local and
              international methods. All transactions are secure, encrypted, and
              fraud-protected for peace of mind.
            </p>
            <p>
              Focus on growing your social media presence without any payment
              worries.
            </p>
          </>
        ),
      },
      {
        title: (
          <>
            <span className="text-gradient">24/7 Live Support</span> for All{' '}
            <span className="text-gradient">SMM Services</span> What You Needs
          </>
        ),
        description:
          'Get 24/7 live support in Bangla and English for all your SMM panel needs. Instant help ensures smooth campaigns, quick issue resolution, and peace of mind. Focus on growth while experts are always ready to assist.',
      },
    ],
    sectionBg: 'section-4',
    sectionClassName: 'overflow-x-hidden bg-white py-12 sm:py-16 lg:py-[84px]',
  },
};

export function getAdvantagesContent(slug: AdvantagesSlug): AdvantagesContent {
  return advantagesContent[slug];
}
