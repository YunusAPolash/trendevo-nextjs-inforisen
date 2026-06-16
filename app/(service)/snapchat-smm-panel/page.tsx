import type { Metadata } from 'next';
import StatsMarqueeSection from '@/app/about-us/_components/stats-marquee-section';
import ServiceAdvantage from '@/components/sections/service-advantage';
import ServiceHero from '@/components/sections/serviceHero';
import ServiceLeading from '@/components/sections/service-leading';
import SocialService from '@/components/sections/social-service';
import FaqSection from '@/components/sections/faq-section';
import { data as snapchatSmmPanelPageData } from '@/app/(service)/snapchat-smm-panel/page-data';
import SnapchatSmmPanelCtaSection from './_components/cta-section';
import SnapchatSmmPanelWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: snapchatSmmPanelPageData.seo.title,
  description: snapchatSmmPanelPageData.seo.description,
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: snapchatSmmPanelPageData.schema.name,
  description: snapchatSmmPanelPageData.schema.description,
  provider: {
    '@type': 'Organization',
    name: 'TrendEvo',
    url: 'https://trendevo.com',
  },
  areaServed: snapchatSmmPanelPageData.schema.areaServed,
  url: snapchatSmmPanelPageData.schema.url,
};

export default function SnapchatSmmPanelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero slug={snapchatSmmPanelPageData.slug} />
      <SocialService slug={snapchatSmmPanelPageData.slug} />
      <StatsMarqueeSection />
      <ServiceAdvantage slug={snapchatSmmPanelPageData.slug} />
      <SnapchatSmmPanelWorkingProcessSection />
      <ServiceLeading slug={snapchatSmmPanelPageData.slug} />
      <FaqSection data={snapchatSmmPanelPageData.faq} />
      <SnapchatSmmPanelCtaSection />
    </>
  );
}
