import Image from 'next/image';
import PrimaryCard from '@/components/cards/primary-card';
import { cn } from '@/lib/utils';

type TrustCardProps = {
  title: string;
  description: string;
  iconSrc: string;
  iconClassName: string;
  className?: string;
};

export default function TrustCard({
  title,
  description,
  iconSrc,
  iconClassName,
  className,
}: TrustCardProps) {
  return (
    <PrimaryCard
      bg="card-5"
      darkBg="card-5-dark"
      className={cn(
        'relative h-full w-full gap-0 overflow-hidden rounded-2xl border-[0.7px] border-solid border-[#ffcbe5]/70 p-0 px-4 py-3.5 ring-0 dark:border-white/20',
        className,
      )}
    >
      <div className="relative flex h-full w-full flex-col gap-[18px]">
        <div className="relative flex size-20 shrink-0 items-center justify-center px-[13px] py-3.5">
          <Image
            src="/images/why-choose-us/hex-icon.svg"
            alt=""
            aria-hidden
            width={77}
            height={77}
            className="absolute inset-0 size-20 dark:hidden"
          />
          <Image
            src="/images/why-choose-us/hex-icon-dark.svg"
            alt=""
            aria-hidden
            width={77}
            height={77}
            className="absolute inset-0 hidden size-20 dark:block"
          />
          <Image
            src={iconSrc}
            alt=""
            aria-hidden
            width={40}
            height={40}
            className={`relative z-10 ${iconClassName}`}
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-1.5">
            <Image
              src="/images/why-choose-us/title-bullet.svg"
              alt=""
              aria-hidden
              width={12}
              height={12}
              className="size-3 shrink-0 mt-1"
            />
            <h3 className="text-[22px] font-semibold leading-none text-[#343e56] dark:text-white">
              {title}
            </h3>
          </div>
          <p className="text-base leading-normal text-[#313131] dark:text-white">
            {description}
          </p>
        </div>
      </div>
    </PrimaryCard>
  );
}
