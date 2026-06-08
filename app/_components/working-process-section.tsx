import Image from 'next/image';

import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import { cn } from '@/lib/utils';

const GRADIENT_TEXT =
  'bg-gradient-to-r from-[#ad26ff] to-[#ff3f85] bg-clip-text text-transparent';

const STEP_CARD_GRADIENT =
  'linear-gradient(33.8deg, rgb(251, 245, 255) 10.387%, rgb(255, 250, 252) 58.1%, rgb(247, 172, 255) 126.5%)';

const steps = [
  {
    number: '01',
    title: 'Create Account',
    description:
      'Sign up quickly using your email or social login and get instant access to all TrendEvo services. Manage and track your orders easily from a single dashboard.',
    highlighted: true,
    corner: 'tl' as const,
    contentClassName: 'lg:pl-[100px] lg:pt-[43px]',
  },
  {
    number: '02',
    title: 'Add Funds',
    description:
      'Deposit funds securely via credit/debit card, bank transfer, or cryptocurrency. Your wallet is credited instantly so you can start placing orders immediately.',
    highlighted: false,
    contentClassName: 'lg:pl-12 lg:pt-10',
  },
  {
    number: '03',
    title: 'Select Service',
    description:
      'Select from Instagram, TikTok, YouTube, or Facebook services with clear pricing, delivery times, and reliability stats. Pick the package that fits your growth goals perfectly.',
    highlighted: false,
    contentClassName: 'lg:pl-12 lg:pt-12',
  },
  {
    number: '04',
    title: 'Place your order',
    description:
      'Enter your account details, select the desired quantity, and submit your order. Real-time validation ensures everything is accurate and ready to process quickly.',
    highlighted: true,
    corner: 'br' as const,
    contentClassName: 'lg:pl-16 lg:pt-[52px]',
  },
];

function ProcessCenterHub() {
  return (
    <div className="relative size-[180px]">
      <Image
        src="/images/working-process/outer-circlesvg.svg"
        alt=""
        aria-hidden
        width={188}
        height={180}
        className="absolute inset-0 size-full motion-safe:animate-[spin_12s_linear_infinite]"
        unoptimized
      />
      <Image
        src="/images/working-process/inner-hub.svg"
        alt=""
        aria-hidden
        width={78}
        height={78}
        className="absolute left-1/2 top-1/2 size-[77px] -translate-x-1/2 -translate-y-1/2"
        unoptimized
      />
    </div>
  );
}

const LINE_VERTICAL_SRC = '/images/working-process/Line4.svg';
const LINE_HORIZONTAL_SRC = '/images/working-process/card-border-top.svg';

type BorderEdge = 'top' | 'bottom' | 'left' | 'right';

const EDGE_POSITION: Record<BorderEdge, string> = {
  top: 'top-0',
  bottom: 'bottom-0',
  left: 'left-0',
  right: 'right-0',
};

function CardBorder({
  length,
  axis,
  edge,
  className,
}: {
  length: number;
  axis: 'horizontal' | 'vertical';
  edge: BorderEdge;
  className?: string;
}) {
  if (axis === 'vertical') {
    return (
      <div
        className={cn(
          'pointer-events-none absolute z-[1] w-[3px]',
          EDGE_POSITION[edge],
          className,
        )}
        style={{ height: length }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={LINE_VERTICAL_SRC}
          alt=""
          aria-hidden
          width={3}
          height={215}
          className="block h-full w-full max-w-none"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        'pointer-events-none absolute z-[1] h-[3px]',
        EDGE_POSITION[edge],
        className,
      )}
      style={{ width: length }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={LINE_HORIZONTAL_SRC}
        alt=""
        aria-hidden
        width={346}
        height={3}
        className="block h-full w-full max-w-none"
      />
    </div>
  );
}

function HighlightedCardBorders({ corner }: { corner: 'tl' | 'br' }) {
  if (corner === 'tl') {
    return (
      <>
        <CardBorder
          axis="horizontal"
          edge="bottom"
          length={346}
          className="right-[101px] max-lg:right-8"
        />
        <CardBorder
          axis="vertical"
          edge="right"
          length={215}
          className="top-[54px]"
        />
      </>
    );
  }

  return (
    <>
      <CardBorder
        axis="horizontal"
        edge="top"
        length={346}
        className="right-[106px] max-lg:right-8"
      />
      <CardBorder
        axis="vertical"
        edge="left"
        length={346}
        className="top-[23px]"
      />
    </>
  );
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
        'relative min-h-[280px] lg:min-h-[330px]',
        highlighted
          ? 'overflow-hidden rounded-bl-[24px] rounded-tr-[24px]'
          : 'overflow-hidden',
      )}
      style={highlighted ? { backgroundImage: STEP_CARD_GRADIENT } : undefined}
    >
      {highlighted && corner ? (
        <HighlightedCardBorders corner={corner} />
      ) : null}

      {corner === 'tl' ? (
        <Image
          src="/images/working-process/card-corner-tl.svg"
          alt=""
          aria-hidden
          width={166}
          height={166}
          className="pointer-events-none absolute -left-[111px] -top-[49px] z-0 size-[166px] opacity-40"
          unoptimized
        />
      ) : null}

      {corner === 'br' ? (
        <Image
          src="/images/working-process/card-corner-br.svg"
          alt=""
          aria-hidden
          width={166}
          height={166}
          className="pointer-events-none absolute left-[509px] top-[223px] z-0 size-[166px] opacity-40"
          unoptimized
        />
      ) : null}

      <div
        className={cn(
          'relative z-10 flex h-full flex-col gap-6 p-8 lg:gap-[30px] lg:p-0',
          contentClassName,
        )}
      >
        <div className="flex flex-col gap-1">
          <span
            className={cn(
              'text-[40px] font-bold leading-[1.3] lg:text-[48px]',
              GRADIENT_TEXT,
            )}
          >
            {number}
          </span>
          <h3
            className={cn(
              'text-xl font-semibold leading-normal lg:text-[22px]',
              GRADIENT_TEXT,
            )}
          >
            {title}
          </h3>
        </div>
        <p className="max-w-[385px] text-base font-medium leading-normal text-[#071431]">
          {description}
        </p>
      </div>
    </article>
  );
}

export default function WorkingProcessSection() {
  return (
    <PrimarySection
      id="how-it-works"
      bg="section-6"
      className="overflow-hidden py-[84px]"
    >
      <div className="container flex flex-col items-center gap-16">
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
          titleClassName="max-w-none whitespace-normal text-center text-[32px] tracking-[0.48px] text-[#13203b] sm:text-[40px] lg:text-[48px]"
          subtitleClassName="max-w-[868px] text-center text-lg text-[#4f586d]"
        />

        <div className="relative w-full max-w-[1198px]">
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
            <ProcessCenterHub />
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-x-[78px] lg:gap-y-[52px]">
            {steps.map((step) => (
              <ProcessStepCard key={step.number} {...step} />
            ))}
          </div>
        </div>
      </div>
    </PrimarySection>
  );
}
