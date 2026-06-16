import type { Metadata } from 'next';
import StatsMarqueeSection from '@/app/about-us/_components/stats-marquee-section';
import ServiceAdvantage from '@/components/sections/service-advantage';
import ServiceHero from '@/components/sections/serviceHero';
import ServiceLeading from '@/components/sections/service-leading';
import SocialService from '@/components/sections/social-service';
import FaqSection from '@/components/sections/faq-section';
import { data as soundcloudSmmPanelPageData } from '@/app/(service)/soundcloud-smm-panel/page-data';
import SoundcloudSmmPanelCtaSection from './_components/cta-section';
import SoundcloudSmmPanelWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: soundcloudSmmPanelPageData.seo.title,
  description: soundcloudSmmPanelPageData.seo.description,
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: soundcloudSmmPanelPageData.schema.name,
  description: soundcloudSmmPanelPageData.schema.description,
  provider: {
    '@type': 'Organization',
    name: 'TrendEvo',
    url: 'https://trendevo.com',
  },
  areaServed: soundcloudSmmPanelPageData.schema.areaServed,
  url: soundcloudSmmPanelPageData.schema.url,
};

export default function SoundcloudSmmPanelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero slug={soundcloudSmmPanelPageData.slug} />
      <SocialService slug={soundcloudSmmPanelPageData.slug} />
      <StatsMarqueeSection />
      <ServiceAdvantage slug={soundcloudSmmPanelPageData.slug} />
      <SoundcloudSmmPanelWorkingProcessSection />
      <ServiceLeading slug={soundcloudSmmPanelPageData.slug} />
      <FaqSection data={soundcloudSmmPanelPageData.faq} />
      <SoundcloudSmmPanelCtaSection />
    </>
  );
}
