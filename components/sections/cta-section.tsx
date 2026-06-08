import Image from 'next/image';
import type { ReactNode } from 'react';

import PrimarySection from '@/components/sections/primary-section';
import { cn } from '@/lib/utils';

const CTA_GRADIENT =
  'linear-gradient(219.3deg, rgb(255, 213, 245) 8.67%, rgb(254, 251, 255) 41.83%, rgb(236, 205, 255) 89.38%)';

type CtaSectionProps = {
  title: ReactNode;
  description: string;
  buttonsOutlet?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
};

export default function CtaSection({
  title,
  description,
  buttonsOutlet,
  imageSrc = '/images/cta/cta-character.png',
  imageAlt = 'Start growing with TrendEvo',
  className,
}: CtaSectionProps) {
  return (
    <PrimarySection
      className={cn('overflow-x-hidden py-16', className)}
    >
      <div className="container">
        <div className="relative">
          <div className="pointer-events-none absolute bottom-0 left-0 z-20 hidden origin-bottom scale-[1.08] lg:left-[66px] lg:block">
            <div className="relative h-[594px] w-[427px] max-w-[38vw] overflow-visible">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={552}
                height={594}
                className="absolute bottom-0 h-full w-[132%] max-w-none -left-[24%]"
                sizes="427px"
                priority
              />
            </div>
          </div>

          <div className="relative min-h-[486px] overflow-hidden rounded-[24px]">
            <div
              aria-hidden
              className="absolute inset-0"
              style={{ backgroundImage: CTA_GRADIENT }}
            />

            <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
              <Image
                src="/images/cta/cta-hex-pattern-1.png"
                alt=""
                aria-hidden
                width={1200}
                height={600}
                className="absolute -left-[10%] top-[8%] h-auto w-[70%] max-w-none"
                unoptimized
              />
              <Image
                src="/images/cta/cta-hex-pattern-2.png"
                alt=""
                aria-hidden
                width={1200}
                height={600}
                className="absolute -right-[8%] bottom-[4%] h-auto w-[65%] max-w-none"
                unoptimized
              />
            </div>

            <div className="relative z-10 flex min-h-[486px] flex-col lg:grid lg:grid-cols-[minmax(0,427px)_minmax(0,732px)] lg:items-stretch lg:justify-between lg:gap-12">
              <div aria-hidden className="hidden lg:block" />

              <div className="flex flex-col gap-[34px] px-6 py-10 lg:col-start-2 lg:justify-center lg:px-[66px] lg:py-[72px]">
                <div className="relative flex flex-col gap-8">
                  <div className="pointer-events-none absolute -left-8 top-[-75px] hidden h-[485px] w-[min(934px,120%)] opacity-[0.06] lg:block">
                    <Image
                      src="/images/cta/cta-world-map.png"
                      alt=""
                      aria-hidden
                      fill
                      className="object-cover object-left-top"
                      sizes="934px"
                      unoptimized
                    />
                  </div>

                  <h2 className="relative z-10 text-[32px] font-semibold leading-[1.35] tracking-[0.48px] text-[#313131] sm:text-[40px] lg:text-[48px]">
                    {title}
                  </h2>
                  <p className="relative z-10 text-base font-normal leading-normal text-[#13203b]">
                    {description}
                  </p>
                </div>

                {buttonsOutlet ? (
                  <div className="relative z-10 flex flex-wrap items-center gap-3">
                    {buttonsOutlet}
                  </div>
                ) : null}
              </div>

              <div className="relative mt-auto h-[min(420px,58vw)] w-full max-w-[380px] self-center overflow-visible px-6 pb-6 lg:hidden">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={552}
                  height={594}
                  className="absolute bottom-0 left-1/2 h-[115%] w-[129.17%] max-w-none -translate-x-[40%]"
                  sizes="(max-width: 640px) 320px, 380px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PrimarySection>
  );
}
