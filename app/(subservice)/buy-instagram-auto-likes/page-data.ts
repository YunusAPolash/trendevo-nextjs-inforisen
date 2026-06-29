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

type InstagramAutoLikesPageData = {
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

export const data: InstagramAutoLikesPageData = {
  seo: {
    title: 'Buy Instagram Auto Likes in Bangladesh | TrendEvo',
    description:
      'Buy Instagram Auto Likes in Bangladesh with TrendEvo. Get automatic likes on new posts, Reels, and content using bKash, Nagad, Rocket, and secure order tracking.',
    canonical: '/buy-instagram-auto-likes',
  },

  hero: {
    bg: 'section-1',
    variant: 'wide',
    trustLabel: '⭐ 4.8 Rating | Trusted by Bangladeshi Creators, Brands & Agencies',
    title: 'Buy gt<Instagram Auto Likes> in Bangladesh for Consistent Post Engagement',
    description:
      'Instagram growth becomes easier when every new post gets early engagement. Auto Likes help your photos, Reels, and carousels receive likes automatically after publishing, so your content does not start from zero. TrendEvo helps creators, influencers, eCommerce brands, restaurants, agencies, startups, SMEs, and local businesses buy Instagram Auto Likes in Bangladesh through a simple lnk<Instagram SMM Panel|/instagram-smm-panel> with local payment support and secure order tracking.',
    descriptionSecondary:
      'Our Instagram Auto Likes Service is made for users who post regularly and want stable engagement without placing a new order every time. You can choose a suitable Auto Likes package, pay through bKash, Nagad, Rocket, or other supported methods, and support your Instagram marketing without sharing your password.',
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
      alt: 'Buy Instagram Auto Likes in Bangladesh with TrendEvo',
      width: 558,
      height: 621,
      maxWidthClassName: 'max-w-[558px]',
      unoptimized: true,
    },
  },

  orderForm: {
    badge: 'Instagram Services',
    serviceLabel: 'Auto Likes',
    serviceTypeLabel: 'Auto Likes',
    urlFieldLabel: 'Instagram Profile URL',
    urlPlaceholder: 'https://instagram.com/yourprofile',
    submitLabel: 'Pay Now With bKash/ Nagad',
  },

  whyChoose: {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: 'Why Choose TrendEvo to Buy gt<Instagram Auto Likes> in Bangladesh',
    subtitle:
      'lnk<TrendEvo|/about-us> is built for Bangladeshi users who want a smarter way to keep Instagram content active. From automatic delivery to easy dashboard tracking, our lnk<cheapest SMM Panel BD|/> solution helps creators, brands, influencers, agencies, and resellers manage consistent Instagram likes from one simple platform.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Automatic Like Delivery',
        description:
          'Your Instagram Auto Likes package works on new eligible posts after setup. Delivery may depend on service rules, package size, and content status, but TrendEvo keeps the process smooth for regular content activity.',
        icon: '/images/facebook-page-followers/facebook-page-followers-instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Auto Like Packages',
        description:
          'You can buy Instagram Auto Likes in Bangladesh without spending a large promotion budget. Our packages work well for creators, fashion pages, online stores, restaurants, startups, agencies, freelancers, and SMM resellers.',
        icon: '/images/facebook-page-followers/facebook-page-followers-affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: 'Helpful Support Team',
        description:
          'Need help choosing the right Instagram Auto Likes package? TrendEvo support can guide you with package setup, order status, payment issues, and dashboard use.',
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
        title: 'Consistency-Focused Growth',
        description:
          'TrendEvo focuses on Instagram Auto Likes that support regular post activity, content trust, and audience perception. You can choose a suitable package, keep posting, and maintain engagement across your latest content.',
        iconFrameSrc:
          '/images/facebook-page-followers/facebook-page-followers-real-followers-from-quality-sources-decoration.png',
      },
    ],
  },

  whoShouldBuy: {
    badge: 'Buy Instagram Auto Likes',
    title: 'Who Should Buy gt<Instagram Auto Likes> in Bangladesh?',
    subtitle:
      'Instagram Auto Likes are useful for users who publish content often and want each new post to receive early activity. TrendEvo’s Instagram automation service is helpful for Bangladeshi users who want consistent engagement, stronger content appearance, and less manual order management.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    items: [
      {
        title: 'Content Creators and Influencers',
        description:
          'Creators who post Reels, photos, tutorials, reviews, and lifestyle content need fast engagement after publishing. Food reviewers, fashion influencers, travel vloggers, educators, musicians, fitness creators, and entertainment pages can use Instagram Auto Likes to keep new content active from the start.',
      },
      {
        title: 'E-commerce Stores and Fashion Brands',
        description:
          'Online shops in Bangladesh often upload product photos, offer posts, new collections, and Reels every week. Clothing stores, beauty brands, gadget sellers, jewelry pages, and handmade product businesses can use Auto Likes to support each new product update.',
      },
      {
        title: 'Restaurants, Cafés, and Local Businesses',
        description:
          'Restaurants, cafés, cloud kitchens, salons, gyms, training centers, and local service providers can use Instagram Auto Likes for menu posts, customer photos, event reels, offer updates, and daily promotional content.',
      },
      {
        title: 'Agencies, Freelancers, and Resellers',
        description:
          'Digital agencies and freelancers often manage multiple Instagram accounts for clients. TrendEvo helps them set up Instagram Auto Likes from one dashboard with clear pricing, local payment options, and reseller-friendly access.',
      },
      {
        title: 'Startups, Personal Brands, and Institutions',
        description:
          'Startups, public figures, personal brands, NGOs, and educational institutions need regular content activity. Instagram Auto Likes can support course updates, launch posts, awareness content, personal branding, and community-focused communication.',
      },
    ],
  },

  workingProcess: {
    badge: 'WORKING PROCESS',
    underlineSrc: '/images/working-process/working-process-section-underline.svg',
    underlineWidth: 216,
    title: 'How to Buy Instagram Auto Likes on TrendEvo — gt<Step by Step>',
    subtitle:
      'Buying Instagram Auto Likes in Bangladesh should be easy to set up and simple to manage. TrendEvo keeps the process clear, so creators, business owners, agencies, influencers, freelancers, and resellers can automate post likes without technical knowledge.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    steps: [
      {
        number: '01',
        title: 'Create Your TrendEvo Account',
        description:
          'Sign up with basic details and enter the TrendEvo dashboard. From there, you can browse Instagram lnk<SMM Panel services|/services>, compare Auto Likes packages, and manage your orders from one place.',
      },
      {
        number: '02',
        title: 'Add Funds to Your Balance',
        description:
          'Add money to your account using supported payment methods in Bangladesh. You can fund your balance through bKash, Nagad, Rocket, or other available options before placing your Instagram Auto Likes order.',
      },
      {
        number: '03',
        title: 'Choose Instagram Auto Likes Service',
        description:
          'Go to the Instagram services section and select the Auto Likes package that matches your posting routine. You can choose a starter package, a creator package, or a larger option for brand and client accounts.',
      },
      {
        number: '04',
        title: 'Enter Your Instagram Profile Details',
        description:
          'Submit the required public Instagram profile link or username, select the package settings, and place the order. You do not need to share your Instagram password. TrendEvo processes the service using public profile information only.',
      },
    ],
  },

  thingsToKnow: {
    badge: 'Things to Know',
    title: 'Things to Know Before You Buy gt<Instagram Auto Likes>',
    paragraphs: [
      'Buying Instagram Auto Likes can help your new content receive steady activity, but the best result comes when your account posts consistently. Before placing an order on TrendEvo, make sure your Instagram account is public, your profile details are correct, and your selected package matches your posting frequency.',
      'You do not need to share your Instagram password to buy Instagram Auto Likes in Bangladesh. TrendEvo only needs the required public profile information to process the service. This keeps the process safer and easier for creators, businesses, influencers, agencies, and resellers.',
      'For a natural content appearance, avoid choosing a package that is too large for a new or inactive account. Start with a suitable Auto Likes plan, improve your captions and visuals, and post regularly. This helps your engagement pattern look more believable to Bangladeshi viewers.',
      'Instagram Auto Likes can support consistency, but they work best with valuable content. Use strong Reels hooks, clean product photos, useful captions, story updates, hashtags, local context, and regular posting so your audience has a reason to engage beyond the likes.',
    ],
    ctaLabel: 'Create Your Account Now',
  },

  faq: {
    label: 'Frequently Asked Questions',
    title: 'Frequently Asked Questions — gt<Buy Instagram Auto Likes> in Bangladesh',
    subtitle:
      'Find clear answers about buying Instagram Auto Likes in Bangladesh, payment options, automatic delivery, safety, setup, tracking, and how TrendEvo helps support consistent Instagram engagement.',
    bg: 'section-7',
    items: [
      {
        question: 'Is it safe to buy Instagram Auto Likes from TrendEvo?',
        answer:
          'Yes, TrendEvo uses a simple order process where you only provide the required public Instagram profile information. We never ask for your Instagram password, so your login details stay private.',
      },
      {
        question: 'Can I buy Instagram Auto Likes in Bangladesh with bKash?',
        answer:
          'Yes, you can add funds using bKash and then place your Instagram Auto Likes order from the TrendEvo dashboard. We also support other local payment options for Bangladeshi users.',
      },
      {
        question: 'Do you accept Nagad or Rocket payments?',
        answer:
          'Yes, TrendEvo supports local payment methods such as Nagad, Rocket, and other available options. This makes it easier for creators, businesses, influencers, agencies, and resellers in Bangladesh.',
      },
      {
        question: 'Do I need to share my Instagram password?',
        answer:
          'No, you do not need to share your password. To buy Instagram Auto Likes, you only need to provide the required public Instagram profile details and choose your preferred package.',
      },
      {
        question: 'How fast will Instagram Auto Likes start working?',
        answer:
          'Most Auto Likes services start after setup and payment confirmation. Delivery time may vary based on service type, package settings, account status, and current order volume.',
      },
      {
        question: 'Can I track my Instagram Auto Likes order?',
        answer:
          'Yes, you can track your order status from the TrendEvo dashboard. The order panel helps you check whether your Instagram Auto Likes order is pending, processing, active, completed, or partially completed.',
      },
      {
        question: 'Do Auto Likes work on Instagram Reels?',
        answer:
          'Yes, Auto Likes may support Reels when the selected service allows it. This can help new Reels receive early engagement and look more active soon after publishing.',
      },
      {
        question: 'Are Instagram Auto Likes better than manual likes?',
        answer:
          'Auto Likes are useful for users who post often and want automatic engagement on new content. Manual likes are better when you want to boost one specific post, Reel, or campaign content.',
      },
      {
        question: 'Will Instagram Auto Likes improve my engagement rate?',
        answer:
          'Instagram Auto Likes can support visible engagement and post activity. Engagement rate also depends on your content quality, audience interest, posting time, captions, shares, saves, comments, and Reels performance.',
      },
      {
        question: 'Who can use TrendEvo’s Instagram Auto Likes service?',
        answer:
          'TrendEvo is useful for Bangladeshi creators, influencers, eCommerce stores, fashion brands, restaurants, cafés, freelancers, startups, public figures, educational institutions, digital agencies, and SMM resellers who want consistent Instagram engagement.',
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
      'Instagram Auto Likes help new content receive steady activity, but stronger growth comes when your profile also builds reach and interaction. TrendEvo offers related Instagram SMM services in Bangladesh to support visibility, credibility, and content performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy Instagram Followers',
        description:
          'Grow your profile authority with more Instagram followers. This service helps creators, brands, and businesses build a stronger first impression when people visit your profile after seeing your content.',
        icon: '/images/facebook-page-followers/facebook-page-followers-buy-facebook-comments-icon.webp',
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
