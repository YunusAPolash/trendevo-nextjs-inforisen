import type { Metadata } from 'next';
import AdvantagesSection from '@/app/(home)/_components/advantages-section';
import StatsMarqueeSection from '@/app/about-us/_components/stats-marquee-section';
import CountryHero from '@/components/sections/country-hero';
import CountryHowToBuy from '@/components/sections/country-how-to-buy';
import CountryService from '@/components/sections/country-service';
import CountryTestimonial from '@/components/sections/country-testimonial';
import CountryWhy from '@/components/sections/country-why';
import FaqSection from '@/components/sections/faq-section';
import { data as smmPanelNigeriaPageData } from '@/app/(country)/smm-panel-nigeria/page-data';
import SmmPanelNigeriaCtaSection from './_components/cta-section';

export const metadata: Metadata = {
  title: smmPanelNigeriaPageData.seo.title,
  description: smmPanelNigeriaPageData.seo.description,
};

export default function SmmPanelNigeriaPage() {
  return (
    <>
      <CountryHero slug={smmPanelNigeriaPageData.slug} />
      <CountryWhy slug={smmPanelNigeriaPageData.slug} />
      <StatsMarqueeSection />
      <CountryService slug={smmPanelNigeriaPageData.slug} />
      <AdvantagesSection slug={smmPanelNigeriaPageData.slug} />
      <CountryHowToBuy slug={smmPanelNigeriaPageData.slug} />
      <CountryTestimonial slug={smmPanelNigeriaPageData.slug} />
      <FaqSection data={smmPanelNigeriaPageData.faq} />
      <SmmPanelNigeriaCtaSection />
    </>
  );
}
