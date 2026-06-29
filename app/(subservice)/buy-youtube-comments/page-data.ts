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

type YoutubeCommentsPageData = {
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

export const data: YoutubeCommentsPageData = {
  seo: {
    title: 'Buy YouTube Comments in Bangladesh | TrendEvo',
    description:
      'Buy YouTube Comments in Bangladesh with TrendEvo. Build video discussion, viewer trust, and stronger engagement using bKash, Nagad, Rocket, and secure orders.',
    canonical: '/buy-youtube-comments',
  },

  hero: {
    bg: 'section-1',
    variant: 'wide',
    trustLabel: '⭐ 4.8 Rating | Trusted by Bangladeshi YouTubers, Brands & Agencies',
    title: 'Buy gt<YouTube Comments> in Bangladesh for Stronger Viewer Interaction',
    description:
      'YouTube comments make a video feel active, useful, and worth discussing. When viewers see conversations under a tutorial, review, vlog, product video, or music release, they are more likely to trust the content and spend more time with it. TrendEvo helps YouTubers, educators, businesses, eCommerce brands, agencies, startups, SMEs, and local creators buy YouTube comments in Bangladesh through the lnk<best YouTube SMM Panel in Bangladesh|/youtube-smm-panel> with simple ordering, local payment support, and secure delivery.',
    descriptionSecondary:
      'Our YouTube Comments Service is made for videos that need better audience interaction, stronger social proof, and a more active community feel. You can choose a suitable YouTube comment package, pay through bKash, Nagad, Rocket, or other supported methods, and improve your video credibility without sharing your password.',
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
      src: '/images/subservice/buy-youtube-comments/buy-youtube-comments-in-bangladesh-for-stronger-viewer-interaction.webp',
      alt: 'Buy YouTube Comments in Bangladesh with TrendEvo',
      width: 558,
      height: 621,
      maxWidthClassName: 'max-w-[558px]',
      unoptimized: true,
    },
  },

  orderForm: {
    badge: 'YouTube Services',
    serviceLabel: 'Comments',
    serviceTypeLabel: 'Comments',
    urlFieldLabel: 'YouTube Video URL',
    urlPlaceholder: 'https://youtube.com/watch?v=yourvideo',
    submitLabel: 'Pay Now With bKash/ Nagad',
  },

  whyChoose: {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: 'Why Choose TrendEvo to Buy gt<YouTube Comments> in Bangladesh',
    subtitle:
      'lnk<TrendEvo|/about-us> is built for Bangladeshi users who want a simple way to increase YouTube audience interaction. From local payment support to clear order tracking, our lnk<SMM Panel|/> helps creators, brands, educators, agencies, and resellers manage YouTube comments from one easy dashboard.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Fast Comment Processing',
        description:
          'Your YouTube comments order starts after you submit it from the dashboard. Delivery speed may depend on the video status, package size, and current order volume, but TrendEvo keeps the process smooth and easy to follow.',
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Comment Packages',
        description:
          'You can buy YouTube comments in Bangladesh without spending a large marketing budget. Our packages work well for new YouTubers, tutorial channels, product reviews, music videos, business videos, agencies, and SMM resellers.',
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: 'Helpful Support Team',
        description:
          'Need help choosing the right YouTube Comment Package? TrendEvo support can guide you with service selection, order status, payment issues, and dashboard use.',
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
          'Pay easily through bKash, Nagad, Rocket, and other supported methods. TrendEvo makes YouTube Marketing Bangladesh easier for users who prefer trusted local payment systems.',
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Discussion-Focused Growth',
        description:
          'TrendEvo focuses on YouTube comments that support viewer participation, video credibility, and community activity. You can start with a small package, review the result, and increase comments based on your video campaign plan.',
        iconFrameSrc:
          '/images/subservice/shared/real-followers-from-quality-sources-decoration.png',
      },
    ],
  },

  whoShouldBuy: {
    badge: 'Buy YouTube Comments',
    title: 'Who Should Buy gt<YouTube Comments> in Bangladesh?',
    subtitle:
      'YouTube comments help videos look more interactive when viewers find them through search, Shorts, suggested videos, playlists, social shares, or channel pages. TrendEvo’s YouTube engagement service is useful for Bangladeshi users who want stronger video discussions, better audience response, and more visible community activity.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    items: [
      {
        title: 'YouTubers and Content Creators',
        description:
          'Bangladeshi creators need comments to make videos feel more active and audience-driven. Vloggers, tech reviewers, food creators, travel channels, gamers, music artists, podcast hosts, and entertainment channels can use YouTube comments to build stronger viewer interaction.',
      },
      {
        title: 'Educational Channels and Trainers',
        description:
          'Teachers, coaching centers, online course creators, tutorial channels, and skill trainers can buy YouTube comments in Bangladesh to make lesson videos look more helpful and discussion-friendly. Comments can support questions, feedback, and learning-based engagement.',
      },
      {
        title: 'Businesses and E-commerce Brands',
        description:
          'Local businesses use YouTube for product demos, customer guides, testimonials, reviews, and brand explainers. Fashion stores, gadget sellers, real estate companies, software firms, and service providers can use YouTube comments to make videos look more trusted.',
      },
      {
        title: 'Agencies, Freelancers, and Resellers',
        description:
          'Digital agencies and freelancers often manage YouTube campaigns for client videos. TrendEvo helps them place YouTube comments orders from one dashboard with clear pricing, local payment support, and reseller-friendly access.',
      },
      {
        title: 'Startups, Public Figures, and Institutions',
        description:
          'Startups, public figures, NGOs, media teams, and educational institutions need videos that encourage discussion. YouTube comments can support launch videos, awareness content, public messages, course promotions, and event highlights.',
      },
    ],
  },

  workingProcess: {
    badge: 'WORKING PROCESS',
    underlineSrc: '/images/working-process/how-to-buy-facebook-followers-on-trendevo-step-by-step-section-underline.svg',
    underlineWidth: 216,
    title: 'How to Buy YouTube Comments on TrendEvo — gt<Step by Step>',
    subtitle:
      'Buying YouTube comments in Bangladesh should be simple and clear. TrendEvo keeps the full process easy, so creators, business owners, educators, agencies, freelancers, and resellers can place orders without technical knowledge.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    steps: [
      {
        number: '01',
        title: 'Create Your TrendEvo Account',
        description:
          'Sign up with basic details and enter the TrendEvo dashboard. From there, you can browse YouTube lnk<SMM Panel services in Bangladesh|/services>, compare prices, and manage your orders from one place.',
      },
      {
        number: '02',
        title: 'Add Funds to Your Balance',
        description:
          'Add money to your account using supported payment methods in Bangladesh. You can fund your balance through bKash, Nagad, Rocket, or other available options before placing your YouTube comments order.',
      },
      {
        number: '03',
        title: 'Choose YouTube Comments Service',
        description:
          'Go to the YouTube services section and select the comments package that matches your video goal. You can choose a starter package, a campaign package, or a larger package for client videos.',
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
    title: 'Things to Know Before You Buy gt<YouTube Comments>',
    paragraphs: [
      'Buying YouTube comments can help your video look more active, but the best result comes when your content gives viewers something to talk about. Before placing an order on TrendEvo, make sure your YouTube video is public, the video link is correct, and your selected package matches your current video activity.',
      'You do not need to share your YouTube password to buy YouTube comments in Bangladesh. TrendEvo only needs your public video URL to process the order. This keeps the process safer and easier for creators, businesses, educators, agencies, and resellers.',
      'For a natural video appearance, avoid sudden oversized comment orders on videos with weak titles, unclear topics, or very low activity. Start with a suitable quantity, improve your video presentation, and grow discussion step by step. This helps your video look more believable to Bangladeshi viewers.',
      'YouTube comments can support social proof, but they work best with useful videos. Ask simple questions, pin a comment, reply to viewers, add clear descriptions, and create videos that invite opinions, feedback, and real conversation.',
    ],
    ctaLabel: 'Create Your Account Now',
  },

  faq: {
    label: 'Frequently Asked Questions',
    title: 'Frequently Asked Questions — gt<Buy YouTube Comments> in Bangladesh',
    subtitle:
      'Find clear answers about buying YouTube comments in Bangladesh, payment options, delivery, safety, order tracking, and how TrendEvo helps support YouTube audience interaction.',
    bg: 'section-7',
    items: [
      {
        question: 'Is it safe to buy YouTube comments from TrendEvo?',
        answer:
          'Yes, TrendEvo uses a simple order process where you only need to submit your public YouTube video link. We never ask for your YouTube password, so your login details stay private.',
      },
      {
        question: 'Can I buy YouTube comments in Bangladesh with bKash?',
        answer:
          'Yes, you can add funds using bKash and then place your YouTube comments order from the TrendEvo dashboard. We also support other local payment options for Bangladeshi users.',
      },
      {
        question: 'Do you accept Nagad or Rocket payments?',
        answer:
          'Yes, TrendEvo supports local payment methods such as Nagad, Rocket, and other available options. This makes it easier for creators, businesses, educators, agencies, and resellers in Bangladesh.',
      },
      {
        question: 'Do I need to share my YouTube password?',
        answer:
          'No, you do not need to share your password. To buy YouTube comments, you only need to provide the correct YouTube video URL and choose your preferred quantity.',
      },
      {
        question: 'How fast will my YouTube comments order start?',
        answer:
          'Most orders start after submission and payment confirmation. Delivery time can vary based on service type, quantity, video status, and current order volume.',
      },
      {
        question: 'Can I track my YouTube comments order?',
        answer:
          'Yes, you can track your order status from the TrendEvo dashboard. The order panel helps you check whether your YouTube comments order is pending, processing, completed, or partially completed.',
      },
      {
        question: 'Can I buy comments for a new YouTube video?',
        answer:
          'Yes, new YouTube videos can order comments. For a natural appearance, it is better to start with a smaller package, improve your title and description, and increase comment activity gradually.',
      },
      {
        question: 'Do YouTube comments help with video credibility?',
        answer:
          'Yes, YouTube comments can make a video look more active and viewer-focused. They support social proof, but long-term credibility also depends on content quality, value, and creator consistency.',
      },
      {
        question: 'Will buying YouTube comments improve recommendations?',
        answer:
          'YouTube comments can support engagement signals, but recommendations depend on many factors such as watch time, click-through rate, retention, viewer satisfaction, titles, thumbnails, and content relevance.',
      },
      {
        question: 'Who can use TrendEvo’s YouTube comments service?',
        answer:
          'TrendEvo is useful for Bangladeshi YouTubers, educators, eCommerce brands, local businesses, startups, public figures, NGOs, digital agencies, freelancers, and SMM resellers who want stronger YouTube video interaction.',
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
      'YouTube comments help your videos create visible discussion, but stronger growth comes when your content also gains views and engagement. TrendEvo offers related YouTube SMM services in Bangladesh to support video performance, trust, and long-term channel growth.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy YouTube Views',
        description:
          'Increase visibility for your YouTube videos with more views. This service helps tutorials, product reviews, music videos, Shorts, business content, and campaign videos look more active to new viewers.',
        icon: '/images/subservice/shared/buy-facebook-page-likes-icon.webp',
        iconWidth: 39,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'h-[128.12%] w-[120.8%] object-cover -translate-x-[10.27%] -translate-y-[9.29%]',
      },
      {
        title: 'Buy YouTube Likes',
        description:
          'Improve the engagement signal of your YouTube videos with more likes. YouTube likes help videos look more useful, viewer-approved, and trusted when new audiences decide whether to watch.',
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
      'Join TrendEvo and manage your YouTube, Instagram, Facebook, TikTok, Telegram, and website traffic orders from one simple dashboard. Add funds with bKash, Nagad, or Rocket, choose your service, and start growing with secure order tracking.',
    primaryButtonLabel: 'Get Started Free',
    secondaryButtonLabel: 'See All YouTube Services',
    secondaryButtonHref: '/youtube-smm-panel',
  },
};
