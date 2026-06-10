import AboutSection from '@/app/(home)/_components/about-section';
import AdvantagesSection from '@/app/(home)/_components/advantages-section';
import CtaSection from '@/app/(home)/_components/cta-section';
import HeroSection from '@/app/(home)/_components/hero-section';
import HomeBlog from '@/app/(home)/_components/home-blog';
import PaymentMethodsSection from '@/app/(home)/_components/payment-methods-section';
import PlatformMarqueeSection from '@/app/(home)/_components/platform-marquee-section';
import PricingSection from '@/app/(home)/_components/pricing-section';
import StatsSection from '@/app/(home)/_components/stats-section';
import { pageData } from '@/app/(home)/pageData';
import TestimonialsSection from '@/components/sections/testimonials-section';
import WhyChooseUsSection from '@/app/(home)/_components/why-choose-us-section';
import WorkingProcessSection from '@/app/(home)/_components/working-process-section';
import FaqSection from '@/components/sections/faq-section';
import OurService from '@/app/(home)/_components/our-service';

export default function Home() {
  return (
    <>
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
      <TestimonialsSection data={pageData.testimonials} />
      <div id="faq">
        <FaqSection data={pageData.faq} />
      </div>
      <HomeBlog />
      
      <CtaSection />
    </>
  );
}
