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

export const getOneRestaurant = createAsyncThunk(
  'restaurants/getOneRestaurant',
  async (restaurantSlug, { rejectWithValue }) => {
    try {
      const response = await apiClient.get(`/product-page/restaurant/${restaurantSlug}`);
      return response.data.restaurant; 
    } catch (error) {
      return rejectWithValue('Failed to fetch restaurant details');
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
        state.restaurants = action.payload; 
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getOneRestaurant.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOneRestaurant.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedRestaurant = action.payload; 
      })
      .addCase(getOneRestaurant.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { setSelectedRestaurant, clearSelectedRestaurant } = restaurantsSlice.actions;

export default restaurantsSlice.reducer;
