import HeroSection from '@/components/sections/hero-section';
import { Button } from '@/components/ui/button';
import {
  getCountryHeroContent,
  type CountryHeroSlug,
} from '@/components/countryPanel/country-hero-content';

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
      bg="section-1"
      variant="wide-responsive"
      eyebrow={eyebrow}
      title={title}
      description={description}
      actions={
        <div className="flex flex-wrap items-center gap-3">
          <Button
            variant="outline"
            className="h-10 shrink-0 rounded-[10px] border-[#cb7ef7] bg-white/25 px-4 text-sm font-semibold text-gradient hover:bg-white/40 sm:h-11 sm:px-5 sm:text-base md:h-[50px] md:w-[180px] md:px-[18px]"
          >
            {signInLabel}
          </Button>
          <Button className="bg-brand-gradient h-10 shrink-0 rounded-[10px] border-[1.5px] border-[#cc7aff] px-4 text-sm font-semibold text-white hover:opacity-90 sm:h-11 sm:px-5 sm:text-base md:h-[50px] md:px-[18px]">
            {createAccountLabel}
          </Button>
        </div>
      }
      illustration={illustration}
    />
  );
}
