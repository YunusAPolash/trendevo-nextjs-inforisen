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

type InstagramCommentsPageData = {
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

export const data: InstagramCommentsPageData = {
  seo: {
    title: 'Buy Instagram Comments in Bangladesh | TrendEvo',
    description:
      'Buy Instagram Comments in Bangladesh with TrendEvo. Increase post discussions, Reels interaction, and brand trust using bKash, Nagad, Rocket, and secure orders.',
    canonical: '/buy-instagram-comments',
  },

  hero: {
    bg: 'section-1',
    variant: 'wide',
    trustLabel: '⭐ 4.8 Rating | Trusted by Bangladeshi Creators, Brands & Agencies',
    title: 'Buy gt<Instagram Comments> in Bangladesh for Better Audience Interaction',
    description:
      'Instagram comments make content feel alive. A post or Reel with visible discussion can attract more attention, build trust, and encourage people to spend more time with your content. TrendEvo helps creators, influencers, eCommerce stores, fashion brands, restaurants, agencies, startups, SMEs, and local businesses buy Instagram comments in Bangladesh with easy ordering, local payment support, and secure delivery.',
    descriptionSecondary:
      'Our Instagram Comments Service is built for users who want stronger post conversations, better social proof, and a more active brand image. You can choose a suitable comment package, pay through bKash, Nagad, Rocket, or other supported methods, and improve your Instagram content interaction without sharing your password.',
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
      src: '/images/subservice/buy-instagram-comments/buy-instagram-comments-in-bangladesh-for-better-audience-interaction.webp',
      alt: 'Buy Instagram Comments in Bangladesh with TrendEvo',
      width: 558,
      height: 621,
      maxWidthClassName: 'max-w-[558px]',
      unoptimized: true,
    },
  },

  orderForm: {
    badge: 'Instagram Services',
    serviceLabel: 'Comments',
    serviceTypeLabel: 'Comments',
    urlFieldLabel: 'Instagram Content URL',
    urlPlaceholder: 'https://instagram.com/p/yourpost',
    submitLabel: 'Pay Now With bKash/ Nagad',
  },

  whyChoose: {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: 'Why Choose TrendEvo to Buy gt<Instagram Comments> in Bangladesh',
    subtitle:
      'lnk<TrendEvo|/> is made for Bangladeshi users who want a simple way to increase Instagram content interaction. From local payment options to clear order tracking, our lnk<cheapest SMM Panel in Bangladesh|/> helps creators, brands, agencies, influencers, and resellers manage Instagram comments from one easy dashboard.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Fast Comment Processing',
        description:
          'Your Instagram comments order starts after you submit it from the dashboard. Delivery speed may depend on the package size, content type, and current order volume, but TrendEvo keeps the process smooth and easy to manage.',
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Comment Packages',
        description:
          'You can buy Instagram comments in Bangladesh without using a large marketing budget. Our packages work well for creators, online shops, fashion pages, cafés, startups, agencies, freelancers, and lnk<SMM resellers|https://trendevo.com/api>.',
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: 'Helpful Support Team',
        description:
          'Need help choosing the right Instagram Comment Package? TrendEvo support can guide you with service selection, order status, payment issues, and dashboard use.',
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
        title: 'Interaction-Focused Growth',
        description:
          'TrendEvo focuses on Instagram comments that support visible engagement, content trust, and audience response. You can start with a small order, test the service, and increase your comment activity based on your campaign plan.',
        iconFrameSrc:
          '/images/subservice/shared/real-followers-from-quality-sources-decoration.png',
      },
    ],
  },

  whoShouldBuy: {
    badge: 'Buy Instagram Comments',
    title: 'Who Should Buy gt<Instagram Comments> in Bangladesh?',
    subtitle:
      'Instagram comments help posts and Reels look more active when people find them through Explore, hashtags, profile visits, stories, shares, or ads. TrendEvo’s lnk<Instagram SMM Panel|/instagram-smm-panel> is useful for Bangladeshi users who want stronger content discussions, better brand credibility, and more visible audience interaction.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    items: [
      {
        title: 'Content Creators and Influencers',
        description:
          'Creators need comments to make their posts feel more engaging and worth watching. Food reviewers, fashion influencers, travel vloggers, beauty creators, educators, fitness coaches, musicians, and lifestyle creators can use Instagram comments to make their content look more discussion-friendly.',
      },
      {
        title: 'E-commerce Stores and Fashion Brands',
        description:
          'Online shoppers often read comments before trusting a product post. Clothing stores, skincare pages, gadget sellers, jewelry brands, handmade product shops, and home decor businesses can buy Instagram comments to make product content look more active and customer-focused.',
      },
      {
        title: 'Restaurants, Cafés, and Local Businesses',
        description:
          'Restaurants, cafés, cloud kitchens, salons, gyms, training centers, and service providers can use Instagram comments to improve menu posts, offer announcements, customer photos, event posts, and local campaign content.',
      },
      {
        title: 'Agencies, Freelancers, and Resellers',
        description:
          'Digital agencies and freelancers often need quick Instagram engagement support for client campaigns. TrendEvo helps them place Instagram comment orders from one dashboard with clear pricing, local payment options, and reseller-friendly access.',
      },
      {
        title: 'Startups, Personal Brands, and Institutions',
        description:
          'Startups, public figures, personal brands, NGOs, and educational institutions need content that looks active and trusted. Instagram comments can support launch posts, course updates, awareness campaigns, personal branding, and community-based promotions.',
      },
    ],
  },

  workingProcess: {
    badge: 'WORKING PROCESS',
    underlineSrc: '/images/working-process/how-to-buy-facebook-followers-on-trendevo-step-by-step-section-underline.svg',
    underlineWidth: 216,
    title: 'How to Buy Instagram Comments on TrendEvo — gt<Step by Step>',
    subtitle:
      'Buying Instagram comments in Bangladesh should be simple and fast. TrendEvo keeps the process easy, so creators, business owners, agencies, influencers, freelancers, and resellers can place orders without technical knowledge.',
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
          'Add money to your account using supported payment methods in Bangladesh. You can fund your balance through bKash, Nagad, Rocket, or other available options before placing your Instagram comments order.',
      },
      {
        number: '03',
        title: 'Choose Instagram Comments Service',
        description:
          'Go to the Instagram services section and select the comment package that matches your content goal. You can choose a starter package, a campaign package, or a bulk order for client projects.',
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
    title: 'Things to Know Before You Buy gt<Instagram Comments>',
    paragraphs: [
      'Buying Instagram comments can help your content look more active, but the best result comes when your post has a clear message. Before placing an order on TrendEvo, make sure your Instagram account is public, your content link is correct, and your selected package fits your post type.',
      'You do not need to share your Instagram password to buy Instagram comments in Bangladesh. TrendEvo only needs your public Instagram post, Reel, or carousel link to process the order. This keeps the process safer and easier for creators, businesses, agencies, influencers, and resellers.',
      'For a natural content appearance, avoid very large comment orders on posts with weak visuals, unclear captions, or no activity. Start with a suitable amount, improve your caption, and grow interaction step by step. This helps your content look more believable to Bangladeshi viewers.',
      'Instagram comments can support social proof, but they work best when your content gives people something to react to. Use product details, questions, Reels hooks, offer information, story context, and local language cues so visitors feel more comfortable joining the conversation.',
    ],
    ctaLabel: 'Create Your Account Now',
  },

  faq: {
    label: 'Frequently Asked Questions',
    title: 'Frequently Asked Questions — gt<Buy Instagram Comments> in Bangladesh',
    subtitle:
      'Find clear answers about buying Instagram comments in Bangladesh, payment options, delivery, safety, order tracking, and how TrendEvo helps support Instagram audience interaction.',
    bg: 'section-7',
    items: [
      {
        question: 'Is it safe to buy Instagram comments from TrendEvo?',
        answer:
          'Yes, TrendEvo uses a simple order process where you only need to submit your public Instagram content link. We never ask for your Instagram password, so your login details stay private.',
      },
      {
        question: 'Can I buy Instagram comments in Bangladesh with bKash?',
        answer:
          'Yes, you can add funds using bKash and then place your Instagram comments order from the TrendEvo dashboard. We also support other local payment options for Bangladeshi users.',
      },
      {
        question: 'Do you accept Nagad or Rocket payments?',
        answer:
          'Yes, TrendEvo supports local payment methods such as Nagad, Rocket, and other available options. This makes it easier for creators, businesses, influencers, agencies, and resellers in Bangladesh.',
      },
      {
        question: 'Do I need to share my Instagram password?',
        answer:
          'No, you do not need to share your password. To buy Instagram comments, you only need to provide the correct Instagram post, Reel, or carousel link and choose your preferred quantity.',
      },
      {
        question: 'How fast will my Instagram comments order start?',
        answer:
          'Most orders start after submission and payment confirmation. Delivery time can vary based on service type, quantity, content status, and current order volume.',
      },
      {
        question: 'Can I track my Instagram comments order?',
        answer:
          'Yes, you can track your order status from the TrendEvo dashboard. The order panel helps you check whether your Instagram comments order is pending, processing, completed, or partially completed.',
      },
      {
        question: 'Can I buy comments for Instagram Reels?',
        answer:
          'Yes, you can buy Instagram comments for Reels when the service supports your content type. Reels comments can make your video look more active and discussion-worthy to new viewers.',
      },
      {
        question: 'Do Instagram comments help with content performance?',
        answer:
          'Instagram comments can support visible engagement, discussion, and social proof. Content performance also depends on watch time, saves, shares, likes, captions, hashtags, and how relevant your content is to your audience.',
      },
      {
        question: 'Will buying Instagram comments help my brand look more trusted?',
        answer:
          'Yes, comments can make posts look more active and audience-focused. For stronger trust, combine comments with useful content, clear offers, good visuals, customer replies, and consistent posting.',
      },
      {
        question: 'Who can use TrendEvo’s Instagram comments service?',
        answer:
          'TrendEvo is useful for Bangladeshi creators, influencers, eCommerce stores, fashion brands, restaurants, cafés, freelancers, startups, public figures, educational institutions, digital agencies, and SMM resellers who want stronger Instagram interaction.',
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
      'Instagram comments help your content create visible conversations, but stronger growth comes when your profile also builds trust and post activity. TrendEvo offers related Instagram SMM services in Bangladesh to support engagement, visibility, and brand awareness.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy Instagram Likes',
        description:
          'Increase the trust signal of your Instagram posts with more likes. Instagram likes help Reels, product photos, carousels, offers, and brand updates look more popular to new visitors.',
        icon: '/images/subservice/shared/buy-facebook-page-likes-icon.webp',
        iconWidth: 39,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'h-[128.12%] w-[120.8%] object-cover -translate-x-[10.27%] -translate-y-[9.29%]',
      },
      {
        title: 'Buy Instagram Followers',
        description:
          'Grow your profile authority with more Instagram followers. This service helps creators, brands, and businesses build a stronger first impression when people visit after seeing your content.',
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
      'Join TrendEvo and manage your Instagram, Facebook, YouTube, TikTok, Telegram, and website traffic orders from one simple dashboard. Add funds with bKash, Nagad, or Rocket, choose your service, and start growing with secure order tracking.',
    primaryButtonLabel: 'Get Started Free',
    secondaryButtonLabel: 'See All Instagram Services',
    secondaryButtonHref: '/instagram-smm-panel',
  },
};
