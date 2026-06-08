import * as React from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const primaryButtonGradient =
  'linear-gradient(105.27deg, rgb(209, 129, 255) 2.85%, rgb(255, 99, 190) 90.53%)';

export default function PrimaryButton({
  className,
  style,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      className={cn(
        'h-[50px] cursor-pointer rounded-[10px] border-[1.5px] border-[#cc7aff] bg-transparent px-[18px] text-base font-semibold text-white hover:opacity-90',
        className,
      )}
      style={{ backgroundImage: primaryButtonGradient, ...style }}
      {...props}
    />
  );
}
