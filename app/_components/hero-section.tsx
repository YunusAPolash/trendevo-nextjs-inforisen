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
<<<<<<< HEAD
    <PrimarySection bg="section-1" className="overflow-hidden py-0 lg:py-0">
      <SiteHeader />
      <div className="relative mx-auto grid max-w-[1440px] gap-10 px-6 pb-16 pt-10 lg:grid-cols-2 lg:items-center lg:gap-8 lg:px-0 lg:pb-24 lg:pt-12">
        <div className="flex flex-col gap-6 lg:gap-8">
=======
    <PrimarySection bg="section-1" className="overflow-hidden px-0 pb-0">
      <div className="relative mx-auto min-h-[600px] max-w-[1440px] px-6 pb-16 lg:min-h-[862px] lg:px-0 lg:pb-24">
        <div className="relative z-10 flex max-w-[762px] flex-col gap-6 pt-[154px] lg:gap-8 lg:pt-[198px]">
>>>>>>> 4bf9f333ef34d2337398599077ed0355d8115097
          <div className="inline-flex w-fit items-center gap-2 rounded-lg border-l-2 border-[#cb7ef7] bg-white py-2 pl-1.5 pr-3">
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
            <h1 className="text-4xl font-semibold leading-[1.35] tracking-tight text-[#071431] md:text-5xl">
              Trusted{' '}
              <span className="text-gradient">SMM Panel</span>
              <br />
              High-Speed Delivery With{' '}
              <span className="text-gradient">Secure Services</span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-[#313131]">
              <span className="text-gradient font-medium">TrendEvo</span> is a
              next-generation viral growth platform crafted to help brands,
              creators, and agencies unlock their full digital potential. We
              combine speed, reliability, and scalable infrastructure to deliver
              measurable growth in reach, engagement, and online visibility
              across global markets.
            </p>
            <div className="flex items-center gap-2">
              <Image
                src="/images/icons/hero-fire-icon.png"
                alt=""
                width={24}
                height={24}
                className="size-6 shrink-0"
              />
              <p className="text-base text-[#313131]">
                Enjoy up to{' '}
                <span className="font-semibold text-[#fc7f4d]">30%</span> bonus on
                every deposit, starting at only $1.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="outline"
              className="h-[50px] w-[180px] shrink-0 rounded-[10px] border-[#cb7ef7] bg-white/25 px-[18px] text-base font-semibold text-gradient hover:bg-white/40"
            >
              Sign In
            </Button>
            <Button className="bg-brand-gradient h-[50px] shrink-0 rounded-[10px] border-0 px-[18px] text-base font-semibold text-white hover:opacity-90">
              Create an Account
            </Button>
          </div>
        </div>

        <div className="relative mx-auto mt-10 w-full max-w-[669px] lg:absolute lg:top-[134px] lg:right-0 lg:mt-0 lg:w-[669px]">
          <Image
            src="/images/hero/hero-illustration.png"
            alt="TrendEvo platform user with social media icons and analytics"
            width={669}
            height={728}
            priority
            sizes="(max-width: 1024px) 100vw, 669px"
            className="h-auto w-full"
          />
        </div>
      </div>
    </PrimarySection>
  );
}
