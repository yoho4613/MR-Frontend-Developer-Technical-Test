import React from "react";
import {
  CartList,
  Container,
  InnerContainer,
  ItemContentBox,
  ItemImg,
  ItemPrice,
  ItemPriceContainer,
  ItemSize,
  ItemTitle,
  TopBorder,
} from "./style";
import { useStateContext } from "../../context/StateContext";

const Cart = () => {

  const { cart } = useStateContext();

  if(!cart.length) {
    return (
      <Container>
      <TopBorder></TopBorder>
        <InnerContainer>
          <p>There is no cart items...</p>
        </InnerContainer>
      </Container>
    )
  }

  return (
    <Container >
      <TopBorder></TopBorder>
      <InnerContainer>
        {cart.map((item, i) => (
          <CartList key={i}>
            <ItemImg src={item.imageURL} />
            <ItemContentBox>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemPriceContainer>
                {item.quantity}x{" "}
                <ItemPrice>${item.price * item.quantity}</ItemPrice>
              </ItemPriceContainer>
              <ItemSize>Size: {item.size}</ItemSize>
            </ItemContentBox>
          </CartList>
        ))}
      </InnerContainer>
    </Container>
  );
};

export default Cart;
