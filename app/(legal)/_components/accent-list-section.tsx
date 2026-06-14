import Image from 'next/image';
import PrimaryCard from '@/components/cards/primary-card';
import {
  cardClassName,
  legalAccentListBodyClassName,
  legalHeadingLgClassName,
  legalSubheadingClassName,
  legalSubtitleClassName,
} from '@/app/(legal)/_components/primitives';
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
    iconBg:
      'bg-[#8f2acd]/[0.09] dark:bg-white/[0.08]',
    icon: '/images/icons/site-accent-list-check-icon.svg',
  },
  negative: {
    accent: 'bg-[#f43f5e]/70 dark:bg-[#8f2acd]',
    iconBg: 'bg-[#ffe4e6] dark:bg-white/[0.08]',
    icon: '/images/icons/terms-acceptable-use-x-icon.svg',
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
        <h3 className={legalSubheadingClassName}>{title}</h3>
        <div className={cn('space-y-4', legalAccentListBodyClassName)}>
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
        <h2 className={legalHeadingLgClassName}>{title}</h2>
        <p className={legalSubtitleClassName}>{subtitle}</p>
      </div>

      <PrimaryCard
        className={cn(
          cardClassName,
          'relative overflow-hidden shadow-[0_4px_20px_-2px_rgba(15,23,42,0.05)] dark:shadow-none',
        )}
      >
        <span
          className={cn(
            'absolute bottom-0 left-0 top-0 w-1.5 rounded-l-2xl',
            styles.accent,
          )}
          aria-hidden
        />
        <div className="flex flex-col gap-10">
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
