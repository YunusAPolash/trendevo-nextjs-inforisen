import type { FaqSectionData } from '@/components/sections/faq-section';
import type { ServiceWorkingProcessStep } from '@/components/sections/service-working-process-section';
import type { ServiceAdvantageItem } from '@/components/serviceSmmPanel/service-advantage-content';
import type { ServiceLeadingFeature } from '@/components/serviceSmmPanel/service-leading-content';
import type { SocialServiceItem } from '@/components/serviceSmmPanel/social-service-content';

type SEO = {
  title: string;
  description: string;
  canonical?: string;
};

type SectionHeadingData = {
  badge?: string;
  title: string;
  subtitle: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

type FacebookSmmPanelPageData = {
  seo: SEO;
  schema: {
    name: string;
    description: string;
    areaServed: string;
    url: string;
  };
  hero: {
    title: string;
    description: string;
    descriptionSecondary: string;
    buttonLabel: string;
    image: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  };
  socialServices: SectionHeadingData & {
    services: SocialServiceItem[];
    decorativeLeft: {
      src: string;
      width: number;
      height: number;
      className: string;
    };
    decorativeRight: {
      src: string;
      width: number;
      height: number;
      className: string;
    };
    ctaLabel: string;
    ctaHref: string;
  };
  advantages: SectionHeadingData & {
    leftAdvantages: ServiceAdvantageItem[];
    rightAdvantages: ServiceAdvantageItem[];
  };
  workingProcess: SectionHeadingData & {
    steps: ServiceWorkingProcessStep[];
    ctaLabel: string;
  };
  leading: SectionHeadingData & {
    topRowFeatures: ServiceLeadingFeature[];
    bottomRowFeatures: ServiceLeadingFeature[];
  };
  faq: FaqSectionData;
  cta: {
    title: string;
    description: string;
    primaryButtonLabel: string;
    secondaryButtonLabel: string;
    secondaryButtonHref: string;
    imageSrc: string;
    imageAlt: string;
    className?: string;
  };
};

const facebookFaqItems = [
  {
    question: 'What is a Facebook SMM Panel?',
    answer:
      'A Facebook SMM Panel is an online platform where you can order Facebook growth services such as page followers, page likes, post likes, comments, shares, video views, story views, and group members. It helps businesses, creators, and agencies manage Facebook growth from one dashboard.',
  },
  {
    question: 'How does a Facebook SMM Panel work?',
    answer:
      'You choose a Facebook service, paste the required page, profile, post, reel, story, video, or group link, select the quantity, complete payment, and place the order. After that, you can track the progress from your TrendEvo account.',
  },
  {
    question: 'Which Facebook services can I buy from TrendEvo?',
    answer:
      'TrendEvo offers a wide range of Facebook services, including page followers, page likes, profile followers, post likes, reactions, comments, shares, video views, reels views, story views, group members, and other Facebook engagement services.',
  },
  {
    question: 'Is it safe to use a Facebook SMM Panel?',
    answer:
      'A trusted platform with clear service details, secure payment methods, and proper order handling is always a better choice. TrendEvo focuses on safe ordering, simple account use, and a smooth experience for Bangladeshi users.',
  },
  {
    question: 'Do I need to give my Facebook password?',
    answer:
      'No. You do not need to share your Facebook password. TrendEvo only needs the public link of the page, profile, post, reel, video, story, or group that you want to promote.',
  },
  {
    question: 'Can I buy Facebook followers, page likes, and post engagement separately?',
    answer:
      'Yes. You can order each service separately based on your goal. For example, you may only need Facebook page followers, only page likes, only post likes, only comments, or only video views for a specific campaign.',
  },
  {
    question: 'How long does a Facebook SMM order take to start?',
    answer:
      'The start time depends on the selected service. Some orders may begin quickly, while others can take longer depending on service type, quantity, and current order volume. You can check service details before placing the order.',
  },
  {
    question: 'Can I track the progress of my Facebook order?',
    answer:
      'Yes. After placing your order, you can monitor the progress directly from your TrendEvo dashboard. This makes it easy to manage multiple Facebook campaigns from one place.',
  },
  {
    question: 'What payment methods do you accept in Bangladesh?',
    answer:
      'TrendEvo supports popular local payment methods in Bangladesh such as bKash, Nagad, and Rocket. This makes ordering Facebook SMM services easier for local businesses, creators, freelancers, and resellers.',
  },
  {
    question: 'Can agencies and resellers use your Facebook SMM Panel?',
    answer:
      'Yes. TrendEvo is suitable for agencies, freelancers, and resellers who manage Facebook growth services for multiple clients. Our dashboard makes it easier to place, manage, and monitor several Facebook orders efficiently.',
  },
];

export const data: FacebookSmmPanelPageData = {
  seo: {
    title: 'Best Facebook SMM Panel in Bangladesh | TrendEvo',
    description:
      'Grow with TrendEvo’s Facebook SMM Panel in Bangladesh. Buy likes, followers, comments, shares, and views with bKash, Nagad, and Rocket.',
    canonical: '/facebook-smm-panel',
  },

  schema: {
    name: 'Facebook SMM Panel',
    description:
      'Grow with TrendEvo’s Facebook SMM Panel in Bangladesh. Buy likes, followers, comments, shares, and views with bKash, Nagad, and Rocket.',
    areaServed: 'Bangladesh',
    url: 'https://trendevo.com/facebook-smm-panel',
  },

  hero: {
    title: 'Grow Faster with a Trusted gt<Facebook SMM Panel> in Bangladesh',
    description:
      'lnk</about-us|TrendEvo> helps Bangladeshi businesses, creators, agencies, and resellers build a stronger Facebook presence with reliable followers, page likes, post engagement, comments, shares, and video views. Our Facebook SMM Panel makes every order simple, secure, and easy to track from one clean dashboard.',
    descriptionSecondary:
      'Get faster Facebook growth with affordable pricing, bKash, Nagad, Rocket payment support, and services made for real marketing goals in Bangladesh.',
    buttonLabel: 'Get Started Now',
    image: {
      src: '/images/service-smm-panel/facebook-smm-panel/boost-facebook-reach-and-engagement-with-trendevo.png',
      alt: 'Grow faster with TrendEvo Facebook SMM Panel in Bangladesh',
      width: 687,
      height: 648,
    },
  },

  socialServices: {
    title: 'Facebook SMM Panel Services gt<Built for Bangladesh>',
    subtitle:
      'TrendEvo brings all major Facebook growth services into one simple dashboard for Bangladeshi businesses, creators, agencies, and resellers. Whether you want more page trust, post engagement, video reach, group activity, or campaign support, our facebook lnk</|SMM panel BD> services help you manage growth faster and more affordably.',
    titleClassName:
      'text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] max-w-[1200px] lg:text-[48px]',
    subtitleClassName: 'max-w-[996px] text-base sm:text-lg',
    decorativeLeft: {
      src: '/images/service-smm-panel/facebook-smm-panel-decorative-facebook-left-icon.webp',
      width: 183,
      height: 190,
      className:
        'pointer-events-none absolute -left-12 bottom-16 hidden h-auto w-[140px] blur-[2px] lg:block xl:w-[183px]',
    },
    decorativeRight: {
      src: '/images/service-smm-panel/facebook-smm-panel-decorative-facebook-right-icon.webp',
      width: 199,
      height: 207,
      className:
        'pointer-events-none absolute -right-8 top-20 hidden h-auto w-[150px] -rotate-3 blur-[2px] lg:block xl:w-[199px]',
    },
    services: [
      {
        title: 'Facebook Page Followers',
        description:
          'Build a stronger audience base for your Facebook business page. lnk</buy-facebook-followers|Facebook page followers> are useful for ecommerce shops, local brands, service providers, and startups that want their page to look active and trustworthy.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-follower-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Facebook Page Likes',
        description:
          'Improve your page’s first impression with more lnk</buy-facebook-page-likes|Facebook page likes>. This helps Bangladeshi businesses build trust when customers visit their page, check reviews, or contact through Messenger.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Facebook Profile Followers',
        description:
          'Grow a personal Facebook profile for creators, freelancers, influencers, public figures, and entrepreneurs. It helps profile-based brands increase visibility and look more professional.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-profile-followers-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
      },
      {
        title: 'Facebook Post Likes',
        description:
          'Make your Facebook posts look more engaging from the beginning. This is useful for product updates, offers, announcements, event posts, and business campaigns.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-like-icon.png',
        iconWidth: 60,
        iconHeight: 54,
      },
      {
        title: 'Facebook Post Reactions',
        description:
          'Add more natural engagement signals to your posts with reactions like Like, Love, Care, Haha, Wow, Sad, or Angry. This makes your content feel more active and audience-driven.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-react-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Facebook Comments',
        description:
          'Create stronger conversations around your content with lnk</buy-facebook-comments|Facebook comments>. This works well for promotional posts, product launches, polls, reviews, and community campaigns.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-react-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Facebook Shares',
        description:
          'Expand your post visibility beyond your own page or profile. Facebook shares are useful for offers, awareness campaigns, viral posts, and local promotions across Bangladesh.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-group-member-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Facebook Video Views',
        description:
          'Increase views on Facebook videos, product demos, tutorials, reels-style content, and promotional clips. More views help your video content look active and worth watching.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 40,
        iconHeight: 40,
      },
      {
        title: 'Facebook Group Members',
        description:
          'Grow Facebook groups for ecommerce selling, coaching, local communities, courses, and reseller networks. More members help create a stronger community around your topic or business.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-group-member-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
    ctaLabel: 'See All Services',
    ctaHref: '/services',
  },

  advantages: {
    title: 'Why Bangladeshi Brands Use a gt<Facebook SMM Panel> for Faster Growth',
    subtitle:
      'A reliable Facebook SMM Panel helps businesses, creators, and agencies grow their Facebook presence with less manual effort. TrendEvo makes it easier to improve page trust, post activity, video reach, and campaign engagement from one simple dashboard.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    leftAdvantages: [
      {
        step: '01',
        title: 'Faster Facebook Page Growth',
        description:
          'Build your Facebook page presence faster with followers, page likes, and engagement support. This helps new visitors see your page as active, trusted, and ready for business.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-follower-and-page-growth-icon.png',
      },
      {
        step: '02',
        title: 'Better Social Proof for Customers',
        description:
          'People often check page activity before they message, order, or follow. More likes, comments, views, and reactions can make your Facebook page look more reliable to Bangladeshi customers.',
        icon: '/images/service-smm-panel/facebook-smm-panel-social-proof-and-credibility-icon.png',
      },
      {
        step: '03',
        title: 'More Support for Content Reach',
        description:
          'Good content needs early engagement to get noticed. TrendEvo helps posts, videos, reels, and stories gain activity so your content can attract more attention during campaigns.',
        icon: '/images/service-smm-panel/facebook-smm-panel-targeted-audience-expansion-icon.png',
      },
    ],
    rightAdvantages: [
      {
        step: '04',
        title: 'Saves Time for Businesses & Agencies',
        description:
          'Managing Facebook growth manually takes time. With TrendEvo, brands, freelancers, and agencies can place orders, track progress, and manage multiple Facebook services from one dashboard.',
        icon: '/images/service-smm-panel/facebook-smm-panel-time-saving-growth-icon.png',
      },
      {
        step: '05',
        title: 'Affordable Growth with Local Payment',
        description:
          'TrendEvo makes Facebook marketing easier for Bangladeshi users with budget-friendly pricing and local payment support like bKash, Nagad, and Rocket. No complex payment process is needed.',
        icon: '/images/service-smm-panel/facebook-smm-panel-affordable-pricing-icon.png',
      },
      {
        step: '06',
        title: 'Useful for Pages, Groups & Resellers',
        description:
          'Our Facebook SMM Panel Bangladesh services are suitable for business pages, creator profiles, ecommerce groups, community pages, and reseller clients. You can manage different growth needs in one place.',
        icon: '/images/service-smm-panel/facebook-smm-panel-community-growth-in-private-groups-icon.png',
      },
    ],
  },

  workingProcess: {
    title: 'How TrendEvo gt<Facebook SMM Panel> Works',
    subtitle:
      'TrendEvo makes Facebook growth simple for Bangladeshi users. You can choose a service, place your order, pay with local methods, and track everything from one easy dashboard.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    steps: [
      {
        number: '01',
        title: 'Create Your TrendEvo Account',
        description:
          'Sign up on TrendEvo and access your Facebook SMM Panel dashboard. The process is simple, quick, and made for businesses, creators, agencies, and resellers in Bangladesh.',
      },
      {
        number: '02',
        title: 'Choose the Right Facebook Service',
        description:
          'Select the service you need for your goal. You can order Facebook page followers, page likes, post likes, comments, shares, video views, reels views, story views, or group members.',
      },
      {
        number: '03',
        title: 'Add Your Link & Confirm Order',
        description:
          'Paste your Facebook page, profile, post, video, reel, story, or group link. Then choose the quantity, review the details, and confirm your order before payment.',
      },
      {
        number: '04',
        title: 'Pay Securely & Track Growth',
        description:
          'Complete payment with bKash, Nagad, Rocket, or other supported methods. After that, you can monitor order progress directly from your TrendEvo dashboard.',
      },
    ],
    ctaLabel: 'Get Started Free',
  },

  leading: {
    title: 'Why Choose TrendEvo for gt<Facebook SMM Panel Services> in Bangladesh',
    subtitle:
      'TrendEvo helps Bangladeshi businesses, creators, agencies, and resellers manage Facebook growth with speed, safety, and better control. Our platform combines local payment support, affordable pricing, smooth order tracking, and reliable lnk</services|Facebook SMM services> in one simple dashboard.',
    titleClassName:
      'whitespace-normal max-w-[1200px] text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Fast Order Processing',
        description:
          'Facebook campaigns often need quick engagement. TrendEvo processes orders smoothly so you can support page growth, post activity, video reach, and promotional campaigns without long delays.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-and-reliable-delivery-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Secure Local Payments',
        description:
          'Pay easily with bKash, Nagad, Rocket, and other supported payment methods. TrendEvo is made for Bangladeshi users, so you do not need to depend on complicated international payment systems.',
        icon: '/images/service-smm-panel/facebook-smm-panel-affordable-pricing-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
    bottomRowFeatures: [
      {
        title: 'Affordable Facebook Growth',
        description:
          'Get budget-friendly Facebook SMM Panel services without losing control over quality. Our pricing works for small businesses, creators, ecommerce pages, agencies, and resellers who need scalable growth.',
        icon: '/images/service-smm-panel/facebook-smm-panel-affordable-pricing-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Easy Dashboard Control',
        description:
          'Manage Facebook followers, likes, comments, views, shares, reactions, and group member orders from one clean dashboard. You can place orders, check status, and manage multiple campaigns with less effort.',
        icon: '/images/service-smm-panel/facebook-smm-panel-time-saving-growth-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Support for Businesses & Resellers',
        description:
          'TrendEvo is useful for both direct users and resellers. Whether you are growing your own Facebook page or managing client orders, our platform helps you handle Facebook SMM services more professionally.',
        icon: '/images/service-smm-panel/facebook-smm-panel-customer-focused-service-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
  },

  faq: {
    label: 'FAQ',
    title: 'Frequently Asked gt<Questions About Facebook SMM Panel>',
    subtitle:
      'Find clear and simple answers to the most common questions about our Facebook SMM Panel, services, payments, orders, and account safety.',
    bg: 'section-7',
    items: facebookFaqItems,
    ctaTitle: 'Still have questions?',
    ctaSubtitle:
      "Can't find the answer you're looking for? Please get in touch with our team.",
    ctaButtonLabel: 'Get in Touch',
    ctaButtonHref: '/contact-us',
  },

  cta: {
    title: 'Ready to gt<Grow Your Social Media> in Bangladesh?',
    description:
      'Join over 56486 users who are already using TrendEvo to grow faster on Facebook, Instagram, YouTube, TikTok, and more. Getting started is free and takes less than 40 seconds.',
    primaryButtonLabel: 'Create Free Account',
    secondaryButtonLabel: 'See All Services',
    secondaryButtonHref: '/services',
    imageSrc: '/images/cta/cta-character-illustration.webp',
    imageAlt: 'Start growing your social media with TrendEvo',
    className: 'mt-16',
  },
};
