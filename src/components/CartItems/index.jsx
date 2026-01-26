/* eslint-disable jsx-a11y/click-events-have-key-events */

import Carrinho from '../../assets/carrinho-vazio64.png';
import Lixeira from '../../assets/lixo.png';
import { useCart } from '../../hooks/CartContext';
import formatCurrency from '../../utils/formatCurrency';
import { Container, Header, Body, EmptyCart } from './style';

export function CartItems() {
  const { cartProducts, increaseProducts, decreaseProducts, deleteProducts } =
    useCart();

  return (
    <Container>
      <Header>
        <p />
        <p>Itens</p>
        <p>Preço</p>
        <p style={{ paddingRight: '30px' }}>Quantidade</p>

        <p>Total</p>
      </Header>
      {cartProducts && cartProducts.length > 0 ? (
        cartProducts.map((product) => (
          <Body key={product.id}>
            <img src={product.url} alt="imagem-do-produto" />
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <div className="quantity-container">
              <button onClick={() => decreaseProducts(product.id)}>-</button>
              <p>{product.quantity}</p>
              <button onClick={() => increaseProducts(product.id)}>+</button>
            </div>
            <p className="price-item">
              {formatCurrency(product.quantity * product.price)}
              <img
                src={Lixeira}
                alt=""
                style={{ width: 24 }}
                onClick={() => deleteProducts(product.id)}
              />
            </p>
          </Body>
        ))
      ) : (
        <EmptyCart>
          <p>Carrinho vazio</p>
          <img src={Carrinho} alt="carrinho-vazio" />
        </EmptyCart>
      )}
    </Container>
  );
}
