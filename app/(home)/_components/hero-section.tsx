import Image from 'next/image';
import PrimarySection from '@/components/sections/primary-section';
import PrimaryButton from '@/components/buttons/primary-button';
import SecondaryButton from '@/components/buttons/secondary-button';
import { data } from '@/app/(home)/page-data';
import { signUpUrl } from '@/lib/auth-urls';
import { getStats, formatUsersTrustLabel } from '@/lib/stats';
import { renderText } from '@/lib/utils/renderText';
import HeroImage from './hero-image';
const { hero } = data;

export default async function HeroSection() {
  const { usersAll } = await getStats();

  return (
    <PrimarySection
      bg="section-1"
      darkBg="section-1-dark"
      className="overflow-hidden px-0 pb-0"
    >
      <div className="container grid gap-8 pt-28 sm:gap-10 sm:pt-36 md:pt-40 lg:grid-cols-2 lg:items-end lg:gap-8 lg:pt-[154px] xl:pt-[198px]">
        <div className="flex min-w-0 flex-col gap-6 lg:max-w-[762px] lg:gap-8 lg:self-start">
          <div className="flex w-full max-w-full flex-wrap items-center gap-x-2 gap-y-1 rounded-lg border-l-2 border-[#cb7ef7] bg-white py-2 pl-1.5 pr-3 backdrop-blur-none sm:w-fit dark:bg-white/[0.07] dark:backdrop-blur-[10px]">
            <div className="flex -space-x-3">
              {hero.trustBadge.avatarSrcs.map((src, index) => (
                <Image
                  key={`${src}-${index}`}
            src={src}
            alt={`TrendEvo customer review avatar ${index + 1}`}
                  width={24}
                  height={24}
                  className="size-6 rounded-full border border-white object-cover dark:border-[0.5px]"
                />
              ))}
            </div>
            <Image
              src={hero.trustBadge.ratingIconSrc}
              alt="rating"
              width={16}
              height={15}
              className="size-4 shrink-0"
            />
            <span className="text-gradient text-sm font-medium dark:bg-none dark:bg-clip-border dark:text-white">
              {hero.trustBadge.rating}
            </span>
            <span className="text-gradient text-sm font-medium dark:bg-none dark:bg-clip-border dark:text-white">
              {formatUsersTrustLabel(usersAll)}
            </span>
          </div>

          <div className="space-y-6">
            <h1 className="text-[28px] font-semibold leading-[1.35] tracking-tight text-[#071431] sm:text-4xl md:text-5xl dark:text-[#efefef]">
              {renderText(hero.heading)}
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-[#313131] sm:text-base md:text-lg dark:text-[#ebecef]">
              {hero.description}
            </p>
            <div className="flex gap-2">
              <Image
                src={hero.trustBadge.promoIconSrc}
        alt="TrendEvo promotional offer icon"
                width={24}
                height={24}
                className="size-6 shrink-0"
              />
              <p className="text-base leading-relaxed text-[#313131] md:text-lg dark:text-white">
                {hero.promo}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <PrimaryButton
              href={signUpUrl}
              className="shrink-0 border-0 dark:border-[1.5px] dark:border-[#cc7aff]"
            >
              {hero.primaryButtonLabel}
            </PrimaryButton>
            <SecondaryButton
              href={hero.secondaryButtonHref}
              className="h-10 shrink-0 border-[1.5px] border-[#d181ff] bg-white hover:bg-white/95 sm:h-11 md:h-[50px] md:w-[180px]"
            >
              {hero.secondaryButtonLabel}
            </SecondaryButton>
          </div>
        </div>

        <div className="mx-auto w-full min-w-0 max-w-[669px] lg:mx-0 lg:-mt-16 lg:justify-self-end lg:self-end">
          <HeroImage />
        </div>
      </div>
    </PrimarySection>
  );
}
