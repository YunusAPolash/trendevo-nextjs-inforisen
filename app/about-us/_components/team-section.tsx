import Image from 'next/image';
import Link from 'next/link';
import { ChevronsRight } from 'lucide-react';
import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';

const checklistItems = [
  'RendEvo makes digital marketing tools accessible to all Bangladeshi businesses.',
  'We keep refining our services for reliable platform performance.',
  'Client success drives us to maintain top social media growth standards.',
  'RendEvo provides Bangladeshi businesses with reliable tools for online growth.',
] as const;

export default function TeamSection() {
  return (
    <PrimarySection bg="section-4" className="overflow-hidden">
      <div className="container py-16 lg:py-21">
        <div className="relative flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          <div className="relative mx-auto aspect-567/698 w-full max-w-xl shrink-0 overflow-visible lg:mx-0">
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-0 left-0 z-0 hidden h-28 w-full rounded-2xl bg-white/35 lg:block"
            />

            <div
              aria-hidden
              className="pointer-events-none absolute -left-56 top-0 z-10 hidden h-full w-full overflow-visible lg:block"
            >
              <Image
                src="/images/about/about-team-character.png"
                alt=""
                width={952}
                height={1024}
                className="absolute inset-0 h-full w-full scale-110 object-cover object-top"
                sizes="576px"
              />
            </div>

            <div className="relative z-20 h-full w-full overflow-visible">
              <Image
                src="/images/about/about-team-character.png"
                alt="TrendEvo team specialist representing digital marketing expertise"
                width={952}
                height={1024}
                className="absolute inset-0 h-full w-full scale-110 object-cover object-top"
                sizes="576px"
              />
            </div>
          </div>

          <div className="flex w-full max-w-3xl shrink-0 flex-col gap-9">
            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-8">
                <SectionHeading
                  align="left"
                  badge="OUR TEAM"
                  title={
                    <>
                      The Team Behind T
                      <span className="text-gradient">RendEvo</span>
                    </>
                  }
                  titleClassName="text-4xl leading-snug tracking-wide text-[#13203b] lg:text-5xl"
                />

                <p className="text-xl font-medium leading-normal text-[#404a60]">
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

                <p className="text-xl font-medium leading-normal text-[#404a60]">
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

              <ul className="flex max-w-3xl flex-col gap-4.5">
                {checklistItems.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Image
                      src="/images/icons/check-icon.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="size-6 shrink-0"
                      aria-hidden
                    />
                    <span className="text-xl font-medium leading-normal text-[#071431]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              asChild
              className="bg-brand-gradient h-13 w-fit gap-2 rounded-lg border-2 border-[#cc7aff] px-4.5 text-lg font-semibold text-white hover:opacity-90"
            >
              <Link href="/services">
                Our Services
                <ChevronsRight className="size-6" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </PrimarySection>
  );
}
