import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../utils/apiClient'; 

// Async thunk to fetch restaurants
export const fetchRestaurants = createAsyncThunk(
  'restaurants/fetchRestaurants',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { restaurants } = getState().restaurants;
      if (restaurants.length > 0) {
        return restaurants; 
      }
      
      const response = await apiClient.get('/home-page/restaurants');
      return response.data.restaurants; 
    } catch (error) {
      return rejectWithValue('Failed to fetch restaurants data');
    }
  }
);

const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: {
    restaurants: [], // Initial state for restaurants data
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.loading = false;
        state.restaurants = action.payload; // Set the restaurants data
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default restaurantsSlice.reducer;
