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

type LinkedinLikesPageData = {
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

export const data: LinkedinLikesPageData = {
  seo: {
    title: 'Buy LinkedIn Likes in Bangladesh | TrendEvo',
    description:
      'Buy LinkedIn Likes in Bangladesh from TrendEvo. Boost post engagement, professional credibility, B2B content visibility, and brand trust with bKash, Nagad, Rocket.',
    canonical: '/buy-linkedin-likes',
  },

  hero: {
    bg: 'section-1',
    variant: 'wide',
    trustLabel: '⭐ 4.8 Rating | Trusted by Bangladeshi Professionals, Brands & Agencies',
    title: 'Buy gt<LinkedIn Likes> in Bangladesh for Stronger Post Engagement',
    description:
      'LinkedIn users often notice engagement before they read a full post. A post with more likes can look more useful, trusted, and worth reading. TrendEvo helps business owners, entrepreneurs, startups, companies, agencies, freelancers, job seekers, professionals, and B2B marketers buy LinkedIn Likes in Bangladesh with simple ordering, local payment support, and smooth delivery.',
    descriptionSecondary:
      'Our LinkedIn Likes service is made for posts that need better visibility, stronger professional credibility, and a more active first impression. You can start with a small package, pay through bKash, Nagad, Rocket, or other supported methods, and improve your LinkedIn post engagement without sharing your password.',
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
      src: '/images/subservice/buy-linkedin-likes/buy-linkedin-likes-in-bangladesh-for-stronger-post-engagement.webp',
      alt: 'Buy LinkedIn Likes in Bangladesh with TrendEvo',
      width: 558,
      height: 621,
      maxWidthClassName: 'max-w-[558px]',
      unoptimized: true,
    },
  },

  orderForm: {
    badge: 'LinkedIn Services',
    serviceLabel: 'Likes',
    serviceTypeLabel: 'Likes',
    urlFieldLabel: 'LinkedIn Post URL',
    urlPlaceholder: 'https://linkedin.com/posts/username_activity-123456789',
    submitLabel: 'Pay Now With bKash/ Nagad',
  },

  whyChoose: {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: 'Why Choose TrendEvo to Buy gt<LinkedIn Likes> in Bangladesh',
    subtitle:
      'TrendEvo is built for users in Bangladesh who want a simple and reliable way to improve LinkedIn post engagement. From local payment support to easy order tracking, every part of the platform is made to help professionals, company pages, agencies, startups, and B2B brands manage LinkedIn content growth with more confidence.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          'Your LinkedIn Likes order starts processing after submission. Delivery speed may depend on the package size, but TrendEvo is designed for quick and smooth order handling.',
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          'You can buy LinkedIn Likes in Bangladesh without spending a large budget. Our pricing works well for personal brands, company pages, startups, freelancers, SMEs, agencies, and SMM resellers.',
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          'Need help before or after placing an order? TrendEvo support is available to guide you with service selection, order status, payment issues, and dashboard use.',
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
          'Pay easily through bKash, Nagad, Rocket, and other supported methods. TrendEvo makes LinkedIn post engagement easier for Bangladeshi users who prefer local payment systems.',
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Quality-Focused Likes',
        description:
          'TrendEvo focuses on stable LinkedIn Likes services that help improve post presence, professional trust, and social proof. You can start small, test the service, and scale based on your content goals.',
        iconFrameSrc:
          '/images/subservice/shared/real-followers-from-quality-sources-decoration.png',
      },
    ],
  },

  whoShouldBuy: {
    badge: 'Buy LinkedIn Likes',
    title: 'Who Should Buy gt<LinkedIn Likes> in Bangladesh?',
    subtitle:
      'A strong like count can help a LinkedIn post look more valuable when someone sees it for the first time. TrendEvo’s LinkedIn Likes service is useful for Bangladeshi users who want better content trust, stronger professional authority, and a smoother start before promoting posts, building networks, or running B2B campaigns.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    items: [
      {
        title: 'Business Owners and Entrepreneurs',
        description:
          'Business owners in Bangladesh use LinkedIn to share updates, business lessons, service offers, and company milestones. Buying LinkedIn Likes can help founders, consultants, and entrepreneurs make their posts look more trusted when potential clients, partners, or investors visit their content.',
      },
      {
        title: 'Startups and Companies',
        description:
          'Startups and companies need visible engagement when they announce products, hiring updates, funding news, case studies, or business achievements. LinkedIn Likes can support software firms, SaaS brands, export companies, logistics providers, fintech startups, and B2B service companies in Bangladesh.',
      },
      {
        title: 'Agencies and B2B Marketers',
        description:
          'Digital agencies, branding teams, SEO companies, PR firms, and B2B marketers often use LinkedIn to build client trust. TrendEvo helps them manage LinkedIn Likes orders from one dashboard with local payment support, clear pricing, and services suitable for professional campaigns.',
      },
      {
        title: 'Freelancers and Professionals',
        description:
          'Freelancers, developers, designers, writers, trainers, marketers, consultants, and corporate professionals can use LinkedIn Likes to support personal branding. More likes can make portfolio posts, career updates, expert opinions, and service posts look more active.',
      },
      {
        title: 'Job Seekers and Personal Brands',
        description:
          'Job seekers and personal brands need attention from recruiters, HR teams, business owners, and industry leaders. Buying LinkedIn Likes in Bangladesh can help create early engagement on posts that highlight skills, achievements, projects, certificates, or career goals.',
      },
    ],
  },

  workingProcess: {
    badge: 'WORKING PROCESS',
    underlineSrc: '/images/working-process/how-to-buy-facebook-followers-on-trendevo-step-by-step-section-underline.svg',
    underlineWidth: 216,
    title: 'How to Buy LinkedIn Likes on TrendEvo — gt<Step by Step>',
    subtitle:
      'Buying LinkedIn Likes in Bangladesh should not feel confusing. TrendEvo keeps the full process simple, so professionals, company page owners, agencies, freelancers, marketers, and resellers can place orders without technical knowledge.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    steps: [
      {
        number: '01',
        title: 'Simple Registration',
        description:
          'Create your TrendEvo account with basic details and get access to the dashboard. From there, you can browse LinkedIn growth services, check prices, and manage your orders from one place.',
      },
      {
        number: '02',
        title: 'Add Funds to Your Balance',
        description:
          'Add money to your account using supported payment methods in Bangladesh. You can fund your balance through bKash, Nagad, Rocket, or other available options before placing your LinkedIn Likes order.',
      },
      {
        number: '03',
        title: 'Choose LinkedIn Likes Service',
        description:
          'Go to the LinkedIn services section and select the likes package that matches your goal. You can choose a small starter order, a larger engagement package, or a reseller-friendly quantity.',
      },
      {
        number: '04',
        title: 'Enter Your LinkedIn Post URL',
        description:
          'Paste your LinkedIn post link, select the quantity, and submit the order. You do not need to share your LinkedIn password. TrendEvo processes the order using the public post URL only.',
      },
    ],
  },

  thingsToKnow: {
    badge: 'Things to Know',
    title: 'Things to Know Before You Buy gt<LinkedIn Likes>',
    paragraphs: [
      'Buying LinkedIn Likes can help your post look more active, but the best results come when the order matches your content strategy. Before placing an order on TrendEvo, make sure your LinkedIn post is public, the post link is correct, and your selected package fits your current profile or company page size.',
      'You do not need to share your LinkedIn password to buy LinkedIn Likes in Bangladesh. TrendEvo only needs your public LinkedIn post URL to process the order. This keeps your account safer and makes the ordering process simple for professionals, businesses, agencies, freelancers, and resellers.',
      'For a natural post appearance, avoid sudden oversized orders on a new or low-activity profile. Start with a suitable quantity, publish valuable content, and increase your engagement step by step. This helps your LinkedIn activity look more believable to Bangladeshi professionals and business contacts.',
      'LinkedIn Likes improve post presence and social proof, but they should work together with strong content. Share useful insights, case studies, client results, industry opinions, hiring updates, product news, and professional stories so new viewers have a reason to read, react, connect, or follow.',
    ],
    ctaLabel: 'Create an Account Now',
  },

  faq: {
    label: 'Frequently Asked Questions',
    title: 'Frequently Asked Questions — gt<Buy LinkedIn Likes> in Bangladesh',
    subtitle:
      'Find clear answers about buying LinkedIn Likes in Bangladesh, payment options, delivery, safety, post engagement, professional visibility, and order management on TrendEvo.',
    bg: 'section-7',
    items: [
      {
        question: 'Is it safe to buy LinkedIn Likes from TrendEvo?',
        answer:
          'Yes, TrendEvo uses a simple order process where you only need to submit your public LinkedIn post link. We never ask for your LinkedIn password, so your login details stay private.',
      },
      {
        question: 'Can I buy LinkedIn Likes in Bangladesh with bKash?',
        answer:
          'Yes, you can add funds using bKash and then place your LinkedIn Likes order from the TrendEvo dashboard. We also support other local payment options for Bangladeshi users.',
      },
      {
        question: 'Do you accept Nagad or Rocket payments?',
        answer:
          'Yes, TrendEvo supports local payment methods such as Nagad, Rocket, and other available options. This makes it easier for professionals, companies, startups, agencies, freelancers, and resellers in Bangladesh.',
      },
      {
        question: 'Do I need to share my LinkedIn password?',
        answer:
          'No, you do not need to share your password. To buy LinkedIn Likes, you only need to provide the correct LinkedIn post URL and choose your preferred quantity.',
      },
      {
        question: 'How fast will my LinkedIn Likes order start?',
        answer:
          'Most orders start after submission and payment confirmation. Delivery time can vary based on service type, quantity, and current order volume.',
      },
      {
        question: 'Can I track my LinkedIn Likes order?',
        answer:
          'Yes, you can track your order status from the TrendEvo dashboard. The order panel helps you check whether your LinkedIn Likes order is pending, processing, completed, or partially completed.',
      },
      {
        question: 'Can I buy likes for a new LinkedIn post?',
        answer:
          'Yes, new LinkedIn posts can receive likes. For a natural appearance, we suggest starting with a smaller package and increasing your engagement step by step.',
      },
      {
        question: 'Are LinkedIn Likes useful for company pages?',
        answer:
          'Yes, LinkedIn Likes can help company page posts look more active and trusted. This is useful for business updates, product announcements, hiring posts, case studies, and B2B marketing content.',
      },
      {
        question: 'Will buying LinkedIn Likes increase my leads or sales?',
        answer:
          'LinkedIn Likes can improve post visibility and trust, but leads and sales also depend on your offer, content quality, profile strength, and follow-up process. For better results, combine likes with useful posts and clear calls to action.',
      },
      {
        question: 'Who can use TrendEvo’s LinkedIn Likes service?',
        answer:
          'TrendEvo is useful for Bangladeshi business owners, entrepreneurs, startups, companies, agencies, freelancers, job seekers, professionals, personal brands, and B2B marketers who want stronger LinkedIn post engagement.',
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
      'LinkedIn Likes build post trust, but better growth comes when your profile or company page also looks active. TrendEvo offers related LinkedIn SMM services in Bangladesh to support authority, visibility, engagement, and stronger professional social proof.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy LinkedIn Followers',
        description:
          'Grow your LinkedIn profile or company page with more followers. LinkedIn followers help improve professional credibility, support long-term audience growth, and make your personal brand or business page look more established.',
        icon: '/images/subservice/shared/buy-facebook-page-likes-icon.webp',
        iconWidth: 39,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'h-[128.12%] w-[120.8%] object-cover -translate-x-[10.27%] -translate-y-[9.29%]',
      },
      {
        title: 'Buy LinkedIn Comments',
        description:
          'Add more activity to your LinkedIn posts with relevant comments. This service is useful for thought leadership posts, hiring updates, company announcements, product launches, case studies, and B2B campaign content that needs stronger interaction.',
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
      'Join TrendEvo and manage your LinkedIn, Facebook, Instagram, YouTube, TikTok, Telegram, and website traffic orders from one simple dashboard. Add funds with bKash, Nagad, or Rocket, choose your service, and start growing with secure order tracking.',
    primaryButtonLabel: 'Get Started Free',
    secondaryButtonLabel: 'See All LinkedIn Services',
    secondaryButtonHref: '/services',
  },
};
