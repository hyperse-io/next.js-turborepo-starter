'use client';
import type { ReactNode } from 'react';
import type { ThemeProviderProps as NextThemesProviderProps } from 'next-themes';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { HeroUIProvider } from '@heroui/react';

export interface ThemeProviderProps {
  children: ReactNode;
  themeProps?: NextThemesProviderProps;
}

export function ThemeProvider({ children, themeProps }: ThemeProviderProps) {
  return (
    <HeroUIProvider>
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </HeroUIProvider>
  );
}
