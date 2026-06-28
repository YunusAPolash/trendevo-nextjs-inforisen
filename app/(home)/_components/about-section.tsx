import Image from 'next/image';

import PrimaryButton from '@/components/buttons/primary-button';
import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import { data } from '@/app/(home)/page-data';

const { about } = data;

export default function AboutSection() {
  return (
    <PrimarySection
      id="about"
      bg="section-10"
      darkBg="section-10-dark"
      className="overflow-hidden py-12 sm:py-16 lg:py-20"
    >
      <div className="container flex flex-col items-center gap-8 sm:gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <div className="flex w-full max-w-[777px] flex-col gap-6 sm:gap-8 lg:gap-[38px]">
          <div className="flex flex-col gap-5 sm:gap-7 lg:gap-[28px]">
            <div className="flex flex-col gap-5 sm:gap-6 lg:gap-8">
              <SectionHeading
                align={about.heading.align ?? 'left'}
                badge={about.heading.badge}
                underlineWidth={about.heading.underlineWidth}
                title={about.heading.title}
                subtitle={about.heading.subtitle}
                titleClassName={about.heading.titleClassName}
                subtitleClassName={about.heading.subtitleClassName}
              />
            </div>

            <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[38px]">
              <ul className="flex max-w-[671px] flex-col gap-3 sm:gap-4 lg:gap-[18px]">
                {about.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 sm:items-center"
                  >
                    <Image
                      src="/images/icons/site-check-icon.svg"
                      alt=""
                      aria-hidden
                      width={24}
                      height={24}
                      className="mt-0.5 size-5 shrink-0 sm:mt-0 sm:size-6"
                    />
                    <span className="text-sm font-medium leading-normal text-[#071431] dark:text-[#dfe0e4] sm:text-base md:text-lg lg:text-[20px]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="grid max-w-[671px] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                {about.trustPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-xl border border-[#e8d4f7] bg-white/60 px-4 py-3 dark:border-[#5c3d72] dark:bg-white/[0.04]"
                  >
                    <h3 className="text-sm font-semibold leading-snug text-[#13203b] dark:text-white sm:text-base">
                      {point}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <PrimaryButton
            href={about.ctaHref}
            className="w-fit gap-2 self-start border-none md:h-[52px] md:text-lg"
          >
            {about.ctaLabel}
            <Image
              src="/images/about/about-us-hugeicons-arrow-right-double-icon.svg"
              alt=""
              aria-hidden
              width={24}
              height={24}
              className="size-5 shrink-0 sm:size-6"
              unoptimized
            />
          </PrimaryButton>
        </div>

        <div className="relative mx-auto aspect-[594/736] w-full max-w-[320px] shrink-0 sm:max-w-[440px] lg:max-w-[594px]">
          <Image
            src={about.image.src}
            alt={about.image.alt}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 594px"
            priority
          />
        </div>
      </div>
    </PrimarySection>
  );
}
