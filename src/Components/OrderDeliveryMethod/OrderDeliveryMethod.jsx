import { useDispatch, useSelector } from "react-redux";
import { setDeliveryMethod } from "../../Slice/cartSlice/cartSlice";

function OrderDeliveryMethod() {
  const dispatch = useDispatch();
  const deliveryMethod = useSelector((state) => state.cart?.deliveryMethod);
  console.log(deliveryMethod);

  const handleDeliveryMethod = () => {
    dispatch(setDeliveryMethod("delivery"));
  };

  const handleInpersonMethod = () => {
    dispatch(setDeliveryMethod("in-person"));
  };

  return (
    <div className="w-full rounded-md border border-gray-300 bg-white p-4">
      <div className="divide-y md:flex md:w-full md:flex-row md:divide-none">
        <div className="flex w-full items-center py-2 md:max-w-44">
          <div>
            <img src="/icons/truck.svg" className="md:w-6" alt="" />
          </div>
          <h4 className="text-sm text-[#353535] md:text-base md:font-bold">
            روش تحویل سفارش
          </h4>
        </div>
        <div className="flex w-full flex-col gap-3 py-2 md:max-w-96 md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              id="delivery"
              name="deliveryMethod"
              className="border-gray-300 bg-gray-100 text-lime-600 accent-lime-600 focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
              onClick={() => handleDeliveryMethod()}
            />
            <label htmlFor="" className="flex items-center">
              <h4
                className={`text-[#717171] ${deliveryMethod == "delivery" ? "text-base font-semibold text-gray-600" : ""}`}
              >
                ارسال توسط پیک
              </h4>
              <img
                src="/icons/truck-fast.svg"
                className={` ${deliveryMethod == "delivery" ? "w-6" : "w-5"}`}
                alt=""
              />
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="inperson"
              name="deliveryMethod"
              className="w-4 border-gray-300 bg-gray-100 text-lime-600 accent-lime-600 focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
              onClick={() => handleInpersonMethod()}
            />
            <label htmlFor="" className="flex items-center">
              <h4
                className={` text-[#717171]${deliveryMethod == "in-person" ? "text-xl font-semibold text-gray-600" : ""}`}
              >
                تحویل حضوری
              </h4>
              <img
                src="/icons/shopping-bag.svg"
                className={` text-[#717171]${deliveryMethod == "in-person" ? "h-5 w-5" : ""}`}
                alt=""
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDeliveryMethod;
