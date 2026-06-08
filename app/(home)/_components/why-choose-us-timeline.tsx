import { WhyChooseUsCard } from '@/app/(home)/_components/why-choose-us-card';
import {
  leftFeatures,
  rightFeatures,
  timelineSteps,
} from '@/app/(home)/_components/why-choose-us-data';

const TIMELINE_LINE_GRADIENT =
  'linear-gradient(90.06deg, rgb(209, 129, 255) 2.85%, rgb(255, 99, 190) 90.53%)';

const TIMELINE_MARKER_GRADIENT =
  'linear-gradient(93.44deg, rgb(209, 129, 255) 2.85%, rgb(255, 99, 190) 90.53%)';

function TimelineMarker({ number }: { number: string }) {
  return (
    <div
    className="flex size-[68px] items-center justify-center rounded-full p-4 xl:size-[85px] xl:p-5"
    style={{ backgroundImage: TIMELINE_MARKER_GRADIENT }}
  >
    <span className="text-2xl font-medium leading-none text-white xl:text-[32px] xl:leading-[43px]">
      {number}
    </span>
  </div>
  );
}

function TimelineVLine() {
  return (
    <div
      aria-hidden
      className="min-h- w-2.5 flex-1"
      style={{ backgroundImage: TIMELINE_LINE_GRADIENT }}
    />
  );
}

function TimelineStepper() {
  return (
    <div className="flex h-full min-h-0 flex-col items-center py-1">
      <div aria-hidden className="min-h-12 flex-1" />

      <TimelineMarker number={timelineSteps[0]} />
      <TimelineVLine />
      <TimelineMarker number={timelineSteps[1]} />
      <TimelineVLine />
      <TimelineMarker number={timelineSteps[2]} />

      <div aria-hidden className="min-h-12 flex-1" />
    </div>
  );
}

export function WhyChooseUsDesktopTimeline() {
  return (
    <div className="hidden w-full min-w-0 max-w-[1440px] grid-cols-[minmax(0,1fr)_88px_minmax(0,1fr)] items-stretch gap-x-3 lg:grid xl:grid-cols-[minmax(0,1fr)_107px_minmax(0,1fr)] xl:gap-x-6">
      <div className="flex min-w-0 flex-col gap-5 xl:gap-7">
        {leftFeatures.map((feature) => (
          <div key={feature.title} className="flex min-w-0 flex-1 flex-col">
            <WhyChooseUsCard {...feature} />
          </div>
        ))}
      </div>

      <TimelineStepper />

      <div className="flex min-w-0 flex-col gap-5 xl:gap-7">
        {rightFeatures.map((feature) => (
          <div key={feature.title} className="flex min-w-0 flex-1 flex-col">
            <WhyChooseUsCard {...feature} />
          </div>
        ))}
      </div>
    </div>
  );
}
