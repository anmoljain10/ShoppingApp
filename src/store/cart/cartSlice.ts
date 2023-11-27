// src/features/counterSlice.js

import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export type CartItemDetail = {
  qty: number;
  id: number;
  price: number;
  thumbnail: string;
  title: string;
};

type CartState = {
  cart: Array<CartItemDetail>;
  fav: Array<string>;
};

const initialState: CartState = {
  cart: [],
  fav: [],
};

// Create a slice with an initial state and reducers
const cartSlice = createSlice({
  name: 'cart', // Slice name
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    addFav: (state, action: PayloadAction<string>) => {
      state.fav = [...state.fav, action.payload];
    },
    removeFav: (state, action: PayloadAction<string>) => {
      const filteredFav = state.fav.filter(id => id !== action.payload);
      state.fav = filteredFav;
    },
    addToCart: (state, action) => {
      const productId = action.payload.productId;

      const productsArray = state.cart;

      const productIndex = productsArray.findIndex(
        product => productId === product.id,
      );

      if (
        productIndex === null ||
        productIndex === undefined ||
        productIndex === -1
      ) {
        state.cart.push({
          ...action.payload,
          id: productId,
          qty: 1,
        });
      } else {
        state.cart[productIndex].qty = state.cart[productIndex].qty + 1;
      }
    },
    removeFromCart: (state, action) => {
      const productIndex: number = state.cart.findIndex(
        product => product.id === action.payload,
      );
      if (productIndex !== -1) {
        const qty = state.cart[productIndex]?.qty;
        if (qty > 1) {
          state.cart[productIndex].qty = qty - 1;
        } else {
          state.cart = state.cart.filter(product => {
            return product.id !== action.payload;
          });
        }
      }
    },
  },
});

// Export the reducer and actions
export const {addToCart, removeFromCart, addFav, removeFav} = cartSlice.actions;

// Export the reducer function to be used in the store configuration
export default cartSlice.reducer;
