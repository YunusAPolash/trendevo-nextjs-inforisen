import Image from 'next/image';
import Link from 'next/link';
import { ChevronsRight } from 'lucide-react';
import PrimarySection from '@/components/sections/primary-section';
import { Button } from '@/components/ui/button';

const checklistItems = [
  'RendEvo makes digital marketing tools accessible to all Bangladeshi businesses.',
  'We keep refining our services for reliable platform performance.',
  'Client success drives us to maintain top social media growth standards.',
  'RendEvo provides Bangladeshi businesses with reliable tools for online growth.',
] as const;

export default function TeamSection() {
  return (
    <PrimarySection
      bg="section-4"
      darkBg="section-4-dark"
      className="overflow-x-hidden"
    >
      <div className="container py-16 lg:py-21">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="relative mx-auto aspect-[567/698] w-full max-w-xl overflow-hidden lg:mx-0 lg:max-w-none">
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-0 left-0 z-0 hidden h-28 w-full rounded-2xl bg-white/35 lg:block"
            />

            <div className="relative z-20 h-full w-full">
              <Image
                src="/images/about/about-team-character.png"
                alt="TrendEvo team specialist representing digital marketing expertise"
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
                <h2 className="w-full min-w-0 text-3xl font-semibold leading-snug break-words text-[#13203b] sm:text-4xl lg:text-5xl dark:text-[#efedf1]">
                  The Team Behind T
                  <span className="text-gradient">RendEvo</span>
                </h2>

                <p className="w-full min-w-0 text-base font-medium leading-normal break-words text-[#404a60] sm:text-lg lg:text-xl dark:text-[#c1c4cc]">
                  <span className="text-gradient font-semibold">RendEvo</span>
                  {
                    ' is powered by a skilled team of digital marketing specialists, software engineers, social media strategists, and customer success experts. Each member shares a single mission: to help '
                  }
                  <span className="text-gradient font-semibold">
                    Bangladeshi businesses
                  </span>
                  {
                    ' grow online with effective, results-driven social media solutions tailored to the local market.'
                  }
                </p>

                <p className="w-full min-w-0 text-base font-medium leading-normal break-words text-[#404a60] sm:text-lg lg:text-xl dark:text-[#c1c4cc]">
                  {'Our founder, '}
                  <span className="text-gradient font-semibold">
                    Seam Rahman
                  </span>
                  {', brings over '}
                  <span className="text-gradient font-semibold">
                    10 years of experience
                  </span>
                  {
                    ' guiding RendEvo’s vision for impactful digital growth. The technical team ensures a secure, stable platform '
                  }
                  <span className="text-gradient font-semibold">24/7</span>
                  {
                    ', while our support staff offers personalized guidance in Bangla and English.'
                  }
                </p>
              </div>

              <ul className="flex w-full min-w-0 flex-col gap-4.5">
                {checklistItems.map((item) => (
                  <li
                    key={item}
                    className="flex w-full min-w-0 items-start gap-2"
                  >
                    <Image
                      src="/images/icons/check-icon.svg"
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

            <Button
              asChild
              className="bg-brand-gradient h-13 w-fit max-w-full gap-2 rounded-lg border-2 border-[#cc7aff] px-4.5 text-lg font-semibold text-white hover:opacity-90"
            >
              <Link href="/services">
                Our Services
                <ChevronsRight className="size-6 shrink-0" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </PrimarySection>
  );
}
