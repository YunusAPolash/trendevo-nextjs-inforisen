import type { ReactNode } from 'react';

export type CtaServiceContent = {
  title: ReactNode;
  description: string;
  primaryButtonLabel: string;
  secondaryButtonLabel: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
};

export type CtaServiceSlug =
  | 'facebook-smm-panel'
  | 'instagram-smm-panel'
  | 'telegram-smm-panel';

export const ctaServiceContent: Record<CtaServiceSlug, CtaServiceContent> = {
  'facebook-smm-panel': {
    title: (
      <>
        Ready to{' '}
        <span className="text-gradient">Grow Your Facebook</span> with TrendEvo
      </>
    ),
    description:
      'Join thousands of users growing faster with TrendEvo Facebook SMM Panel. Get started in under 60 seconds with fast delivery, real engagement, and 24/7 support tailored for Bangladeshi businesses.',
    primaryButtonLabel: 'Get Started Now',
    secondaryButtonLabel: 'See all Services',
    imageSrc: '/images/cta/cta-character.png',
    imageAlt: 'Start growing your Facebook presence with TrendEvo',
    className: 'mt-16',
  },
  'instagram-smm-panel': {
    title: (
      <>
        Ready to{' '}
        <span className="text-gradient">Grow Your Instagram</span> with TrendEvo
      </>
    ),
    description:
      'Join thousands of users growing faster with TrendEvo Instagram SMM Panel. Get started in under 60 seconds with fast delivery, real engagement, and 24/7 support tailored for Bangladeshi businesses.',
    primaryButtonLabel: 'Get Started Now',
    secondaryButtonLabel: 'See all Services',
    imageSrc: '/images/cta/cta-character.png',
    imageAlt: 'Start growing your Instagram presence with TrendEvo',
  },
  'telegram-smm-panel': {
    title: (
      <>
        Ready to{' '}
        <span className="text-gradient">Grow Your Telegram</span> with TrendEvo
      </>
    ),
    description:
      'Join thousands of users growing faster with TrendEvo Telegram SMM Panel. Get started in under 60 seconds with fast delivery, real engagement, and 24/7 support tailored for Bangladeshi businesses.',
    primaryButtonLabel: 'Get Started Now',
    secondaryButtonLabel: 'See all Services',
    imageSrc: '/images/cta/cta-character.png',
    imageAlt: 'Start growing your Telegram channel with TrendEvo',
  },
};

export function getCtaServiceContent(slug: CtaServiceSlug): CtaServiceContent {
  return ctaServiceContent[slug];
}
