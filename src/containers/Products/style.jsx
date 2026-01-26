import styled from 'styled-components';

export const Container = styled.div`
  background: #efefef;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 390px;
`;

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 30px;
`;

export const ButtonCategory = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  color: ${(props) => (props.isactived ? '#9758A6' : '#9A9A9D')};
  font-family: Roboto;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-bottom: ${(props) =>
    props.isactived ? '2px solid #9758A6' : '#9A9A9D'};
  padding: 5px;
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-items: center;
  margin-top: 40px;
  padding-bottom: 60px;
`;
