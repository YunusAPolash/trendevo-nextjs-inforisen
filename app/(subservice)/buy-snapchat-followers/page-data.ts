import type { FaqSectionData } from '@/components/sections/faq-section';
import type { ServiceWorkingProcessStep } from '@/components/sections/service-working-process-section';
import type { ThingsToKnowSectionData } from '@/components/sections/things-to-know-section';
import type { WhoShouldBuySectionData } from '@/components/sections/who-should-buy-section';
import type { ServiceLeadingContent } from '@/components/serviceSmmPanel/service-leading-content';

type SEO = {
  title: string;
  description: string;
  canonical?: string;
};

type SnapchatFollowersPageData = {
  seo: SEO;
  hero: {
    bg: 'section-1';
    variant: 'wide';
    trustLabel: string;
    title: string;
    description: string;
    descriptionSecondary: string;
    primaryButtonLabel: string;
    secondaryButtonLabel: string;
    secondaryButtonHref: string;
    trustBadgeBase: {
      avatarSrcs: string[];
      ratingIconSrc: string;
      rating: string;
    };
    illustration: {
      src: string;
      alt: string;
      width: number;
      height: number;
      maxWidthClassName: string;
      unoptimized: boolean;
    };
  };
  orderForm: {
    badge: string;
    serviceLabel: string;
    serviceTypeLabel: string;
    urlFieldLabel: string;
    urlPlaceholder: string;
    submitLabel: string;
  };
  whyChoose: ServiceLeadingContent;
  whoShouldBuy: WhoShouldBuySectionData;
  workingProcess: {
    badge: string;
    underlineSrc: string;
    underlineWidth: number;
    title: string;
    subtitle: string;
    titleClassName: string;
    subtitleClassName: string;
    steps: ServiceWorkingProcessStep[];
  };
  thingsToKnow: ThingsToKnowSectionData;
  faq: FaqSectionData;
  relatedServices: ServiceLeadingContent & {
    ctaLabel: string;
  };
  cta: {
    title: string;
    description: string;
    primaryButtonLabel: string;
    secondaryButtonLabel: string;
    secondaryButtonHref: string;
  };
};

