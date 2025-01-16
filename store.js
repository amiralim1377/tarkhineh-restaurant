import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./src/Slice/cartSlice/cartSlice";
import branchesReducer from "./src/Slice/branchesSlice/branchesSlice";
import categoryReducer from "./src/Slice/categorySlice/categorySlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    branches: branchesReducer,
    category: categoryReducer,
  },
});

export default store;
