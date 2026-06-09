import Image from 'next/image';

import PrimaryButton from '@/components/buttons/primary-button';
import PrimarySection from '@/components/sections/primary-section';

export default function ServiceHero() {
  return (
    <PrimarySection bg="section-1" className="overflow-hidden px-0">
      <div className="container relative grid gap-8 pt-28 sm:gap-10  sm:pt-36 md:pt-40 lg:min-h-[650px] lg:grid-cols-2 lg:gap-8 lg:pt-[104px]">
        <div className="flex min-w-0 flex-col justify-center gap-[34px] lg:max-w-[762px] ">
          <div className="flex flex-col gap-7">
            <h1 className="text-[28px] font-semibold leading-[1.35] tracking-[0.48px] text-[#313131] sm:text-4xl md:text-5xl lg:text-[48px]">
              Boost Facebook{' '}
              <span className="text-gradient">reach and engagement</span> with
              TrendEvo.
            </h1>
            <p className="max-w-[762px] text-base font-medium leading-relaxed text-[#343e56] sm:text-lg">
              RendEvo helps Bangladeshi businesses grow their Facebook presence
              with real engagement, reliable results, and locally optimized
              strategies. Our platform ensures smooth, secure, and effective
              social media growth tailored to your business goals
            </p>
          </div>

          <PrimaryButton showArrow className="w-fit">
            Get Started Now
          </PrimaryButton>
        </div>

        <div className="mx-auto w-full min-w-0 max-w-[583px] lg:absolute lg:bottom-0 lg:right-6 lg:mx-0 xl:right-8">
          <Image
            src="/images/service-smm-panel/best-boost-facebook.png"
            alt="TrendEvo Facebook growth specialist illustration"
            width={583}
            height={648}
            priority
            sizes="(max-width: 1024px) 100vw, 583px"
            className="block h-auto w-full"
          />
        </div>
      </div>
    </PrimarySection>
  );
}
