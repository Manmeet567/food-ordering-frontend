import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import navReducer from './slices/navSlice';
import restaurantsReducer from './slices/restaurantsSlice';
import cartReducer from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    navbar: navReducer,
    restaurants: restaurantsReducer,
    cart: cartReducer
  },
  
});
