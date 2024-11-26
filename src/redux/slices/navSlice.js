import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeLink: "Home", 
};

const navSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setActiveLink: (state, action) => {
      state.activeLink = action.payload;
    },
  },
});

export const { setActiveLink } = navSlice.actions;
export default navSlice.reducer;
