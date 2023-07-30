import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const foundExisting = state.items.find(
        (el) => el.id === action.payload.id && el.size === action.payload.size
      );
      if (foundExisting) {
        state.items = state.items.map((item) =>
          item.id === action.payload.id && item.size === action.payload.size
            ? {
                ...item,
                quantity:
                  Number(item.quantity) + Number(action.payload.quantity),
              }
            : item
        );
      } else {
        state.items = [...state.items, action.payload];
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) =>
        item.id === action.payload.id ? item.size !== action.payload.size : true
      );
    },
  },
});

export const { addCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
