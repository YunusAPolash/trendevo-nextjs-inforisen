import Image from 'next/image';
import { ChevronsRight } from 'lucide-react';
import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import PrimaryButton from '@/components/buttons/primary-button';
import { data } from '@/app/about-us/page-data';
import { signUpUrl } from '@/lib/auth-urls';
import { renderText } from '@/lib/utils/renderText';

const { whatWeDo } = data;

export default function MissionVisionSection() {
  return (
    <PrimarySection
      bg="section-4"
      darkBg="section-10-dark"
      className="overflow-x-hidden"
    >
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="relative mx-auto aspect-[567/698] w-full max-w-xl overflow-hidden lg:mx-0 lg:max-w-none">
            <div className="relative z-20 h-full w-full">
              <Image
                src={whatWeDo.image.src}
                alt={whatWeDo.image.alt}
                fill
                priority
                className="object-contain object-bottom xl:object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="flex w-full min-w-0 flex-col gap-10">
            <div className="flex w-full min-w-0 flex-col gap-7">
              <SectionHeading
                align={whatWeDo.heading.align}
                badge={whatWeDo.heading.badge}
              />

              <div className="flex w-full min-w-0 flex-col gap-6">
                {whatWeDo.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="w-full min-w-0 text-base font-medium leading-normal break-words text-[#404a60] sm:text-lg lg:text-xl dark:text-[#c1c4cc]"
                  >
                    {renderText(paragraph)}
                  </p>
                ))}

                <p className="w-full min-w-0 text-base font-medium leading-normal break-words text-[#404a60] sm:text-lg lg:text-xl dark:text-[#c1c4cc]">
                  {renderText(whatWeDo.closingParagraph)}
                </p>
              </div>
            </div>

            <PrimaryButton
              href={signUpUrl}
              className="w-fit max-w-full gap-2 rounded-lg border-2 border-[#cc7aff] md:h-13 md:px-4.5 md:text-lg"
            >
              {whatWeDo.ctaLabel}
              <ChevronsRight className="size-6 shrink-0" aria-hidden />
            </PrimaryButton>
          </div>
        </div>
      </div>
    </PrimarySection>
  );
}
