'use client';

import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

type Theme = 'light' | 'dark';

const TRACK_LEFT = 8.22;
const TRACK_TOP = 3.5;
const TRACK_WIDTH = 55;
const TRACK_HEIGHT = 23;
const KNOB_SIZE = 29;
const TOGGLE_WIDTH = TRACK_LEFT + TRACK_WIDTH;
const TOGGLE_HEIGHT = KNOB_SIZE;

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  localStorage.setItem('theme', theme);
}

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initialTheme = getInitialTheme();
    setTheme(initialTheme);
    applyTheme(initialTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  const isLight = !mounted || theme === 'light';
  const label = isLight ? 'Light' : 'Dark';
  const knobLeft = isLight ? 0 : TOGGLE_WIDTH - KNOB_SIZE;
  const trackLeft = isLight ? TRACK_LEFT : 0;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
      className={cn(
        'relative shrink-0 cursor-pointer overflow-visible',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d57ff9]/50 focus-visible:ring-offset-2',
        className,
      )}
      style={{
        width: TOGGLE_WIDTH,
        height: TOGGLE_HEIGHT,
      }}
    >
      <span
        aria-hidden
        className="absolute z-0 rounded-[11.5px] border-[0.3px] border-[#d57ff9]/30 bg-[#ffe9f5] transition-[left] duration-300 ease-out"
        style={{
          left: trackLeft,
          top: TRACK_TOP,
          width: TRACK_WIDTH,
          height: TRACK_HEIGHT,
        }}
      />

      <span
        className={cn(
          'absolute z-10 whitespace-nowrap text-[10px] font-medium leading-none text-[#424242] transition-[left] duration-300 ease-out',
          isLight ? 'left-[31.11px] top-[9.5px]' : 'left-[10px] top-[9.5px]',
        )}
      >
        {label}
      </span>

      <span
        aria-hidden
        className="absolute top-0 z-20 flex items-center justify-center rounded-full bg-brand-gradient shadow-[0_2px_4px_rgba(0,0,0,0.25)] transition-[left] duration-300 ease-out"
        style={{
          left: knobLeft,
          width: KNOB_SIZE,
          height: KNOB_SIZE,
        }}
      >
        <Icon
          icon={
            isLight
              ? 'material-symbols:clear-day'
              : 'material-symbols:dark-mode'
          }
          className="size-[18px] text-white"
        />
      </span>
    </button>
  );
}
