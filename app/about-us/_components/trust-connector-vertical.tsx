import { cn } from '@/lib/utils';

type TrustConnectorVerticalProps = {
  connectorId: string;
  className?: string;
};

export default function TrustConnectorVertical({
  connectorId,
  className,
}: TrustConnectorVerticalProps) {
  const circleGradientTop = `${connectorId}-circle-top`;
  const lineGradient = `${connectorId}-line`;
  const circleGradientBottom = `${connectorId}-circle-bottom`;

  return (
    <svg
      viewBox="0 0 24 125.667"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={cn('h-32 w-6 shrink-0', className)}
    >
      <circle cx="12" cy="12" r="12" fill={`url(#${circleGradientTop})`} />
      <line
        x1="12"
        y1="25.6667"
        x2="12"
        y2="101.667"
        stroke={`url(#${lineGradient})`}
        strokeWidth="2"
        strokeDasharray="4 4"
      />
      <circle cx="12" cy="113.667" r="12" fill={`url(#${circleGradientBottom})`} />
      <defs>
        <linearGradient
          id={circleGradientTop}
          x1="0"
          y1="12"
          x2="22.2325"
          y2="13.3429"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D181FF" />
          <stop offset="1" stopColor="#FF63BE" />
        </linearGradient>
        <linearGradient
          id={lineGradient}
          x1="10.5"
          y1="25.6667"
          x2="-4.19524"
          y2="28.868"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D181FF" />
          <stop offset="1" stopColor="#FF63BE" />
        </linearGradient>
        <linearGradient
          id={circleGradientBottom}
          x1="0"
          y1="113.667"
          x2="22.2325"
          y2="115.01"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D181FF" />
          <stop offset="1" stopColor="#FF63BE" />
        </linearGradient>
      </defs>
    </svg>
  );
}
