'use client';

import Image from 'next/image';
import { useState } from 'react';
import PrimaryCard from '@/components/cards/primary-card';
import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

const platforms = [
  { id: 'instagram', label: 'Instagram', icon: '/images/icons/platform-instagram.png' },
  { id: 'facebook', label: 'Facebook', icon: '/images/icons/platform-facebook.png' },
  { id: 'youtube', label: 'YouTube', icon: '/images/icons/platform-youtube.png' },
  { id: 'tiktok', label: 'TikTok', icon: '/images/icons/platform-tiktok.png' },
];

const plans = [
  {
    name: 'Basic',
    price: '$45.00',
    description: 'Instagram High Quality Followers',
    featured: false,
    features: [
      'Guarantee Fast Delivery',
      'Instant Start',
      'Never Drop',
      'No Password Required',
      'Geo: Global',
    ],
  },
  {
    name: 'Professional',
    price: '$45.00',
    description: 'Instagram High Quality Followers',
    featured: true,
    features: [
      'Guarantee Fast Delivery',
      'Instant Start',
      'Never Drop',
      'No Password Required',
      'Geo: Global',
      '24/7 Support',
    ],
  },
  {
    name: 'Basic',
    price: '$45.00',
    description: 'Instagram High Quality Followers',
    featured: false,
    features: [
      'Guarantee Fast Delivery',
      'Instant Start',
      'Never Drop',
      'No Password Required',
      'Geo: Global',
    ],
  },
];

export default function PricingSection() {
  const [activePlatform, setActivePlatform] = useState('instagram');

  return (
    <PrimarySection bg="section-3">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12">
        <SectionHeading
          badge="PRICING"
          title={
            <>
              Pricing Preview of Our{' '}
              <span className="text-gradient">SMM Panel Services</span>
            </>
          }
          subtitle="Simple, Clear, and Affordable for Everyone. We make social media growth easy without high costs. Our prices are clear, fair, and fit every budget."
        />

        <div className="flex flex-wrap justify-center gap-3">
          {platforms.map((platform) => {
            const isActive = activePlatform === platform.id;
            return (
              <button
                key={platform.id}
                type="button"
                onClick={() => setActivePlatform(platform.id)}
                className={cn(
                  'flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-semibold transition-all',
                  isActive
                    ? 'bg-brand-gradient border-transparent text-white'
                    : 'border-[#8f2acd]/30 bg-[#f8f0ff]/40 text-[#343e56]',
                )}
              >
                <Image
                  src={platform.icon}
                  alt=""
                  width={20}
                  height={20}
                  className="size-5 object-contain"
                />
                {platform.label}
              </button>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:items-end">
          {plans.map((plan, index) => (
            <PrimaryCard
              key={`${plan.name}-${index}`}
              bg={plan.featured ? 'card-2' : 'card-1'}
              className={cn(
                'relative overflow-hidden border border-[#ff7fc1]/30 bg-white p-6',
                plan.featured && 'lg:-mt-4 lg:pb-10',
              )}
            >
              <div className="rounded-xl bg-gradient-to-br from-[#ffe8f5] to-[#f8f0ff] p-6">
                <p className="text-lg font-semibold text-[#071431]">{plan.name}</p>
                <p className="mt-1 text-sm text-[#404a60]">{plan.description}</p>
                <p className="mt-4 text-4xl font-semibold text-[#071431]">
                  {plan.price}
                  <span className="text-base font-medium text-[#404a60]">/month</span>
                </p>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-[#222e48]">
                    <Check className="size-4 text-[#05c191]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className={cn(
                  'mt-6 h-11 w-full rounded-[10px] font-semibold',
                  plan.featured
                    ? 'bg-brand-gradient border-0 text-white hover:opacity-90'
                    : 'border-[#cb7ef7] bg-transparent text-gradient hover:bg-[#f8f0ff]',
                )}
                variant={plan.featured ? 'default' : 'outline'}
              >
                Get Started
              </Button>
            </PrimaryCard>
          ))}
        </div>
      </div>
    </PrimarySection>
  );
}
