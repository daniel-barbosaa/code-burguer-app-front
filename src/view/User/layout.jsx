import { Outlet } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { SidebarNavigate } from '../components/sidebar-navigate';
import { useSidebar } from '@/components/ui/sidebar';

import { Header } from '../components/header';

export function DashboardUser() {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="flex min-h-screen w-full">
      <SidebarNavigate />
      <main className="flex-1">
        <div className="absolute top-0 right-0 p-4 md:hidden">
          <button type="button" onClick={toggleSidebar}>
            <Menu />
          </button>
        </div>

        <Header />

        <div className="flex-1 px-4 py-4 sm:px-8 sm:py-8 lg:px-8 lg:py-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
