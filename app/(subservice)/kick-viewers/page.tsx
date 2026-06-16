import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import ServiceLeading from '@/components/sections/service-leading';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { data as kickViewersPageData } from '@/app/(subservice)/kick-viewers/page-data';
import KickViewersCtaSection from '@/app/(subservice)/kick-viewers/_components/cta-section';
import KickViewersHeroSection from '@/app/(subservice)/kick-viewers/_components/hero-section';
import KickViewersOrderFormSection from '@/app/(subservice)/kick-viewers/_components/order-form-section';
import KickViewersWorkingProcessSection from '@/app/(subservice)/kick-viewers/_components/working-process-section';

export const metadata: Metadata = {
  title: kickViewersPageData.seo.title,
  description: kickViewersPageData.seo.description,
};

export default function KickViewersPage() {
  return (
    <>
      <KickViewersHeroSection />
      <KickViewersOrderFormSection />
      <TestimonialsSection data={kickViewersPageData.testimonials} />
      <KickViewersWorkingProcessSection />
      {kickViewersPageData.serviceLeadingSlugs.map((slug) => (
        <ServiceLeading key={slug} slug={slug} />
      ))}
      <FaqSection data={kickViewersPageData.faq} />
      <KickViewersCtaSection />
    </>
  );
}
