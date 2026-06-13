import { buildMarqueeStats, getStats } from '@/lib/stats';

function StatItem({ label }: { label: string }) {
  return (
    <div className="flex shrink-0 items-center gap-2">
      <span className="size-3.5 shrink-0 rounded-full bg-white dark:bg-[linear-gradient(96.02deg,_#CB7EF7_4.77%,_#FF9BC1_39.51%,_#EE4FAC_74.24%)]" aria-hidden />
      <span className="text-lg font-semibold leading-normal whitespace-nowrap text-white dark:text-[#dfe0e4]">
        {label}
      </span>
    </div>
  );
}

export default async function StatsMarqueeSection() {
  const statsData = await getStats();
  const stats = buildMarqueeStats(statsData);
  const items = [...stats, ...stats];

  return (
    <section className="relative w-full overflow-hidden p-6">
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(162.58deg,#cb7ef7_2.88%,#ff9bc1_54.16%,#ff5fbd_111.2%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 hidden bg-[#310E3F] backdrop-blur-[2px] dark:block"
      />
      <div className="relative flex w-max animate-[marquee_30s_linear_infinite] items-center gap-12">
        {items.map((stat, index) => (
          <StatItem key={`${stat}-${index}`} label={stat} />
        ))}
      </div>
    </section>
  );
}
