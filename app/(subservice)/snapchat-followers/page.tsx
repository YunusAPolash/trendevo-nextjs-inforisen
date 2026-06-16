import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import ServiceLeading from '@/components/sections/service-leading';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { data as snapchatFollowersPageData } from '@/app/(subservice)/snapchat-followers/page-data';
import SnapchatFollowersCtaSection from '@/app/(subservice)/snapchat-followers/_components/cta-section';
import SnapchatFollowersHeroSection from '@/app/(subservice)/snapchat-followers/_components/hero-section';
import SnapchatFollowersOrderFormSection from '@/app/(subservice)/snapchat-followers/_components/order-form-section';
import SnapchatFollowersWorkingProcessSection from '@/app/(subservice)/snapchat-followers/_components/working-process-section';

export const metadata: Metadata = {
  title: snapchatFollowersPageData.seo.title,
  description: snapchatFollowersPageData.seo.description,
};

export default function SnapchatFollowersPage() {
  return (
    <>
      <SnapchatFollowersHeroSection />
      <SnapchatFollowersOrderFormSection />
      <TestimonialsSection data={snapchatFollowersPageData.testimonials} />
      <SnapchatFollowersWorkingProcessSection />
      {snapchatFollowersPageData.serviceLeadingSlugs.map((slug) => (
        <ServiceLeading key={slug} slug={slug} />
      ))}
      <FaqSection data={snapchatFollowersPageData.faq} />
      <SnapchatFollowersCtaSection />
    </>
  );
}
