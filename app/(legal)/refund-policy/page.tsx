import type { Metadata } from 'next';
import PageHeroSection from '@/components/sections/page-hero-section';
import ContentSection from '@/app/(legal)/refund-policy/_components/content-section';
import FaqSection from '@/components/sections/faq-section';
import { data as refundPolicyPageData } from '@/app/(legal)/refund-policy/page-data';

export const metadata: Metadata = {
  title: refundPolicyPageData.seo.title,
  description: refundPolicyPageData.seo.description,
};

export default function RefundPolicyPage() {
  return (
    <>
      <PageHeroSection
        titlePrefix={refundPolicyPageData.hero.titlePrefix}
        titleHighlight={refundPolicyPageData.hero.titleHighlight}
        description={refundPolicyPageData.hero.description}
        lastUpdated={refundPolicyPageData.hero.lastUpdated}
      />
      <ContentSection />
      <FaqSection data={refundPolicyPageData.faq} />
    </>
  );
}
