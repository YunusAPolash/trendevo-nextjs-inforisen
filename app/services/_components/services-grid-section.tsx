import PrimarySection from '@/components/sections/primary-section';
import ServicePanelCard from './service-panel-card';

const serviceDescription =
  'Grow your Facebook page fast with likes, followers, and engagement. Reliable, affordable, and easy social media growth solutions.';

const services = [
  {
    backgroundGradient:
      'linear-gradient(28.46deg, rgb(254, 249, 255) 8.11%, rgba(229, 239, 255, 0.46) 56.5%, rgb(128, 179, 255) 125.88%)',
    darkOverlaySrc: '/images/services/overlays/services-facebook-smm-panel-decoration.svg',
    iconSrc: '/images/services/services-facebook-smm-panel-icon.png',
    iconAlt: 'Facebook',
    title: 'Facebook SMM Panel',
  },
  {
    backgroundGradient:
      'linear-gradient(28.46deg, rgb(254, 249, 255) 8.11%, rgba(255, 238, 249, 0) 56.5%, rgb(255, 102, 199) 125.88%)',
    darkOverlaySrc: '/images/services/overlays/services-instagram-smm-panel-decoration.svg',
    iconSrc: '/images/services/services-instagram-smm-panel-icon.png',
    iconAlt: 'Instagram',
    title: 'Instagram SMM Panel',
  },
  {
    backgroundGradient:
      'linear-gradient(28.46deg, rgb(254, 249, 255) 8.11%, rgba(255, 247, 247, 0.46) 56.5%, rgb(255, 75, 73) 125.88%)',
    darkOverlaySrc: '/images/services/overlays/services-youtube-smm-panel-decoration.svg',
    iconSrc: '/images/services/services-youtube-smm-panel-icon.png',
    iconAlt: 'YouTube',
    title: 'Youtube SMM Panel',
  },
  {
    backgroundGradient:
      'linear-gradient(29.28deg, rgb(255, 255, 255) 2.55%, rgba(163, 163, 163, 0.03) 49.69%, rgb(201, 201, 201) 125.92%)',
    darkOverlaySrc: '/images/services/overlays/services-tiktok-smm-panel-decoration.svg',
    iconSrc: '/images/services/services-tiktok-smm-panel-icon.png',
    iconAlt: 'TikTok',
    title: 'TikTok SMM Panel',
  },
  {
    backgroundGradient:
      'linear-gradient(28.46deg, rgb(254, 249, 255) 8.11%, rgba(229, 239, 255, 0.46) 56.5%, rgb(96, 213, 240) 125.88%)',
    darkOverlaySrc: '/images/services/overlays/services-telegram-smm-panel-decoration.svg',
    iconSrc: '/images/services/services-telegram-smm-panel-icon.png',
    iconAlt: 'Telegram',
    title: 'Telegram SMM Panel',
  },
  {
    backgroundGradient:
      'linear-gradient(28.46deg, rgb(254, 249, 255) 8.11%, rgba(238, 238, 238, 0.46) 56.5%, rgb(125, 125, 125) 125.88%)',
    darkOverlaySrc: '/images/services/overlays/services-x-twitter-smm-panel-decoration.svg',
    iconSrc: '/images/services/services-x-twitter-smm-panel-icon.png',
    iconAlt: 'X (Twitter)',
    title: 'X(Twitter) SMM Panel',
  },
] as const;

export default function ServicesGridSection() {
  return (
    <PrimarySection
      bg="section-6"
      darkBg="section-6-dark"
      className="py-12 sm:py-16 lg:py-20"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:gap-y-10 xl:grid-cols-3 xl:gap-x-6 xl:gap-y-12">
          {services.map((service) => (
            <ServicePanelCard
              key={service.title}
              backgroundGradient={service.backgroundGradient}
              darkOverlaySrc={service.darkOverlaySrc}
              iconSrc={service.iconSrc}
              iconAlt={service.iconAlt}
              title={service.title}
              description={serviceDescription}
            />
          ))}
        </div>
      </div>
    </PrimarySection>
  );
}
