import type { ReactNode } from 'react';

export type ServiceLeadingFeature = {
  title: string;
  description: string;
  icon?: string;
  iconWidth?: number;
  iconHeight?: number;
  iconClassName?: string;
  iconWrapperClassName?: string;
  iconFrameSrc?: string;
};

export type ServiceLeadingContent = {
  badge: string;
  title: ReactNode;
  subtitle: string;
  topRowFeatures: ServiceLeadingFeature[];
  bottomRowFeatures: ServiceLeadingFeature[];
  titleClassName?: string;
  subtitleClassName?: string;
  underlineSrc?: string;
  underlineWidth?: number;
};

export type ServiceLeadingSlug =
  | 'facebook-smm-panel'
  | 'facebook-page-followers'
  | 'facebook-page-followers-related-services'
  | 'instagram-smm-panel'
  | 'telegram-smm-panel'
  | 'youtube-smm-panel'
  | 'tiktok-smm-panel'
  | 'x-twitter-smm-panel'
  | 'spotify-smm-panel'
  | 'soundcloud-smm-panel'
  | 'twitch-smm-panel'
  | 'snapchat-smm-panel';

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
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-and-reliable-delivery-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: '24/7 Support',
        description:
          'Our team is available around the clock to assist you in both Bangla and English. Whether you have questions, need guidance, or face any issues, TrendEvo’s 24/7 support ensures you get timely, personalized help to maximize your Facebook growth.',
        icon: '/images/service-smm-panel/facebook-smm-panel-24-7-support-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
    bottomRowFeatures: [
      {
        title: 'Authentic Engagement',
        description:
          'Gain real likes, comments, and followers that genuinely interact with your content. TrendEvo ensures meaningful engagement to help your Facebook page grow naturally and build long-term audience trust.',
        icon: '/images/service-smm-panel/facebook-smm-panel-authentic-engagement-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Affordable Pricing',
        description:
          'Enjoy competitive rates designed for Bangladeshi businesses, allowing you to grow your Facebook presence effectively without straining your budget.',
        icon: '/images/service-smm-panel/facebook-smm-panel-affordable-pricing-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Customer-Focused Service',
        description:
          'Our dedicated team guides you at every step, providing personalized support and expert advice to help you achieve your Facebook growth goals with confidence.',
        icon: '/images/service-smm-panel/facebook-smm-panel-customer-focused-service-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
  },
  'facebook-page-followers': {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: (
      <>
        Why Choose TrendEvo To Buy{' '}
        <span className="text-gradient">Facebook Followers</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable Facebook SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. Followers can roll in slowly, like real growth. Or, they can surge fast, boosting your page now.",
        icon: '/images/facebook-page-followers/facebook-page-followers-instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          "We price in your money, so it's easy on wallets. Budding bosses, freelancers, students, and creators, take note. Big wins don't need big money spent. Start small to test, then go big later.",
        icon: '/images/facebook-page-followers/facebook-page-followers-affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          "Our team's here for you all day, every day. Reach out on WhatsApp or email anytime. Got questions on your order or need package advice? Expect quick help in your language.",
        icon: '/images/facebook-page-followers/facebook-page-followers-24-7-support-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[167%] max-w-none object-cover -translate-x-[34%] -translate-y-[13%]',
      },
    ],
    bottomRowFeatures: [
      {
        title: 'Local Payment — bKash, Nagad, Rocket, and More',
        description:
          'Pay with ease using your preferred local method. We accept bKash, Nagad, Upay, and Rocket, ensuring instant crediting of your TrendEvo balance. Enjoy hassle-free transactions without the need for credit cards or international payment gateways.',
        icon: '/images/facebook-page-followers/facebook-page-followers-local-payment-bkash-nagad-rocket-and-more-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Real Followers from Quality Sources',
        description:
          "We deliver genuine Facebook followers from active profiles, ensuring lasting engagement. Our packages include a refill guarantee, so any drops are promptly replenished, maintaining your follower count and enhancing your page's credibility.",
        iconFrameSrc:
          '/images/facebook-page-followers/facebook-page-followers-real-followers-from-quality-sources-decoration.png',
      },
    ],
  },
  'facebook-page-followers-related-services': {
    badge: 'RELATED SERVICE',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 198,
    title: (
      <>
        Related Services You{' '}
        <span className="text-gradient">Might Also Need</span>
      </>
    ),
    subtitle:
      'TrendEvo offers top-tier Facebook SMM services, ensuring rapid delivery and authentic engagement. We empower you to effortlessly amplify your reach, enhance visibility, and boost overall performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy Facebook Comments',
        description:
          "We provide real Facebook followers sourced from engaged users, ensuring sustained activity on your page. Our packages come with a drop protection policy, where any decrease in followers is quickly restored, securing your growth and boosting your page's authority.",
        icon: '/images/facebook-page-followers/facebook-page-followers-buy-facebook-comments-icon.webp',
        iconWidth: 39,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'h-[128.12%] w-[120.8%] object-cover -translate-x-[10.27%] -translate-y-[9.29%]',
      },
      {
        title: 'Buy Facebook Likes',
        description:
          'Pay with ease using your preferred local method. We accept bKash, Nagad, Upay, and Rocket, ensuring instant crediting of your TrendEvo balance. Enjoy hassle-free transactions without the need for credit cards or international payment gateways.',
        icon: '/images/facebook-page-followers/facebook-page-followers-buy-facebook-likes-icon.webp',
        iconWidth: 39,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'h-[123.7%] w-[126.45%] object-cover -translate-x-[13.23%] -translate-y-[11.91%]',
      },
    ],
    bottomRowFeatures: [],
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
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-and-reliable-delivery-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: '24/7 Support',
        description:
          'Our team is available around the clock to assist you in both Bangla and English. Whether you have questions, need guidance, or face any issues, TrendEvo’s 24/7 support ensures you get timely, personalized help to maximize your Instagram growth.',
        icon: '/images/service-smm-panel/facebook-smm-panel-24-7-support-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
    bottomRowFeatures: [
      {
        title: 'Authentic Engagement',
        description:
          'Gain real likes, comments, and followers that genuinely interact with your content. TrendEvo ensures meaningful engagement to help your Instagram profile grow naturally and build long-term audience trust.',
        icon: '/images/service-smm-panel/facebook-smm-panel-authentic-engagement-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Affordable Pricing',
        description:
          'Enjoy competitive rates designed for Bangladeshi businesses, allowing you to grow your Instagram presence effectively without straining your budget.',
        icon: '/images/service-smm-panel/facebook-smm-panel-affordable-pricing-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Customer-Focused Service',
        description:
          'Our dedicated team guides you at every step, providing personalized support and expert advice to help you achieve your Instagram growth goals with confidence.',
        icon: '/images/service-smm-panel/facebook-smm-panel-customer-focused-service-icon.png',
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
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-and-reliable-delivery-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: '24/7 Support',
        description:
          'Our team is available around the clock to assist you in both Bangla and English. Whether you have questions, need guidance, or face any issues, TrendEvo’s 24/7 support ensures you get timely, personalized help to maximize your Telegram growth.',
        icon: '/images/service-smm-panel/facebook-smm-panel-24-7-support-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
    bottomRowFeatures: [
      {
        title: 'Authentic Engagement',
        description:
          'Gain real members, views, and reactions that genuinely interact with your content. TrendEvo ensures meaningful engagement to help your Telegram channel grow naturally and build long-term audience trust.',
        icon: '/images/service-smm-panel/facebook-smm-panel-authentic-engagement-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Affordable Pricing',
        description:
          'Enjoy competitive rates designed for Bangladeshi businesses, allowing you to grow your Telegram presence effectively without straining your budget.',
        icon: '/images/service-smm-panel/facebook-smm-panel-affordable-pricing-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Customer-Focused Service',
        description:
          'Our dedicated team guides you at every step, providing personalized support and expert advice to help you achieve your Telegram growth goals with confidence.',
        icon: '/images/service-smm-panel/facebook-smm-panel-customer-focused-service-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
  },
  'youtube-smm-panel': {
    badge: 'Why TrendEvo',
    title: (
      <>
        Why TrendEvo Leads in{' '}
        <span className="text-gradient">YouTube SMM Services</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable YouTube SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'whitespace-normal max-w-[1200px] text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Fast & Reliable Delivery',
        description:
          'TrendEvo ensures that all your YouTube SMM orders are processed quickly, accurately, and securely. Our fast and reliable delivery system guarantees that subscribers, views, and likes reach your channel on time, helping you maintain consistent engagement and uninterrupted growth.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-and-reliable-delivery-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: '24/7 Support',
        description:
          'Our team is available around the clock to assist you in both Bangla and English. Whether you have questions, need guidance, or face any issues, TrendEvo’s 24/7 support ensures you get timely, personalized help to maximize your YouTube growth.',
        icon: '/images/service-smm-panel/facebook-smm-panel-24-7-support-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
    bottomRowFeatures: [
      {
        title: 'Authentic Engagement',
        description:
          'Gain real subscribers, views, and likes that genuinely interact with your content. TrendEvo ensures meaningful engagement to help your YouTube channel grow naturally and build long-term audience trust.',
        icon: '/images/service-smm-panel/facebook-smm-panel-authentic-engagement-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Affordable Pricing',
        description:
          'Enjoy competitive rates designed for Bangladeshi businesses, allowing you to grow your YouTube presence effectively without straining your budget.',
        icon: '/images/service-smm-panel/facebook-smm-panel-affordable-pricing-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Customer-Focused Service',
        description:
          'Our dedicated team guides you at every step, providing personalized support and expert advice to help you achieve your YouTube growth goals with confidence.',
        icon: '/images/service-smm-panel/facebook-smm-panel-customer-focused-service-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
  },
  'tiktok-smm-panel': {
    badge: 'Why TrendEvo',
    title: (
      <>
        Why TrendEvo Leads in{' '}
        <span className="text-gradient">TikTok SMM Services</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable TikTok SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'whitespace-normal max-w-[1200px] text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Fast & Reliable Delivery',
        description:
          'TrendEvo ensures that all your TikTok SMM orders are processed quickly, accurately, and securely. Our fast and reliable delivery system guarantees that followers, views, and likes reach your profile on time, helping you maintain consistent engagement and uninterrupted growth.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-and-reliable-delivery-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: '24/7 Support',
        description:
          'Our team is available around the clock to assist you in both Bangla and English. Whether you have questions, need guidance, or face any issues, TrendEvo’s 24/7 support ensures you get timely, personalized help to maximize your TikTok growth.',
        icon: '/images/service-smm-panel/facebook-smm-panel-24-7-support-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
    bottomRowFeatures: [
      {
        title: 'Authentic Engagement',
        description:
          'Gain real followers, views, and likes that genuinely interact with your content. TrendEvo ensures meaningful engagement to help your TikTok profile grow naturally and build long-term audience trust.',
        icon: '/images/service-smm-panel/facebook-smm-panel-authentic-engagement-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Affordable Pricing',
        description:
          'Enjoy competitive rates designed for Bangladeshi businesses, allowing you to grow your TikTok presence effectively without straining your budget.',
        icon: '/images/service-smm-panel/facebook-smm-panel-affordable-pricing-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Customer-Focused Service',
        description:
          'Our dedicated team guides you at every step, providing personalized support and expert advice to help you achieve your TikTok growth goals with confidence.',
        icon: '/images/service-smm-panel/facebook-smm-panel-customer-focused-service-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
  },
  'x-twitter-smm-panel': {
    badge: 'Why TrendEvo',
    title: (
      <>
        Why TrendEvo Leads in{' '}
        <span className="text-gradient">X (Twitter) SMM Services</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable X (Twitter) SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'whitespace-normal max-w-[1200px] text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Fast & Reliable Delivery',
        description:
          'TrendEvo ensures that all your X (Twitter) SMM orders are processed quickly, accurately, and securely. Our fast and reliable delivery system guarantees that followers, likes, and retweets reach your profile on time, helping you maintain consistent engagement and uninterrupted growth.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-and-reliable-delivery-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: '24/7 Support',
        description:
          'Our team is available around the clock to assist you in both Bangla and English. Whether you have questions, need guidance, or face any issues, TrendEvo’s 24/7 support ensures you get timely, personalized help to maximize your X (Twitter) growth.',
        icon: '/images/service-smm-panel/facebook-smm-panel-24-7-support-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
    bottomRowFeatures: [
      {
        title: 'Authentic Engagement',
        description:
          'Gain real followers, likes, and retweets that genuinely interact with your content. TrendEvo ensures meaningful engagement to help your X (Twitter) profile grow naturally and build long-term audience trust.',
        icon: '/images/service-smm-panel/facebook-smm-panel-authentic-engagement-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Affordable Pricing',
        description:
          'Enjoy competitive rates designed for Bangladeshi businesses, allowing you to grow your X (Twitter) presence effectively without straining your budget.',
        icon: '/images/service-smm-panel/facebook-smm-panel-affordable-pricing-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Customer-Focused Service',
        description:
          'Our dedicated team guides you at every step, providing personalized support and expert advice to help you achieve your X (Twitter) growth goals with confidence.',
        icon: '/images/service-smm-panel/facebook-smm-panel-customer-focused-service-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
  },
  'spotify-smm-panel': {
    badge: 'Why TrendEvo',
    title: (
      <>
        Why TrendEvo Leads in{' '}
        <span className="text-gradient">Spotify SMM Services</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable Spotify SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'whitespace-normal max-w-[1200px] text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Fast & Reliable Delivery',
        description:
          'TrendEvo ensures that all your Spotify SMM orders are processed quickly, accurately, and securely. Our fast and reliable delivery system guarantees that plays, followers, and saves reach your profile on time, helping you maintain consistent engagement and uninterrupted growth.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-and-reliable-delivery-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: '24/7 Support',
        description:
          'Our team is available around the clock to assist you in both Bangla and English. Whether you have questions, need guidance, or face any issues, TrendEvo’s 24/7 support ensures you get timely, personalized help to maximize your Spotify growth.',
        icon: '/images/service-smm-panel/facebook-smm-panel-24-7-support-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
    bottomRowFeatures: [
      {
        title: 'Authentic Engagement',
        description:
          'Gain real plays, followers, and saves that genuinely interact with your content. TrendEvo ensures meaningful engagement to help your Spotify profile grow naturally and build long-term audience trust.',
        icon: '/images/service-smm-panel/facebook-smm-panel-authentic-engagement-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Affordable Pricing',
        description:
          'Enjoy competitive rates designed for Bangladeshi businesses, allowing you to grow your Spotify presence effectively without straining your budget.',
        icon: '/images/service-smm-panel/facebook-smm-panel-affordable-pricing-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Customer-Focused Service',
        description:
          'Our dedicated team guides you at every step, providing personalized support and expert advice to help you achieve your Spotify growth goals with confidence.',
        icon: '/images/service-smm-panel/facebook-smm-panel-customer-focused-service-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
  },
  'soundcloud-smm-panel': {
    badge: 'Why TrendEvo',
    title: (
      <>
        Why TrendEvo Leads in{' '}
        <span className="text-gradient">SoundCloud SMM Services</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable SoundCloud SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'whitespace-normal max-w-[1200px] text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Fast & Reliable Delivery',
        description:
          'TrendEvo ensures that all your SoundCloud SMM orders are processed quickly, accurately, and securely. Our fast and reliable delivery system guarantees that plays, followers, and likes reach your profile on time, helping you maintain consistent engagement and uninterrupted growth.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-and-reliable-delivery-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: '24/7 Support',
        description:
          'Our team is available around the clock to assist you in both Bangla and English. Whether you have questions, need guidance, or face any issues, TrendEvo’s 24/7 support ensures you get timely, personalized help to maximize your SoundCloud growth.',
        icon: '/images/service-smm-panel/facebook-smm-panel-24-7-support-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
    bottomRowFeatures: [
      {
        title: 'Authentic Engagement',
        description:
          'Gain real plays, followers, and likes that genuinely interact with your content. TrendEvo ensures meaningful engagement to help your SoundCloud profile grow naturally and build long-term audience trust.',
        icon: '/images/service-smm-panel/facebook-smm-panel-authentic-engagement-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Affordable Pricing',
        description:
          'Enjoy competitive rates designed for Bangladeshi businesses, allowing you to grow your SoundCloud presence effectively without straining your budget.',
        icon: '/images/service-smm-panel/facebook-smm-panel-affordable-pricing-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Customer-Focused Service',
        description:
          'Our dedicated team guides you at every step, providing personalized support and expert advice to help you achieve your SoundCloud growth goals with confidence.',
        icon: '/images/service-smm-panel/facebook-smm-panel-customer-focused-service-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
  },
  'twitch-smm-panel': {
    badge: 'Why TrendEvo',
    title: (
      <>
        Why TrendEvo Leads in{' '}
        <span className="text-gradient">Twitch SMM Services</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable Twitch SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'whitespace-normal max-w-[1200px] text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Fast & Reliable Delivery',
        description:
          'TrendEvo ensures that all your Twitch SMM orders are processed quickly, accurately, and securely. Our fast and reliable delivery system guarantees that followers, views, and live viewers reach your channel on time, helping you maintain consistent engagement and uninterrupted growth.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-and-reliable-delivery-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: '24/7 Support',
        description:
          'Our team is available around the clock to assist you in both Bangla and English. Whether you have questions, need guidance, or face any issues, TrendEvo’s 24/7 support ensures you get timely, personalized help to maximize your Twitch growth.',
        icon: '/images/service-smm-panel/facebook-smm-panel-24-7-support-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
    bottomRowFeatures: [
      {
        title: 'Authentic Engagement',
        description:
          'Gain real followers, views, and live viewers that genuinely interact with your content. TrendEvo ensures meaningful engagement to help your Twitch channel grow naturally and build long-term audience trust.',
        icon: '/images/service-smm-panel/facebook-smm-panel-authentic-engagement-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Affordable Pricing',
        description:
          'Enjoy competitive rates designed for Bangladeshi businesses, allowing you to grow your Twitch presence effectively without straining your budget.',
        icon: '/images/service-smm-panel/facebook-smm-panel-affordable-pricing-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Customer-Focused Service',
        description:
          'Our dedicated team guides you at every step, providing personalized support and expert advice to help you achieve your Twitch growth goals with confidence.',
        icon: '/images/service-smm-panel/facebook-smm-panel-customer-focused-service-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
  },
  'snapchat-smm-panel': {
    badge: 'Why TrendEvo',
    title: (
      <>
        Why TrendEvo Leads in{' '}
        <span className="text-gradient">Snapchat SMM Services</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable Snapchat SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'whitespace-normal max-w-[1200px] text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Fast & Reliable Delivery',
        description:
          'TrendEvo ensures that all your Snapchat SMM orders are processed quickly, accurately, and securely. Our fast and reliable delivery system guarantees that followers, views, and story views reach your profile on time, helping you maintain consistent engagement and uninterrupted growth.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-and-reliable-delivery-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: '24/7 Support',
        description:
          'Our team is available around the clock to assist you in both Bangla and English. Whether you have questions, need guidance, or face any issues, TrendEvo’s 24/7 support ensures you get timely, personalized help to maximize your Snapchat growth.',
        icon: '/images/service-smm-panel/facebook-smm-panel-24-7-support-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
    bottomRowFeatures: [
      {
        title: 'Authentic Engagement',
        description:
          'Gain real followers, views, and story views that genuinely interact with your content. TrendEvo ensures meaningful engagement to help your Snapchat profile grow naturally and build long-term audience trust.',
        icon: '/images/service-smm-panel/facebook-smm-panel-authentic-engagement-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Affordable Pricing',
        description:
          'Enjoy competitive rates designed for Bangladeshi businesses, allowing you to grow your Snapchat presence effectively without straining your budget.',
        icon: '/images/service-smm-panel/facebook-smm-panel-affordable-pricing-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Customer-Focused Service',
        description:
          'Our dedicated team guides you at every step, providing personalized support and expert advice to help you achieve your Snapchat growth goals with confidence.',
        icon: '/images/service-smm-panel/facebook-smm-panel-customer-focused-service-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
  },
};

export function getServiceLeadingContent(slug: ServiceLeadingSlug): ServiceLeadingContent {
  return serviceLeadingContent[slug];
}
