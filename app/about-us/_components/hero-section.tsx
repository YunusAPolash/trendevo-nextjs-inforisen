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
      <div className="mx-auto grid max-w-[1440px] gap-10 px-6 pt-[154px] lg:grid-cols-2 lg:items-end lg:gap-8 lg:pt-[198px]">
        <div className="flex min-w-0 max-w-[762px] flex-col gap-4 lg:self-start">
          <p className="text-2xl font-semibold leading-[1.45] text-gradient">
            Who We Are
          </p>

          <div className="flex flex-col gap-[34px]">
            <div className="flex flex-col gap-7">
              <h1 className="text-4xl font-semibold leading-[1.35] tracking-wide text-[#313131] sm:text-5xl lg:text-[48px]">
                Trend Evo –{' '}
                <span className="text-gradient">Trusted SMM Panel</span> for
                Growing Businesses & Creators
              </h1>
              <p className="max-w-[762px] text-lg font-medium leading-relaxed text-[#343e56]">
                Fast, reliable, and affordable{' '}
                <span className="text-gradient">SMM services</span> to grow your
                social media presence. From Facebook and Instagram to TikTok and
                YouTube, Rendevo helps businesses and creators achieve real
                results. We provide trusted solutions and support to simplify
                social media marketing and boost growth.
              </p>
            </div>

            <Button className="bg-brand-gradient h-[50px] w-fit rounded-[10px] border-[1.5px] border-[#cc7aff] px-[18px] text-base font-semibold text-white hover:opacity-90">
              Get Started Now
              <span className="ml-2 flex size-8 items-center justify-center rounded-full bg-white/10">
                <ArrowRight className="size-4" aria-hidden />
              </span>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full min-w-0 max-w-[547px] lg:mx-0 lg:-mt-16 lg:justify-self-end lg:self-end">
          <Image
            src="/images/about/about-hero-character.png"
            alt="TrendEvo specialist representing trusted SMM panel services"
            width={547}
            height={673}
            priority
            sizes="(max-width: 1024px) 100vw, 547px"
            className="block h-auto w-full"
          />

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
    </PrimarySection>
  );
}
