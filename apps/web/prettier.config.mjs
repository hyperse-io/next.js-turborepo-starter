/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  tailwindStylesheet: './src/app/globals.css',
  tailwindFunctions: ['tw', 'clsx', 'twMerge', 'extendVariants'],
  tailwindAttributes: ['className', 'classNames'],
};

export default config;
