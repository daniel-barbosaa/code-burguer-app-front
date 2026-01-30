import { ArrowLeft } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BreadcrumbNavigate } from './breadcrumb-navigate';
import { Button } from '@/components/ui/button';

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const showBackButton = location.pathname.startsWith('/comidas');
  return (
    <header className="hidden md:flex gap-1 p-8">
      <div className="flex items-center gap-4">
        {showBackButton && (
          <Button
            variant="ghost"
            className="bg-gray-100 rounded-full cursor-pointer"
            onClick={() => {
              navigate(-1);
            }}
          >
            <ArrowLeft />
          </Button>
        )}
        <BreadcrumbNavigate />
      </div>
    </header>
  );
}
