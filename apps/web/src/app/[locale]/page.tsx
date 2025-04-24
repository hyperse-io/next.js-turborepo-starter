'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'use-intl';
import { Home } from '@/features/Home/Home';
import Logo from '@/public/logo.svg';
import { ThemeSwitcher } from '@hyperse/core';
import { matchingTextColor, randomColor } from '@hyperse/utils';
import { NestedModal } from './NestedModal';

export default function Index() {
  const [bgColor, setBgColor] = useState('');
  const [textColor, setTextColor] = useState('');
  const changeColor = () => {
    const bg = randomColor();
    setBgColor(bg);
    setTextColor(matchingTextColor(bg));
  };

  const t = useTranslations('Index');
  useEffect(changeColor, []);

  return (
    <div>
      <Home bgColor={bgColor} textColor={textColor} changeColor={changeColor} />
      <Logo className="w-32" />
      <main className="bg-background text-foreground dark">
        <div className="text-primary-600">Hello hero {t('headline')}</div>
        <ThemeSwitcher />
        <NestedModal variant="primary" />
      </main>
    </div>
  );
}
