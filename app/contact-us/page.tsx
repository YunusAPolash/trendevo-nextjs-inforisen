import type { Metadata } from 'next';
import CtaSection from '@/components/sections/cta-section';
import { Button } from '@/components/ui/button';
import ContactDetailsSection from './_components/contact-details-section';
import HeroSection from './_components/hero-section';

export const metadata: Metadata = {
  title: 'Contact Us | TrendEvo',
  description:
    'Connect with TrendEvo for expert SMM panel support. Reach us on WhatsApp, email, or get help anytime with our 24/7 assistance.',
};

export default function ContactUsPage() {
  return (
    <>
      <HeroSection />
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
