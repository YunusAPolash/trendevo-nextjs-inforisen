import type { ReactNode } from 'react';

export type CountryHeroIllustration = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type CountryHeroContent = {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  signInLabel: string;
  createAccountLabel: string;
  illustration: CountryHeroIllustration;
};

export type CountryHeroSlug = 'smm-panel-uk';

export const countryHeroContent: Record<CountryHeroSlug, CountryHeroContent> = {
  'smm-panel-uk': {
    eyebrow: 'The Best Panel For UK',
    title: (
      <>
        Trend Evo –{' '}
        <span className="text-gradient">Trusted SMM Panel </span> for Growing
        Businesses &amp; Creators
      </>
    ),
    description: (
      <>
        Fast, reliable, and affordable{' '}
        <span className="text-gradient">SMM services</span> to grow your social
        media presence. From Facebook and Instagram to TikTok and YouTube,
        TrendEvo helps businesses and creators achieve real results. We provide
        trusted solutions and support to simplify social media marketing and
        boost growth.
      </>
    ),
    signInLabel: 'Sign In',
    createAccountLabel: 'Create an Account',
    illustration: {
      src: '/images/country/uk/uk-trendevo-user-holding-the-uk-flag-with-a-rocket-representing-social-media-growth-icon.png',
      alt: 'TrendEvo user holding the UK flag with a rocket representing social media growth',
      width: 952,
      height: 1062,
    },
  },
};

export function getCountryHeroContent(slug: CountryHeroSlug): CountryHeroContent {
  return countryHeroContent[slug];
}
