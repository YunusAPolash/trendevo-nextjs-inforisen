import type { FaqSectionData } from '@/components/sections/faq-section';

type SEO = {
  title: string;
  description: string;
  canonical?: string;
};

type LegalPageHero = {
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  lastUpdated: string;
};

const defaultFaqAnswer =
  'TrendEvo provides fast, secure SMM services with transparent pricing, multiple payment options, and 24/7 support to help you grow across all major social platforms.';

const defaultFaqItems = [
  'What is an SMM panel and how does TrendEvo work?',
  'How fast will my order be delivered?',
  'Are the followers and engagement real?',
  'What payment methods do you accept?',
  'Do you offer reseller or API access?',
  'Is my account information safe?',
  'What happens if an order drops?',
  'How can I contact support?',
  'Can I place bulk orders?',
  'Do you offer refunds?',
].map((question) => ({ question, answer: defaultFaqAnswer }));

type TermsOfServicePageData = {
  seo: SEO;
  hero: LegalPageHero;
  faq: FaqSectionData;
};

export const data: TermsOfServicePageData = {
  seo: {
    title: 'Terms of Service | TrendEvo',
    description:
      'Read the TrendEvo Terms of Service before creating an account or placing an order. Plain-language rules for using our SMM panel.',
    canonical: '/terms-of-services',
  },

  hero: {
    titlePrefix: 'Terms Of',
    titleHighlight: 'Services',
    description:
      'Before registering and ordering services, it is important to read and understand the Terms of Service carefully. By using the services offered by smmxp.org, you agree to abide by these terms.',
    lastUpdated: '24/03/2026',
  },

  faq: {
    label: 'FAQ',
    title: 'gt<Frequently> Asked Questions',
    subtitle:
      'Find clear and simple explanations to the most common questions about our services, payments, orders, and account management.',
    bg: 'section-7',
    items: defaultFaqItems,
  },
};
