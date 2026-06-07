import PrimaryCard from '@/components/cards/primary-card';
import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import Image from 'next/image';

const reviews = [
  {
    name: 'Sarah Mitchell',
    role: 'Digital Marketer',
    quote:
      'TrendEvo helped us scale our client campaigns faster than any other panel we tried. Delivery is consistent and support is responsive.',
    avatar: '/images/reviews/hero-avatar-1.png',
    rating: 5,
  },
  {
    name: 'James Carter',
    role: 'Agency Owner',
    quote:
      'The pricing is transparent and the dashboard makes it easy to manage bulk orders across multiple platforms.',
    avatar: '/images/reviews/hero-avatar-2.png',
    rating: 5,
  },
  {
    name: 'Aisha Rahman',
    role: 'Content Creator',
    quote:
      'I love how quickly orders start and how reliable the retention has been for my Instagram growth campaigns.',
    avatar: '/images/reviews/hero-avatar-3.png',
    rating: 5,
  },
  {
    name: 'David Kim',
    role: 'E-commerce Brand',
    quote:
      'Secure payments, fast delivery, and a huge catalog of services. Exactly what we needed for our social proof strategy.',
    avatar: '/images/reviews/hero-avatar-4.png',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <PrimarySection bg="section-6">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12">
        <SectionHeading
          badge="TESTIMONIALS"
          title={
            <>
              What Our <span className="text-gradient">Customers Say</span>
            </>
          }
          subtitle="Real feedback from users growing their social media presence with TrendEvo across Bangladesh and beyond."
        />

        <div className="flex justify-center gap-3">
          <button
            type="button"
            className="bg-brand-gradient rounded-full px-6 py-3 text-sm font-semibold text-white"
          >
            Customer Reviews
          </button>
          <button
            type="button"
            className="rounded-full border border-[#8f2acd]/30 px-6 py-3 text-sm font-semibold text-[#343e56]"
          >
            Video Reviews
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {reviews.map((review) => (
            <PrimaryCard
              key={review.name}
              bg="card-1"
              className="flex flex-col border border-[#ff7fc1]/20 bg-white/90 p-6"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Image
                    key={i}
                    src="/images/icons/hero-star-rating.png"
                    alt=""
                    width={16}
                    height={16}
                    className="size-4"
                  />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-[#404a60]">
                &ldquo;{review.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  width={40}
                  height={40}
                  className="size-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-[#071431]">{review.name}</p>
                  <p className="text-xs text-[#404a60]">{review.role}</p>
                </div>
              </div>
            </PrimaryCard>
          ))}
        </div>
      </div>
    </PrimarySection>
  );
}
