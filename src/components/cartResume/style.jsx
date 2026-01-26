import styled from 'styled-components';

export const Container = styled.div`
  background: #ffffff;
  padding: 15px;
  border-radius: 20px;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .container-top {
    display: grid;
    grid-template-areas: 'title title' 'items items-price' 'price-tax delivery-tax-price';
    grid-gap: 10px 70px;

    .title {
      grid-area: title;
      margin-bottom: 20px;
    }

    .items {
      grid-area: items;
    }

    .items-price {
      grid-area: items-price;
    }

    .price-tax {
      grid-area: price-tax;
    }

    .delivery-tax-price {
      grid-area: delivery-tax-price;
    }
  }

  .container-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 20px;
    font-weight: bold;
    margin-top: 50px;
  }
`;
