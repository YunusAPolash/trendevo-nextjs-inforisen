import type { Metadata } from 'next';
import AdvantagesSection from '@/app/(home)/_components/advantages-section';
import StatsMarqueeSection from '@/app/about-us/_components/stats-marquee-section';
import CountryHero from '@/components/sections/country-hero';
import CountryHowToBuy from '@/components/sections/country-how-to-buy';
import CountryService from '@/components/sections/country-service';
import CountryTestimonial from '@/components/sections/country-testimonial';
import CountryWhy from '@/components/sections/country-why';
import FaqSection from '@/components/sections/faq-section';
import { data as smmPanelIndonesiaPageData } from '@/app/(country)/smm-panel-indonesia/page-data';
import SmmPanelIndonesiaCtaSection from './_components/cta-section';

export const metadata: Metadata = {
  title: smmPanelIndonesiaPageData.seo.title,
  description: smmPanelIndonesiaPageData.seo.description,
};

export default function SmmPanelIndonesiaPage() {
  return (
    <>
      <CountryHero slug={smmPanelIndonesiaPageData.slug} />
      <CountryWhy slug={smmPanelIndonesiaPageData.slug} />
      <StatsMarqueeSection />
      <CountryService slug={smmPanelIndonesiaPageData.slug} />
      <AdvantagesSection slug={smmPanelIndonesiaPageData.slug} />
      <CountryHowToBuy slug={smmPanelIndonesiaPageData.slug} />
      <CountryTestimonial slug={smmPanelIndonesiaPageData.slug} />
      <FaqSection data={smmPanelIndonesiaPageData.faq} />
      <SmmPanelIndonesiaCtaSection />
    </>
  );
}
