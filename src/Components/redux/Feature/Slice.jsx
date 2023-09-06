import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const CartSlice = createSlice({
  name: "CartSlice",
  initialState,
  reducers: {
    // Add to Cart

    addToCart: (state, action) => {
      const existingItem = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItem >= 0) {
        state.cart[existingItem].qnty += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        state.cart = [...state.cart, temp];
      }
    },

    // Remove Single Item

    removeSingle: (state, action) => {
      const filterItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = filterItem;
    },

    // Qnty reduce

    reduceQty: (state, action) => {
      const existingItem = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItem >= 0 && state.cart[existingItem].qnty > 1) {
        state.cart[existingItem].qnty -= 1;
      }
    },

    // Clear cart

    clearCart: (state, action) => {
        state.cart=[];
    },
  },
});

export const { addToCart, removeSingle, reduceQty,clearCart } = CartSlice.actions;

export default CartSlice.reducer;
