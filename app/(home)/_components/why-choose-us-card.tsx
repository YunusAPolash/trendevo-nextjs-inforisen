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
      className="relative gap-0 overflow-hidden rounded-2xl border-[0.7px] border-solid border-[#ffcbe5] p-0 px-4 py-3.5 ring-0"
    >
      <div className="relative overflow-hidden">
        <div className="relative z-10 flex flex-col gap-[18px]">
          <div className="relative flex size-[77px] shrink-0 items-center justify-center gap-2.5 px-[13px] py-3.5">
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
                fill
                sizes={`${Math.max(iconWidth, iconHeight)}px`}
                quality={100}
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-1.5">
              <Image
                src="/images/why-choose-us/title-bullet.svg"
                alt=""
                aria-hidden
                width={12}
                height={12}
                className="size-3 shrink-0"
              />
              <h3 className="text-[22px] font-semibold leading-none text-[#343e56]">
                {title}
              </h3>
            </div>
            <p className="text-base leading-normal text-[#313131]">
              {CARD_DESCRIPTION}
            </p>
          </div>
        </div>
      </div>
    </PrimaryCard>
  );
}
