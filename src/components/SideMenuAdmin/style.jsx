import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  background: #3c3c3c;
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.15);
  width: 300px;
  top: 0;
  left: 0;

  hr {
    height: 0.993px;
    background: var(--gray-gray-5, #e9ecef);
    margin: 80px 50px;
  }
`;

export const ListLink = styled(Link)`
  color: #fff;
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
  margin-left: 5px;
`;

export const ItemContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 2px;
  background: ${(props) => (props.isactive ? '#565656' : 'none')};
  margin: 10px;
  padding-left: 15px;

  .icon {
    color: #ffffff;
  }
`;
