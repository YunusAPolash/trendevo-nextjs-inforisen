'use client';

import { useState } from 'react';
import PrimarySection from '@/components/sections/primary-section';
import ServicePricingGroup from './service-pricing-group';
import { facebookPricingGroups } from './services-pricing-data';

export default function ServicesPricingTablesSection() {
  const [openGroupId, setOpenGroupId] = useState(
    facebookPricingGroups[0].id,
  );

  return (
    <PrimarySection className="pb-16">
      <div className="container">
        <div className="flex flex-col gap-[18px]">
          {facebookPricingGroups.map((group) => (
            <ServicePricingGroup
              key={group.id}
              group={group}
              isOpen={openGroupId === group.id}
              onToggle={() =>
                setOpenGroupId((current) =>
                  current === group.id ? '' : group.id,
                )
              }
            />
          ))}
        </div>
      </div>
    </PrimarySection>
  );
}
