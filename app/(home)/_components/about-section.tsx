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
      labelClassName: 'w-auto sm:w-[164px]',
    },
    {
      value: '100k+',
      label: 'Orders Delivered Successfully',
      labelClassName: 'w-auto sm:w-[130px]',
    },
  ],
  [
    {
      value: '50K+',
      label: 'Active Users & Businesses Served',
      labelClassName: 'w-auto sm:w-[164px]',
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
  return (
    <span
      className="hidden h-[45px] w-px shrink-0 bg-[#d9d9e3] dark:bg-[#454a56] sm:block"
      aria-hidden
    />
  );
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
          'text-2xl font-semibold leading-[1.3] sm:text-[32px] md:text-[40px]',
          GRADIENT_TEXT,
        )}
      >
        {value}
      </span>
      {splitLabel ? (
        <p className="text-xs font-medium leading-[1.5] text-[#404a60] dark:text-[#dfe0e4] sm:text-sm">
          <span className="block">Customer Satisfaction</span>
          <span className="block">Rate</span>
        </p>
      ) : (
        <p
          className={cn(
            'text-xs font-medium leading-[1.5] text-[#404a60] dark:text-[#dfe0e4] sm:text-sm',
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
      darkBg="section-10-dark"
      className="overflow-hidden py-12 sm:py-16 lg:py-20"
    >
      <div className="container flex flex-col items-center gap-8 sm:gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <div className="flex w-full max-w-[777px] flex-col gap-6 sm:gap-8 lg:gap-[38px]">
          <div className="flex flex-col gap-5 sm:gap-7 lg:gap-[28px]">
            <div className="flex flex-col gap-5 sm:gap-6 lg:gap-8">
              <div className="flex max-w-[642px] flex-col gap-4 sm:gap-6 lg:gap-7">
                <div className="flex flex-col gap-1">
                  <span
                    className={cn(
                      'text-lg font-semibold leading-[1.45] sm:text-[22px]',
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
                    className="h-1.5 w-[90px] sm:h-2 sm:w-[114px]"
                  />
                </div>

                <h2 className="text-2xl font-semibold leading-[1.35] tracking-[0.48px] text-[#13203b] dark:text-[#efedf1] sm:text-[32px] md:text-[40px] lg:text-[48px]">
                  <span className="block">
                    Your Trusted{' '}
                    <span className={GRADIENT_TEXT}>Social Media</span>
                  </span>
                  <span className="block">Growth Partner</span>
                </h2>
              </div>

              <p className="max-w-[642px] text-sm font-medium leading-normal text-[#404a60] dark:text-[#c1c4cc] sm:text-base md:text-lg lg:text-[22px] lg:leading-[1.5]">
                A reliable SMM platform designed to deliver fast, secure, and
                high-quality social media growth for individuals, businesses, and
                resellers.
              </p>
            </div>

            <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[38px]">
              <ul className="flex max-w-[671px] flex-col gap-3 sm:gap-4 lg:gap-[18px]">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 sm:items-center"
                  >
                    <Image
                      src="/images/icons/check.svg"
                      alt=""
                      aria-hidden
                      width={24}
                      height={24}
                      className="mt-0.5 size-5 shrink-0 sm:mt-0 sm:size-6"
                    />
                    <span className="text-sm font-medium leading-normal text-[#071431] dark:text-[#dfe0e4] sm:text-base md:text-lg lg:text-[20px]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col justify-center gap-4 sm:gap-6">
                {metricRows.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6 md:gap-8"
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
            className="w-fit gap-2 self-start border-none md:h-[52px] md:text-lg"
          >
            Discover More
            <Image
              src="/images/about/hugeicons_arrow-right-double.svg"
              alt=""
              aria-hidden
              width={24}
              height={24}
              className="size-5 shrink-0 sm:size-6"
              unoptimized
            />
          </PrimaryButton>
        </div>

        <div className="relative mx-auto aspect-[594/736] w-full max-w-[320px] shrink-0 sm:max-w-[440px] lg:max-w-[594px]">
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
