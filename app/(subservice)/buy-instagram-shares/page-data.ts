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

type InstagramSharesPageData = {
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

export const data: InstagramSharesPageData = {
  seo: {
    title: 'Buy Instagram Shares in Bangladesh | TrendEvo',
    description:
      'Buy Instagram Shares in Bangladesh with TrendEvo. Improve Reels reach, content visibility, and share signals using bKash, Nagad, Rocket, and secure orders.',
    canonical: '/buy-instagram-shares',
  },

  hero: {
    bg: 'section-1',
    variant: 'wide',
    trustLabel: '⭐ 4.8 Rating | Trusted by Bangladeshi Creators, Brands & Agencies',
    title: 'Buy gt<Instagram Shares> in Bangladesh for Wider Content Reach',
    description:
      'Instagram shares can help content move beyond one profile. When people share a Reel, post, or carousel, it can reach new viewers through DMs, Stories, and audience networks. TrendEvo helps creators, influencers, eCommerce brands, restaurants, startups, agencies, SMEs, and local businesses buy Instagram shares in Bangladesh with simple ordering, local payment support, and secure delivery.',
    descriptionSecondary:
      'Our Instagram Shares Service is made for users who want better content distribution, stronger visibility signals, and more share activity on important posts. You can choose a suitable Instagram share package, pay through bKash, Nagad, Rocket, or other supported methods, and support your Instagram marketing without sharing your password.',
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
      alt: 'Buy Instagram Shares in Bangladesh with TrendEvo',
      width: 558,
      height: 621,
      maxWidthClassName: 'max-w-[558px]',
      unoptimized: true,
    },
  },

  orderForm: {
    badge: 'Instagram Services',
    serviceLabel: 'Shares',
    serviceTypeLabel: 'Shares',
    urlFieldLabel: 'Instagram Content URL',
    urlPlaceholder: 'https://instagram.com/p/yourpost',
    submitLabel: 'Pay Now With bKash/ Nagad',
  },

  whyChoose: {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: 'Why Choose TrendEvo to Buy gt<Instagram Shares> in Bangladesh',
    subtitle:
      'TrendEvo is designed for Bangladeshi users who want an easier way to improve Instagram content reach and sharing activity. With local payment support, clear order tracking, and a smooth SMM Panel Bangladesh dashboard, creators, brands, agencies, influencers, and resellers can manage Instagram share orders from one place.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Fast Share Processing',
        description:
          'Your Instagram shares order starts after you submit it from the dashboard. Delivery speed may depend on the content type, quantity, and current order volume, but TrendEvo keeps the process smooth and easy to manage.',
        icon: '/images/facebook-page-followers/facebook-page-followers-instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Share Packages',
        description:
          'You can buy Instagram shares in Bangladesh without spending a large marketing budget. Our packages work well for Reels creators, eCommerce sellers, fashion pages, restaurants, startups, agencies, freelancers, and SMM resellers.',
        icon: '/images/facebook-page-followers/facebook-page-followers-affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: 'Helpful Support Team',
        description:
          'Need help choosing the right Instagram share package? TrendEvo support can guide you with service selection, order status, payment issues, and dashboard use.',
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
          'Pay easily through bKash, Nagad, Rocket, and other supported methods. TrendEvo makes Instagram Marketing Bangladesh easier for users who prefer trusted local payment systems.',
        icon: '/images/facebook-page-followers/facebook-page-followers-local-payment-bkash-nagad-rocket-and-more-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Reach-Focused Growth',
        description:
          'TrendEvo focuses on Instagram shares that support content visibility, audience reach, and discoverability. You can start with a small order, test the service, and increase share activity based on your campaign plan.',
        iconFrameSrc:
          '/images/facebook-page-followers/facebook-page-followers-real-followers-from-quality-sources-decoration.png',
      },
    ],
  },

  whoShouldBuy: {
    badge: 'Buy Instagram Shares',
    title: 'Who Should Buy gt<Instagram Shares> in Bangladesh?',
    subtitle:
      'Instagram shares help content travel from one viewer to another. TrendEvo’s Instagram SMM Panel support is useful for Bangladeshi users who want wider content reach, better Reels distribution, stronger social proof, and more visibility around important campaigns.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    items: [
      {
        title: 'Content Creators and Influencers',
        description:
          'Creators need to share activity to help Reels, tips, tutorials, reviews, and lifestyle content reach more people. Food reviewers, fashion influencers, travel vloggers, educators, musicians, fitness creators, and comedy pages can use Instagram shares to support wider discovery.',
      },
      {
        title: 'E-commerce Stores and Fashion Brands',
        description:
          'Online shops in Bangladesh often rely on Instagram posts and Reels to promote products. Clothing stores, beauty brands, gadget sellers, jewelry pages, and handmade product businesses can buy Instagram shares to help product content spread beyond existing followers.',
      },
      {
        title: 'Restaurants, Cafés, and Local Businesses',
        description:
          'Restaurants, cafés, cloud kitchens, salons, gyms, training centers, and service providers can use Instagram shares to push menu updates, offer posts, event reels, customer photos, and location-based campaigns to more viewers.',
      },
      {
        title: 'Agencies, Freelancers, and Resellers',
        description:
          'Digital agencies and freelancers often need shared support for client content. TrendEvo helps them place Instagram shares orders from one dashboard with clear pricing, local payment options, and SMM reseller API access.',
      },
      {
        title: 'Startups, Personal Brands, and Institutions',
        description:
          'Startups, public figures, personal brands, NGOs, and educational institutions need content that moves across communities. Instagram shares can support launch posts, course promotions, awareness campaigns, event updates, and public communication.',
      },
    ],
  },

  workingProcess: {
    badge: 'WORKING PROCESS',
    underlineSrc: '/images/working-process/working-process-section-underline.svg',
    underlineWidth: 216,
    title: 'How to Buy Instagram Shares on TrendEvo — gt<Step by Step>',
    subtitle:
      'Buying Instagram shares in Bangladesh should be simple and quick. TrendEvo keeps the process easy, so creators, business owners, agencies, influencers, freelancers, and resellers can place orders without technical knowledge.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    steps: [
      {
        number: '01',
        title: 'Create Your TrendEvo Account',
        description:
          'Sign up with basic details and enter the TrendEvo dashboard. From there, you can browse Instagram SMM Panel services, compare prices, and manage your orders from one place.',
      },
      {
        number: '02',
        title: 'Add Funds to Your Balance',
        description:
          'Add money to your account using supported payment methods in Bangladesh. You can fund your balance through bKash, Nagad, Rocket, or other available options before placing your Instagram shares order.',
      },
      {
        number: '03',
        title: 'Choose Instagram Shares Service',
        description:
          'Go to the Instagram services section and select the share package that matches your content goal. You can choose a starter package, a Reels-focused package, or a bulk order for client campaigns.',
      },
      {
        number: '04',
        title: 'Enter Your Instagram Content URL',
        description:
          'Paste the correct Instagram post, Reel, or carousel link, select the quantity, and submit the order. You do not need to share your Instagram password. TrendEvo processes the order using the public content URL only.',
      },
    ],
  },

  thingsToKnow: {
    badge: 'Things to Know',
    title: 'Things to Know Before You Buy gt<Instagram Shares>',
    paragraphs: [
      'Buying Instagram shares can help your content look more distributable, but the best result comes when your post has a clear reason to be shared. Before placing an order on TrendEvo, make sure your Instagram account is public, your content link is correct, and your selected package matches your current content activity.',
      'You do not need to share your Instagram password to buy Instagram shares in Bangladesh. TrendEvo only needs your public Instagram post, Reel, or carousel link to process the order. This keeps the process safer and easier for creators, businesses, influencers, agencies, and resellers.',
      'For a natural content appearance, avoid very large share orders on posts with weak visuals, unclear captions, or no engagement. Start with a suitable amount, improve your content message, and grow share activity step by step. This helps your content look more believable to Bangladeshi viewers.',
      'Instagram shares can support visibility, but they work best with content people would normally send to others. Use helpful tips, strong Reels hooks, product benefits, offers, event details, relatable captions, and local context so your content feels worth sharing.',
    ],
    ctaLabel: 'Create Your Account Now',
  },

  faq: {
    label: 'Frequently Asked Questions',
    title: 'Frequently Asked Questions — gt<Buy Instagram Shares> in Bangladesh',
    subtitle:
      'Find clear answers about buying Instagram shares in Bangladesh, payment options, delivery, safety, order tracking, and how TrendEvo helps support Instagram content reach.',
    bg: 'section-7',
    items: [
      {
        question: 'Is it safe to buy Instagram shares from TrendEvo?',
        answer:
          'Yes, TrendEvo uses a simple order process where you only need to submit your public Instagram content link. We never ask for your Instagram password, so your login details stay private.',
      },
      {
        question: 'Can I buy Instagram shares in Bangladesh with bKash?',
        answer:
          'Yes, you can add funds using bKash and then place your Instagram shares order from the TrendEvo dashboard. We also support other local payment options for Bangladeshi users.',
      },
      {
        question: 'Do you accept Nagad or Rocket payments?',
        answer:
          'Yes, TrendEvo supports local payment methods such as Nagad, Rocket, and other available options. This makes it easier for creators, businesses, influencers, agencies, and resellers in Bangladesh.',
      },
      {
        question: 'Do I need to share my Instagram password?',
        answer:
          'No, you do not need to share your password. To buy Instagram shares, you only need to provide the correct Instagram post, Reel, or carousel link and choose your preferred quantity.',
      },
      {
        question: 'How fast will my Instagram shares order start?',
        answer:
          'Most orders start after submission and payment confirmation. Delivery time can vary based on service type, quantity, content status, and current order volume.',
      },
      {
        question: 'Can I track my Instagram shares order?',
        answer:
          'Yes, you can track your order status from the TrendEvo dashboard. The order panel helps you check whether your Instagram shares order is pending, processing, completed, or partially completed.',
      },
      {
        question: 'Can I buy shares for Instagram Reels?',
        answer:
          'Yes, you can buy Instagram shares for Reels when the service supports your content type. Reels shares can help your video look more share-worthy and support wider content distribution.',
      },
      {
        question: 'Do Instagram shares help with content visibility?',
        answer:
          'Instagram shares can support visible distribution signals and help content appear more active. Content visibility also depends on watch time, saves, likes, comments, captions, hashtags, and audience relevance.',
      },
      {
        question: 'Will buying Instagram shares help my campaign perform better?',
        answer:
          'Instagram shares can help campaign content look more active and easier to distribute. For stronger results, combine shares with strong creative, clear offers, useful captions, and consistent posting.',
      },
      {
        question: 'Who can use TrendEvo’s Instagram shares service?',
        answer:
          'TrendEvo is useful for Bangladeshi creators, influencers, eCommerce stores, fashion brands, restaurants, cafés, freelancers, startups, public figures, educational institutions, digital agencies, and SMM resellers who want wider Instagram content reach.',
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
      'Instagram shares help your content reach more people, but stronger growth comes when your posts also build trust and interaction. TrendEvo offers related Instagram SMM services in Bangladesh to support visibility, engagement, and brand awareness.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy Instagram Likes',
        description:
          'Increase the trust signal of your Instagram posts with more likes. Instagram likes help Reels, product photos, carousels, offers, and brand updates look more popular to new visitors.',
        icon: '/images/facebook-page-followers/facebook-page-followers-buy-facebook-likes-icon.webp',
        iconWidth: 39,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'h-[128.12%] w-[120.8%] object-cover -translate-x-[10.27%] -translate-y-[9.29%]',
      },
      {
        title: 'Buy Instagram Comments',
        description:
          'Add more visible interaction to your Instagram posts and Reels with comments. This service is useful for product launches, influencer posts, campaign content, brand announcements, and promotional updates.',
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
    title: 'Ready to Grow with the gt<Best Instagram SMM Panel> in Bangladesh?',
    description:
      'Join TrendEvo and manage your Instagram, Facebook, YouTube, TikTok, Telegram, and website traffic orders from one simple dashboard. Add funds with bKash, Nagad, or Rocket, choose your service, and start growing with secure order tracking.',
    primaryButtonLabel: 'Get Started Free',
    secondaryButtonLabel: 'See All Instagram Services',
    secondaryButtonHref: '/instagram-smm-panel',
  },
};
