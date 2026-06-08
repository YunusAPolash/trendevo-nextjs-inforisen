import Image from 'next/image';
import PrimarySection from '@/components/sections/primary-section';
import { Button } from '@/components/ui/button';

export default function CtaSection() {
  return (
    <PrimarySection bg="section-8">
      <div className="container grid items-center gap-10 lg:grid-cols-2">
        <div className="relative mx-auto aspect-[427/594] w-full max-w-[427px] lg:mx-0">
          <Image
            src="/images/hero/hero-character.png"
            alt="Start growing with TrendEvo"
            fill
            className="object-contain object-bottom"
          />
        </div>

        <div className="space-y-8">
          <h2 className="text-4xl font-semibold leading-tight text-[#071431] md:text-5xl">
            Ready to Grow your Social Media in{' '}
            <span className="text-gradient">Bangladesh</span>
          </h2>
          <p className="text-lg leading-relaxed text-[#404a60]">
            Join thousands of users growing faster with TrendEvo Panel on
            Facebook, Instagram, YouTube, and TikTok. Get started free in under
            60 seconds. We ensure 100% customer satisfaction with an all-in-one,
            fully automated SMM solution that helps your business stand out and
            grow effortlessly.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button className="bg-brand-gradient h-[50px] rounded-[10px] border-0 px-6 font-semibold text-white hover:opacity-90">
              Register Now
            </Button>
            <Button
              variant="outline"
              className="h-[50px] rounded-[10px] border-[#cb7ef7] bg-white/25 px-6 font-semibold text-gradient hover:bg-white/40"
            >
              See all Services
            </Button>
          </div>
        </div>
      </div>
    </PrimarySection>
  );
}
