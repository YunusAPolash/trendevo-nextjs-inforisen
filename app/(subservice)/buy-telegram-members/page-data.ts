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

type TelegramMembersPageData = {
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

export const data: TelegramMembersPageData = {
  seo: {
    title: 'Buy Telegram Members in Bangladesh | TrendEvo',
    description:
      'Buy Telegram Members in Bangladesh from TrendEvo. Grow Telegram groups, channels, communities, and brands with bKash, Nagad, Rocket, fast delivery, and secure order tracking.',
    canonical: '/buy-telegram-members',
  },

  hero: {
    bg: 'section-1',
    variant: 'wide',
    trustLabel: '⭐ 4.8 Rating | Trusted by Bangladeshi Brands, Creators & Agencies',
    title: 'Buy gt<Telegram Members> in Bangladesh for Strong Community Growth',
    description:
      'Telegram is now a powerful space for communities, brands, creators, crypto projects, news channels, startups, and digital businesses in Bangladesh. A Telegram group or channel with more members often looks more active, trusted, and worth joining. TrendEvo helps users buy Telegram members in Bangladesh with simple ordering, local payment support, and smooth delivery.',
    descriptionSecondary:
      'Our Telegram members service is made for groups and channels that need better credibility, stronger community presence, and wider audience reach. You can start with a small package, pay through bKash, Nagad, Rocket, or other supported methods, and grow your Telegram presence without sharing your account password.',
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
      alt: 'Buy Telegram Members in Bangladesh with TrendEvo',
      width: 558,
      height: 621,
      maxWidthClassName: 'max-w-[558px]',
      unoptimized: true,
    },
  },

  orderForm: {
    badge: 'Telegram Services',
    serviceLabel: 'Members',
    serviceTypeLabel: 'Members',
    urlFieldLabel: 'Telegram Group or Channel Link',
    urlPlaceholder: 'https://t.me/yourchannel',
    submitLabel: 'Pay Now With bKash / Nagad',
  },

  whyChoose: {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: 'Why Choose TrendEvo to Buy gt<Telegram Members> in Bangladesh',
    subtitle:
      'TrendEvo is built for Bangladeshi users who want a simple and reliable way to grow Telegram groups and channels. From easy order placement to local payment support, every part of the platform helps businesses, creators, agencies, startups, and community owners manage Telegram growth with more confidence.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          'Your Telegram members order starts processing after submission. Delivery speed may depend on the selected package and quantity, but TrendEvo is designed for quick handling and smooth order progress.',
        icon: '/images/facebook-page-followers/facebook-page-followers-instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          'You can buy Telegram members in Bangladesh without a large marketing budget. Our pricing works well for small businesses, new communities, crypto projects, online brands, creators, agencies, and SMM resellers.',
        icon: '/images/facebook-page-followers/facebook-page-followers-affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          'Need help choosing the right Telegram members package? TrendEvo support is ready to guide you with service selection, payment issues, order status, and dashboard use.',
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
          'Pay easily through bKash, Nagad, Rocket, and other supported payment methods. TrendEvo makes Telegram growth easier for Bangladeshi users who prefer fast and familiar local payment systems.',
        icon: '/images/facebook-page-followers/facebook-page-followers-local-payment-bkash-nagad-rocket-and-more-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Quality-Focused Members',
        description:
          'TrendEvo focuses on stable Telegram member services that help improve group presence, channel authority, and community trust. You can start small, test the service, and increase your order based on your growth plan.',
        iconFrameSrc:
          '/images/facebook-page-followers/facebook-page-followers-real-followers-from-quality-sources-decoration.png',
      },
    ],
  },

  whoShouldBuy: {
    badge: 'Buy Telegram Members',
    title: 'Who Should Buy gt<Telegram Members> in Bangladesh?',
    subtitle:
      'A strong member count can help a Telegram group or channel look more active when someone visits it for the first time. TrendEvo’s Telegram members service is useful for Bangladeshi users who want better community trust, stronger brand communication, and a more professional start before promoting content, offers, updates, or campaigns.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    items: [
      {
        title: 'Businesses and SMEs',
        description:
          'Many Bangladeshi businesses use Telegram to share offers, product updates, customer notices, and private community news. Fashion stores, gadget sellers, coaching brands, ecommerce shops, service providers, and local SMEs can buy Telegram members to make their group or channel look more credible to new visitors.',
      },
      {
        title: 'Startups and Product Owners',
        description:
          'Startups need attention before launching a product, app, course, or online service. A Telegram channel with more members can help create early interest, support announcement reach, and make the project look more active during launch campaigns in Bangladesh.',
      },
      {
        title: 'Crypto and Web3 Communities',
        description:
          'Telegram is one of the most common platforms for crypto, blockchain, NFT, trading, and Web3 communities. Project owners, community managers, and crypto educators can use Telegram members to build early community proof before sharing updates, AMAs, token news, or educational content.',
      },
      {
        title: 'News Channels and Content Publishers',
        description:
          'Telegram news channels need strong visibility to attract readers. Local news pages, niche media brands, sports update channels, job circular channels, education pages, and tech news publishers can use Telegram members to improve channel authority and encourage more people to join.',
      },
      {
        title: 'Creators, Influencers, and Agencies',
        description:
          'Creators, influencers, digital marketers, and agencies often use Telegram for audience updates, private content, campaign alerts, and fan communication. Buying Telegram members in Bangladesh can help them build a stronger community image and support long-term audience growth.',
      },
    ],
  },

  workingProcess: {
    badge: 'WORKING PROCESS',
    underlineSrc: '/images/working-process/working-process-section-underline.svg',
    underlineWidth: 216,
    title: 'How to Buy Telegram Members on TrendEvo — gt<Step by Step>',
    subtitle:
      'Buying Telegram members in Bangladesh should be simple. TrendEvo keeps the full process easy, so group owners, channel admins, creators, businesses, agencies, and resellers can place orders without technical knowledge.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    steps: [
      {
        number: '01',
        title: 'Simple Registration',
        description:
          'Create your TrendEvo account with basic details and get access to the dashboard. From there, you can browse Telegram growth services, check prices, and manage your orders from one place.',
      },
      {
        number: '02',
        title: 'Add Funds to Your Balance',
        description:
          'Add money to your account using supported payment methods in Bangladesh. You can fund your balance through bKash, Nagad, Rocket, or other available options before placing your Telegram members order.',
      },
      {
        number: '03',
        title: 'Choose Telegram Members Service',
        description:
          'Go to the Telegram services section and select the members package that matches your goal. You can choose a small starter order, a larger community growth package, or a reseller-friendly quantity.',
      },
      {
        number: '04',
        title: 'Enter Your Telegram Group or Channel Link',
        description:
          'Paste your Telegram group or channel link, select the quantity, and submit the order. You do not need to share your Telegram login details. TrendEvo processes the order using the public link only.',
      },
    ],
  },

  thingsToKnow: {
    badge: 'Things to Know',
    title: 'Things to Know Before You Buy gt<Telegram Members>',
    paragraphs: [
      'Buying Telegram members can help your group or channel look more active, but the best results come when the order supports a real community plan. Before placing an order on TrendEvo, make sure your Telegram group or channel link is correct, accessible, and suitable for the package you choose.',
      'You do not need to share your Telegram password to buy Telegram members in Bangladesh. TrendEvo only needs your group or channel URL to process the order. This keeps the process simple and safer for businesses, creators, agencies, community admins, and resellers.',
      'For a natural community appearance, avoid sudden oversized orders on a brand-new Telegram group. Start with a suitable quantity, share useful content, and increase your member count step by step. This helps your Telegram community look more believable to Bangladeshi users.',
      'Telegram members improve community presence and social proof, but they work best with regular activity. Share updates, offers, polls, announcements, discussion posts, product news, and helpful content so new visitors have a reason to stay connected.',
    ],
    ctaLabel: 'Create an Account Now',
  },

  faq: {
    label: 'Frequently Asked Questions',
    title: 'Frequently Asked Questions — gt<Buy Telegram Members> in Bangladesh',
    subtitle:
      'Find clear answers about buying Telegram members in Bangladesh, payment options, delivery, safety, order tracking, and Telegram community growth on TrendEvo.',
    bg: 'section-7',
    items: [
      {
        question: 'Is it safe to buy Telegram members from TrendEvo?',
        answer:
          'Yes, TrendEvo uses a simple order process where you only need to submit your Telegram group or channel link. We do not ask for your Telegram password, so your login details stay private.',
      },
      {
        question: 'Can I buy Telegram members in Bangladesh with bKash?',
        answer:
          'Yes, you can add funds using bKash and then place your Telegram members order from the TrendEvo dashboard. We also support other local payment options for Bangladeshi users.',
      },
      {
        question: 'Do you accept Nagad or Rocket payments?',
        answer:
          'Yes, TrendEvo supports local payment methods such as Nagad, Rocket, and other available options. This makes it easier for businesses, creators, agencies, startups, and resellers in Bangladesh.',
      },
      {
        question: 'Do I need to share my Telegram password?',
        answer:
          'No, you do not need to share your password. To buy Telegram members, you only need to provide the correct Telegram group or channel link and choose your preferred quantity.',
      },
      {
        question: 'How fast will my Telegram members order start?',
        answer:
          'Most orders start after submission and payment confirmation. Delivery time can vary based on service type, quantity, Telegram link status, and current order volume.',
      },
      {
        question: 'Can I track my Telegram members order?',
        answer:
          'Yes, you can track your order status from the TrendEvo dashboard. The order panel helps you check whether your Telegram members order is pending, processing, completed, or partially completed.',
      },
      {
        question: 'Can I buy members for a new Telegram group?',
        answer:
          'Yes, new Telegram groups and channels can order members. For a natural appearance, we suggest starting with a smaller package and increasing your member count step by step.',
      },
      {
        question: 'Are Telegram members useful for both groups and channels?',
        answer:
          'Yes, Telegram members can support both groups and channels, depending on the selected service. Groups are useful for community discussion, while channels are useful for broadcasting updates, news, offers, and announcements.',
      },
      {
        question: 'Will buying Telegram members increase engagement?',
        answer:
          'Telegram members can improve your community presence and trust, but engagement also depends on your content. For better activity, share regular posts, polls, updates, discussions, and useful information for your audience.',
      },
      {
        question: 'Who can use TrendEvo’s Telegram members service?',
        answer:
          'TrendEvo is useful for Bangladeshi businesses, startups, online communities, crypto projects, news channels, creators, influencers, agencies, product owners, and SMM resellers who want stronger Telegram growth.',
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
      'Telegram members build community trust, but better growth comes when your channel or group also has stronger activity and reach. TrendEvo offers related Telegram SMM services in Bangladesh to support visibility, communication, and stronger social proof.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy Telegram Channel Subscribers',
        description:
          'Grow your Telegram channel with more subscribers and improve your broadcast reach. This service is useful for news channels, offer channels, education channels, crypto updates, creator communities, and brand announcement channels.',
        icon: '/images/facebook-page-followers/facebook-page-followers-buy-facebook-likes-icon.webp',
        iconWidth: 39,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'h-[128.12%] w-[120.8%] object-cover -translate-x-[10.27%] -translate-y-[9.29%]',
      },
      {
        title: 'Buy Telegram Post Views',
        description:
          'Increase visibility on your Telegram posts with more views. Telegram post views help your updates look more active and can support stronger content distribution for campaigns, product news, offers, and community announcements.',
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
      'Join TrendEvo and manage your Facebook, Instagram, YouTube, TikTok, Telegram, and website traffic orders from one simple dashboard. Add funds with bKash, Nagad, or Rocket, choose your service, and start growing with secure order tracking.',
    primaryButtonLabel: 'Get Started Free',
    secondaryButtonLabel: 'See All Telegram Services',
    secondaryButtonHref: '/telegram-smm-panel',
  },
};
