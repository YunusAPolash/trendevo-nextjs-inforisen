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
    <PrimarySection bg="section-1" className="overflow-hidden pt-28 pb-16 lg:pb-20">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-8">
          <div className="flex max-w-[762px] flex-col gap-[34px]">
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

          <div className="relative mx-auto w-full max-w-[468px]">
            <div className="relative aspect-[468/581] w-full">
              <Image
                src="/images/services/services-hero-character.png"
                alt="TrendEvo specialist presenting social media growth services"
                fill
                priority
                className="object-contain object-bottom"
                sizes="(max-width: 1024px) 100vw, 468px"
              />
            </div>

            <div className="absolute inset-x-0 bottom-0 rounded-[20px] bg-white/5 px-4 py-5 backdrop-blur-sm">
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                {socialIcons.map((icon) => (
                  <div
                    key={icon.label}
                    className="relative size-16 overflow-hidden rounded-xl sm:size-20"
                  >
                    <Image
                      src={icon.src}
                      alt={icon.label}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PrimarySection>
  );
}
