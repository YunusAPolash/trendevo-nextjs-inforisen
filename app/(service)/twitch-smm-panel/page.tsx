import type { Metadata } from 'next';
import { buildServiceProvider } from '@/lib/seo/json-ld';
import StatsMarqueeSection from '@/app/about-us/_components/stats-marquee-section';
import ServiceAdvantage from '@/components/sections/service-advantage';
import ServiceHero from '@/components/sections/serviceHero';
import ServiceLeading from '@/components/sections/service-leading';
import SocialService from '@/components/sections/social-service';
import FaqSection from '@/components/sections/faq-section';
import { data as twitchSmmPanelPageData } from '@/app/(service)/twitch-smm-panel/page-data';
import TwitchSmmPanelCtaSection from './_components/cta-section';
import TwitchSmmPanelWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: twitchSmmPanelPageData.seo.title,
  description: twitchSmmPanelPageData.seo.description,
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: twitchSmmPanelPageData.schema.name,
  description: twitchSmmPanelPageData.schema.description,
  provider: buildServiceProvider(),
  areaServed: twitchSmmPanelPageData.schema.areaServed,
  url: twitchSmmPanelPageData.schema.url,
};

export default function TwitchSmmPanelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero slug={twitchSmmPanelPageData.slug} />
      <SocialService slug={twitchSmmPanelPageData.slug} />
      <StatsMarqueeSection />
      <ServiceAdvantage slug={twitchSmmPanelPageData.slug} />
      <TwitchSmmPanelWorkingProcessSection />
      <ServiceLeading slug={twitchSmmPanelPageData.slug} />
      <FaqSection data={twitchSmmPanelPageData.faq} />
      <TwitchSmmPanelCtaSection />
    </>
  );
}
