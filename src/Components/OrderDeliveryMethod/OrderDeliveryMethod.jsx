import { useDispatch, useSelector } from "react-redux";
import {
  resetAddress,
  resetDeliveryTime,
  setDeliveryCost,
  setDeliveryMethod,
  setDistance,
} from "../../Slice/cartSlice/cartSlice";

function OrderDeliveryMethod() {
  const dispatch = useDispatch();
  const deliveryMethod = useSelector((state) => state.cart?.deliveryMethod);

  const handleDeliveryMethodChange = (event) => {
    dispatch(setDeliveryMethod(event.target.value));

    if (event.target.value == "in-person") {
      dispatch(resetAddress());
      dispatch(setDeliveryCost(null));
      dispatch(setDistance(null));
      dispatch(resetDeliveryTime());
    }
  };

  return (
    <div className="w-full rounded-md border border-gray-300 bg-white p-4">
      <div className="divide-y md:flex md:w-full md:flex-row md:divide-none">
        <div className="flex w-full items-center gap-1 py-2 md:max-w-44">
          <img src="/icons/truck.svg" className="md:w-6" alt="" />
          <h4 className="text-sm font-semibold text-[#353535] md:text-base md:font-bold">
            روش تحویل سفارش
          </h4>
        </div>
        <form className="flex w-full flex-col gap-3 py-2 md:max-w-96 md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              id="delivery"
              value="delivery"
              name="deliveryMethod"
              className="h-4 w-4 cursor-pointer text-lime-600 accent-lime-600"
              onChange={handleDeliveryMethodChange}
              checked={deliveryMethod === "delivery"}
            />
            <label
              htmlFor="delivery"
              className="flex cursor-pointer items-center"
            >
              <h4
                className={`text-[#717171] ${deliveryMethod === "delivery" ? "text-base font-semibold text-gray-600" : ""}`}
              >
                ارسال توسط پیک
              </h4>
              <img
                src="/icons/truck-fast.svg"
                className={` ${deliveryMethod === "delivery" ? "w-6" : "w-5"}`}
                alt=""
              />
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="inperson"
              value="in-person"
              name="deliveryMethod"
              className="h-4 w-4 cursor-pointer text-lime-600 accent-lime-600"
              onChange={handleDeliveryMethodChange}
              checked={deliveryMethod === "in-person"}
            />
            <label
              htmlFor="inperson"
              className="flex cursor-pointer items-center"
            >
              <h4
                className={`text-[#717171] ${deliveryMethod === "in-person" ? "text-base font-semibold text-gray-600" : ""}`}
              >
                تحویل حضوری
              </h4>
              <img
                src="/icons/shopping-bag.svg"
                className={` ${deliveryMethod === "in-person" ? "w-6" : "w-5"}`}
                alt=""
              />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OrderDeliveryMethod;
