import React, { useEffect, useState } from "react";
import {
  ButtonContainer,
  ButtonGroup,
  Container,
  ContentBox,
  Description,
  Img,
  Label,
  Price,
  Size,
  Button,
  SubmitButton,
  Title,
  QuantityInput,
  Warning,
} from "./style";
import { useStateContext } from "../../context/StateContext";

const Product = () => {
  const [product, setProduct] = useState(null);
  const { setCart, cart } = useStateContext();
  const [input, setInput] = useState({ quantity: 1 });
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    fetchProductDetail();
  }, []);

  const fetchProductDetail = async () => {
    const result = await fetch(
      "https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product"
    );
    const product = await result.json();

    if (!product) {
      alert(`Error appears (${product.status})`);
      return new Error(product.status);
    }
    setProduct(product);
    setInput((prev) => ({
      ...prev,
      id: product.id,
      title: product.title,
      price: product.price,
      imageURL: product.imageURL,
    }));
  };

  const addToCart = () => {
    if (!input.title || !input.quantity || !input.imageURL || !input.size) {
      setWarning(true);
      return;
    }

    if (cart.find((item) => item.id === input.id && item.size === input.size)) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === input.id && item.size === input.size
            ? { ...item, quantity: Number(item.quantity) + Number(input.quantity) }
            : item
        )
      );
    } else {
      setCart((prev) => [...prev, input]);
    }

    setWarning(false);
    setInput( prev => ({...prev, quantity: 1, size: null}))
  };

  if (!product) {
    return;
  }

  return (
    <Container>
      <Img src={product.imageURL} alt="Celassic-Tee" />
      <ContentBox>
        <Title>{product.title}</Title>
        <Price>${product.price}</Price>
        <Description>{product.description}</Description>

        <ButtonContainer>
          <Label>
            SIZE<span style={{ color: "red" }}>*</span>{" "}
            <Size>{input.size}</Size>
          </Label>
          <ButtonGroup>
            {product.sizeOptions.map((size) => (
              <Button
                key={size.id}
                onClick={() =>
                  setInput((prev) => ({ ...prev, size: size.label }))
                }
                isactive={input.size === size.label}
              >
                {size.label}
              </Button>
            ))}
          </ButtonGroup>
          <ButtonContainer>
            <Label>Quantity</Label>
            <ButtonGroup>
              <QuantityInput
                onChange={(e) =>
                  setInput((prev) => ({ ...prev, quantity: e.target.value }))
                }
                type="number"
                min={1}
                value={Number(input.quantity)}
              />
            </ButtonGroup>
          </ButtonContainer>
          {warning && <Warning>Please select all detail.</Warning>}
          <SubmitButton onClick={addToCart}>ADD TO CART</SubmitButton>
        </ButtonContainer>
      </ContentBox>
    </Container>
  );
};

export default Product;
