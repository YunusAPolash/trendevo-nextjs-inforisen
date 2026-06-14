import type { Metadata } from 'next';
import AdvantagesSection from '@/app/(home)/_components/advantages-section';
import StatsMarqueeSection from '@/app/about-us/_components/stats-marquee-section';
import CountryHero from '@/components/sections/country-hero';
import CountryHowToBuy from '@/components/sections/country-how-to-buy';
import CountryService from '@/components/sections/country-service';
import CountryTestimonial from '@/components/sections/country-testimonial';
import CountryWhy from '@/components/sections/country-why';
import FaqSection from '@/components/sections/faq-section';
import { data as smmPanelUkPageData } from '@/app/(country)/smm-panel-uk/page-data';
import SmmPanelUkCtaSection from './_components/cta-section';

export const metadata: Metadata = {
  title: smmPanelUkPageData.seo.title,
  description: smmPanelUkPageData.seo.description,
};

export default function SmmPanelUkPage() {
  return (
    <>
      <CountryHero slug={smmPanelUkPageData.slug} />
      <CountryWhy slug={smmPanelUkPageData.slug} />
      <StatsMarqueeSection />
      <CountryService slug={smmPanelUkPageData.slug} />
      <AdvantagesSection slug={smmPanelUkPageData.slug} />
      <CountryHowToBuy slug={smmPanelUkPageData.slug} />
      <CountryTestimonial slug={smmPanelUkPageData.slug} />
      <FaqSection data={smmPanelUkPageData.faq} />
      <SmmPanelUkCtaSection />
    </>
  );
}
