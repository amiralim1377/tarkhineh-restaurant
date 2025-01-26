import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  phoneNumber: "",
  orderHistory: [],
  favorites: [],
  addresses: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    addOrder: (state, action) => {
      state.orderHistory.push(action.payload);
    },
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    addAddress: (state, action) => {
      state.addresses.push(action.payload);
    },
    deleteAddress: (state, action) => {
      state.addresses = state.addresses.filter(
        (item) => item.id !== action.payload,
      );
    },
    editAddress: (state, action) => {
      const { id, updatedAddress } = action.payload;
      const index = state.addresses.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.addresses[index] = {
          ...state.addresses[index],
          ...updatedAddress,
        };
      }
    },
  },
});

export const {
  setName,
  setEmail,
  setPhoneNumber,
  addOrder,
  addFavorite,
  addAddress,
  deleteAddress,
  editAddress,
} = userSlice.actions;

export default userSlice.reducer;
