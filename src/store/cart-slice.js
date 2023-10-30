import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const nawItem = action.payload;
      const existingItem = state.items.find((item) => item.id === nawItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: nawItem.id,
          price: nawItem.price,
          quantity: 1,
          totalPrice: nawItem.price,
          name: nawItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + nawItem.price;
      }
    },

    removeItemFormCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      state.totalQuantity--;
      state.quantity--;
      state.changed = true;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
        existingItem.quantity--;
      }
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice;
