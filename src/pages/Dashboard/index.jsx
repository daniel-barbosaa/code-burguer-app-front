import { Outlet } from 'react-router-dom';
import { LogOut, Menu, ShoppingBag } from 'lucide-react';
import { SidebarNavigate } from '../components/sidebar-navigate';
import { useSidebar } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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
        <header className="flex justify-end gap-1 p-8">
          <Button variant="ghost" className="relative">
            <ShoppingBag className="size-5" />
            <Badge className="absolute -top-1 -right-1 size-4 bg-red-500">
              2
            </Badge>
          </Button>

          <Button variant="ghost">
            <LogOut />
          </Button>
        </header>

        <div className={cn('flex-1 px-8', isMobile && 'mt-4 p-10')}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
