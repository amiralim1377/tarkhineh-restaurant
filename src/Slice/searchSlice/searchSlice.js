//reduxSlices/searchSlice.js

import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    setSearchQuery: (state, action) => action.payload,
    resetSearchQuery: () => "", // Adds reset functionality
  },
});

export const { setSearchQuery, resetSearchQuery } = searchSlice.actions;

export default searchSlice.reducer;
