import Image from 'next/image';

const platforms = [
  { name: 'Facebook', icon: '/images/icons/platform-facebook.png' },
  { name: 'Instagram', icon: '/images/icons/platform-instagram.png' },
  { name: 'X', icon: '/images/icons/platform-x.png' },
  { name: 'YouTube', icon: '/images/icons/platform-youtube.png' },
  { name: 'TikTok', icon: '/images/icons/platform-tiktok.png' },
  { name: 'LinkedIn', icon: '/images/icons/platform-linkedin.png' },
];

export default function PlatformMarqueeSection() {
  const items = [...platforms, ...platforms];

  return (
    <section className="overflow-hidden border-y border-[#ff7fc1]/20 bg-white py-4">
      <div className="flex animate-[marquee_30s_linear_infinite] gap-8">
        {items.map((platform, index) => (
          <div
            key={`${platform.name}-${index}`}
            className="flex shrink-0 items-center gap-3 rounded-full border border-[#8f2acd]/20 bg-[#f8f0ff]/50 px-5 py-2"
          >
            <Image
              src={platform.icon}
              alt=""
              width={20}
              height={20}
              className="size-5 object-contain"
            />
            <span className="text-sm font-medium text-[#343e56]">
              {platform.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
