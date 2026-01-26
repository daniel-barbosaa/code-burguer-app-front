import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  height: 72px;
  background: #fff;
  box-shadow: 2px 3px 5px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;
export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
`;
export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const ContainerText = styled.div`
  color: #555;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
export const PageLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => (props.isactive ? '#9758A6' : '#555555')};
  font-size: 16px;
  line-height: 19px;
  font-weight: ${(props) => (props.isactive ? 'bold' : 'normal')};
`;
export const Line = styled.div`
  height: 40px;
  border-right: 0.5px solid #bababa;
`;

export const PageLinkLogOut = styled.div`
  color: #9758a6;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;
