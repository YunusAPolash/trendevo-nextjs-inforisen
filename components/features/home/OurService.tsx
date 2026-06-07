'use client';

import Image from 'next/image';
import { useState } from 'react';

import PrimaryButton from '@/components/buttons/primary-button';
import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import { cn } from '@/lib/utils';

const GRADIENT_TEXT =
  'bg-gradient-to-r from-[#ad26ff] to-[#ff3f85] bg-clip-text text-transparent';

const ACTIVE_TAB_BG =
  'linear-gradient(102.9deg, rgb(209, 129, 255) 2.85%, rgb(255, 99, 190) 90.53%)';

const INACTIVE_TAB_BG =
  'linear-gradient(111.82deg, rgba(214, 144, 255, 0.08) 4.77%, rgba(215, 148, 255, 0.08) 39.51%, rgba(179, 100, 226, 0.08) 74.24%)';

type ServiceItem = {
  number: string;
  title: string;
  description: string;
};

type Platform = {
  id: string;
  label: string;
  icon: string;
  iconClassName?: string;
  composedIcon?: boolean;
  marketingTitle: string;
  description: string;
  services: ServiceItem[];
};

const platforms: Platform[] = [
  {
    id: 'facebook',
    label: 'Facebook',
    icon: '/images/our-services/platforms/facebook.png',
    marketingTitle: 'Facebook Marketing Services',
    description:
      'Boost your brand visibility, connect with your ideal audience, and drive more traffic, engagement, and sales through strategic Facebook marketing campaigns.',
    services: [
      {
        number: '01',
        title: 'Facebook Post Likes-',
        description: 'Boost post engagement and credibility with real likes.',
      },
      {
        number: '02',
        title: 'Facebook Likes-',
        description: 'Grow your page popularity with high-quality likes.',
      },
      {
        number: '03',
        title: 'Facebook Comments-',
        description: 'Increase interaction with engaging comments.',
      },
      {
        number: '04',
        title: 'Facebook Shares-',
        description: 'Expand your reach with powerful shares.',
      },
      {
        number: '05',
        title: 'Facebook Video Views-',
        description: 'Get more visibility with high-retention video views.',
      },
      {
        number: '06',
        title: 'Facebook Reactions-',
        description:
          'Make your posts more engaging with diverse reactions..',
      },
    ],
  },
  {
    id: 'instagram',
    label: 'Instagram',
    icon: '/images/our-services/platforms/instagram.png',
    marketingTitle: 'Instagram Marketing Services',
    description:
      'Grow your Instagram presence with targeted followers, likes, and engagement that builds authentic brand authority.',
    services: [
      {
        number: '01',
        title: 'Instagram Followers-',
        description: 'Increase your follower count with real, active users.',
      },
      {
        number: '02',
        title: 'Instagram Likes-',
        description: 'Boost post visibility with high-quality likes.',
      },
      {
        number: '03',
        title: 'Instagram Comments-',
        description: 'Drive meaningful conversations on your posts.',
      },
      {
        number: '04',
        title: 'Instagram Views-',
        description: 'Maximize reach for reels and story content.',
      },
      {
        number: '05',
        title: 'Instagram Saves-',
        description: 'Improve algorithm ranking with post saves.',
      },
      {
        number: '06',
        title: 'Instagram Shares-',
        description: 'Expand discovery through content sharing.',
      },
    ],
  },
  {
    id: 'twitter',
    label: 'X (Twitter)',
    icon: '/images/our-services/platforms/twitter.png',
    iconClassName: 'scale-150',
    marketingTitle: 'X (Twitter) Marketing Services',
    description:
      'Amplify your voice on X with followers, retweets, and engagement that positions your brand at the center of trending conversations.',
    services: [
      {
        number: '01',
        title: 'X Followers-',
        description: 'Build a credible profile with real followers.',
      },
      {
        number: '02',
        title: 'X Likes-',
        description: 'Increase tweet engagement and visibility.',
      },
      {
        number: '03',
        title: 'X Retweets-',
        description: 'Spread your message across wider networks.',
      },
      {
        number: '04',
        title: 'X Comments-',
        description: 'Spark discussions around your content.',
      },
      {
        number: '05',
        title: 'X Impressions-',
        description: 'Boost overall tweet reach and exposure.',
      },
      {
        number: '06',
        title: 'X Bookmarks-',
        description: 'Encourage saves for long-term visibility.',
      },
    ],
  },
  {
    id: 'youtube',
    label: 'YouTube',
    icon: '/images/our-services/platforms/youtube.png',
    marketingTitle: 'YouTube Marketing Services',
    description:
      'Accelerate channel growth with views, subscribers, and engagement that helps your videos rank higher and reach more viewers.',
    services: [
      {
        number: '01',
        title: 'YouTube Subscribers-',
        description: 'Grow your channel with active subscribers.',
      },
      {
        number: '02',
        title: 'YouTube Views-',
        description: 'Increase watch counts on your videos.',
      },
      {
        number: '03',
        title: 'YouTube Likes-',
        description: 'Improve video credibility with likes.',
      },
      {
        number: '04',
        title: 'YouTube Comments-',
        description: 'Drive community interaction on videos.',
      },
      {
        number: '05',
        title: 'YouTube Watch Hours-',
        description: 'Meet monetization thresholds faster.',
      },
      {
        number: '06',
        title: 'YouTube Shares-',
        description: 'Expand video discovery through sharing.',
      },
    ],
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    icon: '/images/our-services/platforms/tiktok.png',
    marketingTitle: 'TikTok Marketing Services',
    description:
      'Go viral faster with TikTok followers, views, and engagement designed to boost your content in the For You feed.',
    services: [
      {
        number: '01',
        title: 'TikTok Followers-',
        description: 'Build a loyal audience on TikTok.',
      },
      {
        number: '02',
        title: 'TikTok Likes-',
        description: 'Increase engagement on your videos.',
      },
      {
        number: '03',
        title: 'TikTok Views-',
        description: 'Boost video watch counts rapidly.',
      },
      {
        number: '04',
        title: 'TikTok Shares-',
        description: 'Amplify reach through content sharing.',
      },
      {
        number: '05',
        title: 'TikTok Comments-',
        description: 'Encourage community interaction.',
      },
      {
        number: '06',
        title: 'TikTok Saves-',
        description: 'Improve algorithm performance with saves.',
      },
    ],
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: '/images/our-services/platforms/linkedin.png',
    marketingTitle: 'LinkedIn Marketing Services',
    description:
      'Strengthen your professional brand with LinkedIn connections, followers, and engagement that opens doors to new opportunities.',
    services: [
      {
        number: '01',
        title: 'LinkedIn Followers-',
        description: 'Grow your company or personal page.',
      },
      {
        number: '02',
        title: 'LinkedIn Connections-',
        description: 'Expand your professional network.',
      },
      {
        number: '03',
        title: 'LinkedIn Likes-',
        description: 'Boost post engagement and reach.',
      },
      {
        number: '04',
        title: 'LinkedIn Comments-',
        description: 'Spark professional discussions.',
      },
      {
        number: '05',
        title: 'LinkedIn Shares-',
        description: 'Increase content distribution.',
      },
      {
        number: '06',
        title: 'LinkedIn Endorsements-',
        description: 'Build credibility with skill endorsements.',
      },
    ],
  },
  {
    id: 'telegram',
    label: 'Telegram',
    icon: '/images/our-services/platforms/telegram.png',
    marketingTitle: 'Telegram Marketing Services',
    description:
      'Grow your Telegram channel or group with members and engagement that builds an active, responsive community.',
    services: [
      {
        number: '01',
        title: 'Telegram Members-',
        description: 'Increase channel or group membership.',
      },
      {
        number: '02',
        title: 'Telegram Views-',
        description: 'Boost post view counts.',
      },
      {
        number: '03',
        title: 'Telegram Reactions-',
        description: 'Drive engagement on channel posts.',
      },
      {
        number: '04',
        title: 'Telegram Shares-',
        description: 'Expand message reach organically.',
      },
      {
        number: '05',
        title: 'Telegram Poll Votes-',
        description: 'Increase participation in polls.',
      },
      {
        number: '06',
        title: 'Telegram Comments-',
        description: 'Build active discussion threads.',
      },
    ],
  },
  {
    id: 'discord',
    label: 'Discord',
    icon: '/images/our-services/platforms/discord.png',
    marketingTitle: 'Discord Marketing Services',
    description:
      'Build thriving Discord communities with members, online activity, and engagement that keeps your server active.',
    services: [
      {
        number: '01',
        title: 'Discord Members-',
        description: 'Grow your server membership.',
      },
      {
        number: '02',
        title: 'Discord Online Members-',
        description: 'Boost active online presence.',
      },
      {
        number: '03',
        title: 'Discord Reactions-',
        description: 'Increase message engagement.',
      },
      {
        number: '04',
        title: 'Discord Invites-',
        description: 'Drive new member acquisition.',
      },
      {
        number: '05',
        title: 'Discord Boosts-',
        description: 'Unlock premium server perks.',
      },
      {
        number: '06',
        title: 'Discord Messages-',
        description: 'Keep channels active and lively.',
      },
    ],
  },
  {
    id: 'spotify',
    label: 'Spotify',
    icon: '/images/our-services/platforms/spotify.png',
    marketingTitle: 'Spotify Marketing Services',
    description:
      'Increase your music reach with Spotify plays, followers, and playlist placements that grow your listener base.',
    services: [
      {
        number: '01',
        title: 'Spotify Plays-',
        description: 'Boost track and album play counts.',
      },
      {
        number: '02',
        title: 'Spotify Followers-',
        description: 'Grow your artist profile following.',
      },
      {
        number: '03',
        title: 'Spotify Saves-',
        description: 'Increase track library saves.',
      },
      {
        number: '04',
        title: 'Spotify Monthly Listeners-',
        description: 'Expand your active listener base.',
      },
      {
        number: '05',
        title: 'Spotify Playlist Adds-',
        description: 'Get featured on popular playlists.',
      },
      {
        number: '06',
        title: 'Spotify Pre-saves-',
        description: 'Build anticipation for new releases.',
      },
    ],
  },
  {
    id: 'soundcloud',
    label: 'SoundCloud',
    icon: '/images/our-services/platforms/soundcloud.png',
    composedIcon: true,
    marketingTitle: 'SoundCloud Marketing Services',
    description:
      'Elevate your SoundCloud profile with plays, followers, and reposts that help your tracks gain traction.',
    services: [
      {
        number: '01',
        title: 'SoundCloud Plays-',
        description: 'Increase track play counts.',
      },
      {
        number: '02',
        title: 'SoundCloud Followers-',
        description: 'Grow your artist following.',
      },
      {
        number: '03',
        title: 'SoundCloud Likes-',
        description: 'Boost track engagement metrics.',
      },
      {
        number: '04',
        title: 'SoundCloud Reposts-',
        description: 'Expand track reach through sharing.',
      },
      {
        number: '05',
        title: 'SoundCloud Comments-',
        description: 'Drive listener interaction.',
      },
      {
        number: '06',
        title: 'SoundCloud Downloads-',
        description: 'Increase offline track saves.',
      },
    ],
  },
  {
    id: 'snapchat',
    label: 'Snapchat',
    icon: '/images/our-services/platforms/snapchat.png',
    marketingTitle: 'Snapchat Marketing Services',
    description:
      'Grow your Snapchat presence with followers, views, and story engagement that connects you with a younger audience.',
    services: [
      {
        number: '01',
        title: 'Snapchat Followers-',
        description: 'Increase your Snapchat following.',
      },
      {
        number: '02',
        title: 'Snapchat Views-',
        description: 'Boost story and snap views.',
      },
      {
        number: '03',
        title: 'Snapchat Screenshots-',
        description: 'Encourage content sharing.',
      },
      {
        number: '04',
        title: 'Snapchat Replies-',
        description: 'Drive direct engagement.',
      },
      {
        number: '05',
        title: 'Snapchat Spotlight Views-',
        description: 'Increase spotlight content reach.',
      },
      {
        number: '06',
        title: 'Snapchat Story Views-',
        description: 'Maximize story visibility.',
      },
    ],
  },
  {
    id: 'website-traffic',
    label: 'Website Traffic',
    icon: '/images/our-services/platforms/website-traffic.png',
    composedIcon: true,
    marketingTitle: 'Website Traffic Services',
    description:
      'Drive targeted visitors to your website with high-quality traffic that improves rankings, conversions, and online visibility.',
    services: [
      {
        number: '01',
        title: 'Organic Traffic-',
        description: 'Increase natural search engine visits.',
      },
      {
        number: '02',
        title: 'Direct Traffic-',
        description: 'Boost direct URL visits.',
      },
      {
        number: '03',
        title: 'Referral Traffic-',
        description: 'Gain visitors from external sources.',
      },
      {
        number: '04',
        title: 'Social Traffic-',
        description: 'Drive visitors from social platforms.',
      },
      {
        number: '05',
        title: 'Geo-Targeted Traffic-',
        description: 'Reach visitors in specific regions.',
      },
      {
        number: '06',
        title: 'Mobile Traffic-',
        description: 'Increase mobile device visits.',
      },
    ],
  },
];

