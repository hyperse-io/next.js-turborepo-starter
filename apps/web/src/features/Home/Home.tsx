import type { FC } from 'react';
import { clsx } from 'clsx';
import { Button, CircularProgress, Code } from '@heroui/react';
import { extendVariants } from '@heroui/react';
type HomeProps = {
  bgColor: string;
  textColor: string;
  changeColor: () => void;
};

export const MyButton = extendVariants(Button, {
  variants: {
    // <- modify/add variants
    color: {
      olive: 'text-[#000] bg-[#84cc16]',
      orange: 'bg-[#ff8c00] text-[#fff]',
      violet: 'bg-[#8b5cf6] text-[#fff]',
    },
    isDisabled: {
      true: 'bg-[#eaeaea] text-[#000] opacity-50 cursor-not-allowed',
    },
    size: {
      xs: 'px-2 min-w-12 h-6 text-tiny gap-1 rounded-small',
      md: 'px-4 min-w-20 h-10 text-small gap-2 rounded-small',
      xl: 'px-8 min-w-28 h-14 text-large gap-4 rounded-medium',
    },
  },
  defaultVariants: {
    // <- modify/add default variants
    color: 'olive',
    size: 'xl',
  },
  compoundVariants: [
    // <- modify/add compound variants
    {
      isDisabled: true,
      color: 'olive',
      class: 'bg-[#84cc16]/80 opacity-100',
    },
  ],
});

export const Home: FC<HomeProps> = ({ bgColor, textColor, changeColor }) => {
  return (
    <>
      <div>Best practices on using Next.js in a TypeScript monorepo</div>
      <div>
        In this monorepo app we have a single site with two installed
        dependencies that are available in the same repository.
      </div>
      <div className={clsx('mb-4 text-sm text-red-600')}>
        <li>
          <Code>app</Code> is the current Next.js site you&apos;re looking at
        </li>
        <li>
          <Code>packages/ui</Code> is a package that exports the button you see
          below
        </li>
        <li>
          <Code>packages/utils</Code> is a package that exports a function that
          generates random colors. Click the button to see it in action
        </li>
      </div>
      {bgColor && textColor && (
        <>
          <CircularProgress
            classNames={{
              base: 'text-red-600',
            }}
          ></CircularProgress>
          <MyButton
            color="olive"
            size="xl"
            style={{
              backgroundColor: bgColor,
              color: textColor,
              borderColor: textColor,
            }}
            onClick={changeColor}
          >
            Change Color
          </MyButton>
        </>
      )}
    </>
  );
};
