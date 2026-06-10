import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import CtaSection from '@/components/sections/cta-section';
import HeroSection from '@/components/sections/hero-section';
import { heroSocialIcons } from '@/content/hero-social-icons';
import { Button } from '@/components/ui/button';
import ContactDetailsSection from './_components/contact-details-section';
import PrimaryButton from '@/components/buttons/primary-button';

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
        descriptionClassName="max-w-2xl text-sm leading-relaxed text-[#343e56] sm:text-base md:text-lg"
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
            <Button className="bg-brand-gradient h-[50px] rounded-[10px] border-[1.5px] border-[#cc7aff] px-[18px] font-semibold text-white hover:opacity-90">
              Register Now
            </Button>
            <Button
              variant="outline"
              className="h-[50px] rounded-[10px] border-[#d181ff] bg-white/25 px-6 font-semibold text-gradient hover:bg-white/40"
            >
              See all Services
            </Button>
          </>
        }
      />
    </>
  );
}
