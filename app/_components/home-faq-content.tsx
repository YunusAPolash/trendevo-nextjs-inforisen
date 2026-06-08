import type { FaqItem } from '@/components/sections/faq-section';

const defaultAnswer =
  'TrendEvo provides fast, secure SMM services with transparent pricing, multiple payment options, and 24/7 support to help you grow across all major social platforms.';

export const homeFaqItems: FaqItem[] = [
  { question: 'What is an SMM panel and how does TrendEvo work?', answer: defaultAnswer },
  { question: 'How fast will my order be delivered?', answer: defaultAnswer },
  { question: 'Are the followers and engagement real?', answer: defaultAnswer },
  { question: 'What payment methods do you accept?', answer: defaultAnswer },
  { question: 'Do you offer reseller or API access?', answer: defaultAnswer },
  { question: 'Is my account information safe?', answer: defaultAnswer },
  { question: 'What happens if an order drops?', answer: defaultAnswer },
  { question: 'How can I contact support?', answer: defaultAnswer },
  { question: 'Can I place bulk orders?', answer: defaultAnswer },
  { question: 'Do you offer refunds?', answer: defaultAnswer },
];

export const homeFaqHeading = {
  label: 'FAQ',
  title: (
    <>
      <span className="text-gradient">Frequently</span>
      {' Asked Questions'}
    </>
  ),
  subtitle:
    'Find clear and simple explanations to the most common questions about our services, payments, orders, and account management.',
};
