import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], 
  totalAmount: 0, 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item._id === newItem._id);

      if (existingItem) {
        existingItem.item_count += 1; // Increment count if item exists
      } else {
        state.items.push({ 
          ...newItem, 
          item_count: 1, // Set count to 1 for a new item
        });
      }
      state.totalAmount += newItem.meal_price;
    },

    // Action to remove an item from the cart
    removeItem: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find(item => item._id === itemId);

      if (existingItem) {
        if (existingItem.item_count > 1) {
          existingItem.item_count -= 1; // Decrement count if more than 1
        } else {
          state.items = state.items.filter(item => item._id !== itemId); // Remove item if count is 1
        }
        state.totalAmount -= existingItem.meal_price;
      }
    },

    // Action to clear the entire cart
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

// Export actions and reducer
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
