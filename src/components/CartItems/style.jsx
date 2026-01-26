import styled from 'styled-components';

export const Container = styled.div`
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.03);
  padding: 10px;
  width: max-content;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  border-bottom: 1px solid #b5b5b5;

  p {
    font-size: 16px;
    color: #9e9d9d;
  }
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: max-content;
  grid-gap: 10px 5px;
  padding: 10px;

  img {
    border-radius: 10px;
    width: 120px;
  }

  p {
    font-size: 16px;
    color: #000;
  }

  .quantity-container {
    display: flex;
    gap: 20px;

    button {
      height: 30px;
      background: transparent;
      border: none;
      font-size: 24px;
      cursor: pointer;
    }

    p {
      margin-top: 5px;
      font-weight: bold;
    }
  }

  .price-item {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 15px;

    img {
      cursor: pointer;
    }
  }
`;

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
  font-weight: bold;

  p {
    margin-bottom: 30px;
  }
`;
