import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  selectedItem: null,
  modalType: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state, action) {
      state.isOpen = true;
      state.selectedItem = action.payload.item; // مقدار سریالایزبل
      state.modalType = action.payload.type;
    },
    closeModal(state) {
      state.isOpen = false;
      state.selectedItem = null;
      state.modalType = null; // بازنشانی نوع مدال
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
