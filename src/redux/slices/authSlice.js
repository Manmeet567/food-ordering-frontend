import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode'; // Add this line to decode JWT

// Login Thunk with token validation
export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/login`, credentials);
    const { email, token } = response.data; // Assume response contains { email, token }

    // Decode token to check expiry
    const decodedToken = jwtDecode(token);

    // Check if the token is expired
    if (decodedToken.exp * 1000 < Date.now()) {
      return rejectWithValue({ message: 'Token has expired' });
    }

    // Store the user and token
    return { email, token };
  } catch (error) {
    return rejectWithValue(error.response?.data || { message: error.message });
  }
});

// Signup Thunk (unchanged)
export const signup = createAsyncThunk('auth/signup', async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/signup`, credentials);
    return response.data; 
  } catch (error) {
    return rejectWithValue(error.response?.data || { message: error.message });
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('user'); // Clear user data from local storage on logout
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
        // Store user and token in localStorage
        localStorage.setItem('user', JSON.stringify(action.payload));
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || action.error.message;
      })
      .addCase(signup.pending, (state) => {
        state.loading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
        localStorage.setItem('user', JSON.stringify(action.payload));
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
