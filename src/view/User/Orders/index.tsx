import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export function Orders() {
  const date = '12/02/2026';
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold mb-2">Meus Pedidos</h1>
        <p className="text-sm text-muted-foreground">
          Acompanhe e gerencie suas compras recentes.
        </p>
      </div>

      <div className="mt-10 space-y-4">
        <Card
          className="p-6 border-none
        shadow-sm"
        >
          <div className="flex items-center justify-between gap-6">
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div>
                <p className="text-xs text-muted-foreground mb-1">
                  Número do pedido
                </p>
                <p className="font-semibold">#123d2d3</p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground mb-1">Data</p>
                <p className="text-sm">{date}</p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground mb-1">Status</p>
                <Badge variant="outline" className="py-1 px-4">
                  Entregue
                </Badge>
              </div>

              <div>
                <p className="text-xs text-muted-foreground mb-1">Total</p>
                <p className="font-semibold text-primary">R$120,20</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
