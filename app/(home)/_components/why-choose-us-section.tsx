import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import { WhyChooseUsCard } from '@/app/(home)/_components/why-choose-us-card';
import { WhyChooseUsDesktopTimeline } from '@/app/(home)/_components/why-choose-us-timeline';
import { data } from '@/app/(home)/page-data';

const { whyChooseUs } = data;

export default function WhyChooseUsSection() {
  const { heading, leftFeatures, rightFeatures, timelineSteps } = whyChooseUs;

  return (
    <PrimarySection
      bg="section-7"
      darkBg="section-7-dark"
      className="overflow-x-hidden py-12 sm:py-16 lg:py-20"
    >
      <div className="container flex flex-col items-center gap-8 sm:gap-12 lg:gap-16">
        <SectionHeading
          badge={heading.badge}
          title={heading.title}
          subtitle={heading.subtitle}
          underlineWidth={heading.underlineWidth}
          badgeClassName="dark:bg-none dark:bg-clip-border dark:text-white"
          titleClassName={heading.titleClassName}
          subtitleClassName={heading.subtitleClassName}
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
