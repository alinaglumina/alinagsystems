'use client';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface/60 text-muted transition-colors hover:text-ink"
    >
      {mounted ? (isDark ? <Sun size={16} /> : <Moon size={16} />) : <span className="h-4 w-4" />}
    </button>
  );
}
