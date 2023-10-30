import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import product from "./product";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
    product: product,
  },
});

export default store;
