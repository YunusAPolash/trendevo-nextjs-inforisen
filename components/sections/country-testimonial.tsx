import TestimonialsSection from '@/components/sections/testimonials-section';

import {
  getCountryTestimonialContent,
  type CountryTestimonialSlug,
} from '@/components/countryPanel/country-testimonial-content';

type CountryTestimonialProps = {
  slug: CountryTestimonialSlug;
};

export default function CountryTestimonial({ slug }: CountryTestimonialProps) {
  const {
    sectionBg,
    badge,
    underlineSrc,
    underlineWidth,
    title,
    subtitle,
    titleClassName,
    subtitleClassName,
    customerTabLabel,
    videoTabLabel,
    assets,
    leftTextReviews,
    rightTextReviews,
    featuredReview,
    videoReviews,
    showTabSwitcher = false,
    showSectionDecorations = false,
    className,
  } = getCountryTestimonialContent(slug);

  return (
    <TestimonialsSection
      sectionBg={sectionBg}
      badge={badge}
      underlineSrc={underlineSrc}
      underlineWidth={underlineWidth}
      title={title}
      subtitle={subtitle}
      titleClassName={titleClassName}
      subtitleClassName={subtitleClassName}
      customerTabLabel={customerTabLabel}
      videoTabLabel={videoTabLabel}
      assets={assets}
      leftTextReviews={leftTextReviews}
      rightTextReviews={rightTextReviews}
      featuredReview={featuredReview}
      videoReviews={videoReviews}
      defaultTab="customer"
      showTabSwitcher={showTabSwitcher}
      showSectionDecorations={showSectionDecorations}
      className={className}
    />
  );
}
