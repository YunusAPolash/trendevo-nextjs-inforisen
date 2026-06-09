import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import PrimarySection from '@/components/sections/primary-section';
import { Button } from '@/components/ui/button';

const socialIcons = [
  {
    label: 'Facebook',
    src: '/images/contact-us/contact-us-social-facebook.webp',
  },
  {
    label: 'Instagram',
    src: '/images/contact-us/contact-us-social-instagram.webp',
  },
  {
    label: 'LinkedIn',
    src: '/images/contact-us/contact-us-social-linkedin.webp',
  },
  {
    label: 'Spotify',
    src: '/images/contact-us/contact-us-social-spotify.webp',
  },
  {
    label: 'Telegram',
    src: '/images/contact-us/contact-us-social-telegram.webp',
  },
  {
    label: 'TikTok',
    src: '/images/contact-us/contact-us-social-tiktok.webp',
  },
] as const;

export default function HeroSection() {
  return (
    <PrimarySection bg="section-1" className="overflow-hidden px-0 pb-0">
      <div className="mx-auto grid max-w-[1440px] gap-8 px-6 pt-28 sm:gap-10 sm:pt-36 md:pt-40 lg:grid-cols-2 lg:items-end lg:gap-8 lg:pt-[154px] xl:pt-[198px]">
        <div className="flex min-w-0 flex-col gap-6 lg:max-w-[762px] lg:gap-8 lg:self-center">
          <div className="space-y-6">
            <h1 className="text-[28px] font-semibold leading-[1.35] tracking-tight text-[#071431] sm:text-4xl md:text-5xl">
              Connect with Trend Evo for Expert
              <span className="text-gradient"> SMM Panel Support</span>
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-[#343e56] sm:text-base md:text-lg">
              We are committed to delivering top-notch SMM panel services with smooth
              order processing, real-time support, and proven strategies to help you
              achieve consistent growth across all social media platforms.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <Button className="bg-brand-gradient h-10 shrink-0 rounded-[10px] border-[1.5px] border-[#cc7aff] px-4 text-sm font-semibold text-white hover:opacity-90 sm:h-11 sm:px-5 sm:text-base md:h-[50px] md:px-[18px]">
              Get Started Now
              <span className="ml-2 flex size-8 items-center justify-center rounded-full bg-white/10">
                <ArrowRight className="size-4" aria-hidden />
              </span>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full min-w-0 max-w-[583px] lg:mx-0 lg:-mt-16 lg:justify-self-end lg:self-end">
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-[6.94%] left-[1.37%] z-0 aspect-square w-[95.54%]"
          >
            <Image
              src="/images/contact-us/contact-us-hero-ring.svg"
              alt=""
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          <Image
            src="/images/contact-us/contact-us-hero-character.webp"
            alt="TrendEvo support specialist pointing to contact options"
            width={583}
            height={648}
            priority
            sizes="(max-width: 1024px) 100vw, 583px"
            className="relative z-10 block h-auto w-full"
          />

          <div className="absolute bottom-0 left-[4.12%] z-20 w-[92.97%] overflow-visible">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 h-20 rounded-[20px] bg-white/[0.04] backdrop-blur-md backdrop-saturate-150 sm:h-24 lg:h-28"
            />
            <div className="relative grid h-20 grid-cols-6 items-center gap-0.5 overflow-visible px-2 py-2 sm:h-24 sm:gap-2 sm:px-4 sm:py-3 lg:h-28 lg:gap-3 lg:px-5 lg:pb-4">
              {socialIcons.map((icon, index) => (
                <div
                  key={icon.label}
                  className="contact-hero-icon-wave flex shrink-0 justify-center self-center"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative aspect-square w-full max-w-9 shrink-0 overflow-hidden rounded-lg sm:max-w-14 sm:rounded-xl md:max-w-16 lg:max-w-20">
                    <Image
                      src={icon.src}
                      alt={icon.label}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 36px, (max-width: 1024px) 56px, 80px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PrimarySection>
  );
}
