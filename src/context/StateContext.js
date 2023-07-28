import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const StateContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <UserContext.Provider
      value={{
        cart,
        setCart,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useStateContext = () => useContext(UserContext);
