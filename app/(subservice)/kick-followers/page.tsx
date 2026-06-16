import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import ServiceLeading from '@/components/sections/service-leading';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { data as kickFollowersPageData } from '@/app/(subservice)/kick-followers/page-data';
import KickFollowersCtaSection from '@/app/(subservice)/kick-followers/_components/cta-section';
import KickFollowersHeroSection from '@/app/(subservice)/kick-followers/_components/hero-section';
import KickFollowersOrderFormSection from '@/app/(subservice)/kick-followers/_components/order-form-section';
import KickFollowersWorkingProcessSection from '@/app/(subservice)/kick-followers/_components/working-process-section';

export const metadata: Metadata = {
  title: kickFollowersPageData.seo.title,
  description: kickFollowersPageData.seo.description,
};

export default function KickFollowersPage() {
  return (
    <>
      <KickFollowersHeroSection />
      <KickFollowersOrderFormSection />
      <TestimonialsSection data={kickFollowersPageData.testimonials} />
      <KickFollowersWorkingProcessSection />
      {kickFollowersPageData.serviceLeadingSlugs.map((slug) => (
        <ServiceLeading key={slug} slug={slug} />
      ))}
      <FaqSection data={kickFollowersPageData.faq} />
      <KickFollowersCtaSection />
    </>
  );
}
