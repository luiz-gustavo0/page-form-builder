import { ReactNode } from 'react';

import { Logo } from '@/components/logo';
import { ThemeSwitcher } from '@/components/theme-switcher';

const SubmitFormLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex flex-col min-h-screen min-w-full bg-background h-screen max-h-screen'>
      <nav className='flex items-center justify-between border-b border-border h-16 px-4 py-2'>
        <Logo />
        <ThemeSwitcher />
      </nav>
      <main className='flex w-full flex-grow'>{children}</main>
    </div>
  );
};

export default SubmitFormLayout;
