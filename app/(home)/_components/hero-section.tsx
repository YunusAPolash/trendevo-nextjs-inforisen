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
      <div className="container grid gap-8 pt-28 sm:gap-10 sm:pt-36 md:pt-40 lg:grid-cols-2 lg:items-end lg:gap-8 lg:pt-[154px] xl:pt-[198px]">
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
            <h1 className="text-[28px] font-semibold leading-[1.35] tracking-tight text-[#071431] sm:text-4xl md:text-5xl">
              Trusted{' '}
              <span className="text-gradient">SMM Panel</span>
              <br />
              High-Speed Delivery With{' '}
              <span className="text-gradient">Secure Services</span>
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-[#313131] sm:text-base md:text-lg">
              <span className="text-gradient font-medium">TrendEvo</span> is a
              next-generation viral growth platform crafted to help brands,
              creators, and agencies unlock their full digital potential. We
              combine speed, reliability, and scalable infrastructure to deliver
              measurable growth in reach, engagement, and online visibility
              across global markets.
            </p>
            <div className="flex gap-2">
              <Image
                src="/images/icons/hero-fire-icon.png"
                alt=""
                width={24}
                height={24}
                className="size-6 shrink-0"
              />
              <p className="text-base text-[#313131] text-sm leading-relaxed text-[#313131] sm:text-base md:text-lg">
                Enjoy up to{' '}
                <span className="font-semibold text-[#fc7f4d]">30%</span> bonus on
                every deposit, starting at only $1.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <Button
              variant="outline"
              className="h-10 shrink-0 rounded-[10px] border-[#cb7ef7] bg-white/25 px-4 text-sm font-semibold text-gradient hover:bg-white/40 sm:h-11 sm:px-5 sm:text-base md:h-[50px] md:w-[180px] md:px-[18px]"
            >
              Sign In
            </Button>
            <Button className="bg-brand-gradient h-10 shrink-0 rounded-[10px] border-0 px-4 text-sm font-semibold text-white hover:opacity-90 sm:h-11 sm:px-5 sm:text-base md:h-[50px] md:px-[18px]">
              Create an Account
            </Button>
          </div>
        </div>

        <div className="mx-auto w-full min-w-0 max-w-[669px] lg:mx-0 lg:-mt-16 lg:justify-self-end lg:self-end">
          <Image
            src="/images/hero/hero-illustration.png"
            alt="TrendEvo platform user with social media icons and analytics"
            width={669}
            height={728}
            priority
            sizes="(max-width: 1024px) 100vw, 669px"
            className="block h-auto w-full"
          />
        </div>
      </div>
    </PrimarySection>
  );
}
