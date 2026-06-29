import HeroSection from '@/components/sections/hero-section';
import PrimaryButton from '@/components/buttons/primary-button';
import SecondaryButton from '@/components/buttons/secondary-button';
import { data } from '@/app/(subservice)/buy-linkedin-followers/page-data';
import { signUpUrl } from '@/lib/auth-urls';
import { renderText } from '@/lib/utils/renderText';

const { hero } = data;

export default function LinkedinFollowersHeroSection() {
  return (
    <HeroSection
      bg={hero.bg}
      variant={hero.variant}
      trustBadge={{
        ...hero.trustBadgeBase,
        label: hero.trustLabel,
      }}
      title={renderText(hero.title)}
      description={
        <div className="flex flex-col gap-4">
          <p>{renderText(hero.description)}</p>
          <p>{renderText(hero.descriptionSecondary)}</p>
        </div>
      }
      actions={
        <div className="flex flex-wrap items-center gap-3">
          <PrimaryButton
            href={signUpUrl}
            className="shrink-0 border-[1.5px] border-[#cc7aff]"
          >
            {hero.primaryButtonLabel}
          </PrimaryButton>
          <SecondaryButton
            href={hero.secondaryButtonHref}
            className="h-[50px] w-[180px] shrink-0"
          >
            {hero.secondaryButtonLabel}
          </SecondaryButton>
        </div>
      }
      illustration={hero.illustration}
    />
  );
}
