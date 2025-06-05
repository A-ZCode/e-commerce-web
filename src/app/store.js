import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import productsReducer from '../feature/products/productsSlice';
import addressReducer from '../app/addressSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    address: addressReducer,
  },
});