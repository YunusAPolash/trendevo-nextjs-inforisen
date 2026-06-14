import type { Metadata } from 'next';
import { data as contactUsPageData } from '@/app/contact-us/page-data';
import ContactUsCtaSection from './_components/cta-section';
import ContactUsHeroSection from './_components/hero-section';
import ContactDetailsSection from './_components/contact-details-section';

export const metadata: Metadata = {
  title: contactUsPageData.seo.title,
  description: contactUsPageData.seo.description,
};

export default function ContactUsPage() {
  return (
    <>
      <ContactUsHeroSection />
      <ContactDetailsSection />
      <ContactUsCtaSection />
    </>
  );
}