export const data: SnapchatFollowersPageData = {
  seo: {
    title: 'Buy Snapchat Followers in Bangladesh | TrendEvo',
    description:
      'Buy Snapchat Followers in Bangladesh from TrendEvo. Grow your Snapchat profile, boost creator presence, and build stronger social proof with bKash, Nagad, Rocket, and secure order tracking.',
    canonical: '/buy-snapchat-followers',
  },

  hero: {
    bg: 'section-1',
    variant: 'wide',
    trustLabel: '⭐ 4.8 Rating | Trusted by Bangladeshi Creators, Brands & Agencies',
    title: 'Buy gt<Snapchat Followers> in Bangladesh for Stronger Profile Growth',
    description:
      'Snapchat is becoming more important for creators, influencers, lifestyle brands, online shops, and digital marketers in Bangladesh. A Snapchat profile with more followers can look more active, trusted, and worth following. TrendEvo helps users buy Snapchat followers in Bangladesh with easy ordering, local payment support, and smooth delivery.',
    descriptionSecondary:
      'Our Snapchat followers service is made for users who want better profile credibility, stronger creator presence, and wider content reach. You can start with a small package, pay through bKash, Nagad, Rocket, or other supported methods, and grow your Snapchat profile without sharing your password.',
    primaryButtonLabel: 'Get Started Free',
    secondaryButtonLabel: 'See All Services',
    secondaryButtonHref: '/services',
    trustBadgeBase: {
      avatarSrcs: [
        '/images/reviews/home-hero-hero-1-avatar.png',
        '/images/reviews/home-hero-hero-2-avatar.png',
        '/images/reviews/home-hero-hero-3-avatar.png',
        '/images/reviews/home-hero-hero-4-avatar.png',
        '/images/reviews/home-hero-hero-5-avatar.png',
        '/images/reviews/home-hero-hero-3-avatar.png',
      ],
      ratingIconSrc: '/images/icons/home-hero-trust-star-rating-icon.png',
      rating: '(4.8)',
    },
    illustration: {
      src: '/images/facebook-page-followers/facebook-page-followers-excited-user-celebrating-facebook-page-growth-with-analytics-chart-illustration.webp',
      alt: 'Buy Snapchat Followers in Bangladesh with TrendEvo',
      width: 558,
      height: 621,
      maxWidthClassName: 'max-w-[558px]',
      unoptimized: true,
    },
  },

  orderForm: {
    badge: 'Snapchat Services',
    serviceLabel: 'Followers',
    serviceTypeLabel: 'Followers',
    urlFieldLabel: 'Snapchat Profile Link',
    urlPlaceholder: 'https://snapchat.com/add/yourprofile',
    submitLabel: 'Pay Now With bKash / Nagad',
  },

  whyChoose: {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: 'Why Choose TrendEvo to Buy gt<Snapchat Followers> in Bangladesh',
    subtitle:
      'TrendEvo is built for Bangladeshi users who want a simple and reliable way to grow Snapchat profiles. From local payment support to easy order tracking, every part of the platform helps creators, influencers, brands, agencies, startups, and marketers manage Snapchat growth with more confidence.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          'Your Snapchat followers order starts processing after submission. Delivery speed may depend on the selected package and order size, but TrendEvo is designed for quick handling and smooth order progress.',
        icon: '/images/facebook-page-followers/facebook-page-followers-instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          'You can buy Snapchat followers in Bangladesh without spending a big budget. Our pricing works well for new creators, lifestyle influencers, small businesses, online brands, agencies, and SMM resellers.',
        icon: '/images/facebook-page-followers/facebook-page-followers-affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          'Need help before or after placing an order? TrendEvo support is available to guide you with service selection, order status, payment issues, and dashboard use.',
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
        title: 'Local Payment Options',
        description:
          'Pay easily through bKash, Nagad, Rocket, and other supported methods. TrendEvo makes Snapchat growth easier for Bangladeshi users who prefer fast and familiar local payment systems.',
        icon: '/images/facebook-page-followers/facebook-page-followers-local-payment-bkash-nagad-rocket-and-more-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Quality-Focused Followers',
        description:
          'TrendEvo focuses on stable Snapchat follower services that help improve profile presence and social proof. You can start small, test the service, and scale based on your growth needs.',
        iconFrameSrc:
          '/images/facebook-page-followers/facebook-page-followers-real-followers-from-quality-sources-decoration.png',
      },
    ],
  },

  whoShouldBuy: {
    badge: 'Buy Snapchat Followers',
    title: 'Who Should Buy gt<Snapchat Followers> in Bangladesh?',
    subtitle:
      'A strong follower count can help a Snapchat profile look more active when someone visits it for the first time. TrendEvo’s Snapchat followers service is useful for Bangladeshi users who want better profile trust, stronger personal branding, and a smoother start before posting stories, sharing Spotlight videos, or promoting products.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    items: [
      {
        title: 'Content Creators and Lifestyle Creators',
        description:
          'Snapchat is useful for creators who share daily stories, lifestyle updates, behind-the-scenes moments, travel clips, fashion content, food snaps, and casual videos. Buying Snapchat followers in Bangladesh can help creators build a stronger first impression and attract more attention from new viewers.',
      },
      {
        title: 'Influencers and Personal Brands',
        description:
          'Influencers need a profile that looks active and worth following. Snapchat followers can support personal branding for vloggers, models, fitness creators, beauty creators, musicians, gamers, educators, and public figures who want stronger profile credibility.',
      },
      {
        title: 'Businesses and Online Brands',
        description:
          'Local businesses, ecommerce brands, clothing stores, gadget sellers, salons, restaurants, and lifestyle shops can use Snapchat to share offers, product previews, customer updates, and brand moments. More Snapchat followers can help the profile look more reliable before visitors check stories or message the brand.',
      },
      {
        title: 'Startups and Product Owners',
        description:
          'Startups need attention before launching an app, product, course, or campaign. A Snapchat profile with more followers can help create early social proof, support launch visibility, and make the brand look more active to younger audiences in Bangladesh.',
      },
      {
        title: 'Agencies and Social Media Marketers',
        description:
          'Digital agencies, SMM providers, freelancers, and social media marketers often manage Snapchat growth for clients. TrendEvo helps them place Snapchat follower orders from one dashboard with clear pricing, local payment support, and reseller-friendly service access.',
      },
    ],
  },

  workingProcess: {
    badge: 'WORKING PROCESS',
    underlineSrc: '/images/working-process/working-process-section-underline.svg',
    underlineWidth: 216,
    title: 'How to Buy Snapchat Followers on TrendEvo — gt<Step by Step>',
    subtitle:
      'Buying Snapchat followers in Bangladesh should not feel difficult. TrendEvo keeps the full process simple, so creators, profile owners, brands, agencies, marketers, and resellers can place orders without technical knowledge.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    steps: [
      {
        number: '01',
        title: 'Simple Registration',
        description:
          'Create your TrendEvo account with basic details and get access to the dashboard. From there, you can browse Snapchat growth services, check prices, and manage your orders from one place.',
      },
      {
        number: '02',
        title: 'Add Funds to Your Balance',
        description:
          'Add money to your account using supported payment methods in Bangladesh. You can fund your balance through bKash, Nagad, Rocket, or other available options before placing your Snapchat followers order.',
      },
      {
        number: '03',
        title: 'Choose Snapchat Followers Service',
        description:
          'Go to the Snapchat services section and select the follower package that matches your goal. You can choose a small starter order, a larger profile growth package, or a reseller-friendly quantity.',
      },
      {
        number: '04',
        title: 'Enter Your Snapchat Profile Link',
        description:
          'Paste your Snapchat profile link or required username, select the quantity, and submit the order. You do not need to share your Snapchat password. TrendEvo processes the order using the required public profile details only.',
      },
    ],
  },

  thingsToKnow: {
    badge: 'Things to Know',
    title: 'Things to Know Before You Buy gt<Snapchat Followers>',
    paragraphs: [
      'Buying Snapchat followers can help your profile look more active, but the best results come when the order matches your real growth plan. Before placing an order on TrendEvo, make sure your Snapchat profile details are correct, your account is accessible, and your selected package fits your current profile size.',
      'You do not need to share your Snapchat password to buy Snapchat followers in Bangladesh. TrendEvo only needs the required profile link or username to process the order. This keeps your account safer and makes the ordering process simple for creators, businesses, agencies, marketers, and resellers.',
      'For a natural profile appearance, avoid sudden oversized orders on a brand-new Snapchat account. Start with a suitable quantity, post useful content, and increase your follower count step by step. This helps your profile look more believable to Bangladeshi visitors.',
      'Snapchat followers improve profile presence and social proof, but they should work together with regular content. Share stories, Spotlight videos, product updates, lifestyle snaps, offers, behind-the-scenes clips, and local content so new visitors have a reason to follow and stay connected.',
    ],
    ctaLabel: 'Create an Account Now',
  },

  faq: {
    label: 'Frequently Asked Questions',
    title: 'Frequently Asked Questions — gt<Buy Snapchat Followers> in Bangladesh',
    subtitle:
      'Find clear answers about buying Snapchat followers in Bangladesh, payment options, delivery, safety, order tracking, and Snapchat profile growth on TrendEvo.',
    bg: 'section-7',
    items: [
      {
        question: 'Is it safe to buy Snapchat followers from TrendEvo?',
        answer:
          'Yes, TrendEvo uses a simple order process where you only need to submit the required Snapchat profile details. We do not ask for your Snapchat password, so your login details stay private.',
      },
      {
        question: 'Can I buy Snapchat followers in Bangladesh with bKash?',
        answer:
          'Yes, you can add funds using bKash and then place your Snapchat followers order from the TrendEvo dashboard. We also support other local payment options for Bangladeshi users.',
      },
      {
        question: 'Do you accept Nagad or Rocket payments?',
        answer:
          'Yes, TrendEvo supports local payment methods such as Nagad, Rocket, and other available options. This makes it easier for creators, influencers, businesses, agencies, marketers, and resellers in Bangladesh.',
      },
      {
        question: 'Do I need to share my Snapchat password?',
        answer:
          'No, you do not need to share your password. To buy Snapchat followers, you only need to provide the correct Snapchat profile link or required username and choose your preferred quantity.',
      },
      {
        question: 'How fast will my Snapchat followers order start?',
        answer:
          'Most orders start after submission and payment confirmation. Delivery time can vary based on service type, quantity, profile status, and current order volume.',
      },
      {
        question: 'Can I track my Snapchat followers order?',
        answer:
          'Yes, you can track your order status from the TrendEvo dashboard. The order panel helps you check whether your Snapchat followers order is pending, processing, completed, or partially completed.',
      },
      {
        question: 'Can I buy followers for a new Snapchat profile?',
        answer:
          'Yes, new Snapchat profiles can order followers. For a natural appearance, we suggest starting with a smaller package and increasing your follower count step by step.',
      },
      {
        question: 'Are Snapchat followers useful for creators and brands?',
        answer:
          'Yes, Snapchat followers can support both creators and brands. Creators can improve profile credibility, while businesses can build stronger visibility for stories, product updates, offers, and lifestyle content.',
      },
      {
        question: 'Will buying Snapchat followers increase my story views?',
        answer:
          'Snapchat followers can improve your profile presence and trust, but story views also depend on your content and activity. For better reach, post regular stories, Spotlight videos, updates, offers, and engaging snaps.',
      },
      {
        question: 'Who can use TrendEvo’s Snapchat followers service?',
        answer:
          'TrendEvo is useful for Bangladeshi content creators, influencers, personal brands, businesses, startups, online brands, ecommerce sellers, digital agencies, social media marketers, and SMM resellers.',
      },
    ],
    ctaTitle: 'Still have questions?',
    ctaSubtitle:
      "Can't find the answer you're looking for? Please get in touch with our team.",
    ctaButtonLabel: 'Contact US',
    ctaButtonHref: '/contact-us',
  },

  relatedServices: {
    badge: 'RELATED SERVICE',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 198,
    title: 'Related Services You gt<Might Also Need>',
    subtitle:
      'Snapchat followers build profile trust, but better growth comes when your content also looks active. TrendEvo offers related Snapchat SMM services in Bangladesh to support visibility, content reach, and stronger social proof.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy Snapchat Story Views',
        description:
          'Increase visibility on your Snapchat stories with more views. This service is useful for lifestyle updates, product offers, creator content, event promotion, daily stories, and brand announcements that need stronger attention.',
        icon: '/images/facebook-page-followers/facebook-page-followers-buy-facebook-likes-icon.webp',
        iconWidth: 39,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'h-[128.12%] w-[120.8%] object-cover -translate-x-[10.27%] -translate-y-[9.29%]',
      },
      {
        title: 'Buy Snapchat Spotlight Views',
        description:
          'Boost the reach of your Snapchat Spotlight videos with more views. Spotlight views help short videos look more active and can support better content visibility for creators, influencers, brands, and agencies.',
        icon: '/images/facebook-page-followers/facebook-page-followers-buy-facebook-comments-icon.webp',
        iconWidth: 39,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'h-[128.12%] w-[120.8%] object-cover -translate-x-[10.27%] -translate-y-[9.29%]',
      },
    ],
    bottomRowFeatures: [],
    ctaLabel: 'Sign Up Now',
  },

  cta: {
    title: 'Ready to Grow with a gt<Trusted SMM Panel> in Bangladesh?',
    description:
      'Join TrendEvo and manage your Facebook, Instagram, YouTube, TikTok, Telegram, Snapchat, and website traffic orders from one simple dashboard. Add funds with bKash, Nagad, or Rocket, choose your service, and start growing with secure order tracking.',
    primaryButtonLabel: 'Get Started Free',
    secondaryButtonLabel: 'See All Snapchat Services',
    secondaryButtonHref: '/snapchat-smm-panel',
  },
};
