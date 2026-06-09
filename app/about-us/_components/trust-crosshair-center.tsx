import { cn } from '@/lib/utils';

type TrustCrosshairCenterProps = {
  className?: string;
};

export default function TrustCrosshairCenter({
  className,
}: TrustCrosshairCenterProps) {
  return (
    <svg
      viewBox="0 0 157 139"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={cn('h-36 w-40 shrink-0', className)}
    >
      <line
        x1="0.5"
        y1="69.8335"
        x2="156.5"
        y2="69.8335"
        stroke="url(#trust-crosshair-horizontal)"
        strokeLinecap="round"
      />
      <line
        x1="78"
        y1="138.5"
        x2="78"
        y2="0.5"
        stroke="url(#trust-crosshair-vertical)"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="trust-crosshair-horizontal"
          x1="0"
          y1="70.8335"
          x2="157"
          y2="70.8335"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DA6AFF" stopOpacity="0" />
          <stop offset="0.5" stopColor="#CF3FFF" />
          <stop offset="1" stopColor="#DA6AFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="trust-crosshair-vertical"
          x1="79"
          y1="139"
          x2="79"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DA6AFF" stopOpacity="0" />
          <stop offset="0.5" stopColor="#CF3FFF" />
          <stop offset="1" stopColor="#DA6AFF" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
