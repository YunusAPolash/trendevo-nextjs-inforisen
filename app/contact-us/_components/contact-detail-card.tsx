import type { ReactNode } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import PrimaryCard from '@/components/cards/primary-card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type ContactDetailCardProps = {
  borderColor: string;
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
  detail: ReactNode;
  buttonLabel?: string;
  buttonClassName?: string;
};

export default function ContactDetailCard({
  borderColor,
  iconSrc,
  iconAlt,
  title,
  description,
  detail,
  buttonLabel,
  buttonClassName,
}: ContactDetailCardProps) {
  return (
    <PrimaryCard
      bg="card-1"
      className={cn(
        'h-full gap-6 rounded-2xl border border-dashed bg-white p-5 ring-0',
        borderColor,
      )}
    >
      <div className="relative flex size-[120px] items-center justify-center">
        <Image
          src="/images/contact-us/contact-us-icon-hex-bg.svg"
          alt=""
          fill
          aria-hidden
          className="object-contain"
        />
        <div className="relative z-10 h-[68px] w-[68px]">
          <Image
            src={iconSrc}
            alt={iconAlt}
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-6">
        <div className="space-y-[18px]">
          <h2 className="text-2xl font-bold text-[#13203b]">{title}</h2>
          <div className="space-y-2">
            <p className="text-sm leading-relaxed text-[#343e56]">{description}</p>
            <div className="text-base leading-relaxed">{detail}</div>
          </div>
        </div>

        {buttonLabel ? (
          <Button
            className={cn(
              'h-[50px] w-fit rounded-[10px] px-[18px] text-base font-semibold text-white hover:opacity-90',
              buttonClassName,
            )}
          >
            {buttonLabel}
            <ArrowRight className="ml-3 size-4" aria-hidden />
          </Button>
        ) : null}
      </div>
    </PrimaryCard>
  );
}
