import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import TrustCard from './trust-card';
import TrustConnectorVertical from './trust-connector-vertical';
import TrustCrosshairCenter from './trust-crosshair-center';

const leftCards = [
  {
    title: 'Built for Bangladesh',
    description:
      'While many SMM panels operate in Bangladesh, RendEvo stands out with a dedicated focus on the local market. Unlike international platforms that treat Bangladesh as secondary, our services are designed around the needs and expectations of Bangladeshi users.',
    iconSrc: '/images/about/about-trust-built-bangladesh-icon.png',
    iconClassName: 'h-10 w-10 object-cover',
  },
  {
    title: 'Local Payment and Pricing',
    description:
      'RendEvo supports local payments like bKash, Nagad, and Rocket, with pricing in Bangladeshi Taka. Our Bangla-speaking team ensures smooth, hassle-free social media growth aligned with local business needs.',
    iconSrc: '/images/about/about-trust-local-payment-icon.png',
    iconClassName: 'h-10 w-9 object-cover',
  },
] as const;

const rightCards = [
  {
    title: 'Stable and High Quality Services',
    description:
      'RendEvo is more than just a transactional platform—we act as your long-term social media growth partner. Built with local expertise and insights, we are dedicated to supporting Bangladesh’s dynamic digital economy while helping businesses achieve sustainable online growth.',
    iconSrc: '/images/about/about-trust-stable-services-icon.png',
    iconClassName: 'h-10 w-10 object-cover',
  },
  {
    title: 'Local Support & Real Guidance',
    description:
      'We vet suppliers to ensure high-quality engagement and strong retention. Our system delivers orders accurately with minimal issues, while our guidance in English and Bangla helps you make smarter growth decisions.',
    iconSrc: '/images/about/about-trust-local-support-icon.png',
    iconClassName: 'h-10 w-8 object-cover',
  },
] as const;

type TrustCardData = (typeof leftCards)[number] | (typeof rightCards)[number];

function TrustColumn({
  cards,
  connectorId,
}: {
  cards: readonly [TrustCardData, TrustCardData];
  connectorId: string;
}) {
  return (
    <div className="flex w-full max-w-2xl flex-col items-center gap-4">
      <TrustCard {...cards[0]} />
      <TrustConnectorVertical connectorId={connectorId} />
      <TrustCard {...cards[1]} />
    </div>
  );
}

export default function TrustSection() {
  return (
    <PrimarySection bg="section-12" className="overflow-hidden py-16 lg:py-20">
      <div className="container flex flex-col items-center gap-16">
        <SectionHeading
          badge="WHY TRUST US"
          title={
            <>
              Why Businesss Owner <span className="text-gradient">Trust us</span>
            </>
          }
          subtitle="Business owners trust us for delivering measurable growth with transparent, reliable services. Our dedicated support and commitment to excellence give businesses the confidence to succeed."
          titleClassName="text-4xl leading-snug tracking-wide text-[#13203b] lg:text-5xl"
          subtitleClassName="max-w-6xl text-xl font-medium"
        />

        <div className="hidden w-full items-center justify-between gap-6 lg:flex">
          <TrustColumn cards={leftCards} connectorId="trust-connector-left" />
          <TrustCrosshairCenter />
          <TrustColumn cards={rightCards} connectorId="trust-connector-right" />
        </div>

        <div className="flex w-full flex-col gap-7 lg:hidden">
          {[leftCards[0], rightCards[0], leftCards[1], rightCards[1]].map(
            (card) => (
              <TrustCard key={card.title} {...card} />
            ),
          )}
        </div>
      </div>
    </PrimarySection>
  );
}
