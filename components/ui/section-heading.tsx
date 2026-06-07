import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  badge: string;
  title: React.ReactNode;
  subtitle?: string;
  className?: string;
  align?: 'center' | 'left';
};

export default function SectionHeading({
  badge,
  title,
  subtitle,
  className,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      <div className="flex flex-col gap-1">
        <span className="text-gradient text-sm font-semibold uppercase tracking-wide">
          {badge}
        </span>
        <span className="h-2 w-24 rounded-full bg-gradient-to-r from-[#ad26ff] to-[#ff3f85] opacity-60" />
      </div>
      <h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-[#071431] md:text-4xl lg:text-[36px] lg:leading-[1.35]">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-3xl text-base leading-relaxed text-[#404a60] md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
