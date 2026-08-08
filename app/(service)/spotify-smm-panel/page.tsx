import type { Metadata } from 'next';
import { buildServiceProvider } from '@/lib/seo/json-ld';
import FaqSection from '@/components/sections/faq-section';
import { data as spotifySmmPanelPageData } from '@/app/(service)/spotify-smm-panel/page-data';
import SpotifySmmPanelAdvantageSection from './_components/advantage-section';
import SpotifySmmPanelCtaSection from './_components/cta-section';
import SpotifySmmPanelHeroSection from './_components/hero-section';
import SpotifySmmPanelLeadingSection from './_components/leading-section';
import SpotifySmmPanelSocialServiceSection from './_components/social-service-section';
import SpotifySmmPanelWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: spotifySmmPanelPageData.seo.title,
  description: spotifySmmPanelPageData.seo.description,
  alternates: {
    canonical: spotifySmmPanelPageData.seo.canonical,
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: spotifySmmPanelPageData.schema.name,
  description: spotifySmmPanelPageData.schema.description,
  provider: buildServiceProvider(),
  areaServed: spotifySmmPanelPageData.schema.areaServed,
  url: spotifySmmPanelPageData.schema.url,
};

export default function SpotifySmmPanelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SpotifySmmPanelHeroSection />
      <SpotifySmmPanelSocialServiceSection />
      <SpotifySmmPanelAdvantageSection />
      <SpotifySmmPanelWorkingProcessSection />
      <SpotifySmmPanelLeadingSection />
      <FaqSection data={spotifySmmPanelPageData.faq} />
      <SpotifySmmPanelCtaSection />
    </>
  );
}
