import type { Metadata } from 'next';
import CtaSection from '@/components/sections/cta-section';
import FaqSection from '@/components/sections/faq-section';
import HeroSection from '@/components/sections/hero-section';
import ServiceLeading from '@/components/sections/service-leading';
import ServiceWorkingProcessSection from '@/components/sections/service-working-process-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import PrimaryButton from '@/components/buttons/primary-button';
import SecondaryButton from '@/components/buttons/secondary-button';
import { signInUrl, signUpUrl } from '@/lib/auth-urls';
import { getFacebookPageFollowersTrustBadge } from './_components/hero-content';
import OrderFormSection from './_components/order-form-section';
import { facebookPageFollowersCta } from './_components/cta-content';
import { facebookPageFollowersFaqData } from './_components/faq-content';
import {
  facebookPageFollowersWorkingProcessHeading,
  facebookPageFollowersWorkingProcessSteps,
} from './_components/working-process-content';
import { facebookPageFollowersTestimonialsData } from './_components/testimonials-content';

export const metadata: Metadata = {
  title: 'Buy Facebook Page Followers | TrendEvo',
  description:
    'Buy real Facebook page followers at affordable prices. Fast delivery, secure checkout, and 24/7 support from TrendEvo in Bangladesh.',
};

export default async function FacebookPageFollowersPage() {
  const trustBadge = await getFacebookPageFollowersTrustBadge();

  return (
    <>
      <HeroSection
        bg="section-1"
        variant="wide"
        trustBadge={trustBadge}
        title={
          <>
            Buy <span className="text-gradient">Facebook Followers</span> in
            Real, Fast &amp; Affordable price.
          </>
        }
        description="Growing a Facebook page can be tough. Consistent content and smart promotion are key, but results can be slow. At TrendEvo, we provide solutions to help your Facebook page thrive with real followers and engagement."
        actions={
          <div className="flex flex-wrap items-center gap-3">
            <SecondaryButton href={signInUrl} className="h-[50px] w-[180px] shrink-0">
              Sign In
            </SecondaryButton>
            <PrimaryButton
              href={signUpUrl}
              className="shrink-0 border-[1.5px] border-[#cc7aff]"
            >
              Create an Account
            </PrimaryButton>
          </div>
        }
        illustration={{
          src: '/images/facebook-page-followers/facebook-page-followers-excited-user-celebrating-facebook-page-growth-with-analytics-chart-illustration.webp',
          alt: 'Excited user celebrating Facebook page growth with analytics chart',
          width: 558,
          height: 621,
          maxWidthClassName: 'max-w-[558px]',
          unoptimized: true,
        }}
      />
      <OrderFormSection />

      <TestimonialsSection data={facebookPageFollowersTestimonialsData} />
      <ServiceWorkingProcessSection
        badge={facebookPageFollowersWorkingProcessHeading.badge}
        underlineSrc={facebookPageFollowersWorkingProcessHeading.underlineSrc}
        underlineWidth={
          facebookPageFollowersWorkingProcessHeading.underlineWidth
        }
        title={facebookPageFollowersWorkingProcessHeading.title}
        subtitle={facebookPageFollowersWorkingProcessHeading.subtitle}
        titleClassName={
          facebookPageFollowersWorkingProcessHeading.titleClassName
        }
        subtitleClassName={
          facebookPageFollowersWorkingProcessHeading.subtitleClassName
        }
        steps={facebookPageFollowersWorkingProcessSteps}
      />
      <ServiceLeading slug="facebook-page-followers" />
      <ServiceLeading slug="facebook-page-followers-related-services" />
      <FaqSection data={facebookPageFollowersFaqData} />
      <CtaSection
        title={facebookPageFollowersCta.title}
        description={facebookPageFollowersCta.description}
        buttonsOutlet={facebookPageFollowersCta.buttonsOutlet}
      />
    </>
  );
}
