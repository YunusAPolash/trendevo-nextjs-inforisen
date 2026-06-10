import type { Metadata } from 'next';
import { pageData } from '@/app/(home)/pageData';
import HeroSection from '@/app/(legal)/_components/hero-section';
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
      <HeroSection
        titlePrefix="Refund"
        titleHighlight="Policy"
        description="At Trend Evo, your satisfaction is our priority. Our transparent Refund Policy ensures hassle-free returns and reliable support, giving you confidence with every service."
        lastUpdated="24/03/2026"
      />
      <ContentSection />
      <FaqSection data={pageData.faq} />
    </>
  );
}
