import type { Metadata } from 'next';
import { data as servicesPageData } from '@/app/services/page-data';
import ServicesCtaSection from './_components/cta-section';
import ServicesHeroSection from './_components/hero-section';
import ServicesGridSection from './_components/services-grid-section';

export const metadata: Metadata = {
  title: servicesPageData.seo.title,
  description: servicesPageData.seo.description,
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      <ServicesGridSection />
      <ServicesCtaSection />
    </>
  );
}
