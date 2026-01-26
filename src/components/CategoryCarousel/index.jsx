import React, { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import { useNavigate } from 'react-router-dom';

import Category from '../../assets/category.png';
import api from '../../services/api';
import { Container, CategoryImg, ContainerItems, Button, Image } from './style';

export function CategoryCarousel() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories');

      setCategories(data);
    }

    loadCategories();
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 },
  ];

  const navigate = useNavigate();

  const handleCategoryClick = (categoryId) => {
    navigate('/produtos', { state: { categoryId } });
  };

  return (
    <Container>
      <CategoryImg src={Category} alt="logo-da-category" />
      <Carousel
        itemsToShow={5}
        breakPoints={breakPoints}
        style={{ width: '95%' }}
      >
        {categories &&
          categories.map((category) => (
            <ContainerItems key={category.id}>
              <Image src={category.url} alt="imagem-da-categoria" />
              <Button onClick={() => handleCategoryClick(category.id)}>
                {category.name}
              </Button>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  );
}
