'use client';

import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from 'react';

import { WhyChooseUsCard } from '@/app/(home)/_components/why-choose-us-card';
import { data } from '@/app/(home)/page-data';

const { whyChooseUs } = data;
const { leftFeatures, rightFeatures, timelineSteps } = whyChooseUs;

const TIMELINE_LINE_GRADIENT_LIGHT =
  'linear-gradient(90.06deg, rgb(209, 129, 255) 2.85%, rgb(255, 99, 190) 90.53%)';

const TIMELINE_MARKER_GRADIENT_LIGHT =
  'linear-gradient(93.44deg, rgb(209, 129, 255) 2.85%, rgb(255, 99, 190) 90.53%)';

const TIMELINE_MARKER_GRADIENT_DARK =
  'linear-gradient(93.44deg, rgba(153, 28, 226, 0.036) 2.848%, rgba(124, 12, 78, 0.02) 90.525%)';

type TimelineRail = {
  x: number;
  y1: number;
  y2: number;
};

function TimelineMarker({ number }: { number: string }) {
  return (
    <div
      data-dot
      className="relative z-10 flex size-[72px] shrink-0 items-center justify-center p-1.5 lg:size-[88px] lg:p-2 xl:size-[107px]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full border border-white/50 bg-white/[0.1] shadow-[inset_0_1px_2px_rgba(255,255,255,0.65)] backdrop-blur-xl backdrop-saturate-200 dark:border-white/30 dark:bg-[rgba(234,230,255,0.16)] dark:shadow-[inset_0_1px_3px_rgba(255,255,255,0.42),inset_0_-2px_10px_rgba(255,255,255,0.08)] dark:backdrop-blur-[20px] dark:backdrop-saturate-150"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-[10%] hidden rounded-full bg-gradient-to-b from-white/10 via-transparent to-white/10 opacity-70 dark:block"
      />
      <div
        className="relative z-10 flex size-14 items-center justify-center rounded-full border border-transparent p-3 [--marker-gradient:var(--marker-gradient-light)] shadow-none dark:border-white/25 dark:shadow-[inset_0_0_10px_rgba(255,255,255,0.1),inset_2px_0_5px_rgba(255,255,255,0.12),inset_-2px_0_5px_rgba(255,255,255,0.12)] dark:[--marker-gradient:var(--marker-gradient-dark)] dark:backdrop-blur-sm lg:size-[68px] lg:p-4 xl:size-[85px] xl:p-5"
        style={
          {
            '--marker-gradient-light': TIMELINE_MARKER_GRADIENT_LIGHT,
            '--marker-gradient-dark': TIMELINE_MARKER_GRADIENT_DARK,
            backgroundImage: 'var(--marker-gradient)',
          } as CSSProperties
        }
      >
        <span className="relative z-10 text-xl font-medium leading-none text-white lg:text-2xl xl:text-[32px] xl:leading-[43px]">
          {number}
        </span>
      </div>
    </div>
  );
}

function buildTimelineRail(
  layout: HTMLDivElement,
  dots: HTMLElement[],
): TimelineRail | null {
  if (dots.length === 0) {
    return null;
  }

  const layoutRect = layout.getBoundingClientRect();
  const first = dots[0].getBoundingClientRect();
  const last = dots[dots.length - 1].getBoundingClientRect();
  const x = first.left + first.width / 2 - layoutRect.left;
  const y1 = first.top - layoutRect.top;
  const y2 = last.bottom - layoutRect.top;

  if (y2 <= y1) {
    return null;
  }

  return { x, y1, y2 };
}

export function WhyChooseUsDesktopTimeline() {
  const layoutRef = useRef<HTMLDivElement>(null);
  const [rail, setRail] = useState<TimelineRail | null>(null);

  const drawLines = useCallback(() => {
    if (!window.matchMedia('(min-width: 1024px)').matches) {
      setRail(null);
      return;
    }

    const layout = layoutRef.current;
    if (!layout) {
      return;
    }

    const dots = Array.from(
      layout.querySelectorAll<HTMLElement>('[data-dot]'),
    );

    if (dots.length !== timelineSteps.length) {
      return;
    }

    const layoutRect = layout.getBoundingClientRect();
    if (layoutRect.width <= 0 || layoutRect.height <= 0) {
      return;
    }

    setRail(buildTimelineRail(layout, dots));
  }, []);

  useLayoutEffect(() => {
    let frame = 0;
    let retryTimer: ReturnType<typeof setTimeout> | undefined;

    const scheduleDraw = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        drawLines();
        requestAnimationFrame(drawLines);
      });
    };

    scheduleDraw();
    retryTimer = setTimeout(drawLines, 100);
    window.addEventListener('load', drawLines);

    const layout = layoutRef.current;
    if (!layout) {
      return () => {
        cancelAnimationFrame(frame);
        clearTimeout(retryTimer);
        window.removeEventListener('load', drawLines);
      };
    }

    const observer = new ResizeObserver(scheduleDraw);
    observer.observe(layout);

    layout.querySelectorAll('[data-dot]').forEach((dot) => {
      observer.observe(dot);
    });

    window.addEventListener('resize', scheduleDraw);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(retryTimer);
      observer.disconnect();
      window.removeEventListener('resize', scheduleDraw);
      window.removeEventListener('load', drawLines);
    };
  }, [drawLines]);

  return (
    <div
      ref={layoutRef}
      className="relative hidden w-full min-w-0 max-w-[1440px] flex-col gap-4 lg:flex lg:gap-5 xl:gap-7"
    >
      {rail ? (
        <div
          aria-hidden
          className="pointer-events-none absolute z-[1] w-2.5 -translate-x-1/2 rounded-full [--line-gradient:var(--line-gradient-light)] dark:bg-white/25 dark:[--line-gradient:none]"
          style={
            {
              left: rail.x,
              top: rail.y1,
              height: rail.y2 - rail.y1,
              '--line-gradient-light': TIMELINE_LINE_GRADIENT_LIGHT,
              backgroundImage: 'var(--line-gradient)',
            } as CSSProperties
          }
        />
      ) : null}

      {timelineSteps.map((step, index) => (
        <div
          key={step}
          className="relative grid grid-cols-[minmax(0,1fr)_72px_minmax(0,1fr)] items-center gap-x-2 lg:grid-cols-[minmax(0,1fr)_88px_minmax(0,1fr)] lg:gap-x-3 xl:grid-cols-[minmax(0,1fr)_107px_minmax(0,1fr)] xl:gap-x-6"
        >
          <WhyChooseUsCard {...leftFeatures[index]} />
          <div className="flex items-center justify-center py-2.5">
            <TimelineMarker number={step} />
          </div>
          <WhyChooseUsCard {...rightFeatures[index]} />
        </div>
      ))}
    </div>
  );
}
