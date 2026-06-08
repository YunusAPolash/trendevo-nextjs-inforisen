import Image from 'next/image';
import PrimaryCard from '@/components/cards/primary-card';
import { cn } from '@/lib/utils';

export const cardClassName =
  'rounded-2xl border border-[#e6e6e6] bg-white p-8 shadow-[0_1px_1px_rgba(0,0,0,0.05)] lg:p-10';

export function SectionBadge({ number }: { number: number }) {
  return (
    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#f5f5f5] text-lg font-semibold text-[#8f2acd]">
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
    <PrimaryCard
      className={cn(cardClassName, 'gap-4 bg-white p-8 lg:p-10', className)}
    >
      <div className="flex flex-wrap items-center gap-3">
        {number !== undefined ? <SectionBadge number={number} /> : null}
        <h2 className="text-xl font-semibold text-[#8f2acd] lg:text-2xl">
          {title}
        </h2>
      </div>
      <div className="space-y-4 text-base font-medium leading-relaxed text-[#535353]">
        {children}
      </div>
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
    <PrimaryCard className={cn(cardClassName, 'gap-4 bg-white', className)}>
      <h2 className="text-2xl font-semibold text-[#8f2acd]">{title}</h2>
      <div className="space-y-4 text-base font-medium leading-relaxed text-[#535353]">
        {children}
      </div>
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
        <Image src={icon} alt="" width={20} height={20} className="size-5" />
      </span>
      <span className="text-base leading-relaxed text-[#535353]">
        {children}
      </span>
    </li>
  );
}
