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

type TiktokFollowersPageData = {
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

export const data: TiktokFollowersPageData = {
  seo: {
    title: 'Buy TikTok Followers in Bangladesh | TrendEvo',
    description:
      'Buy TikTok Followers in Bangladesh with TrendEvo. Build profile trust, creator credibility, and audience growth using bKash, Nagad, Rocket, and secure orders.',
    canonical: '/buy-tiktok-followers',
  },

  hero: {
    bg: 'section-1',
    variant: 'wide',
    trustLabel: '⭐ 4.8 Rating | Trusted by Bangladeshi TikTok Creators, Brands & Agencies',
    title: 'Buy gt<TikTok Followers> in Bangladesh for Stronger Creator Growth',
    description:
      'TikTok moves fast, and people often judge a profile before watching more videos. A profile with a stronger follower base can look more trusted, more active, and more worth following. TrendEvo helps TikTok creators, influencers, eCommerce brands, local businesses, digital agencies, startups, SMEs, and resellers buy TikTok followers in Bangladesh through our lnk<TikTok SMM Panel|/tiktok-smm-panel> with simple ordering, local payment support, and secure delivery.',
    descriptionSecondary:
      'Our TikTok Followers Service is made for profiles that need better credibility, stronger audience trust, and a more professional creator image. As a lnk<best SMM Panel BD|/> choice for TikTok growth, TrendEvo lets you choose a suitable follower package, pay through bKash, Nagad, Rocket, or other supported methods, and grow your TikTok profile without sharing your password.',
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
      src: '/images/subservice/buy-tiktok-followers/buy-tiktok-followers-in-bangladesh-for-stronger-creator-growth.webp',
      alt: 'Buy TikTok Followers in Bangladesh with TrendEvo',
      width: 558,
      height: 621,
      maxWidthClassName: 'max-w-[558px]',
      unoptimized: true,
    },
  },

  orderForm: {
    badge: 'TikTok Services',
    serviceLabel: 'Followers',
    serviceTypeLabel: 'Followers',
    urlFieldLabel: 'TikTok Profile URL',
    urlPlaceholder: 'https://tiktok.com/@yourprofile',
    submitLabel: 'Pay Now With bKash/ Nagad',
  },

  whyChoose: {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: 'Why Choose TrendEvo to Buy gt<TikTok Followers> in Bangladesh',
    subtitle:
      'lnk<TrendEvo|/about-us> is built for Bangladeshi users who want a simple way to improve TikTok profile credibility. From local payment support to easy order tracking, our SMM Panel helps creators, influencers, brands, agencies, and resellers manage TikTok follower growth from one clean dashboard.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Fast Follower Processing',
        description:
          'Your TikTok followers order starts after you submit it from the dashboard. Delivery speed may depend on the package size, profile status, and current order volume, but TrendEvo keeps the process smooth and easy to follow.',
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Follower Packages',
        description:
          'You can buy TikTok followers in Bangladesh without using a large promotion budget. Our packages work well for new creators, influencers, online stores, fashion brands, restaurants, agencies, freelancers, and SMM resellers.',
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: 'Helpful Support Team',
        description:
          'Need help choosing the right TikTok Follower Package? TrendEvo support can guide you with service selection, order status, payment issues, and dashboard use.',
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
        title: 'Creator Credibility Focus',
        description:
          'TrendEvo focuses on TikTok followers that support profile trust, audience confidence, and creator authority. You can start with a small package, review the result, and scale your follower growth based on your content plan.',
        iconFrameSrc:
          '/images/subservice/shared/real-followers-from-quality-sources-decoration.png',
      },
    ],
  },

  whoShouldBuy: {
    badge: 'Buy TikTok Followers',
    title: 'Who Should Buy gt<TikTok Followers> in Bangladesh?',
    subtitle:
      'TikTok followers help a profile look more established when people visit after watching a video, live clip, duet, stitch, trend, or product review. TrendEvo’s TikTok growth service is useful for Bangladeshi users who want stronger profile authority, better audience trust, and a smoother path toward long-term creator growth.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    items: [
      {
        title: 'TikTok Creators and Influencers',
        description:
          'Bangladeshi creators need profile trust to turn casual viewers into followers. Comedy creators, lifestyle influencers, food reviewers, fashion creators, travel vloggers, educators, musicians, and fitness pages can use TikTok followers to improve profile appeal after viewers watch their videos.',
      },
      {
        title: 'E-commerce Stores and Fashion Brands',
        description:
          'Online businesses in Bangladesh use TikTok for product videos, short reviews, unboxing clips, and trend-based promotions. Clothing shops, beauty brands, gadget sellers, jewelry pages, and handmade product stores can buy TikTok followers to make their brand profile look more trusted.',
      },
      {
        title: 'Local Businesses and SMEs',
        description:
          'Restaurants, cafés, cloud kitchens, salons, gyms, training centers, and service providers can use TikTok followers to support local visibility. A stronger follower count can help their profile look more active before customers check offers, menus, or service videos.',
      },
      {
        title: 'Agencies, Freelancers, and Resellers',
        description:
          'Digital agencies and freelancers often manage TikTok growth for client accounts. TrendEvo helps them place TikTok follower orders from one dashboard with clear pricing, local payment support, and reseller-friendly access.',
      },
      {
        title: 'Startups, Public Figures, and Community Pages',
        description:
          'Startups, public figures, NGOs, media pages, and community projects need a stronger profile image to attract attention. TikTok followers can support awareness videos, launch content, public messaging, educational clips, and community campaigns.',
      },
    ],
  },

  workingProcess: {
    badge: 'WORKING PROCESS',
    underlineSrc: '/images/working-process/how-to-buy-facebook-followers-on-trendevo-step-by-step-section-underline.svg',
    underlineWidth: 216,
    title: 'How to Buy TikTok Followers on TrendEvo — gt<Step by Step>',
    subtitle:
      'Buying TikTok followers in Bangladesh should be simple and clear. TrendEvo keeps the full process easy, so creators, business owners, influencers, agencies, freelancers, and resellers can place orders without technical knowledge.',
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
          'Add money to your account using supported payment methods in Bangladesh. You can fund your balance through bKash, Nagad, Rocket, or other available options before placing your TikTok followers order.',
      },
      {
        number: '03',
        title: 'Choose TikTok Followers Service',
        description:
          'Go to the TikTok services section and select the follower package that matches your profile goal. You can choose a starter package, a creator growth package, or a larger package for client accounts.',
      },
      {
        number: '04',
        title: 'Enter Your TikTok Profile URL',
        description:
          'Paste the correct TikTok profile link or username, select the quantity, and submit the order. You do not need to share your TikTok password. TrendEvo processes the order using your public profile information only.',
      },
    ],
  },

  thingsToKnow: {
    badge: 'Things to Know',
    title: 'Things to Know Before You Buy gt<TikTok Followers>',
    image: {
      src: '/images/subservice/buy-tiktok-followers/things-to-know-before-you-buy-tiktok-followers.png',
      alt: 'Things to Know Before You Buy TikTok Followers',
    },
    paragraphs: [
      'Buying TikTok followers can help your profile look more credible, but the best result comes when your account is ready for new viewers. Before placing an order on TrendEvo, make sure your TikTok profile is public, your username or profile link is correct, and your selected package fits your current profile size.',
      'You do not need to share your TikTok password to buy TikTok followers in Bangladesh. TrendEvo only needs your public profile link or username to process the order. This keeps the process safer and easier for creators, businesses, influencers, agencies, and resellers.',
      'For a natural profile appearance, avoid sudden oversized orders on a profile with no videos, weak bio, or unclear content niche. Start with a suitable quantity, improve your profile look, and grow step by step. This helps your TikTok account look more believable to Bangladeshi viewers.',
      'TikTok followers can support social proof, but they work best with regular video content. Post short hooks, trend-based clips, product videos, educational tips, behind-the-scenes moments, and local content so new visitors have a reason to follow and return.',
    ],
    ctaLabel: 'Create Your Account Now',
  },

  faq: {
    label: 'Frequently Asked Questions',
    title: 'Frequently Asked Questions — gt<Buy TikTok Followers> in Bangladesh',
    subtitle:
      'Find clear answers about buying TikTok followers in Bangladesh, payment options, delivery, safety, order tracking, and how TrendEvo helps support TikTok profile growth.',
    bg: 'section-7',
    items: [
      {
        question: 'Is it safe to buy TikTok followers from TrendEvo?',
        answer:
          'Yes, TrendEvo uses a simple order process where you only need to submit your public TikTok profile link or username. We never ask for your TikTok password, so your login details stay private.',
      },
      {
        question: 'Can I buy TikTok followers in Bangladesh with bKash?',
        answer:
          'Yes, you can add funds using bKash and then place your TikTok followers order from the TrendEvo dashboard. We also support other local payment options for Bangladeshi users.',
      },
      {
        question: 'Do you accept Nagad or Rocket payments?',
        answer:
          'Yes, TrendEvo supports local payment methods such as Nagad, Rocket, and other available options. This makes it easier for creators, businesses, influencers, agencies, and resellers in Bangladesh.',
      },
      {
        question: 'Do I need to share my TikTok password?',
        answer:
          'No, you do not need to share your password. To buy TikTok followers, you only need to provide the correct TikTok profile link or username and choose your preferred quantity.',
      },
      {
        question: 'How fast will my TikTok followers order start?',
        answer:
          'Most orders start after submission and payment confirmation. Delivery time can vary based on service type, quantity, profile status, and current order volume.',
      },
      {
        question: 'Can I track my TikTok followers order?',
        answer:
          'Yes, you can track your order status from the TrendEvo dashboard. The order panel helps you check whether your TikTok followers order is pending, processing, completed, or partially completed.',
      },
      {
        question: 'Can I buy followers for a new TikTok account?',
        answer:
          'Yes, new TikTok accounts can order followers. For a natural appearance, it is better to start with a smaller package, publish useful videos, improve your bio, and increase followers gradually.',
      },
      {
        question: 'Do TikTok followers help with profile credibility?',
        answer:
          'Yes, a stronger follower count can improve how your profile looks when people visit after watching a video. It supports social proof, but long-term credibility also depends on content quality and posting consistency.',
      },
      {
        question: 'Will buying TikTok followers make my videos go viral?',
        answer:
          'TikTok followers can support profile trust, but viral performance depends on watch time, completion rate, hooks, shares, comments, topic interest, and content quality. Followers work best as part of a wider TikTok strategy.',
      },
      {
        question: 'Who can use TrendEvo’s TikTok followers service?',
        answer:
          'TrendEvo is useful for Bangladeshi creators, influencers, eCommerce stores, local businesses, SMEs, startups, public figures, NGOs, digital agencies, freelancers, and SMM resellers who want a stronger TikTok profile presence.',
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
      'TikTok followers help your profile look more trusted, but stronger growth comes when your videos also gain views and engagement. TrendEvo offers TikTok SMM services in Bangladesh to support content visibility, creator credibility, and brand awareness.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy TikTok Views',
        description:
          'Increase visibility for your TikTok videos with more views. This service helps product videos, trend clips, creator content, educational posts, and campaign videos look more active to new viewers.',
        icon: '/images/subservice/shared/buy-facebook-page-likes-icon.webp',
        iconWidth: 39,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'h-[128.12%] w-[120.8%] object-cover -translate-x-[10.27%] -translate-y-[9.29%]',
      },
      {
        title: 'Buy TikTok Likes',
        description:
          'Improve the engagement signal of your TikTok videos with more likes. TikTok likes help videos look more appreciated, viewer-approved, and trusted when new audiences check your content.',
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
