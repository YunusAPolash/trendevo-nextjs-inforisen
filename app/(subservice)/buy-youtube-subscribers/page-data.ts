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

type YoutubeSubscribersPageData = {
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

export const data: YoutubeSubscribersPageData = {
  seo: {
    title: 'Buy YouTube Subscribers in Bangladesh | TrendEvo',
    description:
      'Buy YouTube Subscribers in Bangladesh with TrendEvo. Build channel trust, creator credibility, and audience growth using bKash, Nagad, Rocket, and secure orders.',
    canonical: '/buy-youtube-subscribers',
  },

  hero: {
    bg: 'section-1',
    variant: 'wide',
    trustLabel: '⭐ 4.8 Rating | Trusted by Bangladeshi YouTubers, Creators & Agencies',
    title: 'Buy gt<YouTube Subscribers> in Bangladesh for Stronger Channel Growth',
    description:
      'A YouTube channel with more subscribers can look more trusted, active, and ready for long-term growth. When viewers land on your channel after watching a video, the subscriber count often helps them decide whether the channel is worth following. TrendEvo helps YouTubers, educators, businesses, eCommerce brands, agencies, startups, and local creators buy YouTube subscribers in Bangladesh through an easy lnk<YouTube SMM Panel|/youtube-smm-panel> with simple ordering, local payment support, and secure delivery.',
    descriptionSecondary:
      'Our YouTube Subscribers Service is made for channels that need better credibility, stronger audience trust, and a more professional channel presence. As a lnk<best SMM Panel|/> choice for YouTube growth, TrendEvo lets you choose a suitable subscriber package, pay through bKash, Nagad, Rocket, or other supported methods, and grow your YouTube channel without sharing your password.',
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
      src: '/images/subservice/buy-youtube-subscribers/buy-youtube-subscribers-in-bangladesh-for-stronger-channel-growth.webp',
      alt: 'Buy YouTube Subscribers in Bangladesh with TrendEvo',
      width: 558,
      height: 621,
      maxWidthClassName: 'max-w-[558px]',
      unoptimized: true,
    },
  },

  orderForm: {
    badge: 'YouTube Services',
    serviceLabel: 'Subscribers',
    serviceTypeLabel: 'Subscribers',
    urlFieldLabel: 'YouTube Channel URL',
    urlPlaceholder: 'https://youtube.com/@yourchannel',
    submitLabel: 'Pay Now With bKash/ Nagad',
  },

  whyChoose: {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: 'Why Choose TrendEvo to Buy gt<YouTube Subscribers> in Bangladesh',
    subtitle:
      'lnk<TrendEvo|/about-us> is built for Bangladeshi users who want a simple way to improve YouTube channel credibility. From local payment support to easy order tracking, our Bangladesh SMM Panel helps creators, businesses, agencies, educators, and resellers manage YouTube subscriber growth from one clean dashboard.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Fast Subscriber Processing',
        description:
          'Your YouTube subscribers order starts after you submit it from the dashboard. Delivery speed may depend on the package size, channel status, and current order volume, but TrendEvo keeps the process smooth and easy to follow.',
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Subscriber Packages',
        description:
          'You can buy YouTube subscribers in Bangladesh without using a large promotion budget. Our packages work well for new YouTubers, educational channels, business channels, podcast channels, music creators, agencies, and SMM resellers.',
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: 'Helpful Support Team',
        description:
          'Need help choosing the right YouTube Subscriber Package? TrendEvo support can guide you with service selection, order status, payment issues, and dashboard use.',
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
        title: 'Channel Credibility Focus',
        description:
          'TrendEvo focuses on YouTube subscribers that support channel trust, brand authority, and audience perception. You can start with a small order, review the result, and scale your subscriber growth based on your channel plan.',
        iconFrameSrc:
          '/images/subservice/shared/real-followers-from-quality-sources-decoration.png',
      },
    ],
  },

  whoShouldBuy: {
    badge: 'Buy YouTube Subscribers',
    title: 'Who Should Buy gt<YouTube Subscribers> in Bangladesh?',
    subtitle:
      'YouTube subscribers help a channel look more established when viewers visit after watching a video, short, live stream, tutorial, review, or ad. TrendEvo’s YouTube growth service is useful for Bangladeshi users who want stronger channel authority, better audience confidence, and a smoother path toward long-term content growth.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    items: [
      {
        title: 'YouTubers and Content Creators',
        description:
          'Bangladeshi creators need channel trust to turn casual viewers into subscribers. Vloggers, tech reviewers, food creators, travel channels, gaming creators, music channels, comedy pages, and podcast hosts can use YouTube subscribers to build a stronger first impression.',
      },
      {
        title: 'Educational Channels and Trainers',
        description:
          'Teachers, coaching centers, online course creators, skill trainers, and tutorial channels can buy YouTube subscribers in Bangladesh to make their channel look more reliable. A stronger subscriber base can help students feel more confident before watching lessons or subscribing.',
      },
      {
        title: 'Businesses and E-commerce Brands',
        description:
          'Local businesses and online stores use YouTube for product demos, customer guides, reviews, and brand videos. Fashion shops, gadget sellers, software companies, real estate brands, and service providers can use YouTube subscribers to support brand authority.',
      },
      {
        title: 'Agencies, Freelancers, and Resellers',
        description:
          'Digital agencies and freelancers often manage YouTube channels for clients. TrendEvo helps them place YouTube subscriber orders from one dashboard with clear pricing, local payment support, and reseller-friendly access.',
      },
      {
        title: 'Startups, Public Figures, and Institutions',
        description:
          'Startups, public figures, NGOs, media teams, and educational institutions need a trusted channel image. YouTube subscribers can support awareness videos, public messages, event coverage, course promotion, and brand storytelling.',
      },
    ],
  },

  workingProcess: {
    badge: 'WORKING PROCESS',
    underlineSrc: '/images/working-process/how-to-buy-facebook-followers-on-trendevo-step-by-step-section-underline.svg',
    underlineWidth: 216,
    title: 'How to Buy YouTube Subscribers on TrendEvo — gt<Step by Step>',
    subtitle:
      'Buying YouTube subscribers in Bangladesh should be simple and clear. TrendEvo keeps the full process easy, so creators, business owners, educators, agencies, freelancers, and resellers can place orders without technical knowledge.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    steps: [
      {
        number: '01',
        title: 'Create Your TrendEvo Account',
        description:
          'Sign up with basic details and enter the TrendEvo dashboard. From there, you can browse YouTube lnk<SMM Panel services|/services>, compare prices, and manage your orders from one place.',
      },
      {
        number: '02',
        title: 'Add Funds to Your Balance',
        description:
          'Add money to your account using supported payment methods in Bangladesh. You can fund your balance through bKash, Nagad, Rocket, or other available options before placing your YouTube subscribers order.',
      },
      {
        number: '03',
        title: 'Choose YouTube Subscribers Service',
        description:
          'Go to the YouTube services section and select the subscriber package that matches your channel goal. You can choose a starter package, a creator growth package, or a larger package for client channels.',
      },
      {
        number: '04',
        title: 'Enter Your YouTube Channel URL',
        description:
          'Paste the correct YouTube channel link, select the quantity, and submit the order. You do not need to share your YouTube password. TrendEvo processes the order using the public channel URL only.',
      },
    ],
  },

  thingsToKnow: {
    badge: 'Things to Know',
    title: 'Things to Know Before You Buy gt<YouTube Subscribers>',
    paragraphs: [
      'Buying YouTube subscribers can help your channel look more credible, but the best result comes when your channel is ready for new visitors. Before placing an order on TrendEvo, make sure your YouTube channel is public, your channel link is correct, and your selected package fits your current channel size.',
      'You do not need to share your YouTube password to buy YouTube subscribers in Bangladesh. TrendEvo only needs your public channel URL to process the order. This keeps the process safer and easier for creators, businesses, educators, agencies, and resellers.',
      'For a natural channel appearance, avoid sudden oversized orders on a channel with very few videos or weak branding. Start with a suitable quantity, improve your channel banner, organize playlists, and grow step by step. This helps your channel look more believable to Bangladeshi viewers.',
      'YouTube subscribers can support credibility, but they work best with useful videos. Upload clear tutorials, reviews, shorts, product demos, educational content, customer stories, and consistent series so viewers have a real reason to subscribe and return.',
    ],
    ctaLabel: 'Create Your Account Now',
  },

  faq: {
    label: 'Frequently Asked Questions',
    title: 'Frequently Asked Questions — gt<Buy YouTube Subscribers> in Bangladesh',
    subtitle:
      'Find clear answers about buying YouTube subscribers in Bangladesh, payment options, delivery, safety, order tracking, and how TrendEvo helps support YouTube channel growth.',
    bg: 'section-7',
    items: [
      {
        question: 'Is it safe to buy YouTube subscribers from TrendEvo?',
        answer:
          'Yes, TrendEvo uses a simple order process where you only need to submit your public YouTube channel link. We never ask for your YouTube password, so your login details stay private.',
      },
      {
        question: 'Can I buy YouTube subscribers in Bangladesh with bKash?',
        answer:
          'Yes, you can add funds using bKash and then place your YouTube subscribers order from the TrendEvo dashboard. We also support other local payment options for Bangladeshi users.',
      },
      {
        question: 'Do you accept Nagad or Rocket payments?',
        answer:
          'Yes, TrendEvo supports local payment methods such as Nagad, Rocket, and other available options. This makes it easier for creators, businesses, educators, agencies, and resellers in Bangladesh.',
      },
      {
        question: 'Do I need to share my YouTube password?',
        answer:
          'No, you do not need to share your password. To buy YouTube subscribers, you only need to provide the correct YouTube channel URL and choose your preferred quantity.',
      },
      {
        question: 'How fast will my YouTube subscribers order start?',
        answer:
          'Most orders start after submission and payment confirmation. Delivery time can vary based on service type, quantity, channel status, and current order volume.',
      },
      {
        question: 'Can I track my YouTube subscribers order?',
        answer:
          'Yes, you can track your order status from the TrendEvo dashboard. The order panel helps you check whether your YouTube subscribers order is pending, processing, completed, or partially completed.',
      },
      {
        question: 'Can I buy subscribers for a new YouTube channel?',
        answer:
          'Yes, new YouTube channels can order subscribers. For a natural appearance, it is better to start with a smaller package, upload useful videos, organize your channel, and increase subscribers gradually.',
      },
      {
        question: 'Do YouTube subscribers help with channel credibility?',
        answer:
          'Yes, a stronger subscriber count can improve channel perception when viewers visit your channel. It helps the channel look more established, but long-term growth also depends on video quality and consistency.',
      },
      {
        question: 'Will buying YouTube subscribers increase my views?',
        answer:
          'YouTube subscribers can support channel trust, but views depend on video topics, thumbnails, titles, watch time, search demand, recommendations, and audience interest. For better results, combine subscribers with strong video content.',
      },
      {
        question: 'Who can use TrendEvo’s YouTube subscribers service?',
        answer:
          'TrendEvo is useful for Bangladeshi YouTubers, educators, eCommerce brands, local businesses, startups, public figures, NGOs, digital agencies, freelancers, and SMM resellers who want stronger YouTube channel presence.',
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
      'YouTube subscribers help your channel look more trusted, but stronger growth comes when your videos also gain visibility and engagement. TrendEvo offers related YouTube SMM services in Bangladesh to support channel authority, video performance, and content reach.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy YouTube Views',
        description:
          'Increase visibility for your YouTube videos with more views. This service helps tutorials, product reviews, music videos, shorts, business videos, and campaign content look more active to new viewers.',
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
          'Improve the engagement signal of your YouTube videos with more likes. YouTube likes help videos look more valuable and can support viewer confidence when people decide whether to keep watching.',
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
