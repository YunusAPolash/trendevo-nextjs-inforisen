import Image from 'next/image';

import PrimaryCard from '@/components/cards/primary-card';

import {
  CARD_DESCRIPTION,
  type WhyChooseUsFeature,
} from '@/app/(home)/_components/why-choose-us-data';

export function WhyChooseUsCard({
  title,
  icon,
  iconWidth,
  iconHeight,
}: WhyChooseUsFeature) {
  return (
    <PrimaryCard
      bg="card-2"
      darkBg="card-2-dark"
      className="relative gap-0 overflow-hidden rounded-2xl border-[0.7px] border-solid border-[#ffcbe5] p-0 px-3 py-3 ring-0 dark:border-white/20 sm:px-4 sm:py-3.5"
    >
      <div className="relative overflow-hidden">
        <div className="relative z-10 flex flex-col gap-3 sm:gap-[18px]">
          <div className="relative flex size-14 shrink-0 items-center justify-center gap-2.5 px-2 py-2 sm:size-[77px] sm:px-[13px] sm:py-3.5">
            <Image
              src="/images/why-choose-us/why-choose-us-hex-icon-decoration.svg"
              alt=""
              aria-hidden
              width={77}
              height={77}
              className="absolute inset-0 size-14 sm:size-[77px] dark:hidden"
            />
            <Image
              src="/images/why-choose-us/why-choose-us-hex-icon-dark-decoration.svg"
              alt=""
              aria-hidden
              width={77}
              height={77}
              className="absolute inset-0 hidden size-14 sm:size-[77px] dark:block"
            />
            <div
              className="relative z-10 shrink-0 scale-[0.72] sm:scale-100"
              style={{ width: iconWidth, height: iconHeight }}
            >
              <Image
                src={icon}
                alt=""
                aria-hidden
                fill
                sizes={`${Math.max(iconWidth, iconHeight)}px`}
                quality={100}
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:gap-2.5">
            <div className="flex items-start gap-1.5 sm:items-center">
              <Image
                src="/images/why-choose-us/why-choose-us-title-bullet-decoration.svg"
                alt=""
                aria-hidden
                width={12}
                height={12}
                className="mt-1 size-2.5 shrink-0 sm:mt-0 sm:size-3"
              />
              <h3 className="text-lg font-semibold leading-tight text-[#343e56] dark:text-white sm:text-xl md:text-[22px] md:leading-none">
                {title}
              </h3>
            </div>
            <p className="text-sm leading-normal text-[#313131] dark:text-white sm:text-base">
              {CARD_DESCRIPTION}
            </p>
          </div>
        </div>
      </div>
    </PrimaryCard>
  );
}
