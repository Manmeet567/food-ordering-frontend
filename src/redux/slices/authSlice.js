import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import apiClient from "../../utils/apiClient";
import { toast } from "react-toastify";

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
      console.log(response);
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
      const token = storedData?.token;

      if (!token) {
        return rejectWithValue("No authentication token found");
      }
      const response = await apiClient.get(`/user/${userId}`, {});

      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to fetch user data");
    }
  }
);

export const addAddress = createAsyncThunk(
  "auth/addAddress",
  async (addressData, { rejectWithValue }) => {
    try {
      const response = await apiClient.post("/user/add-address", addressData);
      return response.data; // response contains updated user object
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: error.message }
      );
    }
  }
);

export const editAddress = createAsyncThunk(
  "auth/editAddress",
  async ({ addressId, addressData }, { rejectWithValue }) => {
    try {
      const response = await apiClient.put(
        `/user/address/${addressId}`,
        addressData
      );
      return response.data; // response contains updated user object
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: error.message }
      );
    }
  }
);

export const removeAddress = createAsyncThunk(
  "auth/removeAddress",
  async ({ addressId }, { rejectWithValue }) => {
    try {
      const response = await apiClient.delete(`/user/address/${addressId}`);

      return { addressId };
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: error.message }
      );
    }
  }
);

export const addPaymentMethod = createAsyncThunk(
  "auth/addPaymentMethod",
  async (paymentData, { rejectWithValue }) => {
    try {
      const response = await apiClient.post(
        "/user/add-payment-method",
        paymentData
      );
      return response.data; // response contains updated user object
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: error.message }
      );
    }
  }
);

export const editPaymentMethod = createAsyncThunk(
  "auth/editPaymentMethod",
  async ({ paymentMethodId, paymentData }, { rejectWithValue }) => {
    try {
      const response = await apiClient.put(
        `/user/payment-method/${paymentMethodId}`,
        paymentData
      );
      return response.data; // response contains updated user object
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: error.message }
      );
    }
  }
);

export const removePaymentMethod = createAsyncThunk(
  "auth/removePaymentMethod",
  async ({ paymentMethodId }, { rejectWithValue }) => {
    try {
      const response = await apiClient.delete(
        `/user/payment-method/${paymentMethodId}`
      );
      return { paymentMethodId }; // return the removed payment method's ID
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: error.message }
      );
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
        state.token = { token };
        state.error = null;

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
        state.token = { token };
        state.error = null;

        localStorage.setItem("user", JSON.stringify({ token }));
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || action.error.message;
      })
      // Add Address
      .addCase(addAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(addAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        toast.success("Address Added");
        state.error = null;
      })
      .addCase(addAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || action.error.message;
        toast.error(action.payload?.message || action.error.message);
      })
      // Edit Address
      .addCase(editAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(editAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user; // update user with the latest data
        toast.success("Saved!");
        state.error = null;
      })
      .addCase(editAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || action.error.message;
        toast.error(action.payload?.message || action.error.message);
      })
      // Remove Address
      .addCase(removeAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeAddress.fulfilled, (state, action) => {
        state.loading = false;
        // Filter out the removed address from the user's addresses
        state.user.addresses = state.user.addresses.filter(
          (address) => address._id !== action.payload.addressId
        );
        toast.success("Address removed!");
        state.error = null;
      })
      .addCase(removeAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || action.error.message;
        toast.error(state.error);
      })
      // Add Payment Method
      .addCase(addPaymentMethod.pending, (state) => {
        state.loading = true;
      })
      .addCase(addPaymentMethod.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user; // update user with the latest data
        toast.success("Successfully added payment method");
        state.error = null;
      })
      .addCase(addPaymentMethod.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || action.error.message;
        toast.error(state.error);
      })
      // Edit Payment Method
      .addCase(editPaymentMethod.pending, (state) => {
        state.loading = true;
      })
      .addCase(editPaymentMethod.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user; // update user with the latest data
        toast.success("Saved!");
        state.error = null;
      })
      .addCase(editPaymentMethod.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || action.error.message;
        toast.error(state.error);
      })
      // Remove Payment Method
      .addCase(removePaymentMethod.pending, (state) => {
        state.loading = true;
      })
      .addCase(removePaymentMethod.fulfilled, (state, action) => {
        state.loading = false;
        // Filter out the removed payment method from user's payment methods
        state.user.payment_methods = state.user.payment_methods.filter(
          (method) => method._id !== action.payload.paymentMethodId
        );
        toast.success("Payment method removed");
        state.error = null;
      })
      .addCase(removePaymentMethod.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
