import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import { data as snapchatSmmPanelPageData } from '@/app/(service)/snapchat-smm-panel/page-data';
import SnapchatSmmPanelAdvantageSection from './_components/advantage-section';
import SnapchatSmmPanelCtaSection from './_components/cta-section';
import SnapchatSmmPanelHeroSection from './_components/hero-section';
import SnapchatSmmPanelLeadingSection from './_components/leading-section';
import SnapchatSmmPanelSocialServiceSection from './_components/social-service-section';
import SnapchatSmmPanelWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: snapchatSmmPanelPageData.seo.title,
  description: snapchatSmmPanelPageData.seo.description,
  alternates: {
    canonical: snapchatSmmPanelPageData.seo.canonical,
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: snapchatSmmPanelPageData.schema.name,
  description: snapchatSmmPanelPageData.schema.description,
  provider: {
    '@type': 'Organization',
    name: 'TrendEvo',
    url: 'https://trendevo.com',
  },
  areaServed: snapchatSmmPanelPageData.schema.areaServed,
  url: snapchatSmmPanelPageData.schema.url,
};

export default function SnapchatSmmPanelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SnapchatSmmPanelHeroSection />
      <SnapchatSmmPanelSocialServiceSection />
      <SnapchatSmmPanelAdvantageSection />
      <SnapchatSmmPanelWorkingProcessSection />
      <SnapchatSmmPanelLeadingSection />
      <FaqSection data={snapchatSmmPanelPageData.faq} />
      <SnapchatSmmPanelCtaSection />
    </>
  );
}
