import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalPrice: 0,
  discountCode: null,
  discountAmount: 0,
  extraDiscountAmount: 0,
  deliveryMethod: "delivery",
  additionalComments: "",
  paymentMethod: "online",
  address: null,
  deliveryCost: 0,
  deliveryTime: 0,
  preparationTime: 0,
  totalTime: 0,
  distance: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id,
      );
      if (existingItem) {
        existingItem.quantity += item.quantity;
        existingItem.totalPrice =
          existingItem.quantity *
          (existingItem.discounted_price ?? existingItem.price);
      } else {
        item.totalPrice = item.quantity * (item.discounted_price ?? item.price);
        state.cart.push(item);
      }
      state.totalPrice += (item.discounted_price ?? item.price) * item.quantity;
    },
    deleteItem(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        state.totalPrice -= item.totalPrice;
      }
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * (item.discounted_price ?? item.price);
        state.totalPrice += item.discounted_price ?? item.price;
      }
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity--;
        item.totalPrice = item.quantity * (item.discounted_price ?? item.price);
        state.totalPrice -= item.discounted_price ?? item.price;
        if (item.quantity === 0) {
          state.cart = state.cart.filter((cartItem) => cartItem.id !== item.id);
        }
      }
    },
    clearCart(state) {
      state.cart = [];
      state.totalPrice = 0;
    },
    applyDiscount(state, action) {
      state.discountCode = action.payload.code;
      state.extraDiscountAmount = action.payload.amount;
    },
    setDeliveryMethod(state, action) {
      state.deliveryMethod = action.payload;
    },
    setAdditionalComments(state, action) {
      state.additionalComments = action.payload;
    },
    setPaymentMethod(state, action) {
      state.paymentMethod = action.payload;
    },
    setAddress(state, action) {
      if (state.deliveryMethod !== "in-person") {
        state.address = action.payload;
      }
    },
    setDeliveryCost(state, action) {
      state.deliveryCost = action.payload;
    },
    setDeliveryTime(state, action) {
      state.deliveryTime = action.payload;
      state.totalTime = state.deliveryTime + state.preparationTime; // Update totalTime when deliveryTime is set
    },
    resetDeliveryTime(state) {
      state.deliveryTime = 0;
      state.totalTime = state.deliveryTime + state.preparationTime; // Update totalTime when deliveryTime is reset
    },
    setPreparationTime(state, action) {
      state.preparationTime = action.payload;
      state.totalTime = state.deliveryTime + state.preparationTime; // Update totalTime when preparationTime is set
    },
    resetPreparationTime(state) {
      state.preparationTime = 0;
      state.totalTime = state.deliveryTime + state.preparationTime; // Update totalTime when preparationTime is reset
    },
    setDistance(state, action) {
      state.distance = action.payload;
    },
    resetDistance(state) {
      state.distance = 0;
    },
  },
});

const selectCartSlice = (state) => state.cart;

const selectCart = createSelector(
  [selectCartSlice],
  (cartSlice) => cartSlice?.cart ?? [],
);

const selectTotalItems = createSelector([selectCart], (cart) =>
  cart.reduce((total, item) => total + item.quantity, 0),
);

const selectTotalDiscount = createSelector([selectCart], (cart) =>
  cart.reduce((total, item) => {
    const discount =
      (item.price - (item.discounted_price ?? item.price)) * item.quantity;
    return total + (discount > 0 ? discount : 0);
  }, 0),
);

const selectExtraDiscount = createSelector(
  [selectCartSlice],
  (cartSlice) => cartSlice?.extraDiscountAmount ?? 0,
);

const selectTotalPrice = createSelector([selectCart], (cart) =>
  cart.reduce(
    (total, item) =>
      total + (item.discounted_price ?? item.price) * item.quantity,
    0,
  ),
);

const selectDeliveryCost = createSelector(
  [selectCartSlice],
  (cartSlice) => cartSlice?.deliveryCost ?? 0,
);

const selectTotalCost = createSelector(
  [selectTotalPrice, selectDeliveryCost, selectExtraDiscount],
  (totalPrice, deliveryCost, extraDiscount) =>
    totalPrice + deliveryCost - extraDiscount,
);

const selectDeliveryTime = createSelector(
  [selectCartSlice],
  (cartSlice) => cartSlice?.deliveryTime ?? 0,
);

const selectPreparationTime = createSelector(
  [selectCartSlice],
  (cartSlice) => cartSlice?.preparationTime ?? 0,
);

const selectTotalTime = createSelector(
  [selectCartSlice],
  (cartSlice) => cartSlice?.totalTime ?? 0,
);

const selectDistance = createSelector(
  [selectCartSlice],
  (cartSlice) => cartSlice?.distance ?? 0,
);

export const addCommentThunk = (comment) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(setAdditionalComments(comment));
    resolve("Success");
  });
};

export {
  selectTotalItems,
  selectTotalDiscount,
  selectExtraDiscount,
  selectTotalPrice,
  selectTotalCost,
  selectDeliveryCost,
  selectDeliveryTime,
  selectPreparationTime,
  selectTotalTime,
  selectDistance,
};

export const {
  addToCart,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
  applyDiscount,
  setExtraDiscountAmount,
  setDeliveryMethod,
  setAdditionalComments,
  setPaymentMethod,
  setAddress,
  setDeliveryCost,
  setDeliveryTime,
  resetDeliveryTime,
  setPreparationTime,
  resetPreparationTime,
  setDistance,
  resetDistance,
} = cartSlice.actions;

export default cartSlice.reducer;
