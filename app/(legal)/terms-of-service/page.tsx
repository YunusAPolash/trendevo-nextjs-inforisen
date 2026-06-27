import type { Metadata } from 'next';
import TermsContentSection from '@/app/(legal)/_components/content-section';
import PageHeroSection from '@/components/sections/page-hero-section';
import FaqSection from '@/components/sections/faq-section';
import { data as termsOfServicePageData } from '@/app/(legal)/terms-of-service/page-data';

export const metadata: Metadata = {
  title: termsOfServicePageData.seo.title,
  description: termsOfServicePageData.seo.description,
};

export default function TermsOfServicePage() {
  return (
    <>
      <PageHeroSection
        titlePrefix={termsOfServicePageData.hero.titlePrefix}
        titleHighlight={termsOfServicePageData.hero.titleHighlight}
        description={termsOfServicePageData.hero.description}
        lastUpdated={termsOfServicePageData.hero.lastUpdated}
      />
      <TermsContentSection />
      <FaqSection data={termsOfServicePageData.faq} />
    </>
  );
}
