import HeroSection from '@/components/sections/hero-section';
import PrimaryButton from '@/components/buttons/primary-button';
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
      eyebrow={hero.eyebrow}
      title={renderText(hero.title)}
      description={renderText(hero.description)}
      actions={
        <PrimaryButton
          href={signUpUrl}
          showArrow
          className="w-fit border-[1.5px] border-[#cc7aff]"
        >
          {hero.primaryButtonLabel}
        </PrimaryButton>
      }
      illustration={hero.illustration}
      socialIcons={hero.socialIcons}
    />
  );
}
