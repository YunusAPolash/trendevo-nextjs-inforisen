import type { FaqSectionData } from '@/components/sections/faq-section';
import type { ServiceWorkingProcessStep } from '@/components/sections/service-working-process-section';

type SEO = {
  title: string;
  description: string;
  canonical?: string;
};

type InstagramSmmPanelPageData = {
  seo: SEO;
  slug: 'instagram-smm-panel';
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
    question: 'What is a Instagram SMM panel?',
    answer:
      'An Instagram SMM panel lets you order services like followers, likes, views, comments, and story engagement. TrendEvo makes it easy to grow your Instagram profile or business account with fast delivery and transparent tracking.',
  },
  {
    question: 'How fast will my Instagram order be delivered?',
    answer:
      'Instagram orders on TrendEvo typically begin processing shortly after payment. Delivery time varies by service and quantity, but our platform is optimized for quick, reliable fulfillment.',
  },
  {
    question: 'Are Instagram followers real?',
    answer:
      'TrendEvo prioritizes authentic engagement that supports natural Instagram growth. Our services help improve visibility and credibility without compromising your account reputation.',
  },
  {
    question: 'Is it safe to use TrendEvo for my Instagram account?',
    answer:
      'Yes. We never require your Instagram password. Orders are processed securely, and our team follows best practices to help protect your account while delivering services safely.',
  },
  {
    question: 'What Instagram services does TrendEvo offer?',
    answer:
      'TrendEvo offers a range of Instagram SMM services including followers, post likes, reel views, comments, story views, and engagement packages tailored for Bangladeshi businesses and creators.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'TrendEvo supports popular local and international payment options so you can order Instagram SMM services easily from Bangladesh. Check our payment section for the latest supported methods.',
  },
  {
    question: 'What happens if my Instagram order drops?',
    answer:
      'If an order drops within the guarantee period, contact our support team. We review eligible cases and provide refill or resolution according to the service terms.',
  },
  {
    question: 'Do you offer 24/7 support for Instagram SMM services?',
    answer:
      'Yes. Our support team is available around the clock in both Bangla and English to help with orders, delivery questions, and account guidance.',
  },
  {
    question: 'Can I place bulk Instagram orders?',
    answer:
      'Yes. TrendEvo supports bulk and repeat orders for agencies, resellers, and businesses that need consistent Instagram growth at scale.',
  },
  {
    question: 'How do I place a Instagram SMM order on TrendEvo?',
    answer:
      'Create an account, choose your Instagram service, enter your profile or post link, select a package, and complete payment. You can track order status from your dashboard.',
  },
];

export const data: InstagramSmmPanelPageData = {
  seo: {
    title: 'Instagram SMM Panel | TrendEvo',
    description:
      'TrendEvo helps Bangladeshi businesses grow their Instagram presence with real engagement, reliable results, and locally optimized strategies.',
    canonical: '/instagram-smm-panel',
  },

  slug: 'instagram-smm-panel',

  schema: {
    name: 'Instagram SMM Panel',
    description:
      'TrendEvo helps Bangladeshi businesses grow their Instagram presence with real engagement, reliable results, and locally optimized strategies.',
    areaServed: 'Bangladesh',
    url: 'https://trendevo.com/instagram-smm-panel',
  },

  workingProcess: {
    badge: 'Working Process',
    title: 'Working Process Of gt<Instagram SMM Panel>',
    subtitle: 'An Instagram SMM panel helps businesses grow followers, likes, and engagement quickly and efficiently, saving time and boosting online presence.',
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
      'Find quick answers about Instagram SMM services, delivery, payments, and support on TrendEvo.',
    bg: 'section-7',
    items: faqItems,
  },

  cta: {
    title: 'Ready to gt<Grow Your Instagram> with TrendEvo',
    description:
      'Join thousands of users growing faster with TrendEvo Instagram SMM Panel. Get started in under 60 seconds with fast delivery, real engagement, and 24/7 support tailored for Bangladeshi businesses.',
    primaryButtonLabel: 'Get Started Now',
    secondaryButtonLabel: 'See all Services',
    secondaryButtonHref: '/services',
    imageSrc: '/images/cta/cta-character-illustration.webp',
    imageAlt: 'Start growing your Instagram presence with TrendEvo',
    className: 'mt-16',
  },
};
