import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import PrimaryCard from '@/components/cards/primary-card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
        'relative isolate h-full min-h-[371px] gap-0 overflow-hidden rounded-2xl border-[0.6px] border-[rgba(120,120,120,0.17)] bg-white p-5 ring-0',
        '[background-image:none]',
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl bg-white"
        style={{ backgroundImage: backgroundGradient }}
      />

      <div className="relative z-10 flex h-full flex-col gap-6">
        <div className="relative size-[120px] shrink-0">
          <Image
            src="/images/services/services-icon-hex-bg.svg"
            alt=""
            width={104}
            height={116}
            aria-hidden
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={iconSrc}
              alt={iconAlt}
              width={67}
              height={68}
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-6">
          <div className="flex flex-col gap-[18px]">
            <h2 className="text-2xl font-bold leading-normal text-[#13203b]">{title}</h2>
            <p className="max-w-[398px] text-sm font-normal leading-[1.6] text-[#343e56]">
              {description}
            </p>
          </div>

          <Button className="bg-brand-gradient mt-auto h-[50px] w-fit gap-2 rounded-[10px] border-[1.5px] border-[#cc7aff] px-[18px] py-2.5 text-base font-semibold text-white hover:opacity-90">
            Get Started Now
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/10">
              <ArrowRight className="size-4" aria-hidden />
            </span>
          </Button>
        </div>
      </div>
    </PrimaryCard>
  );
}
