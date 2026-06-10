import Image from 'next/image';

import {
  PlatformMarqueeHexIcon,
  PlatformMarqueeSoundCloudLogo,
} from '@/app/(home)/_components/platform-marquee-hex-icon';

const platforms = [
  {
    name: 'Instagram',
    icon: '/images/platform-marquee/platform-facebook-icon.png',
    iconSize: 20,
  },
  {
    name: 'Instagram',
    icon: '/images/platform-marquee/platform-instagram-icon.png',
    iconSize: 25,
  },
  {
    name: 'X (Twitter)',
    icon: '/images/platform-marquee/platform-twitter-icon.png',
    iconSize: 25,
  },
  {
    name: 'YouTube',
    icon: '/images/platform-marquee/platform-youtube-icon.png',
    iconSize: 25,
  },
  {
    name: 'TikTok',
    icon: '/images/platform-marquee/platform-tiktok-icon.png',
    iconSize: 25,
  },
  {
    name: 'LinkedIn',
    icon: '/images/platform-marquee/platform-linkedin-icon.png',
    iconSize: 25,
  },
  {
    name: 'Telegram',
    icon: '/images/platform-marquee/platform-telegram-icon.png',
    iconSize: 25,
  },
  {
    name: 'Discord',
    icon: '/images/platform-marquee/platform-discord-icon.png',
    iconSize: 25,
  },
  {
    name: 'Spotify',
    icon: '/images/platform-marquee/platform-spotify-icon.png',
    iconSize: 25,
  },
  {
    name: 'Snapchat',
    icon: '/images/platform-marquee/platform-snapchat-icon.png',
    iconSize: 25,
  },
  {
    name: 'SoundCloud',
    icon: '/images/platform-marquee/platform-soundcloud-icon.svg',
    fullFrame: true,
  },
] as const;

type Platform = (typeof platforms)[number];

function PlatformMarqueeItem(platform: Platform) {
  const { name, icon } = platform;
  const iconSize = 'iconSize' in platform ? platform.iconSize : 25;
  const fullFrame = 'fullFrame' in platform ? platform.fullFrame : false;
  return (
    <div className="flex shrink-0 items-center gap-2">
      {fullFrame ? (
        <div className="relative size-9 shrink-0 sm:size-12">
          <PlatformMarqueeHexIcon className="absolute inset-0 h-full w-full" />
          <PlatformMarqueeSoundCloudLogo className="relative z-10 h-full w-full" />
        </div>
      ) : (
        <div className="relative flex size-9 shrink-0 items-center justify-center sm:size-12">
          <PlatformMarqueeHexIcon className="absolute inset-0 h-full w-full" />
          <div
            className="relative z-10 shrink-0 overflow-hidden"
            style={{ width: iconSize, height: iconSize }}
          >
            <Image
              src={icon}
              alt=""
              aria-hidden
              fill
              sizes={`${iconSize}px`}
              quality={100}
              className="object-cover"
            />
          </div>
        </div>
      )}
      <span className="text-lg font-semibold leading-normal whitespace-nowrap text-white dark:text-[#dfe0e4]">
        {name}
      </span>
    </div>
  );
}

export default function PlatformMarqueeSection() {
  const items = [...platforms, ...platforms];

  return (
    <section className="relative w-full overflow-hidden p-4">
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(162.58deg,#cb7ef7_2.88%,#ff9bc1_54.16%,#ff5fbd_111.2%)] dark:hidden"
      />
      <div
        aria-hidden
        className="absolute inset-0 hidden bg-[#1e0628] backdrop-blur-[2px] dark:block"
      />
      <div className="relative flex w-max animate-[marquee_80s_linear_infinite] items-center gap-8 sm:gap-12">
        {items.map((platform, index) => (
          <PlatformMarqueeItem key={`${platform.name}-${index}`} {...platform} />
        ))}
      </div>
    </section>
  );
}
