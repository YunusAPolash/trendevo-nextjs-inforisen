import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import PrimarySection from '@/components/sections/primary-section';
import { cn } from '@/lib/utils';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about' },
  { label: 'Our Services', href: '/#services' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Read Our Blog', href: '/#blog' },
  { label: 'Pricing', href: '/#pricing' },
];

const smmPanelLinks = [
  { label: 'Instagram SMM Panel', href: '/#services' },
  { label: 'Facebook SMM Panel', href: '/#services' },
  { label: 'YouTube SMM Panel', href: '/#services' },
  { label: 'X-Twitter SMM Panel', href: '/#services' },
  { label: 'Telegram SMM Panel', href: '/#services' },
  { label: 'TikTok SMM Panel', href: '/#services' },
  { label: 'Spotify SMM Panel', href: '/#services' },
  { label: 'Soundcloud SMM Panel', href: '/#services' },
  { label: 'Twitch SMM Panel', href: '/#services' },
  { label: 'Snapchat SMM Panel', href: '/#services' },
];

const companyLinks = [
  { label: 'Terms Of Services', href: '/terms-of-service' },
  { label: 'Privacy Policy', href: '/#privacy' },
  { label: 'Refund Policy', href: '/#refund' },
  { label: 'FAQs', href: '/#faq' },
  { label: 'Contact Us', href: '/#contact' },
];

const serviceLinks = [
  'Facebook Services',
  'Youtube Services',
  'Instagram Services',
  'X-Twitter Services',
  'Telegram Services',
  'TikTok Services',
  'Spotify Services',
  'Soundcloud Services',
  'Twitch Services',
  'Snapchat Services',
];

const socialLinks = [
  { label: 'Facebook', href: '#', icon: 'facebook' },
  { label: 'Instagram', href: '#', icon: 'instagram' },
  { label: 'X', href: '#', icon: 'x' },
  { label: 'LinkedIn', href: '#', icon: 'linkedin' },
  { label: 'YouTube', href: '#', icon: 'youtube' },
] as const;

const contactIconGradient =
  'linear-gradient(48.65deg, rgb(206, 206, 206) 10.387%, rgb(255, 255, 255) 58.1%, rgb(253, 161, 255) 126.5%)';

function FooterColumn({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('flex flex-col gap-[18px]', className)}>
      <h3 className="text-xl font-semibold tracking-[0.2px] text-[#13203b]">{title}</h3>
      {children}
    </div>
  );
}

function FooterLinkList({ links }: { links: { label: string; href: string }[] }) {
  return (
    <ul className="flex flex-col gap-4">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className="text-sm font-medium text-[#222e48] transition-colors hover:text-[#13203b]"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="relative flex size-10 shrink-0 items-center justify-center"
    >
      <Image
        src="/images/icons/footer-social-hex-bg.svg"
        alt=""
        fill
        className="object-contain"
        aria-hidden
      />
      <span className="relative z-10 text-[#8f2acd]">{children}</span>
    </Link>
  );
}

function ContactRow({
  iconSrc,
  iconAlt,
  children,
}: {
  iconSrc: string;
  iconAlt: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-2.5">
      <div
        className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/75"
        style={{ backgroundImage: contactIconGradient }}
      >
        <Image src={iconSrc} alt={iconAlt} width={16} height={16} />
      </div>
      <div className="text-sm font-medium leading-relaxed text-[#13203b]">{children}</div>
    </div>
  );
}

function SocialIcon({ icon }: { icon: (typeof socialLinks)[number]['icon'] }) {
  const className = 'size-[18px] fill-current';

  switch (icon) {
    case 'facebook':
      return (
        <svg viewBox="0 0 24 24" aria-hidden className={className}>
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" aria-hidden className={className}>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      );
    case 'x':
      return (
        <svg viewBox="0 0 24 24" aria-hidden className={className}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" aria-hidden className={className}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case 'youtube':
      return (
        <svg viewBox="0 0 24 24" aria-hidden className={className}>
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
  }
}

export default function FooterSection() {
  return (
    <PrimarySection
      bg="section-9"
      className="overflow-hidden rounded-t-3xl py-12 lg:py-[60px] lg:px-4"
    >
      <footer className="container flex flex-col gap-10">
        <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:justify-between">
          <div className="flex max-w-[339px] flex-col gap-6">
            <div className="flex flex-col gap-[18px]">
              <Link href="/" className="relative inline-block h-12 w-[152px]">
                <Image
                  src="/images/icons/trendevo-logo.png"
                  alt="TrendEvo"
                  fill
                  className="object-contain object-left"
                />
              </Link>
              <p className="text-sm font-medium leading-relaxed text-[#313131]">
                Trend Evo Panel is a trusted{' '}
                <span className="text-gradient">SMM panel in Bangladesh</span>, offering fast,
                secure, and affordable social media growth services for all major platforms. With
                support for bKash and Nagad, plus a fully automated, user-friendly system, we make
                growing your online presence simple and effective.
              </p>
            </div>

            <div className="flex flex-col gap-3.5">
              <p className="text-xl font-semibold tracking-[0.2px] text-[#13203b]">Follow Us</p>
              <div className="flex flex-wrap gap-1.5">
                {socialLinks.map((social) => (
                  <SocialLink key={social.label} href={social.href} label={social.label}>
                    <SocialIcon icon={social.icon} />
                  </SocialLink>
                ))}
              </div>
            </div>
          </div>

          <div className="grid flex-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-8">
            <FooterColumn title="Quick Links">
              <FooterLinkList links={quickLinks} />
            </FooterColumn>

            <FooterColumn title="Smm Panel">
              <FooterLinkList links={smmPanelLinks} />
            </FooterColumn>

            <FooterColumn title="Company">
              <FooterLinkList links={companyLinks} />
            </FooterColumn>

            <FooterColumn title="Our Services">
              <ul className="flex flex-col gap-4">
                {serviceLinks.map((label) => (
                  <li key={label}>
                    <Link
                      href="/#services"
                      className="flex items-center justify-between gap-2 text-sm font-medium text-[#222e48] transition-colors hover:text-[#13203b]"
                    >
                      <span>{label}</span>
                      <ChevronDown className="size-[22px] shrink-0 text-[#8f2acd]" />
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            <FooterColumn title="Contact Information" className="sm:col-span-2 lg:col-span-3 xl:col-span-1">
              <div className="flex flex-col gap-[15px]">
                <ContactRow iconSrc="/images/icons/footer-email-icon.svg" iconAlt="Email">
                  <a href="mailto:info@trendevo.com" className="hover:underline">
                    info@trendevo.com
                  </a>
                </ContactRow>
                <ContactRow iconSrc="/images/icons/footer-phone-icon.svg" iconAlt="Phone">
                  <a href="tel:+880188888877777" className="hover:underline">
                    +880188888877777
                  </a>
                </ContactRow>
                <ContactRow
                  iconSrc="/images/icons/footer-location-icon.svg"
                  iconAlt="Location"
                >
                  <p>
                    Dhaka Bangladesh, Dhanmondi..
                    <br />
                    Road 7A
                  </p>
                </ContactRow>
              </div>
            </FooterColumn>
          </div>
        </div>

        <div className="relative flex min-h-[83px] items-center justify-center overflow-hidden rounded-[18px] border border-[#d99aff]/50 bg-white px-6 py-6">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-40 bg-[url('/images/footer/footer-copyright-pattern.webp')] bg-cover bg-center"
          />
          <p className="relative text-center text-lg font-medium text-[#313131]">
            Copyright 2024-2026 Trend Evo | All Right Reserved
          </p>
        </div>
      </footer>
    </PrimarySection>
  );
}
