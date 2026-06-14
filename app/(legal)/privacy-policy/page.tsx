import type { Metadata } from 'next';
import PageHeroSection from '@/components/sections/page-hero-section';
import ContentSection from '@/app/(legal)/privacy-policy/_components/content-section';
import FaqSection from '@/components/sections/faq-section';
import { data as privacyPolicyPageData } from '@/app/(legal)/privacy-policy/page-data';

export const metadata: Metadata = {
  title: privacyPolicyPageData.seo.title,
  description: privacyPolicyPageData.seo.description,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeroSection
        titlePrefix={privacyPolicyPageData.hero.titlePrefix}
        titleHighlight={privacyPolicyPageData.hero.titleHighlight}
        description={privacyPolicyPageData.hero.description}
        lastUpdated={privacyPolicyPageData.hero.lastUpdated}
      />
      <ContentSection />
      <FaqSection data={privacyPolicyPageData.faq} />
    </>
  );
}
