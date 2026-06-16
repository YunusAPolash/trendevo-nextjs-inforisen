import HeroSection from '@/components/sections/hero-section';
import PrimaryButton from '@/components/buttons/primary-button';
import SecondaryButton from '@/components/buttons/secondary-button';
import { data } from '@/app/(subservice)/kick-viewers/page-data';
import { signInUrl, signUpUrl } from '@/lib/auth-urls';
import { formatUsersTrustLabel, getStats } from '@/lib/stats';
import { renderText } from '@/lib/utils/renderText';

const { hero } = data;

export default async function KickViewersHeroSection() {
  const { usersAll } = await getStats();

  return (
    <HeroSection
      bg={hero.bg}
      variant={hero.variant}
      trustBadge={{
        ...hero.trustBadgeBase,
        label: formatUsersTrustLabel(usersAll),
      }}
      title={renderText(hero.title)}
      description={hero.description}
      actions={
        <div className="flex flex-wrap items-center gap-3">
          <SecondaryButton href={signInUrl} className="h-[50px] w-[180px] shrink-0">
            {hero.signInLabel}
          </SecondaryButton>
          <PrimaryButton
            href={signUpUrl}
            className="shrink-0 border-[1.5px] border-[#cc7aff]"
          >
            {hero.createAccountLabel}
          </PrimaryButton>
        </div>
      }
      illustration={hero.illustration}
    />
  );
}
