import { Outlet } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { SidebarNavigate } from '../components/sidebar-navigate';
import { useSidebar } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';

import { Header } from '../components/header';

export function Dashboard() {
  const { toggleSidebar, isMobile } = useSidebar();

  return (
    <div className="flex min-h-screen w-full">
      <SidebarNavigate />
      <main className="flex-1">
        <div className="absolute p-4">
          {isMobile && (
            <button type="button" onClick={toggleSidebar}>
              <Menu />
            </button>
          )}
        </div>
        <Header />

        <div className={cn('flex-1 px-8', isMobile && 'mt-4 p-10')}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
