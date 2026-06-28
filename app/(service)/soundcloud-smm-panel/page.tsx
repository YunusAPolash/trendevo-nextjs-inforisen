import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import { data as soundcloudSmmPanelPageData } from '@/app/(service)/soundcloud-smm-panel/page-data';
import SoundcloudSmmPanelAdvantageSection from './_components/advantage-section';
import SoundcloudSmmPanelCtaSection from './_components/cta-section';
import SoundcloudSmmPanelHeroSection from './_components/hero-section';
import SoundcloudSmmPanelLeadingSection from './_components/leading-section';
import SoundcloudSmmPanelSocialServiceSection from './_components/social-service-section';
import SoundcloudSmmPanelWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: soundcloudSmmPanelPageData.seo.title,
  description: soundcloudSmmPanelPageData.seo.description,
  alternates: {
    canonical: soundcloudSmmPanelPageData.seo.canonical,
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: soundcloudSmmPanelPageData.schema.name,
  description: soundcloudSmmPanelPageData.schema.description,
  provider: {
    '@type': 'Organization',
    name: 'TrendEvo',
    url: 'https://trendevo.com',
  },
  areaServed: soundcloudSmmPanelPageData.schema.areaServed,
  url: soundcloudSmmPanelPageData.schema.url,
};

export default function SoundcloudSmmPanelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SoundcloudSmmPanelHeroSection />
      <SoundcloudSmmPanelSocialServiceSection />
      <SoundcloudSmmPanelAdvantageSection />
      <SoundcloudSmmPanelWorkingProcessSection />
      <SoundcloudSmmPanelLeadingSection />
      <FaqSection data={soundcloudSmmPanelPageData.faq} />
      <SoundcloudSmmPanelCtaSection />
    </>
  );
}
