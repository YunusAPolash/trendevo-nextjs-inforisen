'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Home', href: '/', active: true },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact Us', href: '#contact' },
];

export default function SiteHeader({ className }: { className?: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'border-b border-white/20 bg-white/40 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
        className,
      )}
    >
      <div className="mx-auto flex h-[80px] max-w-[1440px] items-center justify-between px-6 lg:px-0">
        <Link href="/" className="relative h-[42px] w-[132px] shrink-0">
          <Image
            src="/images/icons/trendevo-logo.png"
            alt="TrendEvo"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                'text-base font-medium transition-colors',
                link.active
                  ? 'text-gradient'
                  : 'text-[#343e56] hover:text-[#071431]',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden items-center gap-4 md:flex">
            <div className="flex items-center gap-2 rounded-full border border-[#d57ff9]/30 bg-[#ffe9f5] px-2 py-1">
              <span className="text-[10px] font-medium text-[#424242]">Light</span>
            </div>
            <Link
              href="#sign-in"
              className="text-base font-medium text-[#343e56] hover:text-[#071431]"
            >
              Sign In
            </Link>
          </div>
          <Button className="bg-brand-gradient h-10 rounded-[10px] border-0 px-4 text-base font-semibold text-white hover:opacity-90">
            Create account
          </Button>
        </div>
      </div>
    </header>
  );
}
