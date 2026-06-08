import Image from 'next/image';
import PrimaryCard from '@/components/cards/primary-card';
import { cardClassName } from '@/app/(legal)/_components/primitives';
import { cn } from '@/lib/utils';

export type IconSectionSubsection = {
  title: string;
  content: React.ReactNode;
};

type IconSectionCardProps = {
  icon: string;
  title: string;
  intro?: React.ReactNode;
  subsections?: IconSectionSubsection[];
  children?: React.ReactNode;
  className?: string;
};

export default function IconSectionCard({
  icon,
  title,
  intro,
  subsections,
  children,
  className,
}: IconSectionCardProps) {
  return (
    <PrimaryCard className={cn(cardClassName, 'gap-4 bg-white', className)}>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <Image src={icon} alt="" width={24} height={24} className="size-6 shrink-0" />
          <h2 className="text-2xl font-semibold text-[#8f2acd]">{title}</h2>
        </div>
        {intro ? (
          <div className="text-base font-medium leading-relaxed text-[#535353]">
            {intro}
          </div>
        ) : null}
      </div>

      {subsections?.map((subsection) => (
        <div key={subsection.title} className="flex flex-col gap-3">
          <h3 className="text-base font-semibold text-[#1a1a1a]">
            {subsection.title}
          </h3>
          <div className="space-y-4 text-base font-medium leading-relaxed text-[#535353]">
            {subsection.content}
          </div>
        </div>
      ))}

      {children ? (
        <div className="space-y-4 text-base font-medium leading-relaxed text-[#535353]">
          {children}
        </div>
      ) : null}
    </PrimaryCard>
  );
}
