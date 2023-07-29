import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(100%);
  border: 1px solid #888;
  border-top: none;
  width: 34rem;
  height: auto;
  background-color: #fff;

  @media (max-width: 480px) {
    width: 90vw;
  }
`;

export const TopBorder = styled.div`
  width: 24rem;
  border-top: 1px solid #888;
  @media (max-width: 480px) {
    width: calc(90vw - 10rem)
  }
`;

export const InnerContainer = styled.div`
  padding: 2.5rem;
`;

export const CartList = styled.li`
  display: flex;
  list-style: none;
  margin-bottom: 2.5rem;
`;

export const ItemImg = styled.img`
  width: 10rem;
  margin-right: 3rem;
`;

export const ItemContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemTitle = styled.h4`
  font-weight: 100;
  font-size: 2rem;
`;

export const ItemPriceContainer = styled.p`
  ${'' /* font-size: 1.4rem; */}
  margin: 2rem 0;
`;

export const ItemPrice = styled.span`
  font-weight: 600;
`;

export const ItemSize = styled.p`
  ${'' /* font-size: 1.4rem; */}
`;
