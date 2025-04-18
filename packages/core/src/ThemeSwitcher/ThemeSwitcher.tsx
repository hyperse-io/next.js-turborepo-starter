'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@heroui/react';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <p>The current theme is: {theme}</p>
      <div className="flex items-center gap-1">
        <Button
          className="mr-2"
          color="primary"
          onPress={() => setTheme('light')}
        >
          Light Mode
        </Button>
        <Button onPress={() => setTheme('dark')}>Dark Mode</Button>
      </div>
    </div>
  );
}
