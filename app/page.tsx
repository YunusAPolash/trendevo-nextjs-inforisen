import AboutSection from '@/app/_components/about-section';
import AdvantagesSection from '@/app/_components/advantages-section';
import CtaSection from '@/app/_components/cta-section';
import FaqSection from '@/app/_components/faq-section';
import FooterSection from '@/app/_components/footer-section';
import HeroSection from '@/app/_components/hero-section';
import PaymentMethodsSection from '@/app/_components/payment-methods-section';
import PlatformMarqueeSection from '@/app/_components/platform-marquee-section';
import PricingSection from '@/app/_components/pricing-section';
import StatsSection from '@/app/_components/stats-section';
import TestimonialsSection from '@/app/_components/testimonials-section';
import WhyChooseUsSection from '@/app/_components/why-choose-us-section';
import WorkingProcessSection from '@/app/_components/working-process-section';
import OurService from '@/components/features/home/OurService';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <OurService />
      <AboutSection />
      <WorkingProcessSection />
      <WhyChooseUsSection />
      <PaymentMethodsSection />
      <PlatformMarqueeSection />
      <AdvantagesSection />
      <PricingSection />
      <TestimonialsSection />
      <div id="faq">
        <FaqSection />
      </div>
      <CtaSection />
      <FooterSection />
    </main>
  );
}
