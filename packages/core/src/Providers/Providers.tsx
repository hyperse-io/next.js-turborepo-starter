import { type ReactNode } from 'react';
import type { ThemeProviderProps } from 'next-themes';
import { Provider } from 'jotai';
import { ThemeProvider } from './ThemeProvider';

export interface ProvidersProps {
  children: ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  return (
    <Provider>
      <ThemeProvider themeProps={themeProps}>{children}</ThemeProvider>
    </Provider>
  );
}
