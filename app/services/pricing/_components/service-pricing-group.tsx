'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import ServicePricingTable from './service-pricing-table';
import type { ServicePricingGroup } from './services-pricing-data';

const GROUP_HEADER_BG =
  'linear-gradient(154.04deg, rgba(224, 171, 255, 0.2) 4.77%, rgba(255, 177, 207, 0.2) 39.51%, rgba(255, 137, 206, 0.2) 74.24%)';

const TOGGLE_BTN_BG =
  'linear-gradient(93.46deg, rgb(209, 129, 255) 2.85%, rgb(255, 99, 190) 90.53%)';

export default function ServicePricingGroup({
  group,
  isOpen,
  onToggle,
}: {
  group: ServicePricingGroup;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex flex-col gap-6">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between rounded-xl border-[0.6px] border-[rgba(143,42,205,0.51)] p-4 text-left"
        style={{ backgroundImage: GROUP_HEADER_BG }}
      >
        <div className="flex min-w-0 items-center gap-3">
          <div className="relative h-[30px] w-[31px] shrink-0">
            <Image
              src={group.platformIcon}
              alt=""
              aria-hidden
              fill
              className="object-contain"
              unoptimized
            />
          </div>
          <span className="truncate text-xl font-semibold leading-normal tracking-[0.2px] text-[#ae4de8]">
            {group.title}
          </span>
        </div>
        <div
          className="flex size-[42px] shrink-0 items-center justify-center overflow-hidden rounded-lg"
          style={{ backgroundImage: TOGGLE_BTN_BG }}
        >
          <Image
            src="/images/services/pricing/services-pricing-accordion-arrow-icon.svg"
            alt=""
            aria-hidden
            width={34}
            height={34}
            className={cn(
              'size-[34px] transition-transform duration-200',
              isOpen ? 'rotate-180' : '',
            )}
          />
        </div>
      </button>

      {isOpen ? <ServicePricingTable rows={group.rows} /> : null}
    </div>
  );
}
