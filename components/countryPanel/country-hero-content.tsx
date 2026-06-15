import type { ReactNode } from 'react';

export type CountryHeroIllustration = {
  src: string;
  alt: string;
  width: number;
  height: number;
  unoptimized?: boolean;
};

export type CountryHeroContent = {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  signInLabel: string;
  createAccountLabel: string;
  illustration: CountryHeroIllustration;
};

export type CountryHeroSlug = 'smm-panel-uk' | 'smm-panel-vietnam' | 'smm-panel-thailand' | 'smm-panel-pakistan' | 'smm-panel-nigeria' | 'smm-panel-brazil' | 'smm-panel-egypt' | 'smm-panel-india' | 'smm-panel-indonesia';

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
      unoptimized: true,
    },
  },
  'smm-panel-vietnam': {
    eyebrow: 'The Best Panel For Vietnam',
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
        media presence in Vietnam. From Facebook and Instagram to TikTok and
        YouTube, TrendEvo helps Vietnamese businesses and creators achieve real
        results. We provide trusted solutions and support to simplify social
        media marketing and boost growth.
      </>
    ),
    signInLabel: 'Sign In',
    createAccountLabel: 'Create an Account',
    illustration: {
      src: '/images/country/vietnam/the-best-panel-for-vietnam.png',
      alt: 'The best SMM panel for Vietnam — TrendEvo social media growth',
      width: 648,
      height: 648,
      unoptimized: true,
    },
  },
  'smm-panel-thailand': {
    eyebrow: 'The Best Panel For Thailand',
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
        media presence in Thailand. From Facebook and Instagram to TikTok and
        YouTube, TrendEvo helps Thai businesses and creators achieve real
        results. We provide trusted solutions and support to simplify social
        media marketing and boost growth.
      </>
    ),
    signInLabel: 'Sign In',
    createAccountLabel: 'Create an Account',
    illustration: {
      src: '/images/country/thailand/the-best-panel-for-thailand.png',
      alt: 'The best SMM panel for Thailand — TrendEvo social media growth',
      width: 648,
      height: 648,
      unoptimized: true,
    },
  },
  'smm-panel-pakistan': {
    eyebrow: 'The Best Panel For Pakistan',
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
        media presence in Pakistan. From Facebook and Instagram to TikTok and
        YouTube, TrendEvo helps Pakistani businesses and creators achieve real
        results. We provide trusted solutions and support to simplify social
        media marketing and boost growth.
      </>
    ),
    signInLabel: 'Sign In',
    createAccountLabel: 'Create an Account',
    illustration: {
      src: '/images/country/pakistan/the-best-panel-for-pakistan.png',
      alt: 'The best SMM panel for Pakistan — TrendEvo social media growth',
      width: 648,
      height: 648,
      unoptimized: true,
    },
  },
  'smm-panel-nigeria': {
    eyebrow: 'The Best Panel For Nigeria',
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
        media presence in Nigeria. From Facebook and Instagram to TikTok and
        YouTube, TrendEvo helps Nigerian businesses and creators achieve real
        results. We provide trusted solutions and support to simplify social
        media marketing and boost growth.
      </>
    ),
    signInLabel: 'Sign In',
    createAccountLabel: 'Create an Account',
    illustration: {
      src: '/images/country/nigeria/the-best-panel-for-nigeria.png',
      alt: 'The best SMM panel for Nigeria — TrendEvo social media growth',
      width: 648,
      height: 648,
      unoptimized: true,
    },
  },
  'smm-panel-brazil': {
    eyebrow: 'The Best Panel For Brazil',
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
        media presence in Brazil. From Facebook and Instagram to TikTok and
        YouTube, TrendEvo helps Brazilian businesses and creators achieve real
        results. We provide trusted solutions and support to simplify social
        media marketing and boost growth.
      </>
    ),
    signInLabel: 'Sign In',
    createAccountLabel: 'Create an Account',
    illustration: {
      src: '/images/country/brazil/the-best-panel-for-brazil.png',
      alt: 'The best SMM panel for Brazil — TrendEvo social media growth',
      width: 648,
      height: 648,
      unoptimized: true,
    },
  },
  'smm-panel-egypt': {
    eyebrow: 'The Best Panel For Egypt',
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
        media presence in Egypt. From Facebook and Instagram to TikTok and
        YouTube, TrendEvo helps Egyptian businesses and creators achieve real
        results. We provide trusted solutions and support to simplify social
        media marketing and boost growth.
      </>
    ),
    signInLabel: 'Sign In',
    createAccountLabel: 'Create an Account',
    illustration: {
      src: '/images/country/egypt/the-best-panel-for-egypt.png',
      alt: 'The best SMM panel for Egypt — TrendEvo social media growth',
      width: 648,
      height: 648,
      unoptimized: true,
    },
  },
  'smm-panel-india': {
    eyebrow: 'The Best Panel For India',
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
        media presence in India. From Facebook and Instagram to TikTok and
        YouTube, TrendEvo helps Indian businesses and creators achieve real
        results. We provide trusted solutions and support to simplify social
        media marketing and boost growth.
      </>
    ),
    signInLabel: 'Sign In',
    createAccountLabel: 'Create an Account',
    illustration: {
      src: '/images/country/india/the-best-panel-for-india.png',
      alt: 'The best SMM panel for India — TrendEvo social media growth',
      width: 648,
      height: 648,
      unoptimized: true,
    },
  },
  'smm-panel-indonesia': {
    eyebrow: 'The Best Panel For Indonesia',
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
        media presence in Indonesia. From Facebook and Instagram to TikTok and
        YouTube, TrendEvo helps Indonesian businesses and creators achieve real
        results. We provide trusted solutions and support to simplify social
        media marketing and boost growth.
      </>
    ),
    signInLabel: 'Sign In',
    createAccountLabel: 'Create an Account',
    illustration: {
      src: '/images/country/indonesia/the-best-panel-for-indonesia.png',
      alt: 'The best SMM panel for Indonesia — TrendEvo social media growth',
      width: 648,
      height: 648,
      unoptimized: true,
    },
  },
};

export function getCountryHeroContent(slug: CountryHeroSlug): CountryHeroContent {
  return countryHeroContent[slug];
}
