import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import ServiceLeading from '@/components/sections/service-leading';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { data as instagramCommentsPageData } from '@/app/(subservice)/buy-instagram-comments/page-data';
import InstagramCommentsCtaSection from '@/app/(subservice)/buy-instagram-comments/_components/cta-section';
import InstagramCommentsHeroSection from '@/app/(subservice)/buy-instagram-comments/_components/hero-section';
import InstagramCommentsOrderFormSection from '@/app/(subservice)/buy-instagram-comments/_components/order-form-section';
import InstagramCommentsWorkingProcessSection from '@/app/(subservice)/buy-instagram-comments/_components/working-process-section';

export const metadata: Metadata = {
  title: instagramCommentsPageData.seo.title,
  description: instagramCommentsPageData.seo.description,
};

export default function InstagramCommentsPage() {
  return (
    <>
      <InstagramCommentsHeroSection />
      <InstagramCommentsOrderFormSection />
      <TestimonialsSection data={instagramCommentsPageData.testimonials} />
      <InstagramCommentsWorkingProcessSection />
      {instagramCommentsPageData.serviceLeadingSlugs.map((slug) => (
        <ServiceLeading key={slug} slug={slug} />
      ))}
      <FaqSection data={instagramCommentsPageData.faq} />
      <InstagramCommentsCtaSection />
    </>
  );
}
