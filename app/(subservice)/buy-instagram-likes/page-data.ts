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

type InstagramLikesPageData = {
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

export const data: InstagramLikesPageData = {
  seo: {
    title: 'Buy Instagram Likes in Bangladesh | TrendEvo',
    description:
      'Buy Instagram Likes in Bangladesh with TrendEvo. Boost post engagement, Reels activity, and content trust using bKash, Nagad, Rocket, and secure orders.',
    canonical: '/buy-instagram-likes',
  },

  hero: {
    bg: 'section-1',
    variant: 'wide',
    trustLabel: '⭐ 4.8 Rating | Trusted by Bangladeshi Creators, Brands & Agencies',
    title: 'Buy gt<Instagram Likes> in Bangladesh for Stronger Content Engagement',
    description:
      'Instagram content needs quick attention. When a post, Reel, carousel, or product photo gets more likes, it can look more interesting, trusted, and worth exploring. TrendEvo helps creators, influencers, eCommerce brands, restaurants, fashion pages, agencies, startups, and local businesses buy Instagram likes in Bangladesh with simple ordering, local payment support, and secure delivery.',
    descriptionSecondary:
      'Our Instagram Likes Service is made for users who want stronger post engagement, better social proof, and a more active content appearance. You can choose a suitable package, pay through bKash, Nagad, Rocket, or other supported methods, and improve your Instagram content performance without sharing your password.',
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
      alt: 'Buy Instagram Likes in Bangladesh with TrendEvo',
      width: 558,
      height: 621,
      maxWidthClassName: 'max-w-[558px]',
      unoptimized: true,
    },
  },

  orderForm: {
    badge: 'Instagram Services',
    serviceLabel: 'Likes',
    serviceTypeLabel: 'Likes',
    urlFieldLabel: 'Instagram Post URL',
    urlPlaceholder: 'https://instagram.com/p/yourpost',
    submitLabel: 'Pay Now With bKash/ Nagad',
  },

  whyChoose: {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: 'Why Choose TrendEvo to Buy gt<Instagram Likes> in Bangladesh',
    subtitle:
      'TrendEvo is built for Bangladeshi users who want a simple way to improve Instagram post activity. From local payment support to easy order tracking, our lnk<SMM Panel|/> helps creators, online stores, agencies, influencers, and resellers manage Instagram engagement from one clean dashboard.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Fast Like Delivery',
        description:
          'Your Instagram likes order starts after you submit it from the dashboard. Delivery speed may depend on the package size and current order volume, but TrendEvo is designed for smooth and quick processing.',
        icon: '/images/facebook-page-followers/facebook-page-followers-instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Like Packages',
        description:
          'You can buy Instagram likes in Bangladesh without spending a large budget. Our packages work well for new creators, fashion brands, product sellers, cafés, startups, freelancers, agencies, and lnk<SMM resellers|https://trendevo.com/api>.',
        icon: '/images/facebook-page-followers/facebook-page-followers-affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: 'Helpful Support Team',
        description:
          'Need help choosing the right Instagram Likes package? TrendEvo support can guide you with service selection, order status, payment issues, and dashboard use.',
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
          'Pay easily through bKash, Nagad, Rocket, and other supported methods. TrendEvo makes Instagram Marketing Bangladesh easier for users who prefer familiar local payment systems.',
        icon: '/images/facebook-page-followers/facebook-page-followers-local-payment-bkash-nagad-rocket-and-more-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Engagement-Focused Growth',
        description:
          'TrendEvo focuses on Instagram likes that support post visibility, content trust, and audience perception. You can start with a small order, test the service, and scale based on your content plan.',
        iconFrameSrc:
          '/images/facebook-page-followers/facebook-page-followers-real-followers-from-quality-sources-decoration.png',
      },
    ],
  },

  whoShouldBuy: {
    badge: 'Buy Instagram Likes',
    title: 'Who Should Buy gt<Instagram Likes> in Bangladesh?',
    subtitle:
      'Instagram likes can make content look more active when people find it through Reels, Explore, hashtags, stories, ads, or profile visits. TrendEvo’s lnk<Instagram SMM Panel|/instagram-smm-panel> support is useful for Bangladeshi users who want stronger post credibility, better content response, and a more professional Instagram presence.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    items: [
      {
        title: 'Content Creators and Influencers',
        description:
          'Creators need strong engagement signals on Reels, photos, carousels, and collaboration posts. Food reviewers, fashion influencers, travel vloggers, musicians, fitness creators, educators, and lifestyle creators can use Instagram likes to make their content look more appealing to new viewers.',
      },
      {
        title: 'E-commerce Stores and Fashion Brands',
        description:
          'Online buyers often judge product popularity by visible engagement. Clothing stores, beauty brands, gadget sellers, jewelry pages, home decor shops, and handmade product businesses can buy Instagram likes to make product posts look more trusted and attractive.',
      },
      {
        title: 'Restaurants, Cafés, and Local Businesses',
        description:
          'Restaurants, cafés, cloud kitchens, salons, gyms, training centers, and service providers can use Instagram likes to improve the appeal of menu posts, offer updates, customer photos, event promotions, and local campaign content.',
      },
      {
        title: 'Agencies, Freelancers, and Resellers',
        description:
          'Digital agencies and freelancers often need fast Instagram engagement support for client campaigns. TrendEvo helps them place Instagram likes orders from one dashboard with clear pricing, local payment options, and reseller-friendly access.',
      },
      {
        title: 'Startups, Personal Brands, and Institutions',
        description:
          'Startups, public figures, personal brands, NGOs, and educational institutions need content that looks active and trusted. Instagram likes can support awareness posts, course updates, launch announcements, personal branding content, and community campaigns.',
      },
    ],
  },

  workingProcess: {
    badge: 'WORKING PROCESS',
    underlineSrc: '/images/working-process/working-process-section-underline.svg',
    underlineWidth: 216,
    title: 'How to Buy Instagram Likes on TrendEvo — gt<Step by Step>',
    subtitle:
      'Buying Instagram likes in Bangladesh should be quick and easy. TrendEvo keeps the process simple, so creators, business owners, agencies, influencers, freelancers, and resellers can place orders without technical knowledge.',
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
          'Add money to your account using supported payment methods in Bangladesh. You can fund your balance through bKash, Nagad, Rocket, or other available options before placing your Instagram likes order.',
      },
      {
        number: '03',
        title: 'Choose Instagram Likes Service',
        description:
          'Go to the Instagram services section and select the like package that matches your content goal. You can choose a small starter package, a Reels-focused package, or a bulk order for client campaigns.',
      },
      {
        number: '04',
        title: 'Enter Your Instagram Post URL',
        description:
          'Paste the correct Instagram post, Reel, or carousel link, select the quantity, and submit the order. You do not need to share your Instagram password. TrendEvo processes the order using the public content URL only.',
      },
    ],
  },

  thingsToKnow: {
    badge: 'Things to Know',
    title: 'Things to Know Before You Buy gt<Instagram Likes>',
    paragraphs: [
      'Buying Instagram likes can help your content look more active, but the best result comes when your post is ready for attention. Before placing an order on TrendEvo, make sure your Instagram account is public, your content link is correct, and your selected package fits your current post activity.',
      'You do not need to share your Instagram password to buy Instagram likes in Bangladesh. TrendEvo only needs your public Instagram post, Reel, or carousel link to process the order. This keeps the process safer and easier for creators, businesses, agencies, influencers, and resellers.',
      'For a natural content appearance, avoid very large orders on posts with weak visuals, unclear captions, or no profile activity. Start with a suitable quantity, improve your post quality, and increase engagement step by step. This helps your content look more believable to Bangladeshi viewers.',
      'Instagram likes can support social proof, but they work best with strong content. Use clear captions, high-quality visuals, Reels hooks, product details, offer information, hashtags, and story sharing so visitors have a reason to engage with your brand.',
    ],
    ctaLabel: 'Create Your Account Now',
  },

  faq: {
    label: 'Frequently Asked Questions',
    title: 'Frequently Asked Questions — gt<Buy Instagram Likes> in Bangladesh',
    subtitle:
      'Find clear answers about buying Instagram likes in Bangladesh, payment options, delivery, safety, order tracking, and how TrendEvo helps support Instagram engagement.',
    bg: 'section-7',
    items: [
      {
        question: 'Is it safe to buy Instagram likes from TrendEvo?',
        answer:
          'Yes, TrendEvo uses a simple order process where you only need to submit your public Instagram content link. We never ask for your Instagram password, so your login details stay private.',
      },
      {
        question: 'Can I buy Instagram likes in Bangladesh with bKash?',
        answer:
          'Yes, you can add funds using bKash and then place your Instagram likes order from the TrendEvo dashboard. We also support other local payment options for Bangladeshi users.',
      },
      {
        question: 'Do you accept Nagad or Rocket payments?',
        answer:
          'Yes, TrendEvo supports local payment methods such as Nagad, Rocket, and other available options. This makes it easier for creators, businesses, influencers, agencies, and resellers in Bangladesh.',
      },
      {
        question: 'Do I need to share my Instagram password?',
        answer:
          'No, you do not need to share your password. To buy Instagram likes, you only need to provide the correct Instagram post, Reel, or carousel link and choose your preferred quantity.',
      },
      {
        question: 'How fast will my Instagram likes order start?',
        answer:
          'Most orders start after submission and payment confirmation. Delivery time can vary based on service type, quantity, content status, and current order volume.',
      },
      {
        question: 'Can I track my Instagram likes order?',
        answer:
          'Yes, you can track your order status from the TrendEvo dashboard. The order panel helps you check whether your Instagram likes order is pending, processing, completed, or partially completed.',
      },
      {
        question: 'Can I buy likes for Instagram Reels?',
        answer:
          'Yes, you can buy Instagram likes for Reels when the service supports your content type. Reels likes can help your video look more engaging when people discover it through profile visits, shares, or Explore.',
      },
      {
        question: 'Do Instagram likes help with content performance?',
        answer:
          'Instagram likes can support visible engagement and social proof. Content performance also depends on watch time, saves, shares, comments, captions, hashtags, and how relevant your content is to your audience.',
      },
      {
        question: 'Will buying Instagram likes increase my sales?',
        answer:
          'Instagram likes can make product posts and brand content look more trusted, but sales depend on product quality, pricing, offers, visuals, customer service, and conversion strategy. Likes work best as part of a full Instagram marketing plan.',
      },
      {
        question: 'Who can use TrendEvo’s Instagram likes service?',
        answer:
          'TrendEvo is useful for Bangladeshi creators, influencers, eCommerce stores, fashion brands, restaurants, cafés, freelancers, startups, public figures, educational institutions, digital agencies, and SMM resellers who want stronger Instagram engagement.',
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
      'Instagram likes help your content look active, but stronger growth comes when your profile also builds trust and interaction. TrendEvo offers related Instagram SMM services in Bangladesh to support visibility, brand awareness, and content performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy Instagram Followers',
        description:
          'Grow your profile authority with more Instagram followers. This service helps creators, brands, and businesses build a stronger first impression when people visit their profile after seeing content.',
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
    title: 'Ready to Grow with a gt<Trusted SMM Panel> in Bangladesh?',
    description:
      'Join TrendEvo and manage your Instagram, Facebook, YouTube, TikTok, Telegram, and website traffic orders from one simple dashboard. Add funds with bKash, Nagad, or Rocket, choose your service, and start growing with secure order tracking.',
    primaryButtonLabel: 'Get Started Free',
    secondaryButtonLabel: 'See All Instagram Services',
    secondaryButtonHref: '/instagram-smm-panel',
  },
};
