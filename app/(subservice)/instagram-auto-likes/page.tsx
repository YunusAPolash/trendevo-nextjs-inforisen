import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import ServiceLeading from '@/components/sections/service-leading';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { data as instagramAutoLikesPageData } from '@/app/(subservice)/instagram-auto-likes/page-data';
import InstagramAutoLikesCtaSection from '@/app/(subservice)/instagram-auto-likes/_components/cta-section';
import InstagramAutoLikesHeroSection from '@/app/(subservice)/instagram-auto-likes/_components/hero-section';
import InstagramAutoLikesOrderFormSection from '@/app/(subservice)/instagram-auto-likes/_components/order-form-section';
import InstagramAutoLikesWorkingProcessSection from '@/app/(subservice)/instagram-auto-likes/_components/working-process-section';

export const metadata: Metadata = {
  title: instagramAutoLikesPageData.seo.title,
  description: instagramAutoLikesPageData.seo.description,
};

export default function InstagramAutoLikesPage() {
  return (
    <>
      <InstagramAutoLikesHeroSection />
      <InstagramAutoLikesOrderFormSection />
      <TestimonialsSection data={instagramAutoLikesPageData.testimonials} />
      <InstagramAutoLikesWorkingProcessSection />
      {instagramAutoLikesPageData.serviceLeadingSlugs.map((slug) => (
        <ServiceLeading key={slug} slug={slug} />
      ))}
      <FaqSection data={instagramAutoLikesPageData.faq} />
      <InstagramAutoLikesCtaSection />
    </>
  );
}
