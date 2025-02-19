import { configureStore } from "@reduxjs/toolkit";
import branchesReducer from "./src/Slice/branchesSlice/branchesSlice";
import categoryReducer from "./src/Slice/categorySlice/categorySlice";
import searchReducer from "./src/Slice/searchSlice/searchSlice";
import menuReducer from "./src/Slice/menuSlice/menuSlice";
import cartReducer from "./src/Slice/cartSlice/cartSlice";
import modalReducer from "./src/Slice/modalSlice/modalSlice";
import userReducer from "./src/Slice/userSlice/userSlice";
import authReducer from "./src/Slice/authSlice/authSlice";
import orderCategoryReducer from "./src/Slice/orderCategorySlice/orderCategorySlice";

const store = configureStore({
  reducer: {
    branches: branchesReducer,
    category: categoryReducer,
    menu: menuReducer,
    search: searchReducer,
    cart: cartReducer,
    modal: modalReducer,
    user: userReducer,
    auth: authReducer,
    orderCategory: orderCategoryReducer,
  },
});

export default store;
