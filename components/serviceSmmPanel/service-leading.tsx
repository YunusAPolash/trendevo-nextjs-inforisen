import Image from 'next/image';

import PrimaryCard from '@/components/cards/primary-card';
import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import { cn } from '@/lib/utils';

const topRowFeatures = [
  {
    title: 'Fast & Reliable Delivery',
    description:
      'RendEvo ensures that all your Facebook SMM orders are processed quickly, accurately, and securely. Our fast and reliable delivery system guarantees that likes, comments, and followers reach your account on time, helping you maintain consistent engagement and uninterrupted growth for your page.',
    icon: '/images/service-smm-panel/fast-and-reliable-delivery.png',
    iconWidth: 54,
    iconHeight: 54,
  },
  {
    title: '24/7 Support',
    description:
      'Our team is available around the clock to assist you in both Bangla and English. Whether you have questions, need guidance, or face any issues, TrendEvo’s 24/7 support ensures you get timely, personalized help to maximize your Facebook growth.',
    icon: '/images/service-smm-panel/24-7-support.png',
    iconWidth: 54,
    iconHeight: 54,
  },
] as const;

const bottomRowFeatures = [
  {
    title: 'Authentic Engagement',
    description:
      'Gain real likes, comments, and followers that genuinely interact with your content. TrendEvo ensures meaningful engagement to help your Facebook page grow naturally and build long-term audience trust.',
    icon: '/images/service-smm-panel/authentic-engagement.png',
    iconWidth: 54,
    iconHeight: 54,
  },
  {
    title: 'Affordable Pricing',
    description:
      'Enjoy competitive rates designed for Bangladeshi businesses, allowing you to grow your Facebook presence effectively without straining your budget.',
    icon: '/images/service-smm-panel/affordable-pricing.png',
    iconWidth: 54,
    iconHeight: 54,
  },
  {
    title: 'Customer-Focused Service',
    description:
      'Our dedicated team guides you at every step, providing personalized support and expert advice to help you achieve your Facebook growth goals with confidence.',
    icon: '/images/service-smm-panel/customer-focused-service.png',
    iconWidth: 54,
    iconHeight: 54,
  },
] as const;

function LeadingCard({
  title,
  description,
  icon,
  iconWidth,
  iconHeight,
  className,
}: {
  title: string;
  description: string;
  icon: string;
  iconWidth: number;
  iconHeight: number;
  className?: string;
}) {
  return (
    <PrimaryCard
      bg="card-10"
      className={cn(
        'relative flex min-h-[300px] flex-col justify-center gap-0 overflow-hidden rounded-2xl border border-[#e7abff]/70 p-0 px-4 py-3.5 ring-0',
        className,
      )}
    >
      <div className="relative z-10 flex flex-col gap-[18px]">
        <div className="relative flex size-[77px] shrink-0 items-center justify-center">
          <Image
            src="/images/why-choose-us/hex-icon.svg"
            alt=""
            aria-hidden
            width={77}
            height={77}
            className="absolute inset-0 size-[77px]"
          />
          <div
            className="relative z-10 shrink-0"
            style={{ width: iconWidth, height: iconHeight }}
          >
            <Image
              src={icon}
              alt=""
              aria-hidden
              width={iconWidth}
              height={iconHeight}
              quality={100}
              className="size-full object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-1.5">
            <Image
              src="/images/why-choose-us/title-bullet-second.svg"
              alt=""
              aria-hidden
              width={12}
              height={12}
              className="size-3 shrink-0"
            />
            <h3 className="text-lg font-semibold leading-none text-[#343e56] sm:text-[22px]">
              {title}
            </h3>
          </div>
          <p className="text-base leading-normal text-[#313131]">{description}</p>
        </div>
      </div>
    </PrimaryCard>
  );
}

export default function ServiceLeading() {
  return (
    <PrimarySection  className="relative overflow-hidden py-16 sm:py-20">
      <Image
        src="/images/service-smm-panel/leading-decorative-wave.svg"
        alt=""
        aria-hidden
        width={1000}
        height={932}
        className="pointer-events-none absolute left-[-30%] top-[-50%] hidden h-auto w-[min(120vw,1000px)] rotate-[1.3deg] opacity-90 lg:block"
        unoptimized
      />

      <div className="container relative flex flex-col gap-10 sm:gap-12 lg:gap-16">
        <SectionHeading
          badge="Why TrendEvo"
          title={
            <>
              Why TrendEvo Leads in{' '}
              <span className="text-gradient">Facebook SMM Services</span>
            </>
          }
          subtitle="RendEvo delivers reliable Facebook SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease."
          titleClassName="whitespace-normal max-w-[1200px] text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]"
          subtitleClassName="max-w-[1064px] text-base sm:text-lg"
        />

        <div className="flex flex-col gap-8 lg:gap-10">
          <div className="grid gap-6 lg:grid-cols-2">
            {topRowFeatures.map((feature) => (
              <LeadingCard key={feature.title} {...feature} />
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {bottomRowFeatures.map((feature) => (
              <LeadingCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </PrimarySection>
  );
}
