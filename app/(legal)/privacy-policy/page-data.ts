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

type PrivacyPolicyPageData = {
  seo: SEO;
  hero: LegalPageHero;
  faq: FaqSectionData;
};

export const data: PrivacyPolicyPageData = {
  seo: {
    title: 'Privacy Policy | TrendEvo',
    description:
      'Read the TrendEvo Privacy Policy to understand what personal data we collect, how we use it, who we share it with, and your rights.',
    canonical: '/privacy-policy',
  },

  hero: {
    titlePrefix: 'Privacy',
    titleHighlight: 'Policy',
    description:
      'Your privacy matters to us. This page explains what personal information we collect, how we use it, and what rights you have over your own data.',
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
