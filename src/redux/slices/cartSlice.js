import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], 
  totalAmount: 0, 
  showCart: false, 
};

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

    // New action to toggle cart visibility
    toggleCart: (state) => {
      state.showCart = !state.showCart;
    },
    
    // Action to explicitly set cart visibility
    setShowCart: (state, action) => {
      state.showCart = action.payload;
    },
  },
});

export const { addItem, removeItem, clearCart, toggleCart, setShowCart } = cartSlice.actions;
export default cartSlice.reducer;
