import Image from 'next/image';
import PrimaryCard from '@/components/cards/primary-card';
import PrimarySection from '@/components/sections/primary-section';

const stats = [
  {
    value: '1.2M+',
    label: 'Total Completed Orders',
    icon: '/images/stats/stats-orders-icon.png',
    width: 167,
    height: 150,
    displayWidth: 111,
  },
  {
    value: '2,500+',
    label: 'Total Services Available',
    icon: '/images/stats/stats-services-icon.png',
    width: 152,
    height: 150,
    displayWidth: 101,
  },
  {
    value: '50K+',
    label: 'Total Users',
    icon: '/images/stats/stats-users-icon.png',
    width: 188,
    height: 150,
    displayWidth: 125,
  },
  {
    value: '75%',
    label: 'Customer Satisfaction Rate',
    icon: '/images/stats/stats-satisfaction-icon.png',
    width: 144,
    height: 150,
    displayWidth: 96,
  },
] as const;

export default function StatsSection() {
  return (
    <PrimarySection
      id="stats"
      className="relative z-10 bg-[#f8f8f8] px-0 py-20"
    >
      <div className="container grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <PrimaryCard
            key={stat.label}
            bg="card-1"
            className="w-full items-start overflow-hidden rounded-[18px] border border-[#ff7fc1]/50 border-t-[0.5px] border-r-[0.5px] border-b-[0.5px] border-l-[3px] border-l-[#ff7fc1] bg-white p-6 ring-0"
          >
            <div
              className="relative h-[100px] shrink-0"
              style={{ width: stat.displayWidth }}
            >
              <Image
                src={stat.icon}
                alt=""
                width={stat.width}
                height={stat.height}
                className="size-full object-contain object-left"
                unoptimized
              />
            </div>
            <div className="flex w-full flex-col gap-3">
              <p className="text-[32px] font-semibold leading-none text-[#232323]">
                {stat.value}
              </p>
              <p className="text-gradient text-xl font-semibold leading-normal tracking-[0.2px]">
                {stat.label}
              </p>
            </div>
          </PrimaryCard>
        ))}
      </div>
    </PrimarySection>
  );
}
