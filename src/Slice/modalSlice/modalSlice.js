import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  selectedItem: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state, action) {
      state.isOpen = true;
      state.selectedItem = action.payload; // Set the selected item when opening the modal
    },
    closeModal(state) {
      state.isOpen = false;
      state.selectedItem = null; // Clear the selected item when closing the modal
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
