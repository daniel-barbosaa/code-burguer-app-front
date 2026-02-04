import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const categories = [
  {
    id: 'all',
    name: 'Todos',
    slug: 'all',
  },
  {
    id: 'burgers',
    name: 'Hambúrgueres',
    slug: 'burgers',
  },
  {
    id: 'combos',
    name: 'Combos',
    slug: 'combos',
  },
  {
    id: 'drinks',
    name: 'Bebidas',
    slug: 'drinks',
  },
  {
    id: 'desserts',
    name: 'Sobremesas',
    slug: 'desserts',
  },
];

export function Header() {
  return (
    <header className="px-4 lg:px-8 pt-15 lg:pt-8 flex flex-col lg:flex-row justify-between">
      <Tabs defaultValue="all">
        <TabsList variant="line">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.slug}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="pt-6 lg:pt-0 flex items-center gap-3">
        <div className="relative flex-1">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            size={18}
          />
          <Input
            placeholder="Buscar..."
            className="pl-10 focus-visible:ring-bfgold/60 focus-visible:border-bfgold"
          />
        </div>
      </div>
    </header>
  );
}
