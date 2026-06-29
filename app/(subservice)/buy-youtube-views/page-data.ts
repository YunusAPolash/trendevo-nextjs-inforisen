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

type YoutubeViewsPageData = {
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

export const data: YoutubeViewsPageData = {
  seo: {
    title: 'Buy YouTube Views in Bangladesh | TrendEvo',
    description:
      'Buy YouTube Views in Bangladesh with TrendEvo. Increase video visibility, content reach, and watch activity using bKash, Nagad, Rocket, and secure orders.',
    canonical: '/buy-youtube-views',
  },

  hero: {
    bg: 'section-1',
    variant: 'wide',
    trustLabel: '⭐ 4.8 Rating | Trusted by Bangladeshi YouTubers, Brands & Agencies',
    title: 'Buy gt<YouTube Views> in Bangladesh for Better Video Visibility',
    description:
      'YouTube views help a video look more active when people find it through search, Shorts, suggested videos, ads, or channel visits. A video with stronger views can attract more attention, build audience confidence, and support better content discovery. TrendEvo helps YouTubers, creators, businesses, educational channels, eCommerce brands, agencies, startups, SMEs, and local brands buy YouTube views in Bangladesh through an easy lnk<YouTube SMM Panel|/youtube-smm-panel> with local payment support and secure delivery.',
    descriptionSecondary:
      'Our YouTube Views Service is made for videos that need stronger visibility, better watch activity, and a more trusted first impression. As a lnk<best SMM Panel|/> choice for YouTube growth, TrendEvo lets you choose a suitable view package, pay through bKash, Nagad, Rocket, or other supported methods, and improve your YouTube content performance without sharing your password.',
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
      alt: 'Buy YouTube Views in Bangladesh with TrendEvo',
      width: 558,
      height: 621,
      maxWidthClassName: 'max-w-[558px]',
      unoptimized: true,
    },
  },

  orderForm: {
    badge: 'YouTube Services',
    serviceLabel: 'Views',
    serviceTypeLabel: 'Views',
    urlFieldLabel: 'YouTube Video URL',
    urlPlaceholder: 'https://youtube.com/watch?v=yourvideo',
    submitLabel: 'Pay Now With bKash/ Nagad',
  },

  whyChoose: {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: 'Why Choose TrendEvo to Buy gt<YouTube Views> in Bangladesh',
    subtitle:
      'lnk<TrendEvo|/about-us> is built for Bangladeshi users who want a simple way to improve YouTube video reach. From local payment support to clear order tracking, our Bangladesh SMM Panel helps creators, brands, agencies, educators, and resellers manage YouTube views from one simple dashboard.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Fast View Processing',
        description:
          'Your YouTube views order starts after you submit it from the dashboard. Delivery speed may depend on the video status, package size, and current order volume, but TrendEvo keeps the process smooth and easy to follow.',
        icon: '/images/facebook-page-followers/facebook-page-followers-instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable View Packages',
        description:
          'You can buy YouTube views in Bangladesh without spending a large promotion budget. Our packages work well for new YouTubers, educational channels, product videos, music releases, business content, agencies, and SMM resellers.',
        icon: '/images/facebook-page-followers/facebook-page-followers-affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: 'Helpful Support Team',
        description:
          'Need help choosing the right YouTube View Package? TrendEvo support can guide you with service selection, order status, payment issues, and dashboard use.',
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
          'Pay easily through bKash, Nagad, Rocket, and other supported methods. TrendEvo makes YouTube Marketing Bangladesh easier for users who prefer trusted local payment systems.',
        icon: '/images/facebook-page-followers/facebook-page-followers-local-payment-bkash-nagad-rocket-and-more-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Visibility-Focused Growth',
        description:
          'TrendEvo focuses on YouTube views that support content exposure, brand awareness, and audience perception. You can start with a small package, review the result, and increase view activity based on your video strategy.',
        iconFrameSrc:
          '/images/facebook-page-followers/facebook-page-followers-real-followers-from-quality-sources-decoration.png',
      },
    ],
  },

  whoShouldBuy: {
    badge: 'Buy YouTube Views',
    title: 'Who Should Buy gt<YouTube Views> in Bangladesh?',
    subtitle:
      'YouTube views help a video look more watchable when viewers discover it from search results, suggested videos, playlists, Shorts, social shares, or channel pages. TrendEvo’s YouTube growth service is useful for Bangladeshi users who want stronger video visibility, better content reach, and more attention around important videos.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    items: [
      {
        title: 'YouTubers and Content Creators',
        description:
          'Bangladeshi creators need views to make videos look more active and worth watching. Vloggers, tech reviewers, food creators, travel channels, gaming creators, music artists, podcast hosts, and entertainment channels can use YouTube views to support stronger discovery.',
      },
      {
        title: 'Educational Channels and Trainers',
        description:
          'Teachers, coaching centers, online course creators, tutorial channels, and skill trainers can buy YouTube views in Bangladesh to make lessons, explainers, and course videos look more trusted. More views can help students feel confident before watching.',
      },
      {
        title: 'Businesses and E-commerce Brands',
        description:
          'Local businesses use YouTube for product demos, reviews, customer guides, event videos, and brand stories. Fashion stores, gadget sellers, real estate companies, software firms, and service providers can use YouTube views to improve video credibility.',
      },
      {
        title: 'Agencies, Freelancers, and Resellers',
        description:
          'Digital agencies and freelancers often manage YouTube campaigns for clients. TrendEvo helps them place YouTube views orders from one dashboard with clear pricing, local payment support, and reseller-friendly access.',
      },
      {
        title: 'Startups, Public Figures, and Institutions',
        description:
          'Startups, public figures, NGOs, media teams, and educational institutions need videos that look active and visible. YouTube views can support launch videos, awareness campaigns, public messages, course promotions, and event coverage.',
      },
    ],
  },

  workingProcess: {
    badge: 'WORKING PROCESS',
    underlineSrc: '/images/working-process/working-process-section-underline.svg',
    underlineWidth: 216,
    title: 'How to Buy YouTube Views on TrendEvo — gt<Step by Step>',
    subtitle:
      'Buying YouTube views in Bangladesh should be simple and clear. TrendEvo keeps the full process easy, so creators, business owners, educators, agencies, freelancers, and resellers can place orders without technical knowledge.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    steps: [
      {
        number: '01',
        title: 'Create Your TrendEvo Account',
        description:
          'Sign up with basic details and enter the TrendEvo dashboard. From there, you can browse YouTube SMM Panel services, compare prices, and manage your orders from one place.',
      },
      {
        number: '02',
        title: 'Add Funds to Your Balance',
        description:
          'Add money to your account using supported payment methods in Bangladesh. You can fund your balance through bKash, Nagad, Rocket, or other available options before placing your YouTube views order.',
      },
      {
        number: '03',
        title: 'Choose YouTube Views Service',
        description:
          'Go to the YouTube services section and select the views package that matches your video goal. You can choose a starter package, a campaign package, or a larger package for client videos.',
      },
      {
        number: '04',
        title: 'Enter Your YouTube Video URL',
        description:
          'Paste the correct YouTube video link, select the quantity, and submit the order. You do not need to share your YouTube password. TrendEvo processes the order using the public video URL only.',
      },
    ],
  },

  thingsToKnow: {
    badge: 'Things to Know',
    title: 'Things to Know Before You Buy gt<YouTube Views>',
    paragraphs: [
      'Buying YouTube views can help your video look more visible, but the best result comes when your video is ready for viewers. Before placing an order on TrendEvo, make sure your YouTube video is public, the video link is correct, and your selected package matches your current channel size.',
      'You do not need to share your YouTube password to buy YouTube views in Bangladesh. TrendEvo only needs your public video URL to process the order. This keeps the process safer and easier for creators, businesses, educators, agencies, and resellers.',
      'For a natural video appearance, avoid sudden oversized orders on a channel with weak thumbnails, unclear titles, or very little content. Start with a suitable quantity, improve your video presentation, and grow step by step. This helps your videos look more believable to Bangladeshi viewers.',
      'YouTube views can support content visibility, but they work best with valuable videos. Use strong titles, clear thumbnails, useful content, good openings, playlists, Shorts, and descriptions so viewers have a reason to watch longer and return.',
    ],
    ctaLabel: 'Create Your Account Now',
  },

  faq: {
    label: 'Frequently Asked Questions',
    title: 'Frequently Asked Questions — gt<Buy YouTube Views> in Bangladesh',
    subtitle:
      'Find clear answers about buying YouTube views in Bangladesh, payment options, delivery, safety, order tracking, and how TrendEvo helps support YouTube video visibility.',
    bg: 'section-7',
    items: [
      {
        question: 'Is it safe to buy YouTube views from TrendEvo?',
        answer:
          'Yes, TrendEvo uses a simple order process where you only need to submit your public YouTube video link. We never ask for your YouTube password, so your login details stay private.',
      },
      {
        question: 'Can I buy YouTube views in Bangladesh with bKash?',
        answer:
          'Yes, you can add funds using bKash and then place your YouTube views order from the TrendEvo dashboard. We also support other local payment options for Bangladeshi users.',
      },
      {
        question: 'Do you accept Nagad or Rocket payments?',
        answer:
          'Yes, TrendEvo supports local payment methods such as Nagad, Rocket, and other available options. This makes it easier for creators, businesses, educators, agencies, and resellers in Bangladesh.',
      },
      {
        question: 'Do I need to share my YouTube password?',
        answer:
          'No, you do not need to share your password. To buy YouTube views, you only need to provide the correct YouTube video URL and choose your preferred quantity.',
      },
      {
        question: 'How fast will my YouTube views order start?',
        answer:
          'Most orders start after submission and payment confirmation. Delivery time can vary based on service type, quantity, video status, and current order volume.',
      },
      {
        question: 'Can I track my YouTube views order?',
        answer:
          'Yes, you can track your order status from the TrendEvo dashboard. The order panel helps you check whether your YouTube views order is pending, processing, completed, or partially completed.',
      },
      {
        question: 'Can I buy views for a new YouTube video?',
        answer:
          'Yes, new YouTube videos can order views. For a natural appearance, it is better to start with a smaller package, improve your thumbnail and title, and increase views gradually.',
      },
      {
        question: 'Do YouTube views help with video discovery?',
        answer:
          'YouTube views can support visible activity and audience confidence. Video discovery also depends on watch time, click-through rate, topic demand, thumbnails, titles, retention, and viewer response.',
      },
      {
        question: 'Will buying YouTube views increase my subscribers?',
        answer:
          'YouTube views can bring more attention to your video, but subscribers depend on content quality, channel trust, video value, upload consistency, and how clearly you ask viewers to subscribe.',
      },
      {
        question: 'Who can use TrendEvo’s YouTube views service?',
        answer:
          'TrendEvo is useful for Bangladeshi YouTubers, educators, eCommerce brands, local businesses, startups, public figures, NGOs, digital agencies, freelancers, and SMM resellers who want stronger YouTube video visibility.',
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
      'YouTube views help your videos get more attention, but stronger growth comes when your channel also builds trust and engagement. TrendEvo offers related YouTube SMM services in Bangladesh to support video performance, channel authority, and content reach.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy YouTube Subscribers',
        description:
          'Grow your channel authority with more YouTube subscribers. This service helps creators, businesses, and educational channels build a stronger first impression when viewers visit after watching a video.',
        icon: '/images/facebook-page-followers/facebook-page-followers-buy-facebook-comments-icon.webp',
        iconWidth: 39,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'h-[128.12%] w-[120.8%] object-cover -translate-x-[10.27%] -translate-y-[9.29%]',
      },
      {
        title: 'Buy YouTube Likes',
        description:
          'Improve the engagement signal of your YouTube videos with more likes. YouTube likes help tutorials, reviews, music videos, shorts, and business content look more valuable to new viewers.',
        icon: '/images/facebook-page-followers/facebook-page-followers-buy-facebook-likes-icon.webp',
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
      'Join TrendEvo and manage your YouTube, Instagram, Facebook, TikTok, Telegram, and website traffic orders from one simple dashboard. Add funds with bKash, Nagad, or Rocket, choose your service, and start growing with secure order tracking.',
    primaryButtonLabel: 'Get Started Free',
    secondaryButtonLabel: 'See All YouTube Services',
    secondaryButtonHref: '/youtube-smm-panel',
  },
};
