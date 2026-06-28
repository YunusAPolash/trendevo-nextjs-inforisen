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

type TiktokLikesPageData = {
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

export const data: TiktokLikesPageData = {
  seo: {
    title: 'Buy TikTok Likes in Bangladesh | TrendEvo',
    description:
      'Buy TikTok Likes in Bangladesh with TrendEvo. Improve video engagement, FYP visibility, creator trust, and social proof using bKash, Nagad, Rocket, and secure orders.',
    canonical: '/buy-tiktok-likes',
  },

  hero: {
    bg: 'section-1',
    variant: 'wide',
    trustLabel: '⭐ 4.8 Rating | Trusted by Bangladeshi TikTok Creators, Brands & Agencies',
    title: 'Buy gt<TikTok Likes> in Bangladesh for Stronger Video Engagement',
    description:
      'TikTok likes can make a video feel more accepted when viewers discover it on the For You Page, profile grid, search results, or shared links. Stronger like activity can help new viewers feel that the content is already getting attention. TrendEvo helps creators, influencers, eCommerce sellers, local brands, agencies, startups, SMEs, and resellers buy TikTok likes in Bangladesh through a simple TikTok SMM Panel with local payment support and secure delivery.',
    descriptionSecondary:
      'Our TikTok Likes Service is built for videos that need better engagement signals, a cleaner first impression, and stronger creator trust. As a best SMM Panel BD option for TikTok marketing, TrendEvo lets you select a suitable TikTok like package, pay through bKash, Nagad, Rocket, or other supported methods, and improve video activity without sharing your password.',
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
      alt: 'Buy TikTok Likes in Bangladesh with TrendEvo',
      width: 558,
      height: 621,
      maxWidthClassName: 'max-w-[558px]',
      unoptimized: true,
    },
  },

  orderForm: {
    badge: 'TikTok Services',
    serviceLabel: 'Likes',
    serviceTypeLabel: 'Likes',
    urlFieldLabel: 'TikTok Video URL',
    urlPlaceholder: 'https://tiktok.com/@username/video/123456789',
    submitLabel: 'Pay Now With bKash/ Nagad',
  },

  whyChoose: {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: 'Why Choose TrendEvo to Buy gt<TikTok Likes> in Bangladesh',
    subtitle:
      'TrendEvo is built for Bangladeshi users who want a simple way to increase TikTok video engagement. From local payment support to easy order tracking, our Bangladesh SMM Panel helps creators, influencers, brands, agencies, and resellers manage TikTok likes from one clean dashboard.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Fast Like Processing',
        description:
          'Your TikTok likes order starts after you submit it from the dashboard. Delivery speed may depend on the video status, package size, and current order volume, but TrendEvo keeps the process smooth and easy to follow.',
        icon: '/images/facebook-page-followers/facebook-page-followers-instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Like Packages',
        description:
          'You can buy TikTok likes in Bangladesh without using a large promotion budget. Our packages work well for new creators, influencers, online stores, fashion brands, restaurants, agencies, freelancers, and SMM resellers.',
        icon: '/images/facebook-page-followers/facebook-page-followers-affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: 'Helpful Support Team',
        description:
          'Need help choosing the right TikTok Like Package? TrendEvo support can guide you with service selection, order status, payment issues, and dashboard use.',
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
          'Pay easily through bKash, Nagad, Rocket, and other supported methods. TrendEvo makes TikTok Marketing Bangladesh easier for users who prefer trusted local payment systems.',
        icon: '/images/facebook-page-followers/facebook-page-followers-local-payment-bkash-nagad-rocket-and-more-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Engagement-Focused Growth',
        description:
          'TrendEvo focuses on TikTok likes that support video credibility, audience response, and social proof. You can start with a small package, review the result, and scale your activity based on your content plan.',
        iconFrameSrc:
          '/images/facebook-page-followers/facebook-page-followers-real-followers-from-quality-sources-decoration.png',
      },
    ],
  },

  whoShouldBuy: {
    badge: 'Buy TikTok Likes',
    title: 'Who Should Buy gt<TikTok Likes> in Bangladesh?',
    subtitle:
      'TikTok likes help videos look more appealing when viewers discover them through the For You Page, search, hashtags, profile visits, duets, stitches, or shared links. TrendEvo’s TikTok engagement service is useful for Bangladeshi users who want stronger video interaction, better content trust, and more visible audience response.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    items: [
      {
        title: 'TikTok Creators and Influencers',
        description:
          'Bangladeshi creators need likes to make videos feel more accepted by viewers. Comedy creators, fashion influencers, food reviewers, travel vloggers, educators, musicians, fitness pages, and lifestyle creators can use TikTok likes to improve content appeal after people watch their videos.',
      },
      {
        title: 'E-commerce Stores and Fashion Brands',
        description:
          'Online businesses in Bangladesh use TikTok for product demos, unboxing clips, short reviews, and trend-based promotions. Clothing shops, beauty brands, gadget sellers, jewelry pages, and handmade product stores can buy TikTok likes to make product videos look more trusted.',
      },
      {
        title: 'Local Businesses and SMEs',
        description:
          'Restaurants, cafés, cloud kitchens, salons, gyms, training centers, and service providers can use TikTok likes to boost offer videos, menu clips, service reels, customer moments, and local promotional content.',
      },
      {
        title: 'Agencies, Freelancers, and Resellers',
        description:
          'Digital agencies and freelancers often manage TikTok engagement for client accounts. TrendEvo helps them place TikTok likes orders from one dashboard with clear pricing, local payment support, and reseller-friendly access.',
      },
      {
        title: 'Startups, Public Figures, and Community Pages',
        description:
          'Startups, public figures, NGOs, media pages, and community projects need videos that look active and audience-approved. TikTok likes can support awareness clips, launch content, public messages, educational videos, and campaign posts.',
      },
    ],
  },

  workingProcess: {
    badge: 'WORKING PROCESS',
    underlineSrc: '/images/working-process/working-process-section-underline.svg',
    underlineWidth: 216,
    title: 'How to Buy TikTok Likes on TrendEvo — gt<Step by Step>',
    subtitle:
      'Buying TikTok likes in Bangladesh should be simple and clear. TrendEvo keeps the full process easy, so creators, business owners, influencers, agencies, freelancers, and resellers can place orders without technical knowledge.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    steps: [
      {
        number: '01',
        title: 'Create Your TrendEvo Account',
        description:
          'Sign up with basic details and enter the TrendEvo dashboard. From there, you can browse TikTok SMM Panel services, compare prices, and manage your orders from one place.',
      },
      {
        number: '02',
        title: 'Add Funds to Your Balance',
        description:
          'Add money to your account using supported payment methods in Bangladesh. You can fund your balance through bKash, Nagad, Rocket, or other available options before placing your TikTok likes order.',
      },
      {
        number: '03',
        title: 'Choose TikTok Likes Service',
        description:
          'Go to the TikTok services section and select the likes package that matches your video goal. You can choose a starter package, a content boost package, or a larger package for client campaigns.',
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
    title: 'Things to Know Before You Buy gt<TikTok Likes>',
    paragraphs: [
      'Buying TikTok likes can help your video look more active, but the best result comes when your content is ready for attention. Before placing an order on TrendEvo, make sure your TikTok video is public, your video link is correct, and your selected package fits your current video activity.',
      'You do not need to share your TikTok password to buy TikTok likes in Bangladesh. TrendEvo only needs your public video URL to process the order. This keeps the process safer and easier for creators, businesses, influencers, agencies, and resellers.',
      'For a natural video appearance, avoid sudden oversized orders on videos with weak hooks, unclear captions, or very low activity. Start with a suitable quantity, improve your opening seconds, and grow engagement step by step. This helps your TikTok video look more believable to Bangladeshi viewers.',
      'TikTok likes can support social proof, but they work best with strong videos. Use quick hooks, clear visuals, trending sounds, relatable topics, product benefits, local context, and strong captions so viewers have a reason to watch, like, and share.',
    ],
    ctaLabel: 'Create Your Account Now',
  },

  faq: {
    label: 'Frequently Asked Questions',
    title: 'Frequently Asked Questions — gt<Buy TikTok Likes> in Bangladesh',
    subtitle:
      'Find clear answers about buying TikTok likes in Bangladesh, payment options, delivery, safety, order tracking, and how TrendEvo helps support TikTok video engagement.',
    bg: 'section-7',
    items: [
      {
        question: 'Is it safe to buy TikTok likes from TrendEvo?',
        answer:
          'Yes, TrendEvo uses a simple order process where you only need to submit your public TikTok video link. We never ask for your TikTok password, so your login details stay private.',
      },
      {
        question: 'Can I buy TikTok likes in Bangladesh with bKash?',
        answer:
          'Yes, you can add funds using bKash and then place your TikTok likes order from the TrendEvo dashboard. We also support other local payment options for Bangladeshi users.',
      },
      {
        question: 'Do you accept Nagad or Rocket payments?',
        answer:
          'Yes, TrendEvo supports local payment methods such as Nagad, Rocket, and other available options. This makes it easier for creators, businesses, influencers, agencies, and resellers in Bangladesh.',
      },
      {
        question: 'Do I need to share my TikTok password?',
        answer:
          'No, you do not need to share your password. To buy TikTok likes, you only need to provide the correct TikTok video URL and choose your preferred quantity.',
      },
      {
        question: 'How fast will my TikTok likes order start?',
        answer:
          'Most orders start after submission and payment confirmation. Delivery time can vary based on service type, quantity, video status, and current order volume.',
      },
      {
        question: 'Can I track my TikTok likes order?',
        answer:
          'Yes, you can track your order status from the TrendEvo dashboard. The order panel helps you check whether your TikTok likes order is pending, processing, completed, or partially completed.',
      },
      {
        question: 'Can I buy likes for a new TikTok video?',
        answer:
          'Yes, new TikTok videos can order likes. For a natural appearance, it is better to start with a smaller package, improve your video hook, and increase engagement gradually.',
      },
      {
        question: 'Do TikTok likes help with video credibility?',
        answer:
          'Yes, TikTok likes make a video look more appreciated and viewer-approved. They support social proof, but long-term credibility also depends on content quality, consistency, and audience response.',
      },
      {
        question: 'Will buying TikTok likes help my video reach the FYP?',
        answer:
          'TikTok likes support engagement signals, but FYP reach depends on many factors such as watch time, completion rate, replays, shares, comments, topic interest, and video quality.',
      },
      {
        question: 'Who can use TrendEvo’s TikTok likes service?',
        answer:
          'TrendEvo is useful for Bangladeshi creators, influencers, eCommerce stores, local businesses, SMEs, startups, public figures, NGOs, digital agencies, freelancers, and SMM resellers who want stronger TikTok video engagement.',
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
      'TikTok likes help your videos look more engaging, but stronger growth comes when your content also gains views and profile trust. TrendEvo offers related TikTok SMM services in Bangladesh to support video performance, creator credibility, and brand awareness.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy TikTok Views',
        description:
          'Increase visibility for your TikTok videos with more views. This service helps product videos, trend clips, creator content, educational posts, and campaign videos look more active to new viewers.',
        icon: '/images/facebook-page-followers/facebook-page-followers-buy-facebook-likes-icon.webp',
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
      'Join TrendEvo and manage your TikTok, Instagram, Facebook, YouTube, Twitter (X), Telegram, and website traffic orders from one simple dashboard. Add funds with bKash, Nagad, or Rocket, choose your service, and start growing with secure order tracking.',
    primaryButtonLabel: 'Get Started Free',
    secondaryButtonLabel: 'See All TikTok Services',
    secondaryButtonHref: '/tiktok-smm-panel',
  },
};
