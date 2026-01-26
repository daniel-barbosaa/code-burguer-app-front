import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import paths from '../constants/paths';
import {
  Home,
  Login,
  Products,
  Register,
  Cart,
  Admin,
} from '../containers/index';
import PrivateRoute from './privete-route';

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route
          path="/produtos"
          element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          }
        />
        <Route
          path="/carrinho"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />

        <Route
          path={paths.Order}
          element={
            <PrivateRoute isadmin>
              <Admin />
            </PrivateRoute>
          }
        />
        <Route
          path={paths.Products}
          element={
            <PrivateRoute isadmin>
              <Admin />
            </PrivateRoute>
          }
        />
        <Route
          path={paths.NewProduct}
          element={
            <PrivateRoute isadmin>
              <Admin />
            </PrivateRoute>
          }
        />
        <Route
          path={paths.EditProduct}
          element={
            <PrivateRoute isadmin>
              <Admin />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default routes;