function WebsiteTrafficIcon() {
  return (
    <div className="relative h-[17px] w-[20.621px] shrink-0">
      <Image src="/images/our-services/platforms/wt-5.svg" alt="" aria-hidden fill className="object-contain" unoptimized />
      <Image src="/images/our-services/platforms/wt-7.svg" alt="" aria-hidden fill className="object-contain mix-blend-overlay" unoptimized />
      <Image src="/images/our-services/platforms/wt-8.svg" alt="" aria-hidden fill className="object-contain mix-blend-overlay" unoptimized />
    </div>
  );
}

function PlatformIcon({
  src,
  label,
  className,
  composedIcon,
  platformId,
}: {
  src: string;
  label: string;
  className?: string;
  composedIcon?: boolean;
  platformId?: string;
}) {
  const isSvg = src.endsWith('.svg');

  if (composedIcon && platformId === 'soundcloud') {
    return (
      <div className="relative size-[38px] shrink-0">
        <Image
          src={src}
          alt=""
          aria-hidden
          fill
          className="object-contain"
          unoptimized
        />
        <span className="sr-only">{label}</span>
      </div>
    );
  }

  if (composedIcon && platformId === 'website-traffic') {
    return (
      <div className="relative flex size-[38px] shrink-0 items-center justify-center p-[9px]">
        <Image
          src="/images/our-services/ui/hex-tab.svg"
          alt=""
          aria-hidden
          width={38}
          height={38}
          className="absolute left-1/2 top-1/2 size-[38px] -translate-x-1/2 -translate-y-1/2"
        />
        <WebsiteTrafficIcon />
        <span className="sr-only">{label}</span>
      </div>
    );
  }

  return (
    <div className="relative flex size-[38px] shrink-0 items-center justify-center p-[9px]">
      <Image
        src="/images/our-services/ui/hex-tab.svg"
        alt=""
        aria-hidden
        width={38}
        height={38}
        className="absolute left-1/2 top-1/2 size-[38px] -translate-x-1/2 -translate-y-1/2"
      />
      <Image
        src={src}
        alt=""
        aria-hidden
        width={20}
        height={20}
        className={cn('relative z-10 size-5 object-contain', className)}
        unoptimized={isSvg}
      />
      <span className="sr-only">{label}</span>
    </div>
  );
}

