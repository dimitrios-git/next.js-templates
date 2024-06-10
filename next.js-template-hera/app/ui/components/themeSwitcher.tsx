// @/app/ui/components/themeSwitcher.tsx

'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === 'dark';
  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');

  return (
    <div onClick={toggleTheme} className="cursor-pointer flex items-center">
      {isDark ? (
        <MdOutlineLightMode size={20} />
      ) : (
        <MdOutlineDarkMode size={20} />
      )}
    </div>
  );
}
