
import { configureStore } from '@reduxjs/toolkit'; 
import rootReducer from './FetchProductsActionReducer';
import cartReducer from './addToCartActionReducer';

export const store = configureStore({
  reducer: {
    products: rootReducer,
    cartItems: cartReducer
  },
});

export default store;
