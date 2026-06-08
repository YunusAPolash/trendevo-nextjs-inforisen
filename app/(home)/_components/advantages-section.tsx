import Image from 'next/image';
import type { ReactNode } from 'react';

import PrimaryCard from '@/components/cards/primary-card';
import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import type { CardBgKey } from '@/components/cards/primary-card';

const leftAdvantages = [
  {
    bg: 'card-1' as CardBgKey,
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
    bg: 'card-2' as CardBgKey,
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
    bg: 'card-1' as CardBgKey,
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
    tall: true,
  },
  {
    bg: 'card-2' as CardBgKey,
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
  bg,
  tall = false,
}: {
  title: ReactNode;
  description: ReactNode;
  bg: CardBgKey;
  tall?: boolean;
}) {
  return (
    <PrimaryCard
      bg="card-5"
      className={`relative overflow-hidden rounded-xl px-4 py-6 ring-0 ${tall ? 'min-h-0' : 'h-[230px]'}`}
    >
     
      <Image
        src="/images/advantages/card-glow-ellipse.svg"
        alt=""
        aria-hidden
        width={73}
        height={73}
        className="pointer-events-none absolute top-[-54px] left-[-43px] size-[73px]"
      />

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
    <PrimarySection bg="section-4" className="overflow-hidden bg-white py-[84px]">
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

        <div className="relative flex w-full flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          <div className="flex w-full max-w-[454px] flex-col gap-16">
            {leftAdvantages.map((item, index) => (
              <AdvantageCard
                key={`left-${index}`}
                title={item.title}
                description={item.description}
                bg={item.bg}
              />
            ))}
          </div>

          <div className="relative h-[400px] w-full max-w-[434px] shrink-0 rounded-3xl bg-gradient-to-b from-[#b231ff]/5 to-[#b334ff]/[0.19] sm:h-[524px]">
            <div className="absolute top-1/2 left-1/2 h-[90%] w-[99%] -translate-x-1/2 -translate-y-[calc(50%+17px)] overflow-hidden">
              <Image
                src="/images/advantages/advantages-character.png"
                alt="SMM panel advantages illustration"
                fill
                sizes="(max-width: 434px) 100vw, 434px"
                quality={100}
                className="object-contain object-center"
                priority
              />
            </div>
          </div>

          <div className="flex w-full max-w-[454px] flex-col gap-16 lg:h-[510px] lg:justify-between">
            {rightAdvantages.map((item, index) => (
              <AdvantageCard
                key={`right-${index}`}
                title={item.title}
                description={item.description}
                bg={item.bg}
                tall={'tall' in item ? item.tall : false}
              />
            ))}
          </div>

          <div className="pointer-events-none absolute right-[8%] bottom-[8%] hidden -rotate-[18.33deg] lg:block">
            <div className="relative h-[123.55px] w-[122.56px] overflow-hidden">
              <Image
                src="/images/advantages/growth-progress-chart.png"
                alt=""
                aria-hidden
                fill
                sizes="123px"
                quality={100}
                className="object-cover object-center scale-[1.8] -translate-x-[20%] -translate-y-[20%]"
              />
            </div>
          </div>
        </div>
      </div>
    </PrimarySection>
  );
}
