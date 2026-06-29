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

type FacebookPageLikesPageData = {
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

export const data: FacebookPageLikesPageData = {
  seo: {
    title: 'Buy Facebook Page Likes in Bangladesh | TrendEvo',
    description:
      'Buy Facebook Page Likes in Bangladesh with TrendEvo. Build trust for your business page using bKash, Nagad, Rocket, fast delivery, and secure orders.',
    canonical: '/buy-facebook-page-likes',
  },

  hero: {
    bg: 'section-1',
    variant: 'wide',
    trustLabel: '⭐ 4.8 Rating | Trusted by Bangladeshi Businesses, Brands & Agencies',
    title: 'Buy gt<Facebook Page Likes> in Bangladesh for Stronger Brand Trust',
    description:
      'A Facebook business page often becomes the first place where Bangladeshi customers check a brand. When a page has more likes, it looks more familiar, active, and trusted. TrendEvo helps businesses, online stores, agencies, public figures, NGOs, startups, and local entrepreneurs buy Facebook Page Likes in Bangladesh with an easy dashboard, local payments, and safe order processing.',
    descriptionSecondary:
      'Our Facebook Page Likes service is built for pages that need stronger brand credibility, better public approval, and a cleaner first impression. You can choose a suitable package, pay with bKash, Nagad, Rocket, or other supported methods, and improve your Facebook page presence without sharing your password.',
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
      src: '/images/subservice/buy-facebook-page-likes/buy-facebook-page-likes-in-bangladesh-for-stronger-brand-trust.webp',
      alt: 'Buy Facebook Page Likes in Bangladesh with TrendEvo',
      width: 558,
      height: 621,
      maxWidthClassName: 'max-w-[558px]',
      unoptimized: true,
    },
  },

  orderForm: {
    badge: 'Facebook Services',
    serviceLabel: 'Page Likes',
    submitLabel: 'Pay Now With bKash/ Nagad',
  },

  whyChoose: {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: 'Why Choose TrendEvo to Buy gt<Facebook Page Likes> in Bangladesh',
    subtitle:
      'TrendEvo is made for Bangladeshi users who want a simple way to improve Facebook page credibility. As the best lnk<facebook SMM panel|/facebook-smm-panel>, TrendEvo helps business owners, agencies, resellers, and creators manage Facebook Page Likes with secure payment options, clear order tracking, and better control.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Quick Order Processing',
        description:
          'Your Facebook Page Likes order starts after you place it from the dashboard. Processing speed may vary by package size, but TrendEvo keeps the order flow smooth and easy to follow.',
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Budget-Friendly Packages',
        description:
          'You can buy Facebook Page Likes in Bangladesh without needing a large marketing budget. Our packages are suitable for new business pages, e-commerce brands, restaurants, local shops, startups, and reseller projects.',
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: 'Support When You Need It',
        description:
          'Have a question about service selection, order status, payment, or dashboard use? TrendEvo support is available to help you choose the right Facebook Page Likes package and solve order-related issues.',
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
        title: 'Local Payment Support',
        description:
          'Pay through bKash, Nagad, Rocket, and other available methods. TrendEvo makes Facebook Page Likes easier for Bangladeshi users who prefer familiar local payment systems.',
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Credibility-Focused Growth',
        description:
          'TrendEvo focuses on Facebook Page Likes that support brand appearance and page authority. You can begin with a small order, review the result, and scale your page growth based on your business needs.',
        iconFrameSrc:
          '/images/subservice/shared/real-followers-from-quality-sources-decoration.png',
      },
    ],
  },

  whoShouldBuy: {
    badge: 'Buy Facebook Page Likes',
    title: 'Who Should Buy gt<Facebook Page Likes> in Bangladesh?',
    subtitle:
      'Facebook Page Likes can make a business page look more trusted and accepted when new visitors check it for the first time. TrendEvo’s Facebook Page Likes service is useful for Bangladeshi users who want stronger trust signals, better brand presentation, and a more professional page before running ads, launching offers, or sending traffic from other platforms. As a reliable lnk<SMM Panel BD|/>, TrendEvo also helps local businesses, creators, agencies, and resellers manage page growth with easy ordering and local payment support.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    items: [
      {
        title: 'Local Business Pages',
        description:
          'Many businesses in Bangladesh use Facebook as their main online storefront. Restaurants, boutiques, electronics stores, salons, training centers, and home-based sellers can use Facebook Page Likes to make their page look more reliable when customers visit for the first time.',
      },
      {
        title: 'E-commerce and Online Stores',
        description:
          'Online buyers often check page likes before messaging a seller or placing an order. A page with stronger likes can help fashion shops, gadget sellers, beauty stores, and home decor brands create a better trust signal for visitors.',
      },
      {
        title: 'Public Figures and Personal Brands',
        description:
          'Public figures need a page that looks established and easy to trust. Politicians, speakers, artists, coaches, musicians, educators, and media personalities can buy Facebook Page Likes in Bangladesh to improve their public image and page authority.',
      },
      {
        title: 'Digital Agencies and Resellers',
        description:
          'Agencies often manage many Facebook pages for clients. TrendEvo helps digital agencies and SMM resellers place Facebook Page Likes orders from one dashboard with clear pricing, local payment options, and reseller-friendly service access.',
      },
      {
        title: 'Startups, NGOs, and Community Pages',
        description:
          'New startups, social projects, NGOs, and community groups need early credibility to attract attention. Facebook Page Likes can help their page look active before awareness campaigns, fundraising posts, event promotions, or local outreach.',
      },
    ],
  },

  workingProcess: {
    badge: 'WORKING PROCESS',
    underlineSrc: '/images/working-process/how-to-buy-facebook-followers-on-trendevo-step-by-step-section-underline.svg',
    underlineWidth: 216,
    title: 'How to Buy Facebook Page Likes on TrendEvo — gt<Step by Step>',
    subtitle:
      'Buying Facebook Page Likes in Bangladesh should be quick and simple. lnk<TrendEvo|/about-us> keeps the process easy for business owners, page admins, agencies, freelancers, and resellers who want to improve page trust without technical steps.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    steps: [
      {
        number: '01',
        title: 'Create Your TrendEvo Account',
        description:
          'Sign up with basic details and enter the TrendEvo dashboard. From there, you can view Facebook services, compare prices, and manage all your orders from one place.',
      },
      {
        number: '02',
        title: 'Add Balance to Your Account',
        description:
          'Add funds using supported payment methods in Bangladesh. You can use bKash, Nagad, Rocket, or other available options before placing your Facebook Page Likes order.',
      },
      {
        number: '03',
        title: 'Select Facebook Page Likes Service',
        description:
          'Go to the Facebook service list and choose the Page Likes package that fits your goal. You can start with a small quantity, choose a stronger brand package, or place bulk orders for client pages.',
      },
      {
        number: '04',
        title: 'Submit Your Facebook Page URL',
        description:
          'Paste the correct Facebook page link, enter the quantity, and confirm the order. You do not need to share your Facebook login details. TrendEvo only needs your public page URL to process the service.',
      },
    ],
  },

  thingsToKnow: {
    badge: 'Things to Know',
    title: 'Things to Know Before You Buy gt<Facebook Page Likes>',
    paragraphs: [
      'Buying Facebook Page Likes can improve how your page looks to new visitors, but the best result comes when the service matches your real marketing plan. Before ordering on TrendEvo, check that your Facebook page is public, the URL is correct, and the package size fits your current page activity.',
      'You do not need to share your Facebook password to buy Facebook Page Likes in Bangladesh. TrendEvo only requires your public page link to process the order. This keeps the process safer and easier for businesses, agencies, entrepreneurs, and resellers.',
      'For a natural page appearance, avoid very large orders on a completely new page. Start with a realistic amount, keep your page updated, and grow step by step. This makes your page look more believable to Bangladeshi visitors.',
      'Facebook Page Likes can support page credibility, but they work best with useful content. Post product photos, customer feedback, short videos, offers, menus, service updates, and local business stories so visitors have a reason to trust your brand.',
    ],
    ctaLabel: 'Create An Account Now',
  },

  faq: {
    label: 'Frequently Asked Questions',
    title: 'Frequently Asked Questions — gt<Buy Facebook Page Likes> in Bangladesh',
    subtitle:
      'Find clear answers about buying Facebook Page Likes in Bangladesh, payment options, order safety, delivery, tracking, and how TrendEvo works for local users.',
    bg: 'section-7',
    items: [
      {
        question: 'Is it safe to buy Facebook Page Likes from TrendEvo?',
        answer:
          'Yes, TrendEvo uses a simple order process where you only submit your public Facebook page link. We do not ask for your Facebook password, so your login details remain private.',
      },
      {
        question: 'Can I buy Facebook Page Likes in Bangladesh with bKash?',
        answer:
          'Yes, you can add funds with bKash and place your Facebook Page Likes order from the TrendEvo dashboard. This makes the process easier for Bangladeshi business owners and page admins.',
      },
      {
        question: 'Do you support Nagad and Rocket payments?',
        answer:
          'Yes, TrendEvo supports Nagad, Rocket, and other available local payment methods. These options are useful for SMEs, agencies, resellers, creators, and local entrepreneurs in Bangladesh.',
      },
      {
        question: 'Do I need to provide my Facebook password?',
        answer:
          'No, you do not need to share your password. To buy Facebook Page Likes, you only need to submit the correct public Facebook page URL and select your preferred quantity.',
      },
      {
        question: 'How fast will my Facebook Page Likes order start?',
        answer:
          'Most orders begin after submission and payment confirmation. Delivery time can vary based on service type, package size, and current order volume.',
      },
      {
        question: 'Can I track my Facebook Page Likes order?',
        answer:
          'Yes, you can track your order from the TrendEvo dashboard. The panel shows whether your order is pending, processing, completed, or partially completed.',
      },
      {
        question: 'Can I buy Page Likes for a new Facebook business page?',
        answer:
          'Yes, new Facebook business pages can order Page Likes. For a natural look, it is better to start with a smaller package and increase likes gradually as your page gets more content.',
      },
      {
        question: 'Are Facebook Page Likes and Facebook Followers the same?',
        answer:
          'No, they are not the same. Facebook Page Likes show public approval for a page, while followers are people connected to page updates. Many brands use both to strengthen page trust and visibility.',
      },
      {
        question: 'Will buying Facebook Page Likes increase my sales?',
        answer:
          'Facebook Page Likes can improve page credibility and first impression, but sales also depend on your products, pricing, content, customer service, and offers. Page Likes work best as part of a wider Facebook marketing plan.',
      },
      {
        question: 'Who can use TrendEvo’s Facebook Page Likes service?',
        answer:
          'TrendEvo is useful for Bangladeshi local businesses, e-commerce stores, restaurants, startups, NGOs, public figures, digital agencies, freelancers, and SMM resellers who want a stronger Facebook page presence.',
      },
    ],
    ctaTitle: 'Still have questions?',
    ctaSubtitle:
      "Can't find the answer you're looking for? Please get in touch with our team.",
    ctaButtonLabel: 'Contact Support',
    ctaButtonHref: '/contact-us',
  },

  relatedServices: {
    badge: 'RELATED SERVICE',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 198,
    title: 'Related Services You gt<Might Also Need>',
    subtitle:
      'Facebook Page Likes help your page look more trusted, but stronger growth comes when your page also has followers and post activity. TrendEvo offers related Facebook SMM services in Bangladesh to support page credibility, engagement, visibility, and brand confidence.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy Facebook Followers',
        description:
          'Grow your Facebook page with more followers and build a stronger first impression. This service is useful for new pages, online shops, creators, local brands, and businesses that want better page trust before running ads or promotions.',
        icon: '/images/subservice/shared/buy-facebook-page-likes-icon.webp',
        iconWidth: 39,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'h-[128.12%] w-[120.8%] object-cover -translate-x-[10.27%] -translate-y-[9.29%]',
      },
      {
        title: 'Buy Facebook Comments',
        description:
          'Add a more visible response to your Facebook posts with comments. This can help product launches, event posts, promotional updates, service announcements, and local business campaigns look more active.',
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
    title: 'Ready to Build a gt<Stronger Facebook Page> in Bangladesh?',
    description:
      'Join TrendEvo and manage your Facebook, Instagram, YouTube, TikTok, Telegram, and website traffic services from one simple dashboard. Add funds with bKash, Nagad, or Rocket, choose your service, and grow your page with secure order tracking.',
    primaryButtonLabel: 'Get Started Free',
    secondaryButtonLabel: 'View All Facebook Services',
    secondaryButtonHref: '/facebook-smm-panel',
  },
};
