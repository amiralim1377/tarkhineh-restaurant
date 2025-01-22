import { configureStore } from "@reduxjs/toolkit";
import branchesReducer from "./src/Slice/branchesSlice/branchesSlice";
import categoryReducer from "./src/Slice/categorySlice/categorySlice";
import searchReducer from "./src/Slice/searchSlice/searchSlice";
import menuReducer from "./src/Slice/menuSlice/menuSlice";
import cartReducer from "./src/Slice/cartSlice/cartSlice";
import modalReducer from "./src/Slice/modalSlice/modalSlice";

const store = configureStore({
  reducer: {
    branches: branchesReducer,
    category: categoryReducer,
    menu: menuReducer,
    search: searchReducer,
    cart: cartReducer,
    modal: modalReducer,
  },
});

export default store;
