import Image from 'next/image';

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
        <Image
          src={icon}
          alt=""
          aria-hidden
          width={48}
          height={48}
          quality={100}
          sizes="48px"
          className="size-12 shrink-0 object-contain"
        />
      ) : (
        <div className="relative flex size-12 shrink-0 items-center justify-center">
          <Image
            src="/images/platform-marquee/hex-icon.svg"
            alt=""
            aria-hidden
            width={48}
            height={48}
            className="absolute inset-0 size-12"
          />
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
      <span className="text-lg font-semibold whitespace-nowrap text-white">
        {name}
      </span>
    </div>
  );
}

export default function PlatformMarqueeSection() {
  const items = [...platforms, ...platforms];

  return (
    <section
      className="w-full overflow-hidden p-4"
      style={{
        backgroundImage:
          'linear-gradient(162.58deg, #cb7ef7 2.88%, #ff9bc1 54.16%, #ff5fbd 111.2%)',
      }}
    >
      <div className="flex w-max animate-[marquee_80s_linear_infinite] items-center gap-12">
        {items.map((platform, index) => (
          <PlatformMarqueeItem key={`${platform.name}-${index}`} {...platform} />
        ))}
      </div>
    </section>
  );
}
