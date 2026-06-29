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

type YoutubeSmmPanelPageData = {
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

const youtubeFaqItems = [
  {
    question: 'What is a YouTube SMM Panel?',
    answer:
      'A YouTube SMM Panel is an online platform where you can order YouTube growth services such as subscribers, views, likes, comments, shares, Shorts views, live stream views, and watch time. It helps creators, businesses, agencies, and resellers manage YouTube growth from one dashboard.',
  },
  {
    question: 'How does a YouTube SMM Panel work?',
    answer:
      'You choose a YouTube service, paste the required channel, video, Shorts, live stream, or content link, select the quantity, complete payment, and place the order. After that, you can track the progress from your TrendEvo account.',
  },
  {
    question: 'Which YouTube services can I buy from TrendEvo?',
    answer:
      'TrendEvo offers a wide range of YouTube services, including subscribers, video views, Shorts views, likes, comments, shares, watch time, live stream views, and other YouTube engagement services.',
  },
  {
    question: 'Is it safe to use a YouTube SMM Panel?',
    answer:
      'A trusted platform with clear service details, secure payment methods, and proper order handling is always a better choice. TrendEvo focuses on safe ordering, simple account use, and a smooth experience for Bangladeshi users.',
  },
  {
    question: 'Do I need to give my YouTube password?',
    answer:
      'No. You do not need to share your YouTube password. TrendEvo only needs the public link of the channel, video, Shorts, live stream, or content that you want to promote.',
  },
  {
    question: 'Can I buy YouTube subscribers, views, and watch time separately?',
    answer:
      'Yes. You can order each service separately based on your goal. For example, you may only need YouTube subscribers, only video views, only likes, only comments, or only watch time for a specific campaign.',
  },
  {
    question: 'How long does a YouTube SMM order take to start?',
    answer:
      'The start time depends on the selected service. Some orders may begin quickly, while others can take longer depending on service type, quantity, and current order volume. You can check service details before placing the order.',
  },
  {
    question: 'Can I track the progress of my YouTube order?',
    answer:
      'Yes. After placing your order, you can monitor the progress directly from your TrendEvo dashboard. This makes it easy to manage multiple YouTube campaigns from one place.',
  },
  {
    question: 'What payment methods do you accept in Bangladesh?',
    answer:
      'TrendEvo supports popular local payment methods in Bangladesh such as bKash, Nagad, and Rocket. This makes ordering YouTube SMM services easier for local creators, businesses, musicians, freelancers, agencies, and resellers.',
  },
  {
    question: 'Can agencies and resellers use your YouTube SMM Panel?',
    answer:
      'Yes. TrendEvo is suitable for agencies, freelancers, and resellers who manage YouTube growth services for multiple clients. Our dashboard makes it easier to place, manage, and monitor several YouTube orders efficiently.',
  },
];

export const data: YoutubeSmmPanelPageData = {
  seo: {
    title: 'Best YouTube SMM Panel in Bangladesh | TrendEvo',
    description:
      'Grow with TrendEvo’s YouTube SMM Panel in Bangladesh. Buy subscribers, views, likes, comments, watch time, and engagement with bKash, Nagad, and Rocket.',
    canonical: '/youtube-smm-panel',
  },

  schema: {
    name: 'YouTube SMM Panel',
    description:
      'Grow with TrendEvo’s YouTube SMM Panel in Bangladesh. Buy subscribers, views, likes, comments, watch time, and engagement with bKash, Nagad, and Rocket.',
    areaServed: 'Bangladesh',
    url: 'https://trendevo.com/youtube-smm-panel',
  },

  hero: {
    title: 'Grow Faster with a Trusted gt<YouTube SMM Panel> in Bangladesh',
    description:
      'TrendEvo helps Bangladeshi businesses, creators, agencies, musicians, influencers, and resellers build a stronger YouTube presence with reliable subscribers, video views, likes, comments, shares, watch time, and channel engagement. Our YouTube SMM Panel makes every order simple, secure, and easy to track from one clean dashboard.',
    descriptionSecondary:
      'Get faster YouTube growth with affordable pricing, bKash, Nagad, Rocket payment support, and services made for real video marketing goals in Bangladesh.',
    buttonLabel: 'Get Started Now',
    image: {
      src: '/images/service/youtube-smm-panel/grow-faster-with-a-trusted-youtube-smm-panel-in-bangladesh.webp',
      alt: 'Grow faster with TrendEvo YouTube SMM Panel in Bangladesh',
      width: 687,
      height: 648,
    },
  },

  socialServices: {
    title: 'YouTube SMM Panel Services gt<for Bangladeshi Creators>',
    subtitle:
      'lnk<TrendEvo|/about-us> brings all major YouTube growth services into one simple dashboard for Bangladeshi creators, businesses, agencies, musicians, influencers, and resellers. Whether you want more channel trust, video reach, audience engagement, Shorts visibility, or monetization support, our YouTube lnk<SMM Panel in Bangladesh|/> services help you manage growth faster and more affordably.',
    titleClassName:
      'text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] max-w-[1200px] lg:text-[48px]',
    subtitleClassName: 'max-w-[996px] text-base sm:text-lg',
    decorativeLeft: {
      src: '/images/service/youtube-smm-panel/youtube-smm-panel-services-for-bangladeshi-creators-decorative-left.svg',
      width: 232,
      height: 239,
      className:
        'pointer-events-none absolute -left-12 bottom-16 hidden h-auto w-[140px] lg:block xl:w-[232px]',
    },
    decorativeRight: {
      src: '/images/service/youtube-smm-panel/youtube-smm-panel-services-for-bangladeshi-creators-decorative-right.svg',
      width: 232,
      height: 239,
      className:
        'pointer-events-none absolute -right-8 top-20 hidden h-auto w-[150px] lg:block xl:w-[232px]',
    },
    services: [
      {
        title: 'YouTube Subscribers',
        description:
          'Build a stronger audience base for your YouTube channel by using our lnk<youtube subscribers|/buy-youtube-subscribers> service. This service is useful for creators, educators, vloggers, businesses, musicians, and startups that want their channel to look active and trustworthy.',
        icon: '/images/our-services/platforms/youtube-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'YouTube Video Views',
        description:
          'Increase views on your YouTube videos, product reviews, tutorials, music videos, podcasts, and promotional content. More lnk<youtube views|/buy-youtube-views> help your videos look active and worth watching.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 40,
        iconHeight: 40,
      },
      {
        title: 'YouTube Shorts Views',
        description:
          'Grow short-form content with YouTube Shorts views. This service is useful for creators, influencers, online shops, and brands that want better visibility through quick and engaging video content.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-story-views-icon.png',
        iconWidth: 70,
        iconHeight: 54,
      },
      {
        title: 'YouTube Likes',
        description:
          'Improve your video engagement with more lnk<YouTube likes|/buy-youtube-likes>. Likes help videos look more valuable and can support better viewer trust when people discover your content.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-like-icon.png',
        iconWidth: 60,
        iconHeight: 54,
      },
      {
        title: 'YouTube Comments',
        description:
          'Create stronger conversations around your videos with lnk<YouTube comments|/buy-youtube-comments>. This works well for reviews, tutorials, product videos, music releases, educational content, and brand campaigns.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-react-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'YouTube Shares',
        description:
          'Expand your video visibility beyond your own channel. YouTube shares are useful for awareness campaigns, product launches, music promotion, influencer content, and local brand marketing.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-group-member-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'YouTube Watch Time',
        description:
          'Support your channel growth with YouTube watch time services. This is useful for creators working toward stronger channel authority, better audience retention signals, and monetization goals.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-monetization-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'YouTube Live Stream Views',
        description:
          'Increase activity during live streams, webinars, product launches, gaming streams, interviews, and online events. More live viewers can make your stream look more active and engaging.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 40,
        iconHeight: 40,
      },
      {
        title: 'YouTube Engagement Packages',
        description:
          'Grow multiple video signals together with subscribers, views, likes, comments, shares, and watch time. These packages help creators, agencies, and resellers manage balanced YouTube growth from one place.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-follower-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
    ctaLabel: 'See All Services',
    ctaHref: '/services',
  },

  advantages: {
    title: 'Why Bangladeshi Brands Use a gt<YouTube SMM Panel> for Faster Growth',
    subtitle:
      'A reliable YouTube SMM Panel helps creators, businesses, musicians, educators, and agencies grow their YouTube presence with less manual effort. TrendEvo makes it easier to improve channel trust, video activity, Shorts visibility, watch time, and campaign engagement from one simple dashboard.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    leftAdvantages: [
      {
        step: '01',
        title: 'Faster YouTube Channel Growth',
        description:
          'Build your YouTube channel presence faster with subscribers, views, likes, comments, and watch time support. This helps new visitors see your channel as active, trusted, and ready for more viewers.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-follower-and-page-growth-icon.png',
      },
      {
        step: '02',
        title: 'Better Social Proof for Viewers',
        description:
          'People often check views, subscribers, likes, and comments before they watch or subscribe. Stronger engagement can make your YouTube channel look more reliable to Bangladeshi audiences.',
        icon: '/images/service-smm-panel/facebook-smm-panel-social-proof-and-credibility-icon.png',
      },
      {
        step: '03',
        title: 'More Support for Video Reach',
        description:
          'Good videos need early activity to get noticed. TrendEvo helps videos, Shorts, live streams, and campaigns gain engagement so your content can attract more attention.',
        icon: '/images/service-smm-panel/facebook-smm-panel-targeted-audience-expansion-icon.png',
      },
    ],
    rightAdvantages: [
      {
        step: '04',
        title: 'Saves Time for Creators & Agencies',
        description:
          'Growing a YouTube channel manually takes time. With TrendEvo, creators, freelancers, businesses, and agencies can place orders, track progress, and manage multiple YouTube services from one dashboard.',
        icon: '/images/service-smm-panel/facebook-smm-panel-time-saving-growth-icon.png',
      },
      {
        step: '05',
        title: 'Affordable Growth with Local Payment',
        description:
          'TrendEvo makes YouTube marketing easier for Bangladeshi users with budget-friendly pricing and local payment support like bKash, Nagad, and Rocket. No complex payment process is needed.',
        icon: '/images/service-smm-panel/facebook-smm-panel-affordable-pricing-icon.png',
      },
      {
        step: '06',
        title: 'Useful for Channels, Brands & Resellers',
        description:
          'Our YouTube SMM Panel Bangladesh services are suitable for creator channels, business channels, music promotion, education channels, ecommerce videos, agencies, and reseller clients. You can manage different growth needs in one place.',
        icon: '/images/service-smm-panel/facebook-smm-panel-community-growth-in-private-groups-icon.png',
      },
    ],
  },

  workingProcess: {
    title: 'How TrendEvo gt<YouTube SMM Panel> Works',
    subtitle:
      'TrendEvo makes YouTube growth simple for Bangladeshi users. You can choose a service, place your order, pay with local methods, and track everything from one easy dashboard.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    steps: [
      {
        number: '01',
        title: 'Create Your TrendEvo Account',
        description:
          'Sign up on TrendEvo and access your YouTube SMM Panel dashboard. The process is simple, quick, and made for creators, businesses, agencies, musicians, influencers, and resellers in Bangladesh.',
      },
      {
        number: '02',
        title: 'Choose the Right YouTube Service',
        description:
          'Select the service you need for your goal. You can order YouTube subscribers, video views, Shorts views, likes, comments, shares, watch time, live stream views, or engagement packages.',
      },
      {
        number: '03',
        title: 'Add Your Link & Confirm Order',
        description:
          'Paste your YouTube channel, video, Shorts, live stream, or content link. Then choose the quantity, review the details, and confirm your order before payment.',
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
    title: 'Why Choose TrendEvo for gt<YouTube SMM Panel Services> in Bangladesh',
    subtitle:
      'TrendEvo helps Bangladeshi creators, businesses, agencies, musicians, influencers, and resellers manage YouTube growth with speed, safety, and better control. Our platform combines local payment support, affordable pricing, smooth order tracking, and reliable lnk<YouTube SMM services|/services> in one simple dashboard.',
    titleClassName:
      'whitespace-normal max-w-[1200px] text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Fast Order Processing',
        description:
          'YouTube campaigns often need quick engagement. TrendEvo processes orders smoothly so you can support channel growth, video reach, Shorts activity, watch time, and promotional campaigns without long delays.',
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
        title: 'Affordable YouTube Growth',
        description:
          'Get budget-friendly YouTube SMM Panel services without losing control over quality. Our pricing works for creators, small businesses, musicians, education channels, agencies, and resellers who need scalable growth.',
        icon: '/images/service-smm-panel/facebook-smm-panel-affordable-pricing-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Easy Dashboard Control',
        description:
          'Manage YouTube subscribers, views, likes, comments, shares, Shorts views, watch time, live stream views, and engagement orders from one clean dashboard. You can place orders, check status, and manage multiple campaigns with less effort.',
        icon: '/images/service-smm-panel/facebook-smm-panel-time-saving-growth-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Support for Businesses & Resellers',
        description:
          'TrendEvo is useful for both direct users and resellers. Whether you are growing your own YouTube channel or managing client orders, our platform helps you handle YouTube SMM services more professionally.',
        icon: '/images/service-smm-panel/facebook-smm-panel-customer-focused-service-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
  },

  faq: {
    label: 'FAQ',
    title: 'Frequently Asked gt<Questions About YouTube SMM Panel>',
    subtitle:
      'Find clear and simple answers to the most common questions about our YouTube SMM Panel, services, payments, orders, and account safety.',
    bg: 'section-7',
    items: youtubeFaqItems,
    ctaTitle: 'Still have questions?',
    ctaSubtitle:
      "Can't find the answer you're looking for? Please get in touch with our team.",
    ctaButtonLabel: 'Get in Touch',
    ctaButtonHref: '/contact-us',
  },

  cta: {
    title: 'Ready to gt<Grow Your Social Media> in Bangladesh?',
    description:
      'Join over 56486 users who are already using TrendEvo to grow faster on YouTube, Facebook, Instagram, TikTok, and more. Getting started is free and takes less than 40 seconds.',
    primaryButtonLabel: 'Create Free Account',
    secondaryButtonLabel: 'See All Services',
    secondaryButtonHref: '/services',
    imageSrc: '/images/cta/cta-character-illustration.webp',
    imageAlt: 'Start growing your social media with TrendEvo',
    className: 'mt-16',
  },
};
