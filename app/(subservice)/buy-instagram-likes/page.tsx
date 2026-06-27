import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import ServiceLeading from '@/components/sections/service-leading';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { data as instagramLikesPageData } from '@/app/(subservice)/buy-instagram-likes/page-data';
import InstagramLikesCtaSection from '@/app/(subservice)/buy-instagram-likes/_components/cta-section';
import InstagramLikesHeroSection from '@/app/(subservice)/buy-instagram-likes/_components/hero-section';
import InstagramLikesOrderFormSection from '@/app/(subservice)/buy-instagram-likes/_components/order-form-section';
import InstagramLikesWorkingProcessSection from '@/app/(subservice)/buy-instagram-likes/_components/working-process-section';

export const metadata: Metadata = {
  title: instagramLikesPageData.seo.title,
  description: instagramLikesPageData.seo.description,
};

export default function InstagramLikesPage() {
  return (
    <>
      <InstagramLikesHeroSection />
      <InstagramLikesOrderFormSection />
      <TestimonialsSection data={instagramLikesPageData.testimonials} />
      <InstagramLikesWorkingProcessSection />
      {instagramLikesPageData.serviceLeadingSlugs.map((slug) => (
        <ServiceLeading key={slug} slug={slug} />
      ))}
      <FaqSection data={instagramLikesPageData.faq} />
      <InstagramLikesCtaSection />
    </>
  );
}
