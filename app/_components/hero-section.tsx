import Image from 'next/image';
import PrimarySection from '@/components/sections/primary-section';
import SiteHeader from '@/components/layout/site-header';
import { Button } from '@/components/ui/button';

const avatars = [
  '/images/reviews/hero-avatar-1.png',
  '/images/reviews/hero-avatar-2.png',
  '/images/reviews/hero-avatar-3.png',
  '/images/reviews/hero-avatar-4.png',
  '/images/reviews/hero-avatar-5.png',
  '/images/reviews/hero-avatar-3.png',
];

const socialIcons = [
  { src: '/images/icons/hero-facebook-icon.png', alt: 'Facebook', className: 'left-[4%] top-[33%]' },
  { src: '/images/icons/hero-youtube-icon.png', alt: 'YouTube', className: 'left-[2%] top-[44%]' },
  { src: '/images/icons/hero-linkedin-icon.png', alt: 'LinkedIn', className: 'left-[6%] top-[55%]' },
  { src: '/images/icons/hero-instagram-icon.png', alt: 'Instagram', className: 'right-[6%] top-[34%]' },
  { src: '/images/icons/hero-tiktok-icon.png', alt: 'TikTok', className: 'right-[8%] top-[45%]' },
  { src: '/images/icons/hero-x-icon.png', alt: 'X', className: 'right-[4%] top-[55%]' },
];

export default function HeroSection() {
  return (
    <PrimarySection bg="section-1" className="overflow-hidden py-0 lg:py-0">
      <SiteHeader />
      <div className="relative mx-auto grid max-w-[1440px] gap-10 px-6 pb-16 pt-10 lg:grid-cols-2 lg:items-center lg:gap-8 lg:px-0 lg:pb-24 lg:pt-12">
        <div className="flex flex-col gap-6 lg:gap-8">
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
              alt=""
              width={16}
              height={16}
              className="size-4"
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
                className="size-6"
              />
              <p className="text-base text-[#313131]">
                Enjoy up to{' '}
                <span className="font-semibold text-[#fc7f4d]">30%</span> bonus on
                every deposit, starting at only $1.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              className="h-[50px] rounded-[10px] border-[#cb7ef7] bg-white/25 px-6 text-base font-semibold text-gradient hover:bg-white/40"
            >
              Sign In
            </Button>
            <Button className="bg-brand-gradient h-[50px] rounded-[10px] border-0 px-6 text-base font-semibold text-white hover:opacity-90">
              Create an Account
            </Button>
          </div>
        </div>

        <div className="relative mx-auto aspect-[451/700] w-full max-w-[451px] lg:mx-0 lg:justify-self-end">
          <div className="absolute inset-0 rounded-full border-[40px] border-[#f5d4ff]/60" />
          <Image
            src="/images/hero/hero-character.png"
            alt="TrendEvo platform user"
            fill
            className="object-contain object-bottom"
            priority
          />
          {socialIcons.map((icon) => (
            <Image
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              width={68}
              height={68}
              className={`absolute size-14 object-contain md:size-16 ${icon.className}`}
            />
          ))}
          <Image
            src="/images/hero/hero-dashboard-chart.png"
            alt="Analytics dashboard"
            width={330}
            height={253}
            className="absolute -bottom-2 left-0 w-[55%] max-w-[200px] object-contain md:max-w-[260px]"
          />
          <Image
            src="/images/hero/hero-growth-chart.png"
            alt="Growth chart"
            width={200}
            height={200}
            className="absolute bottom-4 right-0 w-[35%] max-w-[140px] object-contain"
          />
        </div>
      </div>
    </PrimarySection>
  );
}
