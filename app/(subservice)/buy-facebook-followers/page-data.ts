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

type FacebookFollowersPageData = {
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

export const data: FacebookFollowersPageData = {
  seo: {
    title: 'Buy Facebook Followers in Bangladesh | TrendEvo',
    description:
      'Buy Facebook Followers in Bangladesh from TrendEvo with fast delivery, affordable pricing, secure bKash, Nagad, Rocket payments, and trusted support.',
    canonical: '/buy-facebook-followers',
  },

  hero: {
    bg: 'section-1',
    variant: 'wide',
    trustLabel: '⭐ 4.8 Rating | Trusted by Bangladeshi Creators, Brands & Resellers',
    title: 'Buy gt<Facebook Followers> in Bangladesh for Trusted Page Growth',
    description:
      'Facebook users in Bangladesh often judge a page within seconds. A page with stronger follower numbers can look more active, reliable, and worth checking. TrendEvo helps businesses, creators, influencers, agencies, and resellers buy Facebook followers in Bangladesh with simple ordering, local payment support, and smooth delivery.',
    descriptionSecondary:
      'Our Facebook follower service is made for pages that need better visibility, stronger social proof, and a more professional first impression. You can start with a small package, pay through bKash, Nagad, Rocket, or other supported methods, and grow your Facebook page without sharing your password.',
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
      alt: 'Buy Facebook followers in Bangladesh with TrendEvo',
      width: 558,
      height: 621,
      maxWidthClassName: 'max-w-[558px]',
      unoptimized: true,
    },
  },

  orderForm: {
    badge: 'Facebook Services',
    serviceLabel: 'Followers',
    submitLabel: 'Pay Now With bKash/ Nagad',
  },

  whyChoose: {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: 'Why Choose TrendEvo to Buy gt<Facebook Followers> in Bangladesh',
    subtitle:
      'TrendEvo is built for users in Bangladesh who want a simple and reliable way to grow Facebook pages. As a trusted Facebook SMM Panel in Bangladesh, TrendEvo helps creators, brands, agencies, and resellers manage Facebook follower growth with local payment support, easy order tracking, and a user-friendly dashboard.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          'Your Facebook followers order starts processing after submission. Delivery speed may depend on the package size, but TrendEvo is designed for quick and smooth order handling.',
        icon: '/images/facebook-page-followers/facebook-page-followers-instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          'You can buy Facebook followers in Bangladesh without spending a big budget. Our pricing works well for new pages, online shops, creators, small businesses, and SMM resellers.',
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
          'Pay easily through bKash, Nagad, Rocket, and other supported methods. TrendEvo makes Facebook follower growth easier for Bangladeshi users who prefer local payment systems.',
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
          'TrendEvo focuses on stable Facebook follower services that help improve page presence and social proof. You can start small, test the service, and scale based on your growth needs.',
        iconFrameSrc:
          '/images/facebook-page-followers/facebook-page-followers-real-followers-from-quality-sources-decoration.png',
      },
    ],
  },

  whoShouldBuy: {
    badge: 'Buy Facebook Followers',
    title: 'Who Should Buy gt<Facebook Followers> in Bangladesh?',
    subtitle:
      'A strong follower count can help a Facebook page look more active when someone visits it for the first time. TrendEvo’s Facebook followers service is useful for Bangladeshi users who want better page trust, stronger brand presentation, and a smoother start before running ads, posting offers, or building long-term content. As a reliable SMM Panel BD, TrendEvo also helps local businesses, creators, agencies, and resellers manage Facebook follower growth with easier ordering and local payment support.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    items: [
      {
        title: 'Facebook-Based Small Businesses',
        description:
          'Many small businesses in Bangladesh depend on Facebook pages instead of full websites. Clothing sellers, home food brands, salons, electronics shops, and local service providers can use Facebook followers to make their page look more reliable before customers send messages or check products.',
      },
      {
        title: 'New Online Shops',
        description:
          'A new online shop often struggles because buyers do not trust empty or inactive-looking pages. Buying Facebook followers in Bangladesh can help create an early trust signal, so visitors feel more comfortable browsing products, reading captions, and contacting the seller.',
      },
      {
        title: 'Creators, Influencers, and Public Figures',
        description:
          'Creators need a strong first impression when people visit their page after watching a reel, video, or live session. Facebook followers can support personal branding for vloggers, musicians, gamers, educators, coaches, and influencers who want their page to look more established.',
      },
      {
        title: 'Digital Agencies and SMM Resellers',
        description:
          'Agencies and resellers need fast, simple, and affordable Facebook growth solutions for client projects. TrendEvo helps them manage Facebook follower orders from one dashboard with local payment support, clear pricing, and services suitable for Bangladesh-based campaigns.',
      },
      {
        title: 'New Brand Pages Before Promotion',
        description:
          'Before running Facebook ads or launching a campaign, a page should not look empty. A starter Facebook follower package can help a new brand page look more prepared, making paid traffic, organic visitors, and referral audiences more likely to take the page seriously.',
      },
    ],
  },

  workingProcess: {
    badge: 'WORKING PROCESS',
    underlineSrc: '/images/working-process/working-process-section-underline.svg',
    underlineWidth: 216,
    title: 'How to Buy Facebook Followers on TrendEvo — gt<Step by Step>',
    subtitle:
      'Buying Facebook followers in Bangladesh should not feel confusing. TrendEvo keeps the full process simple, so creators, page owners, agencies, and resellers can place orders without technical knowledge.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    steps: [
      {
        number: '01',
        title: 'Simple Registration',
        description:
          'Create your TrendEvo account with basic details and get access to the dashboard. From there, you can browse Facebook growth services, check prices, and manage your orders from one place.',
      },
      {
        number: '02',
        title: 'Add Funds to Your Balance',
        description:
          'Add money to your account using supported payment methods in Bangladesh. You can fund your balance through bKash, Nagad, Rocket, or other available options before placing your Facebook followers order.',
      },
      {
        number: '03',
        title: 'Choose Facebook Followers Service',
        description:
          'Go to the Facebook services section and select the follower package that matches your goal. You can choose a small starter order, a larger growth package, or a reseller-friendly quantity.',
      },
      {
        number: '04',
        title: 'Enter Your Facebook Page URL',
        description:
          'Paste your Facebook page link, select the quantity, and submit the order. You do not need to share your Facebook password. TrendEvo processes the order using the page URL only.',
      },
    ],
  },

  thingsToKnow: {
    badge: 'Things to Know',
    title: 'Things to Know Before You Buy gt<Facebook Followers>',
    paragraphs: [
      'Buying Facebook followers can help your page look more active, but the best results come when the order matches your real growth plan. Before placing an order on TrendEvo, make sure your Facebook page is public, the page link is correct, and your selected package fits your current page size.',
      'You do not need to share your Facebook password to buy Facebook followers in Bangladesh. TrendEvo only needs your public page URL to process the order. This keeps your account safer and makes the ordering process simple for creators, businesses, agencies, and resellers.',
      'For a natural page appearance, avoid sudden oversized orders on a brand-new page. Start with a suitable quantity, post useful content, and increase your follower count step by step. This helps your page look more believable to Bangladeshi visitors.',
      'Facebook followers improve page presence and social proof, but they should work together with regular content. Share product updates, reels, offers, customer reviews, and local posts so new visitors have a reason to follow, message, or trust your brand.',
    ],
    ctaLabel: 'Create an Account Now',
  },

  faq: {
    label: 'Frequently Asked Questions',
    title: 'Frequently Asked Questions — gt<Buy Facebook Followers> in Bangladesh',
    subtitle:
      'Find clear answers about buying Facebook followers in Bangladesh, payment options, delivery, safety, and order management on TrendEvo.',
    bg: 'section-7',
    items: [
      {
        question: 'Is it safe to buy Facebook followers from TrendEvo?',
        answer:
          'Yes, TrendEvo uses a simple order process where you only need to submit your public Facebook page link. We never ask for your Facebook password, so your login details stay private.',
      },
      {
        question: 'Can I buy Facebook followers in Bangladesh with bKash?',
        answer:
          'Yes, you can add funds using bKash and then place your Facebook followers order from the TrendEvo dashboard. We also support other local payment options for Bangladeshi users.',
      },
      {
        question: 'Do you accept Nagad or Rocket payments?',
        answer:
          'Yes, TrendEvo supports local payment methods such as Nagad, Rocket, and other available options. This makes it easier for creators, businesses, agencies, and resellers in Bangladesh.',
      },
      {
        question: 'Do I need to share my Facebook password?',
        answer:
          'No, you do not need to share your password. To buy Facebook followers, you only need to provide the correct Facebook page URL and choose your preferred quantity.',
      },
      {
        question: 'How fast will my Facebook followers order start?',
        answer:
          'Most orders start after submission and payment confirmation. Delivery time can vary based on service type, quantity, and current order volume.',
      },
      {
        question: 'Can I track my Facebook followers order?',
        answer:
          'Yes, you can track your order status from the TrendEvo dashboard. The order panel helps you check whether your Facebook followers order is pending, processing, completed, or partially completed.',
      },
      {
        question: 'Can I buy followers for a new Facebook page?',
        answer:
          'Yes, new Facebook pages can order followers. For a natural appearance, we suggest starting with a smaller package and increasing your follower count step by step.',
      },
      {
        question: 'Are Facebook followers and Facebook page likes the same?',
        answer:
          'No, they are different. Facebook followers support page audience growth, while page likes show public approval. Many pages use both services for stronger social proof.',
      },
      {
        question: 'Will buying Facebook followers increase my post engagement?',
        answer:
          'Facebook followers can improve your page presence and trust, but post engagement also depends on your content. For better activity, you can combine followers with Facebook likes, comments, shares, and video views.',
      },
      {
        question: 'Who can use TrendEvo’s Facebook followers service?',
        answer:
          'TrendEvo is useful for Bangladeshi online shops, local businesses, creators, influencers, agencies, freelancers, and SMM resellers who want a stronger Facebook page presence.',
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
      'Facebook followers build page trust, but better growth comes when your posts also look active. TrendEvo offers related Facebook SMM services in Bangladesh to support engagement, visibility, and stronger social proof.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy Facebook Likes',
        description:
          'Increase the trust signal of your Facebook posts with more likes. Facebook likes help your content look more popular, support post engagement, and make your page activity appear stronger to new audiences.',
        icon: '/images/facebook-page-followers/facebook-page-followers-buy-facebook-likes-icon.webp',
        iconWidth: 39,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'h-[128.12%] w-[120.8%] object-cover -translate-x-[10.27%] -translate-y-[9.29%]',
      },
      {
        title: 'Buy Facebook Comments',
        description:
          'Add more activity to your Facebook posts with relevant comments. This service is useful for product posts, offer updates, reels, brand announcements, and campaign content that needs a stronger response from visitors.',
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
    secondaryButtonLabel: 'View All Facebook Services',
    secondaryButtonHref: '/facebook-smm-panel',
  },
};
