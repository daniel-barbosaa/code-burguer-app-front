import { useParams } from 'react-router-dom';
import { useState } from 'react';
import BurguerWopper from '../../assets/wopper.png';
import { Card } from '@/components/ui/card';

import { DrawerItem } from '../components/drawer-item';

const categoryItems = [
  {
    id: '123',
    name: 'X-Salada',
    price: 14.99,
    weigth: '120',
  },
  {
    id: '1234',
    name: 'X-Bacon',
    price: 14.99,
    weigth: '120',
  },
  {
    id: '12345',
    name: 'X-egg',
    price: 14.99,
    weigth: '120',
  },
  {
    id: '123456',
    name: 'X-tudo',
    price: 14.99,
    weigth: '120',
  },
  {
    id: '1234567',
    name: 'X-calabrese',
    price: 14.99,
    weigth: '120',
  },
];

export function CategoryPage() {
  const { slug } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 capitalize">{slug}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {categoryItems.map((item) => (
          <Card
            className="flex flex-col items-center w-full border-none shadow-lg gap-2 transition-transform duration-300
             active:translate-y-0.5 active:scale-[0.85] cursor-pointer"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <img
              src={BurguerWopper}
              alt="hamburguer"
              className="w-28 h-28 object-contain"
            />
            <div className="flex flex-col items-center">
              <span className="font-semibold tracking-tight lg:text-xl">
                {item.name}
              </span>
              {item.weigth !== undefined && (
                <span className="text-xs font-medium text-zinc-400">
                  {`${item.weigth} g`}
                </span>
              )}
            </div>
            <span className="text-lg font-medium text-bfgold">
              {`R$${item.price}`}
            </span>
          </Card>
        ))}
      </div>

      <DrawerItem isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
