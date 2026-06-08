import type { Metadata } from 'next';
import {
  homeFaqHeading,
  homeFaqItems,
} from '@/app/_components/home-faq-content';
import HeroSection from '@/app/(legal)/_components/hero-section';
import ContentSection from '@/app/(legal)/privacy-policy/_components/content-section';
import FaqSection from '@/components/sections/faq-section';

export const metadata: Metadata = {
  title: 'Privacy Policy | TrendEvo',
  description:
    'Read the TrendEvo Privacy Policy to understand what personal data we collect, how we use it, who we share it with, and your rights.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <HeroSection
        titlePrefix="Privacy"
        titleHighlight="Policy"
        description="Your privacy matters to us. This page explains what personal information we collect, how we use it, and what rights you have over your own data."
        lastUpdated="24/03/2026"
      />
      <ContentSection />
      <FaqSection
        label={homeFaqHeading.label}
        title={homeFaqHeading.title}
        subtitle={homeFaqHeading.subtitle}
        items={homeFaqItems}
      />
    </>
  );
}
