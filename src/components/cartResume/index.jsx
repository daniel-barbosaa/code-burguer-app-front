import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { useCart } from '../../hooks/CartContext';
import api from '../../services/api';
import formatCurrency from '../../utils/formatCurrency';
import { Button } from '../Button';
import { Container } from './style';

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0);
  const [deliveryTax] = useState(5);

  const { cartProducts } = useCart();
  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc;
    }, 0);

    setFinalPrice(sumAllItems);
  }, [cartProducts, deliveryTax]);

  const submitOrder = async () => {
    const order = cartProducts.map((product) => {
      return { id: product.id, quantity: product.quantity };
    });

    await toast.promise(api.post('orders', { products: order }), {
      pending: 'Realizando o pedido!',
      success: 'Pedido realizado!',
      error: 'Falha ao realizar pedido, tente novamente!',
    });
  };

  return (
    <div>
      <Container>
        <div className="container-top">
          <h3 className="title">Resumo do pedido</h3>
          <p className="items">Itens</p>
          <p className="items-price">{formatCurrency(finalPrice)}</p>
          <p className="price-tax">Taxa de entrega</p>
          <p className="delivery-tax-price">{formatCurrency(deliveryTax)}</p>
        </div>

        <div className="container-bottom">
          <p>Total</p>
          <p>{formatCurrency(finalPrice + deliveryTax)}</p>
        </div>

      </Container>
      <Button style={{ width: '100%', marginTop: 30 }} onClick={submitOrder}>Finalizar pedido</Button>
    </div>

  );
}
