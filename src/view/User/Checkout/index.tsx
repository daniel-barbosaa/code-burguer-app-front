import { Button } from '@/components/ui/button';
import { MoveLeft } from 'lucide-react';

const orderItems = [
  {
    id: 1,
    name: 'Classic Burger',
    quantity: 2,
    price: 8.99,
    image:
      'https://images.unsplash.com/photo-1582295523904-8ab53717447c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwY2hlZXNlYnVyZ2VyfGVufDF8fHx8MTc3MDA1NzA1OXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    name: 'Bacon Deluxe',
    quantity: 1,
    price: 10.99,
    image:
      'https://images.unsplash.com/photo-1592887774222-f7f78818a60e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNvbiUyMGJ1cmdlciUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzcwMTU1OTgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    name: 'Spicy Chicken',
    quantity: 1,
    price: 9.49,
    image:
      'https://images.unsplash.com/photo-1606149059549-6042addafc5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGljeSUyMGNoaWNrZW4lMjBidXJnZXJ8ZW58MXx8fHwxNzcwMTU1OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function Checkout() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <header className="shrink-0 flex items-center gap-2 border-b border-border p-4">
        <Button variant="ghost" className="hover:bg-zinc-200">
          <MoveLeft className="font-bold" />
        </Button>
        <span className="text-xl font-semibold">Finalizar pedido</span>
      </header>

      <main className="flex-1 overflow-y-auto p-6">
        <section className="bg-card border border-border rounded-xl p-4 max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">Seu pedido</h2>
            <button className="text-sm text-bfgold hover:underline">
              Editar sacola
            </button>
          </div>

          <div className="divide-y divide-border">
            {orderItems.map((item) => (
              <div className="flex items-center gap-3 py-3">
                <div className="w-12 h-12 shrink-0 bg-muted/20 rounded-lg overflow-hidden flex items-center justify-center p-1">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium">{item.name}</h4>
                  <p className="text-xs text-muted-foreground">
                    Qtd: {item.quantity}
                  </p>
                </div>

                <div className="text-sm font-semibold">
                  R${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-card border border-border rounded-xl p-4 max-w-2xl mx-auto mt-6">
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-medium">R${10}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Taxa de entrega</span>
              <span className="font-medium">R${10}</span>
            </div>

            <div className="border-t border-border pt-3">
              <div className="flex justify-between">
                <span className="font-semibold">Total</span>
                <span className="text-xl font-bold text-primary">R${10}</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
        <div className="max-w-2xl mx-auto p-4">
          <Button className="text-sm w-full bg-bfgold hover:bg-bfgold/80 text-foreground py-6 font-bold shadow-lg md:text-lg">
            Confirmar pedido · R$32,00
          </Button>
        </div>
      </footer>
    </div>
  );
}
