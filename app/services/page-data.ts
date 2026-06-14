import type { HeroSocialIcon } from '@/components/sections/hero-section';
import { heroSocialIcons } from '@/content/hero-social-icons';

type SEO = {
  title: string;
  description: string;
  canonical?: string;
};

type ServicePanelItem = {
  backgroundGradient: string;
  darkOverlaySrc: string;
  iconSrc: string;
  iconAlt: string;
  title: string;
};

type ServicesPageData = {
  seo: SEO;
  hero: {
    bg: 'section-1';
    variant: 'wide';
    decoration: 'contact';
    title: string;
    titleClassName: string;
    description: string;
    descriptionClassName: string;
    primaryButtonLabel: string;
    illustration: {
      src: string;
      alt: string;
      width: number;
      height: number;
      maxWidthClassName: string;
    };
    socialIcons: HeroSocialIcon[];
  };
  servicesGrid: {
    serviceDescription: string;
    items: ServicePanelItem[];
  };
  cta: {
    title: string;
    description: string;
    primaryButtonLabel: string;
    secondaryButtonLabel: string;
    secondaryButtonHref: string;
  };
};

const serviceDescription =
  'Grow your Facebook page fast with likes, followers, and engagement. Reliable, affordable, and easy social media growth solutions.';

export const data: ServicesPageData = {
  seo: {
    title: 'Services | TrendEvo',
    description:
      'Boost your social media growth with TrendEvo services for Instagram, Facebook, YouTube, TikTok, Telegram, and X.',
    canonical: '/services',
  },

  hero: {
    bg: 'section-1',
    variant: 'wide',
    decoration: 'contact',
    title: 'Boost Your Social Media Growth with gt<Trend Evo Services>',
    titleClassName:
      'text-4xl font-semibold leading-[1.35] tracking-wide text-[#313131] sm:text-5xl lg:text-[48px]',
    description:
      'Boost your social media growth with Trend Evo. Reach more followers on gt<Instagram, Facebook, YouTube, and TikTok>. Engage your audience like never before with reliable, fast services. Take your online presence to the next level and grow confidently.',
    descriptionClassName:
      'max-w-[762px] text-lg font-medium leading-relaxed text-[#343e56]',
    primaryButtonLabel: 'Get Started Now',
    illustration: {
      src: '/images/services/services-trendevo-specialist-presenting-social-media-growth-services-illustration.webp',
      alt: 'TrendEvo specialist presenting social media growth services',
      width: 468,
      height: 581,
      maxWidthClassName: 'max-w-[468px]',
    },
    socialIcons: heroSocialIcons,
  },

  servicesGrid: {
    serviceDescription,
    items: [
      {
        backgroundGradient:
          'linear-gradient(28.46deg, rgb(254, 249, 255) 8.11%, rgba(229, 239, 255, 0.46) 56.5%, rgb(128, 179, 255) 125.88%)',
        darkOverlaySrc:
          '/images/services/overlays/services-facebook-smm-panel-decoration.svg',
        iconSrc: '/images/services/services-facebook-smm-panel-icon.png',
        iconAlt: 'Facebook',
        title: 'Facebook SMM Panel',
      },
      {
        backgroundGradient:
          'linear-gradient(28.46deg, rgb(254, 249, 255) 8.11%, rgba(255, 238, 249, 0) 56.5%, rgb(255, 102, 199) 125.88%)',
        darkOverlaySrc:
          '/images/services/overlays/services-instagram-smm-panel-decoration.svg',
        iconSrc: '/images/services/services-instagram-smm-panel-icon.png',
        iconAlt: 'Instagram',
        title: 'Instagram SMM Panel',
      },
      {
        backgroundGradient:
          'linear-gradient(28.46deg, rgb(254, 249, 255) 8.11%, rgba(255, 247, 247, 0.46) 56.5%, rgb(255, 75, 73) 125.88%)',
        darkOverlaySrc:
          '/images/services/overlays/services-youtube-smm-panel-decoration.svg',
        iconSrc: '/images/services/services-youtube-smm-panel-icon.png',
        iconAlt: 'YouTube',
        title: 'Youtube SMM Panel',
      },
      {
        backgroundGradient:
          'linear-gradient(29.28deg, rgb(255, 255, 255) 2.55%, rgba(163, 163, 163, 0.03) 49.69%, rgb(201, 201, 201) 125.92%)',
        darkOverlaySrc:
          '/images/services/overlays/services-tiktok-smm-panel-decoration.svg',
        iconSrc: '/images/services/services-tiktok-smm-panel-icon.png',
        iconAlt: 'TikTok',
        title: 'TikTok SMM Panel',
      },
      {
        backgroundGradient:
          'linear-gradient(28.46deg, rgb(254, 249, 255) 8.11%, rgba(229, 239, 255, 0.46) 56.5%, rgb(96, 213, 240) 125.88%)',
        darkOverlaySrc:
          '/images/services/overlays/services-telegram-smm-panel-decoration.svg',
        iconSrc: '/images/services/services-telegram-smm-panel-icon.png',
        iconAlt: 'Telegram',
        title: 'Telegram SMM Panel',
      },
      {
        backgroundGradient:
          'linear-gradient(28.46deg, rgb(254, 249, 255) 8.11%, rgba(238, 238, 238, 0.46) 56.5%, rgb(125, 125, 125) 125.88%)',
        darkOverlaySrc:
          '/images/services/overlays/services-x-twitter-smm-panel-decoration.svg',
        iconSrc: '/images/services/services-x-twitter-smm-panel-icon.png',
        iconAlt: 'X (Twitter)',
        title: 'X(Twitter) SMM Panel',
      },
    ],
  },

  cta: {
    title: 'Ready to gt<Grow your Social Media> in Bangladesh',
    description:
      'Join thousands of users growing faster with TrendEvo Panel on Facebook, Instagram, YouTube, and TikTok. Get started free in under 60 seconds. We ensure 100% customer satisfaction with an all-in-one, fully automated SMM solution that helps your business stand out and grow effortlessly.',
    primaryButtonLabel: 'Register Now',
    secondaryButtonLabel: 'See all Services',
    secondaryButtonHref: '/services',
  },
};
