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



type TiktokViewsPageData = {

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



export const data: TiktokViewsPageData = {

  seo: {

    title: 'Buy TikTok Views in Bangladesh | TrendEvo',

    description:

      'Buy TikTok Views in Bangladesh with TrendEvo. Increase video reach, FYP exposure, content visibility, and campaign performance using bKash, Nagad, Rocket, and secure orders.',

    canonical: '/buy-tiktok-views',

  },



  hero: {

    bg: 'section-1',

    variant: 'wide',

    trustLabel: '⭐ 4.8 Rating | Trusted by Bangladeshi TikTok Creators, Brands & Agencies',

    title: 'Buy gt<TikTok Views> in Bangladesh for Better Video Reach',

    description:

      'On TikTok, people often decide within seconds whether a video deserves their attention. Higher views can make your content look more watched, more relevant, and easier to notice in a busy feed. TrendEvo helps TikTok creators, influencers, eCommerce sellers, local businesses, agencies, startups, SMEs, and resellers buy TikTok views in Bangladesh through a simple lnk<TikTok SMM Panel|/tiktok-smm-panel> with local payment support and secure delivery.',

    descriptionSecondary:

      'Our TikTok Views Service is made for videos that need stronger reach, better discoverability, and more visible activity on TikTok. You can choose a suitable TikTok View Package, pay through bKash, Nagad, Rocket, or other supported methods, and improve your video visibility without sharing your password.',

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

      src: '/images/subservice/buy-tiktok-views/buy-tiktok-views-in-bangladesh-for-better-video-reach.webp',

      alt: 'Buy TikTok Views in Bangladesh with TrendEvo',

      width: 558,

      height: 621,

      maxWidthClassName: 'max-w-[558px]',

      unoptimized: true,

    },

  },



  orderForm: {

    badge: 'TikTok Services',

    serviceLabel: 'Views',

    serviceTypeLabel: 'Views',

    urlFieldLabel: 'TikTok Video URL',

    urlPlaceholder: 'https://tiktok.com/@username/video/123456789',

    submitLabel: 'Pay Now With bKash/ Nagad',

  },



  whyChoose: {

    badge: 'WHY CHOOSE US',

    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',

    underlineWidth: 190,

    title: 'Why Choose TrendEvo to Buy gt<TikTok Views> in Bangladesh',

    subtitle:

      'lnk<TrendEvo|/> is built for Bangladeshi users who want a simple way to improve TikTok video visibility. From local payment support to easy order tracking, our lnk<cheapest smm panel bd|/> helps creators, influencers, brands, agencies, and resellers manage TikTok views from one clean dashboard.',

    titleClassName:

      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',

    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',

    topRowFeatures: [

      {

        title: 'Fast View Processing',

        description:

          'Your TikTok views order starts after you submit it from the dashboard. Delivery speed may depend on the video status, package size, and current order volume, but TrendEvo keeps the process smooth and easy to follow.',

        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',

        iconWidth: 40,

        iconHeight: 40,

        iconClassName: '-scale-y-100 rotate-180 object-cover',

      },

      {

        title: 'Affordable View Packages',

        description:

          'You can buy TikTok views in Bangladesh without using a large promotion budget. Our packages work well for new creators, influencers, online stores, fashion brands, restaurants, agencies, freelancers, and SMM resellers.',

        icon: '/images/subservice/shared/affordable-prices-icon.webp',

        iconWidth: 40,

        iconHeight: 40,

        iconClassName: 'object-cover',

      },

      {

        title: 'Helpful Support Team',

        description:

          'Need help choosing the right TikTok View Package? TrendEvo support can guide you with service selection, order status, payment issues, and dashboard use.',

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

        title: 'Local Payment Options',

        description:

          'Pay easily through bKash, Nagad, Rocket, and other supported methods. TrendEvo makes TikTok Marketing Bangladesh easier for users who prefer trusted local payment systems.',

        icon: '/images/subservice/shared/local-payment-options-icon.webp',

        iconWidth: 40,

        iconHeight: 40,

        iconWrapperClassName: 'overflow-hidden',

        iconClassName:

          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',

      },

      {

        title: 'Reach-Focused Growth',

        description:

          'TrendEvo focuses on TikTok views that support content visibility, audience reach, and video credibility. You can start with a small package, review the result, and scale your view activity based on your content plan.',

        iconFrameSrc:

          '/images/subservice/shared/real-followers-from-quality-sources-decoration.png',

      },

    ],

  },



  whoShouldBuy: {

    badge: 'Buy TikTok Views',

    title: 'Who Should Buy gt<TikTok Views> in Bangladesh?',

    subtitle:

      'TikTok views help videos look more active when viewers discover them through the For You Page, search, hashtags, profile visits, shares, duets, or stitched content. TrendEvo’s TikTok growth service is useful for Bangladeshi users who want stronger video exposure, better content visibility, and more attention around important posts.',

    titleClassName:

      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',

    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',

    items: [

      {

        title: 'TikTok Creators and Influencers',

        description:

          'Bangladeshi creators need views to make videos look more watchable and relevant. Comedy creators, fashion influencers, food reviewers, travel vloggers, educators, musicians, fitness pages, and lifestyle creators can use TikTok views to support better discovery and profile visits.',

      },

      {

        title: 'E-commerce Stores and Fashion Brands',

        description:

          'Online businesses in Bangladesh use TikTok to show product demos, short reviews, unboxing clips, price updates, and trend-based promotions. Clothing shops, beauty brands, gadget sellers, jewelry pages, and handmade product stores can buy TikTok views to make product videos look more noticed.',

      },

      {

        title: 'Local Businesses and SMEs',

        description:

          'Restaurants, cafés, cloud kitchens, salons, gyms, training centers, and service providers can use TikTok views to support menu videos, offer clips, service demos, customer moments, and local promotional content.',

      },

      {

        title: 'Agencies, Freelancers, and Resellers',

        description:

          'Digital agencies and freelancers often manage TikTok visibility for client campaigns. TrendEvo helps them place TikTok views orders from one dashboard with clear pricing, local payment support, and reseller-friendly access.',

      },

      {

        title: 'Startups, Public Figures, and Community Pages',

        description:

          'Startups, public figures, NGOs, media pages, and community projects need videos that reach more people. TikTok views can support awareness clips, launch content, public messages, educational videos, and campaign posts.',

      },

    ],

  },



  workingProcess: {

    badge: 'WORKING PROCESS',

    underlineSrc: '/images/working-process/how-to-buy-facebook-followers-on-trendevo-step-by-step-section-underline.svg',

    underlineWidth: 216,

    title: 'How to Buy TikTok Views on TrendEvo — gt<Step by Step>',

    subtitle:

      'Buying TikTok views in Bangladesh should be simple and clear. TrendEvo keeps the full process easy, so creators, business owners, influencers, agencies, freelancers, and resellers can place orders without technical knowledge.',

    titleClassName:

      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',

    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',

    steps: [

      {

        number: '01',

        title: 'Create Your TrendEvo Account',

        description:

          'Sign up with basic details and enter the TrendEvo dashboard. From there, you can browse TikTok lnk<SMM Panel services|/services>, compare prices, and manage your orders from one place.',

      },

      {

        number: '02',

        title: 'Add Funds to Your Balance',

        description:

          'Add money to your account using supported payment methods in Bangladesh. You can fund your balance through bKash, Nagad, Rocket, or other available options before placing your TikTok views order.',

      },

      {

        number: '03',

        title: 'Choose TikTok Views Service',

        description:

          'Go to the TikTok services section and select the views package that matches your video goal. You can choose a starter package, a campaign visibility package, or a larger package for client promotions.',

      },

      {

        number: '04',

        title: 'Enter Your TikTok Video URL',

        description:

          'Paste the correct TikTok video link, select the quantity, and submit the order. You do not need to share your TikTok password. TrendEvo processes the order using the public video URL only.',

      },

    ],

  },



  thingsToKnow: {

    badge: 'Things to Know',

    title: 'Things to Know Before You Buy gt<TikTok Views>',
    image: {
      src: '/images/subservice/buy-tiktok-views/things-to-know-before-you-buy-tiktok-views.png',
      alt: 'Things to Know Before You Buy TikTok Views',
    },

    paragraphs: [

      'Buying TikTok views can help your video look more visible, but the best result comes when your content is ready to hold attention. Before placing an order on TrendEvo, make sure your TikTok video is public, your video link is correct, and your selected package fits your current video activity.',

      'You do not need to share your TikTok password to buy TikTok views in Bangladesh. TrendEvo only needs your public video URL to process the order. This keeps the process safer and easier for creators, businesses, influencers, agencies, and resellers.',

      'For a natural video appearance, avoid sudden oversized orders on videos with weak hooks, unclear captions, or very low activity. Start with a suitable quantity, improve your first three seconds, and grow visibility step by step. This helps your TikTok video look more believable to Bangladeshi viewers.',

      'TikTok views can support content reach, but they work best with videos people want to watch. Use strong hooks, clear visuals, trending sounds, short storytelling, product benefits, local context, and strong captions so viewers have a reason to stay longer.',

    ],

    ctaLabel: 'Create Your Account Now',

  },



  faq: {

    label: 'Frequently Asked Questions',

    title: 'Frequently Asked Questions — gt<Buy TikTok Views> in Bangladesh',

    subtitle:

      'Find clear answers about buying TikTok views in Bangladesh, payment options, delivery, safety, order tracking, and how TrendEvo helps support TikTok video reach.',

    bg: 'section-7',

    items: [

      {

        question: 'Is it safe to buy TikTok views from TrendEvo?',

        answer:

          'Yes, TrendEvo uses a simple order process where you only need to submit your public TikTok video link. We never ask for your TikTok password, so your login details stay private.',

      },

      {

        question: 'Can I buy TikTok views in Bangladesh with bKash?',

        answer:

          'Yes, you can add funds using bKash and then place your TikTok views order from the TrendEvo dashboard. We also support other local payment options for Bangladeshi users.',

      },

      {

        question: 'Do you accept Nagad or Rocket payments?',

        answer:

          'Yes, TrendEvo supports local payment methods such as Nagad, Rocket, and other available options. This makes it easier for creators, businesses, influencers, agencies, and resellers in Bangladesh.',

      },

      {

        question: 'Do I need to share my TikTok password?',

        answer:

          'No, you do not need to share your password. To buy TikTok views, you only need to provide the correct TikTok video URL and choose your preferred quantity.',

      },

      {

        question: 'How fast will my TikTok views order start?',

        answer:

          'Most orders start after submission and payment confirmation. Delivery time can vary based on service type, quantity, video status, and current order volume.',

      },

      {

        question: 'Can I track my TikTok views order?',

        answer:

          'Yes, you can track your order status from the TrendEvo dashboard. The order panel helps you check whether your TikTok views order is pending, processing, completed, or partially completed.',

      },

      {

        question: 'Can I buy views for a new TikTok video?',

        answer:

          'Yes, new TikTok videos can order views. For a natural appearance, it is better to start with a smaller package, improve your video hook, and increase views gradually.',

      },

      {

        question: 'Do TikTok views help with FYP exposure?',

        answer:

          'TikTok views can support visible activity and video credibility. FYP exposure also depends on watch time, completion rate, replays, shares, comments, likes, topic interest, and content quality.',

      },

      {

        question: 'Will buying TikTok views make my video go viral?',

        answer:

          'TikTok views can help your video look more active, but viral growth depends on audience retention, hook strength, shares, comments, timing, niche demand, and how people respond to the content.',

      },

      {

        question: 'Who can use TrendEvo’s TikTok views service?',

        answer:

          'TrendEvo is useful for Bangladeshi creators, influencers, eCommerce stores, local businesses, SMEs, startups, public figures, NGOs, digital agencies, freelancers, and SMM resellers who want stronger TikTok video visibility.',

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

      'TikTok views help your videos get more attention, but stronger growth comes when your content also receives engagement and your profile builds trust. TrendEvo offers related TikTok lnk<SMM services in Bangladesh|/services> to support video performance, creator credibility, and brand awareness.',

    titleClassName:

      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',

    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',

    topRowFeatures: [

      {

        title: 'Buy TikTok Likes',

        description:

          'Improve the engagement signal of your TikTok videos with more likes. TikTok likes help product videos, trend clips, creator content, educational posts, and campaign videos look more appreciated by viewers.',

        icon: '/images/subservice/shared/buy-facebook-page-likes-icon.webp',

        iconWidth: 39,

        iconHeight: 40,

        iconWrapperClassName: 'overflow-hidden',

        iconClassName:

          'h-[128.12%] w-[120.8%] object-cover -translate-x-[10.27%] -translate-y-[9.29%]',

      },

      {

        title: 'Buy TikTok Followers',

        description:

          'Grow your TikTok profile authority with more followers. This service helps creators, brands, and businesses build a stronger first impression when people visit after watching your videos.',

        icon: '/images/subservice/shared/buy-facebook-comments-icon.webp',

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

      'Join TrendEvo and manage your TikTok, Instagram, Facebook, YouTube, Twitter (X), Telegram, and website traffic orders from one simple dashboard. Add funds with bKash, Nagad, or Rocket, choose your service, and start growing with secure order tracking.',

    primaryButtonLabel: 'Get Started Free',

    secondaryButtonLabel: 'See All TikTok Services',

    secondaryButtonHref: '/tiktok-smm-panel',

  },

};

