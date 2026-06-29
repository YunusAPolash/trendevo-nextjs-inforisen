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

type FacebookCommentsPageData = {
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

export const data: FacebookCommentsPageData = {
  seo: {
    title: 'Buy Facebook Comments in Bangladesh | TrendEvo',
    description:
      'Buy Facebook Comments in Bangladesh with TrendEvo. Improve post engagement, social proof, and campaign interaction using bKash, Nagad, Rocket, and secure order tracking.',
    canonical: '/buy-facebook-comments',
  },

  hero: {
    bg: 'section-1',
    variant: 'wide',
    trustLabel: '⭐ 4.8 Rating | Trusted by Bangladeshi Brands, Creators & Agencies',
    title: 'Buy gt<Facebook Comments> in Bangladesh for Stronger Post Engagement',
    description:
      'Facebook posts with active comments often get more attention than silent posts. When people see useful discussion under a product, offer, event, or campaign post, they feel more interested to read, react, and join the conversation. lnk<TrendEvo|/about-us> helps businesses, creators, agencies, eCommerce stores, restaurants, startups, and local brands buy Facebook comments in Bangladesh with simple ordering, local payment support, and smooth delivery.',
    descriptionSecondary:
      'Our Facebook Comments Service Bangladesh is made for posts that need better interaction, stronger social proof, and a more active brand image. You can choose a suitable Facebook comment package, pay with bKash, Nagad, Rocket, or other supported methods, and improve your post activity without sharing your Facebook password.',
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
      src: '/images/subservice/buy-facebook-comments/buy-facebook-comments-in-bangladesh-for-stronger-post-engagement.webp',
      alt: 'Buy Facebook Comments in Bangladesh with TrendEvo',
      width: 558,
      height: 621,
      maxWidthClassName: 'max-w-[558px]',
      unoptimized: true,
    },
  },

  orderForm: {
    badge: 'Facebook Services',
    serviceLabel: 'Comments',
    serviceTypeLabel: 'Comments',
    urlFieldLabel: 'Facebook Post URL',
    urlPlaceholder: 'https://facebook.com/yourpage/posts/123456789',
    submitLabel: 'Pay Now With bKash/ Nagad',
  },

  whyChoose: {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: 'Why Choose TrendEvo to Buy gt<Facebook Comments> in Bangladesh',
    subtitle:
      'TrendEvo is built for Bangladeshi users who want a simple and reliable way to increase Facebook post interaction. From local payment options to easy order tracking, our lnk<BD SMM Panel|/> helps brands, agencies, page admins, and resellers manage Facebook engagement with more confidence.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Fast Comment Delivery',
        description:
          'Your Facebook comments order starts after submission from the dashboard. Delivery speed may depend on the selected package and post type, but TrendEvo is designed for quick and smooth order processing.',
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Comment Packages',
        description:
          'You can buy Facebook comments without a large advertising budget. Our pricing works well for small businesses, online shops, creators, restaurants, agencies, startups, and SMM resellers looking for cheap Facebook comments.',
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: 'Helpful Support Team',
        description:
          'Need help choosing the right Facebook Comment Package? TrendEvo support can guide you with service selection, order status, payment issues, and dashboard use.',
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
          'Pay easily through bKash, Nagad, Rocket, and other supported methods. TrendEvo makes Facebook Marketing Bangladesh easier for users who prefer familiar local payment systems.',
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Engagement-Focused Service',
        description:
          'TrendEvo focuses on Facebook comments that help your posts look active and discussion-friendly. You can start with a small package, test the service, and increase your order size based on your campaign needs.',
        iconFrameSrc:
          '/images/subservice/shared/real-followers-from-quality-sources-decoration.png',
      },
    ],
  },

  whoShouldBuy: {
    badge: 'Buy Facebook Comments',
    title: 'Who Should Buy gt<Facebook Comments> in Bangladesh?',
    subtitle:
      'Facebook comments help a post look alive. TrendEvo’s lnk<Facebook SMM Panel|/facebook-smm-panel> is useful for Bangladeshi users who want more visible interaction, stronger campaign response, and better social proof under important posts.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    items: [
      {
        title: 'E-commerce Stores',
        description:
          'Online shops in Bangladesh need comments on product posts, flash sale updates, new arrivals, and offer campaigns. More comments can make a product post look active and encourage visitors to check prices, ask questions, or message the page.',
      },
      {
        title: 'Restaurants and Food Brands',
        description:
          'Restaurants, cloud kitchens, bakeries, and home food sellers can use Facebook comments to create buzz around menus, discount offers, food photos, and delivery announcements. Active comments make food posts feel more popular and trusted.',
      },
      {
        title: 'Local Businesses and SMEs',
        description:
          'Training centers, salons, gyms, electronics shops, travel agencies, and service providers can buy Facebook comments in Bangladesh to make promotional posts look more engaging. This helps customers feel that other people are noticing the business.',
      },
      {
        title: 'Creators and Public Figures',
        description:
          'Creators, influencers, musicians, coaches, speakers, and public figures often need comments on reels, videos, announcements, and opinion posts. Facebook comments can support better audience interaction and make content look more discussion-worthy.',
      },
      {
        title: 'Agencies, Startups, and Campaign Managers',
        description:
          'Digital agencies, startups, NGOs, and campaign teams can use TrendEvo to support product launches, event promotions, awareness posts, and client campaigns. A well-commented post can look stronger before boosting, sharing, or presenting results to clients.',
      },
    ],
  },

  workingProcess: {
    badge: 'WORKING PROCESS',
    underlineSrc: '/images/working-process/how-to-buy-facebook-followers-on-trendevo-step-by-step-section-underline.svg',
    underlineWidth: 216,
    title: 'How to Buy Facebook Comments on TrendEvo — gt<Step by Step>',
    subtitle:
      'Buying Facebook comments in Bangladesh should be simple. TrendEvo keeps the full process easy, so business owners, creators, agencies, freelancers, and resellers can place comment orders without technical knowledge.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    steps: [
      {
        number: '01',
        title: 'Create Your TrendEvo Account',
        description:
          'Sign up with basic details and enter the TrendEvo dashboard. From there, you can browse Facebook SMM Panel services, check prices, and manage your orders from one place.',
      },
      {
        number: '02',
        title: 'Add Funds to Your Balance',
        description:
          'Add money to your account using supported payment methods in Bangladesh. You can fund your balance through bKash, Nagad, Rocket, or other available options before placing your Facebook comments order.',
      },
      {
        number: '03',
        title: 'Choose Facebook Comments Service',
        description:
          'Go to the Facebook services section and select the comment package that matches your post goal. You can choose a starter package, a campaign-focused package, or a reseller-friendly quantity.',
      },
      {
        number: '04',
        title: 'Enter Your Facebook Post URL',
        description:
          'Paste the correct Facebook post link, select the quantity, and submit the order. You do not need to share your Facebook password. TrendEvo processes the order using the public post URL only.',
      },
    ],
  },

  thingsToKnow: {
    badge: 'Things to Know',
    title: 'Things to Know Before You Buy gt<Facebook Comments>',
    paragraphs: [
      'Buying Facebook comments can help your post look more active, but the best results come when your post already has a clear purpose. Before placing an order on TrendEvo, make sure your Facebook post is public, the post link is correct, and your selected package fits your content type.',
      'You do not need to share your Facebook password to buy Facebook comments in Bangladesh. TrendEvo only needs your public post URL to process the order. This keeps your account safer and makes the process simple for businesses, creators, agencies, and resellers.',
      'For a natural post appearance, avoid sudden oversized orders on a post with no reactions or weak content. Start with a suitable amount, publish useful captions, and add comments step by step. This helps the post look more believable to Bangladeshi visitors.',
      'Facebook comments can support social proof and audience interaction, but they work best with strong content. Use clear product details, offer information, event dates, questions, customer benefits, and local context so people have a reason to read and respond.',
    ],
    ctaLabel: 'Create Your Account Now',
  },

  faq: {
    label: 'Frequently Asked Questions',
    title: 'Frequently Asked Questions — gt<Buy Facebook Comments> in Bangladesh',
    subtitle:
      'Find clear answers about buying Facebook comments in Bangladesh, payment options, delivery, safety, order tracking, and how TrendEvo helps improve Facebook post engagement.',
    bg: 'section-7',
    items: [
      {
        question: 'Is it safe to buy Facebook comments from TrendEvo?',
        answer:
          'Yes, TrendEvo uses a simple order process where you only need to submit your public Facebook post link. We never ask for your Facebook password, so your login details stay private.',
      },
      {
        question: 'Can I buy Facebook comments in Bangladesh with bKash?',
        answer:
          'Yes, you can add funds using bKash and then place your Facebook comments order from the TrendEvo dashboard. We also support other local payment options for Bangladeshi users.',
      },
      {
        question: 'Do you accept Nagad or Rocket payments?',
        answer:
          'Yes, TrendEvo supports local payment methods such as Nagad, Rocket, and other available options. This makes it easier for businesses, creators, agencies, and resellers in Bangladesh.',
      },
      {
        question: 'Do I need to share my Facebook password?',
        answer:
          'No, you do not need to share your password. To buy Facebook comments, you only need to provide the correct Facebook post URL and choose your preferred quantity.',
      },
      {
        question: 'How fast will my Facebook comments order start?',
        answer:
          'Most orders start after submission and payment confirmation. Delivery time can vary based on service type, quantity, post link status, and current order volume.',
      },
      {
        question: 'Can I track my Facebook comments order?',
        answer:
          'Yes, you can track your order status from the TrendEvo dashboard. The order panel helps you check whether your Facebook comments order is pending, processing, completed, or partially completed.',
      },
      {
        question: 'Can I buy comments for a new Facebook post?',
        answer:
          'Yes, new Facebook posts can receive comments. For a natural appearance, it is better to start with a smaller package and increase comment activity gradually as the post gains more reach.',
      },
      {
        question: 'Are Facebook comments useful for product launches?',
        answer:
          'Yes, Facebook comments can help product launch posts look more active and trusted. They can support discussion, attract attention, and make visitors more comfortable checking the product details.',
      },
      {
        question: 'Will buying Facebook comments improve my post engagement?',
        answer:
          'Facebook comments can improve visible engagement and social proof. However, stronger results come when comments are combined with useful content, clear offers, good visuals, and regular audience interaction.',
      },
      {
        question: 'Who can use TrendEvo’s Facebook comments service?',
        answer:
          'TrendEvo is useful for Bangladeshi eCommerce stores, restaurants, local businesses, creators, public figures, startups, NGOs, digital agencies, freelancers, and SMM resellers who want more active-looking Facebook posts.',
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
      'Facebook comments help posts look active, but stronger campaign results come when your page also has followers and stronger like signals. TrendEvo offers related Facebook SMM services in Bangladesh to support visibility, trust, and campaign performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy Facebook Followers',
        description:
          'Grow your Facebook page with more followers and build a stronger first impression for new visitors. This service is useful for local businesses, creators, online shops, agencies, and new brand pages that want better page trust before promotion.',
        icon: '/images/subservice/shared/buy-facebook-page-likes-icon.webp',
        iconWidth: 39,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'h-[128.12%] w-[120.8%] object-cover -translate-x-[10.27%] -translate-y-[9.29%]',
      },
      {
        title: 'Buy Facebook Page Likes',
        description:
          'Increase the trust signal of your Facebook page with more page likes. Facebook Page Likes help new visitors see your page as more established, active, and reliable before they browse your posts, products, or services.',
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
      'Join TrendEvo and manage your Facebook, Instagram, YouTube, TikTok, Telegram, and website traffic orders from one simple dashboard. Add funds with bKash, Nagad, or Rocket, choose your service, and start growing with secure order tracking.',
    primaryButtonLabel: 'Get Started Free',
    secondaryButtonLabel: 'View All Facebook Services',
    secondaryButtonHref: '/facebook-smm-panel',
  },
};
