import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import { data as telegramMembersPageData } from '@/app/(subservice)/buy-telegram-members/page-data';
import TelegramMembersCtaSection from './_components/cta-section';
import TelegramMembersHeroSection from './_components/hero-section';
import TelegramMembersOrderFormSection from './_components/order-form-section';
import TelegramMembersRelatedServicesSection from './_components/related-services-section';
import TelegramMembersThingsToKnowSection from './_components/things-to-know-section';
import TelegramMembersWhoShouldBuySection from './_components/who-should-buy-section';
import TelegramMembersWhyChooseSection from './_components/why-choose-section';
import TelegramMembersWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: telegramMembersPageData.seo.title,
  description: telegramMembersPageData.seo.description,
  alternates: {
    canonical: telegramMembersPageData.seo.canonical,
  },
};

export default function TelegramMembersPage() {
  return (
    <>
      <TelegramMembersHeroSection />
      <TelegramMembersOrderFormSection />
      <TelegramMembersWhyChooseSection />
      <TelegramMembersWhoShouldBuySection />
      <TelegramMembersWorkingProcessSection />
      <TelegramMembersThingsToKnowSection />
      <FaqSection data={telegramMembersPageData.faq} />
      <TelegramMembersRelatedServicesSection />
      <TelegramMembersCtaSection />
    </>
  );
}
