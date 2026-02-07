import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '../../components/ui/sheet';
import { useBag } from '../../hooks/bag-context';
import ItemImage from '../../assets/wopper.png';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';

export function BagSheet() {
  const { isBagSheetOpen, closeBagSheet } = useBag();
  return (
    <Sheet open={isBagSheetOpen} onOpenChange={closeBagSheet}>
      <SheetContent>
        <SheetClose asChild>
          <button
            type="button"
            aria-label="Fechar detalhes do produto"
            className="
              absolute
              -left-2
              top-1/2
              -translate-y-1/2
              -translate-x-full
              h-24
              w-2
              bg-background
              rounded-lg
              hover:bg-muted
              transition
            "
            onClick={closeBagSheet}
          />
        </SheetClose>

        <SheetHeader className="p-4 border-b border-border">
          <SheetTitle className="text-2xl flex gap-3 items-end">
            Sua sacola
            <span className="text-sm block pb-0.5 font-normal text-foreground/70">
              3 items
            </span>
          </SheetTitle>
        </SheetHeader>

        <div className="px-4 flex flex-col gap-2 ">
          <Card className="p-2 shadow-none border-none bg-zinc-100 flex flex-row justify-between">
            <div className="flex gap-4">
              <img className="size-20" src={ItemImage} alt="item do carrinho" />
              <div className="flex flex-col">
                <span className="font-semibold">X-salada big</span>
                <span className="text-bfgold font-bold">R$23,50</span>

                <div className="flex items-center gap-5 mt-1">
                  <Button
                    variant="ghost"
                    className="bg-zinc-200 size-7 hover:bg-zinc-300"
                  >
                    <Minus />
                  </Button>
                  <span className="font-semibold">2</span>
                  <Button
                    variant="ghost"
                    className="bg-zinc-200 size-7 hover:bg-zinc-300"
                  >
                    <Plus />
                  </Button>
                </div>
              </div>
            </div>

            <span className="font-bold">R$47,00</span>
          </Card>
          <Card className="p-2 shadow-none border-none bg-zinc-100 flex flex-row justify-between">
            <div className="flex gap-4">
              <img className="size-20" src={ItemImage} alt="item do carrinho" />
              <div className="flex flex-col">
                <span className="font-semibold">X-salada big</span>
                <span className="text-bfgold font-bold">R$23,50</span>

                <div className="flex items-center gap-5 mt-1">
                  <Button
                    variant="ghost"
                    className="bg-zinc-200 size-7 hover:bg-zinc-300"
                  >
                    <Minus />
                  </Button>
                  <span className="font-semibold">2</span>
                  <Button
                    variant="ghost"
                    className="bg-zinc-200 size-7 hover:bg-zinc-300"
                  >
                    <Plus />
                  </Button>
                </div>
              </div>
            </div>

            <span className="font-bold">R$47,00</span>
          </Card>
        </div>
      </SheetContent>
    </Sheet>
  );
}
