import { useState } from 'react';
import { Handbag } from 'lucide-react';
import { Card } from '@/components/ui/card';
import BurguerWopper from '../../../assets/wopper.png';
import { ProductSheet } from '@/view/components/product-sheet';
import { Button } from '@/components/ui/button';

export const categoryItems = [
  {
    id: '1',
    name: 'Burger Clássico',
    slug: 'burger-classico',
    price: 24.9,
    weigth: 180,
    image: '/images/burger-classico.png',
    category: 'hamburguer',
    isOffer: false,
    description: 'Pão brioche, hambúrguer bovino, queijo e molho especial',
  },
  {
    id: '2',
    name: 'Cheddar Bacon',
    slug: 'cheddar-bacon',
    price: 29.9,
    weigth: 220,
    image: '/images/cheddar-bacon.png',
    category: 'hamburguer',
    isOffer: true,
    description: 'Hambúrguer artesanal, cheddar cremoso e bacon crocante',
  },
  {
    id: '3',
    name: 'Burger Duplo',
    slug: 'burger-duplo',
    price: 34.9,
    weigth: 300,
    image: '/images/burger-duplo.png',
    category: 'hamburguer',
    isOffer: true,
    description: 'Dois hambúrgueres, queijo duplo e pão brioche',
  },
  {
    id: '4',
    name: 'Batata Frita',
    slug: 'batata-frita',
    price: 14.9,
    image: '/images/batata-frita.png',
    category: 'acompanhamento',
    isOffer: false,
    description: 'Batata frita crocante',
  },
  {
    id: '5',
    name: 'Refrigerante Lata',
    slug: 'refrigerante-lata',
    price: 6.9,
    image: '/images/refrigerante.png',
    category: 'bebidas',
    isOffer: true,
    description: 'Coca-Cola, Guaraná ou Sprite',
  },
];

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-8 capitalize">Hamburguers</h1>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6 mt-4">
        {categoryItems.map((item) => (
          <Card
            key={item.id}
            className="relative flex flex-col items-center w-full border-none gap-2
        shadow-sm hover:shadow-md transition-all duration-200
        active:scale-[0.98] cursor-pointer"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            {item.isOffer === true && (
              <span className="absolute top-2 left-2 rounded-full bg-bfgold px-2 py-0.5 text-xs font-semibold text-black">
                Oferta
              </span>
            )}

            <img
              src={BurguerWopper}
              alt={item.name}
              className="w-28 h-28 object-contain"
            />

            <div className="flex flex-col items-center text-center">
              <span className="font-semibold tracking-tight">{item.name}</span>

              {item.weigth && (
                <span className="text-xs text-zinc-400">
                  {`${item.weigth} g`}
                </span>
              )}
            </div>

            <span className="text-lg font-medium text-bfgold">
              {`R$ ${item.price}`}
            </span>
          </Card>
        ))}
      </div>

      <ProductSheet open={isOpen} onOpenChange={setIsOpen} />

      <div className="fixed bottom-4 right-4 z-50 lg">
        <Button className="size-12 rounded-full bg-bfgold text-black shadow-lg hover:bg-bfgold/70">
          <Handbag />
          <span className="absolute -top-1 -right-1 h-5 min-w-5 rounded-full bg-black text-xs text-white flex items-center justify-center">
            3
          </span>
        </Button>
      </div>
    </div>
  );
}
