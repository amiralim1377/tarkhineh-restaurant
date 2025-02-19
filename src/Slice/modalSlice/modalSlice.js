import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  selectedItem: null,
  modalType: null,
  modalId: null, // اضافه کردن modalId به حالت اولیه
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state, action) {
      state.isOpen = true;
      state.selectedItem = action.payload.item;
      state.modalType = action.payload.type;
      state.modalId = action.payload.id; // اضافه کردن modalId به عملکرد openModal
    },
    closeModal(state) {
      state.isOpen = false;
      state.selectedItem = null;
      state.modalType = null;
      state.modalId = null; // تنظیم modalId به null در عملکرد closeModal
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
