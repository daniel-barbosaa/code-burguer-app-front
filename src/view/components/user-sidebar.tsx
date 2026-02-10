import { ChefHat, Hamburger, UtensilsCrossed } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

import { cn } from '@/lib/utils';

const items = [
  {
    title: 'Cardápio',
    url: '/',
    icon: UtensilsCrossed,
  },
  {
    title: 'Meus pedidos',
    url: '/meus-pedidos',
    icon: Hamburger,
  },
];

export function UserSidebar() {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarHeader className="pt-8 px-8">
        <div className="flex gap-2 items-center ">
          <span className="size-10 rounded-full bg-zinc-100 a flex items-center justify-center">
            <ChefHat className="text-bfred" />
          </span>
          <p className="text-2xl font-bold">
            Big
            <span className="text-bfred">Foods</span>
          </p>
        </div>
      </SidebarHeader>
      <SidebarContent className="p-3">
        <SidebarGroup>
          <SidebarMenu className="gap-3">
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  isActive={location.pathname === item.url}
                  asChild
                  className={cn(
                    'text-md font-medium p-5',
                    'data-[active=true]:bg-bfgold',
                  )}
                >
                  <Link to={item.url}>
                    <item.icon className="text-zinc-800" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="pb-4 items-center">
        <p className="text-xs text-zinc-400 font-medium mt-4">
          © 2026 BigFood App
        </p>
      </SidebarFooter>
    </Sidebar>
  );
}
