import type { Metadata } from 'next';
import AdvantagesSection from '@/app/(home)/_components/advantages-section';
import StatsMarqueeSection from '@/app/about-us/_components/stats-marquee-section';
import CountryHero from '@/components/sections/country-hero';
import CountryHowToBuy from '@/components/sections/country-how-to-buy';
import CountryService from '@/components/sections/country-service';
import CountryTestimonial from '@/components/sections/country-testimonial';
import CountryWhy from '@/components/sections/country-why';
import FaqSection from '@/components/sections/faq-section';
import { data as smmPanelVietnamPageData } from '@/app/(country)/smm-panel-vietnam/page-data';
import SmmPanelVietnamCtaSection from './_components/cta-section';

export const metadata: Metadata = {
  title: smmPanelVietnamPageData.seo.title,
  description: smmPanelVietnamPageData.seo.description,
};

export default function SmmPanelVietnamPage() {
  return (
    <>
      <CountryHero slug={smmPanelVietnamPageData.slug} />
      <CountryWhy slug={smmPanelVietnamPageData.slug} />
      <StatsMarqueeSection />
      <CountryService slug={smmPanelVietnamPageData.slug} />
      <AdvantagesSection slug={smmPanelVietnamPageData.slug} />
      <CountryHowToBuy slug={smmPanelVietnamPageData.slug} />
      <CountryTestimonial slug={smmPanelVietnamPageData.slug} />
      <FaqSection data={smmPanelVietnamPageData.faq} />
      <SmmPanelVietnamCtaSection />
    </>
  );
}
