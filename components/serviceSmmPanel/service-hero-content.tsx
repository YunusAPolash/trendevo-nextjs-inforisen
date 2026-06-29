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
  | 'telegram-smm-panel'
  | 'youtube-smm-panel'
  | 'tiktok-smm-panel'
  | 'x-twitter-smm-panel'
  | 'spotify-smm-panel'
  | 'soundcloud-smm-panel'
  | 'twitch-smm-panel'
  | 'snapchat-smm-panel';

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
      src: '/images/service-smm-panel/facebook-smm-panel/boost-facebook-reach-and-engagement-with-trendevo.png',
      alt: 'Boost Facebook reach and engagement with TrendEvo',
      width: 687,
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
      src: '/images/service-smm-panel/instagram-smm-panel/boost-instagram-reach-and-engagement-with-trendevo.webp',
      alt: 'Boost Instagram reach and engagement with TrendEvo',
      width: 687,
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
      src: '/images/service-smm-panel/telegram-smm-panel/boost-telegram-reach-and-engagement-with-trendevo.webp',
      alt: 'Boost Telegram reach and engagement with TrendEvo',
      width: 687,
      height: 648,
    },
  },
  'youtube-smm-panel': {
    title: (
      <>
        Boost YouTube{' '}
        <span className="text-gradient">reach and engagement</span> with TrendEvo.
      </>
    ),
    description:
      'TrendEvo helps Bangladeshi businesses grow their YouTube presence with real engagement, reliable results, and locally optimized strategies. Our platform ensures smooth, secure, and effective social media growth tailored to your business goals.',
    buttonLabel: 'Get Started Now',
    image: {
      src: '/images/service-smm-panel/youtube-smm-panel/boost-youtube-reach-and-engagement-with-trendevo.webp',
      alt: 'Boost YouTube reach and engagement with TrendEvo',
      width: 687,
      height: 648,
    },
  },
  'tiktok-smm-panel': {
    title: (
      <>
        Boost TikTok{' '}
        <span className="text-gradient">reach and engagement</span> with TrendEvo.
      </>
    ),
    description:
      'TrendEvo helps Bangladeshi businesses grow their TikTok presence with real engagement, reliable results, and locally optimized strategies. Our platform ensures smooth, secure, and effective social media growth tailored to your business goals.',
    buttonLabel: 'Get Started Now',
    image: {
      src: '/images/service-smm-panel/tiktok-smm-panel/boost-tiktok-reach-and-engagement-with-trendevo.webp',
      alt: 'Boost TikTok reach and engagement with TrendEvo',
      width: 687,
      height: 648,
    },
  },
  'x-twitter-smm-panel': {
    title: (
      <>
        Boost X{' '}
        <span className="text-gradient">reach and engagement</span> with TrendEvo.
      </>
    ),
    description:
      'TrendEvo helps Bangladeshi businesses grow their X (Twitter) presence with real engagement, reliable results, and locally optimized strategies. Our platform ensures smooth, secure, and effective social media growth tailored to your business goals.',
    buttonLabel: 'Get Started Now',
    image: {
      src: '/images/service-smm-panel/x-twitter-smm-panel/boost-x-reach-and-engagement-with-trendevo.webp',
      alt: 'Boost X reach and engagement with TrendEvo',
      width: 687,
      height: 648,
    },
  },
  'spotify-smm-panel': {
    title: (
      <>
        Boost Spotify{' '}
        <span className="text-gradient">reach and engagement</span> with TrendEvo.
      </>
    ),
    description:
      'TrendEvo helps Bangladeshi businesses grow their Spotify presence with real engagement, reliable results, and locally optimized strategies. Our platform ensures smooth, secure, and effective social media growth tailored to your business goals.',
    buttonLabel: 'Get Started Now',
    image: {
      src: '/images/service-smm-panel/spotify-smm-panel/boost-spotify-reach-and-engagement-with-trendevo.webp',
      alt: 'Boost Spotify reach and engagement with TrendEvo',
      width: 687,
      height: 648,
    },
  },
  'soundcloud-smm-panel': {
    title: (
      <>
        Boost SoundCloud{' '}
        <span className="text-gradient">reach and engagement</span> with TrendEvo.
      </>
    ),
    description:
      'TrendEvo helps Bangladeshi businesses grow their SoundCloud presence with real engagement, reliable results, and locally optimized strategies. Our platform ensures smooth, secure, and effective social media growth tailored to your business goals.',
    buttonLabel: 'Get Started Now',
    image: {
      src: '/images/service-smm-panel/soundcloud-smm-panel/boost-soundcloud-reach-and-engagement-with-trendevo.webp',
      alt: 'Boost SoundCloud reach and engagement with TrendEvo',
      width: 687,
      height: 648,
    },
  },
  'twitch-smm-panel': {
    title: (
      <>
        Boost Twitch{' '}
        <span className="text-gradient">reach and engagement</span> with TrendEvo.
      </>
    ),
    description:
      'TrendEvo gives Bangladeshi streamers, gamers, esports creators, agencies, influencers, and lnk</api|resellers smm panel> for a smarter way to grow on Twitch. Manage followers, live viewers, channel views, chat activity, clip engagement, and stream promotion from one clean dashboard.',
    buttonLabel: 'Get Started Now',
    image: {
      src: '/images/service-smm-panel/twitch-smm-panel/boost-twitch-reach-and-engagement-with-trendevo.webp',
      alt: 'Boost Twitch reach and engagement with TrendEvo',
      width: 687,
      height: 648,
    },
  },
  'snapchat-smm-panel': {
    title: (
      <>
        Boost Snapchat{' '}
        <span className="text-gradient">reach and engagement</span> with TrendEvo.
      </>
    ),
    description:
      'TrendEvo helps Bangladeshi businesses grow their Snapchat presence with real engagement, reliable results, and locally optimized strategies. Our platform ensures smooth, secure, and effective social media growth tailored to your business goals.',
    buttonLabel: 'Get Started Now',
    image: {
      src: '/images/service-smm-panel/snapchat-smm-panel/boost-snapchat-reach-and-engagement-with-trendevo.webp',
      alt: 'Boost Snapchat reach and engagement with TrendEvo',
      width: 687,
      height: 648,
    },
  },
};

export function getServiceHeroContent(slug: ServiceHeroSlug): ServiceHeroContent {
  return serviceHeroContent[slug];
}
