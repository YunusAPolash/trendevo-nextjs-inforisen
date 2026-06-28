import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import { data } from '@/app/about-us/page-data';
import { renderText } from '@/lib/utils/renderText';
import TrustCard from './trust-card';
import TrustConnectorVertical from './trust-connector-vertical';
import TrustCrosshairCenter from './trust-crosshair-center';

const { weAreDifferent } = data;

type TrustCardData = (typeof weAreDifferent.leftCards)[number];

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
          badge={weAreDifferent.heading.badge}
          title={renderText(weAreDifferent.heading.title!)}
          subtitle={weAreDifferent.heading.subtitle}
          titleClassName={weAreDifferent.heading.titleClassName}
          subtitleClassName={weAreDifferent.heading.subtitleClassName}
        />

        <div className="hidden w-full items-center justify-between gap-6 lg:flex">
          <TrustColumn
            cards={weAreDifferent.leftCards}
            connectorId="trust-connector-left"
          />
          <TrustCrosshairCenter className="shrink-0 self-center" />
          <TrustColumn
            cards={weAreDifferent.rightCards}
            connectorId="trust-connector-right"
          />
        </div>

        <div className="flex w-full flex-col gap-7 lg:hidden">
          {[
            weAreDifferent.leftCards[0],
            weAreDifferent.rightCards[0],
            weAreDifferent.leftCards[1],
            weAreDifferent.rightCards[1],
          ].map((card) => (
            <TrustCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </PrimarySection>
  );
}
