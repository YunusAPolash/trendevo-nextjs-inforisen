import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import ServiceLeading from '@/components/sections/service-leading';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { data as instagramSharesPageData } from '@/app/(subservice)/buy-instagram-shares/page-data';
import InstagramSharesCtaSection from '@/app/(subservice)/buy-instagram-shares/_components/cta-section';
import InstagramSharesHeroSection from '@/app/(subservice)/buy-instagram-shares/_components/hero-section';
import InstagramSharesOrderFormSection from '@/app/(subservice)/buy-instagram-shares/_components/order-form-section';
import InstagramSharesWorkingProcessSection from '@/app/(subservice)/buy-instagram-shares/_components/working-process-section';

export const metadata: Metadata = {
  title: instagramSharesPageData.seo.title,
  description: instagramSharesPageData.seo.description,
};

export default function InstagramSharesPage() {
  return (
    <>
      <InstagramSharesHeroSection />
      <InstagramSharesOrderFormSection />
      <TestimonialsSection data={instagramSharesPageData.testimonials} />
      <InstagramSharesWorkingProcessSection />
      {instagramSharesPageData.serviceLeadingSlugs.map((slug) => (
        <ServiceLeading key={slug} slug={slug} />
      ))}
      <FaqSection data={instagramSharesPageData.faq} />
      <InstagramSharesCtaSection />
    </>
  );
}
