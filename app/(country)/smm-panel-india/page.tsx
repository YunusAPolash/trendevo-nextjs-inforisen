import type { Metadata } from 'next';
import AdvantagesSection from '@/app/(home)/_components/advantages-section';
import StatsMarqueeSection from '@/app/about-us/_components/stats-marquee-section';
import CountryHero from '@/components/sections/country-hero';
import CountryHowToBuy from '@/components/sections/country-how-to-buy';
import CountryService from '@/components/sections/country-service';
import CountryTestimonial from '@/components/sections/country-testimonial';
import CountryWhy from '@/components/sections/country-why';
import FaqSection from '@/components/sections/faq-section';
import { data as smmPanelIndiaPageData } from '@/app/(country)/smm-panel-india/page-data';
import SmmPanelIndiaCtaSection from './_components/cta-section';

export const metadata: Metadata = {
  title: smmPanelIndiaPageData.seo.title,
  description: smmPanelIndiaPageData.seo.description,
};

export default function SmmPanelIndiaPage() {
  return (
    <>
      <CountryHero slug={smmPanelIndiaPageData.slug} />
      <CountryWhy slug={smmPanelIndiaPageData.slug} />
      <StatsMarqueeSection />
      <CountryService slug={smmPanelIndiaPageData.slug} />
      <AdvantagesSection slug={smmPanelIndiaPageData.slug} />
      <CountryHowToBuy slug={smmPanelIndiaPageData.slug} />
      <CountryTestimonial slug={smmPanelIndiaPageData.slug} />
      <FaqSection data={smmPanelIndiaPageData.faq} />
      <SmmPanelIndiaCtaSection />
    </>
  );
}
