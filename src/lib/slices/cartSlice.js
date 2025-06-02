import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addProductToCart: (state, action) => {
        state.products.push(action.payload)
    },
  },
});

export const { addProductToCart } = cartSlice.actions;

export default cartSlice.reducer;
