import type { Metadata } from 'next';
import CtaSection from '@/components/sections/cta-section';
import FaqSection from '@/components/sections/faq-section';
import HeroSection from '@/components/sections/hero-section';
import ServiceLeading from '@/components/sections/service-leading';
import ServiceWorkingProcessSection from '@/components/sections/service-working-process-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { signInUrl, signUpUrl } from '@/lib/auth-urls';
import { getFacebookPageFollowersTrustBadge } from './_components/hero-content';
import OrderFormSection from './_components/order-form-section';
import { facebookPageFollowersCta } from './_components/cta-content';
import {
  facebookPageFollowersFaqHeading,
  facebookPageFollowersFaqItems,
} from './_components/faq-content';
import {
  facebookPageFollowersWorkingProcessHeading,
  facebookPageFollowersWorkingProcessSteps,
} from './_components/working-process-content';
import {
  facebookPageFollowersTestimonialsAssets,
  facebookPageFollowersTestimonialsFeaturedReview,
  facebookPageFollowersTestimonialsHeading,
  facebookPageFollowersTestimonialsLeftTextReviews,
  facebookPageFollowersTestimonialsRightTextReviews,
  facebookPageFollowersTestimonialsSectionBackground,
  facebookPageFollowersTestimonialsTabLabels,
  facebookPageFollowersTestimonialsVideoReviews,
} from './_components/testimonials-content';

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
            <Button
              asChild
              variant="outline"
              className="h-[50px] w-[180px] shrink-0 rounded-[10px] border-[#cb7ef7] bg-white/25 px-[18px] text-base font-semibold text-gradient hover:bg-white/40"
            >
              <Link href={signInUrl}>Sign In</Link>
            </Button>
            <Button
              asChild
              className="bg-brand-gradient h-[50px] shrink-0 rounded-[10px] border-[1.5px] border-[#cc7aff] px-[18px] text-base font-semibold text-white hover:opacity-90"
            >
              <Link href={signUpUrl}>Create an Account</Link>
            </Button>
          </div>
        }
        illustration={{
          src: '/images/facebook-page-followers/facebook-page-followers-hero-illustration.png',
          alt: 'Excited user celebrating Facebook page growth with analytics chart',
          width: 558,
          height: 621,
          maxWidthClassName: 'max-w-[558px]',
          unoptimized: true,
        }}
      />
      <OrderFormSection />

      <TestimonialsSection
        sectionBackground={facebookPageFollowersTestimonialsSectionBackground}
        badge={facebookPageFollowersTestimonialsHeading.badge}
        underlineSrc={facebookPageFollowersTestimonialsHeading.underlineSrc}
        underlineWidth={facebookPageFollowersTestimonialsHeading.underlineWidth}
        title={facebookPageFollowersTestimonialsHeading.title}
        subtitle={facebookPageFollowersTestimonialsHeading.subtitle}
        titleClassName={facebookPageFollowersTestimonialsHeading.titleClassName}
        subtitleClassName={
          facebookPageFollowersTestimonialsHeading.subtitleClassName
        }
        customerTabLabel={facebookPageFollowersTestimonialsTabLabels.customer}
        videoTabLabel={facebookPageFollowersTestimonialsTabLabels.video}
        assets={facebookPageFollowersTestimonialsAssets}
        leftTextReviews={facebookPageFollowersTestimonialsLeftTextReviews}
        rightTextReviews={facebookPageFollowersTestimonialsRightTextReviews}
        featuredReview={facebookPageFollowersTestimonialsFeaturedReview}
        videoReviews={facebookPageFollowersTestimonialsVideoReviews}
        defaultTab="video"
      />
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
      <FaqSection
        label={facebookPageFollowersFaqHeading.label}
        title={facebookPageFollowersFaqHeading.title}
        subtitle={facebookPageFollowersFaqHeading.subtitle}
        items={facebookPageFollowersFaqItems}
      />
      <CtaSection
        title={facebookPageFollowersCta.title}
        description={facebookPageFollowersCta.description}
        buttonsOutlet={facebookPageFollowersCta.buttonsOutlet}
      />
    </>
  );
}
