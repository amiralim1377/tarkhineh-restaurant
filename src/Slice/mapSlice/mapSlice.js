import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  position: null,
};

const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setPosition(state, action) {
      state.position = action.payload;
    },
    resetPosition(state) {
      state.position = null;
    },
  },
});

export const { setPosition, resetPosition } = mapSlice.actions;

export default mapSlice.reducer;
