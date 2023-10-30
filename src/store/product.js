import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProduct = createAsyncThunk("getStudent", async (payload) => {
  return fetch("https://fakestoreapi.com/products/").then((res) => res.json());
});

export const productSlice = createSlice({
  name: "product",
  initialState: { product: [], status: "" },
  extraReducers: {
    [getProduct.pending]: (state, action) => {
      state.status = "pending";
    },
    [getProduct.fulfilled]: (state, action) => {
      state.status = "success";
      state.product = action.payload;
    },
    [getProduct.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default productSlice.reducer;
