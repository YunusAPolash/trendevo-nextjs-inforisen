import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import ServiceLeading from '@/components/sections/service-leading';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { data as soundcloudPlaysPageData } from '@/app/(subservice)/buy-soundcloud-plays/page-data';
import SoundcloudPlaysCtaSection from '@/app/(subservice)/buy-soundcloud-plays/_components/cta-section';
import SoundcloudPlaysHeroSection from '@/app/(subservice)/buy-soundcloud-plays/_components/hero-section';
import SoundcloudPlaysOrderFormSection from '@/app/(subservice)/buy-soundcloud-plays/_components/order-form-section';
import SoundcloudPlaysWorkingProcessSection from '@/app/(subservice)/buy-soundcloud-plays/_components/working-process-section';

export const metadata: Metadata = {
  title: soundcloudPlaysPageData.seo.title,
  description: soundcloudPlaysPageData.seo.description,
};

export default function SoundcloudPlaysPage() {
  return (
    <>
      <SoundcloudPlaysHeroSection />
      <SoundcloudPlaysOrderFormSection />
      <TestimonialsSection data={soundcloudPlaysPageData.testimonials} />
      <SoundcloudPlaysWorkingProcessSection />
      {soundcloudPlaysPageData.serviceLeadingSlugs.map((slug) => (
        <ServiceLeading key={slug} slug={slug} />
      ))}
      <FaqSection data={soundcloudPlaysPageData.faq} />
      <SoundcloudPlaysCtaSection />
    </>
  );
}
