import { Beer } from 'lucide-react';
import { Link } from 'react-router-dom';
import BurguerWopper from '../../assets/wopper.png';
import { Card } from '@/components/ui/card';

const categories = [
  {
    id: '123',
    name: 'Hamburguer',
    productCount: 3,
  },
  {
    id: '1234',
    name: 'Saladas',
    productCount: 5,
  },
  {
    id: '12345',
    name: 'Refrigerantes',
    productCount: 1,
  },
  {
    id: '123456',
    name: 'Sobremesas',
    productCount: 6,
  },
];

export function Foods() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Categorias</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link
            to={`/comidas/${category.name.toLowerCase()}`}
            key={category.id}
          >
            <Card
              className="flex flex-col p-4  items-center w-full border-none shadow-lg gap-2 transition-transform duration-300
             active:translate-y-0.5 active:scale-[0.85] cursor-pointer"
            >
              <Beer className="size-10" />
              <div className="flex flex-col items-center">
                <span className="font-semibold tracking-tight lg:text-xl">
                  {category.name}
                </span>
                {category.productCount !== undefined && (
                  <span className="text-xs font-medium text-zinc-400">
                    {`${category.productCount} Produtos`}
                  </span>
                )}
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
