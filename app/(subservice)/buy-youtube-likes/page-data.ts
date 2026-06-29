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

type YoutubeLikesPageData = {
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

export const data: YoutubeLikesPageData = {
  seo: {
    title: 'Buy YouTube Likes in Bangladesh | TrendEvo',
    description:
      'Buy YouTube Likes in Bangladesh with TrendEvo. Improve video engagement, viewer trust, and content credibility using bKash, Nagad, Rocket, and secure orders.',
    canonical: '/buy-youtube-likes',
  },

  hero: {
    bg: 'section-1',
    variant: 'wide',
    trustLabel: '⭐ 4.8 Rating | Trusted by Bangladeshi YouTubers, Brands & Agencies',
    title: 'Buy gt<YouTube Likes> in Bangladesh for Stronger Video Engagement',
    description:
      'YouTube likes help viewers understand that a video is useful, interesting, or worth watching. When a video has more likes, it can look more trusted and engaging to new audiences. TrendEvo helps YouTubers, creators, businesses, educational channels, eCommerce brands, agencies, startups, SMEs, and local brands buy YouTube likes in Bangladesh through an easy lnk<YouTube SMM Panel|/youtube-smm-panel> with simple ordering, local payment support, and secure delivery.',
    descriptionSecondary:
      'Our YouTube Likes Service is made for videos that need better engagement, stronger social proof, and a more positive viewer response. As the lnk<best SMM Panel in Bangladesh|/> for YouTube growth, TrendEvo lets you choose a suitable YouTube like package, pay through bKash, Nagad, Rocket, or other supported methods, and improve your video credibility without sharing your password.',
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
      src: '/images/subservice/buy-youtube-likes/buy-youtube-likes-in-bangladesh-for-stronger-video-engagement.webp',
      alt: 'Buy YouTube Likes in Bangladesh with TrendEvo',
      width: 558,
      height: 621,
      maxWidthClassName: 'max-w-[558px]',
      unoptimized: true,
    },
  },

  orderForm: {
    badge: 'YouTube Services',
    serviceLabel: 'Likes',
    serviceTypeLabel: 'Likes',
    urlFieldLabel: 'YouTube Video URL',
    urlPlaceholder: 'https://youtube.com/watch?v=yourvideo',
    submitLabel: 'Pay Now With bKash/ Nagad',
  },

  whyChoose: {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: 'Why Choose TrendEvo to Buy gt<YouTube Likes> in Bangladesh',
    subtitle:
      'lnk<TrendEvo|/about-us> is built for Bangladeshi users who want a simple way to increase YouTube video engagement. From local payment support to clear order tracking, our Bangladesh SMM Panel helps creators, brands, educators, agencies, and resellers manage YouTube likes from one easy dashboard.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Fast Like Processing',
        description:
          'Your YouTube likes order starts after you submit it from the dashboard. Delivery speed may depend on the video status, package size, and current order volume, but TrendEvo keeps the process smooth and easy to follow.',
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Like Packages',
        description:
          'You can buy YouTube likes in Bangladesh without spending a large promotion budget. Our packages work well for new YouTubers, tutorial channels, product reviews, music videos, business content, agencies, and SMM resellers.',
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: 'Helpful Support Team',
        description:
          'Need help choosing the right YouTube Like Package? TrendEvo support can guide you with service selection, order status, payment issues, and dashboard use.',
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
        title: 'Engagement-Focused Growth',
        description:
          'TrendEvo focuses on YouTube likes that support viewer confidence, video credibility, and audience response. You can start with a small package, review the result, and increase likes based on your video campaign plan.',
        iconFrameSrc:
          '/images/subservice/shared/real-followers-from-quality-sources-decoration.png',
      },
    ],
  },

  whoShouldBuy: {
    badge: 'Buy YouTube Likes',
    title: 'Who Should Buy gt<YouTube Likes> in Bangladesh?',
    subtitle:
      'YouTube likes help a video look more valuable when viewers find it through search, Shorts, suggested videos, playlists, social shares, or channel pages. TrendEvo’s YouTube engagement service is useful for Bangladeshi users who want stronger video trust, better audience response, and more positive signals around important content.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    items: [
      {
        title: 'YouTubers and Content Creators',
        description:
          'Bangladeshi creators need likes to make videos look more appreciated by viewers. Vloggers, tech reviewers, food creators, travel channels, gamers, music artists, podcast hosts, and entertainment channels can use YouTube likes to improve the first impression of their videos.',
      },
      {
        title: 'Educational Channels and Trainers',
        description:
          'Teachers, coaching centers, online course creators, tutorial channels, and skill trainers can buy YouTube likes in Bangladesh to make lesson videos look more useful. A higher like count can help students feel more confident before watching the full video.',
      },
      {
        title: 'Businesses and E-commerce Brands',
        description:
          'Local businesses use YouTube for product demos, customer guides, testimonials, reviews, and brand videos. Fashion stores, gadget sellers, real estate companies, software firms, and service providers can use YouTube likes to strengthen video credibility.',
      },
      {
        title: 'Agencies, Freelancers, and Resellers',
        description:
          'Digital agencies and freelancers often manage YouTube campaigns for client videos. TrendEvo helps them place YouTube likes orders from one dashboard with clear pricing, local payment support, and reseller-friendly access.',
      },
      {
        title: 'Startups, Public Figures, and Institutions',
        description:
          'Startups, public figures, NGOs, media teams, and educational institutions need videos that look trusted and audience-approved. YouTube likes can support launch videos, awareness content, public messages, course promotions, and event highlights.',
      },
    ],
  },

  workingProcess: {
    badge: 'WORKING PROCESS',
    underlineSrc: '/images/working-process/how-to-buy-facebook-followers-on-trendevo-step-by-step-section-underline.svg',
    underlineWidth: 216,
    title: 'How to Buy YouTube Likes on TrendEvo — gt<Step by Step>',
    subtitle:
      'Buying YouTube likes in Bangladesh should be simple and clear. TrendEvo keeps the full process easy, so creators, business owners, educators, agencies, freelancers, and resellers can place orders without technical knowledge.',
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
          'Add money to your account using supported payment methods in Bangladesh. You can fund your balance through bKash, Nagad, Rocket, or other available options before placing your YouTube likes order.',
      },
      {
        number: '03',
        title: 'Choose YouTube Likes Service',
        description:
          'Go to the YouTube services section and select the likes package that matches your video goal. You can choose a starter package, a campaign package, or a larger package for client videos.',
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
    title: 'Things to Know Before You Buy gt<YouTube Likes>',
    paragraphs: [
      'Buying YouTube likes can help your video look more trusted, but the best result comes when your content is ready for viewers. Before placing an order on TrendEvo, make sure your YouTube video is public, the video link is correct, and your selected package matches your current video activity.',
      'You do not need to share your YouTube password to buy YouTube likes in Bangladesh. TrendEvo only needs your public video URL to process the order. This keeps the process safer and easier for creators, businesses, educators, agencies, and resellers.',
      'For a natural video appearance, avoid sudden oversized orders on videos with weak thumbnails, unclear titles, or very low activity. Start with a suitable quantity, improve your video presentation, and grow engagement step by step. This helps your video look more believable to Bangladeshi viewers.',
      'YouTube likes can support social proof, but they work best with helpful videos. Use clear titles, useful content, strong intros, good thumbnails, chapters, pinned comments, and descriptions so viewers have a reason to watch, like, and return.',
    ],
    ctaLabel: 'Create Your Account Now',
  },

  faq: {
    label: 'Frequently Asked Questions',
    title: 'Frequently Asked Questions — gt<Buy YouTube Likes> in Bangladesh',
    subtitle:
      'Find clear answers about buying YouTube likes in Bangladesh, payment options, delivery, safety, order tracking, and how TrendEvo helps support YouTube video engagement.',
    bg: 'section-7',
    items: [
      {
        question: 'Is it safe to buy YouTube likes from TrendEvo?',
        answer:
          'Yes, TrendEvo uses a simple order process where you only need to submit your public YouTube video link. We never ask for your YouTube password, so your login details stay private.',
      },
      {
        question: 'Can I buy YouTube likes in Bangladesh with bKash?',
        answer:
          'Yes, you can add funds using bKash and then place your YouTube likes order from the TrendEvo dashboard. We also support other local payment options for Bangladeshi users.',
      },
      {
        question: 'Do you accept Nagad or Rocket payments?',
        answer:
          'Yes, TrendEvo supports local payment methods such as Nagad, Rocket, and other available options. This makes it easier for creators, businesses, educators, agencies, and resellers in Bangladesh.',
      },
      {
        question: 'Do I need to share my YouTube password?',
        answer:
          'No, you do not need to share your password. To buy YouTube likes, you only need to provide the correct YouTube video URL and choose your preferred quantity.',
      },
      {
        question: 'How fast will my YouTube likes order start?',
        answer:
          'Most orders start after submission and payment confirmation. Delivery time can vary based on service type, quantity, video status, and current order volume.',
      },
      {
        question: 'Can I track my YouTube likes order?',
        answer:
          'Yes, you can track your order status from the TrendEvo dashboard. The order panel helps you check whether your YouTube likes order is pending, processing, completed, or partially completed.',
      },
      {
        question: 'Can I buy likes for a new YouTube video?',
        answer:
          'Yes, new YouTube videos can order likes. For a natural appearance, it is better to start with a smaller package, improve your thumbnail and title, and increase engagement gradually.',
      },
      {
        question: 'Do YouTube likes help with video credibility?',
        answer:
          'Yes, YouTube likes can help a video look more useful and viewer-approved. They support social proof, but real long-term performance also depends on watch time, topic quality, and audience response.',
      },
      {
        question: 'Will buying YouTube likes improve recommendations?',
        answer:
          'YouTube likes can support engagement signals, but recommendations depend on many factors such as watch time, click-through rate, retention, viewer satisfaction, titles, thumbnails, and content relevance.',
      },
      {
        question: 'Who can use TrendEvo’s YouTube likes service?',
        answer:
          'TrendEvo is useful for Bangladeshi YouTubers, educators, eCommerce brands, local businesses, startups, public figures, NGOs, digital agencies, freelancers, and SMM resellers who want stronger YouTube video engagement.',
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
      'YouTube likes help your videos look more trusted, but stronger growth comes when your content also gains visibility and channel authority. TrendEvo offers related YouTube SMM services in Bangladesh to support engagement, performance, and long-term growth.',
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
        title: 'Buy YouTube Subscribers',
        description:
          'Grow your channel authority with more YouTube subscribers. This service helps creators, businesses, and educational channels build a stronger first impression when viewers visit your channel.',
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
