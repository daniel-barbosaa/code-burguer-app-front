import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Car from '../../assets/ico-car.png';
import Pessoa from '../../assets/ico-pessoa.png';
import { useUser } from '../../hooks/UserContext';
import {
  Container,
  ContainerLeft,
  PageLink,
  ContainerRight,
  ContainerText,
  Line,
  PageLinkLogOut,
} from './style';

export function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { userLogOut, userData } = useUser();

  const logOut = () => {
    userLogOut();
    navigate('/login');
  };

  return (
    <Container>
      <ContainerLeft>
        <PageLink to="/" isactive={pathname === '/' ? 'true' : ''}>
          Home
        </PageLink>
        <PageLink
          to="/produtos"
          isactive={pathname.includes('produtos') ? 'true' : ''}
        >
          Ver produtos
        </PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink to="/carrinho">
          <img src={Car} alt="logo-carrinho" />
        </PageLink>
        <Line />
        <PageLink>
          <img src={Pessoa} alt="logo-pessoa" />
        </PageLink>
        <ContainerText>
          <p>
            Olá
            {', '}
            {userData.name}
          </p>
          <PageLinkLogOut onClick={logOut}>Sair</PageLinkLogOut>
        </ContainerText>
      </ContainerRight>
    </Container>
  );
}
