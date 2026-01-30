import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { StyleSheetManager } from 'styled-components';

import ProductLogo from '../../assets/image-produtos.png';
import { CardProducts } from '../../components/index';
import api from '../../services/api';
import formatCurrency from '../../utils/formatCurrency';
import {
  Container,
  ProductImg,
  ButtonCategory,
  CategoryMenu,
  ProductsContainer,
} from './style';

export function Products() {
  const location = useLocation();
  const { state } = location;
  const categoryId = state ? state.categoryId : 0;

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([]);
  const [activedCategory, setActivedCategory] = useState(categoryId);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories');
      const newCategory = [{ id: 0, name: 'Todas' }, ...data];

      setCategories(newCategory);
    }

    async function loadProducts() {
      const { data } = await api.get('products');

      const allProducts = data.map((product) => ({
        ...product,
        formatedPrice: formatCurrency(product.price),
      }));

      setProducts(allProducts);
    }

    loadProducts();
    loadCategories();
  }, []);

  useEffect(() => {
    if (activedCategory === 0) {
      setfilteredProducts(products);
    } else {
      const newFilteredProducts = products.filter(
        (product) => product.category_id === activedCategory,
      );

      setfilteredProducts(newFilteredProducts);
    }
  }, [activedCategory, products]);

  return (
    <Container>
      <ProductImg src={ProductLogo} alt="logo-do-produto" />
      <CategoryMenu>
        {categories &&
          categories.map((category) => {
            return (
              <StyleSheetManager
                key={category.id}
                shouldForwardProp={(prop) => prop !== 'isactived'}
              >
                <ButtonCategory
                  key={category.id}
                  onClick={() => {
                    setActivedCategory(category.id);
                  }}
                  isactived={activedCategory === category.id ? 'true' : ''}
                >
                  {category.name}
                </ButtonCategory>
              </StyleSheetManager>
            );
          })}
      </CategoryMenu>
      <ProductsContainer>
        {filteredProducts &&
          filteredProducts.map((product) => {
            return <CardProducts key={product.id} product={product} />;
          })}
      </ProductsContainer>
    </Container>
  );
}
