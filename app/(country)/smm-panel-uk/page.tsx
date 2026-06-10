import type { Metadata } from 'next';

import AdvantagesSection from '@/app/(home)/_components/advantages-section';
import CountryHero from '@/components/sections/country-hero';
import CountryHowToBuy from '@/components/sections/country-how-to-buy';
import CountryService from '@/components/sections/country-service';
import CountryTestimonial from '@/components/sections/country-testimonial';
import CountryWhy from '@/components/sections/country-why';
import PrimaryButton from '@/components/buttons/primary-button';
import CtaSection from '@/components/sections/cta-section';
import FaqSection from '@/components/sections/faq-section';
import StatsMarqueeSection from '@/app/about-us/_components/stats-marquee-section';
import { getCtaServiceContent } from '@/components/serviceSmmPanel/cta-service-content';
import { getServiceFaqContent } from '@/components/serviceSmmPanel/service-faq-content';

export const metadata: Metadata = {
  title: 'SMM Panel UK | TrendEvo',
  description:
    'TrendEvo is a trusted SMM panel for UK businesses and creators. Get fast, reliable, and affordable social media marketing services across Facebook, Instagram, TikTok, and YouTube.',
};

export default function SmmPanelUkPage() {
  const { items: faqItems, heading: faqHeading } =
    getServiceFaqContent('smm-panel-uk');
  const ukCtaContent = getCtaServiceContent('smm-panel-uk');

  return (
    <>
      <CountryHero slug="smm-panel-uk" />
      <CountryWhy slug="smm-panel-uk" />
      <StatsMarqueeSection />
      <CountryService slug="smm-panel-uk" />
      <AdvantagesSection slug="smm-panel-uk" />
      <CountryHowToBuy slug="smm-panel-uk" />
      <CountryTestimonial slug="smm-panel-uk" />
      <FaqSection
        data={{
          label: faqHeading.label,
          title: faqHeading.title,
          subtitle: faqHeading.subtitle,
          items: faqItems,
        }}
      />
      <CtaSection
        title={ukCtaContent.title}
        description={ukCtaContent.description}
        imageSrc={ukCtaContent.imageSrc}
        imageAlt={ukCtaContent.imageAlt}
        className={ukCtaContent.className}
        buttonsOutlet={
          <>
            <PrimaryButton
              type="button"
              className="h-10 w-full min-w-0 text-sm sm:h-[50px] sm:w-auto sm:min-w-[160px] sm:text-base"
            >
              {ukCtaContent.primaryButtonLabel}
            </PrimaryButton>
            <button
              type="button"
              className="inline-flex h-10 w-full min-w-0 cursor-pointer items-center justify-center rounded-[10px] border border-[#d181ff] bg-white/25 px-4 text-sm font-semibold text-gradient transition hover:bg-white/40 sm:h-[50px] sm:w-auto sm:min-w-[180px] sm:px-[18px] sm:text-base"
            >
              {ukCtaContent.secondaryButtonLabel}
            </button>
          </>
        }
      />
    </>
  );
}
