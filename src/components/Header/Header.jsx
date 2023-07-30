import React, { useState } from "react";
import { Navbar, List, ListGroup } from "./style";
import { useStateContext } from "../../context/StateContext";
import Cart from "../Cart/Cart";

const Header = () => {
  const { cart } = useStateContext();
  const [cartPopup, setCartPopup] = useState(false);

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
