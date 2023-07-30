import React, { useState } from "react";
import { Navbar, List, ListGroup } from "./style";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Header = () => {
  const [cartPopup, setCartPopup] = useState(false);
  const cart = useSelector(state => state.cart.items)

  return (
    <Navbar>
      <ListGroup>
        <List
          onClick={() => setCartPopup((prev) => !prev)}
          isactive={cartPopup ? "active" : undefined}
        >
          My Cart ( {cart.length} )
        </List>
        {cartPopup && <Cart />}
      </ListGroup>
    </Navbar>
  );
};

export default Header;
