import type { Metadata } from 'next';
import { buildServiceProvider } from '@/lib/seo/json-ld';
import FaqSection from '@/components/sections/faq-section';
import { data as telegramSmmPanelPageData } from '@/app/(service)/telegram-smm-panel/page-data';
import TelegramSmmPanelAdvantageSection from './_components/advantage-section';
import TelegramSmmPanelCtaSection from './_components/cta-section';
import TelegramSmmPanelHeroSection from './_components/hero-section';
import TelegramSmmPanelLeadingSection from './_components/leading-section';
import TelegramSmmPanelSocialServiceSection from './_components/social-service-section';
import TelegramSmmPanelWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: telegramSmmPanelPageData.seo.title,
  description: telegramSmmPanelPageData.seo.description,
  alternates: {
    canonical: telegramSmmPanelPageData.seo.canonical,
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: telegramSmmPanelPageData.schema.name,
  description: telegramSmmPanelPageData.schema.description,
  provider: buildServiceProvider(),
  areaServed: telegramSmmPanelPageData.schema.areaServed,
  url: telegramSmmPanelPageData.schema.url,
};

export default function TelegramSmmPanelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <TelegramSmmPanelHeroSection />
      <TelegramSmmPanelSocialServiceSection />
      <TelegramSmmPanelAdvantageSection />
      <TelegramSmmPanelWorkingProcessSection />
      <TelegramSmmPanelLeadingSection />
      <FaqSection data={telegramSmmPanelPageData.faq} />
      <TelegramSmmPanelCtaSection />
    </>
  );
}
