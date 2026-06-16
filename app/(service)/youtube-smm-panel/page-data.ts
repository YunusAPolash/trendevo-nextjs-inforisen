import type { FaqSectionData } from '@/components/sections/faq-section';
import type { ServiceWorkingProcessStep } from '@/components/sections/service-working-process-section';

type SEO = {
  title: string;
  description: string;
  canonical?: string;
};

type YoutubeSmmPanelPageData = {
  seo: SEO;
  slug: 'youtube-smm-panel';
  schema: {
    name: string;
    description: string;
    areaServed: string;
    url: string;
  };
  workingProcess: {
    badge: string;
    title: string;
    subtitle: string;
    titleClassName: string;
    subtitleClassName: string;
    steps: ServiceWorkingProcessStep[];
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
    question: 'What is a YouTube SMM panel?',
    answer:
      'A YouTube SMM panel is a platform where you can order social media marketing services such as subscribers, views, likes, comments, and watch hours. TrendEvo lets you manage and track these orders in one place with fast delivery and reliable support.',
  },
  {
    question: 'How fast will my YouTube order be delivered?',
    answer:
      'Most YouTube SMM orders on TrendEvo start processing within minutes. Delivery speed depends on the service type and quantity, but our system is built for fast, reliable fulfillment so your channel keeps growing without delays.',
  },
  {
    question: 'Are YouTube subscribers and views real?',
    answer:
      'TrendEvo focuses on authentic engagement that helps your YouTube channel grow naturally. Our services are designed to deliver meaningful interactions that support long-term visibility and audience trust.',
  },
  {
    question: 'Is it safe to use TrendEvo for my YouTube channel?',
    answer:
      'Yes. We use secure order processing and never ask for your YouTube password. Your account information stays protected, and our team monitors orders to ensure safe, compliant delivery.',
  },
  {
    question: 'What YouTube services does TrendEvo offer?',
    answer:
      'TrendEvo offers a range of YouTube SMM services including subscribers, video views, likes, comments, watch hours, and engagement packages tailored for Bangladeshi businesses and creators.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'TrendEvo supports popular local and international payment options so you can order YouTube SMM services easily from Bangladesh. Check our payment section for the latest supported methods.',
  },
  {
    question: 'What happens if my YouTube order drops?',
    answer:
      'If an order drops within the guarantee period, contact our support team. We review eligible cases and provide refill or resolution according to the service terms.',
  },
  {
    question: 'Do you offer 24/7 support for YouTube SMM services?',
    answer:
      'Yes. Our support team is available around the clock in both Bangla and English to help with orders, delivery questions, and account guidance.',
  },
  {
    question: 'Can I place bulk YouTube orders?',
    answer:
      'Yes. TrendEvo supports bulk and repeat orders for agencies, resellers, and businesses that need consistent YouTube growth at scale.',
  },
  {
    question: 'How do I place a YouTube SMM order on TrendEvo?',
    answer:
      'Create an account, choose your YouTube service, enter your channel or video link, select a package, and complete payment. You can track order status from your dashboard.',
  },
];

export const data: YoutubeSmmPanelPageData = {
  seo: {
    title: 'YouTube SMM Panel | TrendEvo',
    description:
      'TrendEvo helps Bangladeshi businesses grow their YouTube presence with real engagement, reliable results, and locally optimized strategies.',
    canonical: '/youtube-smm-panel',
  },

  slug: 'youtube-smm-panel',

  schema: {
    name: 'YouTube SMM Panel',
    description:
      'TrendEvo helps Bangladeshi businesses grow their YouTube presence with real engagement, reliable results, and locally optimized strategies.',
    areaServed: 'Bangladesh',
    url: 'https://trendevo.com/youtube-smm-panel',
  },

  workingProcess: {
    badge: 'Working Process',
    title: 'Working Process Of gt<YouTube SMM Panel>',
    subtitle:
      'A YouTube SMM panel helps businesses grow subscribers, views, and engagement quickly and efficiently, saving time and boosting online presence.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    steps: [
      {
        number: '01',
        title: 'Simple Registration',
        description:
          'You’ll need to sign up quickly with just a few steps to start using our SMM panel.',
      },
      {
        number: '02',
        title: 'Customize Your Plan',
        description:
          'Single out the features and services that fit your needs or budget.',
      },
      {
        number: '03',
        title: 'Process a Secure Payment',
        description:
          'Make payments safely via trusted methods to protect your information.',
      },
      {
        number: '04',
        title: 'Track Your Growth & Enjoy',
        description:
          'Monitor your progress easily and see how your social media improves.',
      },
    ],
  },

  faq: {
    label: 'FAQ',
    title: 'Frequently Asked gt<Questions>',
    subtitle:
      'Find quick answers about YouTube SMM services, delivery, payments, and support on TrendEvo.',
    bg: 'section-7',
    items: youtubeFaqItems,
  },

  cta: {
    title: 'Ready to gt<Grow Your YouTube> with TrendEvo',
    description:
      'Join thousands of users growing faster with TrendEvo YouTube SMM Panel. Get started in under 60 seconds with fast delivery, real engagement, and 24/7 support tailored for Bangladeshi businesses.',
    primaryButtonLabel: 'Get Started Now',
    secondaryButtonLabel: 'See all Services',
    secondaryButtonHref: '/services',
    imageSrc: '/images/cta/cta-character-illustration.webp',
    imageAlt: 'Start growing your YouTube presence with TrendEvo',
    className: 'mt-16',
  },
};
