import type { Metadata } from 'next';
import StatsMarqueeSection from '@/app/about-us/_components/stats-marquee-section';
import ServiceAdvantage from '@/components/sections/service-advantage';
import ServiceHero from '@/components/sections/serviceHero';
import ServiceLeading from '@/components/sections/service-leading';
import SocialService from '@/components/sections/social-service';
import FaqSection from '@/components/sections/faq-section';
import { data as xTwitterSmmPanelPageData } from '@/app/(service)/x-twitter-smm-panel/page-data';
import XTwitterSmmPanelCtaSection from './_components/cta-section';
import XTwitterSmmPanelWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: xTwitterSmmPanelPageData.seo.title,
  description: xTwitterSmmPanelPageData.seo.description,
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
      <ServiceHero slug={xTwitterSmmPanelPageData.slug} />
      <SocialService slug={xTwitterSmmPanelPageData.slug} />
      <StatsMarqueeSection />
      <ServiceAdvantage slug={xTwitterSmmPanelPageData.slug} />
      <XTwitterSmmPanelWorkingProcessSection />
      <ServiceLeading slug={xTwitterSmmPanelPageData.slug} />
      <FaqSection data={xTwitterSmmPanelPageData.faq} />
      <XTwitterSmmPanelCtaSection />
    </>
  );
}
