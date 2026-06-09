import Image from 'next/image';

import PrimaryCard from '@/components/cards/primary-card';
import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';

const services = [
  {
    title: 'Facebook Page Follower',
    description:
      'Get more real followers for your Facebook page. Our solution also helps boost your audience and reach more people.',
    icon: '/images/service-smm-panel/facebook-page-follower.png',
    iconWidth: 54,
    iconHeight: 54,
  },
  {
    title: 'Facebook Page Like',
    description:
      'Raise the number of likes on your page. This step is ideal for small brands who want more visitors to check it out.',
    icon: '/images/service-smm-panel/facebook-page-like.png',
    iconWidth: 54,
    iconHeight: 54,
  },
  {
    title: 'Facebook Profile Followers',
    description:
      'Attract more followers to your profile with ease. This also allows you to connect with a bigger audience and share your brand.',
    icon: '/images/service-smm-panel/facebook-profile-followers.png',
    iconWidth: 40,
    iconHeight: 40,
  },
  {
    title: 'Facebook Monetization',
    description:
      'Our solution lets you get all the standards to select for monetization and turn your engagement into income.',
    icon: '/images/service-smm-panel/facebook-monetization.png',
    iconWidth: 54,
    iconHeight: 54,
  },
  {
    title: 'Facebook Story Views',
    description:
      'Reach more views on your Facebook stories to keep your audience interested and updated on what you share.',
    icon: '/images/service-smm-panel/facebook-story-views.png',
    iconWidth: 70,
    iconHeight: 54,
  },
  {
    title: 'Facebook Video Views',
    description:
      'Drive more views to your videos to get bigger followers and popularity with this service.',
    icon: '/images/service-smm-panel/facebook-video-views.png',
    iconWidth: 40,
    iconHeight: 40,
  },
  {
    title: 'Facebook Post Like',
    description:
      'Get likes on your posts to show that people enjoy your content and want to see more.',
    icon: '/images/service-smm-panel/facebook-post-like.png',
    iconWidth: 60,
    iconHeight: 54,
  },
  {
    title: 'Facebook Post React',
    description:
      'Find more raw reactions on your posts to make them more engaging and visible to your followers.',
    icon: '/images/service-smm-panel/facebook-post-react.png',
    iconWidth: 54,
    iconHeight: 54,
  },
  {
    title: 'Facebook Group Member',
    description:
      'Increase the number of members in your Facebook groups. Our service also creates an active community around your interests.',
    icon: '/images/service-smm-panel/facebook-group-member.png',
    iconWidth: 54,
    iconHeight: 54,
  },
] as const;

function SocialServiceCard({
  title,
  description,
  icon,
  iconWidth,
  iconHeight,
}: (typeof services)[number]) {
  return (
    <PrimaryCard
      bg="card-7"
      className="relative h-full min-h-[270px] gap-0 overflow-hidden rounded-2xl border border-[#A578FF]/40 border-l-[2.5px] border-l-[#a578ff] p-4 ring-0"
    >
      <div className="relative z-10 flex h-full flex-col gap-[22px]">
        <div className="relative flex size-[77px] shrink-0 items-center justify-center">
          <Image
            src="/images/why-choose-us/hex-icon-secondd.svg"
            alt=""
            aria-hidden
            width={77}
            height={77}
            className="absolute inset-0 size-[77px]"
          />
          <div
            className="relative z-10 shrink-0"
            style={{ width: iconWidth, height: iconHeight }}
          >
            <Image
              src={icon}
              alt=""
              aria-hidden
              width={iconWidth}
              height={iconHeight}
              quality={100}
              className="size-full object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3.5">
          <div className="flex items-center gap-1.5">
            <Image
              src="/images/why-choose-us/title-bullet-second.svg"
              alt=""
              aria-hidden
              width={12}
              height={12}
              className="size-3 shrink-0"
            />
            <h3 className="text-lg font-semibold leading-none text-[#313131] sm:text-[22px]">
              {title}
            </h3>
          </div>
          <p className="text-base leading-normal text-[#313131]">{description}</p>
        </div>
      </div>
    </PrimaryCard>
  );
}

export default function SocialService() {
  return (
    <PrimarySection bg="section-6" className="relative overflow-hidden py-16 sm:py-20">
      <Image
        src="/images/service-smm-panel/decorative-facebook-left.png"
        alt=""
        aria-hidden
        width={183}
        height={190}
        className="pointer-events-none absolute -left-12 bottom-16 hidden h-auto w-[140px] blur-[2px] lg:block xl:w-[183px]"
      />
      <Image
        src="/images/service-smm-panel/decorative-facebook-right.png"
        alt=""
        aria-hidden
        width={199}
        height={207}
        className="pointer-events-none absolute -right-8 top-20 hidden h-auto w-[150px] -rotate-3 blur-[2px] lg:block xl:w-[199px]"
      />

      <div className="container flex flex-col gap-10 sm:gap-12 lg:gap-12">
        <SectionHeading
          badge="Our Services"
          title={
            <>
              Our Available Services For{' '}
              <span className="text-gradient">Facebook SMM Panel</span>
            </>
          }
          subtitle="At TrendEvo, we offer trusted and safe services to grow your Facebook profile, page, or business. Here's what we provide through the best Facebook SMM panel in Bangladesh"
          titleClassName="text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] max-w-[1200px] lg:text-[48px]"
          subtitleClassName="max-w-[996px] text-base sm:text-lg"
        />

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {services.map((service) => (
            <SocialServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </PrimarySection>
  );
}
