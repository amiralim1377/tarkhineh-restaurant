import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    items: [],
    isLoading: false,
    isError: false,
  },
  reducers: {
    setMenuItems: (state, action) => {
      state.items = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.isError = action.payload;
    },
  },
});

export const { setMenuItems, setLoading, setError } = menuSlice.actions;
export default menuSlice.reducer;
