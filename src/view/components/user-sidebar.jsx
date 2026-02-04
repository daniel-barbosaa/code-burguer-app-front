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
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const items = [
  {
    title: 'Cardápio',
    url: '/',
    icon: UtensilsCrossed,
  },
  {
    title: 'Meu pedidos',
    url: '/comidas',
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
      <SidebarFooter className="p-5 items-center">
        <div className="flex flex-col justify-center items-center gap-3 shadow-lg rounded-lg p-2 w-full">
          <Avatar className="size-10 bg-zinc-100 flex items-center justify-center">
            <AvatarImage
              src="https://github.com/evilrabbit.png"
              alt="@evilrabbit"
            />
            <AvatarFallback className="uppercase">DA</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-center">
            <span className="text-sm font-medium">Daniel Mendes</span>
            <span className="text-xs text-zinc-400 font-medium">
              Administrador - 4h 15m
            </span>
          </div>
          <div className="flex flex-col w-full gap-2">
            <Button variant="secondary" className="w-full">
              Abrir perfil
            </Button>
          </div>
        </div>
        <p className="text-xs text-zinc-400 font-medium mt-4">
          © 2026 BigFood App
        </p>
      </SidebarFooter>
    </Sidebar>
  );
}
