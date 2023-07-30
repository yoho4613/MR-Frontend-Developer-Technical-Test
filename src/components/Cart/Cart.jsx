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
// import { useStateContext } from "../../context/StateContext";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/slices/cart";

const Cart = () => {
  // const { cart } = useStateContext();
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const deleteItem = (item) => {
    dispatch(removeFromCart(item));
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
              <DeleteButton
                onClick={() => deleteItem({ id: item.id, size: item.size })}
              >
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
