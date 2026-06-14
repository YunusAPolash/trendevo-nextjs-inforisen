import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import { data } from '@/app/about-us/page-data';
import { renderText } from '@/lib/utils/renderText';
import TrustCard from './trust-card';
import TrustConnectorVertical from './trust-connector-vertical';
import TrustCrosshairCenter from './trust-crosshair-center';

const { trust } = data;

type TrustCardData = (typeof trust.leftCards)[number];

function TrustColumn({
  cards,
  connectorId,
}: {
  cards: readonly [TrustCardData, TrustCardData];
  connectorId: string;
}) {
  return (
    <div className="flex w-full max-w-2xl flex-1 flex-col items-center gap-4">
      <TrustCard {...cards[0]} className="w-full" />
      <TrustConnectorVertical connectorId={connectorId} />
      <TrustCard {...cards[1]} className="w-full" />
    </div>
  );
}

export default function TrustSection() {
  return (
    <PrimarySection
      bg="section-12"
      darkBg="section-23-dark"
      className="overflow-hidden py-16 lg:py-20"
    >
      <div className="container flex flex-col items-center gap-16">
        <SectionHeading
          badge={trust.heading.badge}
          title={renderText(trust.heading.title)}
          subtitle={trust.heading.subtitle}
          titleClassName={trust.heading.titleClassName}
          subtitleClassName={trust.heading.subtitleClassName}
        />

        <div className="hidden w-full items-center justify-between gap-6 lg:flex">
          <TrustColumn cards={trust.leftCards} connectorId="trust-connector-left" />
          <TrustCrosshairCenter className="shrink-0 self-center" />
          <TrustColumn cards={trust.rightCards} connectorId="trust-connector-right" />
        </div>

        <div className="flex w-full flex-col gap-7 lg:hidden">
          {[
            trust.leftCards[0],
            trust.rightCards[0],
            trust.leftCards[1],
            trust.rightCards[1],
          ].map((card) => (
            <TrustCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </PrimarySection>
  );
}
