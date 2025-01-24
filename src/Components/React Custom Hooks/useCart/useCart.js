import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} from "../../../Slice/cartSlice/cartSlice.js";
import { omit } from "lodash";
import useModal from "../useModal/useModal.js";

const useCart = () => {
  const dispatch = useDispatch();
  const cartSlice = useSelector((state) => state.cart?.cart);
  const { closeModalHandler } = useModal();

  const handleAddToCart = (item) => {
    const filteredItem = omit(item, ["economic_subcategory_id", "priority"]);
    const itemWithQuantity = { ...filteredItem, quantity: 1 };
    dispatch(addToCart(itemWithQuantity));
  };

  const handleRemoveFromCart = (itemId) => {
    dispatch(deleteItem(itemId));
    closeModalHandler();
  };

  const handleIncrease = (itemId) => {
    dispatch(increaseItemQuantity(itemId));
  };

  const handleDecrease = (itemId) => {
    dispatch(decreaseItemQuantity(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    closeModalHandler();
  };

  const isAddedInCart = (itemId) => {
    return cartSlice.some((cartItem) => cartItem.id === itemId);
  };

  const getNumberInCart = (itemId) => {
    const item = cartSlice.find((cartItem) => cartItem.id === itemId);
    return item ? item.quantity : 0;
  };

  return {
    cartSlice,
    handleAddToCart,
    handleRemoveFromCart,
    handleIncrease,
    handleDecrease,
    handleClearCart,
    isAddedInCart,
    getNumberInCart,
  };
};

export default useCart;
