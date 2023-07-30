import React from "react";
import {
  CartList,
  Container,
  DeleteButton,
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
  const { cart, setCart } = useStateContext();

  const removeItem = (id, size) => {
    setCart((prev) =>
      prev.filter((item) => {
        if (item.id === id) {
          return item.size !== size;
        }
        return item;
      })
    );
  };

  if (!cart.length) {
    return (
      <Container>
        <TopBorder></TopBorder>
        <InnerContainer>
          <p>There is no cart items...</p>
        </InnerContainer>
      </Container>
    );
  }

  return (
    <Container>
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
              <DeleteButton onClick={() => removeItem(item.id, item.size)}>
                Remove
              </DeleteButton>
            </ItemContentBox>
          </CartList>
        ))}
      </InnerContainer>
    </Container>
  );
};

export default Cart;
