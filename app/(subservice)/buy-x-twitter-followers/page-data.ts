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

type TwitterFollowersPageData = {
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
    platformLabel: string;
    orderPrefix: string;
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

export const data: TwitterFollowersPageData = {
  seo: {
    title: 'Buy X (Twitter) Followers in Bangladesh | TrendEvo',
    description:
      'Buy X (Twitter) Followers in Bangladesh with TrendEvo. Build profile trust, authority, and audience growth using bKash, Nagad, Rocket, and secure orders.',
    canonical: '/buy-x-twitter-followers',
  },

  hero: {
    bg: 'section-1',
    variant: 'wide',
    trustLabel: '⭐ 4.8 Rating | Trusted by Bangladeshi Creators, Brands & Agencies',
    title: 'Buy gt<X (Twitter) Followers> in Bangladesh for Stronger Profile Authority',
    description:
      'Twitter, now known as X, is a fast-moving platform where people follow voices they find active, credible, and worth listening to. A profile with a stronger follower base can look more trusted in public conversations, trending topics, business discussions, and professional networks. TrendEvo helps entrepreneurs, creators, journalists, startups, public figures, digital agencies, SMEs, and local businesses buy X (Twitter) followers in Bangladesh through an lnk<X (Twitter) SMM Panel|/x-twitter-smm-panel> with simple ordering, local payment support, and secure delivery.',
    descriptionSecondary:
      'Our X (Twitter) Followers Service is made for profiles that need better social proof, stronger thought leadership, and a more professional presence. You can choose a suitable follower package, pay through bKash, Nagad, Rocket, or other supported methods, and grow your X profile without sharing your password.',
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
      src: '/images/subservice/buy-x-twitter-followers/buy-x-twitter-followers-in-bangladesh-for-stronger-profile-authority.webp',
      alt: 'Buy X (Twitter) Followers in Bangladesh with TrendEvo',
      width: 558,
      height: 621,
      maxWidthClassName: 'max-w-[558px]',
      unoptimized: true,
    },
  },

  orderForm: {
    badge: 'X (Twitter) Services',
    platformLabel: 'X (Twitter)',
    orderPrefix: 'Order X (Twitter)',
    serviceLabel: 'Followers',
    serviceTypeLabel: 'Followers',
    urlFieldLabel: 'X (Twitter) Profile URL',
    urlPlaceholder: 'https://x.com/yourprofile',
    submitLabel: 'Pay Now With bKash/ Nagad',
  },

  whyChoose: {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: 'Why Choose TrendEvo to Buy gt<X (Twitter) Followers> in Bangladesh',
    subtitle:
      'lnk<TrendEvo|/about-us> is built for Bangladeshi users who want a simple way to grow their X profile with better trust and visibility. From local payment support to clear order tracking, the lnk<best SMM Panel in bangladesh|/> helps creators, brands, entrepreneurs, agencies, and resellers manage X (Twitter) growth from one clean dashboard.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Fast Follower Processing',
        description:
          'Your X (Twitter) followers order starts after you submit it from the dashboard. Delivery speed may depend on the package size, profile status, and current order volume, but TrendEvo keeps the process smooth and easy to follow.',
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Follower Packages',
        description:
          'You can buy X (Twitter) followers in Bangladesh without using a large marketing budget. Our packages work well for startup founders, creators, public figures, business owners, journalists, freelancers, agencies, and SMM resellers.',
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: 'Helpful Support Team',
        description:
          'Need help choosing the right X (Twitter) Follower Package? TrendEvo support can guide you with service selection, order status, payment issues, and dashboard use.',
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
          'Pay easily through bKash, Nagad, Rocket, and other supported methods. TrendEvo makes X Marketing Bangladesh easier for users who prefer trusted local payment systems.',
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Authority-Focused Growth',
        description:
          'TrendEvo focuses on X (Twitter) followers that support profile trust, professional credibility, and audience perception. You can start with a small package, review the result, and scale your follower growth based on your profile strategy.',
        iconFrameSrc:
          '/images/subservice/shared/real-followers-from-quality-sources-decoration.png',
      },
    ],
  },

  whoShouldBuy: {
    badge: 'Buy X (Twitter) Followers',
    title: 'Who Should Buy gt<X (Twitter) Followers> in Bangladesh?',
    subtitle:
      'X (Twitter) followers help a profile look more established when people visit after reading a post, reply, thread, quote, or trending discussion. TrendEvo’s X growth service is useful for Bangladeshi users who want stronger profile authority, better audience confidence, and a more credible presence in public conversations.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    items: [
      {
        title: 'Entrepreneurs and Startup Founders',
        description:
          'Bangladeshi founders use X to share ideas, product updates, funding news, market opinions, and business lessons. A stronger follower count can help startup founders look more serious when investors, customers, partners, and media people check their profile.',
      },
      {
        title: 'Creators, Influencers, and Personal Brands',
        description:
          'Creators need a profile that feels worth following after a viral post, thread, or opinion. Tech creators, writers, finance educators, lifestyle voices, designers, podcasters, and niche influencers can use X (Twitter) followers to improve profile trust and audience appeal.',
      },
      {
        title: 'Journalists, Public Figures, and Professionals',
        description:
          'Journalists, speakers, consultants, public figures, researchers, and industry experts often use X to share updates and opinions. More followers can support stronger personal branding, professional networking, and public visibility.',
      },
      {
        title: 'Agencies, Freelancers, and Resellers',
        description:
          'Digital agencies and freelancers often manage X profiles for clients. TrendEvo helps them place X (Twitter) follower orders from one dashboard with clear pricing, local payment support, and reseller-friendly access.',
      },
      {
        title: 'SMEs, Local Businesses, and Community Pages',
        description:
          'Local businesses, eCommerce brands, NGOs, community pages, and service providers can use X to share news, offers, updates, and customer communication. X (Twitter) followers can help these profiles look more active and trusted to new visitors.',
      },
    ],
  },

  workingProcess: {
    badge: 'WORKING PROCESS',
    underlineSrc: '/images/working-process/how-to-buy-facebook-followers-on-trendevo-step-by-step-section-underline.svg',
    underlineWidth: 216,
    title: 'How to Buy X (Twitter) Followers on TrendEvo — gt<Step by Step>',
    subtitle:
      'Buying X (Twitter) followers in Bangladesh should be simple and clear. TrendEvo keeps the full process easy, so creators, business owners, founders, agencies, freelancers, and lnk<resellers|https://trendevo.com/api> can place orders without technical knowledge.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    steps: [
      {
        number: '01',
        title: 'Create Your TrendEvo Account',
        description:
          'Sign up with basic details and enter the TrendEvo dashboard. From there, you can browse X (Twitter) SMM Panel services, compare prices, and manage your orders from one place.',
      },
      {
        number: '02',
        title: 'Add Funds to Your Balance',
        description:
          'Add money to your account using supported payment methods in Bangladesh. You can fund your balance through bKash, Nagad, Rocket, or other available options before placing your X (Twitter) followers order.',
      },
      {
        number: '03',
        title: 'Choose X (Twitter) Followers Service',
        description:
          'Go to the Twitter or X services section and select the follower package that matches your profile goal. You can choose a starter package, a professional growth package, or a larger package for client profiles.',
      },
      {
        number: '04',
        title: 'Enter Your X (Twitter) Profile URL',
        description:
          'Paste the correct X profile link or username, select the quantity, and submit the order. You do not need to share your X password. TrendEvo processes the order using your public profile information only.',
      },
    ],
  },

  thingsToKnow: {
    badge: 'Things to Know',
    title: 'Things to Know Before You Buy gt<X (Twitter) Followers>',
    paragraphs: [
      'Buying X (Twitter) followers can help your profile look more credible, but the best result comes when your profile is ready for visitors. Before placing an order on TrendEvo, make sure your X profile is public, your profile link or username is correct, and your selected package fits your current profile size.',
      'You do not need to share your X (Twitter) password to buy X (Twitter) followers in Bangladesh. TrendEvo only needs your public profile link or username to process the order. This keeps the process safer and easier for creators, businesses, entrepreneurs, agencies, and resellers.',
      'For a natural profile appearance, avoid sudden oversized orders on an account with no posts, weak bio, or unclear profile identity. Start with a suitable quantity, improve your bio, pin a strong post, and grow step by step. This helps your profile look more believable to Bangladeshi visitors.',
      'X (Twitter) followers can support social proof, but they work best with regular posting. Share useful threads, industry opinions, product updates, short insights, news reactions, community posts, and professional content so new visitors have a reason to follow and trust your profile.',
    ],
    ctaLabel: 'Create Your Account Now',
  },

  faq: {
    label: 'Frequently Asked Questions',
    title: 'Frequently Asked Questions — gt<Buy X (Twitter) Followers> in Bangladesh',
    subtitle:
      'Find clear answers about buying X (Twitter) followers in Bangladesh, payment options, delivery, safety, order tracking, and how TrendEvo helps support X profile growth.',
    bg: 'section-7',
    items: [
      {
        question: 'Is it safe to buy X (Twitter) followers from TrendEvo?',
        answer:
          'Yes, TrendEvo uses a simple order process where you only need to submit your public X profile link or username. We never ask for your Twitter or X password, so your login details stay private.',
      },
      {
        question: 'Can I buy X (Twitter) followers in Bangladesh with bKash?',
        answer:
          'Yes, you can add funds using bKash and then place your X (Twitter) followers order from the TrendEvo dashboard. We also support other local payment options for Bangladeshi users.',
      },
      {
        question: 'Do you accept Nagad or Rocket payments?',
        answer:
          'Yes, TrendEvo supports local payment methods such as Nagad, Rocket, and other available options. This makes it easier for creators, businesses, entrepreneurs, agencies, and resellers in Bangladesh.',
      },
      {
        question: 'Do I need to share my X (Twitter) password?',
        answer:
          'No, you do not need to share your password. To buy X (Twitter) followers, you only need to provide the correct X profile link or username and choose your preferred quantity.',
      },
      {
        question: 'How fast will my X (Twitter) followers order start?',
        answer:
          'Most orders start after submission and payment confirmation. Delivery time can vary based on service type, quantity, profile status, and current order volume.',
      },
      {
        question: 'Can I track my X (Twitter) followers order?',
        answer:
          'Yes, you can track your order status from the TrendEvo dashboard. The order panel helps you check whether your X (Twitter) followers order is pending, processing, completed, or partially completed.',
      },
      {
        question: 'Can I buy followers for a new X profile?',
        answer:
          'Yes, new X profiles can order followers. For a natural appearance, it is better to start with a smaller package, write a clear bio, publish useful posts, and increase your follower count gradually.',
      },
      {
        question: 'Do X (Twitter) followers help with profile credibility?',
        answer:
          'Yes, a stronger follower count can improve how your profile looks when people visit after seeing your posts, replies, or threads. It supports social proof, but long-term trust also depends on content quality and consistency.',
      },
      {
        question: 'Will buying X (Twitter) followers increase my post engagement?',
        answer:
          'X (Twitter) followers can improve profile trust, but engagement depends on your posts, topics, timing, replies, reposts, conversations, and audience interest. For better results, combine follower growth with regular content.',
      },
      {
        question: 'Who can use TrendEvo’s X (Twitter) followers service?',
        answer:
          'TrendEvo is useful for Bangladeshi creators, entrepreneurs, startups, journalists, public figures, local businesses, SMEs, NGOs, digital agencies, freelancers, and SMM resellers who want a stronger X profile presence.',
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
      'X (Twitter) followers help your profile look more trusted, but stronger growth comes when your posts also receive interaction and visibility. TrendEvo offers related X SMM services in Bangladesh to support profile authority, content reach, and audience engagement.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy X (Twitter) Likes',
        description:
          'Improve the trust signal of your X posts with more likes. X (Twitter) likes help threads, announcements, opinions, product updates, and campaign posts look more valuable to new viewers.',
        icon: '/images/subservice/shared/buy-facebook-page-likes-icon.webp',
        iconWidth: 39,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'h-[128.12%] w-[120.8%] object-cover -translate-x-[10.27%] -translate-y-[9.29%]',
      },
      {
        title: 'Buy X (Twitter) Retweets',
        description:
          'Increase the distribution of your X posts with more retweets. This service is useful for startup news, public updates, offers, awareness posts, launches, and content that needs wider reach.',
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
      'Join TrendEvo and manage your X (Twitter), Instagram, Facebook, YouTube, TikTok, Telegram, and website traffic orders from one simple dashboard. Add funds with bKash, Nagad, or Rocket, choose your service, and start growing with secure order tracking.',
    primaryButtonLabel: 'Get Started Free',
    secondaryButtonLabel: 'See All X (Twitter) Services',
    secondaryButtonHref: '/x-twitter-smm-panel',
  },
};
