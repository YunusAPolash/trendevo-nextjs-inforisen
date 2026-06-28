import PrimaryButton from '@/components/buttons/primary-button';
import ServiceLeading from '@/components/sections/service-leading';
import { data } from '@/app/(subservice)/buy-tiktok-likes/page-data';
import { signUpUrl } from '@/lib/auth-urls';
import { renderText } from '@/lib/utils/renderText';

const { relatedServices } = data;

export default function TiktokLikesRelatedServicesSection() {
  const { ctaLabel, ...leadingContent } = relatedServices;

  return (
    <div className="flex flex-col">
      <ServiceLeading
        content={{
          ...leadingContent,
          title: renderText(leadingContent.title as string),
        }}
      />
      <div className="container -mt-6 flex justify-center pb-16 sm:-mt-8 sm:pb-20">
        <PrimaryButton href={signUpUrl} showArrow className="w-fit">
          {ctaLabel}
        </PrimaryButton>
      </div>
    </div>
  );
}
