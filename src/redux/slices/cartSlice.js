import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], 
  totalAmount: 0, 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Action to add an item to the cart
    addItem: (state, action) => {
      const item = action.payload;
      state.items.push(item);
      state.totalAmount += item.meal_price;
    },

    // Action to remove an item from the cart
    removeItem: (state, action) => {
      const itemId = action.payload; // Pass the item ID to remove
      const existingItemIndex = state.items.findIndex(item => item._id === itemId);

      if (existingItemIndex !== -1) {
        // Subtract the price of the item being removed
        state.totalAmount -= state.items[existingItemIndex].meal_price;
        // Remove the item from the cart
        state.items.splice(existingItemIndex, 1);
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
