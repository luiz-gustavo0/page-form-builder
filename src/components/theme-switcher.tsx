'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import { ComputerIcon, MoonStarIcon, SunIcon } from 'lucide-react';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // avoid rehydration errors

  return (
    <Tabs defaultValue={theme}>
      <TabsList>
        <TabsTrigger value='light' onClick={() => setTheme('light')}>
          <SunIcon className='h-5 w-5' />
        </TabsTrigger>
        <TabsTrigger value='dark' onClick={() => setTheme('dark')}>
          <MoonStarIcon className='h-5 w-5 rotate-[260deg] transition-all dark:rotate-0' />
        </TabsTrigger>
        <TabsTrigger value='system' onClick={() => setTheme('system')}>
          <ComputerIcon className='h-5 w-5' />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};
