import Image from 'next/image';

import PrimaryButton from '@/components/buttons/primary-button';
import PrimarySection from '@/components/sections/primary-section';
import { cn } from '@/lib/utils';

const GRADIENT_TEXT =
  'bg-gradient-to-r from-[#ad26ff] to-[#ff3f85] bg-clip-text text-transparent';

const features = [
  'Fast Delivery with Smooth and Reliable Performance',
  'Real & High-Quality Engagement to Build Strong Social Proof',
  'Safe, Secure & High Retention for Long-Term Growth',
];

const metricRows = [
  [
    {
      value: '06+',
      label: 'Years of Digital Marketing Experience',
      labelClassName: 'w-[164px]',
    },
    {
      value: '100k+',
      label: 'Orders Delivered Successfully',
      labelClassName: 'w-[130px]',
    },
  ],
  [
    {
      value: '50K+',
      label: 'Active Users & Businesses Served',
      labelClassName: 'w-[164px]',
    },
    {
      value: '98%',
      label: 'Customer Satisfaction Rate',
      labelClassName: 'whitespace-normal',
      splitLabel: true,
    },
  ],
] as const;

function MetricDivider() {
  return <span className="h-[45px] w-px shrink-0 bg-[#d9d9e3]" aria-hidden />;
}

function MetricItem({
  value,
  label,
  labelClassName,
  splitLabel,
}: {
  value: string;
  label: string;
  labelClassName?: string;
  splitLabel?: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={cn(
          'text-[32px] font-semibold leading-[1.3] sm:text-[40px]',
          GRADIENT_TEXT,
        )}
      >
        {value}
      </span>
      {splitLabel ? (
        <p className="text-sm font-medium leading-[1.5] text-[#404a60]">
          <span className="block">Customer Satisfaction</span>
          <span className="block">Rate</span>
        </p>
      ) : (
        <p
          className={cn(
            'text-sm font-medium leading-[1.5] text-[#404a60]',
            labelClassName,
          )}
        >
          {label}
        </p>
      )}
    </div>
  );
}

export default function AboutSection() {
  return (
    <PrimarySection
      id="about"
      bg="section-10"
      className="overflow-hidden py-20 lg:py-20"
    >
      <div className="container flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex w-full max-w-[777px] flex-col gap-[38px]">
          <div className="flex flex-col gap-[28px]">
            <div className="flex flex-col gap-8">
              <div className="flex max-w-[642px] flex-col gap-7">
                <div className="flex flex-col gap-1">
                  <span
                    className={cn(
                      'text-[22px] font-semibold leading-[1.45]',
                      GRADIENT_TEXT,
                    )}
                  >
                    ABOUT US
                  </span>
                  <Image
                    src="/images/our-services/ui/underline.svg"
                    alt=""
                    aria-hidden
                    width={114}
                    height={8}
                    className="h-2 w-[114px]"
                  />
                </div>

                <h2 className="text-[32px] font-semibold leading-[1.35] tracking-[0.48px] text-[#13203b] sm:text-[40px] lg:text-[48px]">
                  <span className="block">
                    Your Trusted{' '}
                    <span className={GRADIENT_TEXT}>Social Media</span>
                  </span>
                  <span className="block">Growth Partner</span>
                </h2>
              </div>

              <p className="max-w-[642px] text-lg font-medium leading-normal text-[#404a60] sm:text-[22px] sm:leading-[1.5]">
                A reliable SMM platform designed to deliver fast, secure, and
                high-quality social media growth for individuals, businesses, and
                resellers.
              </p>
            </div>

            <div className="flex flex-col gap-[38px]">
              <ul className="flex max-w-[671px] flex-col gap-[18px]">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Image
                      src="/images/icons/check.svg"
                      alt=""
                      aria-hidden
                      width={24}
                      height={24}
                      className="size-6 shrink-0"
                    />
                    <span className="text-base font-medium leading-normal text-[#071431] sm:text-[20px]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col justify-center gap-6">
                {metricRows.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="flex flex-wrap items-center gap-6 sm:gap-8"
                  >
                    <MetricItem {...row[0]} />
                    <MetricDivider />
                    <MetricItem {...row[1]} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <PrimaryButton
            type="button"
            className="h-[52px] w-fit gap-2 self-start px-[18px] text-[18px] font-semibold leading-[1.5] border-none"
          >
            Discover More
            <Image
              src="/images/about/hugeicons_arrow-right-double.svg"
              alt=""
              aria-hidden
              width={24}
              height={24}
              className="size-6 shrink-0"
              unoptimized
            />
          </PrimaryButton>
        </div>

        <div className="relative mx-auto aspect-[594/736] w-full max-w-[594px] shrink-0">
          <Image
            src="/images/about/your-trusted-social-media-growth-partner.png"
            alt="TrendEvo growth partner"
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 594px"
            priority
          />
        </div>
      </div>
    </PrimarySection>
  );
}
