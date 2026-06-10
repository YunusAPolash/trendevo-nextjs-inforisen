import Image from 'next/image';
import { ChevronsRight } from 'lucide-react';
import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';

const features = [
  'Fast Delivery with Smooth and Reliable Performance',
  'Real & High-Quality Engagement to Build Strong Social Proof',
  'Safe, Secure & High Retention for Long-Term Growth',
] as const;

const platformDescription =
  'A reliable SMM platform designed to deliver fast, secure, and high-quality social media growth for individuals, businesses, and resellers.';

function FeatureList({ idPrefix }: { idPrefix: string }) {
  return (
    <ul className="flex max-w-2xl flex-col gap-4.5">
      {features.map((feature) => (
        <li key={`${idPrefix}-${feature}`} className="flex items-center gap-2">
          <Image
            src="/images/icons/check-icon.svg"
            alt=""
            width={24}
            height={24}
            className="size-6 shrink-0"
            aria-hidden
          />
          <span className="text-lg font-medium leading-normal text-[#071431]">
            {feature}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function MissionVisionSection() {
  return (
    <PrimarySection bg="section-4">
      <div className="container py-16 lg:py-20">
        <div className="relative flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-24">
          <div className="relative mx-auto aspect-[567/698] w-full max-w-xl shrink-0 overflow-visible lg:mx-0">
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-0 left-1/2 z-0 hidden h-28 w-full max-w-xl -translate-x-1/2 rounded-2xl bg-white/35 lg:block"
            />

            <div
              aria-hidden
              className="pointer-events-none absolute -left-20 top-72 z-10 hidden size-72 -rotate-12 opacity-50 sm:top-80 lg:top-96"
            >
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src="/images/about/about-mission-vision-target-icon.png"
                  alt=""
                  fill
                  className="scale-125 object-cover object-center"
                  sizes="288px"
                />
              </div>
            </div>

            <div className="relative z-20 h-full w-full overflow-visible">
              <Image
                src="/images/about/about-mission-vision-character.png"
                alt="TrendEvo specialist highlighting mission and vision for social media growth"
                width={952}
                height={1024}
                priority
                className="absolute inset-0 h-full w-full scale-110 object-cover object-top"
                sizes="576px"
              />
            </div>
          </div>

          <div className="flex w-full max-w-3xl shrink-0 flex-col gap-10">
            <div className="flex flex-col gap-7">
              <SectionHeading
                align="left"
                badge="ABOUT US"
                title={
                  <>
                    Our <span className="text-gradient">Mission & Vision</span>
                  </>
                }
                subtitle={platformDescription}
                titleClassName="max-w-2xl text-4xl leading-snug tracking-wide text-[#13203b] lg:text-5xl"
                subtitleClassName="max-w-2xl text-xl font-medium"
              />

              <div className="flex flex-col gap-10">
                <FeatureList idPrefix="mission" />

                <div className="flex flex-col gap-6">
                  <p className="text-xl font-medium leading-normal text-[#404a60]">
                    {platformDescription}
                  </p>
                  <FeatureList idPrefix="vision" />
                </div>
              </div>
            </div>

            <Button className="bg-brand-gradient h-13 w-fit gap-2 rounded-lg border-2 border-[#cc7aff] px-4.5 text-lg font-semibold text-white hover:opacity-90">
              Contact with Us
              <ChevronsRight className="size-6" aria-hidden />
            </Button>
          </div>
        </div>
      </div>
    </PrimarySection>
  );
}
