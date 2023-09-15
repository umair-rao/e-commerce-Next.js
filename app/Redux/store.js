
import { configureStore } from '@reduxjs/toolkit'; 
import rootReducer from './actions';

export const store = configureStore({
  reducer: {
    products: rootReducer
  },
});

export default store;
