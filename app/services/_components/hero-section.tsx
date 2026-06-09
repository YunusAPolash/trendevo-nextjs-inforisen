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
          <div className="flex flex-col gap-7">
            <h1 className="text-4xl font-semibold leading-[1.35] tracking-wide text-[#313131] sm:text-5xl lg:text-[48px]">
              Boost Your Social Media Growth with{' '}
              <span className="text-gradient">Trend Evo Services</span>
            </h1>
            <p className="max-w-[762px] text-lg font-medium leading-relaxed text-[#343e56]">
              Boost your social media growth with Trend Evo. Reach more followers on{' '}
              <span className="text-gradient">
                Instagram, Facebook, YouTube, and TikTok
              </span>
              . Engage your audience like never before with reliable, fast services.
              Take your online presence to the next level and grow confidently.
            </p>
          </div>

          <Button className="bg-brand-gradient h-[50px] w-fit rounded-[10px] border-[1.5px] border-[#cc7aff] px-[18px] text-base font-semibold text-white hover:opacity-90">
            Get Started Now
            <span className="ml-2 flex size-8 items-center justify-center rounded-full bg-white/10">
              <ArrowRight className="size-4" aria-hidden />
            </span>
          </Button>
        </div>

        <div className="relative mx-auto w-full min-w-0 max-w-[468px] overflow-visible lg:mx-0 lg:-mt-16 lg:justify-self-end lg:self-end">
          <div
            aria-hidden
            className="pointer-events-none absolute top-[11.02%] -left-[10.04%] z-0 aspect-square w-[118.97%]"
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
            src="/images/services/service-hero-character.png"
            alt="TrendEvo specialist presenting social media growth services"
            width={468}
            height={581}
            priority
            sizes="(max-width: 1024px) 100vw, 468px"
            className="relative z-10 block h-auto w-full"
          />

          <div className="absolute bottom-0 -left-[6.84%] z-20 w-[115.81%] overflow-visible">
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
