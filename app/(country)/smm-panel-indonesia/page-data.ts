import type { FaqSectionData } from '@/components/sections/faq-section';

type SEO = {
  title: string;
  description: string;
  canonical?: string;
};

type SmmPanelindonesiaPageData = {
  seo: SEO;
  slug: 'smm-panel-indonesia';
  faq: FaqSectionData;
  cta: {
    title: string;
    description: string;
    primaryButtonLabel: string;
    secondaryButtonLabel: string;
    secondaryButtonHref: string;
    imageSrc: string;
    imageAlt: string;
  };
};

const smmPanelindonesiaFaqItems = [
  {
    question: 'What is an SMM panel for Indonesia?',
    answer:
      'An SMM panel for Indonesia is a platform where businesses, creators, and agencies can order social media marketing services such as followers, likes, views, and engagement. TrendEvo provides a trusted Indonesia-focused panel with fast delivery, affordable pricing, and reliable support.',
  },
  {
    question: 'How fast will my SMM order be delivered in Indonesia?',
    answer:
      'Most orders on TrendEvo start processing within minutes after payment. Delivery speed depends on the service and quantity, but our system is built for quick, reliable fulfillment so Indonesian clients can grow their social presence without delays.',
  },
  {
    question: 'Are followers, likes, and views real?',
    answer:
      'TrendEvo focuses on authentic engagement that helps your profiles grow naturally. Our services are designed to improve visibility, credibility, and reach across platforms like Instagram, Facebook, TikTok, and YouTube.',
  },
  {
    question: 'Is TrendEvo safe to use for Indonesian businesses and creators?',
    answer:
      'Yes. We use secure order processing and never ask for your social media passwords. Your account details stay protected, and our team monitors orders to ensure safe, compliant delivery for users in Indonesia.',
  },
  {
    question: 'What SMM services does TrendEvo offer for Indonesian clients?',
    answer:
      'TrendEvo offers a wide range of services for the Indonesia market, including Instagram followers and likes, Facebook page engagement, TikTok views, YouTube subscribers, and more — all available from one easy-to-use dashboard.',
  },
  {
    question: 'What payment methods can I use in Indonesia?',
    answer:
      'TrendEvo supports multiple secure payment options for Indonesian users, including cards, e-wallets, and cryptocurrencies. All transactions are encrypted and processed safely so you can top up and order with confidence.',
  },
  {
    question: 'What happens if my order drops?',
    answer:
      'If an order drops within the guarantee period, contact our support team. We review eligible cases and provide refill or resolution according to the service terms.',
  },
  {
    question: 'Do you offer 24/7 support for Indonesia SMM services?',
    answer:
      'Yes. Our support team is available around the clock to help Indonesian clients with orders, delivery updates, payments, and account guidance whenever you need assistance.',
  },
  {
    question: 'Can I place bulk orders for Indonesia social media growth?',
    answer:
      'Yes. TrendEvo supports bulk and repeat orders for Indonesian agencies, resellers, and businesses that need consistent social media growth at scale.',
  },
  {
    question: 'How do I place an SMM order on TrendEvo from Indonesia?',
    answer:
      'Create an account, choose your service, enter your profile or post link, select a package, and complete payment. You can track order status from your dashboard at any time.',
  },
];

export const data: SmmPanelindonesiaPageData = {
  seo: {
    title: 'SMM Panel Indonesia | TrendEvo',
    description:
      'TrendEvo is a trusted SMM panel for Indonesian businesses and creators. Get fast, reliable, and affordable social media marketing services across Facebook, Instagram, TikTok, and YouTube.',
    canonical: '/smm-panel-indonesia',
  },

  slug: 'smm-panel-indonesia',

  faq: {
    label: 'FAQ',
    title: 'Frequently Asked gt<Questions> for Indonesia',
    subtitle:
      'Find quick answers about TrendEvo SMM panel services in Indonesia — delivery, payments, safety, and support.',
    bg: 'section-7',
    items: smmPanelindonesiaFaqItems,
  },

  cta: {
    title:
      'Ready to gt<Grow Your Social Media in Indonesia> with TrendEvo',
    description:
      'Join thousands of Indonesian businesses and creators growing faster with TrendEvo. Get started in under 60 seconds with fast delivery, real engagement, and 24/7 support tailored for the Indonesia market.',
    primaryButtonLabel: 'Get Started Now',
    secondaryButtonLabel: 'See all Services',
    secondaryButtonHref: '/services',
    imageSrc: '/images/cta/cta-character-illustration.webp',
    imageAlt:
      'Start growing your social media presence in Indonesia with TrendEvo',
  },
};
