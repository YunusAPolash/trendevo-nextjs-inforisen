import type { Metadata } from 'next';
import { buildServiceProvider } from '@/lib/seo/json-ld';
import FaqSection from '@/components/sections/faq-section';
import { data as facebookSmmPanelPageData } from '@/app/(service)/facebook-smm-panel/page-data';
import FacebookSmmPanelAdvantageSection from './_components/advantage-section';
import FacebookSmmPanelCtaSection from './_components/cta-section';
import FacebookSmmPanelHeroSection from './_components/hero-section';
import FacebookSmmPanelLeadingSection from './_components/leading-section';
import FacebookSmmPanelSocialServiceSection from './_components/social-service-section';
import FacebookSmmPanelWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: facebookSmmPanelPageData.seo.title,
  description: facebookSmmPanelPageData.seo.description,
  alternates: {
    canonical: facebookSmmPanelPageData.seo.canonical,
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: facebookSmmPanelPageData.schema.name,
  description: facebookSmmPanelPageData.schema.description,
  provider: buildServiceProvider(),
  areaServed: facebookSmmPanelPageData.schema.areaServed,
  url: facebookSmmPanelPageData.schema.url,
};

export default function FacebookSmmPanelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <FacebookSmmPanelHeroSection />
      <FacebookSmmPanelSocialServiceSection />
      <FacebookSmmPanelAdvantageSection />
      <FacebookSmmPanelWorkingProcessSection />
      <FacebookSmmPanelLeadingSection />
      <FaqSection data={facebookSmmPanelPageData.faq} />
      <FacebookSmmPanelCtaSection />
    </>
  );
}
