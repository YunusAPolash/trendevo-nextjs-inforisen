import Image from 'next/image';
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
        'flex flex-col',
        subtitle ? 'gap-[18px]' : 'gap-4',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      <div
        className={cn(
          'flex flex-col gap-4',
          align === 'center' && 'items-center',
        )}
      >
        <div
          className={cn(
            'flex flex-col gap-1',
            align === 'center' && 'items-center',
          )}
        >
          <span className="text-gradient text-[22px] font-semibold leading-[1.45]">
            {badge}
          </span>
          <Image
            src="/images/our-services/ui/underline.svg"
            alt=""
            aria-hidden
            width={131}
            height={8}
            className="h-2 w-[131px]"
          />
        </div>
        <h2 className="max-w-[961px] text-[28px] font-semibold leading-[1.35] tracking-[0.36px] text-[#071431] sm:text-[32px] lg:text-[36px]">
          {title}
        </h2>
      </div>
      {subtitle ? (
        <p className="max-w-[1090px] text-lg leading-normal text-[#404a60]">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
