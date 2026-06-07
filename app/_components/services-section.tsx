'use client';

import Image from 'next/image';
import { useState } from 'react';
import PrimaryCard from '@/components/cards/primary-card';
import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const platforms = [
  { id: 'facebook', label: 'Facebook', icon: '/images/icons/platform-facebook.png' },
  { id: 'instagram', label: 'Instagram', icon: '/images/icons/platform-instagram.png' },
  { id: 'x', label: 'X (Twitter)', icon: '/images/icons/platform-x.png' },
  { id: 'youtube', label: 'YouTube', icon: '/images/icons/platform-youtube.png' },
  { id: 'tiktok', label: 'TikTok', icon: '/images/icons/platform-tiktok.png' },
  { id: 'linkedin', label: 'LinkedIn', icon: '/images/icons/platform-linkedin.png' },
];

const serviceItems = [
  {
    title: 'Facebook Post Likes',
    description: 'Boost post engagement and credibility with real likes.',
  },
  {
    title: 'Facebook Likes',
    description: 'Grow your page popularity with high-quality likes.',
  },
  {
    title: 'Facebook Comments',
    description: 'Increase interaction with engaging comments.',
  },
  {
    title: 'Facebook Shares',
    description: 'Expand your reach with powerful shares.',
  },
  {
    title: 'Facebook Video Views',
    description: 'Get more visibility with high-retention video views.',
  },
  {
    title: 'Facebook Reactions',
    description: 'Make your posts more engaging with diverse reactions.',
  },
];

export default function ServicesSection() {
  const [activePlatform, setActivePlatform] = useState('facebook');

  return (
    <PrimarySection id="services" bg="section-5" className="overflow-hidden">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12">
        <SectionHeading
          badge="our services"
          title={
            <>
              Powerful <span className="text-gradient">SMM Services</span> for
              Fast Growth
            </>
          }
          subtitle="Explore our comprehensive range of social media marketing services designed to help you grow your presence across all major platforms. From Facebook to TikTok, we've got you covered."
        />

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
          {platforms.map((platform) => {
            const isActive = activePlatform === platform.id;
            return (
              <button
                key={platform.id}
                type="button"
                onClick={() => setActivePlatform(platform.id)}
                className={cn(
                  'flex items-center justify-center gap-2 rounded-lg border px-4 py-3 text-left transition-all',
                  isActive
                    ? 'bg-brand-gradient border-transparent text-white'
                    : 'border-[#8f2acd]/50 bg-[#f8f0ff]/40 text-[#343e56] hover:border-[#8f2acd]',
                )}
              >
                <Image
                  src={platform.icon}
                  alt=""
                  width={20}
                  height={20}
                  className="size-5 object-contain"
                />
                <span className="text-sm font-semibold md:text-base">
                  {platform.label}
                </span>
              </button>
            );
          })}
        </div>

        <PrimaryCard
          bg="card-1"
          className="grid gap-8 border border-[#ff7fc1]/30 bg-white/80 p-6 lg:grid-cols-2 lg:p-10"
        >
          <div className="relative min-h-[280px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#e8c8ff] to-[#ffd4ec]">
            <Image
              src="/images/services/services-facebook-hero.png"
              alt="Facebook marketing services"
              fill
              className="object-contain object-bottom p-4"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-gradient text-2xl font-semibold capitalize">
                {activePlatform} Marketing Services
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#404a60]">
                Boost your brand visibility, connect with your ideal audience, and
                drive more traffic, engagement, and sales through strategic social
                media marketing campaigns.
              </p>
            </div>
            <ul className="space-y-4">
              {serviceItems.map((item, index) => (
                <li key={item.title} className="flex gap-3">
                  <span className="text-gradient mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-[#f8f0ff] text-xs font-semibold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="text-gradient font-semibold">{item.title}</p>
                    <p className="text-sm text-[#404a60]">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Button className="bg-brand-gradient h-11 w-fit rounded-[10px] border-0 px-6 font-semibold text-white hover:opacity-90">
              View {activePlatform.charAt(0).toUpperCase() + activePlatform.slice(1)} Services
            </Button>
          </div>
        </PrimaryCard>
      </div>
    </PrimarySection>
  );
}
