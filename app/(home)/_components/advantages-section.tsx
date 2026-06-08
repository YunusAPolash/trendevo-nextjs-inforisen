import Image from 'next/image';
import type { ReactNode } from 'react';

import PrimaryCard from '@/components/cards/primary-card';
import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import { cn } from '@/lib/utils';

const leftAdvantages = [
  {
    title: (
      <>
        Lowest-Cost <span className="text-gradient">SMM</span> and{' '}
        <span className="text-gradient">Social Media</span> Marketing Services
      </>
    ),
    description:
      'Affordable SMM services let businesses, freelancers, and creators grow online fast. Gain likes, followers, and engagement across Instagram, Facebook, and Twitter. Start small, test, and scale campaigns while boosting reach and visibility—maximizing results without overspending.',
  },
  {
    title: (
      <>
        Reliable <span className="text-gradient">SMM</span> Reseller Support for
        Growing <span className="text-gradient">Your Business</span>
      </>
    ),
    description:
      'SMM reseller support lets entrepreneurs, agencies, and freelancers grow fast without building from scratch. Deliver ready-made services under your brand, customize packages, and scale confidently while maintaining quality and boosting revenue.',
  },
] as const;

const rightAdvantages = [
  {
    title: (
      <>
        Multiple <span className="text-gradient">Safe Payment</span> Options for{' '}
        <span className="text-gradient">SMM</span> Orders
      </>
    ),
    description: (
      <>
        <p className="mb-0">
          Enjoy multiple safe payment options, including cards, PayPal, and
          cryptocurrencies.All transactions are secure, encrypted, and
          fraud-protected for peace of mind.
        </p>
        <p>
          Focus on growing your social media presence without any payment
          worries.
        </p>
      </>
    ),
    grow: true,
  },
  {
    title: (
      <>
        24/7 Live Support for All{' '}
        <span className="text-gradient">SMM Services</span> What You Needs
      </>
    ),
    description:
      'Get 24/7 live support for all your SMM and Instagram panel needs.Instant help ensures smooth campaigns, quick issue resolution, and peace of mind.Focus on growth while experts are always ready to assist.',
  },
] as const;

function AdvantageCard({
  title,
  description,
  grow = false,
}: {
  title: ReactNode;
  description: ReactNode;
  grow?: boolean;
}) {
  return (
    <PrimaryCard
      bg="card-3"
      className={cn(
        'relative overflow-hidden rounded-xl px-4 py-6 ring-0',
        grow
          ? 'lg:min-h-0 lg:flex-1'
          : 'lg:h-[230px] lg:shrink-0',
      )}
    >
      <div className="relative z-10 flex min-w-0 flex-col gap-4">
        <div className="flex min-w-0 items-start gap-2">
          <div
            className="h-[34px] w-[6px] shrink-0 rounded-[9.5px]"
            style={{
              backgroundImage:
                'linear-gradient(91.07deg, #cb7ef7 4.77%, #ff9bc1 39.51%, #ee4fac 74.24%)',
            }}
          />
          <h3 className="min-w-0 flex-1 text-lg font-semibold leading-normal text-[#13203b]">
            {title}
          </h3>
        </div>
        <div className="text-sm font-medium leading-normal text-[#343e56]">
          {description}
        </div>
      </div>
    </PrimaryCard>
  );
}

export default function AdvantagesSection() {
  return (
    <PrimarySection
      bg="section-4"
      className="overflow-x-hidden bg-white py-12 sm:py-16 lg:py-[84px]"
    >
      <div className="container flex min-w-0 flex-col items-center gap-10 sm:gap-12 lg:gap-16">
        <SectionHeading
          badge="ADVANTAGES"
          title={
            <>
              Advantages of using{' '}
              <span className="text-gradient">our panel services</span>
            </>
          }
          subtitle="We provide SMM services on almost every social media platform. We have everything you would need to increase engagement. Check out our range of services. Choose the one you need!"
          underlineSrc="/images/advantages/underline.svg"
          underlineWidth={150}
          titleClassName="text-[32px] sm:text-[40px] lg:text-[48px] tracking-[0.48px] text-[#13203b] whitespace-normal"
          subtitleClassName="max-w-[868px] font-medium text-[#4f586d]"
        />

        <div className="flex w-full min-w-0 flex-col items-center gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-6 xl:gap-10">
          <div className="flex w-full min-w-0 max-w-[454px] flex-col gap-6 lg:h-[524px] lg:gap-16">
            {leftAdvantages.map((item, index) => (
              <AdvantageCard
                key={`left-${index}`}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          <div className="relative mx-auto h-[260px] w-full min-w-0 max-w-[320px] shrink-0 sm:h-[360px] sm:max-w-[380px] lg:mx-0 lg:h-[555px] lg:max-w-[434px]">
            <Image
              src="/images/advantages/advantage.png"
              alt="SMM panel advantages illustration"
              fill
              sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 434px"
              quality={100}
              className="object-contain object-bottom lg:object-cover"
              priority
            />
          </div>

          <div className="flex w-full min-w-0 max-w-[454px] flex-col gap-6 lg:h-[524px] lg:gap-16">
            {rightAdvantages.map((item, index) => (
              <AdvantageCard
                key={`right-${index}`}
                title={item.title}
                description={item.description}
                grow={'grow' in item ? item.grow : false}
              />
            ))}
          </div>
        </div>
      </div>
    </PrimarySection>
  );
}
