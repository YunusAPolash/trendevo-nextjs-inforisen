import type { Metadata } from 'next';
import StatsMarqueeSection from '@/app/about-us/_components/stats-marquee-section';
import ServiceAdvantage from '@/components/sections/service-advantage';
import ServiceHero from '@/components/sections/serviceHero';
import ServiceLeading from '@/components/sections/service-leading';
import SocialService from '@/components/sections/social-service';
import FaqSection from '@/components/sections/faq-section';
import { data as telegramSmmPanelPageData } from '@/app/(service)/telegram-smm-panel/page-data';
import TelegramSmmPanelCtaSection from './_components/cta-section';
import TelegramSmmPanelWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: telegramSmmPanelPageData.seo.title,
  description: telegramSmmPanelPageData.seo.description,
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: telegramSmmPanelPageData.schema.name,
  description: telegramSmmPanelPageData.schema.description,
  provider: {
    '@type': 'Organization',
    name: 'TrendEvo',
    url: 'https://trendevo.com',
  },
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
      <ServiceHero slug={telegramSmmPanelPageData.slug} />
      <SocialService slug={telegramSmmPanelPageData.slug} />
      <StatsMarqueeSection />
      <ServiceAdvantage slug={telegramSmmPanelPageData.slug} />
      <TelegramSmmPanelWorkingProcessSection />
      <ServiceLeading slug={telegramSmmPanelPageData.slug} />
      <FaqSection data={telegramSmmPanelPageData.faq} />
      <TelegramSmmPanelCtaSection />
    </>
  );
}
