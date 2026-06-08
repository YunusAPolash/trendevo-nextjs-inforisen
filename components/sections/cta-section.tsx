import Image from 'next/image';
import type { ReactNode } from 'react';
import PrimaryCard from '@/components/cards/primary-card';
import PrimarySection from '@/components/sections/primary-section';
import { cn } from '@/lib/utils';

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
  imageSrc = '/images/cta/cta-character.webp',
  imageAlt = 'Start growing with TrendEvo',
  className,
}: CtaSectionProps) {
  return (
    <PrimarySection className={cn('py-16 lg:pb-16 lg:pt-28', className)}>
      <div className="container">
        <PrimaryCard
          bg="card-4"
          className="relative gap-0 overflow-visible rounded-3xl p-0 ring-0 lg:min-h-[486px] bg-[length:100%_100%]"
        >
          <div className="pointer-events-none absolute top-[-108px] left-6 z-10 hidden h-[594px] w-[427px] lg:left-[66px] lg:block">
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={552}
                height={594}
                className="absolute top-0 h-full w-[129.17%] max-w-none -left-[23.07%]"
                sizes="552px"
                priority
              />
            </div>
          </div>

          <div className="relative grid gap-8 px-6 py-10 lg:grid-cols-[427px_minmax(0,732px)] lg:justify-between lg:gap-12 lg:px-[66px] lg:py-0">
            <div className="relative mx-auto h-[420px] w-full max-w-[427px] overflow-hidden lg:hidden">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={552}
                height={594}
                className="absolute bottom-0 h-full w-[129.17%] max-w-none -left-[23.07%]"
                sizes="(max-width: 1024px) 100vw, 427px"
              />
            </div>

            <div aria-hidden className="hidden lg:block" />

            <div className="flex flex-col gap-[34px] lg:py-[72px]">
              <div className="flex flex-col gap-8">
                <h2 className="text-3xl font-semibold leading-[1.35] tracking-wide text-[#313131] sm:text-4xl lg:text-[48px]">
                  {title}
                </h2>
                <p className="text-base leading-relaxed text-[#13203b]">
                  {description}
                </p>
              </div>
              {buttonsOutlet ? (
                <div className="flex flex-wrap gap-3">{buttonsOutlet}</div>
              ) : null}
            </div>
          </div>
        </PrimaryCard>
      </div>
    </PrimarySection>
  );
}
