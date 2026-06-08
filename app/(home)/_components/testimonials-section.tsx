'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import YoutubeVideoModal from '@/components/ui/youtube-video-modal';
import { cn } from '@/lib/utils';

import 'swiper/css';

const SECTION_GRADIENT =
  'linear-gradient(68.23deg, rgb(241, 219, 255) 3.62%, rgb(255, 255, 255) 28.7%, rgb(255, 242, 251) 53.08%, rgb(255, 255, 255) 73.06%, rgb(250, 232, 255) 98.62%)';

const ACTIVE_TAB_BG =
  'linear-gradient(105.41deg, rgb(209, 129, 255) 2.85%, rgb(255, 99, 190) 90.53%)';

const REVIEW_QUOTE =
  'This platform helped us boost our brand visibility significantly. The results are real and the process is super easy. Five stars!';

/** 2 visible cards: 260px + 18px gap + 260px */
const REVIEW_COLUMN_HEIGHT = 538;
const REVIEW_CARD_HEIGHT = 260;
const REVIEW_CARD_GAP = 18;

/** Replace with your YouTube Shorts / Reels video IDs */
const YOUTUBE_REEL_VIDEO_ID = 'LXb3EKWsInQ';

const videoReviews = [
  {
    id: 'video-1',
    name: 'Seam Rahman',
    role: 'Business Owner',
    thumbnail: '/images/testimonials/video-thumb-1.png',
    avatar: '/images/testimonials/avatar-1.png',
    youtubeVideoId: YOUTUBE_REEL_VIDEO_ID,
  },
  {
    id: 'video-2',
    name: 'Ariyan Khan',
    role: 'Business Owner',
    thumbnail: '/images/testimonials/video-thumb-2.png',
    avatar: '/images/testimonials/avatar-2.png',
    youtubeVideoId: YOUTUBE_REEL_VIDEO_ID,
  },
  {
    id: 'video-3',
    name: 'Lisa',
    role: 'Business Owner',
    thumbnail: '/images/testimonials/video-thumb-3.png',
    avatar: '/images/testimonials/avatar-3.png',
    youtubeVideoId: YOUTUBE_REEL_VIDEO_ID,
  },
  {
    id: 'video-4',
    name: 'Tamanna',
    role: 'Business Owner',
    thumbnail: '/images/testimonials/video-thumb-4.png',
    avatar: '/images/testimonials/avatar-4.png',
    youtubeVideoId: YOUTUBE_REEL_VIDEO_ID,
  },
  {
    id: 'video-5',
    name: 'Rafi Islam',
    role: 'Business Owner',
    thumbnail: '/images/testimonials/video-thumb-1.png',
    avatar: '/images/testimonials/avatar-3.png',
    youtubeVideoId: YOUTUBE_REEL_VIDEO_ID,
  },
  {
    id: 'video-6',
    name: 'Nadia Ahmed',
    role: 'Business Owner',
    thumbnail: '/images/testimonials/video-thumb-2.png',
    avatar: '/images/testimonials/avatar-4.png',
    youtubeVideoId: YOUTUBE_REEL_VIDEO_ID,
  },
] as const;

const leftTextReviews = [
  {
    id: 'left-1',
    name: 'Seam Rahman',
    role: 'Business Owner',
    avatar: '/images/testimonials/avatar-1.png',
    quote: REVIEW_QUOTE,
  },
  {
    id: 'left-2',
    name: 'Seam Rahman',
    role: 'Business Owner',
    avatar: '/images/testimonials/avatar-1.png',
    quote: REVIEW_QUOTE,
  },
  {
    id: 'left-3',
    name: 'Rafi Islam',
    role: 'Business Owner',
    avatar: '/images/testimonials/avatar-3.png',
    quote: REVIEW_QUOTE,
  },
  {
    id: 'left-4',
    name: 'Nadia Ahmed',
    role: 'Business Owner',
    avatar: '/images/testimonials/avatar-4.png',
    quote: REVIEW_QUOTE,
  },
] as const;

