import type { FaqSectionData } from '@/components/sections/faq-section';
import type { ServiceWorkingProcessStep } from '@/components/sections/service-working-process-section';

type SEO = {
  title: string;
  description: string;
  canonical?: string;
};

type SoundcloudSmmPanelPageData = {
  seo: SEO;
  slug: 'soundcloud-smm-panel';
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
    question: 'What is a SoundCloud SMM panel?',
    answer:
      'A SoundCloud SMM panel is a platform where you can order music marketing services such as plays, followers, likes, and reposts. TrendEvo lets you manage and track these orders in one place with fast delivery and reliable support.',
  },
  {
    question: 'How fast will my SoundCloud order be delivered?',
    answer:
      'Most SoundCloud SMM orders on TrendEvo start processing within minutes. Delivery speed depends on the service type and quantity, but our system is built for fast, reliable fulfillment.',
  },
  {
    question: 'Are SoundCloud plays real?',
    answer:
      'TrendEvo focuses on authentic engagement that helps your SoundCloud profile grow naturally. Our services are designed to deliver meaningful interactions that support long-term visibility and audience trust.',
  },
  {
    question: 'Is it safe to use TrendEvo for my SoundCloud profile?',
    answer:
      'Yes. We use secure order processing and never ask for your SoundCloud password. Your account information stays protected, and our team monitors orders to ensure safe, compliant delivery.',
  },
  {
    question: 'What SoundCloud services does TrendEvo offer?',
    answer:
      'TrendEvo offers a range of SoundCloud SMM services including plays, followers, likes, reposts, and engagement packages tailored for Bangladeshi businesses and creators.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'TrendEvo supports popular local and international payment options so you can order SoundCloud SMM services easily from Bangladesh. Check our payment section for the latest supported methods.',
  },
  {
    question: 'What happens if my SoundCloud order drops?',
    answer:
      'If an order drops within the guarantee period, contact our support team. We review eligible cases and provide refill or resolution according to the service terms.',
  },
  {
    question: 'Do you offer 24/7 support for SoundCloud SMM services?',
    answer:
      'Yes. Our support team is available around the clock in both Bangla and English to help with orders, delivery questions, and account guidance.',
  },
  {
    question: 'Can I place bulk SoundCloud orders?',
    answer:
      'Yes. TrendEvo supports bulk and repeat orders for agencies, resellers, and businesses that need consistent SoundCloud growth at scale.',
  },
  {
    question: 'How do I place a SoundCloud SMM order on TrendEvo?',
    answer:
      'Create an account, choose your SoundCloud service, enter your track or profile link, select a package, and complete payment. You can track order status from your dashboard.',
  },
];

export const data: SoundcloudSmmPanelPageData = {
  seo: {
    title: 'SoundCloud SMM Panel | TrendEvo',
    description:
      'TrendEvo helps Bangladeshi businesses grow their SoundCloud presence with real engagement, reliable results, and locally optimized strategies.',
    canonical: '/soundcloud-smm-panel',
  },

  slug: 'soundcloud-smm-panel',

  schema: {
    name: 'SoundCloud SMM Panel',
    description:
      'TrendEvo helps Bangladeshi businesses grow their SoundCloud presence with real engagement, reliable results, and locally optimized strategies.',
    areaServed: 'Bangladesh',
    url: 'https://trendevo.com/soundcloud-smm-panel',
  },

  workingProcess: {
    badge: 'Working Process',
    title: 'Working Process Of gt<SoundCloud SMM Panel>',
    subtitle: 'A SoundCloud SMM panel helps artists grow plays, followers, and engagement quickly and efficiently, saving time and boosting online presence.',
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
      'Find quick answers about SoundCloud SMM services, delivery, payments, and support on TrendEvo.',
    bg: 'section-7',
    items: faqItems,
  },

  cta: {
    title: 'Ready to gt<Grow Your SoundCloud> with TrendEvo',
    description:
      'Join thousands of users growing faster with TrendEvo SoundCloud SMM Panel. Get started in under 60 seconds with fast delivery, real engagement, and 24/7 support tailored for Bangladeshi businesses.',
    primaryButtonLabel: 'Get Started Now',
    secondaryButtonLabel: 'See all Services',
    secondaryButtonHref: '/services',
    imageSrc: '/images/cta/cta-character-illustration.webp',
    imageAlt: 'Start growing your SoundCloud presence with TrendEvo',
    className: 'mt-16',
  },
};
