import Image from 'next/image';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const primaryButtonGradient =
  'linear-gradient(105.27deg, rgb(209, 129, 255) 2.85%, rgb(255, 99, 190) 90.53%)';

type PrimaryButtonProps = React.ComponentProps<typeof Button> & {
  showArrow?: boolean;
};

function PrimaryButtonArrow() {
  return (
    <span className="ml-2 flex size-8 items-center justify-center rounded-full">
      <Image
        src="/images/icons/button-arroww.png"
        alt=""
        aria-hidden
        width={16}
        height={16}
        className="size-8"
      />
    </span>
  );
}

export default function PrimaryButton({
  className,
  style,
  showArrow = false,
  children,
  asChild = false,
  ...props
}: PrimaryButtonProps) {
  const buttonClassName = cn(
    'h-[50px] cursor-pointer rounded-[10px] bg-transparent px-[18px] text-base font-semibold text-white hover:opacity-90',
    className,
  );

  if (asChild) {
    const child = React.Children.only(children);

    if (!React.isValidElement<{ className?: string; children?: React.ReactNode }>(
      child,
    )) {
      throw new Error('PrimaryButton with asChild expects a single valid element child.');
    }

    return (
      <Button
        shine
        asChild
        className={buttonClassName}
        style={{ backgroundImage: primaryButtonGradient, ...style }}
        {...props}
      >
        {React.cloneElement(child, {
          className: cn('inline-flex items-center', child.props.className),
          children: (
            <>
              {child.props.children}
              {showArrow ? <PrimaryButtonArrow /> : null}
            </>
          ),
        })}
      </Button>
    );
  }

  return (
    <Button
      shine
      className={buttonClassName}
      style={{ backgroundImage: primaryButtonGradient, ...style }}
      {...props}
    >
      {children}
      {showArrow ? <PrimaryButtonArrow /> : null}
    </Button>
  );
}
