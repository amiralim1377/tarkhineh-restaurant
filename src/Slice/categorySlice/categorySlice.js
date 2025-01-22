import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory: "",
  selectedSubCategory: {
    id: "",
    name: "",
    name_Fa: "",
  },
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSubCategory: (state, action) => {
      state.selectedSubCategory = {
        id: action.payload.id,
        name: action.payload.name,
        name_fa: action.payload.name_fa,
      };
    },
  },
});

export const { setCategory, setSubCategory } = categorySlice.actions;

export default categorySlice.reducer;
