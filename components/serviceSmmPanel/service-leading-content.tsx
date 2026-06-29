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
  | 'facebook-page-likes'
  | 'facebook-page-likes-related-services'
  | 'facebook-page-comments'
  | 'facebook-page-comments-related-services'
  | 'instagram-comments'
  | 'instagram-comments-related-services'
  | 'instagram-likes'
  | 'instagram-likes-related-services'
  | 'instagram-followers'
  | 'instagram-followers-related-services'
  | 'instagram-views'
  | 'instagram-views-related-services'
  | 'instagram-shares'
  | 'instagram-shares-related-services'
  | 'instagram-auto-likes'
  | 'instagram-auto-likes-related-services'
  | 'instagram-story-views'
  | 'instagram-story-views-related-services'
  | 'instagram-smm-panel'
  | 'youtube-subscribers'
  | 'youtube-subscribers-related-services'
  | 'youtube-views'
  | 'youtube-views-related-services'
  | 'youtube-comments'
  | 'youtube-comments-related-services'
  | 'youtube-likes'
  | 'youtube-likes-related-services'
  | 'telegram-smm-panel'
  | 'youtube-smm-panel'
  | 'tiktok-followers'
  | 'tiktok-followers-related-services'
  | 'tiktok-likes'
  | 'tiktok-likes-related-services'
  | 'tiktok-views'
  | 'tiktok-views-related-services'
  | 'tiktok-smm-panel'
  | 'twitter-followers'
  | 'twitter-followers-related-services'
  | 'twitter-likes'
  | 'twitter-likes-related-services'
  | 'x-twitter-smm-panel'
  | 'linkedin-followers'
  | 'linkedin-followers-related-services'
  | 'linkedin-likes'
  | 'linkedin-likes-related-services'
  | 'spotify-plays'
  | 'spotify-plays-related-services'
  | 'spotify-followers'
  | 'spotify-followers-related-services'
  | 'spotify-monthly-listeners'
  | 'spotify-monthly-listeners-related-services'
  | 'spotify-smm-panel'
  | 'telegram-members'
  | 'telegram-members-related-services'
  | 'snapchat-followers'
  | 'snapchat-followers-related-services'
  | 'soundcloud-followers'
  | 'soundcloud-followers-related-services'
  | 'soundcloud-plays'
  | 'soundcloud-plays-related-services'
  | 'discord-members'
  | 'discord-members-related-services'
  | 'discord-account'
  | 'discord-account-related-services'
  | 'twitch-followers'
  | 'twitch-followers-related-services'
  | 'twitch-viewers'
  | 'twitch-viewers-related-services'
  | 'kick-followers'
  | 'kick-followers-related-services'
  | 'kick-viewers'
  | 'kick-viewers-related-services'
  | 'reddit-upvotes'
  | 'reddit-upvotes-related-services'
  | 'reddit-account'
  | 'reddit-account-related-services'
  | 'quora-followers'
  | 'quora-followers-related-services'
  | 'quora-upvotes'
  | 'quora-upvotes-related-services'
  | 'vimeo-followers'
  | 'vimeo-followers-related-services'
  | 'threads-followers'
  | 'threads-followers-related-services'
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
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          "We price in your money, so it's easy on wallets. Budding bosses, freelancers, students, and creators, take note. Big wins don't need big money spent. Start small to test, then go big later.",
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          "Our team's here for you all day, every day. Reach out on WhatsApp or email anytime. Got questions on your order or need package advice? Expect quick help in your language.",
        icon: '/images/subservice/shared/24-7-support-icon.webp',
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
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
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
          '/images/subservice/shared/real-followers-from-quality-sources-decoration.png',
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
        icon: '/images/subservice/shared/buy-facebook-comments-icon.webp',
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
        icon: '/images/subservice/shared/buy-facebook-page-likes-icon.webp',
        iconWidth: 39,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'h-[123.7%] w-[126.45%] object-cover -translate-x-[13.23%] -translate-y-[11.91%]',
      },
    ],
    bottomRowFeatures: [],
  },
  'facebook-page-likes': {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: (
      <>
        Why Choose TrendEvo To Buy{' '}
        <span className="text-gradient">Facebook Page Likes</span>
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
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. Likes can roll in slowly, like real growth. Or, they can surge fast, boosting your page now.",
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          "We price in your money, so it's easy on wallets. Budding bosses, freelancers, students, and creators, take note. Big wins don't need big money spent. Start small to test, then go big later.",
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          "Our team's here for you all day, every day. Reach out on WhatsApp or email anytime. Got questions on your order or need package advice? Expect quick help in your language.",
        icon: '/images/subservice/shared/24-7-support-icon.webp',
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
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Real Likes from Quality Sources',
        description:
          "We deliver genuine Facebook page likes from active profiles, ensuring lasting engagement. Our packages include a refill guarantee, so any drops are promptly replenished, maintaining your like count and enhancing your page's credibility.",
        iconFrameSrc:
          '/images/subservice/shared/real-followers-from-quality-sources-decoration.png',
      },
    ],
  },
  'facebook-page-likes-related-services': {
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
        title: 'Buy Facebook Followers',
        description:
          "We provide real Facebook followers sourced from engaged users, ensuring sustained activity on your page. Our packages come with a drop protection policy, where any decrease in followers is quickly restored, securing your growth and boosting your page's authority.",
        iconFrameSrc:
          '/images/subservice/shared/real-followers-from-quality-sources-decoration.png',
      },
      {
        title: 'Buy Facebook Comments',
        description:
          'Pay with ease using your preferred local method. We accept bKash, Nagad, Upay, and Rocket, ensuring instant crediting of your TrendEvo balance. Enjoy hassle-free transactions without the need for credit cards or international payment gateways.',
        icon: '/images/subservice/shared/buy-facebook-comments-icon.webp',
        iconWidth: 39,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'h-[123.7%] w-[126.45%] object-cover -translate-x-[13.23%] -translate-y-[11.91%]',
      },
    ],
    bottomRowFeatures: [],
  },
  'facebook-page-comments': {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: (
      <>
        Why Choose TrendEvo To Buy{' '}
        <span className="text-gradient">Facebook Page Comments</span>
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
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. Comments can roll in slowly, like real growth. Or, they can surge fast, boosting your page now.",
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          "We price in your money, so it's easy on wallets. Budding bosses, freelancers, students, and creators, take note. Big wins don't need big money spent. Start small to test, then go big later.",
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          "Our team's here for you all day, every day. Reach out on WhatsApp or email anytime. Got questions on your order or need package advice? Expect quick help in your language.",
        icon: '/images/subservice/shared/24-7-support-icon.webp',
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
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Real Comments from Quality Sources',
        description:
          "We deliver genuine Facebook page comments from active profiles, ensuring lasting engagement. Our packages include a refill guarantee, so any drops are promptly replenished, maintaining your comment count and enhancing your page's credibility.",
        icon: '/images/subservice/shared/buy-facebook-comments-icon.webp',
        iconWidth: 39,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'h-[128.12%] w-[120.8%] object-cover -translate-x-[10.27%] -translate-y-[9.29%]',
      },
    ],
  },
  'facebook-page-comments-related-services': {
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
        title: 'Buy Facebook Followers',
        description:
          "We provide real Facebook followers sourced from engaged users, ensuring sustained activity on your page. Our packages come with a drop protection policy, where any decrease in followers is quickly restored, securing your growth and boosting your page's authority.",
        iconFrameSrc:
          '/images/subservice/shared/real-followers-from-quality-sources-decoration.png',
      },
      {
        title: 'Buy Facebook Likes',
        description:
          'Pay with ease using your preferred local method. We accept bKash, Nagad, Upay, and Rocket, ensuring instant crediting of your TrendEvo balance. Enjoy hassle-free transactions without the need for credit cards or international payment gateways.',
        icon: '/images/subservice/shared/buy-facebook-page-likes-icon.webp',
        iconWidth: 39,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'h-[123.7%] w-[126.45%] object-cover -translate-x-[13.23%] -translate-y-[11.91%]',
      },
    ],
    bottomRowFeatures: [],
  },
  'instagram-comments': {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: (
      <>
        Why Choose TrendEvo To Buy{' '}
        <span className="text-gradient">Instagram Comments</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable Instagram SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. Comments can roll in slowly, like real growth. Or, they can surge fast, boosting your post now.",
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          "We price in your money, so it's easy on wallets. Budding bosses, freelancers, students, and creators, take note. Big wins don't need big money spent. Start small to test, then go big later.",
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          "Our team's here for you all day, every day. Reach out on WhatsApp or email anytime. Got questions on your order or need package advice? Expect quick help in your language.",
        icon: '/images/subservice/shared/24-7-support-icon.webp',
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
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Real Comments from Quality Sources',
        description:
          "We deliver genuine Instagram comments from active profiles, ensuring lasting engagement. Our packages include a refill guarantee, so any drops are promptly replenished, maintaining your comment count and enhancing your post's credibility.",
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-react-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
    ],
  },
  'instagram-comments-related-services': {
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
      'TrendEvo offers top-tier Instagram SMM services, ensuring rapid delivery and authentic engagement. We empower you to effortlessly amplify your reach, enhance visibility, and boost overall performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy Instagram Followers',
        description:
          "We provide real Instagram followers sourced from engaged users, ensuring sustained activity on your profile. Our packages come with a drop protection policy, where any decrease in followers is quickly restored, securing your growth and boosting your profile's authority.",
        icon: '/images/our-services/platforms/instagram-platform-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: 'Buy Instagram Likes',
        description:
          'Increase likes on your posts and reels to improve visibility and social proof. TrendEvo offers affordable packages with fast delivery so your content gets the engagement it deserves.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
      {
        title: 'Instagram SMM Panel',
        description:
          'Access all Instagram growth services from one dashboard — followers, likes, views, comments, and more. Manage orders, track delivery, and scale your presence with TrendEvo.',
        icon: '/images/services/services-instagram-smm-panel-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
    ],
    bottomRowFeatures: [],
  },
  'instagram-likes': {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: (
      <>
        Why Choose TrendEvo To Buy{' '}
        <span className="text-gradient">Instagram Likes</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable Instagram SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. Likes can roll in slowly, like real growth. Or, they can surge fast, boosting your profile now.",
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          "We price in your money, so it's easy on wallets. Budding bosses, freelancers, students, and creators, take note. Big wins don't need big money spent. Start small to test, then go big later.",
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          "Our team's here for you all day, every day. Reach out on WhatsApp or email anytime. Got questions on your order or need package advice? Expect quick help in your language.",
        icon: '/images/subservice/shared/24-7-support-icon.webp',
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
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Real Likes from Quality Sources',
        description:
          "We deliver genuine Instagram likes from active profiles, ensuring lasting engagement. Our packages include a refill guarantee, so any drops are promptly replenished, maintaining your like count and enhancing your post's credibility.",
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
    ],
  },
  'instagram-likes-related-services': {
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
      'TrendEvo offers top-tier Instagram SMM services, ensuring rapid delivery and authentic engagement. We empower you to effortlessly amplify your reach, enhance visibility, and boost overall performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy Instagram Followers',
        description:
          'We provide real Instagram followers sourced from engaged users, ensuring sustained activity on your profile. Our packages come with a drop protection policy to secure your growth.',
        icon: '/images/our-services/platforms/instagram-platform-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: 'Buy Instagram Views',
        description:
          'Boost views on your Instagram posts and reels to improve reach and algorithm performance. TrendEvo delivers fast, affordable view packages for creators and businesses.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
      {
        title: 'Buy Instagram Shares',
        description:
          'Get more shares on your posts to expand your reach beyond your current follower base and attract new audiences organically.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-group-member-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      }
    ],
    bottomRowFeatures: [],
  },
  'instagram-followers': {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: (
      <>
        Why Choose TrendEvo To Buy{' '}
        <span className="text-gradient">Instagram Followers</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable Instagram SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. Followers can roll in slowly, like real growth. Or, they can surge fast, boosting your profile now.",
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          "We price in your money, so it's easy on wallets. Budding bosses, freelancers, students, and creators, take note. Big wins don't need big money spent. Start small to test, then go big later.",
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          "Our team's here for you all day, every day. Reach out on WhatsApp or email anytime. Got questions on your order or need package advice? Expect quick help in your language.",
        icon: '/images/subservice/shared/24-7-support-icon.webp',
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
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Real Followers from Quality Sources',
        description:
          "We deliver genuine Instagram followers from active profiles, ensuring lasting growth. Our packages include a refill guarantee, so any drops are promptly replenished, maintaining your follower count and enhancing your profile's credibility.",
        icon: '/images/our-services/platforms/instagram-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
    ],
  },
  'instagram-followers-related-services': {
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
      'TrendEvo offers top-tier Instagram SMM services, ensuring rapid delivery and authentic engagement. We empower you to effortlessly amplify your reach, enhance visibility, and boost overall performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy Instagram Likes',
        description:
          'Increase likes on your posts and reels to improve visibility and social proof. TrendEvo offers affordable packages with fast delivery so your content gets the engagement it deserves.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
      {
        title: 'Buy Instagram Views',
        description:
          'Boost views on your Instagram posts and reels to improve reach and algorithm performance. TrendEvo delivers fast, affordable view packages for creators and businesses.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
      {
        title: 'Buy Instagram Shares',
        description:
          'Get more shares on your posts to expand your reach beyond your current follower base and attract new audiences organically.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-group-member-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      }
    ],
    bottomRowFeatures: [],
  },
  'instagram-views': {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: (
      <>
        Why Choose TrendEvo To Buy{' '}
        <span className="text-gradient">Instagram Views</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable Instagram SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. Views can roll in slowly, like real growth. Or, they can surge fast, boosting your profile now.",
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          "We price in your money, so it's easy on wallets. Budding bosses, freelancers, students, and creators, take note. Big wins don't need big money spent. Start small to test, then go big later.",
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          "Our team's here for you all day, every day. Reach out on WhatsApp or email anytime. Got questions on your order or need package advice? Expect quick help in your language.",
        icon: '/images/subservice/shared/24-7-support-icon.webp',
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
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Real Views from Quality Sources',
        description:
          "We deliver genuine Instagram views from active users, ensuring lasting reach. Our packages help boost your content visibility and enhance your post's credibility across posts and reels.",
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
    ],
  },
  'instagram-views-related-services': {
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
      'TrendEvo offers top-tier Instagram SMM services, ensuring rapid delivery and authentic engagement. We empower you to effortlessly amplify your reach, enhance visibility, and boost overall performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy Instagram Likes',
        description:
          'Increase likes on your posts and reels to improve visibility and social proof. TrendEvo offers affordable packages with fast delivery so your content gets the engagement it deserves.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
      {
        title: 'Buy Instagram Followers',
        description:
          'We provide real Instagram followers sourced from engaged users, ensuring sustained activity on your profile. Our packages come with a drop protection policy to secure your growth.',
        icon: '/images/our-services/platforms/instagram-platform-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: 'Buy Instagram Shares',
        description:
          'Get more shares on your posts to expand your reach beyond your current follower base and attract new audiences organically.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-group-member-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      }
    ],
    bottomRowFeatures: [],
  },
  'instagram-shares': {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: (
      <>
        Why Choose TrendEvo To Buy{' '}
        <span className="text-gradient">Instagram Shares</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable Instagram SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. Shares can roll in slowly, like real growth. Or, they can surge fast, boosting your profile now.",
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          "We price in your money, so it's easy on wallets. Budding bosses, freelancers, students, and creators, take note. Big wins don't need big money spent. Start small to test, then go big later.",
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          "Our team's here for you all day, every day. Reach out on WhatsApp or email anytime. Got questions on your order or need package advice? Expect quick help in your language.",
        icon: '/images/subservice/shared/24-7-support-icon.webp',
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
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Real Shares from Quality Sources',
        description:
          "We deliver genuine Instagram shares from active profiles, helping your content reach new audiences. Our packages boost visibility and enhance your post's reach beyond your current followers.",
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-group-member-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
    ],
  },
  'instagram-shares-related-services': {
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
      'TrendEvo offers top-tier Instagram SMM services, ensuring rapid delivery and authentic engagement. We empower you to effortlessly amplify your reach, enhance visibility, and boost overall performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy Instagram Likes',
        description:
          'Increase likes on your posts and reels to improve visibility and social proof. TrendEvo offers affordable packages with fast delivery so your content gets the engagement it deserves.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
      {
        title: 'Buy Instagram Followers',
        description:
          'We provide real Instagram followers sourced from engaged users, ensuring sustained activity on your profile. Our packages come with a drop protection policy to secure your growth.',
        icon: '/images/our-services/platforms/instagram-platform-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: 'Buy Instagram Views',
        description:
          'Boost views on your Instagram posts and reels to improve reach and algorithm performance. TrendEvo delivers fast, affordable view packages for creators and businesses.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      }
    ],
    bottomRowFeatures: [],
  },
  'instagram-auto-likes': {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: (
      <>
        Why Choose TrendEvo To Buy{' '}
        <span className="text-gradient">Instagram Auto-Likes</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable Instagram SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. Auto-Likes can roll in slowly, like real growth. Or, they can surge fast, boosting your profile now.",
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          "We price in your money, so it's easy on wallets. Budding bosses, freelancers, students, and creators, take note. Big wins don't need big money spent. Start small to test, then go big later.",
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          "Our team's here for you all day, every day. Reach out on WhatsApp or email anytime. Got questions on your order or need package advice? Expect quick help in your language.",
        icon: '/images/subservice/shared/24-7-support-icon.webp',
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
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Automatic Likes on New Posts',
        description:
          "Set up auto-likes once and let TrendEvo automatically deliver likes to your new Instagram posts. Enjoy consistent engagement without placing a separate order every time you publish.",
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
    ],
  },
  'instagram-auto-likes-related-services': {
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
      'TrendEvo offers top-tier Instagram SMM services, ensuring rapid delivery and authentic engagement. We empower you to effortlessly amplify your reach, enhance visibility, and boost overall performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy Instagram Likes',
        description:
          'Increase likes on your posts and reels to improve visibility and social proof. TrendEvo offers affordable packages with fast delivery so your content gets the engagement it deserves.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
      {
        title: 'Buy Instagram Followers',
        description:
          'We provide real Instagram followers sourced from engaged users, ensuring sustained activity on your profile. Our packages come with a drop protection policy to secure your growth.',
        icon: '/images/our-services/platforms/instagram-platform-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: 'Buy Instagram Views',
        description:
          'Boost views on your Instagram posts and reels to improve reach and algorithm performance. TrendEvo delivers fast, affordable view packages for creators and businesses.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      }
    ],
    bottomRowFeatures: [],
  },
  'instagram-story-views': {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: (
      <>
        Why Choose TrendEvo To Buy{' '}
        <span className="text-gradient">Instagram Story Views</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable Instagram SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. Story Views can roll in slowly, like real growth. Or, they can surge fast, boosting your profile now.",
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          "We price in your money, so it's easy on wallets. Budding bosses, freelancers, students, and creators, take note. Big wins don't need big money spent. Start small to test, then go big later.",
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          "Our team's here for you all day, every day. Reach out on WhatsApp or email anytime. Got questions on your order or need package advice? Expect quick help in your language.",
        icon: '/images/subservice/shared/24-7-support-icon.webp',
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
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Real Story Views from Quality Sources',
        description:
          "We deliver genuine Instagram story views from active users, helping your stories reach more people. Boost visibility and keep your audience engaged with every story you post.",
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-story-views-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
    ],
  },
  'instagram-story-views-related-services': {
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
      'TrendEvo offers top-tier Instagram SMM services, ensuring rapid delivery and authentic engagement. We empower you to effortlessly amplify your reach, enhance visibility, and boost overall performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy Instagram Likes',
        description:
          'Increase likes on your posts and reels to improve visibility and social proof. TrendEvo offers affordable packages with fast delivery so your content gets the engagement it deserves.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
      {
        title: 'Buy Instagram Followers',
        description:
          'We provide real Instagram followers sourced from engaged users, ensuring sustained activity on your profile. Our packages come with a drop protection policy to secure your growth.',
        icon: '/images/our-services/platforms/instagram-platform-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: 'Buy Instagram Views',
        description:
          'Boost views on your Instagram posts and reels to improve reach and algorithm performance. TrendEvo delivers fast, affordable view packages for creators and businesses.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      }
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
  'youtube-subscribers': {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: (
      <>
        Why Choose TrendEvo To Buy{' '}
        <span className="text-gradient">YouTube Subscribers</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable YouTube SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. Subscribers can roll in slowly, like real growth. Or, they can surge fast, boosting your channel now.",
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          "We price in your money, so it's easy on wallets. Budding bosses, freelancers, students, and creators, take note. Big wins don't need big money spent. Start small to test, then go big later.",
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          "Our team's here for you all day, every day. Reach out on WhatsApp or email anytime. Got questions on your order or need package advice? Expect quick help in your language.",
        icon: '/images/subservice/shared/24-7-support-icon.webp',
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
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Real Subscribers from Quality Sources',
        description:
          "We deliver genuine YouTube subscribers from active users, ensuring lasting channel growth. Our packages include a refill guarantee, so any drops are promptly replenished, maintaining your subscriber count and enhancing your channel's credibility.",
        icon: '/images/our-services/platforms/youtube-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
    ],
  },
  'youtube-subscribers-related-services': {
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
      'TrendEvo offers top-tier YouTube SMM services, ensuring rapid delivery and authentic engagement. We empower you to effortlessly amplify your reach, enhance visibility, and boost overall performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy YouTube Views',
        description:
          'Boost views on your YouTube videos to improve reach and ranking. TrendEvo delivers fast, affordable view packages for creators and businesses.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
      {
        title: 'Buy YouTube Comments',
        description:
          'Get more comments on your videos to spark discussion and improve engagement signals for the YouTube algorithm.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-react-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
      {
        title: 'Buy YouTube Likes',
        description:
          'Increase likes on your YouTube videos to improve social proof and engagement rate. TrendEvo offers affordable packages with fast delivery.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      }
    ],
    bottomRowFeatures: [],
  },
  'youtube-views': {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: (
      <>
        Why Choose TrendEvo To Buy{' '}
        <span className="text-gradient">YouTube Views</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable YouTube SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. Views can roll in slowly, like real growth. Or, they can surge fast, boosting your video now.",
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          "We price in your money, so it's easy on wallets. Budding bosses, freelancers, students, and creators, take note. Big wins don't need big money spent. Start small to test, then go big later.",
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          "Our team's here for you all day, every day. Reach out on WhatsApp or email anytime. Got questions on your order or need package advice? Expect quick help in your language.",
        icon: '/images/subservice/shared/24-7-support-icon.webp',
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
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Real Views from Quality Sources',
        description:
          "We deliver genuine YouTube views from active users, helping your videos rank better and reach more audiences. Our packages boost visibility and enhance your video's credibility on the platform.",
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
    ],
  },
  'youtube-views-related-services': {
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
      'TrendEvo offers top-tier YouTube SMM services, ensuring rapid delivery and authentic engagement. We empower you to effortlessly amplify your reach, enhance visibility, and boost overall performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy YouTube Subscribers',
        description:
          'Grow your YouTube channel with real subscribers. TrendEvo offers affordable packages with fast delivery to help you reach monetization and build authority faster.',
        icon: '/images/our-services/platforms/youtube-platform-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: 'Buy YouTube Comments',
        description:
          'Get more comments on your videos to spark discussion and improve engagement signals for the YouTube algorithm.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-react-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
      {
        title: 'Buy YouTube Likes',
        description:
          'Increase likes on your YouTube videos to improve social proof and engagement rate. TrendEvo offers affordable packages with fast delivery.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      }
    ],
    bottomRowFeatures: [],
  },
  'youtube-comments': {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: (
      <>
        Why Choose TrendEvo To Buy{' '}
        <span className="text-gradient">YouTube Comments</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable YouTube SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. Comments can roll in slowly, like real growth. Or, they can surge fast, boosting your video now.",
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          "We price in your money, so it's easy on wallets. Budding bosses, freelancers, students, and creators, take note. Big wins don't need big money spent. Start small to test, then go big later.",
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          "Our team's here for you all day, every day. Reach out on WhatsApp or email anytime. Got questions on your order or need package advice? Expect quick help in your language.",
        icon: '/images/subservice/shared/24-7-support-icon.webp',
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
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Real Comments from Quality Sources',
        description:
          "We deliver genuine YouTube comments from active users, sparking conversation on your videos. Our packages help boost engagement signals and enhance your video's social proof.",
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-react-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
    ],
  },
  'youtube-comments-related-services': {
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
      'TrendEvo offers top-tier YouTube SMM services, ensuring rapid delivery and authentic engagement. We empower you to effortlessly amplify your reach, enhance visibility, and boost overall performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy YouTube Subscribers',
        description:
          'Grow your YouTube channel with real subscribers. TrendEvo offers affordable packages with fast delivery to help you reach monetization and build authority faster.',
        icon: '/images/our-services/platforms/youtube-platform-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: 'Buy YouTube Views',
        description:
          'Boost views on your YouTube videos to improve reach and ranking. TrendEvo delivers fast, affordable view packages for creators and businesses.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
      {
        title: 'Buy YouTube Likes',
        description:
          'Increase likes on your YouTube videos to improve social proof and engagement rate. TrendEvo offers affordable packages with fast delivery.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      }
    ],
    bottomRowFeatures: [],
  },
  'youtube-likes': {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: (
      <>
        Why Choose TrendEvo To Buy{' '}
        <span className="text-gradient">YouTube Likes</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable YouTube SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. Likes can roll in slowly, like real growth. Or, they can surge fast, boosting your video now.",
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          "We price in your money, so it's easy on wallets. Budding bosses, freelancers, students, and creators, take note. Big wins don't need big money spent. Start small to test, then go big later.",
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          "Our team's here for you all day, every day. Reach out on WhatsApp or email anytime. Got questions on your order or need package advice? Expect quick help in your language.",
        icon: '/images/subservice/shared/24-7-support-icon.webp',
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
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Real Likes from Quality Sources',
        description:
          "We deliver genuine YouTube likes from active users, improving your video's engagement rate. Our packages include a refill guarantee to help maintain your like count and video credibility.",
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
    ],
  },
  'youtube-likes-related-services': {
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
      'TrendEvo offers top-tier YouTube SMM services, ensuring rapid delivery and authentic engagement. We empower you to effortlessly amplify your reach, enhance visibility, and boost overall performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy YouTube Subscribers',
        description:
          'Grow your YouTube channel with real subscribers. TrendEvo offers affordable packages with fast delivery to help you reach monetization and build authority faster.',
        icon: '/images/our-services/platforms/youtube-platform-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: 'Buy YouTube Views',
        description:
          'Boost views on your YouTube videos to improve reach and ranking. TrendEvo delivers fast, affordable view packages for creators and businesses.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
      {
        title: 'Buy YouTube Comments',
        description:
          'Get more comments on your videos to spark discussion and improve engagement signals for the YouTube algorithm.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-react-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      }
    ],
    bottomRowFeatures: [],
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
  'tiktok-followers': {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: (
      <>
        Why Choose TrendEvo To Buy{' '}
        <span className="text-gradient">TikTok Followers</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable TikTok SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. Followers can roll in slowly, like real growth. Or, they can surge fast, boosting your profile now.",
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          "We price in your money, so it's easy on wallets. Budding bosses, freelancers, students, and creators, take note. Big wins don't need big money spent. Start small to test, then go big later.",
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          "Our team's here for you all day, every day. Reach out on WhatsApp or email anytime. Got questions on your order or need package advice? Expect quick help in your language.",
        icon: '/images/subservice/shared/24-7-support-icon.webp',
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
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Real Followers from Quality Sources',
        description:
          "We deliver genuine TikTok followers from active users, ensuring lasting growth. Our packages include a refill guarantee, so any drops are promptly replenished, maintaining your follower count and enhancing your profile's credibility.",
        icon: '/images/our-services/platforms/tiktok-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
    ],
  },
  'tiktok-followers-related-services': {
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
      'TrendEvo offers top-tier TikTok SMM services, ensuring rapid delivery and authentic engagement. We empower you to effortlessly amplify your reach, enhance visibility, and boost overall performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy TikTok Likes',
        description:
          'Increase likes on your TikTok videos to improve visibility and social proof. TrendEvo offers affordable packages with fast delivery.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
      {
        title: 'Buy TikTok Views',
        description:
          'Boost views on your TikTok videos to improve reach and algorithm performance. TrendEvo delivers fast, affordable view packages for creators.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
      {
        title: 'TikTok SMM Panel',
        description:
          'Access all TikTok growth services from one dashboard — followers, likes, views, and more. Manage orders, track delivery, and scale your presence with TrendEvo.',
        icon: '/images/services/services-tiktok-smm-panel-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      }
    ],
    bottomRowFeatures: [],
  },
  'tiktok-likes': {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: (
      <>
        Why Choose TrendEvo To Buy{' '}
        <span className="text-gradient">TikTok Likes</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable TikTok SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. Likes can roll in slowly, like real growth. Or, they can surge fast, boosting your video now.",
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          "We price in your money, so it's easy on wallets. Budding bosses, freelancers, students, and creators, take note. Big wins don't need big money spent. Start small to test, then go big later.",
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          "Our team's here for you all day, every day. Reach out on WhatsApp or email anytime. Got questions on your order or need package advice? Expect quick help in your language.",
        icon: '/images/subservice/shared/24-7-support-icon.webp',
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
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Real Likes from Quality Sources',
        description:
          "We deliver genuine TikTok likes from active users, improving your video's engagement rate. Our packages include a refill guarantee to help maintain your like count and video credibility.",
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
    ],
  },
  'tiktok-likes-related-services': {
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
      'TrendEvo offers top-tier TikTok SMM services, ensuring rapid delivery and authentic engagement. We empower you to effortlessly amplify your reach, enhance visibility, and boost overall performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy TikTok Followers',
        description:
          'Grow your TikTok profile with real followers. TrendEvo offers affordable packages with fast delivery to help you build authority and reach more people.',
        icon: '/images/our-services/platforms/tiktok-platform-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: 'Buy TikTok Views',
        description:
          'Boost views on your TikTok videos to improve reach and algorithm performance. TrendEvo delivers fast, affordable view packages for creators.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
      {
        title: 'TikTok SMM Panel',
        description:
          'Access all TikTok growth services from one dashboard — followers, likes, views, and more. Manage orders, track delivery, and scale your presence with TrendEvo.',
        icon: '/images/services/services-tiktok-smm-panel-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      }
    ],
    bottomRowFeatures: [],
  },
  'tiktok-views': {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: (
      <>
        Why Choose TrendEvo To Buy{' '}
        <span className="text-gradient">TikTok Views</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable TikTok SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. Views can roll in slowly, like real growth. Or, they can surge fast, boosting your video now.",
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          "We price in your money, so it's easy on wallets. Budding bosses, freelancers, students, and creators, take note. Big wins don't need big money spent. Start small to test, then go big later.",
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          "Our team's here for you all day, every day. Reach out on WhatsApp or email anytime. Got questions on your order or need package advice? Expect quick help in your language.",
        icon: '/images/subservice/shared/24-7-support-icon.webp',
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
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Real Views from Quality Sources',
        description:
          "We deliver genuine TikTok views from active users, helping your videos rank better and reach more audiences. Our packages boost visibility and enhance your video's credibility on the platform.",
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
    ],
  },
  'tiktok-views-related-services': {
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
      'TrendEvo offers top-tier TikTok SMM services, ensuring rapid delivery and authentic engagement. We empower you to effortlessly amplify your reach, enhance visibility, and boost overall performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy TikTok Followers',
        description:
          'Grow your TikTok profile with real followers. TrendEvo offers affordable packages with fast delivery to help you build authority and reach more people.',
        icon: '/images/our-services/platforms/tiktok-platform-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: 'Buy TikTok Likes',
        description:
          'Increase likes on your TikTok videos to improve visibility and social proof. TrendEvo offers affordable packages with fast delivery.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
      {
        title: 'TikTok SMM Panel',
        description:
          'Access all TikTok growth services from one dashboard — followers, likes, views, and more. Manage orders, track delivery, and scale your presence with TrendEvo.',
        icon: '/images/services/services-tiktok-smm-panel-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      }
    ],
    bottomRowFeatures: [],
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
  'twitter-followers': {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: (
      <>
        Why Choose TrendEvo To Buy{' '}
        <span className="text-gradient">Twitter Followers</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable Twitter SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. Followers can roll in slowly, like real growth. Or, they can surge fast, boosting your profile now.",
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          "We price in your money, so it's easy on wallets. Budding bosses, freelancers, students, and creators, take note. Big wins don't need big money spent. Start small to test, then go big later.",
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          "Our team's here for you all day, every day. Reach out on WhatsApp or email anytime. Got questions on your order or need package advice? Expect quick help in your language.",
        icon: '/images/subservice/shared/24-7-support-icon.webp',
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
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Real Followers from Quality Sources',
        description:
          "We deliver genuine Twitter followers from active profiles, ensuring lasting growth. Our packages include a refill guarantee, so any drops are promptly replenished, maintaining your follower count and enhancing your profile's credibility.",
        icon: '/images/our-services/platforms/x-twitter-platform-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
    ],
  },
  'twitter-followers-related-services': {
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
      'TrendEvo offers top-tier Twitter SMM services, ensuring rapid delivery and authentic engagement. We empower you to effortlessly amplify your reach, enhance visibility, and boost overall performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy Twitter Likes',
        description:
          'Increase likes on your Twitter posts to improve visibility and social proof. TrendEvo offers affordable packages with fast delivery.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-like-icon.png',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: 'X-Twitter SMM Panel',
        description:
          'Access all Twitter growth services from one dashboard — followers, likes, retweets, and more. Manage orders, track delivery, and scale your presence with TrendEvo.',
        icon: '/images/services/services-x-twitter-smm-panel-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      }
    ],
    bottomRowFeatures: [],
  },
  'twitter-likes': {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: (
      <>
        Why Choose TrendEvo To Buy{' '}
        <span className="text-gradient">Twitter Likes</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable Twitter SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. Likes can roll in slowly, like real growth. Or, they can surge fast, boosting your post now.",
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          "We price in your money, so it's easy on wallets. Budding bosses, freelancers, students, and creators, take note. Big wins don't need big money spent. Start small to test, then go big later.",
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          "Our team's here for you all day, every day. Reach out on WhatsApp or email anytime. Got questions on your order or need package advice? Expect quick help in your language.",
        icon: '/images/subservice/shared/24-7-support-icon.webp',
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
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Real Likes from Quality Sources',
        description:
          "We deliver genuine Twitter likes from active users, improving your post's engagement rate. Our packages include a refill guarantee to help maintain your like count and post credibility.",
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-like-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
    ],
  },
  'twitter-likes-related-services': {
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
      'TrendEvo offers top-tier Twitter SMM services, ensuring rapid delivery and authentic engagement. We empower you to effortlessly amplify your reach, enhance visibility, and boost overall performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy Twitter Followers',
        description:
          'Grow your Twitter profile with real followers. TrendEvo offers affordable packages with fast delivery to help you build authority and reach more people.',
        icon: '/images/our-services/platforms/x-twitter-platform-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
      {
        title: 'X-Twitter SMM Panel',
        description:
          'Access all Twitter growth services from one dashboard — followers, likes, retweets, and more. Manage orders, track delivery, and scale your presence with TrendEvo.',
        icon: '/images/services/services-x-twitter-smm-panel-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      }
    ],
    bottomRowFeatures: [],
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
  'linkedin-followers': {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: (
      <>
        Why Choose TrendEvo To Buy{' '}
        <span className="text-gradient">LinkedIn Followers</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable LinkedIn SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. Followers can roll in slowly, like real growth. Or, they can surge fast, boosting your profile now.",
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          "We price in your money, so it's easy on wallets. Budding bosses, freelancers, students, and creators, take note. Big wins don't need big money spent. Start small to test, then go big later.",
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          "Our team's here for you all day, every day. Reach out on WhatsApp or email anytime. Got questions on your order or need package advice? Expect quick help in your language.",
        icon: '/images/subservice/shared/24-7-support-icon.webp',
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
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Real Followers from Quality Sources',
        description:
          "We deliver genuine LinkedIn followers from active professionals, ensuring lasting growth. Our packages include a refill guarantee, so any drops are promptly replenished, maintaining your follower count and enhancing your profile's credibility.",
        icon: '/images/our-services/platforms/linkedin-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
    ],
  },
  'linkedin-followers-related-services': {
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
      'TrendEvo offers top-tier LinkedIn SMM services, ensuring rapid delivery and authentic engagement. We empower you to effortlessly amplify your reach, enhance visibility, and boost overall performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy LinkedIn Likes',
        description:
          'Increase likes on your LinkedIn posts to improve visibility and social proof. TrendEvo offers affordable packages with fast delivery for professionals and businesses.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
      {
        title: 'LinkedIn Engagement Packages',
        description:
          'Combine followers, likes, and connections to build a stronger professional presence. TrendEvo helps you grow your LinkedIn profile with affordable, reliable SMM services.',
        icon: '/images/platform-marquee/platform-marquee-linkedin-platform-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      }
    ],
    bottomRowFeatures: [],
  },
  'linkedin-likes': {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: (
      <>
        Why Choose TrendEvo To Buy{' '}
        <span className="text-gradient">LinkedIn Likes</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable LinkedIn SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. Likes can roll in slowly, like real growth. Or, they can surge fast, boosting your post now.",
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          "We price in your money, so it's easy on wallets. Budding bosses, freelancers, students, and creators, take note. Big wins don't need big money spent. Start small to test, then go big later.",
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          "Our team's here for you all day, every day. Reach out on WhatsApp or email anytime. Got questions on your order or need package advice? Expect quick help in your language.",
        icon: '/images/subservice/shared/24-7-support-icon.webp',
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
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Real Likes from Quality Sources',
        description:
          "We deliver genuine LinkedIn likes from active professionals, improving your post's engagement rate. Our packages help boost visibility and enhance your content's credibility on the platform.",
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
    ],
  },
  'linkedin-likes-related-services': {
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
      'TrendEvo offers top-tier LinkedIn SMM services, ensuring rapid delivery and authentic engagement. We empower you to effortlessly amplify your reach, enhance visibility, and boost overall performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy LinkedIn Followers',
        description:
          'Grow your LinkedIn profile with real followers. TrendEvo offers affordable packages with fast delivery to help you build professional authority and reach more people.',
        icon: '/images/our-services/platforms/linkedin-platform-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: 'LinkedIn Engagement Packages',
        description:
          'Combine followers, likes, and connections to build a stronger professional presence. TrendEvo helps you grow your LinkedIn profile with affordable, reliable SMM services.',
        icon: '/images/platform-marquee/platform-marquee-linkedin-platform-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      }
    ],
    bottomRowFeatures: [],
  },
  'spotify-plays': {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: (
      <>
        Why Choose TrendEvo To Buy{' '}
        <span className="text-gradient">Spotify Plays</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable Spotify SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. Plays can roll in slowly, like real growth. Or, they can surge fast, boosting your track now.",
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          "We price in your money, so it's easy on wallets. Budding bosses, freelancers, students, and creators, take note. Big wins don't need big money spent. Start small to test, then go big later.",
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          "Our team's here for you all day, every day. Reach out on WhatsApp or email anytime. Got questions on your order or need package advice? Expect quick help in your language.",
        icon: '/images/subservice/shared/24-7-support-icon.webp',
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
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Real Plays from Quality Sources',
        description:
          "We deliver genuine Spotify plays from active listeners, helping your tracks reach more people. Our packages boost discoverability and enhance your music's credibility on the platform.",
        icon: '/images/our-services/platforms/spotify-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
    ],
  },
  'spotify-plays-related-services': {
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
      'TrendEvo offers top-tier Spotify SMM services, ensuring rapid delivery and authentic engagement. We empower you to effortlessly amplify your reach, enhance visibility, and boost overall performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy Spotify Followers',
        description:
          'Grow your Spotify artist profile with real followers. TrendEvo offers affordable packages with fast delivery to help you build a loyal fan base.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-like-icon.png',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: 'Buy Spotify Monthly Listeners',
        description:
          'Increase monthly listeners to improve your artist profile credibility and attract more fans to your music.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-react-icon.png',
        iconWidth: 60,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
      {
        title: 'Spotify SMM Panel',
        description:
          'Access all Spotify growth services from one dashboard — plays, followers, monthly listeners, and more. Manage orders, track delivery, and scale your music career with TrendEvo.',
        icon: '/images/services/services-spotify-smm-panel-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      }
    ],
    bottomRowFeatures: [],
  },
  'spotify-followers': {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: (
      <>
        Why Choose TrendEvo To Buy{' '}
        <span className="text-gradient">Spotify Followers</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable Spotify SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. Followers can roll in slowly, like real growth. Or, they can surge fast, boosting your profile now.",
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          "We price in your money, so it's easy on wallets. Budding bosses, freelancers, students, and creators, take note. Big wins don't need big money spent. Start small to test, then go big later.",
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          "Our team's here for you all day, every day. Reach out on WhatsApp or email anytime. Got questions on your order or need package advice? Expect quick help in your language.",
        icon: '/images/subservice/shared/24-7-support-icon.webp',
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
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Real Followers from Quality Sources',
        description:
          "We deliver genuine Spotify followers from active listeners, ensuring lasting growth. Our packages include a refill guarantee, so any drops are promptly replenished, maintaining your follower count and enhancing your artist profile's credibility.",
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-like-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
    ],
  },
  'spotify-followers-related-services': {
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
      'TrendEvo offers top-tier Spotify SMM services, ensuring rapid delivery and authentic engagement. We empower you to effortlessly amplify your reach, enhance visibility, and boost overall performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy Spotify Plays',
        description:
          'Get more plays on your Spotify tracks to increase reach, discoverability, and listener growth on the platform.',
        icon: '/images/our-services/platforms/spotify-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
      {
        title: 'Buy Spotify Monthly Listeners',
        description:
          'Increase monthly listeners to improve your artist profile credibility and attract more fans to your music.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-react-icon.png',
        iconWidth: 60,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
      {
        title: 'Spotify SMM Panel',
        description:
          'Access all Spotify growth services from one dashboard — plays, followers, monthly listeners, and more. Manage orders, track delivery, and scale your music career with TrendEvo.',
        icon: '/images/services/services-spotify-smm-panel-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      }
    ],
    bottomRowFeatures: [],
  },
  'spotify-monthly-listeners': {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: (
      <>
        Why Choose TrendEvo To Buy{' '}
        <span className="text-gradient">Spotify Monthly Listeners</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable Spotify SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. Monthly Listeners can roll in slowly, like real growth. Or, they can surge fast, boosting your profile now.",
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          "We price in your money, so it's easy on wallets. Budding bosses, freelancers, students, and creators, take note. Big wins don't need big money spent. Start small to test, then go big later.",
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          "Our team's here for you all day, every day. Reach out on WhatsApp or email anytime. Got questions on your order or need package advice? Expect quick help in your language.",
        icon: '/images/subservice/shared/24-7-support-icon.webp',
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
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Real Monthly Listeners from Quality Sources',
        description:
          "We deliver genuine monthly listeners from active Spotify users, helping your artist profile stand out. Boost your listener count and attract more fans with reliable, affordable packages.",
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-react-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
    ],
  },
  'spotify-monthly-listeners-related-services': {
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
      'TrendEvo offers top-tier Spotify SMM services, ensuring rapid delivery and authentic engagement. We empower you to effortlessly amplify your reach, enhance visibility, and boost overall performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy Spotify Plays',
        description:
          'Get more plays on your Spotify tracks to increase reach, discoverability, and listener growth on the platform.',
        icon: '/images/our-services/platforms/spotify-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
      {
        title: 'Buy Spotify Followers',
        description:
          'Grow your Spotify artist profile with real followers. TrendEvo offers affordable packages with fast delivery to help you build a loyal fan base.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-like-icon.png',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: 'Spotify SMM Panel',
        description:
          'Access all Spotify growth services from one dashboard — plays, followers, monthly listeners, and more. Manage orders, track delivery, and scale your music career with TrendEvo.',
        icon: '/images/services/services-spotify-smm-panel-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      }
    ],
    bottomRowFeatures: [],
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
  'telegram-members': {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: (
      <>
        Why Choose TrendEvo To Buy{' '}
        <span className="text-gradient">Telegram Members</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable Telegram SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. Members can roll in slowly, like real growth. Or, they can surge fast, boosting your channel now.",
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          "We price in your money, so it's easy on wallets. Budding bosses, freelancers, students, and creators, take note. Big wins don't need big money spent. Start small to test, then go big later.",
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          "Our team's here for you all day, every day. Reach out on WhatsApp or email anytime. Got questions on your order or need package advice? Expect quick help in your language.",
        icon: '/images/subservice/shared/24-7-support-icon.webp',
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
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Real Members from Quality Sources',
        description:
          "We deliver genuine Telegram members from active users, helping your channel or group grow faster. Our packages boost credibility and attract more organic subscribers.",
        icon: '/images/our-services/platforms/telegram-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
    ],
  },
  'telegram-members-related-services': {
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
      'TrendEvo offers top-tier Telegram SMM services, ensuring rapid delivery and authentic engagement. We empower you to effortlessly amplify your reach, enhance visibility, and boost overall performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Telegram SMM Panel',
        description:
          'Access more Telegram growth services from TrendEvo — fast delivery, secure checkout, and 24/7 support to help you scale your presence.',
        icon: '/images/services/services-telegram-smm-panel-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      }
    ],
    bottomRowFeatures: [],
  },
  'snapchat-followers': {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: (
      <>
        Why Choose TrendEvo To Buy{' '}
        <span className="text-gradient">Snapchat Followers</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable Snapchat SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. Followers can roll in slowly, like real growth. Or, they can surge fast, boosting your profile now.",
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          "We price in your money, so it's easy on wallets. Budding bosses, freelancers, students, and creators, take note. Big wins don't need big money spent. Start small to test, then go big later.",
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          "Our team's here for you all day, every day. Reach out on WhatsApp or email anytime. Got questions on your order or need package advice? Expect quick help in your language.",
        icon: '/images/subservice/shared/24-7-support-icon.webp',
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
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Real Followers from Quality Sources',
        description:
          "We deliver genuine Snapchat followers from active users, ensuring lasting growth. Our packages help maintain your follower count and enhance your profile's credibility.",
        icon: '/images/our-services/platforms/snapchat-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
    ],
  },
  'snapchat-followers-related-services': {
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
      'TrendEvo offers top-tier Snapchat SMM services, ensuring rapid delivery and authentic engagement. We empower you to effortlessly amplify your reach, enhance visibility, and boost overall performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Snapchat SMM Panel',
        description:
          'Access more Snapchat growth services from TrendEvo — fast delivery, secure checkout, and 24/7 support to help you scale your presence.',
        icon: '/images/our-services/platforms/snapchat-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      }
    ],
    bottomRowFeatures: [],
  },
  'soundcloud-followers': {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: (
      <>
        Why Choose TrendEvo To Buy{' '}
        <span className="text-gradient">SoundCloud Followers</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable SoundCloud SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. Followers can roll in slowly, like real growth. Or, they can surge fast, boosting your profile now.",
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          "We price in your money, so it's easy on wallets. Budding bosses, freelancers, students, and creators, take note. Big wins don't need big money spent. Start small to test, then go big later.",
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          "Our team's here for you all day, every day. Reach out on WhatsApp or email anytime. Got questions on your order or need package advice? Expect quick help in your language.",
        icon: '/images/subservice/shared/24-7-support-icon.webp',
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
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Real Followers from Quality Sources',
        description:
          "We deliver genuine SoundCloud followers from active listeners, ensuring lasting growth. Our packages help maintain your follower count and enhance your artist profile's credibility.",
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
    ],
  },
  'soundcloud-followers-related-services': {
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
      'TrendEvo offers top-tier SoundCloud SMM services, ensuring rapid delivery and authentic engagement. We empower you to effortlessly amplify your reach, enhance visibility, and boost overall performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy SoundCloud Plays',
        description:
          'Get more plays on your SoundCloud tracks to increase reach, discoverability, and listener growth.',
        icon: '/images/our-services/platforms/soundcloud-platform-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
      {
        title: 'SoundCloud SMM Panel',
        description:
          'Access more SoundCloud growth services from TrendEvo — fast delivery, secure checkout, and 24/7 support to help you scale your presence.',
        icon: '/images/our-services/platforms/soundcloud-platform-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      }
    ],
    bottomRowFeatures: [],
  },
  'soundcloud-plays': {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: (
      <>
        Why Choose TrendEvo To Buy{' '}
        <span className="text-gradient">SoundCloud Plays</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable SoundCloud SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. Plays can roll in slowly, like real growth. Or, they can surge fast, boosting your track now.",
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          "We price in your money, so it's easy on wallets. Budding bosses, freelancers, students, and creators, take note. Big wins don't need big money spent. Start small to test, then go big later.",
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          "Our team's here for you all day, every day. Reach out on WhatsApp or email anytime. Got questions on your order or need package advice? Expect quick help in your language.",
        icon: '/images/subservice/shared/24-7-support-icon.webp',
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
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Real Plays from Quality Sources',
        description:
          "We deliver genuine SoundCloud plays from active listeners, helping your tracks reach more people. Our packages boost discoverability and enhance your music's credibility.",
        icon: '/images/our-services/platforms/soundcloud-platform-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
    ],
  },
  'soundcloud-plays-related-services': {
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
      'TrendEvo offers top-tier SoundCloud SMM services, ensuring rapid delivery and authentic engagement. We empower you to effortlessly amplify your reach, enhance visibility, and boost overall performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy SoundCloud Followers',
        description:
          'Grow your SoundCloud profile with real followers. TrendEvo offers affordable packages with fast delivery to help you build authority.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
      {
        title: 'SoundCloud SMM Panel',
        description:
          'Access more SoundCloud growth services from TrendEvo — fast delivery, secure checkout, and 24/7 support to help you scale your presence.',
        icon: '/images/our-services/platforms/soundcloud-platform-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      }
    ],
    bottomRowFeatures: [],
  },
  'discord-members': {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: (
      <>
        Why Choose TrendEvo To Buy{' '}
        <span className="text-gradient">Discord Members</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable Discord SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. Members can roll in slowly, like real growth. Or, they can surge fast, boosting your server now.",
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          "We price in your money, so it's easy on wallets. Budding bosses, freelancers, students, and creators, take note. Big wins don't need big money spent. Start small to test, then go big later.",
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          "Our team's here for you all day, every day. Reach out on WhatsApp or email anytime. Got questions on your order or need package advice? Expect quick help in your language.",
        icon: '/images/subservice/shared/24-7-support-icon.webp',
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
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Real Members from Quality Sources',
        description:
          "We deliver genuine Discord members from active users, helping your server grow faster. Our packages boost community credibility and keep your channels active.",
        icon: '/images/our-services/platforms/discord-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
    ],
  },
  'discord-members-related-services': {
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
      'TrendEvo offers top-tier Discord SMM services, ensuring rapid delivery and authentic engagement. We empower you to effortlessly amplify your reach, enhance visibility, and boost overall performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy Discord Account',
        description:
          'Get quality Discord accounts with secure delivery and support from TrendEvo.',
        icon: '/images/our-services/platforms/discord-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
      {
        title: 'Discord Growth Services',
        description:
          'Access more Discord growth services from TrendEvo — fast delivery, secure checkout, and 24/7 support to help you scale your presence.',
        icon: '/images/platform-marquee/platform-marquee-discord-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      }
    ],
    bottomRowFeatures: [],
  },
  'discord-account': {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: (
      <>
        Why Choose TrendEvo To Buy{' '}
        <span className="text-gradient">Discord Account</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable Discord SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. Account can roll in slowly, like real growth. Or, they can surge fast, boosting your account now.",
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          "We price in your money, so it's easy on wallets. Budding bosses, freelancers, students, and creators, take note. Big wins don't need big money spent. Start small to test, then go big later.",
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          "Our team's here for you all day, every day. Reach out on WhatsApp or email anytime. Got questions on your order or need package advice? Expect quick help in your language.",
        icon: '/images/subservice/shared/24-7-support-icon.webp',
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
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Quality Discord Accounts',
        description:
          "We provide reliable Discord accounts suited to your needs. TrendEvo ensures secure delivery and support so you can get started on Discord without hassle.",
        icon: '/images/our-services/platforms/discord-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
    ],
  },
  'discord-account-related-services': {
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
      'TrendEvo offers top-tier Discord SMM services, ensuring rapid delivery and authentic engagement. We empower you to effortlessly amplify your reach, enhance visibility, and boost overall performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy Discord Members',
        description:
          'Grow your Discord channel or community with real members. TrendEvo offers affordable packages with fast delivery.',
        icon: '/images/our-services/platforms/discord-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
      {
        title: 'Discord Growth Services',
        description:
          'Access more Discord growth services from TrendEvo — fast delivery, secure checkout, and 24/7 support to help you scale your presence.',
        icon: '/images/platform-marquee/platform-marquee-discord-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      }
    ],
    bottomRowFeatures: [],
  },
  'twitch-followers': {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: (
      <>
        Why Choose TrendEvo To Buy{' '}
        <span className="text-gradient">Twitch Followers</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable Twitch SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. Followers can roll in slowly, like real growth. Or, they can surge fast, boosting your channel now.",
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          "We price in your money, so it's easy on wallets. Budding bosses, freelancers, students, and creators, take note. Big wins don't need big money spent. Start small to test, then go big later.",
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          "Our team's here for you all day, every day. Reach out on WhatsApp or email anytime. Got questions on your order or need package advice? Expect quick help in your language.",
        icon: '/images/subservice/shared/24-7-support-icon.webp',
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
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Real Followers from Quality Sources',
        description:
          "We deliver genuine Twitch followers from active viewers, ensuring lasting growth. Our packages help maintain your follower count and enhance your channel's credibility.",
        icon: '/images/our-services/platforms/discord-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
    ],
  },
  'twitch-followers-related-services': {
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
      'TrendEvo offers top-tier Twitch SMM services, ensuring rapid delivery and authentic engagement. We empower you to effortlessly amplify your reach, enhance visibility, and boost overall performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy Twitch Viewers',
        description:
          'Boost live stream viewers on Twitch to improve credibility and attract more real-time engagement.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
      {
        title: 'Twitch SMM Panel',
        description:
          'Access more Twitch growth services from TrendEvo — fast delivery, secure checkout, and 24/7 support to help you scale your presence.',
        icon: '/images/our-services/platforms/discord-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      }
    ],
    bottomRowFeatures: [],
  },
  'twitch-viewers': {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: (
      <>
        Why Choose TrendEvo To Buy{' '}
        <span className="text-gradient">Twitch Viewers</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable Twitch SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. Viewers can roll in slowly, like real growth. Or, they can surge fast, boosting your channel now.",
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          "We price in your money, so it's easy on wallets. Budding bosses, freelancers, students, and creators, take note. Big wins don't need big money spent. Start small to test, then go big later.",
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          "Our team's here for you all day, every day. Reach out on WhatsApp or email anytime. Got questions on your order or need package advice? Expect quick help in your language.",
        icon: '/images/subservice/shared/24-7-support-icon.webp',
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
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Real Viewers from Quality Sources',
        description:
          "We deliver genuine Twitch viewers for your live streams, helping you build credibility and attract more real-time engagement during broadcasts.",
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
    ],
  },
  'twitch-viewers-related-services': {
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
      'TrendEvo offers top-tier Twitch SMM services, ensuring rapid delivery and authentic engagement. We empower you to effortlessly amplify your reach, enhance visibility, and boost overall performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy Twitch Followers',
        description:
          'Grow your Twitch profile with real followers. TrendEvo offers affordable packages with fast delivery to help you build authority.',
        icon: '/images/our-services/platforms/discord-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
      {
        title: 'Twitch SMM Panel',
        description:
          'Access more Twitch growth services from TrendEvo — fast delivery, secure checkout, and 24/7 support to help you scale your presence.',
        icon: '/images/our-services/platforms/discord-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      }
    ],
    bottomRowFeatures: [],
  },
  'kick-followers': {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: (
      <>
        Why Choose TrendEvo To Buy{' '}
        <span className="text-gradient">Kick Followers</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable Kick SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. Followers can roll in slowly, like real growth. Or, they can surge fast, boosting your channel now.",
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          "We price in your money, so it's easy on wallets. Budding bosses, freelancers, students, and creators, take note. Big wins don't need big money spent. Start small to test, then go big later.",
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          "Our team's here for you all day, every day. Reach out on WhatsApp or email anytime. Got questions on your order or need package advice? Expect quick help in your language.",
        icon: '/images/subservice/shared/24-7-support-icon.webp',
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
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Real Followers from Quality Sources',
        description:
          "We deliver genuine Kick followers from active viewers, ensuring lasting growth. Our packages help maintain your follower count and enhance your channel's credibility.",
        icon: '/images/our-services/platforms/discord-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
    ],
  },
  'kick-followers-related-services': {
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
      'TrendEvo offers top-tier Kick SMM services, ensuring rapid delivery and authentic engagement. We empower you to effortlessly amplify your reach, enhance visibility, and boost overall performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy Kick Viewers',
        description:
          'Boost live stream viewers on Kick to improve credibility and attract more real-time engagement.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
      {
        title: 'Kick Growth Services',
        description:
          'Access more Kick growth services from TrendEvo — fast delivery, secure checkout, and 24/7 support to help you scale your presence.',
        icon: '/images/our-services/platforms/discord-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      }
    ],
    bottomRowFeatures: [],
  },
  'kick-viewers': {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: (
      <>
        Why Choose TrendEvo To Buy{' '}
        <span className="text-gradient">Kick Viewers</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable Kick SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. Viewers can roll in slowly, like real growth. Or, they can surge fast, boosting your channel now.",
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          "We price in your money, so it's easy on wallets. Budding bosses, freelancers, students, and creators, take note. Big wins don't need big money spent. Start small to test, then go big later.",
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          "Our team's here for you all day, every day. Reach out on WhatsApp or email anytime. Got questions on your order or need package advice? Expect quick help in your language.",
        icon: '/images/subservice/shared/24-7-support-icon.webp',
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
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Real Viewers from Quality Sources',
        description:
          "We deliver genuine Kick viewers for your live streams, helping you build credibility and attract more real-time engagement during broadcasts.",
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
    ],
  },
  'kick-viewers-related-services': {
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
      'TrendEvo offers top-tier Kick SMM services, ensuring rapid delivery and authentic engagement. We empower you to effortlessly amplify your reach, enhance visibility, and boost overall performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy Kick Followers',
        description:
          'Grow your Kick profile with real followers. TrendEvo offers affordable packages with fast delivery to help you build authority.',
        icon: '/images/our-services/platforms/discord-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
      {
        title: 'Kick Growth Services',
        description:
          'Access more Kick growth services from TrendEvo — fast delivery, secure checkout, and 24/7 support to help you scale your presence.',
        icon: '/images/our-services/platforms/discord-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      }
    ],
    bottomRowFeatures: [],
  },
  'reddit-upvotes': {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: (
      <>
        Why Choose TrendEvo To Buy{' '}
        <span className="text-gradient">Reddit Upvotes</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable Reddit SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. Upvotes can roll in slowly, like real growth. Or, they can surge fast, boosting your post now.",
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          "We price in your money, so it's easy on wallets. Budding bosses, freelancers, students, and creators, take note. Big wins don't need big money spent. Start small to test, then go big later.",
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          "Our team's here for you all day, every day. Reach out on WhatsApp or email anytime. Got questions on your order or need package advice? Expect quick help in your language.",
        icon: '/images/subservice/shared/24-7-support-icon.webp',
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
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Real Upvotes from Quality Sources',
        description:
          "We deliver genuine Reddit upvotes from active users, helping your posts gain visibility. Our packages boost engagement signals and enhance your post's reach.",
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
    ],
  },
  'reddit-upvotes-related-services': {
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
      'TrendEvo offers top-tier Reddit SMM services, ensuring rapid delivery and authentic engagement. We empower you to effortlessly amplify your reach, enhance visibility, and boost overall performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy Reddit Account',
        description:
          'Get quality Reddit accounts with secure delivery and support from TrendEvo.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
      {
        title: 'Reddit Growth Services',
        description:
          'Access more Reddit growth services from TrendEvo — fast delivery, secure checkout, and 24/7 support to help you scale your presence.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      }
    ],
    bottomRowFeatures: [],
  },
  'reddit-account': {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: (
      <>
        Why Choose TrendEvo To Buy{' '}
        <span className="text-gradient">Reddit Account</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable Reddit SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. Account can roll in slowly, like real growth. Or, they can surge fast, boosting your account now.",
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          "We price in your money, so it's easy on wallets. Budding bosses, freelancers, students, and creators, take note. Big wins don't need big money spent. Start small to test, then go big later.",
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          "Our team's here for you all day, every day. Reach out on WhatsApp or email anytime. Got questions on your order or need package advice? Expect quick help in your language.",
        icon: '/images/subservice/shared/24-7-support-icon.webp',
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
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Quality Reddit Accounts',
        description:
          "We provide reliable Reddit accounts suited to your needs. TrendEvo ensures secure delivery and support so you can get started on Reddit without hassle.",
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
    ],
  },
  'reddit-account-related-services': {
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
      'TrendEvo offers top-tier Reddit SMM services, ensuring rapid delivery and authentic engagement. We empower you to effortlessly amplify your reach, enhance visibility, and boost overall performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy Reddit Upvotes',
        description:
          'Increase upvotes on your Reddit posts to improve visibility and engagement on the platform.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
      {
        title: 'Reddit Growth Services',
        description:
          'Access more Reddit growth services from TrendEvo — fast delivery, secure checkout, and 24/7 support to help you scale your presence.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      }
    ],
    bottomRowFeatures: [],
  },
  'quora-followers': {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: (
      <>
        Why Choose TrendEvo To Buy{' '}
        <span className="text-gradient">Quora Followers</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable Quora SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. Followers can roll in slowly, like real growth. Or, they can surge fast, boosting your profile now.",
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          "We price in your money, so it's easy on wallets. Budding bosses, freelancers, students, and creators, take note. Big wins don't need big money spent. Start small to test, then go big later.",
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          "Our team's here for you all day, every day. Reach out on WhatsApp or email anytime. Got questions on your order or need package advice? Expect quick help in your language.",
        icon: '/images/subservice/shared/24-7-support-icon.webp',
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
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Real Followers from Quality Sources',
        description:
          "We deliver genuine Quora followers from active users, ensuring lasting growth. Our packages help maintain your follower count and enhance your profile's authority.",
        icon: '/images/platform-marquee/platform-marquee-linkedin-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
    ],
  },
  'quora-followers-related-services': {
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
      'TrendEvo offers top-tier Quora SMM services, ensuring rapid delivery and authentic engagement. We empower you to effortlessly amplify your reach, enhance visibility, and boost overall performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy Quora Upvotes',
        description:
          'Increase upvotes on your Quora answers to improve visibility and engagement on the platform.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
      {
        title: 'Buy Vimeo Followers',
        description:
          'Grow your Vimeo profile with real followers. TrendEvo offers affordable packages with fast delivery to help you build authority.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
      {
        title: 'Buy Threads Followers',
        description:
          'Grow your Threads profile with real followers. TrendEvo offers affordable packages with fast delivery to help you build authority.',
        icon: '/images/pricing/instagram-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      }
    ],
    bottomRowFeatures: [],
  },
  'quora-upvotes': {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: (
      <>
        Why Choose TrendEvo To Buy{' '}
        <span className="text-gradient">Quora Upvotes</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable Quora SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. Upvotes can roll in slowly, like real growth. Or, they can surge fast, boosting your answer now.",
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          "We price in your money, so it's easy on wallets. Budding bosses, freelancers, students, and creators, take note. Big wins don't need big money spent. Start small to test, then go big later.",
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          "Our team's here for you all day, every day. Reach out on WhatsApp or email anytime. Got questions on your order or need package advice? Expect quick help in your language.",
        icon: '/images/subservice/shared/24-7-support-icon.webp',
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
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Real Upvotes from Quality Sources',
        description:
          "We deliver genuine Quora upvotes from active users, helping your answers gain visibility. Our packages boost engagement signals and enhance your answer's reach.",
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
    ],
  },
  'quora-upvotes-related-services': {
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
      'TrendEvo offers top-tier Quora SMM services, ensuring rapid delivery and authentic engagement. We empower you to effortlessly amplify your reach, enhance visibility, and boost overall performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy Quora Followers',
        description:
          'Grow your Quora profile with real followers. TrendEvo offers affordable packages with fast delivery to help you build authority.',
        icon: '/images/platform-marquee/platform-marquee-linkedin-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
      {
        title: 'Buy Vimeo Followers',
        description:
          'Grow your Vimeo profile with real followers. TrendEvo offers affordable packages with fast delivery to help you build authority.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
      {
        title: 'Buy Threads Followers',
        description:
          'Grow your Threads profile with real followers. TrendEvo offers affordable packages with fast delivery to help you build authority.',
        icon: '/images/pricing/instagram-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      }
    ],
    bottomRowFeatures: [],
  },
  'vimeo-followers': {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: (
      <>
        Why Choose TrendEvo To Buy{' '}
        <span className="text-gradient">Vimeo Followers</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable Vimeo SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. Followers can roll in slowly, like real growth. Or, they can surge fast, boosting your channel now.",
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          "We price in your money, so it's easy on wallets. Budding bosses, freelancers, students, and creators, take note. Big wins don't need big money spent. Start small to test, then go big later.",
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          "Our team's here for you all day, every day. Reach out on WhatsApp or email anytime. Got questions on your order or need package advice? Expect quick help in your language.",
        icon: '/images/subservice/shared/24-7-support-icon.webp',
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
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Real Followers from Quality Sources',
        description:
          "We deliver genuine Vimeo followers from active viewers, ensuring lasting growth. Our packages help maintain your follower count and enhance your channel's credibility.",
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
    ],
  },
  'vimeo-followers-related-services': {
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
      'TrendEvo offers top-tier Vimeo SMM services, ensuring rapid delivery and authentic engagement. We empower you to effortlessly amplify your reach, enhance visibility, and boost overall performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy Quora Followers',
        description:
          'Grow your Quora profile with real followers. TrendEvo offers affordable packages with fast delivery to help you build authority.',
        icon: '/images/platform-marquee/platform-marquee-linkedin-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
      {
        title: 'Buy Quora Upvotes',
        description:
          'Increase upvotes on your Quora answers to improve visibility and engagement on the platform.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
      {
        title: 'Buy Threads Followers',
        description:
          'Grow your Threads profile with real followers. TrendEvo offers affordable packages with fast delivery to help you build authority.',
        icon: '/images/pricing/instagram-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      }
    ],
    bottomRowFeatures: [],
  },
  'threads-followers': {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: (
      <>
        Why Choose TrendEvo To Buy{' '}
        <span className="text-gradient">Threads Followers</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable Threads SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. Followers can roll in slowly, like real growth. Or, they can surge fast, boosting your profile now.",
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          "We price in your money, so it's easy on wallets. Budding bosses, freelancers, students, and creators, take note. Big wins don't need big money spent. Start small to test, then go big later.",
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          "Our team's here for you all day, every day. Reach out on WhatsApp or email anytime. Got questions on your order or need package advice? Expect quick help in your language.",
        icon: '/images/subservice/shared/24-7-support-icon.webp',
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
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Real Followers from Quality Sources',
        description:
          "We deliver genuine Threads followers from active profiles, ensuring lasting growth. Our packages help maintain your follower count and enhance your profile's credibility.",
        icon: '/images/pricing/instagram-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
    ],
  },
  'threads-followers-related-services': {
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
      'TrendEvo offers top-tier Threads SMM services, ensuring rapid delivery and authentic engagement. We empower you to effortlessly amplify your reach, enhance visibility, and boost overall performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy Quora Followers',
        description:
          'Grow your Quora profile with real followers. TrendEvo offers affordable packages with fast delivery to help you build authority.',
        icon: '/images/platform-marquee/platform-marquee-linkedin-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
      {
        title: 'Buy Quora Upvotes',
        description:
          'Increase upvotes on your Quora answers to improve visibility and engagement on the platform.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
      {
        title: 'Buy Vimeo Followers',
        description:
          'Grow your Vimeo profile with real followers. TrendEvo offers affordable packages with fast delivery to help you build authority.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      }
    ],
    bottomRowFeatures: [],
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
