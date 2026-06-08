import type { Metadata } from 'next';
import {
  homeFaqHeading,
  homeFaqItems,
} from '@/app/(home)/_components/home-faq-content';
import FooterSection from '@/app/(home)/_components/footer-section';
import TermsContentSection from '@/app/(legal)/_components/content-section';
import TermsHeroSection from '@/app/(legal)/_components/hero-section';
import FaqSection from '@/components/sections/faq-section';
export const metadata: Metadata = {
  title: 'Terms of Service | TrendEvo',
  description:
    'Read the TrendEvo Terms of Service before creating an account or placing an order. Plain-language rules for using our SMM panel.',
};

export default function TermsOfServicePage() {
  return (
    <>
      <TermsHeroSection />
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
