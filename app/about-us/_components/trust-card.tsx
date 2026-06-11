import Image from 'next/image';
import PrimaryCard from '@/components/cards/primary-card';

type TrustCardProps = {
  title: string;
  description: string;
  iconSrc: string;
  iconClassName: string;
};

export default function TrustCard({
  title,
  description,
  iconSrc,
  iconClassName,
}: TrustCardProps) {
  return (
    <PrimaryCard
      bg="card-5"
      className="relative h-70 w-full gap-0 overflow-hidden rounded-2xl border border-[#ffcbe5]/70 p-0 px-4 py-3.5 ring-0"
    >
      <div className="relative flex h-full flex-col gap-4.5">
        <div className="relative flex size-20 shrink-0 items-center justify-center px-3.5 py-3.5">
          <Image
            src="/images/why-choose-us/hex-icon.svg"
            alt=""
            aria-hidden
            width={77}
            height={77}
            className="absolute inset-0 size-20"
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
          <div className="flex items-center gap-1.5">
            <Image
              src="/images/why-choose-us/title-bullet.svg"
              alt=""
              aria-hidden
              width={12}
              height={12}
              className="size-3 shrink-0"
            />
            <h3 className="text-xl font-semibold leading-none text-[#343e56] dark:text-white">
              {title}
            </h3>
          </div>
          <p className="text-base leading-normal text-[#313131] dark:text-[#dfe0e4]">
            {description}
          </p>
        </div>
      </div>
    </PrimaryCard>
  );
}
