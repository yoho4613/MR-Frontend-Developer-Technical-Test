import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(100%);
  border: 1px solid #888;
  border-top: none;
  width: 24rem;
  height: auto;
  background-color: #fff;
`;

export const TopBorder = styled.div`
  width: 14rem;
  border-top: 1px solid #888;
`;

export const InnerContainer = styled.div`
  padding: 2rem;
`;

export const CartList = styled.li`
  display: flex;
  list-style: none;
  justify-content: space-around;
  margin-bottom: 2rem;
`;

export const ItemImg = styled.img`
  width: 6rem;
`;

export const ItemContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemTitle = styled.h4`
  font-weight: 100;
`;

export const ItemPriceContainer = styled.p`
  font-size: 1.4rem;
  margin: 1rem 0;
`;

export const ItemPrice = styled.span`
  font-weight: 600;
`;

export const ItemSize = styled.p`
  font-size: 1.4rem;
`;
