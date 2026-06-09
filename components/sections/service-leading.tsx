import Image from 'next/image';

import PrimaryCard from '@/components/cards/primary-card';
import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import { cn } from '@/lib/utils';

import {
  getServiceLeadingContent,
  type ServiceLeadingFeature,
  type ServiceLeadingSlug,
} from '../serviceSmmPanel/service-leading-content';

function LeadingCard({
  title,
  description,
  icon,
  iconWidth,
  iconHeight,
  className,
}: ServiceLeadingFeature & { className?: string }) {
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

type ServiceLeadingProps = {
  slug: ServiceLeadingSlug;
};

export default function ServiceLeading({ slug }: ServiceLeadingProps) {
  const {
    badge,
    title,
    subtitle,
    topRowFeatures,
    bottomRowFeatures,
    titleClassName,
    subtitleClassName,
  } = getServiceLeadingContent(slug);

  return (
    <PrimarySection className="relative overflow-hidden py-16 sm:py-20">
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
          badge={badge}
          title={title}
          subtitle={subtitle}
          titleClassName={titleClassName}
          subtitleClassName={subtitleClassName}
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
