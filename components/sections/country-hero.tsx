import HeroSection from '@/components/sections/hero-section';
import PrimaryButton from '@/components/buttons/primary-button';
import SecondaryButton from '@/components/buttons/secondary-button';
import {
  getCountryHeroContent,
  type CountryHeroSlug,
} from '@/components/countryPanel/country-hero-content';
import { signInUrl, signUpUrl } from '@/lib/auth-urls';

type CountryHeroProps = {
  slug: CountryHeroSlug;
};

export default function CountryHero({ slug }: CountryHeroProps) {
  const {
    eyebrow,
    title,
    description,
    signInLabel,
    createAccountLabel,
    illustration,
  } = getCountryHeroContent(slug);

  return (
    <HeroSection
    sectionClassName=""
      bg="section-1"
      variant="wide-responsive"
      eyebrow={eyebrow}
      title={title}
      description={description}
  

      actions={
        <div className="flex flex-wrap items-center gap-3">
          <SecondaryButton
            href={signInUrl}
            className="h-10 shrink-0 sm:h-11 md:h-[50px] md:w-[180px]"
          >
            {signInLabel}
          </SecondaryButton>
          <PrimaryButton
            href={signUpUrl}
            className="shrink-0 border-[1.5px] border-[#cc7aff]"
          >
            {createAccountLabel}
          </PrimaryButton>
        </div>
      }
      illustration={illustration}
    />
  );
}
