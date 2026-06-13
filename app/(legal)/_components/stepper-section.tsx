'use client';

import Image from 'next/image';
import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  type Ref,
} from 'react';
import PrimaryCard from '@/components/cards/primary-card';
import { cn } from '@/lib/utils';
import {
  cardClassName,
  legalHeadingLgClassName,
  legalPageClassName,
  legalStepperBodyClassName,
  legalSubheadingClassName,
  legalSubtitleClassName,
} from '@/app/(legal)/_components/primitives';

export type StepperStep = {
  icon: string;
  title: string;
  description: React.ReactNode;
};

type StepperSectionProps = {
  title: string;
  subtitle: string;
  steps: StepperStep[];
};

type ConnectorSegment = {
  left: number;
  top: number;
  height: number;
};

const stepNodeColors = [
  'bg-[#8f2acd]',
  'bg-[#1a1a1a] dark:bg-white',
  'bg-[#8f2acd]',
  'bg-[#1a1a1a] dark:bg-white',
];

const STEPPER_DASH_LENGTH = 10;
const STEPPER_DASH_GAP = 9;
const STEPPER_DASH_PERIOD = STEPPER_DASH_LENGTH + STEPPER_DASH_GAP;

const STEPPER_RING_DASH_LENGTH = 9;
const STEPPER_RING_DASH_GAP = 8;

const stepperLineLightClassName =
  '[background-image:repeating-linear-gradient(to_bottom,#1a1a1a_0,#1a1a1a_10px,transparent_10px,transparent_19px)]';

const stepperLineDarkClassName =
  'dark:[background-image:repeating-linear-gradient(to_bottom,#ffffff_0,#ffffff_10px,transparent_10px,transparent_19px)]';

const stepNodeRingClassName =
  'relative z-10 flex size-[3.25rem] shrink-0 items-center justify-center';

function snapConnectorHeight(height: number) {
  if (height <= 0) {
    return 0;
  }

  const remainder = height % STEPPER_DASH_PERIOD;

  if (remainder > 0 && remainder < STEPPER_DASH_LENGTH) {
    return height - remainder;
  }

  return height;
}

function StepNodeRing({
  colorClass,
  ref,
}: {
  colorClass: string;
  ref?: Ref<HTMLSpanElement>;
}) {
  return (
    <span ref={ref} className={stepNodeRingClassName} aria-hidden>
      <span className={cn('absolute inset-0 rounded-full', legalPageClassName)} />
      <span
        className={cn('relative z-[1] size-9 shrink-0 rounded-full', colorClass)}
      />
      <svg
        className="pointer-events-none absolute inset-0 z-[2] size-full"
        viewBox="0 0 52 52"
        fill="none"
        aria-hidden
      >
        <circle
          cx="26"
          cy="26"
          r="24"
          className="stroke-[#1a1a1a] dark:stroke-white"
          strokeWidth="2"
          strokeDasharray={`${STEPPER_RING_DASH_LENGTH} ${STEPPER_RING_DASH_GAP}`}
        />
      </svg>
    </span>
  );
}

export default function StepperSection({
  title,
  subtitle,
  steps,
}: StepperSectionProps) {
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [connectors, setConnectors] = useState<ConnectorSegment[]>([]);

  const updateConnectors = useCallback(() => {
    const container = stepsContainerRef.current;
    if (!container) {
      return;
    }

    const containerRect = container.getBoundingClientRect();
    const nextConnectors: ConnectorSegment[] = [];

    for (let index = 0; index < steps.length - 1; index += 1) {
      const node = nodeRefs.current[index];
      const nextNode = nodeRefs.current[index + 1];

      if (!node || !nextNode) {
        continue;
      }

      const nodeRect = node.getBoundingClientRect();
      const nextNodeRect = nextNode.getBoundingClientRect();
      const top = nodeRect.bottom - containerRect.top;
      const rawHeight = nextNodeRect.top - containerRect.top - top;
      const height = snapConnectorHeight(rawHeight);

      if (height <= 0) {
        continue;
      }

      nextConnectors.push({
        left: nodeRect.left + nodeRect.width / 2 - containerRect.left,
        top,
        height,
      });
    }

    setConnectors(nextConnectors);
  }, [steps.length]);

  useLayoutEffect(() => {
    updateConnectors();

    const container = stepsContainerRef.current;
    if (!container) {
      return;
    }

    const resizeObserver = new ResizeObserver(updateConnectors);
    resizeObserver.observe(container);

    for (const node of nodeRefs.current) {
      if (node) {
        resizeObserver.observe(node);
      }
    }

    window.addEventListener('resize', updateConnectors);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateConnectors);
    };
  }, [updateConnectors, steps]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h2 className={legalHeadingLgClassName}>{title}</h2>
        <p className={legalSubtitleClassName}>{subtitle}</p>
      </div>

      <div ref={stepsContainerRef} className="relative flex flex-col gap-6">
        {connectors.map((connector, index) => (
          <span
            key={`connector-${index}`}
            className={cn(
              'absolute z-0 w-[2px] -translate-x-1/2 bg-repeat-y',
              stepperLineLightClassName,
              stepperLineDarkClassName,
            )}
            style={{
              left: connector.left,
              top: connector.top,
              height: connector.height,
            }}
            aria-hidden
          />
        ))}

        {steps.map((step, index) => (
          <div key={step.title} className="flex items-center gap-8">
            <div className="relative isolate flex w-14 shrink-0 flex-col items-center self-stretch">
              <div className="flex flex-1 items-center">
                <StepNodeRing
                  ref={(element) => {
                    nodeRefs.current[index] = element;
                  }}
                  colorClass={stepNodeColors[index % stepNodeColors.length]}
                />
              </div>
            </div>

            <PrimaryCard
              className={cn(
                cardClassName,
                'min-w-0 flex-1 gap-4 border-[#8f2acd] dark:border-[#4b0b72]',
              )}
            >
              <div className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#f5f5f5]">
                  <Image
                    src={step.icon}
                    alt=""
                    width={20}
                    height={20}
                    className="size-5"
                  />
                </span>
                <h3 className={legalSubheadingClassName}>{step.title}</h3>
              </div>
              <div className={cn('space-y-4', legalStepperBodyClassName)}>
                {step.description}
              </div>
            </PrimaryCard>
          </div>
        ))}
      </div>
    </div>
  );
}
