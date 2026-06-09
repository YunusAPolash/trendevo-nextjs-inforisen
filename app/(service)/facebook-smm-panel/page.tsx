import type { Metadata } from 'next';

import ServiceHero from '@/components/serviceSmmPanel/ServiceHero';

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
    </>
  );
}
