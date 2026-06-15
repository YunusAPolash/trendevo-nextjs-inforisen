import type { Metadata } from 'next';
import AdvantagesSection from '@/app/(home)/_components/advantages-section';
import StatsMarqueeSection from '@/app/about-us/_components/stats-marquee-section';
import CountryHero from '@/components/sections/country-hero';
import CountryHowToBuy from '@/components/sections/country-how-to-buy';
import CountryService from '@/components/sections/country-service';
import CountryTestimonial from '@/components/sections/country-testimonial';
import CountryWhy from '@/components/sections/country-why';
import FaqSection from '@/components/sections/faq-section';
import { data as smmPanelBrazilPageData } from '@/app/(country)/smm-panel-brazil/page-data';
import SmmPanelBrazilCtaSection from './_components/cta-section';

export const metadata: Metadata = {
  title: smmPanelBrazilPageData.seo.title,
  description: smmPanelBrazilPageData.seo.description,
};

export default function SmmPanelBrazilPage() {
  return (
    <>
      <CountryHero slug={smmPanelBrazilPageData.slug} />
      <CountryWhy slug={smmPanelBrazilPageData.slug} />
      <StatsMarqueeSection />
      <CountryService slug={smmPanelBrazilPageData.slug} />
      <AdvantagesSection slug={smmPanelBrazilPageData.slug} />
      <CountryHowToBuy slug={smmPanelBrazilPageData.slug} />
      <CountryTestimonial slug={smmPanelBrazilPageData.slug} />
      <FaqSection data={smmPanelBrazilPageData.faq} />
      <SmmPanelBrazilCtaSection />
    </>
  );
}
