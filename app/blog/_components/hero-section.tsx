import PrimaryCard from '@/components/cards/primary-card';
import PrimarySection from '@/components/sections/primary-section';

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
    <PrimarySection className="overflow-hidden bg-transparent pb-0 pt-20 lg:pb-0">
      <div className="container mt-[54px]">
        <PrimaryCard
          bg="card-3"
          darkBg="blog-hero-dark"
          className="flex w-full flex-col items-center gap-8 overflow-hidden rounded-none bg-[#FCF8FF] py-12 text-center dark:bg-transparent lg:py-14 [&>div[aria-hidden]]:bg-[length:100%_100%] [&>div[aria-hidden]]:bg-top [&>div[aria-hidden]]:bg-no-repeat lg:[&>div[aria-hidden]]:bg-cover lg:[&>div[aria-hidden]]:bg-center"
        >
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl font-bold leading-[1.4] tracking-tight text-[#232323] md:text-5xl lg:text-[64px] dark:text-[#efedf1]">
              {titlePrefix}{' '}
              <span className="text-gradient">{titleHighlight}</span>
            </h1>
            <p className="mx-auto max-w-4xl text-lg font-medium leading-relaxed text-[#343e56] dark:text-[#c1c4cc]">
              {description}
            </p>
          </div>
          <p className="text-xl font-semibold tracking-wide text-[#343e56] dark:text-[#c1c4cc]">
            Last Updated: {lastUpdated}
          </p>
        </PrimaryCard>
      </div>
    </PrimarySection>
  );
}
