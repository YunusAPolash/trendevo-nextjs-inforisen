import Image from 'next/image';
import PrimaryCard from '@/components/cards/primary-card';
import { cn } from '@/lib/utils';

export type AccentListItem = {
  title: string;
  description: React.ReactNode;
};

type AccentListSectionProps = {
  title: string;
  subtitle: string;
  items: AccentListItem[];
  variant: 'positive' | 'negative';
};

const variantStyles = {
  positive: {
    accent: 'bg-[#8f2acd]',
    iconBg: 'bg-[#8f2acd]/[0.09]',
    icon: '/images/icons/accent-list-check-icon.svg',
    gap: 'gap-10',
  },
  negative: {
    accent: 'bg-[#f43f5e]/70',
    iconBg: 'bg-[#ffe4e6]',
    icon: '/images/icons/terms-acceptable-use-x-icon.svg',
    gap: 'gap-12',
  },
} as const;

function AccentListItemRow({
  title,
  description,
  variant,
}: AccentListItem & { variant: AccentListSectionProps['variant'] }) {
  const styles = variantStyles[variant];

  return (
    <div className="flex gap-4">
      <span
        className={cn(
          'flex size-8 shrink-0 items-center justify-center rounded-full',
          styles.iconBg,
        )}
      >
        <Image
          src={styles.icon}
          alt=""
          width={20}
          height={20}
          className="size-5"
        />
      </span>
      <div className="flex min-w-0 flex-1 flex-col gap-3">
        <h3 className="text-base font-semibold text-[#1a1a1a]">{title}</h3>
        <div className="space-y-4 text-base font-medium leading-relaxed text-[#535353]">
          {description}
        </div>
      </div>
    </div>
  );
}

export default function AccentListSection({
  title,
  subtitle,
  items,
  variant,
}: AccentListSectionProps) {
  const styles = variantStyles[variant];

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold text-[#8f2acd]">{title}</h2>
        <p className="text-base font-medium leading-relaxed text-[#1a1a1a]">
          {subtitle}
        </p>
      </div>

      <PrimaryCard className="relative overflow-hidden rounded-2xl border border-[#e6e6e6] bg-white p-8 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.05)] lg:p-10">
        <span
          className={cn(
            'absolute bottom-0 left-0 top-0 w-1.5 rounded-l-2xl',
            styles.accent,
          )}
          aria-hidden
        />
        <div className={cn('flex flex-col pl-2', styles.gap)}>
          {items.map((item) => (
            <AccentListItemRow
              key={item.title}
              title={item.title}
              description={item.description}
              variant={variant}
            />
          ))}
        </div>
      </PrimaryCard>
    </div>
  );
}
