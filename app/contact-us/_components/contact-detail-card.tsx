import type { ReactNode } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
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
    <article
      className={cn(
        'flex h-auto w-full flex-col gap-5 rounded-[16px] border border-dashed bg-transparent p-4 sm:gap-6 sm:p-5 xl:h-full',
        borderColor,
      )}
    >
      <div className="relative flex size-[100px] shrink-0 items-center justify-center sm:size-[120px]">
        <Image
          src="/images/contact-us/contact-us-icon-hex-bg.svg"
          alt=""
          fill
          aria-hidden
          unoptimized
          className="object-contain"
        />
        <div className="relative z-10 h-14 w-14 sm:h-[68px] sm:w-[68px]">
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
          <h3 className="text-xl font-bold leading-tight text-[#13203b] sm:text-2xl">{title}</h3>
          <div className="space-y-2">
            <p className="text-sm leading-[1.6] text-[#343e56]">{description}</p>
            <div className="text-base leading-[1.6]">{detail}</div>
          </div>
        </div>

        {buttonLabel ? (
          <Button
            className={cn(
              'mt-auto h-11 w-full justify-center rounded-[10px] px-4 text-sm font-semibold text-white hover:opacity-90 sm:h-[50px] sm:w-fit sm:justify-start sm:px-[18px] sm:text-base',
              buttonClassName,
            )}
          >
            {buttonLabel}
            <ArrowRight className="ml-3 size-4" aria-hidden />
          </Button>
        ) : null}
      </div>
    </article>
  );
}
