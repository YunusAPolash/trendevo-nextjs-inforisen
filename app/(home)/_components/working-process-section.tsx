import Image from 'next/image';
import { Fragment } from 'react';

import WorkingProcessOuterCircleDark from '@/app/(home)/_components/working-process-outer-circle-dark';
import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import { cn } from '@/lib/utils';

const GRADIENT_TEXT =
  'w-fit bg-gradient-to-r from-[#ad26ff] to-[#ff3f85] bg-clip-text text-transparent';

const STEP_CARD_GRADIENT_LIGHT =
  'linear-gradient(33.8deg, rgb(251, 245, 255) 10.387%, rgb(255, 250, 252) 58.1%, rgb(247, 172, 255) 126.5%)';

const STEP_CARD_GRADIENT_DARK_TL =
  'linear-gradient(129.26deg, rgba(36, 16, 46, 0.35) 60.67%, rgba(136, 66, 173, 0.35) 96.45%)';

const STEP_CARD_GRADIENT_DARK_BR =
  'linear-gradient(-48.65deg, rgba(36, 16, 46, 0.35) 57.82%, rgba(116, 51, 148, 0.35) 96.94%)';

const CARD_CONTENT_BASE =
  'px-4 py-6 pb-8 sm:px-6 sm:py-8 sm:pb-10 lg:px-8 lg:py-0';

const steps = [
  {
    number: '01',
    title: 'Create Account',
    description:
      'Sign up quickly using your email or social login and get instant access to all TrendEvo services. Manage and track your orders easily from a single dashboard.',
    highlighted: true,
    corner: 'tl' as const,
    contentClassName: `${CARD_CONTENT_BASE} lg:pt-[43px] lg:pl-[max(2rem,18%)] lg:pr-[max(2rem,13%)]`,
  },
  {
    number: '02',
    title: 'Add Funds',
    description:
      'Deposit funds securely via credit/debit card, bank transfer, or cryptocurrency. Your wallet is credited instantly so you can start placing orders immediately.',
    highlighted: false,
    contentClassName: `${CARD_CONTENT_BASE} lg:pt-10 lg:pl-[max(2rem,8.5%)] lg:pr-8`,
  },
  {
    number: '03',
    title: 'Select Service',
    description:
      'Select from Instagram, TikTok, YouTube, or Facebook services with clear pricing, delivery times, and reliability stats. Pick the package that fits your growth goals perfectly.',
    highlighted: false,
    contentClassName: `${CARD_CONTENT_BASE} lg:pt-12 lg:pl-[max(2rem,8.5%)] lg:pr-8`,
  },
  {
    number: '04',
    title: 'Place your order',
    description:
      'Enter your account details, select the desired quantity, and submit your order. Real-time validation ensures everything is accurate and ready to process quickly.',
    highlighted: true,
    corner: 'br' as const,
    contentClassName: `${CARD_CONTENT_BASE} lg:pt-[52px] lg:pl-[max(2rem,11.5%)] lg:pr-[max(2rem,13%)]`,
  },
];

function ProcessCenterHub({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative size-[120px] overflow-visible sm:size-[150px] lg:size-[180px]',
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 motion-safe:animate-[spin_12s_linear_infinite] dark:hidden">
        <Image
          src="/images/working-process/outer-circlesvg.svg"
          alt=""
          aria-hidden
          width={188}
          height={180}
          className="absolute left-1/2 top-1/2 h-full w-auto max-w-none -translate-x-1/2 -translate-y-1/2"
          unoptimized
        />
      </div>
      <div className="pointer-events-none absolute inset-0 hidden motion-safe:animate-[spin_12s_linear_infinite] dark:block">
        <WorkingProcessOuterCircleDark className="absolute left-1/2 top-1/2 h-full w-auto -translate-x-1/2 -translate-y-1/2" />
      </div>
      <Image
        src="/images/working-process/inner-hub.svg"
        alt=""
        aria-hidden
        width={78}
        height={78}
        className="absolute left-1/2 top-1/2 z-10 size-[42px] -translate-x-1/2 -translate-y-1/2 sm:size-[58px] lg:size-[77px]"
        unoptimized
      />
    </div>
  );
}

const LINE_VERTICAL_LIGHT = '/images/working-process/Line4.svg';
const LINE_HORIZONTAL_LIGHT = '/images/working-process/card-border-top.svg';
const LINE_VERTICAL_DARK = '/images/working-process/dark/card-border-side.svg';
const LINE_HORIZONTAL_DARK = '/images/working-process/dark/card-border-top.svg';

