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
      <div className="relative h-full overflow-hidden">
        <div className="relative h-0 w-full overflow-visible">
          <Image
            src="/images/why-choose-us/card-pattern.png"
            alt=""
            aria-hidden
            width={773}
            height={483}
            className="pointer-events-none relative -top-44 left-[-103px] h-120 w-full max-w-none object-cover opacity-40"
          />
        </div>

        <div className="relative z-10 flex flex-col gap-4.5">
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
              <h3 className="text-xl font-semibold leading-none text-[#343e56]">
                {title}
              </h3>
            </div>
            <p className="text-base leading-normal text-[#313131]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </PrimaryCard>
  );
}
