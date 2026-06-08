import Image from 'next/image';

import PrimaryCard from '@/components/cards/primary-card';
import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';

const CARD_DESCRIPTION =
  'Our system is designed to process orders quickly and efficiently. Once you place an order, our automated platform starts delivering almost instantly, ensuring fast results without compromising service stability.';

const leftFeatures = [
  {
    title: 'Cheapest SMM Panel',
    icon: '/images/why-choose-us/cheapest-smm-panel-icon.png',
    iconClassName: 'h-10 w-[43px] object-cover',
  },
  {
    title: 'Fast & Reliable Delivery',
    icon: '/images/why-choose-us/fast-delivery-icon.png',
    iconClassName: 'size-10 object-cover',
  },
  {
    title: 'Multitude of Services',
    icon: '/images/why-choose-us/multitude-services-icon.png',
    iconClassName: 'h-[30px] w-[57px] object-cover',
  },
] as const;

const rightFeatures = [
  {
    title: 'Real-time & Data',
    icon: '/images/why-choose-us/realtime-data-icon.png',
    iconClassName: 'h-10 w-[43px] object-cover',
  },
  {
    title: 'Bulk Orders Provide',
    icon: '/images/why-choose-us/bulk-orders-icon.png',
    iconClassName: 'h-10 w-[46px] object-cover',
  },
  {
    title: '24/7 Dedicated Customer Support',
    icon: '/images/why-choose-us/customer-support-icon.png',
    iconClassName: 'h-10 w-[47px] object-cover',
  },
] as const;

const timelineSteps = ['01', '02', '03'] as const;

type Feature = {
  title: string;
  icon: string;
  iconClassName: string;
};

function WhyChooseUsCard({ title, icon, iconClassName }: Feature) {
  return (
    <PrimaryCard
      bg="card-1"
      className="relative gap-0 overflow-hidden rounded-2xl border-[0.7px] border-solid border-[#ffcbe5] p-0 px-4 py-3.5 ring-0"
    >
      <div className="relative overflow-hidden">
        <div className="relative h-0 w-full overflow-visible">
          <Image
            src="/images/why-choose-us/card-pattern.png"
            alt=""
            aria-hidden
            width={773}
            height={483}
            className="pointer-events-none relative left-[-103px] top-[-193px] h-[483px] w-[773px] max-w-none object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 flex flex-col gap-[18px]">
        <div className="relative flex size-[77px] shrink-0 items-center justify-center gap-2.5 px-[13px] py-3.5">
          <Image
            src="/images/why-choose-us/hex-icon.svg"
            alt=""
            aria-hidden
            width={77}
            height={77}
            className="absolute inset-0 size-[77px]"
          />
          <Image
            src={icon}
            alt=""
            aria-hidden
            width={40}
            height={40}
            className={`relative z-10 ${iconClassName}`}
          />
        </div>

        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-1.5">
            <Image
              src="/images/why-choose-us/title-bullet.svg"
              alt=""
              aria-hidden
              width={12}
              height={12}
              className="size-3 shrink-0"
            />
            <h3 className="text-[22px] font-semibold leading-none text-[#343e56]">
              {title}
            </h3>
          </div>
          <p className="text-base leading-normal text-[#313131]">
            {CARD_DESCRIPTION}
          </p>
        </div>
        </div>
      </div>
    </PrimaryCard>
  );
}

function TimelineMarker({ number }: { number: string }) {
  return (
    <div className="flex w-[107px] items-center justify-center rounded-full bg-[rgba(234,230,255,0.16)] p-2.5">
      <div className="bg-brand-gradient flex w-[85px] items-center justify-center rounded-full p-5">
        <span className="text-[32px] font-medium leading-[43px] text-white">
          {number}
        </span>
      </div>
    </div>
  );
}

export default function WhyChooseUsSection() {
  return (
    <PrimarySection bg="section-7" className="overflow-hidden py-20 lg:py-20">
      <div className="container flex flex-col items-center gap-16">
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
          titleClassName="text-[32px] sm:text-[40px] lg:text-[48px] tracking-[0.48px]"
          subtitleClassName="max-w-[924px] font-medium leading-normal text-[#4f586d]"
        />

        <div className="relative hidden w-full max-w-[1440px] grid-cols-[minmax(0,600px)_107px_minmax(0,600px)] grid-rows-3 gap-x-6 gap-y-7 lg:grid">
          <div
            aria-hidden
            className="pointer-events-none relative col-start-2 row-start-1 row-span-3"
          >
            <div className="bg-brand-gradient absolute bottom-[100px] left-1/2 top-[100px] w-2.5 -translate-x-1/2 rounded-full" />
          </div>

          <div className="col-start-1 row-start-1 self-center">
            <WhyChooseUsCard {...leftFeatures[0]} />
          </div>
          <div className="relative z-10 col-start-2 row-start-1 flex items-center justify-center self-center">
            <TimelineMarker number={timelineSteps[0]} />
          </div>
          <div className="col-start-3 row-start-1 self-center">
            <WhyChooseUsCard {...rightFeatures[0]} />
          </div>

          <div className="col-start-1 row-start-2 self-center">
            <WhyChooseUsCard {...leftFeatures[1]} />
          </div>
          <div className="relative z-10 col-start-2 row-start-2 flex items-center justify-center self-center">
            <TimelineMarker number={timelineSteps[1]} />
          </div>
          <div className="col-start-3 row-start-2 self-center">
            <WhyChooseUsCard {...rightFeatures[1]} />
          </div>

          <div className="col-start-1 row-start-3 self-center">
            <WhyChooseUsCard {...leftFeatures[2]} />
          </div>
          <div className="relative z-10 col-start-2 row-start-3 flex items-center justify-center self-center">
            <TimelineMarker number={timelineSteps[2]} />
          </div>
          <div className="col-start-3 row-start-3 self-center">
            <WhyChooseUsCard {...rightFeatures[2]} />
          </div>
        </div>

        <div className="flex w-full flex-col gap-7 lg:hidden">
          {timelineSteps.map((step, index) => (
            <div key={step} className="flex flex-col gap-7">
              <WhyChooseUsCard {...leftFeatures[index]} />
              <WhyChooseUsCard {...rightFeatures[index]} />
            </div>
          ))}
        </div>
      </div>
    </PrimarySection>
  );
}
