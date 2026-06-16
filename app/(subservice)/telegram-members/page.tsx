import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import ServiceLeading from '@/components/sections/service-leading';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { data as telegramMembersPageData } from '@/app/(subservice)/telegram-members/page-data';
import TelegramMembersCtaSection from '@/app/(subservice)/telegram-members/_components/cta-section';
import TelegramMembersHeroSection from '@/app/(subservice)/telegram-members/_components/hero-section';
import TelegramMembersOrderFormSection from '@/app/(subservice)/telegram-members/_components/order-form-section';
import TelegramMembersWorkingProcessSection from '@/app/(subservice)/telegram-members/_components/working-process-section';

export const metadata: Metadata = {
  title: telegramMembersPageData.seo.title,
  description: telegramMembersPageData.seo.description,
};

export default function TelegramMembersPage() {
  return (
    <>
      <TelegramMembersHeroSection />
      <TelegramMembersOrderFormSection />
      <TestimonialsSection data={telegramMembersPageData.testimonials} />
      <TelegramMembersWorkingProcessSection />
      {telegramMembersPageData.serviceLeadingSlugs.map((slug) => (
        <ServiceLeading key={slug} slug={slug} />
      ))}
      <FaqSection data={telegramMembersPageData.faq} />
      <TelegramMembersCtaSection />
    </>
  );
}
