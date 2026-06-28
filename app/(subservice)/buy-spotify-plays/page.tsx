import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import { data as spotifyPlaysPageData } from '@/app/(subservice)/buy-spotify-plays/page-data';
import SpotifyPlaysCtaSection from './_components/cta-section';
import SpotifyPlaysHeroSection from './_components/hero-section';
import SpotifyPlaysOrderFormSection from './_components/order-form-section';
import SpotifyPlaysRelatedServicesSection from './_components/related-services-section';
import SpotifyPlaysThingsToKnowSection from './_components/things-to-know-section';
import SpotifyPlaysWhoShouldBuySection from './_components/who-should-buy-section';
import SpotifyPlaysWhyChooseSection from './_components/why-choose-section';
import SpotifyPlaysWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: spotifyPlaysPageData.seo.title,
  description: spotifyPlaysPageData.seo.description,
  alternates: {
    canonical: spotifyPlaysPageData.seo.canonical,
  },
};

export default function SpotifyPlaysPage() {
  return (
    <>
      <SpotifyPlaysHeroSection />
      <SpotifyPlaysOrderFormSection />
      <SpotifyPlaysWhyChooseSection />
      <SpotifyPlaysWhoShouldBuySection />
      <SpotifyPlaysWorkingProcessSection />
      <SpotifyPlaysThingsToKnowSection />
      <FaqSection data={spotifyPlaysPageData.faq} />
      <SpotifyPlaysRelatedServicesSection />
      <SpotifyPlaysCtaSection />
    </>
  );
}
