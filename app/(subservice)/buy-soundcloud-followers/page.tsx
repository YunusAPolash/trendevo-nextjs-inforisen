import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import ServiceLeading from '@/components/sections/service-leading';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { data as soundcloudFollowersPageData } from '@/app/(subservice)/buy-soundcloud-followers/page-data';
import SoundcloudFollowersCtaSection from '@/app/(subservice)/buy-soundcloud-followers/_components/cta-section';
import SoundcloudFollowersHeroSection from '@/app/(subservice)/buy-soundcloud-followers/_components/hero-section';
import SoundcloudFollowersOrderFormSection from '@/app/(subservice)/buy-soundcloud-followers/_components/order-form-section';
import SoundcloudFollowersWorkingProcessSection from '@/app/(subservice)/buy-soundcloud-followers/_components/working-process-section';

export const metadata: Metadata = {
  title: soundcloudFollowersPageData.seo.title,
  description: soundcloudFollowersPageData.seo.description,
};

export default function SoundcloudFollowersPage() {
  return (
    <>
      <SoundcloudFollowersHeroSection />
      <SoundcloudFollowersOrderFormSection />
      <TestimonialsSection data={soundcloudFollowersPageData.testimonials} />
      <SoundcloudFollowersWorkingProcessSection />
      {soundcloudFollowersPageData.serviceLeadingSlugs.map((slug) => (
        <ServiceLeading key={slug} slug={slug} />
      ))}
      <FaqSection data={soundcloudFollowersPageData.faq} />
      <SoundcloudFollowersCtaSection />
    </>
  );
}
