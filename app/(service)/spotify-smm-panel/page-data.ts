import type { FaqSectionData } from '@/components/sections/faq-section';
import type { ServiceWorkingProcessStep } from '@/components/sections/service-working-process-section';
import type { ServiceAdvantageItem } from '@/components/serviceSmmPanel/service-advantage-content';
import type { ServiceLeadingFeature } from '@/components/serviceSmmPanel/service-leading-content';
import type { SocialServiceItem } from '@/components/serviceSmmPanel/social-service-content';

type SEO = {
  title: string;
  description: string;
  canonical?: string;
};

type SectionHeadingData = {
  badge?: string;
  title: string;
  subtitle: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

type SpotifySmmPanelPageData = {
  seo: SEO;
  schema: {
    name: string;
    description: string;
    areaServed: string;
    url: string;
  };
  hero: {
    title: string;
    description: string;
    descriptionSecondary: string;
    buttonLabel: string;
    image: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  };
  socialServices: SectionHeadingData & {
    services: SocialServiceItem[];
    decorativeLeft: {
      src: string;
      width: number;
      height: number;
      className: string;
    };
    decorativeRight: {
      src: string;
      width: number;
      height: number;
      className: string;
    };
    ctaLabel: string;
    ctaHref: string;
  };
  advantages: SectionHeadingData & {
    leftAdvantages: ServiceAdvantageItem[];
    rightAdvantages: ServiceAdvantageItem[];
  };
  workingProcess: SectionHeadingData & {
    steps: ServiceWorkingProcessStep[];
    ctaLabel: string;
  };
  leading: SectionHeadingData & {
    topRowFeatures: ServiceLeadingFeature[];
    bottomRowFeatures: ServiceLeadingFeature[];
  };
  faq: FaqSectionData;
  cta: {
    title: string;
    description: string;
    primaryButtonLabel: string;
    secondaryButtonLabel: string;
    secondaryButtonHref: string;
    imageSrc: string;
    imageAlt: string;
    className?: string;
  };
};

const spotifyFaqItems = [
  {
    question: 'What is a Spotify SMM Panel?',
    answer:
      'A Spotify SMM Panel is a platform where artists, labels, agencies, playlist owners, and resellers can order Spotify promotion services. These services may include Spotify plays, artist followers, monthly listeners, saves, playlist followers, playlist plays, album plays, and podcast plays.',
  },
  {
    question: 'How does a Spotify SMM Panel work?',
    answer:
      'You select the Spotify service you need, add your Spotify track, artist profile, album, playlist, or podcast link, choose the order amount, complete payment, and submit the order. Your TrendEvo dashboard lets you check order status after placing it.',
  },
  {
    question: 'Which Spotify services can I buy from TrendEvo?',
    answer:
      'You can buy Spotify plays, artist followers, monthly listeners, track saves, playlist followers, playlist plays, album plays, podcast plays, and music promotion packages from TrendEvo.',
  },
  {
    question: 'Is it safe to use a Spotify SMM Panel?',
    answer:
      'Safety depends on choosing a platform that gives clear service information, secure payment options, and proper order handling. TrendEvo is built to make Spotify promotion simple, controlled, and easier for Bangladeshi users.',
  },
  {
    question: 'Do I need to give my Spotify password?',
    answer:
      'No. TrendEvo does not need your Spotify password. You only need to provide the public Spotify link for the track, artist profile, album, playlist, or podcast content you want to promote.',
  },
  {
    question: 'Can I promote one Spotify song only?',
    answer:
      'Yes. You can promote a single track without ordering services for your full artist profile. Many artists use this for new singles, music videos released as audio tracks, EP launches, or campaign testing.',
  },
  {
    question: 'How long does a Spotify SMM order take to start?',
    answer:
      'Start time depends on the service type, order size, and current order load. Some Spotify services may begin faster, while others may take more time. You can review service details before placing your order.',
  },
  {
    question: 'Can I track the progress of my Spotify order?',
    answer:
      'Yes. After placing an order, you can check the progress inside your TrendEvo dashboard. This is useful for artists, agencies, and resellers managing multiple Spotify campaigns.',
  },
  {
    question: 'What payment methods do you accept in Bangladesh?',
    answer:
      'TrendEvo supports Bangladeshi payment methods such as bKash, Nagad, and Rocket. This helps artists, music promoters, agencies, playlist owners, and resellers order Spotify services more easily.',
  },
  {
    question: 'Can agencies and resellers use your Spotify SMM Panel?',
    answer:
      'Yes. Agencies, freelancers, music promoters, and resellers can use TrendEvo to manage Spotify promotion for multiple artists or clients. The dashboard helps keep orders organized and easier to track.',
  },
];

export const data: SpotifySmmPanelPageData = {
  seo: {
    title: 'Best Spotify SMM Panel in Bangladesh | TrendEvo',
    description:
      'Promote your music with TrendEvo’s Spotify SMM Panel in Bangladesh. Buy Spotify plays, followers, monthly listeners, saves, and playlist growth using bKash, Nagad, and Rocket.',
    canonical: '/spotify-smm-panel',
  },

  schema: {
    name: 'Spotify SMM Panel',
    description:
      'Promote your music with TrendEvo’s Spotify SMM Panel in Bangladesh. Buy Spotify plays, followers, monthly listeners, saves, and playlist growth using bKash, Nagad, and Rocket.',
    areaServed: 'Bangladesh',
    url: 'https://trendevo.com/spotify-smm-panel',
  },

  hero: {
    title: 'Grow Faster with a Trusted gt<Spotify SMM Panel> in Bangladesh',
    description:
      'TrendEvo makes Spotify promotion easier for Bangladeshi artists, music labels, producers, playlist curators, agencies, and resellers. You can grow plays, followers, monthly listeners, saves, playlist activity, and music visibility from one simple Spotify SMM Panel dashboard.',
    descriptionSecondary:
      'Push your tracks further with flexible pricing, bKash, Nagad, Rocket payment support, and Spotify-focused services made for stronger listener reach, better artist profile trust, and smoother release promotion.',
    buttonLabel: 'Get Started Now',
    image: {
      src: '/images/service-smm-panel/spotify-smm-panel/boost-spotify-reach-and-engagement-with-trendevo.webp',
      alt: 'Grow faster with TrendEvo Spotify SMM Panel in Bangladesh',
      width: 687,
      height: 648,
    },
  },

  socialServices: {
    title: 'Spotify SMM Panel Services gt<Built for Bangladesh>',
    subtitle:
      'lnk</about-us|TrendEvo> is designed for Bangladeshi artists, bands, producers, music marketers, playlist owners, agencies, and resellers who want a smoother way to promote Spotify content. Whether you are releasing your first single, pushing an EP, growing a playlist, or managing music campaigns for clients, our Spotify lnk</|SMM Panel BD> helps you handle promotion with better speed, control, and affordability.',
    titleClassName:
      'text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] max-w-[1200px] lg:text-[48px]',
    subtitleClassName: 'max-w-[996px] text-base sm:text-lg',
    decorativeLeft: {
      src: '/images/service-smm-panel/spotify-smm-panel/spotify-effectsvg.svg',
      width: 251,
      height: 251,
      className:
        'pointer-events-none absolute -left-12 bottom-16 hidden h-auto w-[150px] lg:block xl:w-[251px]',
    },
    decorativeRight: {
      src: '/images/service-smm-panel/spotify-smm-panel/spotify-effectsvg.svg',
      width: 251,
      height: 251,
      className:
        'pointer-events-none absolute -right-8 top-20 hidden h-auto w-[160px] -scale-x-100 lg:block xl:w-[251px]',
    },
    services: [
      {
        title: 'Spotify Plays',
        description:
          'Give your tracks more listening activity with lnk</buy-spotify-plays|Spotify plays>. This service is useful for singles, albums, EPs, remixes, cover songs, lo-fi tracks, nasheeds, podcasts, and independent releases that need stronger early traction.',
        icon: '/images/our-services/platforms/our-services-spotify-plays-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Spotify Artist Followers',
        description:
          'Build long-term audience value for your artist profile. More lnk</buy-spotify-followers|Spotify followers> can help your profile look more established when new listeners, playlist curators, music fans, or potential collaborators check your work.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-follower-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Spotify Monthly Listeners',
        description:
          'Improve your artist profile activity with lnk</buy-spotify-monthly-listeners|Spotify monthly listeners>. This helps artists show that their music is reaching active listeners during release campaigns, promotions, and profile-building stages.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-profile-followers-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
      },
      {
        title: 'Spotify Track Saves',
        description:
          'Support your songs with saves from listeners who want to keep the track in their library. Saves are useful for music that people may replay later, including emotional songs, study music, worship content, rap tracks, and brand jingles.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Spotify Playlist Followers',
        description:
          'Grow playlists with more followers and better visual trust. This service is helpful for playlist curators, DJs, labels, music agencies, and creators managing genre-based or mood-based playlists.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-group-member-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Spotify Playlist Plays',
        description:
          'Increase listening activity for songs placed inside playlists. Playlist plays can support release campaigns, help selected tracks look more active, and make promotional playlists feel more useful to listeners.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-story-views-icon.png',
        iconWidth: 70,
        iconHeight: 54,
      },
      {
        title: 'Spotify Album Plays',
        description:
          'Promote complete albums, EPs, and multi-track projects with balanced play support. This is useful when you want attention across the full release instead of only one lead single.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-monetization-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Spotify Podcast Plays',
        description:
          'Support podcasts, interviews, audio shows, Islamic lectures, storytelling episodes, or educational audio content with more plays. This helps audio creators improve content activity on Spotify.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 40,
        iconHeight: 40,
      },
      {
        title: 'Spotify Music Promotion Packages',
        description:
          'Combine plays, followers, monthly listeners, saves, playlist activity, and artist profile growth in one campaign. These packages are useful for agencies, labels, resellers, and artists who need a more complete Spotify promotion plan.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-follower-and-page-growth-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
    ctaLabel: 'See All Services',
    ctaHref: '/services',
  },

  advantages: {
    title: 'Why Bangladeshi Artists Use a gt<Spotify SMM Panel> for Faster Growth',
    subtitle:
      'Spotify growth is not only about uploading a song. Artists need listeners, repeat plays, saved tracks, profile activity, and release momentum. A Spotify SMM Panel helps Bangladeshi musicians, labels, agencies, and lnk</api|resellers> support those signals without managing every promotion step manually.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    leftAdvantages: [
      {
        step: '01',
        title: 'Stronger Release Momentum',
        description:
          'A new song needs attention during the first few days. Spotify plays, saves, listeners, and profile activity can help a release look more active when fans, curators, and new visitors discover it.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-follower-and-page-growth-icon.png',
      },
      {
        step: '02',
        title: 'Better Artist Profile Trust',
        description:
          'Listeners often check an artist profile before playing more songs. A profile with followers, monthly listeners, and active tracks creates a better first impression for new fans, collaborators, and music promoters.',
        icon: '/images/service-smm-panel/facebook-smm-panel-social-proof-and-credibility-icon.png',
      },
      {
        step: '03',
        title: 'More Support for Playlist Growth',
        description:
          'Playlists are important for music discovery. TrendEvo helps playlist owners and music promoters grow playlist followers and plays so their collections look more active and useful.',
        icon: '/images/service-smm-panel/facebook-smm-panel-targeted-audience-expansion-icon.png',
      },
    ],
    rightAdvantages: [
      {
        step: '04',
        title: 'Useful for Independent Musicians',
        description:
          'Many Bangladeshi artists release songs without big label support. A Spotify SMM Panel gives independent musicians a budget-friendly way to promote tracks, test audience interest, and build profile activity.',
        icon: '/images/service-smm-panel/facebook-smm-panel-community-growth-in-private-groups-icon.png',
      },
      {
        step: '05',
        title: 'Saves Time for Music Marketers',
        description:
          'Managing Spotify campaigns for multiple artists can take time. TrendEvo helps agencies, freelancers, and resellers place orders, monitor campaigns, and manage different Spotify services from one dashboard.',
        icon: '/images/service-smm-panel/facebook-smm-panel-time-saving-growth-icon.png',
      },
      {
        step: '06',
        title: 'Local Payments for Easy Promotion',
        description:
          'Bangladeshi users can promote Spotify music without depending on foreign cards or complex payment systems. TrendEvo supports bKash, Nagad, Rocket, and other local payment methods for easier ordering.',
        icon: '/images/service-smm-panel/facebook-smm-panel-affordable-pricing-icon.png',
      },
    ],
  },

  workingProcess: {
    title: 'How TrendEvo gt<Spotify SMM Panel> Works',
    subtitle:
      'TrendEvo keeps Spotify promotion simple for Bangladeshi users. You choose the right music service, submit your Spotify link, complete payment with a local method, and manage the order from your dashboard.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    steps: [
      {
        number: '01',
        title: 'Create Your TrendEvo Account',
        description:
          'Open a TrendEvo account and access your Spotify SMM Panel dashboard. The dashboard is built for artists, music marketers, agencies, labels, playlist owners, and resellers who need quick campaign control.',
      },
      {
        number: '02',
        title: 'Choose the Right Spotify Service',
        description:
          'Pick the service that matches your music goal. You can order Spotify plays, artist followers, monthly listeners, saves, playlist followers, playlist plays, album plays, podcast plays, or promotion packages.',
      },
      {
        number: '03',
        title: 'Add Your Link & Confirm Order',
        description:
          'Paste your Spotify track, artist profile, album, playlist, podcast episode, or music link. Select the quantity, check the details carefully, and confirm the order before completing payment.',
      },
      {
        number: '04',
        title: 'Pay Securely & Track Growth',
        description:
          'Use bKash, Nagad, Rocket, or another supported payment option to complete your order. Once the order is placed, you can follow the progress from your TrendEvo dashboard.',
      },
    ],
    ctaLabel: 'Get Started Free',
  },

  leading: {
    title: 'Why Choose TrendEvo for gt<Spotify SMM Panel Services> in Bangladesh',
    subtitle:
      'lnk</about-us|TrendEvo> helps Bangladeshi artists, producers, labels, playlist owners, agencies, and resellers promote Spotify content with better control, simple payment, and reliable order management. Our platform is made for users who want affordable Spotify growth without dealing with confusing tools or international payment barriers.',
    titleClassName:
      'whitespace-normal max-w-[1200px] text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Release-Friendly Processing',
        description:
          'Music campaigns often depend on timing. TrendEvo helps you support new singles, albums, playlists, podcasts, and artist profiles when your promotion matters most.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-and-reliable-delivery-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Local Payment Support',
        description:
          'Pay with bKash, Nagad, Rocket, and other supported methods. This makes Spotify promotion easier for Bangladeshi artists, music teams, freelancers, and agencies.',
        icon: '/images/service-smm-panel/facebook-smm-panel-affordable-pricing-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
    bottomRowFeatures: [
      {
        title: 'Budget-Friendly Music Growth',
        description:
          'TrendEvo offers affordable Spotify SMM Panel services for independent artists, small labels, playlist curators, music promoters, and resellers who need flexible campaign options.',
        icon: '/images/service-smm-panel/facebook-smm-panel-affordable-pricing-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Simple Dashboard Management',
        description:
          'Manage Spotify plays, artist followers, monthly listeners, saves, playlist followers, playlist plays, album plays, podcast plays, and promotion orders from one clean dashboard.',
        icon: '/images/service-smm-panel/facebook-smm-panel-time-saving-growth-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Useful for Artists & Agencies',
        description:
          'TrendEvo works for solo artists, music labels, playlist managers, freelancers, and resellers. Whether you promote your own songs or manage Spotify campaigns for clients, the platform helps you work faster and more professionally.',
        icon: '/images/service-smm-panel/facebook-smm-panel-customer-focused-service-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
  },

  faq: {
    label: 'FAQ',
    title: 'Frequently Asked gt<Questions About Spotify SMM Panel>',
    subtitle:
      'Find simple answers to common questions about Spotify promotion, available services, payment options, order tracking, and account safety on TrendEvo.',
    bg: 'section-7',
    items: spotifyFaqItems,
    ctaTitle: 'Still have questions?',
    ctaSubtitle:
      "Can't find the answer you're looking for? Please get in touch with our team.",
    ctaButtonLabel: 'Get in Touch',
    ctaButtonHref: '/contact-us',
  },

  cta: {
    title: 'Ready to gt<Grow Your Social Media> in Bangladesh?',
    description:
      'Join over 56486 users who are already using TrendEvo to grow faster on Spotify, Facebook, Instagram, YouTube, TikTok, and more. Getting started is free and takes less than 40 seconds.',
    primaryButtonLabel: 'Create Free Account',
    secondaryButtonLabel: 'See All Services',
    secondaryButtonHref: '/services',
    imageSrc: '/images/cta/cta-character-illustration.webp',
    imageAlt: 'Start growing your social media with TrendEvo',
    className: 'mt-16',
  },
};
