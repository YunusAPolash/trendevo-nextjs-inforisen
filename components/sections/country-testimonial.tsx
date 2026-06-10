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
      data={{
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
        defaultTab: 'customer',
        showTabSwitcher,
        showSectionDecorations,
        className,
      }}
    />
  );
}
