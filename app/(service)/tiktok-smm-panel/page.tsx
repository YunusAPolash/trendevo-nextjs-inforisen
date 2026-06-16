import type { Metadata } from 'next';
import StatsMarqueeSection from '@/app/about-us/_components/stats-marquee-section';
import ServiceAdvantage from '@/components/sections/service-advantage';
import ServiceHero from '@/components/sections/serviceHero';
import ServiceLeading from '@/components/sections/service-leading';
import SocialService from '@/components/sections/social-service';
import FaqSection from '@/components/sections/faq-section';
import { data as tiktokSmmPanelPageData } from '@/app/(service)/tiktok-smm-panel/page-data';
import TiktokSmmPanelCtaSection from './_components/cta-section';
import TiktokSmmPanelWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: tiktokSmmPanelPageData.seo.title,
  description: tiktokSmmPanelPageData.seo.description,
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
      <ServiceHero slug={tiktokSmmPanelPageData.slug} />
      <SocialService slug={tiktokSmmPanelPageData.slug} />
      <StatsMarqueeSection />
      <ServiceAdvantage slug={tiktokSmmPanelPageData.slug} />
      <TiktokSmmPanelWorkingProcessSection />
      <ServiceLeading slug={tiktokSmmPanelPageData.slug} />
      <FaqSection data={tiktokSmmPanelPageData.faq} />
      <TiktokSmmPanelCtaSection />
    </>
  );
}
