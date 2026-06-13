'use client';

import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { useMemo, useState } from 'react';
import PrimaryCard from '@/components/cards/primary-card';
import PrimarySection, {
  sectionBackgroundCoverClassName,
} from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import PrimaryButton from '@/components/buttons/primary-button';
import { cn } from '@/lib/utils';

const MIN_QUANTITY = 100;
const MAX_QUANTITY = 10000;
const QUANTITY_STEP = 100;
const PRICE_PER_UNIT = 1.2;

const FACEBOOK_ICON = '/images/country/facebook-icon.png';
const TITLE_FACEBOOK_ICON_SIZE = 29;
const FORM_FACEBOOK_ICON_WIDTH = 19;
const FORM_FACEBOOK_ICON_HEIGHT = 20;

function FacebookIcon({
  variant,
  alt = '',
}: {
  variant: 'title' | 'field';
  alt?: string;
}) {
  if (variant === 'title') {
    return (
      <Image
        src={FACEBOOK_ICON}
        alt={alt}
        width={TITLE_FACEBOOK_ICON_SIZE}
        height={TITLE_FACEBOOK_ICON_SIZE}
        unoptimized
        className="size-[29px] shrink-0 object-contain"
      />
    );
  }

  return (
    <Image
      src={FACEBOOK_ICON}
      alt={alt}
      width={FORM_FACEBOOK_ICON_WIDTH}
      height={FORM_FACEBOOK_ICON_HEIGHT}
      unoptimized
      className="h-5 w-[19px] shrink-0 object-contain"
    />
  );
}
const SLIDER_THUMB_SRC =
  '/images/facebook-page-followers/facebook-page-followers-quantity-slider-thumb.svg';
const SLIDER_TOOLTIP_SRC =
  '/images/facebook-page-followers/facebook-page-followers-quantity-slider-tooltip.svg';
const SLIDER_RAIL_HEIGHT = 38;
const SLIDER_TRACK_Y = 25;
const SLIDER_THUMB_WIDTH = 47;
const SLIDER_THUMB_HEIGHT = 38;
const SLIDER_THUMB_CENTER_Y = (18.3812 / 36.7624) * SLIDER_THUMB_HEIGHT;
const SLIDER_THUMB_TOP = SLIDER_TRACK_Y - SLIDER_THUMB_CENTER_Y;
const SLIDER_TOOLTIP_WIDTH = 37;
const SLIDER_TOOLTIP_HEIGHT = 36;
const SLIDER_THUMB_INSET = SLIDER_THUMB_WIDTH / 2;

function formatCurrency(amount: number) {
  return `$${amount.toFixed(2)}`;
}

function QuantitySlider({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) {
  const percent =
    ((value - MIN_QUANTITY) / (MAX_QUANTITY - MIN_QUANTITY)) * 100;

  return (
    <div className="flex w-full min-w-0 flex-col gap-3">
      <div className="flex w-full items-center justify-between text-base font-medium text-[#1a1a1a] dark:text-[#f5f6f7]">
        <span>Quantity</span>
        <span>Quantity: {value}</span>
      </div>

      <div
        className="relative w-full overflow-visible"
        style={{ paddingTop: SLIDER_THUMB_TOP + SLIDER_TOOLTIP_HEIGHT - 2 }}
      >
        <div
          className="relative w-full"
          style={{
            height: SLIDER_RAIL_HEIGHT,
            marginLeft: SLIDER_THUMB_INSET,
            marginRight: SLIDER_THUMB_INSET,
          }}
        >
          <div
            className="absolute inset-x-0 z-1 h-1 -translate-y-1/2 rounded-full bg-[#f1daff] dark:bg-white/10"
            style={{ top: SLIDER_TRACK_Y }}
          >
            <div
              className="bg-brand-gradient absolute inset-y-0 left-0 rounded-full"
              style={{ width: `${percent}%` }}
            />
          </div>

          <div
            className="pointer-events-none absolute z-2"
            style={{
              left: `${percent}%`,
              top: SLIDER_THUMB_TOP,
              width: SLIDER_THUMB_WIDTH,
              transform: 'translateX(-50%)',
            }}
          >
            <Image
              src={SLIDER_THUMB_SRC}
              alt=""
              width={SLIDER_THUMB_WIDTH}
              height={SLIDER_THUMB_HEIGHT}
              aria-hidden
              unoptimized
              className="block h-[38px] w-[47px]"
            />

            <div
              className="absolute left-1/2 bottom-full -mb-0.5 -translate-x-1/2 -translate-y-[3px]"
              style={{
                width: SLIDER_TOOLTIP_WIDTH,
                height: SLIDER_TOOLTIP_HEIGHT,
              }}
            >
              <Image
                src={SLIDER_TOOLTIP_SRC}
                alt=""
                width={SLIDER_TOOLTIP_WIDTH}
                height={SLIDER_TOOLTIP_HEIGHT}
                aria-hidden
                unoptimized
                className="block h-full w-full"
              />
              <span className="absolute inset-x-0 top-[7px] text-center text-xs font-medium leading-none text-white">
                {value}
              </span>
            </div>
          </div>

          <input
            type="range"
            min={MIN_QUANTITY}
            max={MAX_QUANTITY}
            step={QUANTITY_STEP}
            value={value}
            onChange={(event) => onChange(Number(event.target.value))}
            aria-label="Follower quantity"
            className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
          />
        </div>
      </div>
    </div>
  );
}

function FormField({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('flex flex-col gap-[10px]', className)}>
      <label className="text-base font-medium text-[#1a1a1a] dark:text-[#f5f6f7]">
        {label}
      </label>
      {children}
    </div>
  );
}

function FieldShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex h-[52px] items-center rounded-[12px] border border-[#f1daff] bg-white px-5 dark:border-[rgba(215,215,215,0.13)] dark:bg-[rgba(116,116,116,0.16)] dark:backdrop-blur-[2px]',
        className,
      )}
    >
      {children}
    </div>
  );
}

export default function OrderFormSection() {
  const [pageUrl, setPageUrl] = useState('https://facebook.com/yourpage');
  const [quantity, setQuantity] = useState(100);

  const totalAmount = useMemo(() => quantity * PRICE_PER_UNIT, [quantity]);

  return (
    <PrimarySection
      bg="section-13"
      darkBg="section-24-dark"
      backgroundClassName={sectionBackgroundCoverClassName}
      className="py-16 lg:py-[60px]"
    >
      <div className="container flex justify-center">
        <PrimaryCard
          bg="card-8"
          darkBg="card-11-dark"
          className="relative w-full max-w-[796px] overflow-hidden rounded-[24px] border border-[rgba(203,126,247,0.45)] p-6 shadow-none ring-0 ring-offset-0 dark:border-[rgba(255,255,255,0.13)] sm:p-10 lg:p-[50px]"
        >
          <div className="relative z-10 flex flex-col gap-[30px]">
            <SectionHeading
              badge="Facebook Services"
              underlineSrc="/images/facebook-page-followers/facebook-page-followers-order-form-underline.svg"
              underlineWidth={203}
              title={
                <span className="flex flex-wrap items-center justify-center gap-[8px]">
                  <span className="text-[32px] font-semibold leading-none text-[#1a1a1a] dark:text-[#f5f6f7]">
                    Order Facebook
                  </span>
                  <span
                    className="flex size-[54px] shrink-0 items-center justify-center rounded-[27px] border border-[#d181ff] bg-[linear-gradient(93.46deg,rgba(209,129,255,0.1)_2.85%,rgba(255,99,190,0.1)_90.53%)] pb-3 pl-[13px] pr-3 pt-[13px]"
                    aria-hidden
                  >
                    <FacebookIcon variant="title" alt="Facebook" />
                  </span>
                  <span className="text-gradient text-[32px] font-semibold leading-none dark:from-[#9f00ff] dark:to-[#ff3fa2]">
                    Followers
                  </span>
                </span>
              }
              titleClassName="max-w-none text-[32px] leading-none"
            />

            <div className="relative z-10 flex w-full min-w-0 flex-col gap-6 overflow-visible">
              <div className="grid gap-[15px] sm:grid-cols-2">
                <FormField label="Platform">
                  <FieldShell>
                    <div className="flex items-center gap-[5px]">
                      <FacebookIcon variant="field" />
                      <span className="text-sm leading-normal text-[#535353] dark:text-[#f5f6f7]">
                        Facebook
                      </span>
                    </div>
                  </FieldShell>
                </FormField>

                <FormField label="Service Type">
                  <FieldShell className="justify-between">
                    <div className="flex items-center gap-[5px]">
                      <FacebookIcon variant="field" />
                      <span className="text-sm leading-normal text-[#535353] dark:text-[#f5f6f7]">
                        Page Followers
                      </span>
                    </div>
                    <ChevronDown
                      className="size-6 shrink-0 text-[#535353] dark:text-[#f5f6f7]"
                      aria-hidden
                    />
                  </FieldShell>
                </FormField>
              </div>

              <FormField label="Facebook Page URL">
                <FieldShell>
                  <input
                    type="url"
                    value={pageUrl}
                    onChange={(event) => setPageUrl(event.target.value)}
                    placeholder="https://facebook.com/yourpage"
                    className="w-full bg-transparent text-sm text-[#535353] outline-none placeholder:text-[#535353] dark:text-[#f5f6f7] dark:placeholder:text-[#f5f6f7]"
                  />
                </FieldShell>
              </FormField>

              <QuantitySlider value={quantity} onChange={setQuantity} />

              <div className="flex items-center justify-between rounded-[12px] border border-[#f1daff] bg-white px-6 py-5 dark:border-[rgba(215,215,215,0.13)] dark:bg-[rgba(116,116,116,0.16)] dark:backdrop-blur-[2px]">
                <span className="text-base font-medium text-[#313131] dark:text-[#f5f6f7]">
                  TOTAL AMOUNT:
                </span>
                <span className="text-lg font-semibold text-[#ae4de8]">
                  {formatCurrency(totalAmount)}
                </span>
              </div>
            </div>

            <PrimaryButton
              type="button"
              className="w-full rounded-[12px] border-0 md:h-[52px] md:px-7 md:text-lg"
            >
              Buy Now
            </PrimaryButton>
          </div>
        </PrimaryCard>
      </div>
    </PrimarySection>
  );
}
