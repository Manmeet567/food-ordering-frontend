import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {jwtDecode} from "jwt-decode"; 
import apiClient from "../../utils/apiClient"; 

// Login Thunk with token validation
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/login`,
        credentials
      );
      const { token } = response.data; 

      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < Date.now()) {
        return rejectWithValue({ message: "Token has expired" });
      }

      return { token }; 
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: error.message }
      );
    }
  }
);

// Signup Thunk (unchanged)
export const signup = createAsyncThunk(
  "auth/signup",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/signup`,
        credentials
      );
      console.log(response)
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: error.message }
      );
    }
  }
);

export const fetchUserData = createAsyncThunk(
  "auth/fetchUserData",
  async (userId, { rejectWithValue }) => {
    try {
      // Get the token from localStorage
      const storedData = JSON.parse(localStorage.getItem("user"));
      const token = storedData?.token; // Assuming token is stored in the format { token: 'your_token' }

      // If there's no token, reject the request
      if (!token) {
        return rejectWithValue("No authentication token found");
      }

      // Set the Authorization header with the Bearer token
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data; // Return the user data if the request is successful
    } catch (error) {
      return rejectWithValue("Failed to fetch user data");
    }
  }
);


const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    loading: false,
    error: null,
    user: null,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("user");  
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        const { token } = action.payload;
        state.loading = false;
        state.token = {token};
        state.error = null;

        // // Decode token and store user ID
        // const decodedToken = jwtDecode(token);
        // const userId = decodedToken._id;

        // Save the token in localStorage
        localStorage.setItem("user", JSON.stringify({ token }));

      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || action.error.message;
      })
      // Fetch user data after login/signup
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Signup
      .addCase(signup.pending, (state) => {
        state.loading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        const { token } = action.payload;
        state.loading = false;
        state.token = {token};
        state.error = null;

        // const decodedToken = jwtDecode(token);
        // const userId = decodedToken._id;

        localStorage.setItem("user", JSON.stringify({ token }));

      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
