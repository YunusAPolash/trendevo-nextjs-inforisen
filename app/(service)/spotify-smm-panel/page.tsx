import type { Metadata } from 'next';
import StatsMarqueeSection from '@/app/about-us/_components/stats-marquee-section';
import ServiceAdvantage from '@/components/sections/service-advantage';
import ServiceHero from '@/components/sections/serviceHero';
import ServiceLeading from '@/components/sections/service-leading';
import SocialService from '@/components/sections/social-service';
import FaqSection from '@/components/sections/faq-section';
import { data as spotifySmmPanelPageData } from '@/app/(service)/spotify-smm-panel/page-data';
import SpotifySmmPanelCtaSection from './_components/cta-section';
import SpotifySmmPanelWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: spotifySmmPanelPageData.seo.title,
  description: spotifySmmPanelPageData.seo.description,
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: spotifySmmPanelPageData.schema.name,
  description: spotifySmmPanelPageData.schema.description,
  provider: {
    '@type': 'Organization',
    name: 'TrendEvo',
    url: 'https://trendevo.com',
  },
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
      <ServiceHero slug={spotifySmmPanelPageData.slug} />
      <SocialService slug={spotifySmmPanelPageData.slug} />
      <StatsMarqueeSection />
      <ServiceAdvantage slug={spotifySmmPanelPageData.slug} />
      <SpotifySmmPanelWorkingProcessSection />
      <ServiceLeading slug={spotifySmmPanelPageData.slug} />
      <FaqSection data={spotifySmmPanelPageData.faq} />
      <SpotifySmmPanelCtaSection />
    </>
  );
}
