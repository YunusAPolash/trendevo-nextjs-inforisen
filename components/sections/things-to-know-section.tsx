import PrimaryButton from '@/components/buttons/primary-button';
import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import { signUpUrl } from '@/lib/auth-urls';
import { cn } from '@/lib/utils';
import { renderText } from '@/lib/utils/renderText';

export type ThingsToKnowSectionData = {
  badge?: string;
  title: string;
  paragraphs: string[];
  ctaLabel: string;
  ctaHref?: string;
  titleClassName?: string;
  bg?: 'section-9' | 'section-13';
};

type ThingsToKnowSectionProps = {
  data: ThingsToKnowSectionData;
};

export default function ThingsToKnowSection({ data }: ThingsToKnowSectionProps) {
  return (
    <PrimarySection
      bg={data.bg ?? 'section-9'}
      darkBg="section-15-dark"
      className="py-16 sm:py-20"
    >
      <div className="container flex flex-col items-center gap-10 sm:gap-12">
        <SectionHeading
          badge={data.badge}
          title={renderText(data.title)}
          badgeClassName="dark:bg-none dark:bg-clip-border dark:text-white"
          titleClassName={cn(
            'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px] dark:text-[#efedf1]',
            data.titleClassName,
          )}
        />

        <div className="flex max-w-[996px] flex-col gap-4 text-base leading-relaxed text-[#404a60] sm:text-lg dark:text-[#c1c4cc]">
          {data.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>

        <PrimaryButton href={data.ctaHref ?? signUpUrl} showArrow className="w-fit">
          {data.ctaLabel}
        </PrimaryButton>
      </div>
    </PrimarySection>
  );
}
