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
    icon: '/images/our-services/platforms/web.png',
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

function HexBgIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="37"
      viewBox="0 0 33 37"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M13.5039 0.890625C15.3294 -0.163308 17.5788 -0.163308 19.4043 0.890625L29.8584 6.92676C31.6838 7.98065 32.8085 9.92836 32.8086 12.0361V24.1084C32.8085 26.2162 31.6838 28.1639 29.8584 29.2178L19.4043 35.2539C17.5788 36.3078 15.3294 36.3078 13.5039 35.2539L3.0498 29.2178C1.22441 28.1639 0.0996928 26.2162 0.0996094 24.1084V12.0361C0.0996928 9.92836 1.22441 7.98065 3.0498 6.92676L13.5039 0.890625Z"
        fill="white"
        stroke="#C081E6"
        strokeWidth="1"
      />
    </svg>
  );
}

function ServiceTopRightDecoration() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-full max-w-[1920px] -translate-x-1/2 lg:block"
    >
      {/* Figma 1524:19712 — top-right at top 107px in 1920px frame */}
      <div className="absolute left-[91.5625%] top-[107px] h-[212px] w-[217.591px] overflow-hidden blur-[2px]">
        <Image
          src="/images/our-services/decorations/facebook-right.png"
          alt=""
          aria-hidden
          width={2000}
          height={2000}
          className="absolute left-[-23.27%] top-[-24.25%] h-[146.52%] w-[142.76%] max-w-none"
          unoptimized
        />
      </div>
    </div>
  );
}

function ServiceBottomLeftDecoration() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute bottom-[88px] left-[calc((100%-100vw)/2-84px)] z-0 hidden h-[274px] w-[273px] items-center justify-center lg:flex"
    >
      {/* Figma 1524:19711 — anchored to service card, left -83.66px at 1920px */}
      <div className="-rotate-[21deg]">
        <div className="relative h-[212px] w-[211px] overflow-hidden blur-[2px]">
          <Image
            src="/images/our-services/decorations/facebook-left.png"
            alt=""
            aria-hidden
            width={2000}
            height={2000}
            className="absolute left-[-26.42%] top-[-24.18%] h-[148.81%] w-[149.7%] max-w-none"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}

function PlatformIcon({
  src,
  label,
  className,
}: {
  src: string;
  label: string;
  className?: string;
}) {
  const isSvg = src.endsWith('.svg');

  return (
    <div className="relative flex size-8 shrink-0 items-center justify-center p-1.5 sm:size-[38px] sm:p-[9px]">
      <HexBgIcon className="absolute left-1/2 top-1/2 size-8 -translate-x-1/2 -translate-y-1/2 sm:size-[38px]" />
      <Image
        src={src}
        alt=""
        aria-hidden
        width={20}
        height={20}
        className={cn(
          'relative z-10 size-4 object-contain sm:size-5',
          className,
        )}
        unoptimized={isSvg}
      />
      <span className="sr-only">{label}</span>
    </div>
  );
}

function ServiceNumberBadge({ number }: { number: string }) {
  return (
    <div className="relative flex size-9 shrink-0 items-center justify-center sm:size-[44px]">
      <Image
        src="/images/our-services/ui/hex-number.svg"
        alt=""
        aria-hidden
        width={38}
        height={38}
        className="absolute left-1/2 top-1/2 size-8 -translate-x-1/2 -translate-y-1/2 sm:size-[38px]"
      />
      <span className="relative z-10 text-sm font-semibold leading-normal text-white sm:text-base">
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
      aria-label={platform.label}
      className={cn(
        'flex w-full items-center justify-center rounded-[8px] px-2 py-2 transition-all sm:px-3 sm:py-2.5 md:px-[16px] md:py-[10px]',
        !isActive && 'border-[0.5px] border-solid border-[#8f2acd]',
      )}
      style={{
        backgroundImage: isActive ? ACTIVE_TAB_BG : INACTIVE_TAB_BG,
      }}
    >
      <div className="flex w-full items-center justify-center gap-0 sm:gap-2">
        <PlatformIcon
          src={platform.icon}
          label={platform.label}
          className={platform.iconClassName}
        />
        <span
          className={cn(
            'hidden text-center text-xs font-semibold leading-tight sm:inline sm:whitespace-nowrap sm:text-sm md:text-[18px]',
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
      className="overflow-hidden py-12 sm:py-16 lg:py-20"
    >
      <ServiceTopRightDecoration />

      <div className="container relative z-10 flex flex-col items-center gap-8 sm:gap-10 lg:gap-12">
        <SectionHeading
          badge="our services"
          title={
            <>
              Powerful <span className={GRADIENT_TEXT}>SMM Services</span> for
              Fast Growth
            </>
          }
          subtitle="Explore our comprehensive range of social media marketing services designed to help you grow your presence across all major platforms. From Facebook to TikTok. we've got you covered."
          titleClassName="text-2xl sm:text-[28px] lg:text-[36px]"
          subtitleClassName="text-sm sm:text-base md:text-lg"
        />

        <div className="flex w-full flex-col gap-6 sm:gap-8 lg:gap-9">
          <div className="grid w-full grid-cols-3 gap-2 sm:gap-3 md:gap-[18px] xl:grid-cols-6">
            {platforms.map((platform) => (
              <PlatformTab
                key={platform.id}
                platform={platform}
                isActive={activePlatformId === platform.id}
                onSelect={() => setActivePlatformId(platform.id)}
              />
            ))}
          </div>

          <div className="relative">
            <ServiceBottomLeftDecoration />

            <article className="relative z-10 flex flex-col items-center justify-between gap-6 rounded-[12px] border border-[#d181ff] p-4 sm:gap-8 sm:p-6 lg:flex-row lg:py-7 lg:pl-7 lg:pr-8">
            <div className="relative h-[220px] w-full max-w-[571px] shrink-0 overflow-hidden rounded-2xl sm:h-[320px] md:h-[420px] lg:h-[496px]">
              <Image
                src="/images/our-services/decorations/hero-illustration.png"
                alt=""
                aria-hidden
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 571px"
              />
            </div>

            <div className="flex w-full max-w-[745px] flex-col gap-4 sm:gap-[18px]">
              <div className="flex flex-col gap-3 sm:gap-[18px]">
                <h3
                  className={cn(
                    'text-xl font-semibold leading-tight sm:text-2xl md:text-[28px] md:leading-none',
                    GRADIENT_TEXT,
                  )}
                >
                  {activePlatform.marketingTitle}
                </h3>
                <p className="text-sm font-medium leading-normal text-[#222e48] sm:text-base">
                  {activePlatform.description}
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:gap-6">
                <ul className="flex flex-col gap-2">
                  {activePlatform.services.map((service) => (
                    <li
                      key={service.number}
                      className="flex items-start gap-2 sm:items-center"
                    >
                      <ServiceNumberBadge number={service.number} />
                      <p className="text-sm leading-normal sm:text-base">
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

                <PrimaryButton
                  type="button"
                  className="h-10 self-start px-4 text-sm sm:h-11 sm:px-5 sm:text-base md:h-[50px] md:px-[18px]"
                >
                  View {activePlatform.label} Services
                </PrimaryButton>
              </div>
            </div>
            </article>
          </div>
        </div>
      </div>
    </PrimarySection>
  );
}
