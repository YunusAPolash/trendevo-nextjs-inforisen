import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import ServiceLeading from '@/components/sections/service-leading';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { data as spotifyPlaysPageData } from '@/app/(subservice)/spotify-plays/page-data';
import SpotifyPlaysCtaSection from '@/app/(subservice)/spotify-plays/_components/cta-section';
import SpotifyPlaysHeroSection from '@/app/(subservice)/spotify-plays/_components/hero-section';
import SpotifyPlaysOrderFormSection from '@/app/(subservice)/spotify-plays/_components/order-form-section';
import SpotifyPlaysWorkingProcessSection from '@/app/(subservice)/spotify-plays/_components/working-process-section';

export const metadata: Metadata = {
  title: spotifyPlaysPageData.seo.title,
  description: spotifyPlaysPageData.seo.description,
};

export default function SpotifyPlaysPage() {
  return (
    <>
      <SpotifyPlaysHeroSection />
      <SpotifyPlaysOrderFormSection />
      <TestimonialsSection data={spotifyPlaysPageData.testimonials} />
      <SpotifyPlaysWorkingProcessSection />
      {spotifyPlaysPageData.serviceLeadingSlugs.map((slug) => (
        <ServiceLeading key={slug} slug={slug} />
      ))}
      <FaqSection data={spotifyPlaysPageData.faq} />
      <SpotifyPlaysCtaSection />
    </>
  );
}
