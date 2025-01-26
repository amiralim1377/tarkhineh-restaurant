import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPreparationTime } from "../../Slice/cartSlice/cartSlice";

function FoodPrepTime() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart?.cart);
  const kitchenCapacity = 4;

  const calculateTotalPrepTime = (orders, kitchenCapacity) => {
    let totalPrepTime = 0;

    orders.forEach((order) => {
      const { preparation_time, quantity } = order;
      const batches = Math.ceil(quantity / kitchenCapacity);
      totalPrepTime += batches * preparation_time;
    });

    return totalPrepTime;
  };

  const totalPrepTime = calculateTotalPrepTime(cart, kitchenCapacity);

  const ItemCount = cart.length;
  const AverageReadyTime =
    ItemCount > 0 ? Math.round(totalPrepTime / ItemCount) : 0;

  useEffect(() => {
    dispatch(setPreparationTime(AverageReadyTime));
  }, [AverageReadyTime, dispatch]);

  const AverageReadyTimeFromRedux = useSelector(
    (state) => state.cart?.preparationTime,
  );

  return (
    <div className="flex w-full flex-row items-center justify-between">
      <h5 className="text-sm text-[#353535]">مدت زمان آماده سازی</h5>
      <span className="text-sm text-[#717171]">
        {AverageReadyTimeFromRedux} دقیقه
      </span>
    </div>
  );
}

export default FoodPrepTime;
