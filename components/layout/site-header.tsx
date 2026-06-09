'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Home', href: '/', active: true },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact Us', href: '#contact' },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span
      className="flex size-6 flex-col items-center justify-center gap-[5px]"
      aria-hidden
    >
      <span
        className={cn(
          'h-0.5 w-6 rounded-full bg-[#343e56] transition-all duration-300',
          open && 'translate-y-[7px] rotate-45',
        )}
      />
      <span
        className={cn(
          'h-0.5 w-6 rounded-full bg-[#343e56] transition-all duration-300',
          open ? 'scale-x-0 opacity-0' : 'scale-x-100 opacity-100',
        )}
      />
      <span
        className={cn(
          'h-0.5 w-6 rounded-full bg-[#343e56] transition-all duration-300',
          open && '-translate-y-[7px] -rotate-45',
        )}
      />
    </span>
  );
}

export default function SiteHeader({ className }: { className?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => setMobileOpen(false);
  const showHeaderBg = scrolled || mobileOpen;

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-50 w-full transition-all duration-300',
        showHeaderBg
          ? 'border-b border-white/30 bg-white/50 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent backdrop-blur-none',
        className,
      )}
    >
      <div className="container flex h-[80px] items-center justify-between">
        <Link href="/" className="relative h-[42px] w-[132px] shrink-0">
          <Image
            src="/images/icons/trendevo-logo.png"
            alt="TrendEvo"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav className="hidden min-[1100px]:flex items-center gap-8">
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

        <div className="flex items-center gap-3 min-[1100px]:gap-6">
          <div className="hidden items-center gap-4 min-[1100px]:flex">
            <ThemeToggle />
            <Link
              href="#sign-in"
              className="text-base font-medium text-[#343e56] hover:text-[#071431]"
            >
              Sign In
            </Link>
          </div>

          <Button className="bg-brand-gradient hidden h-10 rounded-[10px] border-0 px-4 text-base font-semibold text-white hover:opacity-90 min-[1100px]:inline-flex">
            Create account
          </Button>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((open) => !open)}
            className="flex size-10 cursor-pointer items-center justify-center rounded-[10px] border border-[#d57ff9]/30 bg-white/60 min-[1100px]:hidden"
          >
            <MenuIcon open={mobileOpen} />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          'overflow-hidden border-t border-white/20 bg-white/80 backdrop-blur-xl transition-[max-height,opacity] duration-300 min-[1100px]:hidden',
          mobileOpen ? 'max-h-[calc(100dvh-80px)] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <nav className="container flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={closeMobileMenu}
              className={cn(
                'rounded-lg px-3 py-3 text-base font-medium transition-colors',
                link.active
                  ? 'text-gradient bg-[#f4e3fd]/60'
                  : 'text-[#343e56] hover:bg-[#f4e3fd]/40 hover:text-[#071431]',
              )}
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-4 flex flex-col gap-3 border-t border-[#f0d8ff] pt-4">
            <div className="flex items-center justify-between rounded-lg border border-[#d57ff9]/30 bg-[#ffe9f5]/60 px-3 py-2.5">
              <span className="text-sm font-medium text-[#424242]">Theme</span>
              <ThemeToggle />
            </div>

            <Link
              href="#sign-in"
              onClick={closeMobileMenu}
              className="rounded-lg px-3 py-3 text-center text-base font-medium text-[#343e56] hover:bg-[#f4e3fd]/40"
            >
              Sign In
            </Link>

            <Button className="bg-brand-gradient h-11 w-full rounded-[10px] border-0 text-base font-semibold text-white hover:opacity-90">
              Create account
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
