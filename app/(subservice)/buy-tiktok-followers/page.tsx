import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import ServiceLeading from '@/components/sections/service-leading';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { data as tiktokFollowersPageData } from '@/app/(subservice)/buy-tiktok-followers/page-data';
import TiktokFollowersCtaSection from '@/app/(subservice)/buy-tiktok-followers/_components/cta-section';
import TiktokFollowersHeroSection from '@/app/(subservice)/buy-tiktok-followers/_components/hero-section';
import TiktokFollowersOrderFormSection from '@/app/(subservice)/buy-tiktok-followers/_components/order-form-section';
import TiktokFollowersWorkingProcessSection from '@/app/(subservice)/buy-tiktok-followers/_components/working-process-section';

export const metadata: Metadata = {
  title: tiktokFollowersPageData.seo.title,
  description: tiktokFollowersPageData.seo.description,
};

export default function TiktokFollowersPage() {
  return (
    <>
      <TiktokFollowersHeroSection />
      <TiktokFollowersOrderFormSection />
      <TestimonialsSection data={tiktokFollowersPageData.testimonials} />
      <TiktokFollowersWorkingProcessSection />
      {tiktokFollowersPageData.serviceLeadingSlugs.map((slug) => (
        <ServiceLeading key={slug} slug={slug} />
      ))}
      <FaqSection data={tiktokFollowersPageData.faq} />
      <TiktokFollowersCtaSection />
    </>
  );
}
