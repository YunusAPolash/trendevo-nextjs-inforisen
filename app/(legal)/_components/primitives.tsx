import Image from 'next/image';
import PrimaryCard from '@/components/cards/primary-card';
import { cn } from '@/lib/utils';

export const legalPageClassName = 'bg-[#FCF8FF] dark:bg-[#120619]';

export const legalSectionClassName =
  'bg-[#FCF8FF] py-12 dark:bg-[#120619] lg:py-16';

const legalCardDarkClassName =
  'dark:border-white/20 dark:bg-transparent dark:shadow-none dark:[background-image:linear-gradient(-85deg,rgba(38,10,56,0.5)_7.42%,rgba(76,18,111,0.5)_107.66%)] dark:backdrop-blur-[20px]';

const legalGlassCardDarkClassName =
  'dark:border-white/20 dark:bg-transparent dark:shadow-none dark:[background-image:linear-gradient(-81deg,rgba(38,10,56,0.5)_7.42%,rgba(76,18,111,0.5)_107.66%)] dark:backdrop-blur-[10px]';

export const cardClassName = cn(
  'rounded-2xl border border-[#e6e6e6] bg-white p-8 shadow-[0_1px_1px_rgba(0,0,0,0.05)] lg:p-10',
  legalCardDarkClassName,
);

export const legalNoticeCardClassName = cn(
  cardClassName,
  legalGlassCardDarkClassName,
);

export const legalBodyTextClassName =
  'text-base font-medium leading-relaxed text-[#535353] dark:text-[#c1c4cc]';

export const legalIntroTextClassName =
  'w-full text-base font-medium leading-relaxed text-[#121212]/80 dark:text-white';

export const legalSmallTextClassName =
  'text-sm font-medium text-[#535353] dark:text-[#c1c4cc]';

export const legalHeadingLgClassName =
  'text-2xl font-semibold text-[#8f2acd] dark:text-white';

export const legalHeadingMdClassName =
  'text-xl font-semibold text-[#8f2acd] lg:text-2xl dark:text-white';

export const legalPageHeadingClassName =
  'text-[32px] font-semibold leading-[1.5] text-[#121212] dark:text-white';

export const legalAccentListBodyClassName =
  'text-base font-medium leading-relaxed text-[#535353] dark:text-[#ebecef]';

export const legalStepperBodyClassName =
  'text-base font-medium leading-relaxed text-[#535353] dark:text-[#f5f6f7]';

export const legalSubheadingClassName =
  'text-base font-semibold text-[#1a1a1a] dark:text-white';

export const legalSubtitleClassName =
  'text-base font-medium leading-relaxed text-[#1a1a1a] dark:text-[#c1c4cc]';

export const legalLinkClassName =
  'text-[#8f2acd] hover:underline dark:text-[#ae4de8]';

export function SectionBadge({ number }: { number: number }) {
  return (
    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#f5f5f5] text-lg font-semibold text-[#8f2acd] dark:bg-white/10 dark:text-[#ae4de8]">
      {number}
    </span>
  );
}

export function ContentBlock({
  number,
  title,
  children,
  className,
}: {
  number?: number;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <PrimaryCard className={cn(cardClassName, 'gap-4', className)}>
      <div className="flex flex-wrap items-center gap-3">
        {number !== undefined ? <SectionBadge number={number} /> : null}
        <h2 className={legalHeadingMdClassName}>{title}</h2>
      </div>
      <div className={cn('space-y-4', legalBodyTextClassName)}>{children}</div>
    </PrimaryCard>
  );
}

export function InfoCard({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <PrimaryCard className={cn(cardClassName, 'gap-4', className)}>
      <h2 className={legalHeadingLgClassName}>{title}</h2>
      <div className={cn('space-y-4', legalBodyTextClassName)}>{children}</div>
    </PrimaryCard>
  );
}

export function ListItem({
  icon,
  iconBg,
  children,
}: {
  icon: string;
  iconBg?: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <span
        className={cn(
          'flex size-8 shrink-0 items-center justify-center rounded-full',
          iconBg,
        )}
      >
        <Image src={icon} alt="List item icon" width={20} height={20} className="size-5" />
      </span>
      <span className={cn('text-base leading-relaxed', legalBodyTextClassName)}>
        {children}
      </span>
    </li>
  );
}
