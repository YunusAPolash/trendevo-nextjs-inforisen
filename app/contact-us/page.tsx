import type { Metadata } from 'next';
import CtaSection from '@/components/sections/cta-section';
import HeroSection from '@/components/sections/hero-section';
import { heroSocialIcons } from '@/content/hero-social-icons';
import PrimaryButton from '@/components/buttons/primary-button';
import SecondaryButton from '@/components/buttons/secondary-button';
import ContactDetailsSection from './_components/contact-details-section';

export const metadata: Metadata = {
  title: 'Contact Us | TrendEvo',
  description:
    'Connect with TrendEvo for expert SMM panel support. Reach us on WhatsApp, email, or get help anytime with our 24/7 assistance.',
};

export default function ContactUsPage() {
  return (
    <>
      <HeroSection
        bg="section-1"
        variant="wide-responsive"
        decoration="contact"
        leftColumnClassName="gap-6 lg:gap-8 lg:self-center"
        title={
          <>
            Connect with Trend Evo for Expert
            <span className="text-gradient"> SMM Panel Support</span>
          </>
        }
        titleClassName="text-[28px] font-semibold leading-[1.35] tracking-tight text-[#071431] sm:text-4xl md:text-5xl"
        description="We are committed to delivering top-notch SMM panel services with smooth order processing, real-time support, and proven strategies to help you achieve consistent growth across all social media platforms."
        descriptionClassName="max-w-2xl text-base leading-relaxed text-[#343e56] sm:text-base md:text-lg"
        actions={
         <PrimaryButton showArrow className='w-fit'>Get Started Now</PrimaryButton>
        }
        illustration={{
          src: '/images/contact-us/contact-us-hero-character.webp',
          alt: 'TrendEvo support specialist pointing to contact options',
          width: 583,
          height: 648,
          maxWidthClassName: 'max-w-[583px]',
        }}
        socialIcons={heroSocialIcons}
      />
      <ContactDetailsSection />
      <CtaSection
        title={
          <>
            Ready to{' '}
            <span className="text-gradient">Grow your Social Media</span> in
            Bangladesh
          </>
        }
        description="Join thousands of users growing faster with TrendEvo Panel on Facebook, Instagram, YouTube, and TikTok. Get started free in under 60 seconds. We ensure 100% customer satisfaction with an all-in-one, fully automated SMM solution that helps your business stand out and grow effortlessly."
        buttonsOutlet={
          <>
            <PrimaryButton className="border-[1.5px] border-[#cc7aff]">
              Register Now
            </PrimaryButton>
            <SecondaryButton type="button">
              See all Services
            </SecondaryButton>
          </>
        }
      />
    </>
  );
}
