import Image from 'next/image';
import PrimaryCard from '@/components/cards/primary-card';
import PrimarySection from '@/components/sections/primary-section';

const stats = [
  {
    value: '1.2M+',
    label: 'Total Completed Orders',
    icon: '/images/stats/stats-orders-icon.png',
    bg: 'card-1' as const,
  },
  {
    value: '2,500+',
    label: 'Total Services Available',
    icon: '/images/stats/stats-services-icon.png',
    bg: 'card-2' as const,
  },
  {
    value: '50K+',
    label: 'Total Users',
    icon: '/images/stats/stats-users-icon.png',
    bg: 'card-1' as const,
  },
  {
    value: '75%',
    label: 'Customer Satisfaction Rate',
    icon: '/images/stats/stats-satisfaction-icon.png',
    bg: 'card-2' as const,
  },
];

export default function StatsSection() {
  return (
    <PrimarySection bg="section-3" className="bg-[#f8f8f8]">
      <div className="mx-auto grid max-w-[1440px] gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <PrimaryCard
            key={stat.label}
            bg={stat.bg}
            className="border border-[#ff7fc1]/50 border-l-[3px] border-l-[#ff7fc1] bg-white p-6"
          >
            <Image
              src={stat.icon}
              alt=""
              width={100}
              height={100}
              className="mb-4 h-20 w-auto object-contain"
            />
            <p className="text-[32px] font-semibold leading-none text-[#232323]">
              {stat.value}
            </p>
            <p className="text-gradient mt-3 text-xl font-semibold">{stat.label}</p>
          </PrimaryCard>
        ))}
      </div>
    </PrimarySection>
  );
}
