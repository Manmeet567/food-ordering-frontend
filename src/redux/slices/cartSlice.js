import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import apiClient from '../../utils/apiClient';

const initialState = {
  items: [],
  totalAmount: 0,
  showCart: false,
  status: 'idle', // for handling loading state
  error: null, // for handling errors
};

// Async thunk to fetch cart data
export const fetchCartData = createAsyncThunk('cart/fetchCartData', async (userId) => {
  const response = await apiClient.get(`/cart/${userId}`);
  return response.data; 
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item._id === newItem._id);

      if (existingItem) {
        existingItem.item_count += 1;
      } else {
        state.items.push({
          ...newItem,
          item_count: 1,
        });
      }
      state.totalAmount += newItem.meal_price;
    },

    removeItem: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find(item => item._id === itemId);

      if (existingItem) {
        if (existingItem.item_count > 1) {
          existingItem.item_count -= 1;
        } else {
          state.items = state.items.filter(item => item._id !== itemId);
        }
        state.totalAmount -= existingItem.meal_price;
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },

    setShowCart: (state, action) => {
      state.showCart = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCartData.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.totalAmount = action.payload.totalAmount;
        state.status = 'succeeded';
      })
      .addCase(fetchCartData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addItem, removeItem, clearCart, setShowCart } = cartSlice.actions;
export default cartSlice.reducer;
