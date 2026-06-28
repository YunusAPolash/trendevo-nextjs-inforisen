import Image from 'next/image';

import PrimaryButton from '@/components/buttons/primary-button';
import PrimaryCard from '@/components/cards/primary-card';
import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import { data } from '@/app/(service)/snapchat-smm-panel/page-data';
import type { SocialServiceItem } from '@/components/serviceSmmPanel/social-service-content';
import { cn } from '@/lib/utils';

const { socialServices } = data;

function SocialServiceCard({
  title,
  description,
  icon,
  iconWidth,
  iconHeight,
}: SocialServiceItem) {
  return (
    <PrimaryCard
      bg="card-7"
      darkBg="card-10-dark"
      className="relative h-full min-h-[270px] gap-0 overflow-hidden rounded-2xl border border-[#A578FF]/40 border-l-[2.5px] border-l-[#a578ff] p-4 ring-0 dark:border-[0.7px] dark:border-solid dark:border-white dark:border-l-[0.7px] dark:px-4 dark:py-3.5"
    >
      <div className="relative z-10 flex h-full flex-col gap-[22px] dark:gap-[18px]">
        <div className="relative flex size-[77px] shrink-0 items-center justify-center">
          <Image
            src="/images/why-choose-us/why-choose-us-hex-icon-secondd-decoration.svg"
            alt=""
            aria-hidden
            width={77}
            height={77}
            className="absolute inset-0 size-[77px] dark:hidden"
          />
          <Image
            src="/images/why-choose-us/why-choose-us-hex-icon-dark-decoration.svg"
            alt=""
            aria-hidden
            width={77}
            height={77}
            className="absolute inset-0 hidden size-[77px] dark:block"
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

        <div className="flex flex-col gap-3.5 dark:gap-2.5">
          <div className="flex items-center gap-1.5">
            <Image
              src="/images/why-choose-us/why-choose-us-title-bullet-second-decoration.svg"
              alt=""
              aria-hidden
              width={12}
              height={12}
              className="size-3 shrink-0"
            />
            <h3 className="text-lg font-semibold leading-none text-[#313131] sm:text-[22px] dark:text-white">
              {title}
            </h3>
          </div>
          <p className="text-base leading-normal text-[#313131] dark:text-[#dfe0e4] dark:leading-[1.5]">
            {description}
          </p>
        </div>
      </div>
    </PrimaryCard>
  );
}

export default function SnapchatSmmPanelSocialServiceSection() {
  return (
    <PrimarySection
      bg="section-6"
      className="relative overflow-hidden py-16 sm:py-20"
    >
      <Image
        src={socialServices.decorativeLeft.src}
        alt=""
        aria-hidden
        width={socialServices.decorativeLeft.width}
        height={socialServices.decorativeLeft.height}
        className={socialServices.decorativeLeft.className}
      />
      <Image
        src={socialServices.decorativeRight.src}
        alt=""
        aria-hidden
        width={socialServices.decorativeRight.width}
        height={socialServices.decorativeRight.height}
        className={socialServices.decorativeRight.className}
      />

      <div className="container flex flex-col gap-10 sm:gap-12 lg:gap-12">
        <SectionHeading
          badge={socialServices.badge}
          title={socialServices.title}
          subtitle={socialServices.subtitle}
          badgeClassName="dark:bg-none dark:bg-clip-border dark:text-white"
          titleClassName={cn(socialServices.titleClassName, 'dark:text-[#efedf1]')}
          subtitleClassName={cn(
            socialServices.subtitleClassName,
            'dark:text-[#c1c4cc]',
          )}
        />

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {socialServices.services.map((service) => (
            <SocialServiceCard key={service.title} {...service} />
          ))}
        </div>

        <div className="flex justify-center">
          <PrimaryButton href={socialServices.ctaHref} showArrow className="w-fit">
            {socialServices.ctaLabel}
          </PrimaryButton>
        </div>
      </div>
    </PrimarySection>
  );
}
