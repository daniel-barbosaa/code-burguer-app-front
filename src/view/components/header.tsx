import { useSidebar } from '@/components/ui/sidebar';
import { Menu } from 'lucide-react';
import { UserMenu } from './user-menu';

export function Header() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="flex  items-center justify-between md:hidden p-4 bg-card w-full border border-b">
      <span className="text-xl font-bold text-muted-foreground">BigFoods</span>
      <div className="flex items-center gap-2">
        <UserMenu />
        <button onClick={toggleSidebar} className="p-2">
          <Menu />
        </button>
      </div>
    </header>
  );
}
