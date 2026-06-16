import type { Metadata } from 'next';
import StatsMarqueeSection from '@/app/about-us/_components/stats-marquee-section';
import ServiceAdvantage from '@/components/sections/service-advantage';
import ServiceHero from '@/components/sections/serviceHero';
import ServiceLeading from '@/components/sections/service-leading';
import SocialService from '@/components/sections/social-service';
import FaqSection from '@/components/sections/faq-section';
import { data as youtubeSmmPanelPageData } from '@/app/(service)/youtube-smm-panel/page-data';
import YoutubeSmmPanelCtaSection from './_components/cta-section';
import YoutubeSmmPanelWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: youtubeSmmPanelPageData.seo.title,
  description: youtubeSmmPanelPageData.seo.description,
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: youtubeSmmPanelPageData.schema.name,
  description: youtubeSmmPanelPageData.schema.description,
  provider: {
    '@type': 'Organization',
    name: 'TrendEvo',
    url: 'https://trendevo.com',
  },
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
      <ServiceHero slug={youtubeSmmPanelPageData.slug} />
      <SocialService slug={youtubeSmmPanelPageData.slug} />
      <StatsMarqueeSection />
      <ServiceAdvantage slug={youtubeSmmPanelPageData.slug} />
      <YoutubeSmmPanelWorkingProcessSection />
      <ServiceLeading slug={youtubeSmmPanelPageData.slug} />
      <FaqSection data={youtubeSmmPanelPageData.faq} />
      <YoutubeSmmPanelCtaSection />
    </>
  );
}
