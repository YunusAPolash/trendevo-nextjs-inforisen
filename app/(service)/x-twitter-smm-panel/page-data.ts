import type { FaqSectionData } from '@/components/sections/faq-section';
import type { ServiceWorkingProcessStep } from '@/components/sections/service-working-process-section';

type SEO = {
  title: string;
  description: string;
  canonical?: string;
};

type XTwitterSmmPanelPageData = {
  seo: SEO;
  slug: 'x-twitter-smm-panel';
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

const faqItems = [
  {
    question: 'What is a X (Twitter) SMM panel?',
    answer:
      'An X (Twitter) SMM panel is a platform where you can order social media marketing services such as followers, likes, retweets, and comments. TrendEvo lets you manage and track these orders in one place with fast delivery and reliable support.',
  },
  {
    question: 'How fast will my X (Twitter) order be delivered?',
    answer:
      'Most X (Twitter) SMM orders on TrendEvo start processing within minutes. Delivery speed depends on the service type and quantity, but our system is built for fast, reliable fulfillment.',
  },
  {
    question: 'Are X (Twitter) followers real?',
    answer:
      'TrendEvo focuses on authentic engagement that helps your X (Twitter) profile grow naturally. Our services are designed to deliver meaningful interactions that support long-term visibility and audience trust.',
  },
  {
    question: 'Is it safe to use TrendEvo for my X (Twitter) account?',
    answer:
      'Yes. We use secure order processing and never ask for your X (Twitter) password. Your account information stays protected, and our team monitors orders to ensure safe, compliant delivery.',
  },
  {
    question: 'What X (Twitter) services does TrendEvo offer?',
    answer:
      'TrendEvo offers a range of X (Twitter) SMM services including followers, post likes, retweets, comments, and engagement packages tailored for Bangladeshi businesses and creators.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'TrendEvo supports popular local and international payment options so you can order X (Twitter) SMM services easily from Bangladesh. Check our payment section for the latest supported methods.',
  },
  {
    question: 'What happens if my X (Twitter) order drops?',
    answer:
      'If an order drops within the guarantee period, contact our support team. We review eligible cases and provide refill or resolution according to the service terms.',
  },
  {
    question: 'Do you offer 24/7 support for X (Twitter) SMM services?',
    answer:
      'Yes. Our support team is available around the clock in both Bangla and English to help with orders, delivery questions, and account guidance.',
  },
  {
    question: 'Can I place bulk X (Twitter) orders?',
    answer:
      'Yes. TrendEvo supports bulk and repeat orders for agencies, resellers, and businesses that need consistent X (Twitter) growth at scale.',
  },
  {
    question: 'How do I place a X (Twitter) SMM order on TrendEvo?',
    answer:
      'Create an account, choose your X (Twitter) service, enter your profile or post link, select a package, and complete payment. You can track order status from your dashboard.',
  },
];

export const data: XTwitterSmmPanelPageData = {
  seo: {
    title: 'X (Twitter) SMM Panel | TrendEvo',
    description:
      'TrendEvo helps Bangladeshi businesses grow their X (Twitter) presence with real engagement, reliable results, and locally optimized strategies.',
    canonical: '/x-twitter-smm-panel',
  },

  slug: 'x-twitter-smm-panel',

  schema: {
    name: 'X (Twitter) SMM Panel',
    description:
      'TrendEvo helps Bangladeshi businesses grow their X (Twitter) presence with real engagement, reliable results, and locally optimized strategies.',
    areaServed: 'Bangladesh',
    url: 'https://trendevo.com/x-twitter-smm-panel',
  },

  workingProcess: {
    badge: 'Working Process',
    title: 'Working Process Of gt<X (Twitter) SMM Panel>',
    subtitle: 'An X (Twitter) SMM panel helps businesses grow followers, likes, and engagement quickly and efficiently, saving time and boosting online presence.',
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
      'Find quick answers about X (Twitter) SMM services, delivery, payments, and support on TrendEvo.',
    bg: 'section-7',
    items: faqItems,
  },

  cta: {
    title: 'Ready to gt<Grow Your X> with TrendEvo',
    description:
      'Join thousands of users growing faster with TrendEvo X (Twitter) SMM Panel. Get started in under 60 seconds with fast delivery, real engagement, and 24/7 support tailored for Bangladeshi businesses.',
    primaryButtonLabel: 'Get Started Now',
    secondaryButtonLabel: 'See all Services',
    secondaryButtonHref: '/services',
    imageSrc: '/images/cta/cta-character-illustration.webp',
    imageAlt: 'Start growing your X presence with TrendEvo',
    className: 'mt-16',
  },
};
