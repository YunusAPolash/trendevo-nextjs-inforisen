import type { ReactNode } from 'react';

export type ServiceLeadingFeature = {
  title: string;
  description: string;
  icon: string;
  iconWidth: number;
  iconHeight: number;
};

export type ServiceLeadingContent = {
  badge: string;
  title: ReactNode;
  subtitle: string;
  topRowFeatures: ServiceLeadingFeature[];
  bottomRowFeatures: ServiceLeadingFeature[];
  titleClassName?: string;
  subtitleClassName?: string;
};

export type ServiceLeadingSlug =
  | 'facebook-smm-panel'
  | 'instagram-smm-panel'
  | 'telegram-smm-panel';

export const serviceLeadingContent: Record<ServiceLeadingSlug, ServiceLeadingContent> = {
  'facebook-smm-panel': {
    badge: 'Why TrendEvo',
    title: (
      <>
        Why TrendEvo Leads in{' '}
        <span className="text-gradient">Facebook SMM Services</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable Facebook SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'whitespace-normal max-w-[1200px] text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Fast & Reliable Delivery',
        description:
          'TrendEvo ensures that all your Facebook SMM orders are processed quickly, accurately, and securely. Our fast and reliable delivery system guarantees that likes, comments, and followers reach your account on time, helping you maintain consistent engagement and uninterrupted growth for your page.',
        icon: '/images/service-smm-panel/fast-and-reliable-delivery.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: '24/7 Support',
        description:
          'Our team is available around the clock to assist you in both Bangla and English. Whether you have questions, need guidance, or face any issues, TrendEvo’s 24/7 support ensures you get timely, personalized help to maximize your Facebook growth.',
        icon: '/images/service-smm-panel/24-7-support.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
    bottomRowFeatures: [
      {
        title: 'Authentic Engagement',
        description:
          'Gain real likes, comments, and followers that genuinely interact with your content. TrendEvo ensures meaningful engagement to help your Facebook page grow naturally and build long-term audience trust.',
        icon: '/images/service-smm-panel/authentic-engagement.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Affordable Pricing',
        description:
          'Enjoy competitive rates designed for Bangladeshi businesses, allowing you to grow your Facebook presence effectively without straining your budget.',
        icon: '/images/service-smm-panel/affordable-pricing.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Customer-Focused Service',
        description:
          'Our dedicated team guides you at every step, providing personalized support and expert advice to help you achieve your Facebook growth goals with confidence.',
        icon: '/images/service-smm-panel/customer-focused-service.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
  },
  'instagram-smm-panel': {
    badge: 'Why TrendEvo',
    title: (
      <>
        Why TrendEvo Leads in{' '}
        <span className="text-gradient">Instagram SMM Services</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable Instagram SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'whitespace-normal max-w-[1200px] text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Fast & Reliable Delivery',
        description:
          'TrendEvo ensures that all your Instagram SMM orders are processed quickly, accurately, and securely. Our fast and reliable delivery system guarantees that likes, comments, and followers reach your profile on time, helping you maintain consistent engagement and uninterrupted growth.',
        icon: '/images/service-smm-panel/fast-and-reliable-delivery.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: '24/7 Support',
        description:
          'Our team is available around the clock to assist you in both Bangla and English. Whether you have questions, need guidance, or face any issues, TrendEvo’s 24/7 support ensures you get timely, personalized help to maximize your Instagram growth.',
        icon: '/images/service-smm-panel/24-7-support.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
    bottomRowFeatures: [
      {
        title: 'Authentic Engagement',
        description:
          'Gain real likes, comments, and followers that genuinely interact with your content. TrendEvo ensures meaningful engagement to help your Instagram profile grow naturally and build long-term audience trust.',
        icon: '/images/service-smm-panel/authentic-engagement.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Affordable Pricing',
        description:
          'Enjoy competitive rates designed for Bangladeshi businesses, allowing you to grow your Instagram presence effectively without straining your budget.',
        icon: '/images/service-smm-panel/affordable-pricing.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Customer-Focused Service',
        description:
          'Our dedicated team guides you at every step, providing personalized support and expert advice to help you achieve your Instagram growth goals with confidence.',
        icon: '/images/service-smm-panel/customer-focused-service.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
  },
  'telegram-smm-panel': {
    badge: 'Why TrendEvo',
    title: (
      <>
        Why TrendEvo Leads in{' '}
        <span className="text-gradient">Telegram SMM Services</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable Telegram SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'whitespace-normal max-w-[1200px] text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Fast & Reliable Delivery',
        description:
          'TrendEvo ensures that all your Telegram SMM orders are processed quickly, accurately, and securely. Our fast and reliable delivery system guarantees that members, views, and reactions reach your channel on time, helping you maintain consistent engagement and uninterrupted growth.',
        icon: '/images/service-smm-panel/fast-and-reliable-delivery.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: '24/7 Support',
        description:
          'Our team is available around the clock to assist you in both Bangla and English. Whether you have questions, need guidance, or face any issues, TrendEvo’s 24/7 support ensures you get timely, personalized help to maximize your Telegram growth.',
        icon: '/images/service-smm-panel/24-7-support.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
    bottomRowFeatures: [
      {
        title: 'Authentic Engagement',
        description:
          'Gain real members, views, and reactions that genuinely interact with your content. TrendEvo ensures meaningful engagement to help your Telegram channel grow naturally and build long-term audience trust.',
        icon: '/images/service-smm-panel/authentic-engagement.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Affordable Pricing',
        description:
          'Enjoy competitive rates designed for Bangladeshi businesses, allowing you to grow your Telegram presence effectively without straining your budget.',
        icon: '/images/service-smm-panel/affordable-pricing.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Customer-Focused Service',
        description:
          'Our dedicated team guides you at every step, providing personalized support and expert advice to help you achieve your Telegram growth goals with confidence.',
        icon: '/images/service-smm-panel/customer-focused-service.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
  },
};

export function getServiceLeadingContent(slug: ServiceLeadingSlug): ServiceLeadingContent {
  return serviceLeadingContent[slug];
}
