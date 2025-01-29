import { useDispatch, useSelector } from "react-redux";
import { setPaymentMethod } from "../../../Slice/cartSlice/cartSlice"; // فرض بر این که اکشنی به نام setPaymentMethod دارید

function PaymentMethod() {
  const dispatch = useDispatch();
  const paymentMethod = useSelector((state) => state.cart?.paymentMethod);

  const handlePaymentMethodChange = (event) => {
    dispatch(setPaymentMethod(event.target.value));
  };

  return (
    <div className="w-full rounded-md border border-gray-300 bg-white p-4">
      <div className="divide-y md:flex md:w-full md:flex-row md:divide-none">
        <div className="flex w-full items-center py-2 md:max-w-44">
          <div>
            <img src="/icons/wallet-money.svg" className="md:w-6" alt="" />
          </div>
          <h4 className="text-sm text-[#353535] md:text-base md:font-bold">
            روش پرداخت
          </h4>
        </div>
        <form className="flex w-full flex-row gap-3 py-2 md:max-w-96 md:flex-row md:justify-between">
          <div className="flex items-center gap-1">
            <input
              type="radio"
              id="online"
              value="online"
              name="paymentMethod"
              className="h-4 w-4 text-lime-600 accent-lime-600"
              onChange={handlePaymentMethodChange}
              checked={paymentMethod === "online"}
            />
            <label htmlFor="online" className="flex items-center">
              <h5
                className={`text-xs md:text-sm ${paymentMethod === "online" ? "font-semibold text-gray-600" : "text-[#717171]"}`}
              >
                پرداخت اینترنتی
              </h5>
              <img src="/icons/card-pos.svg" className="h-4 w-4" alt="" />
            </label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              id="on-site"
              value="on-site"
              name="paymentMethod"
              className="h-4 w-4 text-lime-600 accent-lime-600"
              onChange={handlePaymentMethodChange}
              checked={paymentMethod === "on-site"}
            />
            <label htmlFor="on-site" className="flex items-center">
              <h5
                className={`text-xs md:text-sm ${paymentMethod === "on-site" ? "font-semibold text-gray-600" : "text-[#717171]"}`}
              >
                پرداخت در محل
              </h5>
              <img src="/icons/wallet-3.svg" className="h-4 w-4" alt="" />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PaymentMethod;
