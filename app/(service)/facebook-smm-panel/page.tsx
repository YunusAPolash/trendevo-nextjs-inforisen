import type { Metadata } from 'next';
import AdvantagesSection from '@/app/(home)/_components/advantages-section';
import StatsMarqueeSection from '@/app/about-us/_components/stats-marquee-section';
import ServiceAdvantage from '@/components/sections/service-advantage';
import ServiceHero from '@/components/sections/serviceHero';
import ServiceLeading from '@/components/sections/service-leading';
import SocialService from '@/components/sections/social-service';
import FaqSection from '@/components/sections/faq-section';
import { data as facebookSmmPanelPageData } from '@/app/(service)/facebook-smm-panel/page-data';
import FacebookSmmPanelCtaSection from './_components/cta-section';
import FacebookSmmPanelWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: facebookSmmPanelPageData.seo.title,
  description: facebookSmmPanelPageData.seo.description,
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: facebookSmmPanelPageData.schema.name,
  description: facebookSmmPanelPageData.schema.description,
  provider: {
    '@type': 'Organization',
    name: 'TrendEvo',
    url: 'https://trendevo.com',
  },
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
      <ServiceHero slug={facebookSmmPanelPageData.slug} />
      <SocialService slug={facebookSmmPanelPageData.slug} />
      <StatsMarqueeSection />
      <ServiceAdvantage slug={facebookSmmPanelPageData.slug} />
      <FacebookSmmPanelWorkingProcessSection />
      <ServiceLeading slug={facebookSmmPanelPageData.slug} />
      <FaqSection data={facebookSmmPanelPageData.faq} />
      <FacebookSmmPanelCtaSection />
    </>
  );
}
