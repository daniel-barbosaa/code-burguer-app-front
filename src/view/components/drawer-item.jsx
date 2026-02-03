import { Drawer, DrawerContent, DrawerFooter } from '@/components/ui/drawer';
import BurguerWopper from '../../assets/wopper.png';
import { Button } from '@/components/ui/button';

export function DrawerItem({ isOpen, onClose }) {
  return (
    <Drawer open={isOpen} direction="right" className="z-40">
      <DrawerContent className="rounded-tl-2xl rounded-bl-2xl">
        <button
          type="button"
          className="absolute
-left-2
top-1/2
-translate-y-1/2
-translate-x-full
h-30
w-2
bg-background
rounded-lg
flex items-center justify-center
    hover:bg-gray-100
    transition
  "
          aria-label="Fechar detalhes do produto"
          onClick={onClose}
        />
        <div
          className="
    absolute
    left-1/2 top-1/2
    -translate-x-1/2 -translate-y-1/2
    flex flex-col items-center justify-center gap-3
  "
        >
          <img
            src={BurguerWopper}
            alt="hamburguer"
            className="w-50 h-50 object-contain drop-shadow-[0_25px_20px_rgba(0,0,0,0.25)]"
          />
          <div className="flex flex-col items-center">
            <span className="font-semibold tracking-tight lg:text-xl">
              X-Big
            </span>
            <span className="text-xs font-medium text-zinc-400">120 g</span>
          </div>
          <span className="text-2xl font-medium text-bfgold">R$25,00</span>
        </div>
        <DrawerFooter className="w-full mb-4">
          <Button className="bg-bfgold text-foreground font-semibold hover:bg-bfgold/80">
            Adicionar a sacola
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