const rightTextReviews = [
  {
    id: 'right-1',
    name: 'Seam Rahman',
    role: 'Business Owner',
    avatar: '/images/testimonials/avatar-1.png',
    quote: REVIEW_QUOTE,
  },
  {
    id: 'right-2',
    name: 'Ariyan Khan',
    role: 'Business Owner',
    avatar: '/images/testimonials/avatar-2.png',
    quote: REVIEW_QUOTE,
  },
  {
    id: 'right-3',
    name: 'Lisa',
    role: 'Business Owner',
    avatar: '/images/testimonials/avatar-3.png',
    quote: REVIEW_QUOTE,
  },
  {
    id: 'right-4',
    name: 'Tamanna',
    role: 'Business Owner',
    avatar: '/images/testimonials/avatar-4.png',
    quote: REVIEW_QUOTE,
  },
] as const;

const featuredReview = {
  name: 'Ariyena Islam',
  role: 'Business Owner',
  avatar: '/images/testimonials/avatar-2.png',
  image: '/images/testimonials/featured-review.png',
  quote: REVIEW_QUOTE,
  youtubeVideoId: YOUTUBE_REEL_VIDEO_ID,
} as const;

type ReviewTab = 'customer' | 'video';

function StarRating({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'w-fit rounded bg-white px-1.5 py-1 shadow-[0px_4px_6px_0px_rgba(106,106,106,0.1),0px_10px_15px_0px_rgba(96,96,96,0.1)]',
        className,
      )}
    >
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Image
            key={index}
            src="/images/testimonials/star-icon.svg"
            alt=""
            aria-hidden
            width={16}
            height={16}
            className="size-4 shrink-0"
          />
        ))}
      </div>
    </div>
  );
}

function AuthorInfo({
  name,
  role,
  avatar,
  variant = 'light',
}: {
  name: string;
  role: string;
  avatar: string;
  variant?: 'light' | 'dark';
}) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={avatar}
        alt=""
        width={55}
        height={55}
        className="size-[51px] shrink-0 rounded-full object-cover"
        unoptimized
      />
      <div className="min-w-0">
        <div className="flex items-center gap-1">
          <p
            className={cn(
              'truncate text-sm font-semibold',
              variant === 'light' ? 'text-white' : 'text-[#343e56]',
            )}
          >
            {name}
          </p>
          <Image
            src="/images/testimonials/verify-badge.svg"
            alt=""
            aria-hidden
            width={18}
            height={18}
            className="size-[18px] shrink-0"
          />
        </div>
        <p
          className={cn(
            'text-xs font-medium',
            variant === 'light' ? 'text-[#dfe0e4]' : 'text-[#5b6477]',
          )}
        >
          {role}
        </p>
      </div>
    </div>
  );
}

