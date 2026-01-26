/* eslint-disable import/no-named-as-default */
import React from 'react';
import { useLocation } from 'react-router-dom';

import { SideMenuAdmin } from '../../components/SideMenuAdmin';
import paths from '../../constants/paths';
import EditProduct from './EditProduct';
import ListProduts from './ListProduts';
import NewProduct from './NewProduct';
import Orders from './Orders';
import { Container, ContainerItems } from './style';

export function Admin() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <Container>
      <SideMenuAdmin path={pathname} />
      <ContainerItems>
        {location.pathname === paths.Order && <Orders />}
        {location.pathname === paths.Products && <ListProduts />}
        {location.pathname === paths.NewProduct && <NewProduct />}
        {location.pathname === paths.EditProduct && <EditProduct />}
      </ContainerItems>
    </Container>
  );
}
