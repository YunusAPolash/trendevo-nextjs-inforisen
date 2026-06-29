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

type TiktokSmmPanelPageData = {
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

const tiktokFaqItems = [
  {
    question: 'What is a TikTok SMM Panel?',
    answer:
      'A TikTok SMM Panel is an online platform where you can order TikTok growth services such as followers, video views, likes, comments, shares, live views, profile visits, and engagement. It helps creators, influencers, businesses, agencies, and resellers manage TikTok growth from one dashboard.',
  },
  {
    question: 'How does a TikTok SMM Panel work?',
    answer:
      'You choose a TikTok service, paste the required profile, video, live stream, or content link, select the quantity, complete payment, and place the order. After that, you can track the progress from your TrendEvo account.',
  },
  {
    question: 'Which TikTok services can I buy from TrendEvo?',
    answer:
      'TrendEvo offers a wide range of TikTok services, including followers, video views, likes, comments, shares, live views, profile visits, reach, and other TikTok engagement services.',
  },
  {
    question: 'Is it safe to use a TikTok SMM Panel?',
    answer:
      'A trusted platform with clear service details, secure payment methods, and proper order handling is always a better choice. TrendEvo focuses on safe ordering, simple account use, and a smooth experience for Bangladeshi users.',
  },
  {
    question: 'Do I need to give my TikTok password?',
    answer:
      'No. You do not need to share your TikTok password. TrendEvo only needs the public link of the profile, video, live stream, or content that you want to promote.',
  },
  {
    question: 'Can I buy TikTok followers, views, and likes separately?',
    answer:
      'Yes. You can order each service separately based on your goal. For example, you may only need TikTok followers, only video views, only likes, only comments, or only live views for a specific campaign.',
  },
  {
    question: 'How long does a TikTok SMM order take to start?',
    answer:
      'The start time depends on the selected service. Some orders may begin quickly, while others can take longer depending on service type, quantity, and current order volume. You can check service details before placing the order.',
  },
  {
    question: 'Can I track the progress of my TikTok order?',
    answer:
      'Yes. After placing your order, you can monitor the progress directly from your TrendEvo dashboard. This makes it easy to manage multiple TikTok campaigns from one place.',
  },
  {
    question: 'What payment methods do you accept in Bangladesh?',
    answer:
      'TrendEvo supports popular local payment methods in Bangladesh such as bKash, Nagad, and Rocket. This makes ordering TikTok SMM services easier for local creators, influencers, businesses, freelancers, agencies, and resellers.',
  },
  {
    question: 'Can agencies and resellers use your TikTok SMM Panel?',
    answer:
      'Yes. TrendEvo is suitable for agencies, freelancers, and resellers who manage TikTok growth services for multiple clients. Our dashboard makes it easier to place, manage, and monitor several TikTok orders efficiently.',
  },
];

export const data: TiktokSmmPanelPageData = {
  seo: {
    title: 'Best TikTok SMM Panel in Bangladesh | TrendEvo',
    description:
      'Grow with TrendEvo’s TikTok SMM Panel in Bangladesh. Buy followers, likes, views, comments, shares, and engagement with bKash, Nagad, and Rocket.',
    canonical: '/tiktok-smm-panel',
  },

  schema: {
    name: 'TikTok SMM Panel',
    description:
      'Grow with TrendEvo’s TikTok SMM Panel in Bangladesh. Buy followers, likes, views, comments, shares, and engagement with bKash, Nagad, and Rocket.',
    areaServed: 'Bangladesh',
    url: 'https://trendevo.com/tiktok-smm-panel',
  },

  hero: {
    title: 'Grow Faster with a Trusted gt<TikTok SMM Panel> in Bangladesh',
    description:
      'TrendEvo supports Bangladeshi creators, influencers, businesses, agencies, and resellers in building a stronger TikTok presence with dependable followers, video views, likes, comments, shares, profile activity, and engagement. Our TikTok SMM Panel keeps every order simple, secure, and easy to monitor from one clean dashboard.',
    descriptionSecondary:
      'Get faster TikTok growth with affordable pricing, lnk</services|bKash, Nagad, Rocket payment support>, and services made for short-video marketing, creator growth, and brand visibility in Bangladesh.',
    buttonLabel: 'Get Started Now',
    image: {
      src: '/images/service-smm-panel/tiktok-smm-panel/boost-tiktok-reach-and-engagement-with-trendevo.webp',
      alt: 'Grow faster with TrendEvo TikTok SMM Panel in Bangladesh',
      width: 687,
      height: 648,
    },
  },

  socialServices: {
    title: 'TikTok SMM Panel Services gt<Built for Bangladesh>',
    subtitle:
      'TrendEvo brings all major TikTok growth services into one simple dashboard for Bangladeshi creators, influencers, businesses, agencies, and resellers. Whether you want more profile trust, video views, audience engagement, viral content support, or campaign visibility, our TikTok lnk</|SMM Panel BD> services help you manage growth faster and more affordably.',
    titleClassName:
      'text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] max-w-[1200px] lg:text-[48px]',
    subtitleClassName: 'max-w-[996px] text-base sm:text-lg',
    decorativeLeft: {
      src: '/images/service-smm-panel/tiktok-smm-panel/tiktok-effect.svg',
      width: 189,
      height: 205,
      className:
        'pointer-events-none absolute -left-12 bottom-16 hidden h-auto w-[130px] lg:block xl:w-[189px]',
    },
    decorativeRight: {
      src: '/images/service-smm-panel/tiktok-smm-panel/tiktok-effect.svg',
      width: 189,
      height: 205,
      className:
        'pointer-events-none absolute -right-8 top-20 hidden h-auto w-[140px] -scale-x-100 lg:block xl:w-[189px]',
    },
    services: [
      {
        title: 'TikTok Followers',
        description:
          'Build a stronger audience base for your TikTok profile by using our lnk</buy-tiktok-followers|tiktok followers> service. This service is useful for creators, influencers, online shops, personal brands, musicians, and small businesses that want their profile to look active and trustworthy.',
        icon: '/images/our-services/platforms/our-services-tiktok-followers-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'TikTok Video Views',
        description:
          'Increase views on your TikTok videos, product clips, tutorials, reviews, trends, challenges, and promotional content. More lnk</buy-tiktok-views|tiktok views> help your videos look active and worth watching.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 40,
        iconHeight: 40,
      },
      {
        title: 'TikTok Likes',
        description:
          'Improve your video engagement with more TikTok likes. Likes help your content look more appealing when new viewers land on your videos or profile.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-like-icon.png',
        iconWidth: 60,
        iconHeight: 54,
      },
      {
        title: 'TikTok Comments',
        description:
          'Create stronger conversations around your TikTok videos with comments. This works well for product promotions, influencer campaigns, music clips, brand videos, reviews, and trend-based content.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-react-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'TikTok Shares',
        description:
          'Expand your video visibility beyond your own followers. TikTok shares are useful for viral campaigns, awareness content, product launches, entertainment videos, and local promotions across Bangladesh.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-group-member-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'TikTok Live Views',
        description:
          'Increase activity during TikTok live sessions, product showcases, Q&A events, gaming streams, creator sessions, and online selling events. More live viewers can make your stream feel more active.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-story-views-icon.png',
        iconWidth: 70,
        iconHeight: 54,
      },
      {
        title: 'TikTok Profile Visits',
        description:
          'Bring more attention to your TikTok profile. Profile visits help creators, influencers, and businesses increase discovery, improve first impressions, and support follower growth.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-profile-followers-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
      },
      {
        title: 'TikTok Reach & Engagement',
        description:
          'Support wider visibility with TikTok reach and engagement services. This is useful when you want more people to see your videos, interact with your content, and remember your brand.',
        icon: '/images/service-smm-panel/facebook-smm-panel-targeted-audience-expansion-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'TikTok Engagement Packages',
        description:
          'Grow multiple engagement signals together with followers, views, likes, comments, shares, live views, and profile activity. These packages help agencies, lnk</api|resellers>, creators, and businesses manage balanced TikTok growth more easily.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-follower-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
    ctaLabel: 'See All Services',
    ctaHref: '/services',
  },

  advantages: {
    title: 'Why Bangladeshi Brands Use a gt<TikTok SMM Panel> for Faster Growth',
    subtitle:
      'A reliable TikTok lnk</services|SMM Panel service> helps creators, influencers, businesses, and agencies grow their TikTok presence with less manual effort. TrendEvo makes it easier to improve profile trust, video activity, live visibility, content reach, and campaign engagement from one simple dashboard.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    leftAdvantages: [
      {
        step: '01',
        title: 'Faster TikTok Profile Growth',
        description:
          'Build your TikTok presence faster with followers, views, likes, comments, and profile activity support. This helps new visitors see your profile as active, trusted, and worth following.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-follower-and-page-growth-icon.png',
      },
      {
        step: '02',
        title: 'Better Social Proof for Viewers',
        description:
          'People often check followers, views, likes, and comments before they follow, message, or trust a creator or brand. Stronger engagement can make your TikTok profile look more reliable to Bangladeshi audiences.',
        icon: '/images/service-smm-panel/facebook-smm-panel-social-proof-and-credibility-icon.png',
      },
      {
        step: '03',
        title: 'More Support for Viral Content Reach',
        description:
          'TikTok content moves fast, and early activity can help videos gain more attention. TrendEvo helps videos, live sessions, and campaigns receive engagement support during important promotion periods.',
        icon: '/images/service-smm-panel/facebook-smm-panel-targeted-audience-expansion-icon.png',
      },
    ],
    rightAdvantages: [
      {
        step: '04',
        title: 'Saves Time for Creators & Agencies',
        description:
          'Growing on TikTok manually takes time, testing, and regular posting. With TrendEvo, creators, influencers, agencies, and resellers can place orders, track progress, and manage multiple TikTok services from one dashboard.',
        icon: '/images/service-smm-panel/facebook-smm-panel-time-saving-growth-icon.png',
      },
      {
        step: '05',
        title: 'Affordable Growth with Local Payment',
        description:
          'TrendEvo makes TikTok marketing easier for Bangladeshi users with budget-friendly pricing and local payment support like bKash, Nagad, and Rocket. No complex payment process is needed.',
        icon: '/images/service-smm-panel/facebook-smm-panel-affordable-pricing-icon.png',
      },
      {
        step: '06',
        title: 'Useful for Creators, Brands & Resellers',
        description:
          'Our TikTok SMM Panel Bangladesh services are suitable for creators, influencers, ecommerce shops, online businesses, local brands, agencies, freelancers, and reseller clients. You can manage different growth needs in one place.',
        icon: '/images/service-smm-panel/facebook-smm-panel-community-growth-in-private-groups-icon.png',
      },
    ],
  },

  workingProcess: {
    title: 'How TrendEvo gt<TikTok SMM Panel> Works',
    subtitle:
      'TrendEvo makes TikTok growth simple for Bangladeshi users. You can choose a service, place your order, pay with local methods, and track everything from one easy dashboard.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    steps: [
      {
        number: '01',
        title: 'Create Your TrendEvo Account',
        description:
          'Sign up on TrendEvo and access your TikTok SMM Panel dashboard. The process is simple, quick, and made for creators, influencers, businesses, agencies, and resellers in Bangladesh.',
      },
      {
        number: '02',
        title: 'Choose the Right TikTok Service',
        description:
          'Select the service you need for your goal. You can order TikTok followers, video views, likes, comments, shares, live views, profile visits, reach, or engagement packages.',
      },
      {
        number: '03',
        title: 'Add Your Link & Confirm Order',
        description:
          'Paste your TikTok profile, video, live stream, or content link. Then choose the quantity, review the details, and confirm your order before payment.',
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
    title: 'Why Choose TrendEvo for gt<TikTok SMM Panel Services> in Bangladesh',
    subtitle:
      'TrendEvo helps Bangladeshi creators, influencers, businesses, agencies, and resellers manage TikTok growth with speed, safety, and better control. Our platform combines local payment support, affordable pricing, smooth order tracking, and reliable TikTok SMM services in one simple dashboard.',
    titleClassName:
      'whitespace-normal max-w-[1200px] text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Fast Order Processing',
        description:
          'TikTok campaigns often need quick engagement because trends change fast. TrendEvo processes orders smoothly so you can support profile growth, video reach, live activity, and promotional campaigns without long delays.',
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
        title: 'Affordable TikTok Growth',
        description:
          'Get budget-friendly TikTok SMM Panel services without losing control over quality. Our pricing works for creators, influencers, small businesses, ecommerce shops, agencies, and resellers who need scalable growth.',
        icon: '/images/service-smm-panel/facebook-smm-panel-affordable-pricing-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Easy Dashboard Control',
        description:
          'Manage TikTok followers, video views, likes, comments, shares, live views, profile visits, reach, and engagement orders from one clean dashboard. You can place orders, check status, and manage multiple campaigns with less effort.',
        icon: '/images/service-smm-panel/facebook-smm-panel-time-saving-growth-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Support for Businesses & Resellers',
        description:
          'TrendEvo is useful for both direct users and resellers. Whether you are growing your own TikTok profile or managing client orders, our platform helps you handle TikTok SMM services more professionally.',
        icon: '/images/service-smm-panel/facebook-smm-panel-customer-focused-service-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
  },

  faq: {
    label: 'FAQ',
    title: 'Frequently Asked gt<Questions About TikTok SMM Panel>',
    subtitle:
      'Find clear and simple answers to the most common questions about our TikTok SMM Panel, services, payments, orders, and account safety.',
    bg: 'section-7',
    items: tiktokFaqItems,
    ctaTitle: 'Still have questions?',
    ctaSubtitle:
      "Can't find the answer you're looking for? Please get in touch with our team.",
    ctaButtonLabel: 'Get in Touch',
    ctaButtonHref: '/contact-us',
  },

  cta: {
    title: 'Ready to gt<Grow Your Social Media> in Bangladesh?',
    description:
      'Join over 56486 users who are already using TrendEvo to grow faster on TikTok, Facebook, Instagram, YouTube, and more. Getting started is free and takes less than 40 seconds.',
    primaryButtonLabel: 'Create Free Account',
    secondaryButtonLabel: 'See All Services',
    secondaryButtonHref: '/services',
    imageSrc: '/images/cta/cta-character-illustration.webp',
    imageAlt: 'Start growing your social media with TrendEvo',
    className: 'mt-16',
  },
};
