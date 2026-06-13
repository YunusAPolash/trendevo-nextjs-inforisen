import Image from 'next/image';
import { ChevronsRight } from 'lucide-react';
import PrimarySection from '@/components/sections/primary-section';
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
    <ul className="flex w-full min-w-0 flex-col gap-4.5">
      {features.map((feature) => (
        <li
          key={`${idPrefix}-${feature}`}
          className="flex w-full min-w-0 items-start gap-2"
        >
          <Image
            src="/images/icons/check-icon.svg"
            alt=""
            width={24}
            height={24}
            className="mt-0.5 size-6 shrink-0"
            aria-hidden
          />
          <span className="min-w-0 flex-1 text-base font-medium leading-normal break-words text-[#071431] sm:text-lg dark:text-[#dfe0e4]">
            {feature}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function MissionVisionSection() {
  return (
    <PrimarySection
      bg="section-4"
      darkBg="section-10-dark"
      className="overflow-x-hidden"
    >
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="relative mx-auto aspect-[567/698] w-full max-w-xl overflow-hidden lg:mx-0 lg:max-w-none">
          
            <div className="relative z-20 h-full w-full">
              <Image
                src="/images/about/our-mission-and-vision.png"
                alt="TrendEvo specialist highlighting mission and vision for social media growth"
                fill
                priority
                className="object-contain object-bottom xl:object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="flex w-full min-w-0 flex-col gap-10">
            <div className="flex w-full min-w-0 flex-col gap-7">
              <div className="flex w-full min-w-0 flex-col gap-8">
                <h2 className="w-full min-w-0 text-3xl font-semibold leading-snug break-words text-[#13203b] sm:text-4xl lg:text-5xl dark:text-[#efedf1]">
                  Our{' '}
                  <span className="text-gradient">Mission & Vision</span>
                </h2>
                <p className="w-full min-w-0 text-base font-medium leading-normal break-words text-[#404a60] sm:text-lg lg:text-xl dark:text-[#c1c4cc]">
                  {platformDescription}
                </p>
              </div>

              <div className="flex w-full min-w-0 flex-col gap-10">
                <FeatureList idPrefix="mission" />

                <div className="flex w-full min-w-0 flex-col gap-6">
                  <p className="w-full min-w-0 text-base font-medium leading-normal break-words text-[#404a60] sm:text-lg lg:text-xl dark:text-[#c1c4cc]">
                    {platformDescription}
                  </p>
                  <FeatureList idPrefix="vision" />
                </div>
              </div>
            </div>

            <Button className="bg-brand-gradient h-13 w-fit max-w-full gap-2 rounded-lg border-2 border-[#cc7aff] px-4.5 text-lg font-semibold text-white hover:opacity-90">
              Contact with Us
              <ChevronsRight className="size-6 shrink-0" aria-hidden />
            </Button>
          </div>
        </div>
      </div>
    </PrimarySection>
  );
}
