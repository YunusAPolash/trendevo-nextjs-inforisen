import Image from 'next/image';
import type { ReactNode } from 'react';
import PrimarySection from '@/components/sections/primary-section';
import { Button } from '@/components/ui/button';

export type CountryHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  illustrationSrc: string;
  illustrationAlt: string;
  illustrationWidth?: number;
  illustrationHeight?: number;
};

export default function CountryHero({
  eyebrow,
  title,
  description,
  illustrationSrc,
  illustrationAlt,
  illustrationWidth = 581,
  illustrationHeight = 648,
}: CountryHeroProps) {
  return (
    <PrimarySection bg="section-1" className="overflow-hidden px-0 pb-0">
      <div className="mx-auto grid max-w-[1440px] gap-8 px-6 pt-28 sm:gap-10 sm:pt-36 md:pt-40 lg:grid-cols-2 lg:items-end lg:gap-8 lg:pt-[154px] xl:pt-[198px]">
        <div className="flex min-w-0 flex-col gap-4 lg:max-w-[762px] lg:gap-4 lg:self-start">
          <p className="text-gradient text-2xl font-semibold leading-[1.45]">
            {eyebrow}
          </p>

          <div className="flex flex-col gap-8 lg:gap-[34px]">
            <div className="flex flex-col gap-6 lg:gap-7">
              <h1 className="text-[28px] font-semibold leading-[1.35] tracking-[0.48px] text-[#313131] sm:text-4xl md:text-5xl">
                {title}
              </h1>
              <p className="max-w-[762px] text-base font-medium leading-[1.5] text-[#343e56] sm:text-lg">
                {description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                variant="outline"
                className="h-10 shrink-0 rounded-[10px] border-[#cb7ef7] bg-white/25 px-4 text-sm font-semibold text-gradient hover:bg-white/40 sm:h-11 sm:px-5 sm:text-base md:h-[50px] md:w-[180px] md:px-[18px]"
              >
                Sign In
              </Button>
              <Button className="bg-brand-gradient h-10 shrink-0 rounded-[10px] border-[1.5px] border-[#cc7aff] px-4 text-sm font-semibold text-white hover:opacity-90 sm:h-11 sm:px-5 sm:text-base md:h-[50px] md:px-[18px]">
                Create an Account
              </Button>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full min-w-0 max-w-[581px] lg:mx-0 lg:-mt-16 lg:justify-self-end lg:self-end">
          <Image
            src={illustrationSrc}
            alt={illustrationAlt}
            width={illustrationWidth}
            height={illustrationHeight}
            priority
            sizes="(max-width: 1024px) 100vw, 581px"
            className="block h-auto w-full"
          />
        </div>
      </div>
    </PrimarySection>
  );
}
