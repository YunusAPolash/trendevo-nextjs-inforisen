import type { Metadata } from 'next';
import { buildServiceProvider } from '@/lib/seo/json-ld';
import FaqSection from '@/components/sections/faq-section';
import { data as instagramSmmPanelPageData } from '@/app/(service)/instagram-smm-panel/page-data';
import InstagramSmmPanelAdvantageSection from './_components/advantage-section';
import InstagramSmmPanelCtaSection from './_components/cta-section';
import InstagramSmmPanelHeroSection from './_components/hero-section';
import InstagramSmmPanelLeadingSection from './_components/leading-section';
import InstagramSmmPanelSocialServiceSection from './_components/social-service-section';
import InstagramSmmPanelWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: instagramSmmPanelPageData.seo.title,
  description: instagramSmmPanelPageData.seo.description,
  alternates: {
    canonical: instagramSmmPanelPageData.seo.canonical,
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: instagramSmmPanelPageData.schema.name,
  description: instagramSmmPanelPageData.schema.description,
  provider: buildServiceProvider(),
  areaServed: instagramSmmPanelPageData.schema.areaServed,
  url: instagramSmmPanelPageData.schema.url,
};

export default function InstagramSmmPanelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <InstagramSmmPanelHeroSection />
      <InstagramSmmPanelSocialServiceSection />
      <InstagramSmmPanelAdvantageSection />
      <InstagramSmmPanelWorkingProcessSection />
      <InstagramSmmPanelLeadingSection />
      <FaqSection data={instagramSmmPanelPageData.faq} />
      <InstagramSmmPanelCtaSection />
    </>
  );
}
