/* eslint-disable operator-assignment */
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext({});

export function CartProvider({ children }) {
  const [cartProducts, setCartProduts] = useState([]);

  const updateLocalStorage = async (products) => {
    await localStorage.setItem(
      'codeburguer:cartInfo',
      JSON.stringify(products),
    );
  };
  const putProdutsInCart = async (product) => {
    const cartIndex = cartProducts.findIndex((item) => item.id === product.id);

    let newCartProduts = [];
    if (cartIndex >= 0) {
      newCartProduts = cartProducts;
      newCartProduts[cartIndex].quantity =
        newCartProduts[cartIndex].quantity + 1;

      setCartProduts(newCartProduts);
    } else {
      product.quantity = 1;
      newCartProduts = [...cartProducts, product];
      setCartProduts(newCartProduts);
    }

    await updateLocalStorage(newCartProduts);
  };

  const deleteProducts = async (productId) => {
    const newCart = cartProducts.filter((item) => item.id !== productId);

    setCartProduts(newCart);
    await updateLocalStorage(newCart);
  };

  const increaseProducts = async (productId) => {
    const newCart = cartProducts.map((product) => {
      return product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product;
    });

    setCartProduts(newCart);
    await updateLocalStorage(newCart);
  };

  const decreaseProducts = async (productId) => {
    const cartIndex = cartProducts.findIndex((item) => item.id === productId);

    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map((product) => {
        return product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product;
      });
      setCartProduts(newCart);
      await updateLocalStorage(newCart);
    }
  };

  useEffect(() => {
    const loadUserData = async () => {
      const clientCartData = await localStorage.getItem('codeburguer:cartInfo');

      if (clientCartData) {
        setCartProduts(JSON.parse(clientCartData));
      }
    };

    loadUserData();
  }, []);

  return (
    <CartContext.Provider
      value={{
        putProdutsInCart,
        cartProducts,
        increaseProducts,
        decreaseProducts,
        deleteProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart deve ser com User Context!');
  }

  return context;
};
