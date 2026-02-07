import { Sheet, SheetContent, SheetClose } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import BurguerWopper from '../../assets/wopper.png';

interface ProductSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProductSheet({ open, onOpenChange }: ProductSheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
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
          />
        </SheetClose>

        <div className="flex h-full flex-col items-center gap-4 px-6">
          <div className="flex flex-col items-center gap-4 my-auto">
            <img
              src={BurguerWopper}
              alt="hamburguer"
              className="w-48 h-48 object-contain drop-shadow-[0_25px_20px_rgba(0,0,0,0.25)]"
            />

            <div className="flex flex-col items-center">
              <span className="font-semibold tracking-tight text-xl">
                X-Big
              </span>
              <span className="text-xs font-medium text-zinc-400">120 g</span>
            </div>

            <span className="text-2xl font-medium text-bfgold">R$ 25,00</span>
          </div>

          <div className="w-full mt-auto mb-6">
            <Button
              className="w-full bg-bfgold text-foreground font-semibold hover:bg-bfgold/80"
              onClick={() => onOpenChange(false)}
            >
              Adicionar à sacola
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
