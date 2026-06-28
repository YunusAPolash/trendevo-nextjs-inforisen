import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import { data as xTwitterSmmPanelPageData } from '@/app/(service)/x-twitter-smm-panel/page-data';
import XTwitterSmmPanelAdvantageSection from './_components/advantage-section';
import XTwitterSmmPanelCtaSection from './_components/cta-section';
import XTwitterSmmPanelHeroSection from './_components/hero-section';
import XTwitterSmmPanelLeadingSection from './_components/leading-section';
import XTwitterSmmPanelSocialServiceSection from './_components/social-service-section';
import XTwitterSmmPanelWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: xTwitterSmmPanelPageData.seo.title,
  description: xTwitterSmmPanelPageData.seo.description,
  alternates: {
    canonical: xTwitterSmmPanelPageData.seo.canonical,
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: xTwitterSmmPanelPageData.schema.name,
  description: xTwitterSmmPanelPageData.schema.description,
  provider: {
    '@type': 'Organization',
    name: 'TrendEvo',
    url: 'https://trendevo.com',
  },
  areaServed: xTwitterSmmPanelPageData.schema.areaServed,
  url: xTwitterSmmPanelPageData.schema.url,
};

export default function XTwitterSmmPanelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <XTwitterSmmPanelHeroSection />
      <XTwitterSmmPanelSocialServiceSection />
      <XTwitterSmmPanelAdvantageSection />
      <XTwitterSmmPanelWorkingProcessSection />
      <XTwitterSmmPanelLeadingSection />
      <FaqSection data={xTwitterSmmPanelPageData.faq} />
      <XTwitterSmmPanelCtaSection />
    </>
  );
}
