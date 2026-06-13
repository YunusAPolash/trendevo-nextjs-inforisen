import Link from 'next/link';
import * as React from 'react';

import { cn } from '@/lib/utils';

type SecondaryButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  href?: string;
};

export default function SecondaryButton({
  className,
  href,
  children,
  type = 'button',
  ...props
}: SecondaryButtonProps) {
  const buttonClassName = cn(
    'inline-flex h-10 shrink-0 cursor-pointer items-center justify-center rounded-[10px] border border-[#d181ff] bg-white/25 px-4 text-base font-semibold text-gradient transition hover:bg-white/40 sm:h-11 sm:px-5 md:h-[50px] md:px-[18px] dark:border-[#CB7EF7] dark:bg-[#FFFFFF1A] dark:text-white dark:hover:bg-[rgba(255,255,255,0.15)]',
    className,
  );

  if (href) {
    return (
      <Link href={href} className={buttonClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={buttonClassName} {...props}>
      {children}
    </button>
  );
}
