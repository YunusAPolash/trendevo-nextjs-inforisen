import Image from 'next/image';
import { ChevronsRight } from 'lucide-react';
import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import PrimaryButton from '@/components/buttons/primary-button';
import { data } from '@/app/about-us/page-data';
import { renderText } from '@/lib/utils/renderText';

const { team } = data;

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
                src={team.image.src}
                alt={team.image.alt}
                fill
                priority
                className="object-contain object-bottom"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="flex w-full min-w-0 flex-col gap-9">
            <div className="flex w-full min-w-0 flex-col gap-7">
              <div className="flex w-full min-w-0 flex-col gap-8">
                <SectionHeading
                  align={team.heading.align}
                  badge={team.heading.badge}
                  title={renderText(team.heading.title)}
                  titleClassName={team.heading.titleClassName}
                />

                <p className="w-full min-w-0 text-base font-medium leading-normal break-words text-[#404a60] sm:text-lg lg:text-xl dark:text-[#c1c4cc]">
                  {renderText(team.introParagraph)}
                </p>

                <p className="w-full min-w-0 text-base font-medium leading-normal break-words text-[#404a60] sm:text-lg lg:text-xl dark:text-[#c1c4cc]">
                  {renderText(team.founderParagraph)}
                </p>
              </div>

              <ul className="flex w-full min-w-0 flex-col gap-4.5">
                {team.checklistItems.map((item) => (
                  <li
                    key={item}
                    className="flex w-full min-w-0 items-start gap-2"
                  >
                    <Image
                      src="/images/icons/site-check-icon.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="mt-0.5 size-6 shrink-0"
                      aria-hidden
                    />
                    <span className="min-w-0 flex-1 text-base font-medium leading-normal break-words text-[#071431] sm:text-lg lg:text-xl dark:text-[#dfe0e4]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              <PrimaryButton
                href={team.ctaHref}
                className="w-fit max-w-full gap-2 rounded-lg border-2 border-[#cc7aff] md:h-13 md:px-4.5 md:text-lg"
              >
                {team.ctaLabel}
                <ChevronsRight className="size-6 shrink-0" aria-hidden />
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </PrimarySection>
  );
}
