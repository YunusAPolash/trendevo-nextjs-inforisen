'use client';

import * as React from 'react';
import { useServerInsertedHTML } from 'next/navigation';

import { THEME_INIT_SCRIPT, THEME_STORAGE_KEY } from '@/lib/theme';

export type Theme = 'light' | 'dark' | 'system';

type ThemeContextValue = {
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
};

const ThemeContext = React.createContext<ThemeContextValue | null>(null);

function getSystemTheme(): 'light' | 'dark' {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function resolveTheme(theme: Theme): 'light' | 'dark' {
  return theme === 'system' ? getSystemTheme() : theme;
}

function applyTheme(
  resolved: 'light' | 'dark',
  disableTransitionOnChange: boolean,
) {
  const root = document.documentElement;
  let restoreTransitions: (() => void) | undefined;

  if (disableTransitionOnChange) {
    const style = document.createElement('style');
    style.appendChild(
      document.createTextNode(
        '*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}',
      ),
    );
    document.head.appendChild(style);
    restoreTransitions = () => {
      window.getComputedStyle(document.body);
      setTimeout(() => {
        style.remove();
      }, 1);
    };
  }

  root.classList.remove('light', 'dark');
  root.classList.add(resolved);
  root.style.colorScheme = resolved;
  restoreTransitions?.();
}

function readStoredTheme(storageKey: string, fallback: Theme): Theme {
  try {
    const stored = localStorage.getItem(storageKey);
    if (stored === 'light' || stored === 'dark' || stored === 'system') {
      return stored;
    }
  } catch {
    // localStorage can throw in private browsing
  }
  return fallback;
}

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  disableTransitionOnChange?: boolean;
  storageKey?: string;
};

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  disableTransitionOnChange = false,
  storageKey = THEME_STORAGE_KEY,
}: ThemeProviderProps) {
  const insertedThemeScript = React.useRef(false);

  useServerInsertedHTML(() => {
    if (insertedThemeScript.current) return null;
    insertedThemeScript.current = true;
    return (
      <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
    );
  });

  const [theme, setThemeState] = React.useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = React.useState<'light' | 'dark'>(
    'light',
  );

  React.useEffect(() => {
    const next = readStoredTheme(storageKey, defaultTheme);
    const resolved = resolveTheme(next);
    setThemeState(next);
    setResolvedTheme(resolved);
    applyTheme(resolved, disableTransitionOnChange);
  }, [defaultTheme, disableTransitionOnChange, storageKey]);

  React.useEffect(() => {
    if (theme !== 'system') return;

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => {
      const resolved = getSystemTheme();
      setResolvedTheme(resolved);
      applyTheme(resolved, disableTransitionOnChange);
    };

    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, [disableTransitionOnChange, theme]);

  const setTheme = React.useCallback(
    (next: Theme) => {
      setThemeState(next);
      try {
        localStorage.setItem(storageKey, next);
      } catch {
        // localStorage can throw in private browsing
      }
      const resolved = resolveTheme(next);
      setResolvedTheme(resolved);
      applyTheme(resolved, disableTransitionOnChange);
    },
    [disableTransitionOnChange, storageKey],
  );

  const value = React.useMemo(
    () => ({ theme, resolvedTheme, setTheme }),
    [resolvedTheme, setTheme, theme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
