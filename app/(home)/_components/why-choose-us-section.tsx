import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';

import { WhyChooseUsCard } from '@/app/(home)/_components/why-choose-us-card';
import {
  leftFeatures,
  rightFeatures,
  timelineSteps,
} from '@/app/(home)/_components/why-choose-us-data';
import { WhyChooseUsDesktopTimeline } from '@/app/(home)/_components/why-choose-us-timeline';

export default function WhyChooseUsSection() {
  return (
    <PrimarySection bg="section-7" className="overflow-x-hidden py-12 sm:py-16 lg:py-20">
      <div className="container flex flex-col items-center gap-8 sm:gap-12 lg:gap-16">
        <SectionHeading
          badge="Why Choose Us"
          title={
            <>
              Why <span className="text-gradient">Choose Us</span>
            </>
          }
          subtitle="Boost your social media growth with our fast, reliable, and high-quality SMM services. We provide secure delivery, competitive pricing, and trusted support to help your brand grow faster."
          underlineSrc="/images/why-choose-us/underline.svg"
          underlineWidth={169}
          titleClassName="text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]"
          subtitleClassName="max-w-[924px] text-sm font-medium leading-normal text-[#4f586d] sm:text-base md:text-lg"
        />

        <WhyChooseUsDesktopTimeline />

        <div className="flex w-full flex-col gap-5 sm:gap-7 lg:hidden">
          {timelineSteps.map((step, index) => (
            <div key={step} className="flex flex-col gap-5 sm:gap-7">
              <WhyChooseUsCard {...leftFeatures[index]} />
              <WhyChooseUsCard {...rightFeatures[index]} />
            </div>
          ))}
        </div>
      </div>
    </PrimarySection>
  );
}
