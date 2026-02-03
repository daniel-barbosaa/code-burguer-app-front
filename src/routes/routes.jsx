import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import paths from '../constants/paths';
import { Home, Login, Products, Register, Cart, Admin } from '../view/index';
import PrivateRoute from './privete-route';
import { DashboardUser } from '@/view/User/layout';
import { Foods } from '@/view/User/Foods';
import { CategoryPage } from '@/view/User/Category';

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
              <DashboardUser />
            </PrivateRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="comidas" element={<Foods />} />
          <Route path="/comidas/:slug" element={<CategoryPage />} />
          <Route path="/carrinho" element={<Cart />} />
        </Route>

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
