import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import ServiceLeading from '@/components/sections/service-leading';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { data as instagramFollowersPageData } from '@/app/(subservice)/instagram-followers/page-data';
import InstagramFollowersCtaSection from '@/app/(subservice)/instagram-followers/_components/cta-section';
import InstagramFollowersHeroSection from '@/app/(subservice)/instagram-followers/_components/hero-section';
import InstagramFollowersOrderFormSection from '@/app/(subservice)/instagram-followers/_components/order-form-section';
import InstagramFollowersWorkingProcessSection from '@/app/(subservice)/instagram-followers/_components/working-process-section';

export const metadata: Metadata = {
  title: instagramFollowersPageData.seo.title,
  description: instagramFollowersPageData.seo.description,
};

export default function InstagramFollowersPage() {
  return (
    <>
      <InstagramFollowersHeroSection />
      <InstagramFollowersOrderFormSection />
      <TestimonialsSection data={instagramFollowersPageData.testimonials} />
      <InstagramFollowersWorkingProcessSection />
      {instagramFollowersPageData.serviceLeadingSlugs.map((slug) => (
        <ServiceLeading key={slug} slug={slug} />
      ))}
      <FaqSection data={instagramFollowersPageData.faq} />
      <InstagramFollowersCtaSection />
    </>
  );
}