function ServiceNumberBadge({ number }: { number: string }) {
  return (
    <div className="relative flex size-[44px] shrink-0 items-center justify-center">
      <Image
        src="/images/our-services/ui/hex-number.svg"
        alt=""
        aria-hidden
        width={38}
        height={38}
        className="absolute left-1/2 top-1/2 size-[38px] -translate-x-1/2 -translate-y-1/2"
      />
      <span className="relative z-10 text-base font-semibold leading-normal text-white">
        {number}
      </span>
    </div>
  );
}

function PlatformTab({
  platform,
  isActive,
  onSelect,
}: {
  platform: Platform;
  isActive: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isActive}
      className={cn(
        'flex w-full flex-col items-start justify-center rounded-[8px] px-[16px] py-[10px] transition-all',
        !isActive && 'border-[0.5px] border-solid border-[#8f2acd]',
      )}
      style={{
        backgroundImage: isActive ? ACTIVE_TAB_BG : INACTIVE_TAB_BG,
      }}
    >
      <div className="flex w-full items-center justify-center gap-2">
        <PlatformIcon
          src={platform.icon}
          label={platform.label}
          className={platform.iconClassName}
          composedIcon={platform.composedIcon}
          platformId={platform.id}
        />
        <span
          className={cn(
            'whitespace-nowrap text-[18px] font-semibold leading-normal',
            isActive ? 'text-white' : 'text-[#343e56]',
          )}
        >
          {platform.label}
        </span>
      </div>
    </button>
  );
}

