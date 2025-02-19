import { createSlice } from "@reduxjs/toolkit";
import supabase from "../../Services/supabase";

// Initial state for user data
const initialState = {
  name: "",
  familyName: "",
  email: "",
  phoneNumber: "",
  userName: "",
  orderHistory: [],
  favorites: [],
  addresses: [],
};

// Creating a user slice with actions
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Action to set the first name
    setFirstName: (state, action) => {
      state.name = action.payload;
    },
    // Action to set the family name
    setFamilyName: (state, action) => {
      state.familyName = action.payload;
    },
    // Action to set the email
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    // Action to set the phone number
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    // Action to set the username
    setUsername: (state, action) => {
      state.userName = action.payload;
    },
    // Action to add an order to the history
    addOrder: (state, action) => {
      state.orderHistory.push(action.payload);
    },
    // Action to add a favorite item
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    // Action to set the addresses
    setAddresses: (state, action) => {
      state.addresses = action.payload; // Replaces the entire list of addresses
    },
    // Action to add a new address
    addAddress: (state, action) => {
      state.addresses.push(action.payload); // Adds a new address
    },
    // Action to delete an address
    deleteAddress: (state, action) => {
      state.addresses = state.addresses.filter(
        (item) => item.id !== action.payload,
      );
    },
    // Action to edit an address
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
    // Action to set all user details
    setUserDetails: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetUser: () => initialState,
  },
});

// Exporting actions
export const {
  setFamilyName,
  setFirstName,
  setEmail,
  setPhoneNumber,
  setUsername,
  addOrder,
  addFavorite,
  setAddresses,
  addAddress,
  deleteAddress,
  editAddress,
  setUserDetails, // Exporting setUserDetails action
  resetUser,
} = userSlice.actions;

// Async action to fetch addresses from the server
export const fetchAddresses = () => async (dispatch) => {
  const { data: addresses, error } = await supabase
    .from("addresses")
    .select("*");
  if (error) {
    console.error("Error fetching addresses:", error.message);
    return;
  }
  dispatch(setAddresses(addresses));
};

// Exporting the reducer
export default userSlice.reducer;
