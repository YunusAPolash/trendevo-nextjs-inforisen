import type { FaqSectionData } from '@/components/sections/faq-section';
import type { ServiceWorkingProcessStep } from '@/components/sections/service-working-process-section';

type SEO = {
  title: string;
  description: string;
  canonical?: string;
};

type TelegramSmmPanelPageData = {
  seo: SEO;
  slug: 'telegram-smm-panel';
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
    question: 'What is a Telegram SMM panel?',
    answer:
      'A Telegram SMM panel is a platform for ordering channel members, post views, reactions, and other engagement services. TrendEvo helps you grow your Telegram community with fast, trackable orders.',
  },
  {
    question: 'How fast will my Telegram order be delivered?',
    answer:
      'Telegram orders on TrendEvo are processed quickly after confirmation. Delivery speed depends on the service type and order size, with most orders starting within minutes.',
  },
  {
    question: 'Are Telegram members real?',
    answer:
      'TrendEvo delivers engagement designed to support genuine channel growth. Our services help increase visibility and credibility for Telegram channels and groups.',
  },
  {
    question: 'Is it safe to use TrendEvo for my Telegram channel?',
    answer:
      'Yes. We use secure order processing and never ask for sensitive login credentials. Your channel link is all we need to fulfill most Telegram SMM services.',
  },
  {
    question: 'What Telegram services does TrendEvo offer?',
    answer:
      'TrendEvo offers a range of Telegram SMM services including channel members, post views, reactions, and engagement packages tailored for Bangladeshi businesses and creators.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'TrendEvo supports popular local and international payment options so you can order Telegram SMM services easily from Bangladesh. Check our payment section for the latest supported methods.',
  },
  {
    question: 'What happens if my Telegram order drops?',
    answer:
      'If an order drops within the guarantee period, contact our support team. We review eligible cases and provide refill or resolution according to the service terms.',
  },
  {
    question: 'Do you offer 24/7 support for Telegram SMM services?',
    answer:
      'Yes. Our support team is available around the clock in both Bangla and English to help with orders, delivery questions, and account guidance.',
  },
  {
    question: 'Can I place bulk Telegram orders?',
    answer:
      'Yes. TrendEvo supports bulk and repeat orders for agencies, resellers, and businesses that need consistent Telegram growth at scale.',
  },
  {
    question: 'How do I place a Telegram SMM order on TrendEvo?',
    answer:
      'Create an account, choose your Telegram service, enter your channel or post link, select a package, and complete payment. You can track order status from your dashboard.',
  },
];

export const data: TelegramSmmPanelPageData = {
  seo: {
    title: 'Telegram SMM Panel | TrendEvo',
    description:
      'TrendEvo helps Bangladeshi businesses grow their Telegram presence with real engagement, reliable results, and locally optimized strategies.',
    canonical: '/telegram-smm-panel',
  },

  slug: 'telegram-smm-panel',

  schema: {
    name: 'Telegram SMM Panel',
    description:
      'TrendEvo helps Bangladeshi businesses grow their Telegram presence with real engagement, reliable results, and locally optimized strategies.',
    areaServed: 'Bangladesh',
    url: 'https://trendevo.com/telegram-smm-panel',
  },

  workingProcess: {
    badge: 'Working Process',
    title: 'Working Process Of gt<Telegram SMM Panel>',
    subtitle: 'A Telegram SMM panel helps businesses grow members, views, and engagement quickly and efficiently, saving time and boosting online presence.',
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
      'Find quick answers about Telegram SMM services, delivery, payments, and support on TrendEvo.',
    bg: 'section-7',
    items: faqItems,
  },

  cta: {
    title: 'Ready to gt<Grow Your Telegram> with TrendEvo',
    description:
      'Join thousands of users growing faster with TrendEvo Telegram SMM Panel. Get started in under 60 seconds with fast delivery, real engagement, and 24/7 support tailored for Bangladeshi businesses.',
    primaryButtonLabel: 'Get Started Now',
    secondaryButtonLabel: 'See all Services',
    secondaryButtonHref: '/services',
    imageSrc: '/images/cta/cta-character-illustration.webp',
    imageAlt: 'Start growing your Telegram presence with TrendEvo',
    className: 'mt-16',
  },
};
