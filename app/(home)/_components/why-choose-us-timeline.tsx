'use client';

import { useCallback, useLayoutEffect, useRef, useState } from 'react';

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

type TimelineRail = {
  x: number;
  y1: number;
  y2: number;
};

function TimelineMarker({ number }: { number: string }) {
  return (
    <div
      data-dot
      className="relative z-10 flex size-[88px] shrink-0 items-center justify-center p-2 xl:size-[107px]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full border border-white/50 bg-white/[0.1] shadow-[inset_0_1px_2px_rgba(255,255,255,0.65)] backdrop-blur-xl backdrop-saturate-200"
      />
      <div
        className="relative z-10 flex size-[68px] items-center justify-center rounded-full p-4 xl:size-[85px] xl:p-5"
        style={{ backgroundImage: TIMELINE_MARKER_GRADIENT }}
      >
        <span className="text-2xl font-medium leading-none text-white xl:text-[32px] xl:leading-[43px]">
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
      className="relative hidden w-full min-w-0 max-w-[1440px] flex-col gap-5 lg:flex xl:gap-7"
    >
      {rail ? (
        <div
          aria-hidden
          className="pointer-events-none absolute w-2.5 -translate-x-1/2 rounded-full"
          style={{
            left: rail.x,
            top: rail.y1,
            height: rail.y2 - rail.y1,
            backgroundImage: TIMELINE_LINE_GRADIENT,
          }}
        />
      ) : null}

      {timelineSteps.map((step, index) => (
        <div
          key={step}
          className="relative grid grid-cols-[minmax(0,1fr)_88px_minmax(0,1fr)] items-center gap-x-3 xl:grid-cols-[minmax(0,1fr)_107px_minmax(0,1fr)] xl:gap-x-6"
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
