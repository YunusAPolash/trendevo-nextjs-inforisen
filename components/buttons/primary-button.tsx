import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const primaryButtonGradient =
  'linear-gradient(105.27deg, rgb(209, 129, 255) 2.85%, rgb(255, 99, 190) 90.53%)';

type PrimaryButtonProps = Omit<React.ComponentProps<typeof Button>, 'asChild'> & {
  showArrow?: boolean;
  href?: string;
  asChild?: boolean;
};

function PrimaryButtonContent({
  children,
  showArrow,
}: {
  children: React.ReactNode;
  showArrow: boolean;
}) {
  return (
    <>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <span className="button-shine-layer absolute top-[-50%] h-[200%] w-8 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </span>
      <span className="relative z-10 inline-flex items-center justify-center gap-[inherit] whitespace-nowrap">
        {children}
        {showArrow ? (
          <span className="ml-1.5 flex size-6 items-center justify-center rounded-full sm:ml-2 sm:size-8">
            <Image
              src="/images/icons/button-arroww.png"
              alt=""
              aria-hidden
              width={16}
              height={16}
              className="size-6 sm:size-8"
            />
          </span>
        ) : null}
      </span>
    </>
  );
}

export default function PrimaryButton({
  className,
  style,
  showArrow = false,
  asChild = false,
  href,
  children,
  ...props
}: PrimaryButtonProps) {
  const buttonClassName = cn(
    'h-10 cursor-pointer rounded-[10px] bg-transparent px-4 text-base font-semibold text-white hover:opacity-90 sm:h-11 sm:px-5 md:h-[50px] md:px-[18px]',
    className,
  );
  const buttonStyle = { backgroundImage: primaryButtonGradient, ...style };

  if (href) {
    return (
      <Link
        href={href}
        data-shine=""
        className={cn(
          buttonClassName,
          'relative inline-flex shrink-0 items-center justify-center overflow-hidden whitespace-nowrap transition-all outline-none select-none',
        )}
        style={buttonStyle}
      >
        <PrimaryButtonContent showArrow={showArrow}>
          {children}
        </PrimaryButtonContent>
      </Link>
    );
  }

  if (asChild) {
    return (
      <Button
        asChild
        className={buttonClassName}
        style={buttonStyle}
        {...props}
      >
        {children}
      </Button>
    );
  }

  return (
    <Button
      shine
      className={buttonClassName}
      style={buttonStyle}
      {...props}
    >
      {children}
      {showArrow ? (
        <span className="ml-1.5 flex size-6 items-center justify-center rounded-full sm:ml-2 sm:size-8">
          <Image
            src="/images/icons/button-arroww.png"
            alt=""
            aria-hidden
            width={16}
            height={16}
            className="size-6 sm:size-8"
          />
        </span>
      ) : null}
    </Button>
  );
}