function ReviewTabSwitcher({
  activeTab,
  onChange,
}: {
  activeTab: ReviewTab;
  onChange: (tab: ReviewTab) => void;
}) {
  return (
    <div className="rounded-xl border-[0.6px] border-[#f0d8ff] bg-[rgba(202,115,255,0.04)] p-2">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => onChange('customer')}
          className={cn(
            'flex cursor-pointer items-center justify-center gap-1 rounded-lg border-[0.3px] border-[#d18dfa] px-6 py-3 transition-all',
            activeTab !== 'customer' && 'bg-white',
          )}
          style={activeTab === 'customer' ? { backgroundImage: ACTIVE_TAB_BG } : undefined}
        >
          <Image
            src="/images/testimonials/customer-review-icon.svg"
            alt=""
            aria-hidden
            width={24}
            height={24}
            className={cn(
              'size-6 shrink-0',
              activeTab === 'customer' && 'brightness-0 invert',
            )}
          />
          <span
            className={cn(
              'text-base font-medium',
              activeTab === 'customer' ? 'text-white' : 'text-[#8f2acd]',
            )}
          >
            Customer Reviews
          </span>
        </button>
        <button
          type="button"
          onClick={() => onChange('video')}
          className={cn(
            'flex cursor-pointer items-center justify-center gap-1 rounded-lg border-[0.3px] border-[#d18dfa] px-6 py-3 transition-all',
            activeTab !== 'video' && 'bg-white',
          )}
          style={activeTab === 'video' ? { backgroundImage: ACTIVE_TAB_BG } : undefined}
        >
          <Image
            src="/images/testimonials/clapperboard-icon.svg"
            alt=""
            aria-hidden
            width={24}
            height={24}
            className={cn(
              'size-6 shrink-0',
              activeTab === 'video' && 'brightness-0 invert',
            )}
          />
          <span
            className={cn(
              'text-base font-medium',
              activeTab === 'video' ? 'text-white' : 'text-[#8f2acd]',
            )}
          >
            Video Reviews
          </span>
        </button>
      </div>
    </div>
  );
}

type TextReview = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
};

function TextReviewCard({ name, role, avatar, quote }: TextReview) {
  return (
    <article
      className="relative w-full shrink-0 overflow-hidden rounded-[30px] border border-[#f7deff] bg-[#f4e3fd]"
      style={{ height: REVIEW_CARD_HEIGHT }}
    >
      <Image
        src="/images/testimonials/quote-open.svg"
        alt=""
        aria-hidden
        width={90}
        height={78}
        className="pointer-events-none absolute left-[19px] top-[6px] h-[78px] w-[90px]"
      />
      <Image
        src="/images/testimonials/quote-close.svg"
        alt=""
        aria-hidden
        width={90}
        height={78}
        className="pointer-events-none absolute bottom-[7px] right-[19px] h-[78px] w-[90px] -scale-y-100 rotate-180"
      />

      <div className="relative flex h-full flex-col justify-center gap-[34px] px-6 py-5 sm:px-8">
        <div className="border-b border-dashed border-[#c1c4cc] pb-4">
          <StarRating className="mb-[19px]" />
          <p className="text-sm font-medium leading-normal text-[#364153]">{quote}</p>
        </div>
        <AuthorInfo name={name} role={role} avatar={avatar} variant="dark" />
      </div>
    </article>
  );
}

function FeaturedReviewCard({ onPlay }: { onPlay: () => void }) {
  return (
    <article
      className="relative mx-auto w-full min-w-0 max-w-[464px] overflow-hidden rounded-[30px] xl:mx-0 xl:max-w-none xl:flex-1"
      style={{ height: REVIEW_COLUMN_HEIGHT }}
    >
      <Image
        src={featuredReview.image}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 464px"
        className="object-cover"
        unoptimized
      />

      <StarRating className="absolute left-6 top-5 z-10" />

      <button
        type="button"
        onClick={onPlay}
        aria-label={`Play ${featuredReview.name}'s video review`}
        className="absolute left-1/2 top-1/2 z-10 flex size-16 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-[32px] bg-white/12 p-4 transition hover:bg-white/20"
      >
        <Image
          src="/images/testimonials/play-icon.svg"
          alt=""
          aria-hidden
          width={33}
          height={33}
          className="size-[33px]"
        />
      </button>

      <div className="absolute bottom-6 left-6 right-6 z-10 max-w-[363px] rounded-2xl border border-white/35 bg-white/30 p-4 backdrop-blur-[40px]">
        <AuthorInfo
          name={featuredReview.name}
          role={featuredReview.role}
          avatar={featuredReview.avatar}
          variant="dark"
        />
        <p className="mt-3 text-xs font-medium leading-normal text-[#40454e]">
          {featuredReview.quote}
        </p>
      </div>
    </article>
  );
}

