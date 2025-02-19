import { createSlice } from "@reduxjs/toolkit";

const orderCategorySlice = createSlice({
  name: "orderCategory",
  initialState: "all",
  reducers: {
    setCategory: (state, action) => action.payload,
  },
});

export const { setCategory } = orderCategorySlice.actions;

export default orderCategorySlice.reducer;
