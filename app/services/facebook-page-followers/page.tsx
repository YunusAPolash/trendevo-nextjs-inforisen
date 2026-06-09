import type { Metadata } from 'next';
import HeroSection from './_components/hero-section';
import OrderFormSection from './_components/order-form-section';

export const metadata: Metadata = {
  title: 'Buy Facebook Page Followers | TrendEvo',
  description:
    'Buy real Facebook page followers at affordable prices. Fast delivery, secure checkout, and 24/7 support from TrendEvo in Bangladesh.',
};

export default function FacebookPageFollowersPage() {
  return (
    <>
      <HeroSection />
      <OrderFormSection />
    </>
  );
}
