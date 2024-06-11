// @/app/providers.tsx

'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { NextUIProvider } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <NextThemesProvider attribute="class" defaultTheme="dark">
      <NextUIProvider navigate={router.push}>{children}</NextUIProvider>
    </NextThemesProvider>
  );
}
