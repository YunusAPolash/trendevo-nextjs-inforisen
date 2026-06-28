import Image from 'next/image';
import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import { data } from '@/app/about-us/page-data';
import { renderText } from '@/lib/utils/renderText';

const { commitment } = data;

export default function TeamSection() {
  return (
    <PrimarySection
      bg="section-4"
      darkBg="section-10-dark"
      className="overflow-x-hidden"
    >
      <div className="container py-16 lg:py-21">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="relative mx-auto aspect-[567/698] w-full max-w-xl overflow-hidden lg:mx-0 lg:max-w-none">
            <div className="relative z-20 h-full w-full">
              <Image
                src={commitment.image.src}
                alt={commitment.image.alt}
                fill
                priority
                className="object-contain object-bottom"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="flex w-full min-w-0 flex-col gap-9">
            <div className="flex w-full min-w-0 flex-col gap-7">
              <SectionHeading
                align={commitment.heading.align}
                badge={commitment.heading.badge}
                title={renderText(commitment.heading.title!)}
                titleClassName={commitment.heading.titleClassName}
              />

              <div className="flex w-full min-w-0 flex-col gap-6">
                {commitment.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="w-full min-w-0 text-base font-medium leading-normal break-words text-[#404a60] sm:text-lg lg:text-xl dark:text-[#c1c4cc]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PrimarySection>
  );
}
