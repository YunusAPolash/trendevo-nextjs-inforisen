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

export type AdvantagesSlug =
  | 'home'
  | 'smm-panel-uk'
  | 'smm-panel-bangladesh'
  | 'smm-panel-vietnam'
  | 'smm-panel-thailand'
  | 'smm-panel-pakistan'
  | 'smm-panel-nigeria'
  | 'smm-panel-brazil'
  | 'smm-panel-egypt'
  | 'smm-panel-india'
  | 'smm-panel-indonesia';

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
    underlineSrc: '/images/advantages/advantages-section-underline.svg',
    underlineWidth: 150,
    titleClassName:
      'whitespace-normal text-2xl tracking-[0.48px] text-[#13203b] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName:
      'max-w-[868px] text-sm font-medium text-[#4f586d] sm:text-base md:text-lg',
    centerImage: {
      src: '/images/advantages/advantages-illustration.png',
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
    sectionClassName:
      'overflow-x-hidden bg-white py-12 sm:py-16 lg:py-[84px] dark:bg-transparent',
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
    underlineSrc: '/images/advantages/advantages-section-underline.svg',
    underlineWidth: 150,
    titleClassName:
      'whitespace-normal text-2xl tracking-[0.48px] text-[#13203b] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName:
      'max-w-[868px] text-sm font-medium text-[#4f586d] sm:text-base md:text-lg',
    centerImage: {
      src: '/images/advantages/advantages-uk-smm-panel-advantages-illustration-with-globe-illustration.png',
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
    sectionClassName:
      'overflow-x-hidden bg-white py-12 sm:py-16 lg:py-[84px] dark:bg-transparent',
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
    underlineSrc: '/images/advantages/advantages-section-underline.svg',
    underlineWidth: 150,
    titleClassName:
      'whitespace-normal text-2xl tracking-[0.48px] text-[#13203b] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName:
      'max-w-[868px] text-sm font-medium text-[#4f586d] sm:text-base md:text-lg',
    centerImage: {
      src: '/images/advantages/advantages-illustration.png',
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
    sectionClassName:
      'overflow-x-hidden bg-white py-12 sm:py-16 lg:py-[84px] dark:bg-transparent',
  },
  'smm-panel-vietnam': {
    badge: 'ADVANTAGES',
    title: (
      <>
        Advantages of using{' '}
        <span className="text-gradient">our panel services in Vietnam</span>
      </>
    ),
    subtitle:
      'We provide SMM services on almost every social media platform for Vietnamese businesses and creators. We have everything you would need to increase engagement. Check out our range of services. Choose the one you need!',
    underlineSrc: '/images/advantages/advantages-section-underline.svg',
    underlineWidth: 150,
    titleClassName:
      'whitespace-normal text-2xl tracking-[0.48px] text-[#13203b] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName:
      'max-w-[868px] text-sm font-medium text-[#4f586d] sm:text-base md:text-lg',
    centerImage: {
      src: '/images/country/vietnam/advantages-of-using-our-panel-services-in-vietnam.webp',
      alt: 'Advantages of using our panel services in Vietnam',
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
          'Affordable SMM services let Vietnamese businesses, freelancers, and creators grow online fast. Gain likes, followers, and engagement across Instagram, Facebook, and TikTok. Start small, test, and scale campaigns while boosting reach and visibility—maximizing results without overspending.',
      },
      {
        title: (
          <>
            Reliable <span className="text-gradient">SMM Reseller</span> Support
            for Growing <span className="text-gradient">Your Business</span>
          </>
        ),
        description:
          'SMM reseller support lets entrepreneurs, agencies, and freelancers in Vietnam grow fast without building from scratch. Deliver ready-made services under your brand, customize packages, and scale confidently while maintaining quality and boosting revenue.',
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
              Enjoy multiple safe payment options, including cards, e-wallets, and
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
          'Get 24/7 live support in Vietnamese and English for all your SMM panel needs. Instant help ensures smooth campaigns, quick issue resolution, and peace of mind. Focus on growth while experts are always ready to assist.',
      },
    ],
    sectionBg: 'section-4',
    sectionClassName:
      'overflow-x-hidden bg-white py-12 sm:py-16 lg:py-[84px] dark:bg-transparent',
  },
  'smm-panel-thailand': {
    badge: 'ADVANTAGES',
    title: (
      <>
        Advantages of using{' '}
        <span className="text-gradient">our panel services in Thailand</span>
      </>
    ),
    subtitle:
      'We provide SMM services on almost every social media platform for Thai businesses and creators. We have everything you would need to increase engagement. Check out our range of services. Choose the one you need!',
    underlineSrc: '/images/advantages/advantages-section-underline.svg',
    underlineWidth: 150,
    titleClassName:
      'whitespace-normal text-2xl tracking-[0.48px] text-[#13203b] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName:
      'max-w-[868px] text-sm font-medium text-[#4f586d] sm:text-base md:text-lg',
    centerImage: {
      src: '/images/country/thailand/advantages-of-using-our-panel-services-in-thailand.webp',
      alt: 'Advantages of using our panel services in Thailand',
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
          'Affordable SMM services let Thai businesses, freelancers, and creators grow online fast. Gain likes, followers, and engagement across Instagram, Facebook, and TikTok. Start small, test, and scale campaigns while boosting reach and visibility—maximizing results without overspending.',
      },
      {
        title: (
          <>
            Reliable <span className="text-gradient">SMM Reseller</span> Support
            for Growing <span className="text-gradient">Your Business</span>
          </>
        ),
        description:
          'SMM reseller support lets entrepreneurs, agencies, and freelancers in Thailand grow fast without building from scratch. Deliver ready-made services under your brand, customize packages, and scale confidently while maintaining quality and boosting revenue.',
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
          'Get 24/7 live support in Thai and English for all your SMM panel needs. Instant help ensures smooth campaigns, quick issue resolution, and peace of mind. Focus on growth while experts are always ready to assist.',
      },
    ],
    sectionBg: 'section-4',
    sectionClassName:
      'overflow-x-hidden bg-white py-12 sm:py-16 lg:py-[84px] dark:bg-transparent',
  },
  'smm-panel-pakistan': {
    badge: 'ADVANTAGES',
    title: (
      <>
        Advantages of using{' '}
        <span className="text-gradient">our panel services in Pakistan</span>
      </>
    ),
    subtitle:
      'We provide SMM services on almost every social media platform for Pakistani businesses and creators. We have everything you would need to increase engagement. Check out our range of services. Choose the one you need!',
    underlineSrc: '/images/advantages/advantages-section-underline.svg',
    underlineWidth: 150,
    titleClassName:
      'whitespace-normal text-2xl tracking-[0.48px] text-[#13203b] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName:
      'max-w-[868px] text-sm font-medium text-[#4f586d] sm:text-base md:text-lg',
    centerImage: {
      src: '/images/country/pakistan/advantages-of-using-our-panel-services-in-pakistan.webp',
      alt: 'Advantages of using our panel services in Pakistan',
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
          'Affordable SMM services let Pakistani businesses, freelancers, and creators grow online fast. Gain likes, followers, and engagement across Instagram, Facebook, and TikTok. Start small, test, and scale campaigns while boosting reach and visibility—maximizing results without overspending.',
      },
      {
        title: (
          <>
            Reliable <span className="text-gradient">SMM Reseller</span> Support
            for Growing <span className="text-gradient">Your Business</span>
          </>
        ),
        description:
          'SMM reseller support lets entrepreneurs, agencies, and freelancers in Pakistan grow fast without building from scratch. Deliver ready-made services under your brand, customize packages, and scale confidently while maintaining quality and boosting revenue.',
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
          'Get 24/7 live support in Urdu and English for all your SMM panel needs. Instant help ensures smooth campaigns, quick issue resolution, and peace of mind. Focus on growth while experts are always ready to assist.',
      },
    ],
    sectionBg: 'section-4',
    sectionClassName:
      'overflow-x-hidden bg-white py-12 sm:py-16 lg:py-[84px] dark:bg-transparent',
  },
  'smm-panel-nigeria': {
    badge: 'ADVANTAGES',
    title: (
      <>
        Advantages of using{' '}
        <span className="text-gradient">our panel services in Nigeria</span>
      </>
    ),
    subtitle:
      'We provide SMM services on almost every social media platform for Nigerian businesses and creators. We have everything you would need to increase engagement. Check out our range of services. Choose the one you need!',
    underlineSrc: '/images/advantages/advantages-section-underline.svg',
    underlineWidth: 150,
    titleClassName:
      'whitespace-normal text-2xl tracking-[0.48px] text-[#13203b] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName:
      'max-w-[868px] text-sm font-medium text-[#4f586d] sm:text-base md:text-lg',
    centerImage: {
      src: '/images/country/nigeria/advantages-of-using-our-panel-services-in-nigeria.webp',
      alt: 'Advantages of using our panel services in Nigeria',
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
          'Affordable SMM services let Nigerian businesses, freelancers, and creators grow online fast. Gain likes, followers, and engagement across Instagram, Facebook, and TikTok. Start small, test, and scale campaigns while boosting reach and visibility—maximizing results without overspending.',
      },
      {
        title: (
          <>
            Reliable <span className="text-gradient">SMM Reseller</span> Support
            for Growing <span className="text-gradient">Your Business</span>
          </>
        ),
        description:
          'SMM reseller support lets entrepreneurs, agencies, and freelancers in Nigeria grow fast without building from scratch. Deliver ready-made services under your brand, customize packages, and scale confidently while maintaining quality and boosting revenue.',
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
          'Get 24/7 live support in English and local languages for all your SMM panel needs. Instant help ensures smooth campaigns, quick issue resolution, and peace of mind. Focus on growth while experts are always ready to assist.',
      },
    ],
    sectionBg: 'section-4',
    sectionClassName:
      'overflow-x-hidden bg-white py-12 sm:py-16 lg:py-[84px] dark:bg-transparent',
  },
  'smm-panel-brazil': {
    badge: 'ADVANTAGES',
    title: (
      <>
        Advantages of using{' '}
        <span className="text-gradient">our panel services in Brazil</span>
      </>
    ),
    subtitle:
      'We provide SMM services on almost every social media platform for Brazilian businesses and creators. We have everything you would need to increase engagement. Check out our range of services. Choose the one you need!',
    underlineSrc: '/images/advantages/advantages-section-underline.svg',
    underlineWidth: 150,
    titleClassName:
      'whitespace-normal text-2xl tracking-[0.48px] text-[#13203b] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName:
      'max-w-[868px] text-sm font-medium text-[#4f586d] sm:text-base md:text-lg',
    centerImage: {
      src: '/images/country/brazil/advantages-of-using-our-panel-services-in-brazil.webp',
      alt: 'Advantages of using our panel services in Brazil',
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
          'Affordable SMM services let Brazilian businesses, freelancers, and creators grow online fast. Gain likes, followers, and engagement across Instagram, Facebook, and TikTok. Start small, test, and scale campaigns while boosting reach and visibility—maximizing results without overspending.',
      },
      {
        title: (
          <>
            Reliable <span className="text-gradient">SMM Reseller</span> Support
            for Growing <span className="text-gradient">Your Business</span>
          </>
        ),
        description:
          'SMM reseller support lets entrepreneurs, agencies, and freelancers in Brazil grow fast without building from scratch. Deliver ready-made services under your brand, customize packages, and scale confidently while maintaining quality and boosting revenue.',
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
          'Get 24/7 live support in Portuguese and English for all your SMM panel needs. Instant help ensures smooth campaigns, quick issue resolution, and peace of mind. Focus on growth while experts are always ready to assist.',
      },
    ],
    sectionBg: 'section-4',
    sectionClassName:
      'overflow-x-hidden bg-white py-12 sm:py-16 lg:py-[84px] dark:bg-transparent',
  },
  'smm-panel-egypt': {
    badge: 'ADVANTAGES',
    title: (
      <>
        Advantages of using{' '}
        <span className="text-gradient">our panel services in Egypt</span>
      </>
    ),
    subtitle:
      'We provide SMM services on almost every social media platform for Egyptian businesses and creators. We have everything you would need to increase engagement. Check out our range of services. Choose the one you need!',
    underlineSrc: '/images/advantages/advantages-section-underline.svg',
    underlineWidth: 150,
    titleClassName:
      'whitespace-normal text-2xl tracking-[0.48px] text-[#13203b] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName:
      'max-w-[868px] text-sm font-medium text-[#4f586d] sm:text-base md:text-lg',
    centerImage: {
      src: '/images/country/egypt/advantages-of-using-our-panel-services-in-egypt.webp',
      alt: 'Advantages of using our panel services in Egypt',
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
          'Affordable SMM services let Egyptian businesses, freelancers, and creators grow online fast. Gain likes, followers, and engagement across Instagram, Facebook, and TikTok. Start small, test, and scale campaigns while boosting reach and visibility—maximizing results without overspending.',
      },
      {
        title: (
          <>
            Reliable <span className="text-gradient">SMM Reseller</span> Support
            for Growing <span className="text-gradient">Your Business</span>
          </>
        ),
        description:
          'SMM reseller support lets entrepreneurs, agencies, and freelancers in Egypt grow fast without building from scratch. Deliver ready-made services under your brand, customize packages, and scale confidently while maintaining quality and boosting revenue.',
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
          'Get 24/7 live support in Arabic and English for all your SMM panel needs. Instant help ensures smooth campaigns, quick issue resolution, and peace of mind. Focus on growth while experts are always ready to assist.',
      },
    ],
    sectionBg: 'section-4',
    sectionClassName:
      'overflow-x-hidden bg-white py-12 sm:py-16 lg:py-[84px] dark:bg-transparent',
  },
  'smm-panel-india': {
    badge: 'ADVANTAGES',
    title: (
      <>
        Advantages of using{' '}
        <span className="text-gradient">our panel services in India</span>
      </>
    ),
    subtitle:
      'We provide SMM services on almost every social media platform for Indian businesses and creators. We have everything you would need to increase engagement. Check out our range of services. Choose the one you need!',
    underlineSrc: '/images/advantages/advantages-section-underline.svg',
    underlineWidth: 150,
    titleClassName:
      'whitespace-normal text-2xl tracking-[0.48px] text-[#13203b] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName:
      'max-w-[868px] text-sm font-medium text-[#4f586d] sm:text-base md:text-lg',
    centerImage: {
      src: '/images/country/india/advantages-of-using-our-panel-services-in-india.webp',
      alt: 'Advantages of using our panel services in India',
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
          'Affordable SMM services let Indian businesses, freelancers, and creators grow online fast. Gain likes, followers, and engagement across Instagram, Facebook, and TikTok. Start small, test, and scale campaigns while boosting reach and visibility—maximizing results without overspending.',
      },
      {
        title: (
          <>
            Reliable <span className="text-gradient">SMM Reseller</span> Support
            for Growing <span className="text-gradient">Your Business</span>
          </>
        ),
        description:
          'SMM reseller support lets entrepreneurs, agencies, and freelancers in India grow fast without building from scratch. Deliver ready-made services under your brand, customize packages, and scale confidently while maintaining quality and boosting revenue.',
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
          'Get 24/7 live support in Hindi and English for all your SMM panel needs. Instant help ensures smooth campaigns, quick issue resolution, and peace of mind. Focus on growth while experts are always ready to assist.',
      },
    ],
    sectionBg: 'section-4',
    sectionClassName:
      'overflow-x-hidden bg-white py-12 sm:py-16 lg:py-[84px] dark:bg-transparent',
  },
  'smm-panel-indonesia': {
    badge: 'ADVANTAGES',
    title: (
      <>
        Advantages of using{' '}
        <span className="text-gradient">our panel services in Indonesia</span>
      </>
    ),
    subtitle:
      'We provide SMM services on almost every social media platform for Indonesian businesses and creators. We have everything you would need to increase engagement. Check out our range of services. Choose the one you need!',
    underlineSrc: '/images/advantages/advantages-section-underline.svg',
    underlineWidth: 150,
    titleClassName:
      'whitespace-normal text-2xl tracking-[0.48px] text-[#13203b] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName:
      'max-w-[868px] text-sm font-medium text-[#4f586d] sm:text-base md:text-lg',
    centerImage: {
      src: '/images/country/indonesia/advantages-of-using-our-panel-services-in-indonesia.webp',
      alt: 'Advantages of using our panel services in Indonesia',
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
          'Affordable SMM services let Indonesian businesses, freelancers, and creators grow online fast. Gain likes, followers, and engagement across Instagram, Facebook, and TikTok. Start small, test, and scale campaigns while boosting reach and visibility—maximizing results without overspending.',
      },
      {
        title: (
          <>
            Reliable <span className="text-gradient">SMM Reseller</span> Support
            for Growing <span className="text-gradient">Your Business</span>
          </>
        ),
        description:
          'SMM reseller support lets entrepreneurs, agencies, and freelancers in Indonesia grow fast without building from scratch. Deliver ready-made services under your brand, customize packages, and scale confidently while maintaining quality and boosting revenue.',
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
          'Get 24/7 live support in Indonesian and English for all your SMM panel needs. Instant help ensures smooth campaigns, quick issue resolution, and peace of mind. Focus on growth while experts are always ready to assist.',
      },
    ],
    sectionBg: 'section-4',
    sectionClassName:
      'overflow-x-hidden bg-white py-12 sm:py-16 lg:py-[84px] dark:bg-transparent',
  },
};

export function getAdvantagesContent(slug: AdvantagesSlug): AdvantagesContent {
  return advantagesContent[slug];
}
