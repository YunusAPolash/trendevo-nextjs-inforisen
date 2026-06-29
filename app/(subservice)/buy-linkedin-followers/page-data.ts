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

type LinkedinFollowersPageData = {
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

export const data: LinkedinFollowersPageData = {
  seo: {
    title: 'Buy LinkedIn Followers in Bangladesh | TrendEvo',
    description:
      'Buy LinkedIn Followers in Bangladesh from TrendEvo. Grow professional credibility, company page trust, and B2B visibility with bKash, Nagad, Rocket.',
    canonical: '/buy-linkedin-followers',
  },

  hero: {
    bg: 'section-1',
    variant: 'wide',
    trustLabel: '⭐ 4.8 Rating | Trusted by Bangladeshi Professionals, Startups & B2B Brands',
    title: 'Buy gt<LinkedIn Followers> in Bangladesh for Professional Brand Growth',
    description:
      'LinkedIn users often judge a profile or company page before reading the full content. A stronger follower count can make your brand look more credible, active, and worth connecting with. TrendEvo helps business owners, professionals, startups, agencies, freelancers, and B2B marketers buy LinkedIn followers in Bangladesh with simple ordering, secure payment options, and smooth delivery.',
    descriptionSecondary:
      'Our LinkedIn follower service is made for people and companies that want better professional visibility, stronger authority, and a more trusted first impression. You can start with a small package, pay through bKash, Nagad, Rocket, or other supported methods, and grow your LinkedIn presence without sharing your password.',
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
      src: '/images/subservice/buy-linkedin-followers/buy-linkedin-followers-in-bangladesh-for-professional-brand-growth.webp',
      alt: 'Buy LinkedIn Followers in Bangladesh with TrendEvo',
      width: 558,
      height: 621,
      maxWidthClassName: 'max-w-[558px]',
      unoptimized: true,
    },
  },

  orderForm: {
    badge: 'LinkedIn Services',
    serviceLabel: 'Followers',
    serviceTypeLabel: 'Followers',
    urlFieldLabel: 'LinkedIn Profile or Page URL',
    urlPlaceholder: 'https://linkedin.com/in/yourprofile',
    submitLabel: 'Pay Now With bKash/ Nagad',
  },

  whyChoose: {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: 'Why Choose TrendEvo to Buy gt<LinkedIn Followers> in Bangladesh',
    subtitle:
      'TrendEvo is built for Bangladeshi users who want a simple and reliable way to grow professional visibility on LinkedIn. From local payment support to easy order tracking, every part of the platform is made to help entrepreneurs, agencies, job seekers, company pages, and B2B brands manage LinkedIn growth with more confidence.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          'Your LinkedIn followers order starts processing after submission. Delivery speed may depend on the package size, but TrendEvo is designed for quick and smooth order handling.',
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          'You can buy LinkedIn followers in Bangladesh without spending a large budget. Our pricing works well for new professionals, freelancers, startups, SMEs, agencies, and growing company pages.',
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
          'Pay easily through bKash, Nagad, Rocket, and other supported methods. TrendEvo makes LinkedIn follower growth easier for Bangladeshi users who prefer local payment systems.',
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Quality-Focused Followers',
        description:
          'TrendEvo focuses on stable LinkedIn follower services that help improve profile presence, company page trust, and professional social proof. You can start small, test the service, and scale based on your branding needs.',
        iconFrameSrc:
          '/images/subservice/shared/real-followers-from-quality-sources-decoration.png',
      },
    ],
  },

  whoShouldBuy: {
    badge: 'Buy LinkedIn Followers',
    title: 'Who Should Buy gt<LinkedIn Followers> in Bangladesh?',
    subtitle:
      'A strong follower count can help a LinkedIn profile or company page look more trusted when someone visits it for the first time. TrendEvo’s LinkedIn followers service is useful for Bangladeshi users who want stronger professional credibility, better brand presentation, and a smoother start before posting content, running campaigns, or building business networks.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    items: [
      {
        title: 'Business Owners and Entrepreneurs',
        description:
          'Business owners in Bangladesh use LinkedIn to build trust with clients, partners, investors, and industry contacts. Buying LinkedIn followers can help founders, consultants, service providers, and local entrepreneurs make their profile or company page look more established.',
      },
      {
        title: 'Startups and B2B Companies',
        description:
          'New startups often need credibility before pitching services, hiring talent, or connecting with investors. LinkedIn followers can support SaaS brands, tech startups, export companies, software firms, and B2B service providers that want a stronger professional image.',
      },
      {
        title: 'Agencies and Digital Marketing Teams',
        description:
          'Digital agencies, SEO teams, creative studios, and SMM resellers often manage LinkedIn growth for clients. TrendEvo helps agencies place LinkedIn follower orders from one dashboard with local payment support, clear pricing, and simple order tracking.',
      },
      {
        title: 'Freelancers and Professionals',
        description:
          'Freelancers, consultants, designers, developers, marketers, writers, trainers, and corporate professionals can use LinkedIn followers to improve personal branding. A stronger follower count can make a profile look more active when prospects review skills, posts, and work history.',
      },
      {
        title: 'Job Seekers and Personal Brands',
        description:
          'Job seekers and personal brands need attention from recruiters, HR teams, and decision-makers. Buying LinkedIn followers in Bangladesh can help create an early trust signal, so your profile looks more visible when people check your posts, experience, and professional updates.',
      },
    ],
  },

  workingProcess: {
    badge: 'WORKING PROCESS',
    underlineSrc: '/images/working-process/how-to-buy-facebook-followers-on-trendevo-step-by-step-section-underline.svg',
    underlineWidth: 216,
    title: 'How to Buy LinkedIn Followers on TrendEvo — gt<Step by Step>',
    subtitle:
      'Buying LinkedIn followers in Bangladesh should not feel confusing. TrendEvo keeps the full process simple, so professionals, company page owners, agencies, freelancers, and resellers can place orders without technical knowledge.',
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
          'Add money to your account using supported payment methods in Bangladesh. You can fund your balance through bKash, Nagad, Rocket, or other available options before placing your LinkedIn followers order.',
      },
      {
        number: '03',
        title: 'Choose LinkedIn Followers Service',
        description:
          'Go to the LinkedIn services section and select the follower package that matches your goal. You can choose a small starter order, a larger branding package, or a reseller-friendly quantity.',
      },
      {
        number: '04',
        title: 'Enter Your LinkedIn Profile or Page URL',
        description:
          'Paste your LinkedIn profile link or company page URL, select the quantity, and submit the order. You do not need to share your LinkedIn password. TrendEvo processes the order using the public URL only.',
      },
    ],
  },

  thingsToKnow: {
    badge: 'Things to Know',
    title: 'Things to Know Before You Buy gt<LinkedIn Followers>',
    image: {
      src: '/images/subservice/buy-linkedin-followers/things-to-know-before-you-buy-linkedin-followers.png',
      alt: 'Things to Know Before You Buy LinkedIn Followers',
    },
    paragraphs: [
      'Buying LinkedIn followers can help your profile or company page look more active, but the best results come when the order matches your professional growth plan. Before placing an order on TrendEvo, make sure your LinkedIn profile or company page is public, the link is correct, and your selected package fits your current brand size.',
      'You do not need to share your LinkedIn password to buy LinkedIn followers in Bangladesh. TrendEvo only needs your public LinkedIn profile URL or company page link to process the order. This keeps your account safer and makes the ordering process simple for professionals, startups, agencies, and B2B marketers.',
      'For a natural professional appearance, avoid sudden oversized orders on a new profile or empty company page. Start with a suitable quantity, publish useful content, and increase your follower count step by step. This helps your LinkedIn presence look more believable to Bangladeshi visitors and business contacts.',
      'LinkedIn followers improve profile presence and social proof, but they should work together with valuable content. Share business insights, case studies, hiring updates, client wins, industry opinions, portfolio posts, and company news so new visitors have a reason to follow, connect, or trust your brand.',
    ],
    ctaLabel: 'Create an Account Now',
  },

  faq: {
    label: 'Frequently Asked Questions',
    title: 'Frequently Asked Questions — gt<Buy LinkedIn Followers> in Bangladesh',
    subtitle:
      'Find clear answers about buying LinkedIn followers in Bangladesh, payment options, delivery, safety, professional credibility, and order management on TrendEvo.',
    bg: 'section-7',
    items: [
      {
        question: 'Is it safe to buy LinkedIn followers from TrendEvo?',
        answer:
          'Yes, TrendEvo uses a simple order process where you only need to submit your public LinkedIn profile or company page link. We never ask for your LinkedIn password, so your login details stay private.',
      },
      {
        question: 'Can I buy LinkedIn followers in Bangladesh with bKash?',
        answer:
          'Yes, you can add funds using bKash and then place your LinkedIn followers order from the TrendEvo dashboard. We also support other local payment options for Bangladeshi users.',
      },
      {
        question: 'Do you accept Nagad or Rocket payments?',
        answer:
          'Yes, TrendEvo supports local payment methods such as Nagad, Rocket, and other available options. This makes it easier for professionals, startups, agencies, freelancers, and resellers in Bangladesh.',
      },
      {
        question: 'Do I need to share my LinkedIn password?',
        answer:
          'No, you do not need to share your password. To buy LinkedIn followers, you only need to provide the correct LinkedIn profile URL or company page link and choose your preferred quantity.',
      },
      {
        question: 'How fast will my LinkedIn followers order start?',
        answer:
          'Most orders start after submission and payment confirmation. Delivery time can vary based on service type, quantity, and current order volume.',
      },
      {
        question: 'Can I track my LinkedIn followers order?',
        answer:
          'Yes, you can track your order status from the TrendEvo dashboard. The order panel helps you check whether your LinkedIn followers order is pending, processing, completed, or partially completed.',
      },
      {
        question: 'Can I buy followers for a new LinkedIn company page?',
        answer:
          'Yes, new LinkedIn company pages can order followers. For a natural appearance, we suggest starting with a smaller package and growing your follower count step by step.',
      },
      {
        question: 'Are LinkedIn followers useful for personal branding?',
        answer:
          'Yes, LinkedIn followers can support personal branding by making your profile look more active and trusted. This is useful for professionals, freelancers, consultants, job seekers, and thought leaders.',
      },
      {
        question: 'Will buying LinkedIn followers increase my leads or job offers?',
        answer:
          'LinkedIn followers can improve your professional presence and trust signal, but leads and job offers also depend on your content, profile quality, network, and offer. For better results, post helpful updates and keep your profile complete.',
      },
      {
        question: 'Who can use TrendEvo’s LinkedIn followers service?',
        answer:
          'TrendEvo is useful for Bangladeshi business owners, entrepreneurs, startups, companies, agencies, freelancers, job seekers, professionals, personal brands, and B2B marketers who want stronger LinkedIn visibility.',
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
      'LinkedIn followers build professional trust, but stronger growth comes when your content also looks active and valuable. TrendEvo offers related SMM services in Bangladesh to support visibility, engagement, and authority across professional and social platforms.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy LinkedIn Likes',
        description:
          'Increase the trust signal of your LinkedIn posts with more likes. LinkedIn likes help your content look more relevant, support post engagement, and make your professional updates appear stronger to new audiences.',
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
          'Add more activity to your LinkedIn posts with relevant comments. This service is useful for thought leadership posts, company announcements, hiring updates, case studies, product launches, and B2B campaign content that needs a stronger response.',
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
