import type { Metadata } from 'next';
import PageHeroSection from '@/components/sections/page-hero-section';
import ContentSection from '@/app/(legal)/refund-policy/_components/content-section';
import FaqSection from '@/components/sections/faq-section';

export const metadata: Metadata = {
  title: 'Refund Policy | TrendEvo',
  description:
    'Read the TrendEvo Refund Policy to understand when refunds apply, how to request one, and what to expect from our support team.',
};

export default function RefundPolicyPage() {
  return (
    <>
      <PageHeroSection
        titlePrefix="Refund"
        titleHighlight="Policy"
        description="At Trend Evo, your satisfaction is our priority. Our transparent Refund Policy ensures hassle-free returns and reliable support, giving you confidence with every service."
        lastUpdated="24/03/2026"
      />
      <ContentSection />
      <FaqSection />
    </>
  );
}
