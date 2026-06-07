import Image from 'next/image';
import PrimarySection from '@/components/sections/primary-section';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const features = [
  'Fast Delivery with Smooth and Reliable Performance',
  'Real & High-Quality Engagement to Build Strong Social Proof',
  'Safe, Secure & High Retention for Long-Term Growth',
];

const metrics = [
  { value: '06+', label: 'Years of Digital Marketing Experience' },
  { value: '100k+', label: 'Orders Delivered Successfully' },
  { value: '50K+', label: 'Active Users & Businesses Served' },
  { value: '98%', label: 'Customer Satisfaction Rate' },
];

export default function AboutSection() {
  return (
    <PrimarySection id="about" bg="section-2">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="space-y-4">
            <div>
              <span className="text-gradient text-sm font-semibold uppercase tracking-wide">
                ABOUT US
              </span>
              <span className="mt-1 block h-2 w-24 rounded-full bg-gradient-to-r from-[#ad26ff] to-[#ff3f85] opacity-60" />
            </div>
            <h2 className="text-4xl font-semibold leading-[1.35] text-[#13203b] md:text-5xl">
              Your Trusted{' '}
              <span className="text-gradient">Social Media</span>
              <br />
              Growth Partner
            </h2>
            <p className="text-lg leading-relaxed text-[#404a60]">
              A reliable SMM platform designed to deliver fast, secure, and
              high-quality social media growth for individuals, businesses, and
              resellers.
            </p>
          </div>

          <ul className="space-y-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <Image
                  src="/images/icons/check-icon.png"
                  alt=""
                  width={24}
                  height={24}
                  className="mt-0.5 size-6 shrink-0"
                />
                <span className="text-lg text-[#071431]">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="grid gap-6 sm:grid-cols-2">
            {metrics.map((metric) => (
              <div key={metric.label} className="flex items-center gap-3">
                <span className="text-gradient text-4xl font-semibold">
                  {metric.value}
                </span>
                <span className="text-sm leading-snug text-[#404a60]">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          <Button className="bg-brand-gradient h-[52px] rounded-[10px] border-0 px-6 text-lg font-semibold text-white hover:opacity-90">
            Discover More
            <ArrowRight className="size-5" />
          </Button>
        </div>

        <div className="relative mx-auto aspect-[594/736] w-full max-w-[594px]">
          <div className="absolute inset-8 rounded-full bg-[#f0d8ff]/60" />
          <Image
            src="/images/about/about-character.png"
            alt="TrendEvo growth partner"
            fill
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </PrimarySection>
  );
}
