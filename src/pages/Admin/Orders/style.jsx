import ReactSelect from 'react-select';
import styled from 'styled-components';

export const Container = styled.div`
  background: #efefef;
  min-height: 100vh;
  border-radius: 10px;
  padding: 10px;
`;

export const ProductsImg = styled.img`
  width: 60px;
  border-radius: 5px;
`;

export const ReactSelectSyled = styled(ReactSelect)`
  width: 250px;

  .css-13cymwt-control {
    cursor: pointer;
    background: #efefef;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
  margin: 20px 0;
`;
export const LinkMenu = styled.a`
  color: #323d5d;
  cursor: pointer;
  font-weight: ${(props) => (props.isactivestatus ? 'bold' : '400')};
  border-bottom: ${(props) =>
    props.isactivestatus ? '2px solid #9758A6' : 'none'};
  padding-bottom: 5px;
`;
