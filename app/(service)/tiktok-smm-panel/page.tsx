import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import { data as tiktokSmmPanelPageData } from '@/app/(service)/tiktok-smm-panel/page-data';
import TiktokSmmPanelAdvantageSection from './_components/advantage-section';
import TiktokSmmPanelCtaSection from './_components/cta-section';
import TiktokSmmPanelHeroSection from './_components/hero-section';
import TiktokSmmPanelLeadingSection from './_components/leading-section';
import TiktokSmmPanelSocialServiceSection from './_components/social-service-section';
import TiktokSmmPanelWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: tiktokSmmPanelPageData.seo.title,
  description: tiktokSmmPanelPageData.seo.description,
  alternates: {
    canonical: tiktokSmmPanelPageData.seo.canonical,
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: tiktokSmmPanelPageData.schema.name,
  description: tiktokSmmPanelPageData.schema.description,
  provider: {
    '@type': 'Organization',
    name: 'TrendEvo',
    url: 'https://trendevo.com',
  },
  areaServed: tiktokSmmPanelPageData.schema.areaServed,
  url: tiktokSmmPanelPageData.schema.url,
};

export default function TiktokSmmPanelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <TiktokSmmPanelHeroSection />
      <TiktokSmmPanelSocialServiceSection />
      <TiktokSmmPanelAdvantageSection />
      <TiktokSmmPanelWorkingProcessSection />
      <TiktokSmmPanelLeadingSection />
      <FaqSection data={tiktokSmmPanelPageData.faq} />
      <TiktokSmmPanelCtaSection />
    </>
  );
}
