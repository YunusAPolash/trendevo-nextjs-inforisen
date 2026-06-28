import PrimaryCard from '@/components/cards/primary-card';
import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import { cn } from '@/lib/utils';
import { renderText } from '@/lib/utils/renderText';

export type WhoShouldBuyItem = {
  title: string;
  description: string;
};

export type WhoShouldBuySectionData = {
  badge?: string;
  title: string;
  subtitle: string;
  items: WhoShouldBuyItem[];
  titleClassName?: string;
  subtitleClassName?: string;
  bg?: 'section-6' | 'section-9';
};

type WhoShouldBuySectionProps = {
  data: WhoShouldBuySectionData;
};

function AudienceCard({ title, description }: WhoShouldBuyItem) {
  return (
    <PrimaryCard
      bg="card-7"
      darkBg="card-10-dark"
      className="relative h-full min-h-[220px] gap-0 overflow-hidden rounded-2xl border border-[#A578FF]/40 border-l-[2.5px] border-l-[#a578ff] p-4 ring-0 dark:border-[0.7px] dark:border-solid dark:border-white dark:border-l-[0.7px] dark:px-4 dark:py-3.5"
    >
      <div className="flex flex-col gap-3.5 dark:gap-2.5">
        <h3 className="text-lg font-semibold leading-snug text-[#313131] sm:text-[22px] dark:text-white">
          {title}
        </h3>
        <p className="text-base leading-normal text-[#313131] dark:text-[#dfe0e4] dark:leading-[1.5]">
          {description}
        </p>
      </div>
    </PrimaryCard>
  );
}

export default function WhoShouldBuySection({ data }: WhoShouldBuySectionProps) {
  return (
    <PrimarySection
      bg={data.bg ?? 'section-6'}
      className="py-16 sm:py-20"
    >
      <div className="container flex flex-col gap-10 sm:gap-12">
        <SectionHeading
          badge={data.badge}
          title={renderText(data.title)}
          subtitle={data.subtitle}
          badgeClassName="dark:bg-none dark:bg-clip-border dark:text-white"
          titleClassName={cn(
            'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px] dark:text-[#efedf1]',
            data.titleClassName,
          )}
          subtitleClassName={cn(
            'max-w-[1064px] text-base sm:text-lg dark:text-[#c1c4cc]',
            data.subtitleClassName,
          )}
        />

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {data.items.map((item) => (
            <AudienceCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </PrimarySection>
  );
}
