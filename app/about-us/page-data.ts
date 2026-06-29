import type { FaqSectionData } from '@/components/sections/faq-section';
import type { HeroSocialIcon } from '@/components/sections/hero-section';
import { heroSocialIcons } from '@/content/hero-social-icons';

type SEO = {
  title: string;
  description: string;
  ogImage?: string;
  canonical?: string;
};

type SectionHeadingData = {
  badge?: string;
  title?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  underlineSrc?: string;
  underlineWidth?: number;
  titleClassName?: string;
  subtitleClassName?: string;
};

type AboutUsHeroData = {
  bg: 'section-1';
  variant: 'wide';
  decoration: 'contact';
  title: string;
  description: string;
  primaryButtonLabel: string;
  secondaryButtonLabel: string;
  secondaryButtonHref: string;
  illustration: {
    src: string;
    alt: string;
    width: number;
    height: number;
    maxWidthClassName: string;
  };
  socialIcons: HeroSocialIcon[];
};

type AboutUsTrustCard = {
  title: string;
  description: string;
  iconSrc: string;
  iconClassName: string;
};

type AboutUsPageData = {
  seo: SEO;
  hero: AboutUsHeroData;
  whatWeDo: {
    heading: SectionHeadingData;
    paragraphs: string[];
    closingParagraph: string;
    ctaLabel: string;
    image: {
      src: string;
      alt: string;
    };
  };
  weAreDifferent: {
    heading: SectionHeadingData;
    leftCards: [AboutUsTrustCard, AboutUsTrustCard];
    rightCards: [AboutUsTrustCard, AboutUsTrustCard];
  };
  commitment: {
    heading: SectionHeadingData;
    paragraphs: string[];
    image: {
      src: string;
      alt: string;
    };
  };
  faq: FaqSectionData;
  cta: {
    title: string;
    description: string;
    primaryButtonLabel: string;
    secondaryButtonLabel: string;
    secondaryButtonHref: string;
  };
};

export type { AboutUsPageData, AboutUsTrustCard, SectionHeadingData };

