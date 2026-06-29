import Image from 'next/image';
import PrimaryCard from '@/components/cards/primary-card';
import {
  cardClassName,
  legalBodyTextClassName,
  legalHeadingLgClassName,
  legalSubheadingClassName,
} from '@/app/(legal)/_components/primitives';
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
    <PrimaryCard className={cn(cardClassName, 'gap-4', className)}>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <Image src={icon} alt={`${title} section icon`} width={24} height={24} className="size-6 shrink-0" />
          <h2 className={legalHeadingLgClassName}>{title}</h2>
        </div>
        {intro ? <div className={legalBodyTextClassName}>{intro}</div> : null}
      </div>

      {subsections?.map((subsection) => (
        <div key={subsection.title} className="flex flex-col gap-3">
          <h3 className={legalSubheadingClassName}>{subsection.title}</h3>
          <div className={cn('space-y-4', legalBodyTextClassName)}>
            {subsection.content}
          </div>
        </div>
      ))}

      {children ? (
        <div className={cn('space-y-4', legalBodyTextClassName)}>{children}</div>
      ) : null}
    </PrimaryCard>
  );
}
