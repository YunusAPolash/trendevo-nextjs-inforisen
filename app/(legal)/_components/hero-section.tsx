import PrimaryCard from '@/components/cards/primary-card';
import PrimarySection from '@/components/sections/primary-section';
import SiteHeader from '@/components/layout/site-header';

type HeroSectionProps = {
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  lastUpdated: string;
};

export default function HeroSection({
  titlePrefix,
  titleHighlight,
  description,
  lastUpdated,
}: HeroSectionProps) {
  return (
    <PrimarySection className="overflow-hidden bg-[#FCF8FF] py-0 lg:py-0">
      <SiteHeader className="border-b border-white/30 bg-white/50" />
      <PrimaryCard
        bg="card-3"
        className="container flex flex-col items-center gap-8 rounded-none bg-[#FCF8FF] bg-[length:100%_100%] py-12 text-center lg:py-14"
      >
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold leading-[1.4] tracking-tight text-[#232323] md:text-5xl lg:text-[64px]">
            {titlePrefix}{' '}
            <span className="text-gradient">{titleHighlight}</span>
          </h1>
          <p className="mx-auto max-w-4xl text-lg font-medium leading-relaxed text-[#343e56]">
            {description}
          </p>
        </div>
        <p className="text-xl font-semibold tracking-wide text-[#343e56]">
          Last Updated: {lastUpdated}
        </p>
      </PrimaryCard>
    </PrimarySection>
  );
}
