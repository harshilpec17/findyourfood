import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menuData: null,
    offers: null,
    info: null,
  },
  reducers: {
    addMenu: (state, action) => {
      state.menuData = action.payload;
    },
    addOffers: (state, action) => {
      state.offers = action.payload;
    },
    addInfo: (state, action) => {
      state.info = action.payload;
    },
  },
});

export const { addMenu, addOffers, addInfo } = menuSlice.actions;
export default menuSlice.reducer;
