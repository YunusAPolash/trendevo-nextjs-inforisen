import Image from 'next/image';
import { ChevronsRight } from 'lucide-react';
import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import PrimaryButton from '@/components/buttons/primary-button';
import { data } from '@/app/about-us/page-data';
import { renderText } from '@/lib/utils/renderText';

const { missionVision } = data;

function FeatureList({ idPrefix }: { idPrefix: string }) {
  return (
    <ul className="flex w-full min-w-0 flex-col gap-4.5">
      {missionVision.features.map((feature) => (
        <li
          key={`${idPrefix}-${feature}`}
          className="flex w-full min-w-0 items-start gap-2"
        >
          <Image
            src="/images/icons/site-check-icon.svg"
            alt=""
            width={24}
            height={24}
            className="mt-0.5 size-6 shrink-0"
            aria-hidden
          />
          <span className="min-w-0 flex-1 text-base font-medium leading-normal break-words text-[#071431] sm:text-lg dark:text-[#dfe0e4]">
            {feature}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function MissionVisionSection() {
  return (
    <PrimarySection
      bg="section-4"
      darkBg="section-10-dark"
      className="overflow-x-hidden"
    >
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="relative mx-auto aspect-[567/698] w-full max-w-xl overflow-hidden lg:mx-0 lg:max-w-none">
            <div className="relative z-20 h-full w-full">
              <Image
                src={missionVision.image.src}
                alt={missionVision.image.alt}
                fill
                priority
                className="object-contain object-bottom xl:object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="flex w-full min-w-0 flex-col gap-10">
            <div className="flex w-full min-w-0 flex-col gap-7">
              <SectionHeading
                align={missionVision.heading.align}
                badge={missionVision.heading.badge}
                title={renderText(missionVision.heading.title)}
                subtitle={missionVision.heading.subtitle}
                titleClassName={missionVision.heading.titleClassName}
                subtitleClassName={missionVision.heading.subtitleClassName}
              />

              <div className="flex w-full min-w-0 flex-col gap-10">
                <FeatureList idPrefix="mission" />

                <div className="flex w-full min-w-0 flex-col gap-6">
                  <p className="w-full min-w-0 text-base font-medium leading-normal break-words text-[#404a60] sm:text-lg lg:text-xl dark:text-[#c1c4cc]">
                    {missionVision.platformDescription}
                  </p>
                  <FeatureList idPrefix="vision" />
                </div>
              </div>
            </div>

            <PrimaryButton className="w-fit max-w-full gap-2 rounded-lg border-2 border-[#cc7aff] md:h-13 md:px-4.5 md:text-lg">
              {missionVision.ctaLabel}
              <ChevronsRight className="size-6 shrink-0" aria-hidden />
            </PrimaryButton>
          </div>
        </div>
      </div>
    </PrimarySection>
  );
}
