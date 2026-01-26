import React from 'react';

import CartLogo from '../../assets/carrinho-image.svg';
import { CartItems, CartResume } from '../../components/index';
import { Container, CartImg, Wrapper } from './style';

export function Cart() {
  return (
    <Container>
      <CartImg src={CartLogo} alt="logo-do-carrinho" />
      <Wrapper>
        <CartItems />
        <CartResume />
      </Wrapper>
    </Container>
  );
}