export const data: AboutUsPageData = {
  seo: {
    title: 'About TrendEvo | Trusted SMM Panel in Bangladesh',
    description:
      'Learn about TrendEvo, a trusted SMM panel in Bangladesh offering affordable social media growth services, bKash, Nagad, Rocket payments, secure orders, and reseller support.',
    canonical: '/about-us',
  },

  hero: {
    bg: 'section-1',
    variant: 'wide',
    decoration: 'contact',
    title:
      'Trusted SMM Panel in Bangladesh for gt<Smarter Social Media Growth>',
    description:
      'TrendEvo helps businesses, creators, agencies, and resellers grow faster with reliable lnk</services|SMM panel services in Bangladesh>. Our platform brings Facebook, Instagram, YouTube, TikTok, Telegram, and more into one simple dashboard. With affordable pricing, local payment options, secure orders, and fast processing, TrendEvo gives users a smarter way to build visibility, engagement, and trust online.',
    primaryButtonLabel: 'Get Started Now',
    secondaryButtonLabel: 'See All Services',
    secondaryButtonHref: '/services',
    illustration: {
      src: '/images/about/about-us-trendevo-specialist-representing-trusted-smm-panel-services-illustration.webp',
      alt: 'TrendEvo specialist representing trusted SMM panel services',
      width: 547,
      height: 673,
      maxWidthClassName: 'max-w-[547px]',
    },
    socialIcons: heroSocialIcons,
  },

  whatWeDo: {
    heading: {
      badge: 'What We Do',
      align: 'left',
    },
    paragraphs: [
      'TrendEvo helps creators, businesses, agencies, and resellers manage social media growth from one simple dashboard. As a trusted lnk</|SMM panel> in Bangladesh, we provide fast, affordable, and easy-to-use services for people who want better visibility, engagement, and social proof.',
      'Our services cover major platforms like lnk</facebook-smm-panel|Facebook>, lnk</instagram-smm-panel|Instagram>, lnk</youtube-smm-panel|YouTube>, lnk</tiktok-smm-panel|TikTok>, lnk</telegram-smm-panel|Telegram>, lnk</spotify-smm-panel|Spotify>, and lnk</x-twitter-smm-panel|X-Twitter>. Users can order followers, likes, views, comments, shares, subscribers, watch time, and other social media engagement services based on their needs and budget.',
      'The process is simple. Create an account, add funds, choose your service, submit your link, and place your order. You can track every order from your dashboard without confusion.',
      'TrendEvo also supports local payment methods like bKash, Nagad, and Rocket, making it easier for Bangladeshi users to use SMM services without international payment barriers.',
      'For agencies, freelancers, and resellers, TrendEvo makes campaign management faster and more organized on our lnk<reseller smm panel in Bangladesh|https://trendevo.com/api>. With affordable pricing, secure orders, quick processing, and 24/7 support, we help users grow smarter across every major social platform.',
    ],
    closingParagraph:
      'Ready to see what TrendEvo can do for your growth? Explore our services and choose the right package for your next campaign.',
    ctaLabel: 'Create an Account Now',
    image: {
      src: '/images/about/about-us-our-mission-and-vision-illustration.png',
      alt: 'TrendEvo specialist highlighting social media growth services',
    },
  },

  weAreDifferent: {
    heading: {
      badge: 'We are Different',
      title: 'Why We Are Different gt<from Other SMM Panels>',
      subtitle:
        'TrendEvo is built for users who need simple, secure, and affordable social media growth. We focus on local payments, fast service, clear order tracking, and reliable support.',
      titleClassName:
        'text-4xl leading-snug tracking-wide text-[#13203b] lg:text-5xl',
      subtitleClassName: 'max-w-6xl text-xl font-medium',
    },
    leftCards: [
      {
        title: 'Bangladesh-Focused Platform',
        description:
          'TrendEvo is designed with Bangladeshi users in mind. We support local payment habits, affordable pricing needs, and easy service access for creators, businesses, freelancers, agencies, and resellers across Bangladesh.',
        iconSrc: '/images/about/about-us-built-for-bangladesh-icon.png',
        iconClassName: 'h-10 w-10 object-cover',
      },
      {
        title: 'Simple Dashboard Experience',
        description:
          'Our dashboard is clean and easy to use. Users can add funds, choose services, place orders, track progress, and manage multiple campaigns without confusion or technical knowledge.',
        iconSrc: '/images/about/about-us-local-payment-and-pricing-icon.png',
        iconClassName: 'h-10 w-9 object-cover',
      },
    ],
    rightCards: [
      {
        title: 'Fast and Secure Orders',
        description:
          'TrendEvo focuses on quick order processing with safe order handling. Every user can place orders confidently, monitor status in real time, and manage social media growth more smoothly.',
        iconSrc:
          '/images/about/about-us-stable-and-high-quality-services-icon.webp',
        iconClassName: 'h-10 w-10 object-cover',
      },
      {
        title: 'Bangla and English Support for Resellers',
        description:
          'TrendEvo helps resellers and agencies manage client campaigns from one platform. With flexible services, affordable rates, and organized order tracking, scaling an SMM business becomes easier.',
        iconSrc:
          '/images/about/about-us-local-support-and-real-guidance-icon.webp',
        iconClassName: 'h-10 w-8 object-cover',
      },
    ],
  },

  commitment: {
    heading: {
      badge: 'Commitment',
      title: 'Our Commitment gt<to You>',
      align: 'left',
      titleClassName:
        'text-4xl leading-snug tracking-wide text-[#13203b] lg:text-5xl',
    },
    paragraphs: [
      'At TrendEvo, trust is the base of everything we do. As a reliable SMM panel in Bangladesh, we focus on clear service details, secure orders, fair pricing, and helpful support for every user.',
      'Before you place an order, we try to keep service information simple and easy to understand. You can check the service type, order process, expected delivery flow, and important notes directly from the dashboard.',
      'We work to process orders as quickly as possible. Many services start within a short time after order placement, and users can track their order status from their TrendEvo account.',
      'If any issue happens, our support team is here to help. Whether it is about payment, order status, service selection, or dashboard use, we aim to give users a smooth and fair experience.',
      'TrendEvo will never ask for your social media passwords. Our services work through public links, usernames, or profile URLs only. Your account safety matters to us, and our lnk</privacy-policy|Privacy Policy> explains how we handle user data.',
      'Our promise is simple: affordable SMM services, local payment support, secure order handling, and a platform users can trust for long-term social media growth.',
    ],
    image: {
      src: '/images/about/about-us-trendevo-specialist-representing-trusted-smm-panel-services-illustration.webp',
      alt: 'TrendEvo commitment to secure and reliable SMM panel services',
    },
  },

  faq: {
    label: 'Frequently Asked Questions',
    title: '',
    subtitle:
      'Find clear and simple answers to the most common questions about TrendEvo services, payments, orders, safety, and account management.',
    bg: 'section-7',
    items: [
      {
        question: 'Is TrendEvo useful for Facebook page growth in Bangladesh?',
        answer:
          'Yes. TrendEvo helps Bangladeshi businesses, creators, and ecommerce sellers improve their Facebook page visibility with services like followers, likes, comments, shares, and post engagement.',
      },
      {
        question: 'Can small businesses in Bangladesh use TrendEvo?',
        answer:
          'Yes. TrendEvo is suitable for small businesses, local shops, online stores, startups, and service providers in Bangladesh who want affordable social media growth from one dashboard.',
      },
      {
        question: 'Do you provide SMM services for Bangladeshi resellers?',
        answer:
          'Yes. TrendEvo supports Bangladeshi resellers who want to manage client orders, offer social media growth services, and build their own SMM business with flexible pricing.',
      },
      {
        question: 'Is TrendEvo safe to use?',
        answer:
          'Yes, TrendEvo is designed with secure order handling and simple account management. We do not ask for your social media passwords. Most services work through public links or usernames.',
      },
      {
        question: 'Can I track my order progress?',
        answer:
          'Yes. After placing an order, you can track the order status from your TrendEvo dashboard. This helps you check whether your order is pending, processing, completed, or partially completed.',
      },
      {
        question: 'What payment methods do you accept?',
        answer:
          'TrendEvo supports local payment methods for Bangladeshi users, including bKash, Nagad, and Rocket. This makes adding funds easier without using international cards.',
      },
      {
        question: 'How do I place an order on TrendEvo?',
        answer:
          'First, create an account and add funds. Then choose your service, enter the correct link, select the quantity, and submit your order. You can track everything from your dashboard.',
      },
      {
        question: 'Can using an SMM panel ban my account?',
        answer:
          'Using low-quality services or very fast unnatural growth can create risk. TrendEvo focuses on safer order handling, but users should choose services carefully and avoid sudden excessive orders.',
      },
      {
        question: 'Do you offer support if my order has an issue?',
        answer:
          'Yes. TrendEvo provides support for order, payment, service, and dashboard-related questions. If you face any issue, you can contact our support team for guidance.',
      },
      {
        question: 'Can agencies and resellers use TrendEvo?',
        answer:
          'Yes. TrendEvo is suitable for agencies, freelancers, and resellers who manage multiple client campaigns. The dashboard makes it easier to order, track, and manage different services from one place.',
      },
    ],
  },

  cta: {
    title: 'Ready to gt<Grow Your Social Media> in Bangladesh?',
    description:
      'Join over 56486 users who are already using TrendEvo to grow faster on Facebook, Instagram, YouTube, TikTok, and more. Getting started is free and takes less than 40 seconds.',
    primaryButtonLabel: 'Create Free Account',
    secondaryButtonLabel: 'See All Services',
    secondaryButtonHref: '/services',
  },
};
