import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import ServiceLeading from '@/components/sections/service-leading';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { data as spotifyMonthlyListenersPageData } from '@/app/(subservice)/buy-spotify-monthly-listeners/page-data';
import SpotifyMonthlyListenersCtaSection from '@/app/(subservice)/buy-spotify-monthly-listeners/_components/cta-section';
import SpotifyMonthlyListenersHeroSection from '@/app/(subservice)/buy-spotify-monthly-listeners/_components/hero-section';
import SpotifyMonthlyListenersOrderFormSection from '@/app/(subservice)/buy-spotify-monthly-listeners/_components/order-form-section';
import SpotifyMonthlyListenersWorkingProcessSection from '@/app/(subservice)/buy-spotify-monthly-listeners/_components/working-process-section';

export const metadata: Metadata = {
  title: spotifyMonthlyListenersPageData.seo.title,
  description: spotifyMonthlyListenersPageData.seo.description,
};

export default function SpotifyMonthlyListenersPage() {
  return (
    <>
      <SpotifyMonthlyListenersHeroSection />
      <SpotifyMonthlyListenersOrderFormSection />
      <TestimonialsSection data={spotifyMonthlyListenersPageData.testimonials} />
      <SpotifyMonthlyListenersWorkingProcessSection />
      {spotifyMonthlyListenersPageData.serviceLeadingSlugs.map((slug) => (
        <ServiceLeading key={slug} slug={slug} />
      ))}
      <FaqSection data={spotifyMonthlyListenersPageData.faq} />
      <SpotifyMonthlyListenersCtaSection />
    </>
  );
}
