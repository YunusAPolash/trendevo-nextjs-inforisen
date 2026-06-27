import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import ServiceLeading from '@/components/sections/service-leading';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { data as discordMembersPageData } from '@/app/(subservice)/buy-discord-members/page-data';
import DiscordMembersCtaSection from '@/app/(subservice)/buy-discord-members/_components/cta-section';
import DiscordMembersHeroSection from '@/app/(subservice)/buy-discord-members/_components/hero-section';
import DiscordMembersOrderFormSection from '@/app/(subservice)/buy-discord-members/_components/order-form-section';
import DiscordMembersWorkingProcessSection from '@/app/(subservice)/buy-discord-members/_components/working-process-section';

export const metadata: Metadata = {
  title: discordMembersPageData.seo.title,
  description: discordMembersPageData.seo.description,
};

export default function DiscordMembersPage() {
  return (
    <>
      <DiscordMembersHeroSection />
      <DiscordMembersOrderFormSection />
      <TestimonialsSection data={discordMembersPageData.testimonials} />
      <DiscordMembersWorkingProcessSection />
      {discordMembersPageData.serviceLeadingSlugs.map((slug) => (
        <ServiceLeading key={slug} slug={slug} />
      ))}
      <FaqSection data={discordMembersPageData.faq} />
      <DiscordMembersCtaSection />
    </>
  );
}
