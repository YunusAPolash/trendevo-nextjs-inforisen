import Image from 'next/image';

import PrimaryCard from '@/components/cards/primary-card';
import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';

import {
  getSocialServiceContent,
  type SocialServiceItem,
  type SocialServiceSlug,
} from '../serviceSmmPanel/social-service-content';

function SocialServiceCard({
  title,
  description,
  icon,
  iconWidth,
  iconHeight,
}: SocialServiceItem) {
  return (
    <PrimaryCard
      bg="card-7"
      className="relative h-full min-h-[270px] gap-0 overflow-hidden rounded-2xl border border-[#A578FF]/40 border-l-[2.5px] border-l-[#a578ff] p-4 ring-0"
    >
      <div className="relative z-10 flex h-full flex-col gap-[22px]">
        <div className="relative flex size-[77px] shrink-0 items-center justify-center">
          <Image
            src="/images/why-choose-us/hex-icon-secondd.svg"
            alt=""
            aria-hidden
            width={77}
            height={77}
            className="absolute inset-0 size-[77px]"
          />
          <div
            className="relative z-10 shrink-0"
            style={{ width: iconWidth, height: iconHeight }}
          >
            <Image
              src={icon}
              alt=""
              aria-hidden
              width={iconWidth}
              height={iconHeight}
              quality={100}
              className="size-full object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3.5">
          <div className="flex items-center gap-1.5">
            <Image
              src="/images/why-choose-us/title-bullet-second.svg"
              alt=""
              aria-hidden
              width={12}
              height={12}
              className="size-3 shrink-0"
            />
            <h3 className="text-lg font-semibold leading-none text-[#313131] sm:text-[22px]">
              {title}
            </h3>
          </div>
          <p className="text-base leading-normal text-[#313131]">{description}</p>
        </div>
      </div>
    </PrimaryCard>
  );
}

type SocialServiceProps = {
  slug: SocialServiceSlug;
};

export default function SocialService({ slug }: SocialServiceProps) {
  const {
    badge,
    title,
    subtitle,
    services,
    decorativeLeft,
    decorativeRight,
    titleClassName,
    subtitleClassName,
  } = getSocialServiceContent(slug);

  return (
    <PrimarySection bg="section-6" className="relative overflow-hidden py-16 sm:py-20">
      {decorativeLeft ? (
        <Image
          src={decorativeLeft.src}
          alt=""
          aria-hidden
          width={decorativeLeft.width}
          height={decorativeLeft.height}
          className={decorativeLeft.className}
        />
      ) : null}
      {decorativeRight ? (
        <Image
          src={decorativeRight.src}
          alt=""
          aria-hidden
          width={decorativeRight.width}
          height={decorativeRight.height}
          className={decorativeRight.className}
        />
      ) : null}

      <div className="container flex flex-col gap-10 sm:gap-12 lg:gap-12">
        <SectionHeading
          badge={badge}
          title={title}
          subtitle={subtitle}
          titleClassName={titleClassName}
          subtitleClassName={subtitleClassName}
        />

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {services.map((service) => (
            <SocialServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </PrimarySection>
  );
}
