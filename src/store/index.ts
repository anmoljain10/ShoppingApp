// src/app/store.js

import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cart/cartSlice'; // Import your reducer

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // Add other reducers here
  },
});

export default store;
