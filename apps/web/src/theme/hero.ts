// hero.ts
import { heroui } from '@heroui/react';
export default heroui({
  prefix: 'heroui', // prefix for themes variables
  addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
  defaultTheme: 'light', // default theme from the themes object
  defaultExtendTheme: 'light', // default theme to extend on custom themes
  layout: {}, // common layout tokens (applied to all themes)
  themes: {
    light: {
      layout: {}, // light theme layout tokens
      colors: {}, // light theme colors
    },
    dark: {
      layout: {}, // dark theme layout tokens
      colors: {}, // dark theme colors
    },
    // ... custom themes
  },
});
