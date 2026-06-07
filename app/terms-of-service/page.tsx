import type { Metadata } from 'next';
import FaqSection from '@/app/_components/faq-section';
import FooterSection from '@/app/_components/footer-section';
import TermsContentSection from '@/app/terms-of-service/_components/content-section';
import TermsHeroSection from '@/app/terms-of-service/_components/hero-section';

export const metadata: Metadata = {
  title: 'Terms of Service | TrendEvo',
  description:
    'Read the TrendEvo Terms of Service before creating an account or placing an order. Plain-language rules for using our SMM panel.',
};

export default function TermsOfServicePage() {
  return (
    <main>
      <TermsHeroSection />
      <TermsContentSection />
      <FaqSection />
      <FooterSection />
    </main>
  );
}
