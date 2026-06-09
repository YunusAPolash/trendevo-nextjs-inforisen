const stats = [
  'Total active users (688K+)',
  'Total Services (4,555)',
  'Total Orders (55,5k)',
  'Total completed orders(48K+)',
  'Total Ticket (28K+)',
] as const;

function StatItem({ label }: { label: string }) {
  return (
    <div className="flex shrink-0 items-center gap-2">
      <span className="size-3.5 shrink-0 rounded-full bg-white" aria-hidden />
      <span className="text-lg font-semibold leading-normal whitespace-nowrap text-white">
        {label}
      </span>
    </div>
  );
}

export default function StatsMarqueeSection() {
  const items = [...stats, ...stats];

  return (
    <section className="w-full overflow-hidden bg-gradient-to-br from-[#cb7ef7] via-[#ff9bc1] to-[#ee4fac] p-6">
      <div className="flex animate-[marquee_30s_linear_infinite] items-center gap-12">
        {items.map((stat, index) => (
          <StatItem key={`${stat}-${index}`} label={stat} />
        ))}
      </div>
    </section>
  );
}
