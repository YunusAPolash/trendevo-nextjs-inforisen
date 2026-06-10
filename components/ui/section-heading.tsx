import Image from 'next/image';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { renderText } from '@/lib/utils/renderText';

type SectionHeadingProps = {
  badge: string;
  title: string | ReactNode;
  subtitle?: string;
  className?: string;
  align?: 'center' | 'left';
  underlineSrc?: string;
  underlineWidth?: number;
  titleClassName?: string;
  subtitleClassName?: string;
};

const DEFAULT_UNDERLINE_SRC = '/images/our-services/ui/underline.svg';
const DEFAULT_UNDERLINE_WIDTH = 131;

function renderHeadingText(value: string | ReactNode): ReactNode {
  return typeof value === 'string' ? renderText(value) : value;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  className,
  align = 'center',
  underlineSrc = DEFAULT_UNDERLINE_SRC,
  underlineWidth = DEFAULT_UNDERLINE_WIDTH,
  titleClassName,
  subtitleClassName,
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
            src={underlineSrc}
            alt=""
            aria-hidden
            width={underlineWidth}
            height={8}
            className="h-2"
            style={{ width: underlineWidth }}
          />
        </div>
        <h2
          className={cn(
            'max-w-[961px] text-[28px] font-semibold leading-[1.35] tracking-[0.36px] text-[#071431] sm:text-[32px] lg:text-[36px]',
            titleClassName,
          )}
        >
          {renderHeadingText(title)}
        </h2>
      </div>
      {subtitle ? (
        <p
          className={cn(
            'max-w-[1090px] text-lg leading-normal text-[#404a60]',
            subtitleClassName,
          )}
        >
          {renderText(subtitle)}
        </p>
      ) : null}
    </div>
  );
}
