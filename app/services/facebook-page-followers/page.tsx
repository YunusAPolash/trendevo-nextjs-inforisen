import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import { Button } from '@/components/ui/button';
import { facebookPageFollowersTrustBadge } from './_components/hero-content';
import OrderFormSection from './_components/order-form-section';

export const metadata: Metadata = {
  title: 'Buy Facebook Page Followers | TrendEvo',
  description:
    'Buy real Facebook page followers at affordable prices. Fast delivery, secure checkout, and 24/7 support from TrendEvo in Bangladesh.',
};

export default function FacebookPageFollowersPage() {
  return (
    <>
      <HeroSection
        bg="section-1"
        variant="wide"
        trustBadge={facebookPageFollowersTrustBadge}
        title={
          <>
            Buy{' '}
            <span className="text-gradient">Facebook Followers</span> in Real,
            Fast &amp; Affordable price.
          </>
        }
        description="Growing a Facebook page can be tough. Consistent content and smart promotion are key, but results can be slow. At TrendEvo, we provide solutions to help your Facebook page thrive with real followers and engagement."
        actions={
          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="outline"
              className="h-[50px] w-[180px] shrink-0 rounded-[10px] border-[#cb7ef7] bg-white/25 px-[18px] text-base font-semibold text-gradient hover:bg-white/40"
            >
              Sign In
            </Button>
            <Button className="bg-brand-gradient h-[50px] shrink-0 rounded-[10px] border-[1.5px] border-[#cc7aff] px-[18px] text-base font-semibold text-white hover:opacity-90">
              Create an Account
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
    </>
  );
}
