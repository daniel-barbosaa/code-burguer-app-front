import React, { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import { useNavigate } from 'react-router-dom';

import Offers from '../../assets/OFERTAS.png';
import { useCart } from '../../hooks/CartContext';
import api from '../../services/api';
import formatCurrency from '../../utils/formatCurrency';
import { Container, CategoryImg, ContainerItems, Button, Image } from './style';

export function OffersCarousel() {
  const { putProdutsInCart } = useCart();

  const navigate = useNavigate();

  const [offers, setOffers] = useState([]);
  useEffect(() => {
    async function loadOffers() {
      const { data } = await api.get('products');

      const onlyOffers = data
        .filter((product) => product.offer)
        .map((product) => ({
          ...product,
          formatedPrice: formatCurrency(product.price),
        }));

      setOffers(onlyOffers);
    }

    loadOffers();
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 },
  ];

  return (
    <Container>
      <CategoryImg src={Offers} alt="logo-da-oferta" />
      <Carousel
        itemsToShow={5}
        breakPoints={breakPoints}
        style={{ width: '95%' }}
      >
        {offers &&
          offers.map((product) => (
            <ContainerItems key={product.id}>
              <Image src={product.url} alt="imagem-do-produto" />
              <p>{product.name}</p>
              <p style={{ color: 'black' }}>{product.formatedPrice}</p>
              <Button
                onClick={() => {
                  putProdutsInCart(product);
                  navigate('/carrinho');
                }}
              >
                Peça agora
              </Button>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  );
}
