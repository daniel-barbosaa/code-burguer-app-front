import { Outlet } from 'react-router-dom';
import { Menu } from 'lucide-react';

import { useSidebar } from '@/components/ui/sidebar';

import { Header } from '../components/header';
import { UserSidebar } from '../components/user-sidebar';

export function DashboardUser() {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="flex min-h-screen w-full">
      <UserSidebar />
      <main className="flex-1">
        <div className="absolute top-0 left-0 p-4 md:hidden">
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
