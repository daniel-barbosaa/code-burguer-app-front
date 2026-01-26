import LogoutIcon from '@mui/icons-material/Logout';
import React from 'react';
import { StyleSheetManager } from 'styled-components';

import { useUser } from '../../hooks/UserContext';
import menuList from './menu-list';
import { Container, ItemContainer, ListLink } from './style';

export function SideMenuAdmin({ path }) {
  const { userLogOut } = useUser();
  const filteredProps = ['isactive'];

  return (
    <Container>
      <hr />
      {menuList &&
        menuList.map((item) => (
          <StyleSheetManager
            key={item.id}
            shouldForwardProp={(prop) => !filteredProps.includes(prop)}
          >
            <ItemContainer
              key={item.id}
              isactive={path === item.link ? 'true' : ''}
            >
              <item.icon className="icon" />
              <ListLink to={item.link}>{item.label}</ListLink>
            </ItemContainer>
          </StyleSheetManager>
        ))}
      <hr />

      <ItemContainer style={{ position: 'fixed', bottom: '0px' }}>
        <LogoutIcon style={{ color: '#ffffff' }} />
        <ListLink to="/login" onClick={userLogOut}>
          Sair
        </ListLink>
      </ItemContainer>
    </Container>
  );
}
