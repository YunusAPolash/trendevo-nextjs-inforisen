import { cn } from '@/lib/utils';

const HUB_GLASS_BACKGROUND =
  'linear-gradient(65deg, rgba(203, 126, 247, 0.14) 15.85%, rgba(255, 189, 214, 0.14) 34.38%, rgba(238, 79, 172, 0.14) 52.92%), #110816';

export default function WorkingProcessOuterCircleDark({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={188}
      height={180}
      viewBox="0 0 188 180"
      fill="none"
      aria-hidden
      className={cn('block h-full w-auto max-w-none', className)}
    >
      <rect x="3.85938" width="180" height="180" rx="90" fill="#110816" />
      <rect
        x="3.85938"
        width="180"
        height="180"
        rx="90"
        fill="url(#wp_dark_hub_fill)"
        fillOpacity="0.14"
      />
      <foreignObject x="3.85938" y="0" width="180" height="180">
        <div
          className="size-full rounded-full border-[1.286px] border-transparent backdrop-blur-[38.57px]"
          style={{ background: HUB_GLASS_BACKGROUND }}
        />
      </foreignObject>
      <path
        d="M183.859 90C183.859 74.2904 179.747 58.8544 171.932 45.2267C164.117 31.599 152.871 20.2544 139.312 12.3206L138.542 13.6362C151.871 21.4356 162.927 32.5881 170.61 45.985C178.293 59.3819 182.335 74.5565 182.335 90H183.859Z"
        fill="url(#wp_dark_hub_arc_a)"
      />
      <path
        d="M58.4231 172.73C43.9825 166.545 31.4124 156.687 21.9627 144.137C12.5129 131.588 6.51265 116.783 4.55844 101.196L6.07085 101.006C7.99197 116.33 13.8906 130.883 23.1803 143.221C32.47 155.558 44.8272 165.248 59.0233 171.329L58.4231 172.73Z"
        fill="url(#wp_dark_hub_arc_b)"
      />
      <circle
        cx="182.573"
        cy="92.5725"
        r="5.14286"
        fill="url(#wp_dark_hub_dot)"
      />
      <circle
        cx="5.14286"
        cy="102.858"
        r="5.14286"
        fill="url(#wp_dark_hub_dot)"
      />
      <defs>
        <linearGradient
          id="wp_dark_hub_fill"
          x1="12.32"
          y1="128.07"
          x2="175.4"
          y2="51.93"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.1585" stopColor="#CB7EF7" />
          <stop offset="0.3438" stopColor="#FFBDD6" />
          <stop offset="0.5292" stopColor="#EE4FAC" />
        </linearGradient>
        <linearGradient
          id="wp_dark_hub_arc_a"
          x1="139.312"
          y1="12.3206"
          x2="182.573"
          y2="92.5725"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8755FA" stopOpacity="0" />
          <stop offset="0.55" stopColor="#8755FA" stopOpacity="0.18" />
          <stop offset="1" stopColor="#9B6DFF" stopOpacity="1" />
        </linearGradient>
        <linearGradient
          id="wp_dark_hub_arc_b"
          x1="59.0233"
          y1="171.329"
          x2="5.14286"
          y2="102.858"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8755FA" stopOpacity="0" />
          <stop offset="0.55" stopColor="#8755FA" stopOpacity="0.18" />
          <stop offset="1" stopColor="#9B6DFF" stopOpacity="1" />
        </linearGradient>
        <linearGradient
          id="wp_dark_hub_dot"
          x1="0"
          y1="0"
          x2="10"
          y2="10"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CB7EF7" />
          <stop offset="0.5" stopColor="#FF9BC1" />
          <stop offset="1" stopColor="#EE4FAC" />
        </linearGradient>
      </defs>
    </svg>
  );
}
