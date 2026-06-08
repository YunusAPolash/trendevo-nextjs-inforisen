import type { Metadata } from 'next';

import TermsContentSection from '@/app/(legal)/_components/content-section';
import HeroSection from '@/app/(legal)/_components/hero-section';
import FaqSection from '@/components/sections/faq-section';
import { homeFaqHeading, homeFaqItems } from '@/app/(home)/_components/home-faq-content';
export const metadata: Metadata = {
  title: 'Terms of Service | TrendEvo',
  description:
    'Read the TrendEvo Terms of Service before creating an account or placing an order. Plain-language rules for using our SMM panel.',
};

export default function TermsOfServicePage() {
  return (
    <>
      <HeroSection
        titlePrefix="Terms Of"
        titleHighlight="Services"
        description="Before registering and ordering services, it is important to read and understand the Terms of Service carefully. By using the services offered by smmxp.org, you agree to abide by these terms."
        lastUpdated="24/03/2026"
      />
      <TermsContentSection />
      <FaqSection
        label={homeFaqHeading.label}
        title={homeFaqHeading.title}
        subtitle={homeFaqHeading.subtitle}
        items={homeFaqItems}
      />
    </>
  );
}
