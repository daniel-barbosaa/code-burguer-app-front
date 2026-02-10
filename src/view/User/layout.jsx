import { Outlet } from 'react-router-dom';

import { MenuToolBar } from '../components/menu-tool-bar';
import { UserSidebar } from '../components/user-sidebar';
import { Header } from '../components/header';
import { SidebarProvider } from '@/components/ui/sidebar';

export function DashboardUser() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <UserSidebar />
        <div className="flex flex-1 flex-col">
          <Header />
          <MenuToolBar />
          <main className="flex-1 px-4 py-4 sm:px-8 sm:py-8 bg-background">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
