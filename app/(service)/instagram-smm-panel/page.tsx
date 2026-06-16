import type { Metadata } from 'next';
import StatsMarqueeSection from '@/app/about-us/_components/stats-marquee-section';
import ServiceAdvantage from '@/components/sections/service-advantage';
import ServiceHero from '@/components/sections/serviceHero';
import ServiceLeading from '@/components/sections/service-leading';
import SocialService from '@/components/sections/social-service';
import FaqSection from '@/components/sections/faq-section';
import { data as instagramSmmPanelPageData } from '@/app/(service)/instagram-smm-panel/page-data';
import InstagramSmmPanelCtaSection from './_components/cta-section';
import InstagramSmmPanelWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: instagramSmmPanelPageData.seo.title,
  description: instagramSmmPanelPageData.seo.description,
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: instagramSmmPanelPageData.schema.name,
  description: instagramSmmPanelPageData.schema.description,
  provider: {
    '@type': 'Organization',
    name: 'TrendEvo',
    url: 'https://trendevo.com',
  },
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
      <ServiceHero slug={instagramSmmPanelPageData.slug} />
      <SocialService slug={instagramSmmPanelPageData.slug} />
      <StatsMarqueeSection />
      <ServiceAdvantage slug={instagramSmmPanelPageData.slug} />
      <InstagramSmmPanelWorkingProcessSection />
      <ServiceLeading slug={instagramSmmPanelPageData.slug} />
      <FaqSection data={instagramSmmPanelPageData.faq} />
      <InstagramSmmPanelCtaSection />
    </>
  );
}
