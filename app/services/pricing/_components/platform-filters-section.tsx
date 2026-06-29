'use client';

import Image from 'next/image';
import { useState } from 'react';
import PrimarySection from '@/components/sections/primary-section';
import { cn } from '@/lib/utils';
import { pricingPlatforms } from './platform-data';
import PlatformFilterTab from './platform-filter-tab';

const FILTER_BAR_BG =
  'linear-gradient(133.39deg, rgba(209, 129, 255, 0.06) 2.85%, rgba(255, 99, 190, 0.06) 90.53%)';

const FILTER_BTN_BG =
  'linear-gradient(108.43deg, rgb(209, 129, 255) 2.85%, rgb(255, 99, 190) 90.53%)';

const SEARCH_BTN_BG =
  'linear-gradient(96.45deg, rgb(209, 129, 255) 2.85%, rgb(255, 99, 190) 90.53%)';

const firstRowPlatforms = pricingPlatforms.slice(0, 6);
const secondRowPlatforms = pricingPlatforms.slice(6);

export default function PlatformFiltersSection() {
  const [activePlatformId, setActivePlatformId] = useState(
    pricingPlatforms[0].id,
  );
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <PrimarySection className="pb-10">
      <div className="container">
        <div className="flex flex-col gap-9">
          <div className="flex flex-col gap-6 rounded-[14px] bg-white p-4 shadow-[0px_2px_3px_rgba(0,0,0,0.1)]">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:justify-between lg:gap-4">
              {firstRowPlatforms.map((platform) => (
                <PlatformFilterTab
                  key={platform.id}
                  platform={platform}
                  isActive={activePlatformId === platform.id}
                  onSelect={() => setActivePlatformId(platform.id)}
                />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:justify-between lg:gap-4">
              {secondRowPlatforms.map((platform) => (
                <PlatformFilterTab
                  key={platform.id}
                  platform={platform}
                  isActive={activePlatformId === platform.id}
                  onSelect={() => setActivePlatformId(platform.id)}
                />
              ))}
            </div>
          </div>

          <div
            className="rounded-2xl border border-[#d181ff] p-[18px]"
            style={{ backgroundImage: FILTER_BAR_BG }}
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <button
                type="button"
                className="flex h-14 w-full shrink-0 items-center justify-center gap-3 rounded-lg px-4 py-[10px] lg:w-[309px]"
                style={{ backgroundImage: FILTER_BTN_BG }}
              >
                <Image
                  src="/images/services/pricing/services-pricing-filter-icon.svg"
                  alt="Filter services icon"
                  aria-hidden
                  width={24}
                  height={24}
                  className="size-6 shrink-0"
                />
                <span className="text-lg font-semibold leading-normal text-white">
                  Filter
                </span>
                <Image
                  src="/images/services/pricing/services-pricing-filter-arrow-icon.svg"
                  alt="Filter dropdown arrow icon"
                  aria-hidden
                  width={24}
                  height={24}
                  className="size-6 shrink-0"
                />
              </button>

              <div className="relative flex h-14 w-full items-center overflow-hidden rounded-xl border border-[#e0acff] bg-white/60 lg:flex-1">
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search..."
                  className={cn(
                    'h-full flex-1 border-0 bg-transparent pl-6 pr-4 text-lg font-medium leading-normal outline-none',
                    'placeholder:bg-gradient-to-r placeholder:from-[#ad26ff] placeholder:to-[#ff3f85] placeholder:bg-clip-text placeholder:text-transparent',
                  )}
                />
                <button
                  type="button"
                  aria-label="Search services"
                  className="flex h-[54px] w-[101px] shrink-0 items-center justify-center rounded-br-[11px] rounded-tr-[11px]"
                  style={{ backgroundImage: SEARCH_BTN_BG }}
                >
                  <Image
                    src="/images/services/pricing/services-pricing-search-icon.svg"
                    alt="Search services icon"
                    aria-hidden
                    width={24}
                    height={24}
                    className="size-6"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PrimarySection>
  );
}
