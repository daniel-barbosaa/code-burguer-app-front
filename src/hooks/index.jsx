import React from 'react';

import { CartProvider } from './CartContext';
import { UserProvider } from './UserContext';

function AppProvider({ children }) {
  return (
    <CartProvider>
      <UserProvider>{children}</UserProvider>
    </CartProvider>
  );
}

export default AppProvider;
