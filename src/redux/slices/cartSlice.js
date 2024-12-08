import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../utils/apiClient";

const initialState = {
  items: [],
  totalAmount: 0,
  showCart: false,
  status: "idle", 
  error: null,
};

// Async thunk to fetch cart data
export const fetchCartData = createAsyncThunk(
  "cart/fetchCartData",
  async (userId) => {
    const response = await apiClient.get(`/cart/${userId}`);
    return response.data;
  }
);

// Async thunk to save cart data (add or remove items)
export const saveCartData = createAsyncThunk(
  "cart/saveCartData",
  async ({ userId, itemId, item_name, item_price, item_img, item_count }, { rejectWithValue }) => {
    try {
      const response = await apiClient.post("/cart/save-cart", {
        userId,
        itemId,
        item_name,
        item_price,
        item_img,
        item_count,
      });
      return response.data; 
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item._id === newItem._id);

      if (existingItem) {
        existingItem.item_count += 1;
      } else {
        state.items.push({
          ...newItem,
          item_count: 1,
        });
      }
      state.totalAmount += newItem.item_price;
    },

    removeItem: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item._id === itemId);

      if (existingItem) {
        if (existingItem.item_count > 1) {
          existingItem.item_count -= 1;
        } else {
          state.items = state.items.filter((item) => item._id !== itemId);
        }
        state.totalAmount -= existingItem.item_price;
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
    // Handling fetchCartData cases
    builder
      .addCase(fetchCartData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCartData.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.totalAmount = action.payload.totalAmount;
        state.status = "succeeded";
      })
      .addCase(fetchCartData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    // Handling saveCartData cases
    builder
      .addCase(saveCartData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(saveCartData.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.totalAmount = action.payload.totalAmount; 
        state.status = "succeeded";
      })
      .addCase(saveCartData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      });
  },
});

export const { addItem, removeItem, clearCart, setShowCart } = cartSlice.actions;
export default cartSlice.reducer;
