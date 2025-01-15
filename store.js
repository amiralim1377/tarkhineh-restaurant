import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./src/Slice/cartSlice/cartSlice";
import branchesReducer from "./src/Slice/branchesSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    branches: branchesReducer,
  },
});

export default store;
