import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {},
});

export const {} = cartSlice.actions;
export default cartSlice.reducer;
