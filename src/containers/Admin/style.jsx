import styled from 'styled-components';

import fundo from '../../assets/fundoadmin1.jpg';

export const Container = styled.div`
  background: url('${fundo}');
  background-repeat: no-repeat;
  background-size: auto;
  background-attachment: fixed;
  min-height: 100vh;
  display: flex;
  width: 100vw;
  justify-content: flex-start;
`;

export const ContainerItems = styled.div`
  padding: 20px;
  width: 100%;
`;
