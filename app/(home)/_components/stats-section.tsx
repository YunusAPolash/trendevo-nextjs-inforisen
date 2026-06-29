import Image from 'next/image';
import PrimaryCard from '@/components/cards/primary-card';
import PrimarySection from '@/components/sections/primary-section';
import { data } from '@/app/(home)/page-data';
import type { HomeStatKey } from '@/app/(home)/page-data';
import {
  formatStatCount,
  getSatisfactionRate,
  getStats,
} from '@/lib/stats';

function getStatValue(
  key: HomeStatKey,
  statsData: Awaited<ReturnType<typeof getStats>>,
): string {
  if (key === 'satisfaction') {
    return `${getSatisfactionRate(statsData)}%`;
  }

  return formatStatCount(statsData[key]);
}

export default async function StatsSection() {
  const statsData = await getStats();

  return (
    <PrimarySection
      id="stats"
      className="relative z-10 bg-[#f8f8f8] px-0 py-12 sm:py-16 lg:py-20 dark:bg-[#1f0b2b]"
    >
      <div className="container grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {data.stats.items.map((stat) => (
          <PrimaryCard
            key={stat.key}
            bg="card-1"
            darkBg="card-1-dark"
            className="w-full items-start overflow-hidden rounded-[18px] border border-[#ff7fc1]/50 border-t-[0.5px] border-r-[0.5px] border-b-[0.5px] border-l-[3px] border-l-[#ff7fc1] p-4 ring-0 sm:p-6 dark:border-[#9214de] dark:border-t-[0.5px] dark:border-r-[0.5px] dark:border-b-[0.5px] dark:border-l-[3px]"
          >
            <div
              className="relative h-[72px] w-[var(--stat-icon-w)] shrink-0 sm:h-[86px] sm:w-[var(--stat-icon-w-sm)] md:h-[100px] md:w-[var(--stat-icon-w-md)]"
              style={{
                ['--stat-icon-w' as string]: `${stat.mobileDisplayWidth}px`,
                ['--stat-icon-w-sm' as string]: `${stat.tabletDisplayWidth}px`,
                ['--stat-icon-w-md' as string]: `${stat.displayWidth}px`,
              }}
            >
              <Image
                src={stat.icon}
                alt={`${stat.label} icon`}
                width={stat.width}
                height={stat.height}
                className="size-full object-contain object-left"
                unoptimized
              />
            </div>
            <div className="flex w-full flex-col gap-2 sm:gap-3">
              <p className="text-2xl font-semibold leading-none text-[#232323] sm:text-[28px] md:text-[32px] dark:text-white">
                {getStatValue(stat.key, statsData)}
              </p>
              <p className="text-gradient text-base font-semibold leading-normal tracking-[0.2px] sm:text-lg md:text-xl dark:bg-none dark:bg-clip-border dark:text-[#ebecef]">
                {stat.label}
              </p>
            </div>
          </PrimaryCard>
        ))}
      </div>
    </PrimarySection>
  );
}
