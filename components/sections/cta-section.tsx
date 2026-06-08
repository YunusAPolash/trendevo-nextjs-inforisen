import Image from 'next/image';
import type { ReactNode } from 'react';
import PrimarySection from '@/components/sections/primary-section';
import type { SectionBgKey } from '@/components/sections/primary-section';
import { cn } from '@/lib/utils';

type CtaSectionProps = {
  title: ReactNode;
  description: string;
  buttonsOutlet?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  bg?: SectionBgKey;
  className?: string;
};

export default function CtaSection({
  title,
  description,
  buttonsOutlet,
  imageSrc = '/images/hero/hero-character.png',
  imageAlt = 'Start growing with TrendEvo',
  bg = 'section-8',
  className,
}: CtaSectionProps) {
  return (
    <PrimarySection bg={bg} className={className}>
      <div className="container grid items-center gap-10 lg:grid-cols-2">
        <div className="relative mx-auto aspect-[427/594] w-full max-w-[427px] lg:mx-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain object-bottom"
          />
        </div>

        <div className="space-y-8">
          <h2 className="text-4xl font-semibold leading-[1.35] tracking-wide text-[#313131] md:text-5xl">
            {title}
          </h2>
          <p className="text-base leading-relaxed text-[#13203b] md:text-lg">
            {description}
          </p>
          {buttonsOutlet ? (
            <div className={cn('flex flex-wrap gap-3')}>{buttonsOutlet}</div>
          ) : null}
        </div>
      </div>
    </PrimarySection>
  );
}
