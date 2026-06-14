import PrimarySection from '@/components/sections/primary-section';
import { data } from '@/app/services/page-data';
import ServicePanelCard from './service-panel-card';

const { servicesGrid } = data;

export default function ServicesGridSection() {
  return (
    <PrimarySection
      bg="section-6"
      darkBg="section-6-dark"
      className="py-12 sm:py-16 lg:py-20"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:gap-y-10 xl:grid-cols-3 xl:gap-x-6 xl:gap-y-12">
          {servicesGrid.items.map((service) => (
            <ServicePanelCard
              key={service.title}
              backgroundGradient={service.backgroundGradient}
              darkOverlaySrc={service.darkOverlaySrc}
              iconSrc={service.iconSrc}
              iconAlt={service.iconAlt}
              title={service.title}
              description={servicesGrid.serviceDescription}
            />
          ))}
        </div>
      </div>
    </PrimarySection>
  );
}
