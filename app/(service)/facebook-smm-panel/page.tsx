import type { Metadata } from 'next';

import ServiceHero from '@/components/serviceSmmPanel/ServiceHero';
import ServiceAdvantage from '@/components/serviceSmmPanel/service-advantage';
import ServiceLeading from '@/components/serviceSmmPanel/service-leading';
import ServiceWorkingProcess from '@/components/serviceSmmPanel/service-workingProcess';
import SocialService from '@/components/serviceSmmPanel/social-service';
import StatsMarqueeSection from '@/app/about-us/_components/stats-marquee-section';
import {
  facebookFaqHeading,
  facebookFaqItems,
} from '@/components/serviceSmmPanel/service-faq-content';
import FaqSection from '@/components/sections/faq-section';

export const metadata: Metadata = {
  title: 'Facebook SMM Panel | TrendEvo',
  description:
    'TrendEvo helps Bangladeshi businesses grow their Facebook presence with real engagement, reliable results, and locally optimized strategies.',
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Facebook SMM Panel',
  description:
    'TrendEvo helps Bangladeshi businesses grow their Facebook presence with real engagement, reliable results, and locally optimized strategies.',
  provider: {
    '@type': 'Organization',
    name: 'TrendEvo',
    url: 'https://trendevo.com',
  },
  areaServed: 'Bangladesh',
  url: 'https://trendevo.com/facebook-smm-panel',
};

export default function FacebookSmmPanelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero />
      <SocialService />
      <StatsMarqueeSection />
      <ServiceAdvantage />
      <ServiceWorkingProcess />
      <ServiceLeading />
      <FaqSection
        label={facebookFaqHeading.label}
        title={facebookFaqHeading.title}
        subtitle={facebookFaqHeading.subtitle}
        items={facebookFaqItems}
      />
    </>
  );
}
