import { cn } from '@/lib/utils';
import { renderText } from '@/lib/utils/renderText';
import type { ReactNode } from 'react';
import UnderlineEffect from './underline-effect';
type SectionHeadingProps = {
  badge?: string;
  title?: string | ReactNode | null;
  subtitle?: string;
  className?: string;
  align?: 'center' | 'left';
  underlineWidth?: number;
  titleClassName?: string;
  subtitleClassName?: string;
  badgeClassName?: string;
};


function renderHeadingText(value: string | ReactNode): ReactNode {
  return typeof value === 'string' ? renderText(value) : value;
}

const DEFAULT_UNDERLINE_WIDTH = 131;

export default function SectionHeading({
  badge,
  title,
  subtitle,
  className,
  align = 'center',
  titleClassName, 
  underlineWidth = DEFAULT_UNDERLINE_WIDTH,
  subtitleClassName,
  badgeClassName,
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
          {badge ? (
            <span
              className={cn(
                'text-gradient text-lg font-semibold leading-[1.45] sm:text-[22px] dark:bg-none dark:bg-clip-border dark:text-white',
                badgeClassName,
              )}
            >
              {badge}
            </span>
          ) : null}
          <UnderlineEffect underlineWidth={underlineWidth} />
        </div>
        {title ? (
          <h2
            className={cn(
              'max-w-[961px] text-[28px] font-semibold leading-[1.35] tracking-[0.36px] text-[#071431] sm:text-[32px] lg:text-[36px] dark:text-[#efedf1]',
              titleClassName,
            )}
          >
            {renderHeadingText(title)}
          </h2>
        ) : null}
      </div>
      {subtitle ? (
        <p
          className={cn(
            'max-w-[1090px] text-base leading-normal text-[#404a60] sm:text-lg dark:text-[#c1c4cc]',
            subtitleClassName,
          )}
        >
          {renderText(subtitle)}
        </p>
      ) : null}
    </div>
  );
}