function ScrollableReviewColumn({
  reviews,
  className,
}: {
  reviews: readonly TextReview[];
  className?: string;
}) {
  return (
    <div
      className={cn('min-h-0 min-w-0', className)}
      style={{ height: REVIEW_COLUMN_HEIGHT }}
    >
      <div
        className={cn(
          'flex h-full min-h-0 flex-col gap-[18px] overflow-y-auto overscroll-y-contain pr-1',
          '[scrollbar-width:thin] [scrollbar-color:rgba(209,129,255,0.45)_transparent]',
          '[&::-webkit-scrollbar]:w-1.5',
          '[&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#d18dfa]/50',
        )}
        style={{ gap: REVIEW_CARD_GAP }}
      >
        {reviews.map((review) => (
          <TextReviewCard key={review.id} {...review} />
        ))}
      </div>
    </div>
  );
}

function CustomerReviewsGrid({ onPlayFeatured }: { onPlayFeatured: () => void }) {
  return (
    <div className="grid w-full max-w-[1440px] grid-cols-1 gap-[18px] xl:grid-cols-3 xl:items-start">
      <ScrollableReviewColumn
        reviews={leftTextReviews}
        className="order-2 xl:order-1 xl:max-w-[464px] xl:flex-1"
      />

      <div className="order-1 xl:order-2">
        <FeaturedReviewCard onPlay={onPlayFeatured} />
      </div>

      <ScrollableReviewColumn
        reviews={rightTextReviews}
        className="order-3 xl:max-w-[464px] xl:flex-1"
      />
    </div>
  );
}

function VideoReviewCard({
  name,
  role,
  thumbnail,
  avatar,
  onPlay,
}: (typeof videoReviews)[number] & { onPlay: () => void }) {
  return (
    <article className="relative mx-auto h-[340px] w-full max-w-[336px] overflow-hidden rounded-2xl p-2.5">
      <Image
        src={thumbnail}
        alt=""
        fill
        sizes="(max-width: 768px) 85vw, 336px"
        className="rounded-2xl object-cover"
        unoptimized
      />

      <div className="absolute bottom-0 left-1/2 h-[79px] w-full -translate-x-1/2 rounded-b-2xl bg-gradient-to-b from-transparent to-black/[0.06] backdrop-blur-[2.6px]" />

      <div className="absolute left-2.5 top-[11px] rounded-md bg-white/10 px-2 py-1.5">
        <div className="flex items-center gap-1">
          <Image
            src="/images/testimonials/star-icon.svg"
            alt=""
            aria-hidden
            width={16}
            height={16}
            className="size-4 shrink-0"
          />
          <span className="text-xs font-bold text-white">5.00</span>
        </div>
      </div>

      <button
        type="button"
        onClick={onPlay}
        aria-label={`Play ${name}'s video review`}
        className="absolute left-1/2 top-1/2 flex size-[42px] -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-[21px] bg-white/12 p-2.5 transition hover:bg-white/20"
      >
        <Image
          src="/images/testimonials/play-icon.svg"
          alt=""
          aria-hidden
          width={22}
          height={22}
          className="size-[22px]"
        />
      </button>

      <div className="absolute bottom-5 left-3 flex items-center gap-2">
        <AuthorInfo name={name} role={role} avatar={avatar} variant="light" />
      </div>
    </article>
  );
}

function TestimonialsPagination({
  swiper,
  activeIndex,
}: {
  swiper: SwiperType | null;
  activeIndex: number;
}) {
  const pageCount = swiper?.snapGrid.length ?? 0;

  if (pageCount <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-[3px]">
      {Array.from({ length: pageCount }).map((_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`Go to slide group ${index + 1}`}
          aria-current={activeIndex === index ? 'true' : undefined}
          onClick={() => swiper?.slideTo(index)}
          className={cn(
            'h-[11px] shrink-0 rounded-[14.5px] border-0 p-0 transition-all duration-300',
            activeIndex === index
              ? 'w-[47px] bg-brand-gradient'
              : 'w-[18px] bg-[rgba(235,235,235,0.88)]',
          )}
        />
      ))}
    </div>
  );
}

