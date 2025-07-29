import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import counterReducer from './counter';
import productReducer from './productSlice';

export default configureStore({
  reducer: {
    cart: cartReducer,
    count: counterReducer,
    products: productReducer,
  },
});