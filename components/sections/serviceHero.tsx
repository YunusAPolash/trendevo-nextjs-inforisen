import Image from 'next/image';
import Link from 'next/link';

import PrimaryButton from '@/components/buttons/primary-button';
import PrimarySection from '@/components/sections/primary-section';
import { signUpUrl } from '@/lib/auth-urls';

import {
  getServiceHeroContent,
  type ServiceHeroSlug,
} from '../serviceSmmPanel/service-hero-content';

type ServiceHeroProps = {
  slug: ServiceHeroSlug;
};

export default function ServiceHero({ slug }: ServiceHeroProps) {
  const { title, description, buttonLabel, image } = getServiceHeroContent(slug);

  return (
    <PrimarySection
      bg="section-1"
      darkBg="page-hero-dark"
      className="overflow-hidden px-0"
    >
      <div className="container relative grid gap-8 pt-28 sm:gap-10 sm:pt-36 md:pt-40 lg:min-h-[650px] lg:grid-cols-2 lg:gap-8 lg:pt-[104px]">
        <div className="flex min-w-0 flex-col justify-center gap-[34px] lg:max-w-[762px]">
          <div className="flex flex-col gap-7">
            <h1 className="text-[28px] font-semibold leading-[1.35] tracking-[0.48px] text-[#313131] sm:text-4xl md:text-5xl lg:text-[48px] dark:text-[#efefef]">
              {title}
            </h1>
            <p className="max-w-[762px] text-base font-medium leading-relaxed text-[#343e56] sm:text-lg dark:text-[#ebecef]">
              {description}
            </p>
          </div>

          <PrimaryButton
            asChild
            showArrow
            className="w-fit dark:border-[1.5px] dark:border-[#cc7aff]"
          >
            <Link href={signUpUrl}>{buttonLabel}</Link>
          </PrimaryButton>
        </div>

        <div className="mx-auto w-full min-w-0 max-w-[583px] lg:absolute lg:bottom-0 lg:right-6 lg:mx-0 xl:right-8">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            priority
            sizes="(max-width: 1024px) 100vw, 583px"
            className="block h-auto w-full"
          />
        </div>
      </div>
    </PrimarySection>
  );
}
