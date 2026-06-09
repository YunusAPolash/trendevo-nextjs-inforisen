import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import PrimaryCard from '@/components/cards/primary-card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import PrimaryButton from '@/components/buttons/primary-button';

type ServicePanelCardProps = {
  backgroundGradient: string;
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
  className?: string;
};

export default function ServicePanelCard({
  backgroundGradient,
  iconSrc,
  iconAlt,
  title,
  description,
  className,
}: ServicePanelCardProps) {
  return (
    <PrimaryCard
      className={cn(
        'relative isolate h-full min-h-0 gap-0 overflow-hidden rounded-2xl border-[0.6px] border-[rgba(120,120,120,0.17)] bg-white p-4 ring-0 sm:min-h-[340px] sm:p-5 lg:min-h-[371px]',
        '[background-image:none]',
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl bg-white"
        style={{ backgroundImage: backgroundGradient }}
      />

      <div className="relative z-10 flex h-full flex-col gap-4 sm:gap-6">
        <div className="relative size-20 shrink-0 sm:size-[120px]">
          <Image
            src="/images/services/services-icon-hex-bg.svg"
            alt=""
            width={104}
            height={116}
            aria-hidden
            className="absolute top-1/2 left-1/2 size-[70px] -translate-x-1/2 -translate-y-1/2 sm:size-auto"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={iconSrc}
              alt={iconAlt}
              width={67}
              height={68}
              className="size-11 object-contain sm:size-[67px]"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-4 sm:gap-6">
          <div className="flex flex-col gap-3 sm:gap-[18px]">
            <h2 className="text-xl font-bold leading-snug text-[#13203b] sm:text-2xl sm:leading-normal">
              {title}
            </h2>
            <p className="text-sm font-normal leading-[1.6] text-[#343e56] sm:max-w-[398px]">
              {description}
            </p>
          </div>
          <PrimaryButton showArrow className="h-11 w-full sm:h-[50px] sm:w-fit">
            Get Started Now
          </PrimaryButton>
        </div>
      </div>
    </PrimaryCard>
  );
}
