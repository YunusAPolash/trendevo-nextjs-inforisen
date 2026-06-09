import PrimarySection from '@/components/sections/primary-section';

export default function HeadingSection() {
  return (
    <PrimarySection className="overflow-hidden pt-28 pb-16">
      <div className="container">
        <h1 className="mx-auto max-w-[961px] text-center text-3xl font-semibold leading-[1.35] tracking-[0.48px] text-[#071431] sm:text-4xl lg:text-[48px]">
          Discover{' '}
          <span className="text-gradient">Rendevo&apos;s</span> Full Social Media
          Services &amp; Pricing Guide
        </h1>
      </div>
    </PrimarySection>
  );
}
