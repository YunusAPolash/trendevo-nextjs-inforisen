import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import { data } from '@/app/services/page-data';
import { renderText } from '@/lib/utils/renderText';
import ServicePanelCard from './service-panel-card';

const { servicesGrid } = data;

export default function ServicesGridSection() {
  const { heading, items, id } = servicesGrid;

  return (
    <PrimarySection
      id={id}
      bg="section-6"
      darkBg="section-6-dark"
      className="py-12 sm:py-16 lg:py-20"
    >
      <div className="container flex flex-col items-center gap-8 sm:gap-12">
        <SectionHeading
          title={heading.title ? renderText(heading.title) : undefined}
          subtitle={heading.subtitle}
          titleClassName={heading.titleClassName}
          subtitleClassName={heading.subtitleClassName}
        />

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:gap-y-10 xl:grid-cols-3 xl:gap-x-6 xl:gap-y-12">
          {items.map((service) => (
            <ServicePanelCard
              key={service.title}
              backgroundGradient={service.backgroundGradient}
              darkOverlaySrc={service.darkOverlaySrc}
              iconSrc={service.iconSrc}
              iconAlt={service.iconAlt}
              title={service.title}
              description={service.description}
              buttonLabel={service.buttonLabel}
            />
          ))}
        </div>
      </div>
    </PrimarySection>
  );
}
