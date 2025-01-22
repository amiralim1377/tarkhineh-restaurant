import { useSelector } from "react-redux";

import {
  selectTotalDiscount,
  selectTotalItems,
  selectTotalPrice,
} from "../../../Slice/cartSlice/cartSlice";

// Custom hook for cart calculations
const useCartCalculations = () => {
  const totalItems = useSelector(selectTotalItems);
  const totalDiscount = useSelector(selectTotalDiscount);
  const totalPrice = useSelector(selectTotalPrice);

  return {
    totalItems,
    totalDiscount,
    totalPrice,
  };
};

export default useCartCalculations;
