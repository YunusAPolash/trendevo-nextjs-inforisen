import Image from 'next/image';
import type { ReactNode } from 'react';

import PrimaryCard from '@/components/cards/primary-card';
import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';

const CARD_HEIGHT = 230;
const CARD_GAP = 64;
const COLUMN_HEIGHT = CARD_HEIGHT * 2 + CARD_GAP;
const CENTER_IMAGE_HEIGHT = 555;

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
      className={`relative overflow-hidden rounded-xl px-4 py-6 ring-0 ${grow ? 'min-h-0 flex-1' : 'shrink-0'}`}
      style={grow ? undefined : { height: CARD_HEIGHT }}
    >
      <div className="relative z-10 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <div
            className="h-[34px] w-[6px] shrink-0 rounded-[9.5px]"
            style={{
              backgroundImage:
                'linear-gradient(91.07deg, #cb7ef7 4.77%, #ff9bc1 39.51%, #ee4fac 74.24%)',
            }}
          />
          <h3 className="max-w-[314px] text-lg font-semibold leading-normal text-[#13203b]">
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
    <PrimarySection bg="section-4" className="overflow-visible bg-white py-[84px]">
      <div className="container flex flex-col items-center gap-16">
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

        <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div
            className="flex w-full max-w-[454px] flex-col lg:w-[454px] lg:shrink-0"
            style={{ gap: CARD_GAP, height: COLUMN_HEIGHT }}
          >
            {leftAdvantages.map((item, index) => (
              <AdvantageCard
                key={`left-${index}`}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          <div
            className="relative w-full max-w-[434px] shrink-0 lg:w-[434px]"
            style={{ height: CENTER_IMAGE_HEIGHT }}
          >
            <Image
              src="/images/advantages/advantage.png"
              alt="SMM panel advantages illustration"
              fill
              sizes="400px"
              quality={100}
              className="object-cover object-bottom"
              priority
            />
          </div>

          <div
            className="flex w-full max-w-[454px] flex-col lg:w-[454px] lg:shrink-0"
            style={{ gap: CARD_GAP, height: COLUMN_HEIGHT }}
          >
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
