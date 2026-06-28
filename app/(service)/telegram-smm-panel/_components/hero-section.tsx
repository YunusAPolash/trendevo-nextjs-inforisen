import Image from 'next/image';

import PrimaryButton from '@/components/buttons/primary-button';
import PrimarySection from '@/components/sections/primary-section';
import { data } from '@/app/(service)/telegram-smm-panel/page-data';
import { signUpUrl } from '@/lib/auth-urls';
import { renderText } from '@/lib/utils/renderText';

const { hero } = data;

export default function TelegramSmmPanelHeroSection() {
  return (
    <PrimarySection
      bg="section-1"
      darkBg="page-hero-dark"
      className="overflow-hidden px-0"
    >
      <div className="container relative grid gap-8 pt-28 sm:gap-10 sm:pt-36 md:pt-40 lg:min-h-[650px] lg:grid-cols-2 lg:gap-8 lg:pt-[104px]">
        <div className="flex min-w-0 flex-col justify-center gap-[34px] lg:max-w-[762px]">
          <div className="flex flex-col gap-7">
            <h1 className="text-[28px] font-semibold leading-[1.35] tracking-[0.48px] text-[#313131] sm:text-4xl md:text-5xl lg:text-[48px] dark:text-[#efefef]">
              {renderText(hero.title)}
            </h1>
            <div className="flex max-w-[762px] flex-col gap-4 text-base font-medium leading-relaxed text-[#343e56] sm:text-lg dark:text-[#ebecef]">
              <p>{hero.description}</p>
              <p>{hero.descriptionSecondary}</p>
            </div>
          </div>

          <PrimaryButton
            href={signUpUrl}
            showArrow
            className="w-fit dark:border-[1.5px] dark:border-[#cc7aff]"
          >
            {hero.buttonLabel}
          </PrimaryButton>
        </div>

        <div className="mx-auto w-full min-w-0 max-w-[583px] lg:absolute lg:bottom-0 lg:right-6 lg:mx-0 xl:right-8">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            width={hero.image.width}
            height={hero.image.height}
            priority
            quality={100}
            unoptimized
            sizes="(max-width: 1024px) 100vw, 583px"
            className="block h-auto w-full"
          />
        </div>
      </div>
    </PrimarySection>
  );
}