export default function OurService() {
  const [activePlatformId, setActivePlatformId] = useState(platforms[0].id);
  const activePlatform =
    platforms.find((platform) => platform.id === activePlatformId) ?? platforms[0];

  return (
    <PrimarySection
      id="services"
      bg="section-2"
      className="overflow-hidden py-20 lg:py-20"
    >
      <div className="pointer-events-none absolute -left-16 bottom-24 hidden blur-[2px] lg:block xl:-left-20">
        <div className="-rotate-[21deg]">
          <Image
            src="/images/our-services/decorations/facebook-left.png"
            alt=""
            aria-hidden
            width={211}
            height={212}
            className="h-[212px] w-[211px] object-contain"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute -right-4 top-24 hidden blur-[2px] lg:block">
        <Image
          src="/images/our-services/decorations/facebook-right.png"
          alt=""
          aria-hidden
          width={218}
          height={212}
          className="h-[212px] w-[218px] object-contain"
        />
      </div>

      <div className="container relative z-10 flex flex-col items-center gap-12">
        <SectionHeading
          badge="our services"
          title={
            <>
              Powerful <span className={GRADIENT_TEXT}>SMM Services</span> for
              Fast Growth
            </>
          }
          subtitle="Explore our comprehensive range of social media marketing services designed to help you grow your presence across all major platforms. From Facebook to TikTok. we've got you covered."
        />

        <div className="flex w-full flex-col gap-9">
          <div className="grid w-full grid-cols-2 gap-[18px] sm:grid-cols-3 xl:grid-cols-6">
            {platforms.map((platform) => (
              <PlatformTab
                key={platform.id}
                platform={platform}
                isActive={activePlatformId === platform.id}
                onSelect={() => setActivePlatformId(platform.id)}
              />
            ))}
          </div>

          <article className="flex flex-col items-center justify-between gap-8 rounded-[12px] border border-[#d181ff] py-7 pl-7 pr-8 lg:flex-row">
            <div className="relative h-[320px] w-full max-w-[571px] shrink-0 overflow-hidden rounded-2xl sm:h-[420px] lg:h-[496px]">
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  backgroundImage:
                    'linear-gradient(180deg, rgb(250, 241, 255) 0%, rgb(235, 201, 255) 122.71%)',
                }}
              />
              <Image
                src="/images/our-services/decorations/hero-bg.png"
                alt=""
                aria-hidden
                fill
                className="object-cover opacity-80 blur-[2px]"
              />
              <Image
                src="/images/our-services/decorations/hero-character.png"
                alt=""
                aria-hidden
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>

            <div className="flex w-full max-w-[745px] flex-col gap-[18px]">
              <div className="flex flex-col gap-[18px]">
                <h3
                  className={cn(
                    'text-[28px] font-semibold leading-none',
                    GRADIENT_TEXT,
                  )}
                >
                  {activePlatform.marketingTitle}
                </h3>
                <p className="text-base font-medium leading-normal text-[#222e48] md:text-[16px]">
                  {activePlatform.description}
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <ul className="flex flex-col gap-2">
                  {activePlatform.services.map((service) => (
                    <li
                      key={service.number}
                      className="flex items-center gap-2"
                    >
                      <ServiceNumberBadge number={service.number} />
                      <p className="text-[16px] leading-normal">
                        <span
                          className={cn('font-medium', GRADIENT_TEXT)}
                        >
                          {service.title}{' '}
                        </span>
                        <span className="font-medium text-[#404a60]">
                          {service.description}
                        </span>
                      </p>
                    </li>
                  ))}
                </ul>

                <PrimaryButton type="button" className="self-start">
                  View {activePlatform.label} Services
                </PrimaryButton>
              </div>
            </div>
          </article>
        </div>
      </div>
    </PrimarySection>
  );
}
