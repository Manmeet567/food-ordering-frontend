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
    restaurants: [], 
    selectedRestaurant: null,
    loading: false,
    error: null
  },
  reducers: {
    setSelectedRestaurant: (state, action) => {
      state.selectedRestaurant = action.payload;
    },
    clearSelectedRestaurant: (state) => {
      state.selectedRestaurant = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.loading = false;
        state.restaurants = action.payload; // Set the fetched restaurants data
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

// Export the actions
export const { setSelectedRestaurant, clearSelectedRestaurant } = restaurantsSlice.actions;

export default restaurantsSlice.reducer;
