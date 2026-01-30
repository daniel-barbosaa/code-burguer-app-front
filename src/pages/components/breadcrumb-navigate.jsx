import { Link, useLocation, useParams } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export function BreadcrumbNavigate() {
  const { slug } = useParams();
  const location = useLocation();
  const showBreadcrumb = location.pathname.startsWith('/comidas') || slug;

  if (!showBreadcrumb) {
    return null;
  }

  return (
    <Breadcrumb>
      <BreadcrumbList className="text-md font-medium">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link to="/comidas">Alimentos & Bebidas</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {slug && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-md font-semibold capitalize">
                {slug}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
