import type { ReactNode } from 'react';

export type ServiceHeroContent = {
  title: ReactNode;
  description: string;
  buttonLabel: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export type ServiceHeroSlug =
  | 'facebook-smm-panel'
  | 'instagram-smm-panel'
  | 'telegram-smm-panel';

export const serviceHeroContent: Record<ServiceHeroSlug, ServiceHeroContent> = {
  'facebook-smm-panel': {
    title: (
      <>
        Boost Facebook{' '}
        <span className="text-gradient">reach and engagement</span> with TrendEvo.
      </>
    ),
    description:
      'TrendEvo helps Bangladeshi businesses grow their Facebook presence with real engagement, reliable results, and locally optimized strategies. Our platform ensures smooth, secure, and effective social media growth tailored to your business goals.',
    buttonLabel: 'Get Started Now',
    image: {
      src: '/images/service-smm-panel/best-boost-facebook.png',
      alt: 'TrendEvo Facebook growth specialist illustration',
      width: 583,
      height: 648,
    },
  },
  'instagram-smm-panel': {
    title: (
      <>
        Boost Instagram{' '}
        <span className="text-gradient">reach and engagement</span> with TrendEvo.
      </>
    ),
    description:
      'TrendEvo helps Bangladeshi businesses grow their Instagram presence with real engagement, reliable results, and locally optimized strategies. Our platform ensures smooth, secure, and effective social media growth tailored to your business goals.',
    buttonLabel: 'Get Started Now',
    image: {
      src: '/images/service-smm-panel/best-boost-instagram.png',
      alt: 'TrendEvo Instagram growth specialist illustration',
      width: 583,
      height: 648,
    },
  },
  'telegram-smm-panel': {
    title: (
      <>
        Boost Telegram{' '}
        <span className="text-gradient">reach and engagement</span> with TrendEvo.
      </>
    ),
    description:
      'TrendEvo helps Bangladeshi businesses grow their Telegram presence with real engagement, reliable results, and locally optimized strategies. Our platform ensures smooth, secure, and effective social media growth tailored to your business goals.',
    buttonLabel: 'Get Started Now',
    image: {
      src: '/images/service-smm-panel/best-boost-telegram.png',
      alt: 'TrendEvo Telegram growth specialist illustration',
      width: 583,
      height: 648,
    },
  },
};

export function getServiceHeroContent(slug: ServiceHeroSlug): ServiceHeroContent {
  return serviceHeroContent[slug];
}
