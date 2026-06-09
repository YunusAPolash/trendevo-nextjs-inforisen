import Image from 'next/image';
import PrimarySection from '@/components/sections/primary-section';
import { Button } from '@/components/ui/button';

const avatars = [
  '/images/reviews/hero-avatar-1.png',
  '/images/reviews/hero-avatar-2.png',
  '/images/reviews/hero-avatar-3.png',
  '/images/reviews/hero-avatar-4.png',
  '/images/reviews/hero-avatar-5.png',
  '/images/reviews/hero-avatar-3.png',
];

export default function HeroSection() {
  return (
    <PrimarySection bg="section-1" className="overflow-hidden px-0 pb-0">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-6 pt-[154px] lg:grid-cols-2 lg:items-end lg:gap-8 lg:pt-[198px]">
        <div className="flex min-w-0 flex-col gap-6 lg:max-w-[762px] lg:gap-8 lg:self-start">
          <div className="flex w-full max-w-full flex-wrap items-center gap-x-2 gap-y-1 rounded-lg border-l-2 border-[#cb7ef7] bg-white py-2 pl-1.5 pr-3 sm:w-fit">
            <div className="flex -space-x-3">
              {avatars.map((src, index) => (
                <Image
                  key={`${src}-${index}`}
                  src={src}
                  alt=""
                  width={24}
                  height={24}
                  className="size-6 rounded-full border border-white object-cover"
                />
              ))}
            </div>
            <Image
              src="/images/icons/hero-star-rating.png"
              alt="rating"
              width={16}
              height={15}
              className="size-4 shrink-0"
            />
            <span className="text-gradient text-sm font-medium">(4.8)</span>
            <span className="text-gradient text-sm font-medium">
              Trusted by 50,000+ Users in Bangladesh
            </span>
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-[1.35] tracking-wide text-[#313131] md:text-5xl lg:text-[48px]">
              Buy{' '}
              <span className="text-gradient">Facebook Followers</span> in Real,
              Fast &amp; Affordable price.
            </h1>
            <p className="max-w-[762px] text-lg font-medium leading-relaxed text-[#343e56]">
              Growing a Facebook page can be tough. Consistent content and smart
              promotion are key, but results can be slow. At TrendEvo, we
              provide solutions to help your Facebook page thrive with real
              followers and engagement.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="outline"
              className="h-[50px] w-[180px] shrink-0 rounded-[10px] border-[#cb7ef7] bg-white/25 px-[18px] text-base font-semibold text-gradient hover:bg-white/40"
            >
              Sign In
            </Button>
            <Button className="bg-brand-gradient h-[50px] shrink-0 rounded-[10px] border-[1.5px] border-[#cc7aff] px-[18px] text-base font-semibold text-white hover:opacity-90">
              Create an Account
            </Button>
          </div>
        </div>

        <div className="mx-auto w-full min-w-0 max-w-[558px] lg:mx-0 lg:-mt-16 lg:justify-self-end lg:self-end">
          <Image
            src="/images/facebook-page-followers/facebook-page-followers-hero-illustration.png"
            alt="Excited user celebrating Facebook page growth with analytics chart"
            width={558}
            height={621}
            priority
            unoptimized
            sizes="(max-width: 1024px) 100vw, 558px"
            className="block h-auto w-full"
          />
        </div>
      </div>
    </PrimarySection>
  );
}
