import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { ShoppingCart, User } from 'lucide-react';
import { useUser } from '../../hooks/UserContext';

import { cn } from '@/lib/utils';

export function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { userLogOut, userData } = useUser();

  const logOut = () => {
    userLogOut();
    navigate('/login');
  };

  return (
    <div className="h-18 bg-white shadow-md flex items-center justify-around flex-row ">
      <div className="flex gap-6">
        <Link
          className={cn(
            'cursor-pointer decoration-0',
            pathname === '/'
              ? 'text-violet-600 font-semibold'
              : 'text-zinc-600',
          )}
          to="/"
        >
          Home
        </Link>
        <Link
          className={cn(
            'cursor-pointer decoration-0',
            pathname === '/produtos'
              ? 'text-violet-600 font-semibold'
              : 'text-zinc-600',
          )}
          to="/produtos"
        >
          Ver produtos
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <Link to="/carrinho">
          <ShoppingCart className="text-violet-600" />
        </Link>
        <div className="h-10 border-l border-zinc-200" />

        <Link to="/">
          <User className="text-violet-600" />
        </Link>
        <div>
          <p className="text-sm text-zinc-600 font-medium">
            Olá
            {', '}
            {userData.name}
          </p>
          <button
            type="button"
            onClick={logOut}
            className="text-sm text-violet-600 font-bold cursor-pointer"
          >
            Sair
          </button>
        </div>
      </div>
    </div>
  );
}
