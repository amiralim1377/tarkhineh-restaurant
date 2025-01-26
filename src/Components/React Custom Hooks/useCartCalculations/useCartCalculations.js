import { useSelector } from "react-redux";

import {
  selectTotalDiscount,
  selectExtraDiscount,
  selectTotalItems,
  selectTotalPrice,
  selectDeliveryCost,
  selectTotalCost,
  selectTotalTime,
} from "../../../Slice/cartSlice/cartSlice";

const useCartCalculations = () => {
  const totalItems = useSelector(selectTotalItems);
  const totalDiscount = useSelector(selectTotalDiscount);
  const extraDiscount = useSelector(selectExtraDiscount);
  const totalPrice = useSelector(selectTotalPrice);
  const deliveryCost = useSelector(selectDeliveryCost);
  const totalCost = useSelector(selectTotalCost);
  const totalTime = useSelector(selectTotalTime); // Get total time from Redux

  return {
    totalItems,
    totalDiscount,
    extraDiscount,
    totalPrice,
    deliveryCost,
    totalCost,
    totalTime,
  };
};

export default useCartCalculations;
