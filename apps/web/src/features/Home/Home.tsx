import type { FC } from 'react';
import { Code } from '@heroui/react';
import { Button } from '@hyperse/core';

type HomeProps = {
  bgColor: string;
  textColor: string;
  changeColor: () => void;
};

export const Home: FC<HomeProps> = ({ bgColor, textColor, changeColor }) => {
  return (
    <>
      <div>Best practices on using Next.js in a TypeScript monorepo</div>
      <div>
        In this monorepo app we have a single site with two installed
        dependencies that are available in the same repository.
      </div>
      <div className="mb-4 text-red-600">
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
          <Button
            style={{
              backgroundColor: bgColor,
              color: textColor,
              borderColor: textColor,
            }}
            onClick={changeColor}
          >
            Change Color
          </Button>
        </>
      )}
    </>
  );
};
