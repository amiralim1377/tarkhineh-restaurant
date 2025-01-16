import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory: "main",
  selectedSubCategory: "all",
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSubCategory: (state, action) => {
      state.selectedSubCategory = action.payload;
    },
  },
});

export const { setCategory, setSubCategory } = categorySlice.actions;

export default categorySlice.reducer;
