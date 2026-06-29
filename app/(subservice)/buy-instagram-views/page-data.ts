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

type InstagramViewsPageData = {
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

export const data: InstagramViewsPageData = {
  seo: {
    title: 'Buy Instagram Views in Bangladesh | TrendEvo',
    description:
      'Buy Instagram Views in Bangladesh with TrendEvo. Increase Reels views, video visibility, story reach, and content exposure using bKash, Nagad, Rocket, and secure orders.',
    canonical: '/buy-instagram-views',
  },

  hero: {
    bg: 'section-1',
    variant: 'wide',
    trustLabel: '⭐ 4.8 Rating | Trusted by Bangladeshi Creators, Brands & Agencies',
    title: 'Buy gt<Instagram Views> in Bangladesh for Better Content Visibility',
    description:
      'Instagram is a visual platform where views can shape the first impression of your content. When a Reel, video, or story gets more views, it can look more active, more interesting, and more worth watching. TrendEvo helps creators, influencers, eCommerce brands, restaurants, agencies, startups, SMEs, and local businesses buy Instagram views in Bangladesh through an easy lnk<Instagram SMM Panel|/instagram-smm-panel> with local payment support and secure delivery.',
    descriptionSecondary:
      'Our Instagram Views Service is built for users who want stronger Reels visibility, better video performance, and more audience attention on important content. You can choose a suitable view package, pay through bKash, Nagad, Rocket, or other supported methods, and support your Instagram marketing without sharing your password.',
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
      src: '/images/subservice/buy-instagram-views/buy-instagram-views-in-bangladesh-for-better-content-visibility.webp',
      alt: 'Buy Instagram Views in Bangladesh with TrendEvo',
      width: 558,
      height: 621,
      maxWidthClassName: 'max-w-[558px]',
      unoptimized: true,
    },
  },

  orderForm: {
    badge: 'Instagram Services',
    serviceLabel: 'Views',
    serviceTypeLabel: 'Views',
    urlFieldLabel: 'Instagram Content URL',
    urlPlaceholder: 'https://instagram.com/p/yourpost',
    submitLabel: 'Pay Now With bKash/ Nagad',
  },

  whyChoose: {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: 'Why Choose TrendEvo to Buy gt<Instagram Views> in Bangladesh',
    subtitle:
      'lnk<TrendEvo|/about-us> is made for Bangladeshi users who want a simple way to increase Instagram video visibility. From local payment support to clear order tracking, our lnk<SMM Panel Bangladesh|/> dashboard helps creators, brands, influencers, agencies, and resellers manage Instagram views from one easy place.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Fast View Delivery',
        description:
          'Your Instagram views order starts after you submit it from the dashboard. Delivery speed may depend on the content type, order size, and current volume, but TrendEvo keeps the process smooth for Reels, videos, and supported content.',
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable View Packages',
        description:
          'You can buy Instagram views in Bangladesh without using a large promotion budget. Our packages work well for Reels creators, online shops, fashion pages, cafés, startups, agencies, freelancers, and SMM resellers.',
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: 'Helpful Support Team',
        description:
          'Need help choosing the right Instagram View Package? TrendEvo support can guide you with service selection, order status, payment issues, and dashboard use.',
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
          'Pay easily through bKash, Nagad, Rocket, and other supported methods. TrendEvo makes Instagram Marketing Bangladesh easier for users who prefer trusted local payment systems.',
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Visibility-Focused Growth',
        description:
          'TrendEvo focuses on Instagram views that support content exposure, audience reach, and social proof. You can start with a small order, review the result, and increase view activity based on your content plan.',
        iconFrameSrc:
          '/images/subservice/shared/real-followers-from-quality-sources-decoration.png',
      },
    ],
  },

  whoShouldBuy: {
    badge: 'Buy Instagram Views',
    title: 'Who Should Buy gt<Instagram Views> in Bangladesh?',
    subtitle:
      'Instagram views help visual content look more active when people discover it through Reels, Explore, hashtags, stories, profile visits, or ads. TrendEvo’s Instagram engagement service is useful for Bangladeshi users who want stronger reach, better content visibility, and more attention around important videos.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    items: [
      {
        title: 'Content Creators and Influencers',
        description:
          'Creators need views to make Reels, tutorials, reviews, lifestyle clips, and short videos look more watchable. Food reviewers, fashion influencers, travel vloggers, educators, fitness creators, musicians, and entertainment pages can use Instagram views to support wider discovery.',
      },
      {
        title: 'E-commerce Stores and Fashion Brands',
        description:
          'Online stores in Bangladesh often use Reels and short videos to show product quality. Clothing shops, beauty brands, gadget sellers, jewelry pages, home decor stores, and handmade product businesses can buy Instagram views to make product videos look more popular.',
      },
      {
        title: 'Restaurants, Cafés, and Local Businesses',
        description:
          'Restaurants, cafés, cloud kitchens, salons, gyms, training centers, and local service providers can use Instagram views to improve menu videos, offer reels, event clips, customer moments, and behind-the-scenes content.',
      },
      {
        title: 'Agencies, Freelancers, and Resellers',
        description:
          'Digital agencies and freelancers often need quick Instagram visibility support for client campaigns. TrendEvo helps them place Instagram views orders from one dashboard with clear pricing, local payment options, and reseller-friendly access.',
      },
      {
        title: 'Startups, Personal Brands, and Institutions',
        description:
          'Startups, public figures, personal brands, NGOs, and educational institutions need video content that looks active and trusted. Instagram views can support launch videos, course promos, awareness reels, public messages, and community campaigns.',
      },
    ],
  },

  workingProcess: {
    badge: 'WORKING PROCESS',
    underlineSrc: '/images/working-process/how-to-buy-facebook-followers-on-trendevo-step-by-step-section-underline.svg',
    underlineWidth: 216,
    title: 'How to Buy Instagram Views on TrendEvo — gt<Step by Step>',
    subtitle:
      'Buying Instagram views in Bangladesh should be simple and quick. TrendEvo keeps the process easy, so creators, business owners, influencers, agencies, freelancers, and resellers can place orders without technical knowledge.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    steps: [
      {
        number: '01',
        title: 'Create Your TrendEvo Account',
        description:
          'Sign up with basic details and enter the TrendEvo dashboard. From there, you can browse Instagram lnk<SMM Panel services|/services>, compare prices, and manage your orders from one place.',
      },
      {
        number: '02',
        title: 'Add Funds to Your Balance',
        description:
          'Add money to your account using supported payment methods in Bangladesh. You can fund your balance through bKash, Nagad, Rocket, or other available options before placing your Instagram views order.',
      },
      {
        number: '03',
        title: 'Choose Instagram Views Service',
        description:
          'Go to the Instagram services section and select the views package that matches your content goal. You can choose a starter package, a Reels-focused package, or a bulk order for client campaigns.',
      },
      {
        number: '04',
        title: 'Enter Your Instagram Content URL',
        description:
          'Paste the correct Instagram Reel, video, or supported content link, select the quantity, and submit the order. You do not need to share your Instagram password. TrendEvo processes the order using the public content URL only.',
      },
    ],
  },

  thingsToKnow: {
    badge: 'Things to Know',
    title: 'Things to Know Before You Buy gt<Instagram Views>',
    paragraphs: [
      'Buying Instagram views can help your video content look more active, but the best result comes when your content is ready to hold attention. Before placing an order on TrendEvo, make sure your Instagram account is public, your content link is correct, and your selected package fits your current video activity.',
      'You do not need to share your Instagram password to buy Instagram views in Bangladesh. TrendEvo only needs your public Instagram Reel, video, or supported content link to process the order. This keeps the process safer and easier for creators, businesses, influencers, agencies, and resellers.',
      'For a natural content appearance, avoid very large view orders on videos with weak hooks, unclear visuals, or no profile activity. Start with a suitable amount, improve your opening seconds, and grow view activity step by step. This helps your content look more believable to Bangladeshi viewers.',
      'Instagram views can support visibility, but they work best with content people want to watch. Use strong Reels hooks, clear product clips, subtitles, trending formats, local context, useful tips, and story sharing so viewers have a reason to stay and engage.',
    ],
    ctaLabel: 'Create Your Account Now',
  },

  faq: {
    label: 'Frequently Asked Questions',
    title: 'Frequently Asked Questions — gt<Buy Instagram Views> in Bangladesh',
    subtitle:
      'Find clear answers about buying Instagram views in Bangladesh, payment options, delivery, safety, order tracking, and how TrendEvo helps support Instagram content visibility.',
    bg: 'section-7',
    items: [
      {
        question: 'Is it safe to buy Instagram views from TrendEvo?',
        answer:
          'Yes, TrendEvo uses a simple order process where you only need to submit your public Instagram content link. We never ask for your Instagram password, so your login details stay private.',
      },
      {
        question: 'Can I buy Instagram views in Bangladesh with bKash?',
        answer:
          'Yes, you can add funds using bKash and then place your Instagram views order from the TrendEvo dashboard. We also support other local payment options for Bangladeshi users.',
      },
      {
        question: 'Do you accept Nagad or Rocket payments?',
        answer:
          'Yes, TrendEvo supports local payment methods such as Nagad, Rocket, and other available options. This makes it easier for creators, businesses, influencers, agencies, and resellers in Bangladesh.',
      },
      {
        question: 'Do I need to share my Instagram password?',
        answer:
          'No, you do not need to share your password. To buy Instagram views, you only need to provide the correct Instagram Reel, video, or supported content link and choose your preferred quantity.',
      },
      {
        question: 'How fast will my Instagram views order start?',
        answer:
          'Most orders start after submission and payment confirmation. Delivery time can vary based on service type, quantity, content status, and current order volume.',
      },
      {
        question: 'Can I track my Instagram views order?',
        answer:
          'Yes, you can track your order status from the TrendEvo dashboard. The order panel helps you check whether your Instagram views order is pending, processing, completed, or partially completed.',
      },
      {
        question: 'Can I buy views for Instagram Reels?',
        answer:
          'Yes, you can buy Instagram views for Reels when the service supports your content type. Reels views can help your video look more active when people visit your profile or discover your content through Explore.',
      },
      {
        question: 'Do Instagram views help with Reels performance?',
        answer:
          'Instagram views can support visible activity and content credibility. Reels performance also depends on watch time, replays, saves, shares, comments, likes, captions, and audience relevance.',
      },
      {
        question: 'Will buying Instagram views increase my sales?',
        answer:
          'Instagram views can make product videos and brand Reels look more noticed, but sales depend on product quality, pricing, offers, visuals, landing experience, and customer service. Views work best as part of a full Instagram marketing plan.',
      },
      {
        question: 'Who can use TrendEvo’s Instagram views service?',
        answer:
          'TrendEvo is useful for Bangladeshi creators, influencers, eCommerce stores, fashion brands, restaurants, cafés, freelancers, startups, public figures, educational institutions, digital agencies, and SMM resellers who want stronger Instagram video visibility.',
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
      'Instagram views help your videos reach more attention, but stronger growth comes when your content also receives engagement and profile trust. TrendEvo offers related Instagram SMM services in Bangladesh to support visibility, credibility, and content performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy Instagram Likes',
        description:
          'Increase the trust signal of your Instagram posts and Reels with more likes. Instagram likes help product videos, reels, carousels, offers, and brand updates look more popular to new visitors.',
        icon: '/images/subservice/shared/buy-facebook-page-likes-icon.webp',
        iconWidth: 39,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'h-[128.12%] w-[120.8%] object-cover -translate-x-[10.27%] -translate-y-[9.29%]',
      },
      {
        title: 'Buy Instagram Comments',
        description:
          'Add more visible discussion to your Instagram content with comments. This service is useful for Reels, product launches, influencer content, campaign posts, brand announcements, and promotional updates.',
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
    title: 'Ready to Grow with the gt<Best SMM Panel> in Bangladesh?',
    description:
      'Join TrendEvo and manage your Instagram, Facebook, YouTube, TikTok, Telegram, and website traffic orders from one simple dashboard. Add funds with bKash, Nagad, or Rocket, choose your service, and start growing with secure order tracking.',
    primaryButtonLabel: 'Get Started Free',
    secondaryButtonLabel: 'See All Instagram Services',
    secondaryButtonHref: '/instagram-smm-panel',
  },
};
