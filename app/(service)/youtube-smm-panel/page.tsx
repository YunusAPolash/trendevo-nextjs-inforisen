import type { Metadata } from 'next';
import { buildServiceProvider } from '@/lib/seo/json-ld';
import FaqSection from '@/components/sections/faq-section';
import { data as youtubeSmmPanelPageData } from '@/app/(service)/youtube-smm-panel/page-data';
import YoutubeSmmPanelAdvantageSection from './_components/advantage-section';
import YoutubeSmmPanelCtaSection from './_components/cta-section';
import YoutubeSmmPanelHeroSection from './_components/hero-section';
import YoutubeSmmPanelLeadingSection from './_components/leading-section';
import YoutubeSmmPanelSocialServiceSection from './_components/social-service-section';
import YoutubeSmmPanelWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: youtubeSmmPanelPageData.seo.title,
  description: youtubeSmmPanelPageData.seo.description,
  alternates: {
    canonical: youtubeSmmPanelPageData.seo.canonical,
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: youtubeSmmPanelPageData.schema.name,
  description: youtubeSmmPanelPageData.schema.description,
  provider: buildServiceProvider(),
  areaServed: youtubeSmmPanelPageData.schema.areaServed,
  url: youtubeSmmPanelPageData.schema.url,
};

export default function YoutubeSmmPanelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <YoutubeSmmPanelHeroSection />
      <YoutubeSmmPanelSocialServiceSection />
      <YoutubeSmmPanelAdvantageSection />
      <YoutubeSmmPanelWorkingProcessSection />
      <YoutubeSmmPanelLeadingSection />
      <FaqSection data={youtubeSmmPanelPageData.faq} />
      <YoutubeSmmPanelCtaSection />
    </>
  );
}
