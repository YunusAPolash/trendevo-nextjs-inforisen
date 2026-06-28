import HeroSection from '@/components/sections/hero-section';
import PrimaryButton from '@/components/buttons/primary-button';
import SecondaryButton from '@/components/buttons/secondary-button';
import { data } from '@/app/about-us/page-data';
import { signUpUrl } from '@/lib/auth-urls';
import { renderText } from '@/lib/utils/renderText';

const { hero } = data;

export default function AboutUsHeroSection() {
  return (
    <HeroSection
      bg={hero.bg}
      variant={hero.variant}
      decoration={hero.decoration}
      title={renderText(hero.title)}
      description={renderText(hero.description)}
      actions={
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          <PrimaryButton
            href={signUpUrl}
            showArrow
            className="w-fit border-[1.5px] border-[#cc7aff]"
          >
            {hero.primaryButtonLabel}
          </PrimaryButton>
          <SecondaryButton
            href={hero.secondaryButtonHref}
            className="h-10 shrink-0 border-[1.5px] border-[#d181ff] bg-white hover:bg-white/95 sm:h-11 md:h-[50px]"
          >
            {hero.secondaryButtonLabel}
          </SecondaryButton>
        </div>
      }
      illustration={hero.illustration}
      socialIcons={hero.socialIcons}
    />
  );
}
