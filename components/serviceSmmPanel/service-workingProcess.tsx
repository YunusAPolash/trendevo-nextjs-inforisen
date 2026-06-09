import Image from 'next/image';

import PrimaryCard from '@/components/cards/primary-card';
import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';

const steps = [
  {
    number: '01',
    title: 'Simple Registration',
    description:
      'You’ll need to sign up quickly with just a few steps to start using our SMM panel.',
  },
  {
    number: '02',
    title: 'Customize Your Plan',
    description:
      'Single out the features and services that fit your needs or budget.',
  },
  {
    number: '03',
    title: 'Process a Secure Payment',
    description:
      'Make payments safely via trusted methods to protect your information.',
  },
  {
    number: '04',
    title: 'Track Your Growth & Enjoy',
    description:
      'Monitor your progress easily and see how your social media improves.',
  },
] as const;

function ProcessStepCard({
  number,
  title,
  description,
}: (typeof steps)[number]) {
  return (
    <PrimaryCard
      bg="card-9"
      className="relative flex h-full min-h-[240px] flex-col gap-6 rounded-xl border border-[#e1d8ff] p-3 ring-0"
    >
      <div className="relative flex size-[60px] sm:size-[82px] shrink-0 items-center justify-center">
        <Image
          src="/images/service-smm-panel/working-process-step-hex.svg"
          alt=""
          aria-hidden
          width={82}
          height={82}
          className="absolute inset-0 size-[60px] sm:size-[82px]"
        />
        <span className="text-gradient relative z-10 text-[22px] sm:text-[28px] font-semibold leading-none">
          {number}
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Image
            src="/images/why-choose-us/title-bullet.svg"
            alt=""
            aria-hidden
            width={10}
            height={10}
            className="size-2.5 shrink-0"
          />
          <h3 className="text-lg font-semibold leading-normal tracking-[0.2px] text-[#232323] sm:text-xl">
            {title}
          </h3>
        </div>
        <p className="text-base leading-normal text-[#5a5a5a]">{description}</p>
      </div>
    </PrimaryCard>
  );
}

export default function ServiceWorkingProcess() {
  return (
    <PrimarySection bg="section-9" className="overflow-hidden py-16 sm:py-20">
      <div className="container flex flex-col gap-10 sm:gap-12 lg:gap-16">
        <SectionHeading
          badge="Working Process"
          title={
            <>
              Working Process Of{' '}
              <span className="text-gradient">Facebook SMM Panel</span>
            </>
          }
          subtitle="A Facebook SMM panel helps businesses grow followers, likes, and engagement quickly and efficiently, saving time and boosting online presence."
          titleClassName="whitespace-normal max-w-[1200px] text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]"
          subtitleClassName="max-w-[1064px] text-base sm:text-lg"
        />

        <div className="flex flex-col items-center gap-3">
          <div className="grid w-full gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
            {steps.map((step) => (
              <ProcessStepCard key={step.number} {...step} />
            ))}
          </div>

          <Image
            src="/images/service-smm-panel/working-process-flow-connectors.svg"
            alt=""
            aria-hidden
            width={1123}
            height={74}
            className="hidden h-auto w-full max-w-[1123px] xl:block"
            unoptimized
          />
        </div>
      </div>
    </PrimarySection>
  );
}
