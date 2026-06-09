import Image from 'next/image';

import PrimaryCard from '@/components/cards/primary-card';
import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import { cn } from '@/lib/utils';

const leftAdvantages = [
  {
    step: '01',
    title: 'Fast Follower and Page Growth',
    description:
      'We help to bring potential followers to your profile or page via targeted marketing on Facebook. It also boosts your visits and reaches.',
    icon: '/images/service-smm-panel/fast-follower-and-page-growth.png',
  },
  {
    step: '02',
    title: 'Targeted Audience Expansion',
    description:
      'You can do better with your content to get millions of views with our Facebook SMM panel. This also makes it easier to meet targeted people.',
    icon: '/images/service-smm-panel/targeted-audience-expansion.png',
  },
  {
    step: '03',
    title: 'Time-Saving Growth',
    description:
      'You can manage all your Facebook profiles or pages in one place using our service. It also makes it faster to expand the follower base with no real effort.',
    icon: '/images/service-smm-panel/time-saving-growth.png',
  },
] as const;

const rightAdvantages = [
  {
    step: '04',
    title: 'Fast Likes, Comments & Shares',
    description:
      'You can make your brand get better engagement with followers and likes using our Facebook SMM panel. This also makes your business look reliable among people.',
    icon: '/images/service-smm-panel/fast-likes-comments-and-shares.png',
  },
  {
    step: '05',
    title: 'Social Proof and Credibility',
    description:
      'With our service, you can build trust and reliability by getting real likes, shares, or positive comments on your posts.',
    icon: '/images/service-smm-panel/social-proof-and-credibility.png',
  },
  {
    step: '06',
    title: 'Community Growth in Private Groups',
    description:
      'With our help, your community can grow in a private group. Your private group can get more visibility means more opportunities to attract new buyers and followers.',
    icon: '/images/service-smm-panel/community-growth-in-private-groups.png',
  },
] as const;

function StepBadge({
  step,
  compact = false,
  className,
}: {
  step: string;
  compact?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-full bg-[rgba(234,230,255,0.16)]',
        compact ? 'size-14 p-1.5' : 'w-[107px] p-2.5',
        className,
      )}
    >
      <div
        className={cn(
          'bg-brand-gradient relative flex items-center justify-center rounded-full border-2 border-dashed border-white shadow-[inset_0px_2px_6px_0px_rgba(255,255,255,0.1)]',
          compact ? 'size-11' : 'size-[85px] p-5',
        )}
      >
        <span
          className={cn(
            'font-medium leading-none text-white',
            compact ? 'text-lg' : 'text-[32px]',
          )}
        >
          {step}
        </span>
      </div>
    </div>
  );
}

function AdvantageTimeline({ steps }: { steps: readonly string[] }) {
  return (
    <div className="relative flex w-14 shrink-0 self-stretch sm:w-20 lg:w-[107px]">
      <div
        aria-hidden
        className="bg-brand-gradient absolute left-1/2 top-10 bottom-10 w-1 -translate-x-1/2 rounded-full lg:top-[80px] lg:bottom-[80px] lg:w-2.5"
      />
      <div className="relative flex w-full flex-col justify-between py-2 lg:py-0">
        {steps.map((step) => (
          <div key={step} className="flex justify-center lg:block">
            <StepBadge step={step} compact className="lg:hidden" />
            <StepBadge step={step} className="hidden lg:flex" />
          </div>
        ))}
      </div>
    </div>
  );
}

function AdvantageCard({
  title,
  description,
  icon,
  className,
}: {
  title: string;
  description: string;
  icon: string;
  className?: string;
}) {
  return (
    <PrimaryCard
      bg="card-3"
      className={cn(
        'relative min-h-[232px] gap-0 overflow-hidden rounded-2xl border border-[#e7abff]/70 p-0 px-4 py-3.5 ring-0',
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
          <Image
            src={icon}
            alt=""
            aria-hidden
            width={54}
            height={54}
            quality={100}
            className="relative z-10 size-[54px] object-contain"
          />
        </div>

        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-1.5">
            <Image
              src="/images/why-choose-us/title-bullet.svg"
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

function AdvantageColumn({
  advantages,
}: {
  advantages: typeof leftAdvantages | typeof rightAdvantages;
}) {
  return (
    <div className="flex w-full min-w-0 flex-col gap-7 lg:max-w-[580px]">
      {advantages.map(({ step, ...advantage }) => (
        <AdvantageCard key={step} {...advantage} />
      ))}
    </div>
  );
}

export default function ServiceAdvantage() {
  return (
    <PrimarySection bg="section-4" className="relative overflow-hidden py-16 sm:py-20">
      <Image
        src="/images/service-smm-panel/decorative-wave-top-left.png"
        alt=""
        aria-hidden
        width={1651}
        height={932}
        className="pointer-events-none absolute -left-[30%] -top-32 hidden h-auto w-[min(120vw,1651px)] rotate-[1.3deg] opacity-90 lg:block"
      />
      <Image
        src="/images/service-smm-panel/decorative-wave-bottom-right.png"
        alt=""
        aria-hidden
        width={1651}
        height={932}
        className="pointer-events-none absolute -bottom-32 -right-[25%] hidden h-auto w-[min(120vw,1651px)] -rotate-[178.7deg] opacity-90 lg:block"
      />

      <div className="container relative flex flex-col gap-10 sm:gap-12 lg:gap-16">
        <SectionHeading
          badge="Advantages"
          title={
            <>
              Advantages of Using{' '}
              <span className="text-gradient">Facebook SMM Panel</span>
            </>
          }
          subtitle="A Facebook SMM panel helps businesses grow followers, likes, and engagement quickly and efficiently, saving time and boosting online presence."
          titleClassName="whitespace-normal text-2xl tracking-[0.48px] max-w-[1200px] sm:text-[32px] md:text-[40px] lg:text-[48px]"
          subtitleClassName="max-w-[1064px] text-base sm:text-lg"
        />

        <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-6">
          <div className="flex w-full min-w-0 flex-row items-stretch gap-3 sm:gap-5">
            <AdvantageTimeline steps={leftAdvantages.map((item) => item.step)} />
            <AdvantageColumn advantages={leftAdvantages} />
          </div>

          <div className="flex w-full min-w-0 flex-row items-stretch gap-3 sm:gap-5">
            <AdvantageTimeline steps={rightAdvantages.map((item) => item.step)} />
            <AdvantageColumn advantages={rightAdvantages} />
          </div>
        </div>
      </div>
    </PrimarySection>
  );
}