type BorderEdge = 'top' | 'bottom' | 'left' | 'right';

const EDGE_ANCHOR: Record<BorderEdge, string> = {
  top: 'top-0',
  bottom: 'bottom-0',
  left: 'left-0',
  right: 'right-0',
};

const EDGE_CENTER: Record<'horizontal' | 'vertical', string> = {
  horizontal: 'left-1/2 -translate-x-1/2',
  vertical: 'top-1/2 -translate-y-1/2',
};

function CardBorder({
  axis,
  edge,
  sizeClassName,
}: {
  axis: 'horizontal' | 'vertical';
  edge: BorderEdge;
  sizeClassName: string;
}) {
  const lightSrc = axis === 'vertical' ? LINE_VERTICAL_LIGHT : LINE_HORIZONTAL_LIGHT;
  const darkSrc = axis === 'vertical' ? LINE_VERTICAL_DARK : LINE_HORIZONTAL_DARK;
  const intrinsicWidth = axis === 'vertical' ? 3 : 346;
  const intrinsicHeight = axis === 'vertical' ? 215 : 3;

  if (axis === 'vertical') {
    return (
      <div
        className={cn(
          'pointer-events-none absolute z-[1] w-[3px]',
          EDGE_ANCHOR[edge],
          EDGE_CENTER.vertical,
          sizeClassName,
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={lightSrc}
          alt=""
          aria-hidden
          width={intrinsicWidth}
          height={intrinsicHeight}
          className="block h-full w-full max-w-none dark:hidden"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={darkSrc}
          alt=""
          aria-hidden
          width={intrinsicWidth}
          height={intrinsicHeight}
          className="hidden h-full w-full max-w-none dark:block"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        'pointer-events-none absolute z-[1] h-[3px]',
        EDGE_ANCHOR[edge],
        EDGE_CENTER.horizontal,
        sizeClassName,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={lightSrc}
        alt=""
        aria-hidden
        width={intrinsicWidth}
        height={intrinsicHeight}
        className="block h-full w-full max-w-none dark:hidden"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={darkSrc}
        alt=""
        aria-hidden
        width={intrinsicWidth}
        height={intrinsicHeight}
        className="hidden h-full w-full max-w-none dark:block"
      />
    </div>
  );
}

function HighlightedCardBorders({ corner }: { corner: 'tl' | 'br' }) {
  if (corner === 'tl') {
    return (
      <div className="hidden lg:contents">
        <CardBorder
          axis="horizontal"
          edge="bottom"
          sizeClassName="w-[72%] max-w-[346px]"
        />
        <CardBorder
          axis="vertical"
          edge="right"
          sizeClassName="h-[65%] max-h-[215px]"
        />
      </div>
    );
  }

  return (
    <div className="hidden lg:contents">
      <CardBorder
        axis="horizontal"
        edge="top"
        sizeClassName="w-[72%] max-w-[346px]"
      />
      <CardBorder
        axis="vertical"
        edge="left"
        sizeClassName="h-[65%] max-h-[215px]"
      />
    </div>
  );
}

function getHighlightedCardStyle(corner: 'tl' | 'br') {
  return {
    '--step-card-light': STEP_CARD_GRADIENT_LIGHT,
    '--step-card-dark':
      corner === 'tl' ? STEP_CARD_GRADIENT_DARK_TL : STEP_CARD_GRADIENT_DARK_BR,
  } as React.CSSProperties;
}

function ProcessStepCard({
  number,
  title,
  description,
  highlighted,
  corner,
  contentClassName,
}: (typeof steps)[number]) {
  return (
    <article
      className={cn(
        'relative min-h-0 sm:min-h-[240px] lg:min-h-[330px]',
        highlighted
          ? 'overflow-visible rounded-2xl border border-[#ead4fb]/70 [background-image:var(--step-card-light)] dark:border-[rgba(143,42,205,0.3)] dark:[background-image:var(--step-card-dark)] lg:overflow-hidden lg:rounded-none lg:rounded-bl-[24px] lg:rounded-tr-[24px] lg:border-0 dark:lg:border-0'
          : 'overflow-hidden rounded-2xl border border-[#ead4fb]/70 bg-white/50 dark:border-[rgba(143,42,205,0.25)] dark:bg-transparent lg:rounded-none lg:border-0 lg:bg-transparent',
      )}
      style={highlighted && corner ? getHighlightedCardStyle(corner) : undefined}
    >
      {highlighted && corner ? (
        <HighlightedCardBorders corner={corner} />
      ) : null}

      {corner === 'tl' ? (
        <>
          <Image
            src="/images/working-process/card-corner-tl.svg"
            alt=""
            aria-hidden
            width={166}
            height={166}
            className="pointer-events-none absolute left-0 top-0 z-0 size-20 opacity-50 dark:hidden sm:size-28 sm:opacity-40 md:-left-[60px] md:-top-8 md:size-[140px] lg:-left-[80px] lg:-top-[40px] lg:size-[166px]"
            unoptimized
          />
          <Image
            src="/images/working-process/dark/card-corner-tl.svg"
            alt=""
            aria-hidden
            width={166}
            height={166}
            className="pointer-events-none absolute left-0 top-0 z-0 hidden size-20 opacity-50 dark:block sm:size-28 sm:opacity-40 md:-left-[60px] md:-top-8 md:size-[140px] lg:-left-[80px] lg:-top-[40px] lg:size-[166px]"
            unoptimized
          />
        </>
      ) : null}

      {corner === 'br' ? (
        <>
          <Image
            src="/images/working-process/card-corner-br.svg"
            alt=""
            aria-hidden
            width={166}
            height={166}
            className="pointer-events-none absolute bottom-0 right-0 z-0 size-20 opacity-50 dark:hidden sm:size-28 sm:opacity-40 md:-bottom-8 md:-right-[60px] md:size-[140px] lg:-bottom-[40px] lg:-right-[80px] lg:size-[166px]"
            unoptimized
          />
          <Image
            src="/images/working-process/dark/card-corner-br.svg"
            alt=""
            aria-hidden
            width={166}
            height={166}
            className="pointer-events-none absolute bottom-0 right-0 z-0 hidden size-20 opacity-50 dark:block sm:size-28 sm:opacity-40 md:-bottom-8 md:-right-[60px] md:size-[140px] lg:-bottom-[40px] lg:-right-[80px] lg:size-[166px]"
            unoptimized
          />
        </>
      ) : null}

      <div
        className={cn(
          'relative z-10 flex h-full w-full flex-col gap-4 sm:gap-6 lg:gap-[30px]',
          contentClassName,
        )}
      >
        <div className="flex w-full min-w-0 max-w-[385px] flex-col gap-4 sm:gap-6 lg:gap-[30px]">
          <div className="flex flex-col gap-1">
            <span
              className={cn(
                'text-3xl font-bold leading-[1.3] sm:text-[40px] lg:text-[48px]',
                GRADIENT_TEXT,
              )}
            >
              {number}
            </span>
            <h3
              className={cn(
                'text-lg font-semibold leading-normal sm:text-xl lg:text-[22px]',
                GRADIENT_TEXT,
              )}
            >
              {title}
            </h3>
          </div>
          <p className="text-sm font-medium leading-normal text-[#071431] dark:text-white sm:text-base">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function WorkingProcessSection() {
  return (
    <PrimarySection
      id="how-it-works"
      bg="section-4"
      darkBg="section-18-dark"
      className="overflow-hidden py-12 sm:py-16 lg:py-[84px]"
    >
      <div className="container flex flex-col items-center gap-8 sm:gap-12 lg:gap-16">
        <SectionHeading
          badge="WORKING PROCESS"
          underlineSrc="/images/working-process/underline.svg"
          underlineWidth={216}
          title={
            <>
              Grow Your{' '}
              <span className={GRADIENT_TEXT}>Socials in 4 Simple</span> Steps
            </>
          }
          subtitle="A simple and efficient process designed to deliver fast and reliable results. Just place your order, and our system will handle the rest to help grow your social media presence smoothly."
          titleClassName="max-w-none whitespace-normal text-center text-2xl tracking-[0.48px] text-[#13203b] dark:text-[#efedf1] sm:text-[32px] md:text-[40px] lg:text-[48px]"
          subtitleClassName="max-w-[868px] px-1 text-center text-sm text-[#4f586d] dark:text-[#c1c4cc] sm:px-0 sm:text-base md:text-lg"
          className="gap-3 sm:gap-4"
        />

        <div className="relative w-full max-w-[1198px]">
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
            <ProcessCenterHub />
          </div>

          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:gap-x-[78px] lg:gap-y-[52px]">
            {steps.map((step, index) => (
              <Fragment key={step.number}>
                <ProcessStepCard {...step} />
                {index === 1 ? (
                  <div className="flex items-center justify-center py-2 md:col-span-2 lg:hidden">
                    <ProcessCenterHub />
                  </div>
                ) : null}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </PrimarySection>
  );
}
