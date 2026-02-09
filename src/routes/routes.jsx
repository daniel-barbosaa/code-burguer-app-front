import { BrowserRouter, Routes, Route } from 'react-router-dom';

import paths from '../constants/paths';
import { Login, Register, Admin, Menu } from '../view/index';
import PrivateRoute from './privete-route';
import { DashboardUser } from '@/view/User/layout';
import { Checkout } from '@/view/User/Checkout';
import { Orders } from '@/view/User/Orders';

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
          <Route index element={<Menu />} />
          <Route path="/meus-pedidos" element={<Orders />} />
        </Route>
        <Route path="/checkout" element={<Checkout />} />

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
