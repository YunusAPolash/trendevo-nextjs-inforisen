import type { Metadata } from 'next';
import { data as servicesPricingPageData } from '@/app/services/pricing/page-data';
import ServicesPricingCtaSection from './_components/cta-section';
import HeadingSection from './_components/heading-section';
import PlatformFiltersSection from './_components/platform-filters-section';
import ServicesPricingTablesSection from './_components/services-pricing-tables-section';

export const metadata: Metadata = {
  title: servicesPricingPageData.seo.title,
  description: servicesPricingPageData.seo.description,
};

export default function ServicesPricingPage() {
  return (
    <>
      <HeadingSection />
      <PlatformFiltersSection />
      <ServicesPricingTablesSection />
      <ServicesPricingCtaSection />
    </>
  );
}
