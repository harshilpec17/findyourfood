import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingId = state.cartItems.find(
        (item) => item?.card?.info?.id === action.payload.card.info.id
      );
      if (existingId) {
        state.cartItems = state.cartItems.map((item) =>
          item.card.info.id === action.payload.card.info.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                addedToCart: true,
              }
            : item
        );
      } else {
        state.cartItems = [
          ...state.cartItems,
          {
            ...action.payload,
            quantity: action.payload.quantity + 1,
            addedToCart: true,
          },
        ];
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.card.info.id !== action.payload.card.info.id
      );
    },
    increasedQuantity: (state, action) => {
      state.cartItems = state.cartItems.map((itemQuantity) =>
        itemQuantity.card.info.id === action.payload.card.info.id
          ? { ...itemQuantity, quantity: itemQuantity.quantity + 1 }
          : itemQuantity
      );
    },

    decreasedQuantity: (state, action) => {
      state.cartItems = state.cartItems.map((itemQuantity) =>
        itemQuantity.card.info.id === action.payload.card.info.id &&
        itemQuantity.quantity > 0
          ? {
              ...itemQuantity,
              quantity: itemQuantity.quantity - 1,
              addedToCart: itemQuantity.quantity - 1 > 0,
            }
          : { ...itemQuantity }
      );
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increasedQuantity,
  decreasedQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
