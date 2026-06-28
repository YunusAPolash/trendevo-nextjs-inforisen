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

type InstagramSmmPanelPageData = {
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

const instagramFaqItems = [
  {
    question: 'What is an Instagram SMM Panel?',
    answer:
      'An Instagram SMM Panel is an online platform where you can order Instagram growth services such as followers, likes, Reels views, story views, comments, saves, profile visits, reach, and impressions. It helps businesses, creators, influencers, and agencies manage Instagram growth from one dashboard.',
  },
  {
    question: 'How does an Instagram SMM Panel work?',
    answer:
      'You choose an Instagram service, paste the required profile, post, Reel, story, or content link, select the quantity, complete payment, and place the order. After that, you can track the progress from your TrendEvo account.',
  },
  {
    question: 'Which Instagram services can I buy from TrendEvo?',
    answer:
      'TrendEvo offers a wide range of Instagram services, including followers, likes, Reels views, story views, comments, saves, profile visits, reach, impressions, and other Instagram engagement services.',
  },
  {
    question: 'Is it safe to use an Instagram SMM Panel?',
    answer:
      'A trusted platform with clear service details, secure payment methods, and proper order handling is always a better choice. TrendEvo focuses on safe ordering, simple account use, and a smooth experience for Bangladeshi users.',
  },
  {
    question: 'Do I need to give my Instagram password?',
    answer:
      'No. You do not need to share your Instagram password. TrendEvo only needs the public link of the profile, post, Reel, story, or content that you want to promote.',
  },
  {
    question: 'Can I buy Instagram followers, likes, and Reels views separately?',
    answer:
      'Yes. You can order each service separately based on your goal. For example, you may only need Instagram followers, only post likes, only Reels views, only story views, or only comments for a specific campaign.',
  },
  {
    question: 'How long does an Instagram SMM order take to start?',
    answer:
      'The start time depends on the selected service. Some orders may begin quickly, while others can take longer depending on service type, quantity, and current order volume. You can check service details before placing the order.',
  },
  {
    question: 'Can I track the progress of my Instagram order?',
    answer:
      'Yes. After placing your order, you can monitor the progress directly from your TrendEvo dashboard. This makes it easy to manage multiple Instagram campaigns from one place.',
  },
  {
    question: 'What payment methods do you accept in Bangladesh?',
    answer:
      'TrendEvo supports popular local payment methods in Bangladesh such as bKash, Nagad, and Rocket. This makes ordering Instagram SMM services easier for local businesses, creators, influencers, freelancers, and resellers.',
  },
  {
    question: 'Can agencies and resellers use your Instagram SMM Panel?',
    answer:
      'Yes. TrendEvo is suitable for agencies, freelancers, and resellers who manage Instagram growth services for multiple clients. Our dashboard makes it easier to place, manage, and monitor several Instagram orders efficiently.',
  },
];

export const data: InstagramSmmPanelPageData = {
  seo: {
    title: 'Best Instagram SMM Panel in Bangladesh | TrendEvo',
    description:
      'Grow with TrendEvo’s Instagram SMM Panel in Bangladesh. Buy followers, likes, Reels views, story views, saves, and engagement with bKash, Nagad, and Rocket.',
    canonical: '/instagram-smm-panel',
  },

  schema: {
    name: 'Instagram SMM Panel',
    description:
      'Grow with TrendEvo’s Instagram SMM Panel in Bangladesh. Buy followers, likes, Reels views, story views, saves, and engagement with bKash, Nagad, and Rocket.',
    areaServed: 'Bangladesh',
    url: 'https://trendevo.com/instagram-smm-panel',
  },

  hero: {
    title: 'Grow Faster with a Trusted gt<Instagram SMM Panel> in Bangladesh',
    description:
      'TrendEvo helps Bangladeshi businesses, creators, influencers, agencies, and resellers build a stronger Instagram presence with reliable followers, likes, Reels views, story views, saves, profile visits, comments, and engagement. Our Instagram SMM Panel makes every order simple, secure, and easy to manage from one clean dashboard.',
    descriptionSecondary:
      'Get faster Instagram growth with affordable pricing, bKash, Nagad, Rocket payment support, and services made for real branding, content reach, and audience growth in Bangladesh.',
    buttonLabel: 'Get Started Now',
    image: {
      src: '/images/service-smm-panel/instagram-smm-panel/boost-instagram-reach-and-engagement-with-trendevo.webp',
      alt: 'Grow faster with TrendEvo Instagram SMM Panel in Bangladesh',
      width: 687,
      height: 648,
    },
  },

  socialServices: {
    title: 'Instagram SMM Panel Services gt<Built for Bangladesh>',
    subtitle:
      'TrendEvo brings all major Instagram growth services into one simple dashboard for Bangladeshi businesses, creators, influencers, agencies, and resellers. Whether you want more profile trust, Reels reach, story activity, post engagement, or campaign support, our Instagram SMM Panel in Bangladesh services help you manage growth faster and more affordably.',
    titleClassName:
      'text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] max-w-[1200px] lg:text-[48px]',
    subtitleClassName: 'max-w-[996px] text-base sm:text-lg',
    decorativeLeft: {
      src: '/images/service-smm-panel/instagram-smm-panel/instagram-effect.svg',
      width: 221,
      height: 230,
      className:
        'pointer-events-none absolute -left-12 bottom-16 hidden h-auto w-[140px] lg:block xl:w-[221px]',
    },
    decorativeRight: {
      src: '/images/service-smm-panel/instagram-smm-panel/instagram-effect.svg',
      width: 221,
      height: 230,
      className:
        'pointer-events-none absolute -right-8 top-20 hidden h-auto w-[150px] -scale-x-100 lg:block xl:w-[221px]',
    },
    services: [
      {
        title: 'Instagram Followers',
        description:
          'Build a stronger audience base for your Instagram profile by using our instagram followers service. This service is useful for online shops, personal brands, creators, influencers, startups, and SMEs that want their profile to look active and trustworthy.',
        icon: '/images/our-services/platforms/our-services-instagram-followers-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Instagram Likes',
        description:
          'Improve your post engagement with more Instagram likes. This helps product posts, lifestyle content, portfolio updates, brand campaigns, and promotional content look more attractive to new visitors.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-like-icon.png',
        iconWidth: 60,
        iconHeight: 54,
      },
      {
        title: 'Instagram Reels Views',
        description:
          'Increase your Instagram Reels views and short-form videos. This service is useful for creators, fashion brands, ecommerce stores, restaurants, coaches, and influencers who want better visibility through Reels content.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 40,
        iconHeight: 40,
      },
      {
        title: 'Instagram Story Views',
        description:
          'Make your Instagram stories look more active with instagram story views service. This helps daily updates, offers, polls, product launches, event reminders, and behind-the-scenes content receive stronger audience signals.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-story-views-icon.png',
        iconWidth: 70,
        iconHeight: 54,
      },
      {
        title: 'Instagram Comments',
        description:
          'Create better conversations around your Instagram posts and Reels with instagram comments service. This works well for campaigns, product launches, influencer content, brand announcements, and audience engagement.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-react-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Instagram Saves',
        description:
          'Improve content value signals with Instagram saves. Saves are useful for educational posts, product collections, tips, recipes, fashion ideas, travel guides, and content people may want to revisit later.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Instagram Profile Visits',
        description:
          'Bring more attention to your Instagram profile. Profile visits help brands, creators, and online businesses increase discovery, improve first impressions, and support follower growth.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-profile-followers-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
      },
      {
        title: 'Instagram Reach & Impressions',
        description:
          'Support wider content visibility with reach and impression services. This is useful when you want more people to see your posts, Reels, product updates, and promotional campaigns.',
        icon: '/images/service-smm-panel/facebook-smm-panel-targeted-audience-expansion-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Instagram Engagement Packages',
        description:
          'Grow multiple engagement signals together with likes, views, comments, saves, and profile activity. These packages help agencies, resellers, creators, and businesses manage balanced Instagram growth more easily.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-group-member-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
    ctaLabel: 'See All Services',
    ctaHref: '/services',
  },

  advantages: {
    title: 'Why Bangladeshi Brands Use an gt<Instagram SMM Panel> for Faster Growth',
    subtitle:
      'BD SMM Panel helps businesses, creators, influencers, and agencies grow their Instagram presence with less manual effort. TrendEvo makes it easier to improve profile trust, Reels performance, story activity, post engagement, and campaign visibility from one simple dashboard.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    leftAdvantages: [
      {
        step: '01',
        title: 'Faster Instagram Profile Growth',
        description:
          'Build your Instagram presence faster with followers, profile visits, likes, and engagement support. This helps new visitors see your profile as active, trusted, and worth following.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-follower-and-page-growth-icon.png',
      },
      {
        step: '02',
        title: 'Better Social Proof for Customers',
        description:
          'People often check Instagram profiles before they follow, message, order, or trust a brand. More followers, likes, views, saves, and comments can make your Instagram profile look more reliable to Bangladeshi customers.',
        icon: '/images/service-smm-panel/facebook-smm-panel-social-proof-and-credibility-icon.png',
      },
      {
        step: '03',
        title: 'More Support for Reels & Explore Reach',
        description:
          'Instagram Reels need early activity to gain attention. TrendEvo helps Reels, posts, and stories receive engagement signals that can support better visibility during promotions and content campaigns.',
        icon: '/images/service-smm-panel/facebook-smm-panel-targeted-audience-expansion-icon.png',
      },
    ],
    rightAdvantages: [
      {
        step: '04',
        title: 'Saves Time for Creators & Agencies',
        description:
          'Growing Instagram manually takes time and consistency. With TrendEvo, creators, influencers, agencies, and resellers can place orders, track progress, and manage multiple Instagram services from one dashboard.',
        icon: '/images/service-smm-panel/facebook-smm-panel-time-saving-growth-icon.png',
      },
      {
        step: '05',
        title: 'Affordable Growth with Local Payment',
        description:
          'TrendEvo makes Instagram marketing easier for Bangladeshi users with budget-friendly pricing and local payment support like bKash, Nagad, and Rocket. No complicated international payment process is needed.',
        icon: '/images/service-smm-panel/facebook-smm-panel-affordable-pricing-icon.png',
      },
      {
        step: '06',
        title: 'Useful for Brands, Influencers & Resellers',
        description:
          'Our Instagram SMM Panel Bangladesh services are suitable for ecommerce brands, creators, influencers, online businesses, agencies, freelancers, and reseller clients. You can manage different Instagram growth goals in one place.',
        icon: '/images/service-smm-panel/facebook-smm-panel-community-growth-in-private-groups-icon.png',
      },
    ],
  },

  workingProcess: {
    title: 'How TrendEvo gt<Instagram SMM Panel> Works',
    subtitle:
      'TrendEvo makes Instagram growth simple for Bangladeshi users. You can choose a service, place your order, pay with local methods, and track everything from one easy dashboard.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    steps: [
      {
        number: '01',
        title: 'Create Your TrendEvo Account',
        description:
          'Sign up on TrendEvo and access your Instagram SMM Panel dashboard. The process is simple, quick, and made for businesses, creators, influencers, agencies, and resellers in Bangladesh.',
      },
      {
        number: '02',
        title: 'Choose the Right Instagram Service',
        description:
          'Select the service you need for your goal. You can order Instagram followers, likes, Reels views, story views, comments, saves, profile visits, reach, impressions, or engagement packages.',
      },
      {
        number: '03',
        title: 'Add Your Link & Confirm Order',
        description:
          'Paste your Instagram profile, post, Reel, story, or content link. Then choose the quantity, review the details, and confirm your order before payment.',
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
    title: 'Why Choose TrendEvo for gt<Instagram SMM Panel Services> in Bangladesh',
    subtitle:
      'TrendEvo helps Bangladeshi businesses, creators, influencers, agencies, and resellers manage Instagram growth with speed, safety, and better control. Our platform combines local payment support, affordable pricing, smooth order tracking, and reliable Instagram SMM services in one simple dashboard.',
    titleClassName:
      'whitespace-normal max-w-[1200px] text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Fast Order Processing',
        description:
          'Instagram campaigns often depend on timing. TrendEvo processes orders smoothly so you can support Reels reach, post activity, story visibility, profile growth, and promotional campaigns without long delays.',
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
        title: 'Affordable Instagram Growth',
        description:
          'Get budget-friendly Instagram SMM Panel services without losing control over quality. Our pricing works for small businesses, creators, influencers, ecommerce shops, agencies, and resellers who need scalable growth.',
        icon: '/images/service-smm-panel/facebook-smm-panel-affordable-pricing-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Easy Dashboard Control',
        description:
          'Manage Instagram followers, likes, Reels views, story views, comments, saves, profile visits, reach, and engagement orders from one clean dashboard. You can place orders, check status, and manage multiple campaigns with less effort.',
        icon: '/images/service-smm-panel/facebook-smm-panel-time-saving-growth-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Support for Businesses & Resellers',
        description:
          'TrendEvo is useful for both direct users and resellers. Whether you are growing your own Instagram profile or managing client orders, our platform helps you handle Instagram SMM services more professionally.',
        icon: '/images/service-smm-panel/facebook-smm-panel-customer-focused-service-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
  },

  faq: {
    label: 'FAQ',
    title: 'Frequently Asked gt<Questions About Instagram SMM Panel>',
    subtitle:
      'Find clear and simple answers to the most common questions about our Instagram SMM Panel, services, payments, orders, and account safety.',
    bg: 'section-7',
    items: instagramFaqItems,
    ctaTitle: 'Still have questions?',
    ctaSubtitle:
      "Can't find the answer you're looking for? Please get in touch with our team.",
    ctaButtonLabel: 'Get in Touch',
    ctaButtonHref: '/contact-us',
  },

  cta: {
    title: 'Ready to gt<Grow Your Social Media> in Bangladesh?',
    description:
      'Join over 56486 users who are already using TrendEvo to grow faster on Instagram, Facebook, YouTube, TikTok, and more. Getting started is free and takes less than 40 seconds.',
    primaryButtonLabel: 'Create Free Account',
    secondaryButtonLabel: 'See All Services',
    secondaryButtonHref: '/services',
    imageSrc: '/images/cta/cta-character-illustration.webp',
    imageAlt: 'Start growing your social media with TrendEvo',
    className: 'mt-16',
  },
};