function VideoReviewsSlider({ onPlay }: { onPlay: (videoId: string) => void }) {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex w-full max-w-[1440px] flex-col items-center gap-8">
      <Swiper
        className="testimonials-video-swiper w-full"
        spaceBetween={16}
        slidesPerView={1.15}
        slidesPerGroup={1}
        onSwiper={setSwiper}
        onSlideChange={(instance) => setActiveIndex(instance.activeIndex)}
        onBreakpoint={(instance) => setActiveIndex(instance.activeIndex)}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
      >
        {videoReviews.map((review) => (
          <SwiperSlide key={review.id}>
            <VideoReviewCard
              {...review}
              onPlay={() => onPlay(review.youtubeVideoId)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <TestimonialsPagination swiper={swiper} activeIndex={activeIndex} />
    </div>
  );
}

function SectionDecorations() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-full max-w-[1920px] -translate-x-1/2 lg:block"
    >
      {/* Bottom-left — crop transparent PNG padding so the orb sits flush at the edge */}
      <div className="absolute bottom-10 left-[-4.36%] flex h-[220px] w-[209px] items-center justify-center">
        <div className="rotate-[3.48deg]">
          <div className="relative h-[212px] w-[211px] overflow-hidden blur-[3px]">
            <Image
              src="/images/testimonials/play-orb.png"
              alt=""
              aria-hidden
              width={2000}
              height={2000}
              className="absolute left-[-26.42%] top-[-24.18%] h-[148.81%] w-[149.7%] max-w-none"
              unoptimized
            />
          </div>
        </div>
      </div>

      {/* Top-right — anchored to the section edge, not overlapping heading copy */}
      <div className="absolute left-[91.5625%] top-[27px] h-[212px] w-[217.591px] overflow-hidden blur-[3px]">
        <Image
          src="/images/testimonials/play-orb.png"
          alt=""
          aria-hidden
          width={2000}
          height={2000}
          className="absolute left-[-23.27%] top-[-24.25%] h-[146.52%] w-[142.76%] max-w-none -scale-y-100 rotate-[172.66deg]"
          unoptimized
        />
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [activeTab, setActiveTab] = useState<ReviewTab>('video');
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const openVideo = (videoId: string) => setActiveVideoId(videoId);
  const closeVideo = () => setActiveVideoId(null);

  return (
    <PrimarySection className="overflow-hidden py-20" style={{ backgroundImage: SECTION_GRADIENT }}>
      <SectionDecorations />

      <div className="container relative z-10 flex flex-col items-center gap-12">
        <SectionHeading
          badge="TESTIMONIALS"
          underlineSrc="/images/testimonials/underline.svg"
          underlineWidth={169}
          title={
            <>
              What Our <span className="text-gradient">Client Say</span>
            </>
          }
          subtitle="Discover what our clients say about working with us. From increased engagement to faster social media growth, their real experiences highlight the trust, quality, and results our SMM platform consistently delivers."
          titleClassName="max-w-none whitespace-normal text-center text-[32px] tracking-[0.48px] text-[#071431] sm:text-[40px] lg:text-[48px]"
          subtitleClassName="max-w-[996px] text-center text-lg leading-normal text-[#404a60]"
        />

        <ReviewTabSwitcher activeTab={activeTab} onChange={setActiveTab} />

        {activeTab === 'customer' ? (
          <CustomerReviewsGrid
            onPlayFeatured={() => openVideo(featuredReview.youtubeVideoId)}
          />
        ) : (
          <VideoReviewsSlider onPlay={openVideo} />
        )}
      </div>

      <YoutubeVideoModal videoId={activeVideoId} onClose={closeVideo} />
    </PrimarySection>
  );
}
