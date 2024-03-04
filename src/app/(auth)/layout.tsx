import { ReactNode } from 'react';
import { ThemeSwitcher } from '@/components/theme-switcher';

import { Logo } from '@/components/logo';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex flex-col min-h-screen min-w-full bg-background max-h-screen'>
      <nav className='flex items-center justify-between border-b border-border h-16 px-4 py-2'>
        <Logo />
        <div className='flex items-center gap-4'>
          <ThemeSwitcher />
        </div>
      </nav>
      <main className='flex w-full flex-grow h-full items-center justify-center'>
        {children}
      </main>
    </div>
  );
};

export default AuthLayout;
