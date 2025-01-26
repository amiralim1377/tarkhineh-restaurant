import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import MobileCartListing from "../../../Components/MobileCartListing/MobileCartListing";
import useCart from "../../../Components/React Custom Hooks/useCart/useCart";
import { formatPrice } from "../../../helper_functions/formatPrice";
import CompletionInformationFactorDeliveryCost from "../../../Components/CompletionInformationFactorDeliveryCost/CompletionInformationFactorDeliveryCost";
import FoodPrepTime from "../../../Components/FoodPrepTime/FoodPrepTime";
import useCartCalculations from "../../../Components/React Custom Hooks/useCartCalculations/useCartCalculations";

function CompletionInformationDesktopFactor() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart?.cart);
  const OrderDeliveryMethod = useSelector(
    (state) => state.cart?.deliveryMethod,
  );

  const { handleClearCart } = useCart();
  const { totalItems, totalDiscount, totalCost } = useCartCalculations();

  return (
    <div className="w-full min-w-[512px] rounded-lg border border-gray-300 bg-white p-3">
      <div className="flex w-full flex-col items-start justify-between space-y-4 divide-y">
        <div className="flex w-full flex-row items-center justify-between py-2">
          <div>
            <h4>سبد خرید({totalItems})</h4>
          </div>
          <button onClick={() => handleClearCart()}>
            <img src="/icons/trash.svg" className="w-6" alt="" />
          </button>
        </div>
        <div className="max-h-44 w-full overflow-y-scroll rounded-md bg-[#F9F9F9] p-2">
          {cart.map((cartItem) => (
            <MobileCartListing key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
        <div className="mt-2 flex w-full flex-col justify-between space-y-2 py-2">
          <FoodPrepTime />
          <div className="flex w-full flex-row items-center justify-between">
            <h5 className="text-sm text-[#353535]">تخفیف محصولات</h5>
            <span className="text-sm text-[#717171]">
              {formatPrice(totalDiscount)}
            </span>
          </div>
        </div>
        {OrderDeliveryMethod === "delivery" && (
          <CompletionInformationFactorDeliveryCost />
        )}
        <div className="flex w-full items-center justify-between py-2">
          <h5 className="text-sm text-[#353535]"> مبلغ قابل پرداخت</h5>
          <div className="text-sm font-semibold text-green-primary-500">
            {formatPrice(totalCost)}
          </div>
        </div>

        <div className="mt-3 w-full">
          <button
            onClick={() => navigate("/payment")}
            className="flex w-full flex-row items-center justify-center rounded-md bg-green-primary-500 p-2 text-xs text-white"
          >
            <img src="/icons/tick-circle.svg" alt="" />
            ثبت سفارش
          </button>
        </div>
      </div>
    </div>
  );
}

export default CompletionInformationDesktopFactor;
