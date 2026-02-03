import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Item from '../../../assets/especial.png';
import { Button } from '@/components/ui/button';

export function Cart() {
  return (
    <div>
      <h1 className="text-2xl lg:text-3xl font-bold mb-8 capitalize ">
        Seu pedido
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 flex gap-3 flex-col">
          <Card className="relative flex flex-row gap-3 p-3 border-none shadow-lg">
            <img
              src={Item}
              alt="item-do-carrinho"
              className="size-24 rounded-lg"
            />

            <div className="flex flex-col gap-3 ">
              <span className="font-medium text-sm tracking-tight lg:text-base">
                Hamburger especial com salada
              </span>

              <div className="flex flex-row gap-3 lg:items-center">
                <div className="flex items-center gap-4">
                  <Button size="sm" variant="ghost" className="bg-zinc-200">
                    <Minus />
                  </Button>
                  <span>1</span>
                  <Button size="sm" variant="ghost" className="bg-zinc-200">
                    <Plus />
                  </Button>
                </div>

                <Button
                  variant="ghost"
                  className="text-zinc-700 self-start lg:self-auto"
                >
                  <Trash2 className="size-4" />
                  <span className="hidden lg:block">Remover</span>
                </Button>
              </div>
              <span className="bottom-3 static  lg:absolute right-3 font-medium text-zinc-700">
                R$ 12,40
              </span>
            </div>
          </Card>
        </div>

        <Card className="p-3 flex flex-col border-none shadow-lg">
          <span className="font-medium text-lg">Resumo</span>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-foreground/50 tracking-tight">Items</span>
              <span className="font-semibold">2</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-foreground/50 tracking-tight">Total</span>
              <span className="font-semibold">2</span>
            </div>
          </div>

          <Button className="bg-bfgold text-foreground hover:bg-bfgold/60">
            Finalizar pedido
          </Button>
        </Card>
      </div>
    </div>
  );
}
