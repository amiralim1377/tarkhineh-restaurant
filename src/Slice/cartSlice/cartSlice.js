import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalPrice: 0,
  discountCode: null,
  deliveryMethod: "delivery",
  additionalComments: "",
  paymentMethod: "online",
  address: [],
  deliveryCost: 0,
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
        // Update quantity and total price if item exists
        existingItem.quantity += item.quantity;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        // Add new item to cart
        item.totalPrice = item.quantity * item.price;
        state.cart.push(item);
      }
      state.totalPrice += item.price * item.quantity; // Update total price
    },
    deleteItem(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        state.totalPrice -= item.totalPrice; // Deduct item price from total
      }
      state.cart = state.cart.filter((item) => item.id !== action.payload); // Remove item from cart
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++; // Increase item quantity
        item.totalPrice = item.quantity * item.price; // Recalculate item total price
        state.totalPrice += item.price; // Increase total price
      }
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity--; // Decrease item quantity
        item.totalPrice = item.quantity * item.price; // Recalculate item total price
        state.totalPrice -= item.price; // Decrease total price
        if (item.quantity === 0) {
          state.cart = state.cart.filter((cartItem) => cartItem.id !== item.id); // Remove item from cart if quantity is 0
        }
      }
    },
    clearCart(state) {
      state.cart = []; // Clear the cart
      state.totalPrice = 0; // Reset the total price
    },
    applyDiscount(state, action) {
      state.discountCode = action.payload.code; // Apply discount code
      state.totalPrice -= action.payload.discount; // Deduct discount from total price
    },
    setDeliveryMethod(state, action) {
      state.deliveryMethod = action.payload; // Set delivery method
    },
    setAdditionalComments(state, action) {
      state.additionalComments = action.payload; // Set additional comments
    },
    setPaymentMethod(state, action) {
      state.paymentMethod = action.payload; // Set payment method
    },
    setAddress(state, action) {
      // Add the new address object to the address array
      state.address.push(action.payload);
    },
    setDeliveryCost(state, action) {
      state.deliveryCost = action.payload;
    },
  },
});

// Selector for cart items
const selectCartSlice = (state) => state.cart;

const selectCart = createSelector(
  [selectCartSlice],
  (cartSlice) => cartSlice?.cart ?? [],
);

// Selector for total items in cart
const selectTotalItems = createSelector([selectCart], (cart) =>
  cart.reduce((total, item) => total + item.quantity, 0),
);

// Selector for total discount
const selectTotalDiscount = createSelector([selectCart], (cart) =>
  cart.reduce(
    (total, item) =>
      total + (item.price - item.discounted_price) * item.quantity,
    0,
  ),
);

// Selector for total price
const selectTotalPrice = createSelector([selectCart], (cart) =>
  cart.reduce((total, item) => total + item.price * item.quantity, 0),
);

// Selector for total price considering discounts
const selectTotalPriceWithDiscount = createSelector([selectCart], (cart) => {
  return cart.reduce((total, item) => {
    // If the discounted price is available, use it. Otherwise, use the original price.
    const effectivePrice = item.discounted_price
      ? item.discounted_price
      : item.price;
    return total + effectivePrice * item.quantity; // Multiply by quantity and add to total.
  }, 0);
});

export {
  selectTotalItems,
  selectTotalDiscount,
  selectTotalPrice,
  selectTotalPriceWithDiscount,
};

export const {
  addToCart,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
  applyDiscount,
  setDeliveryMethod,
  setAdditionalComments,
  setPaymentMethod,
  setAddress,
  setDeliveryCost,
} = cartSlice.actions;

export default cartSlice.reducer;
