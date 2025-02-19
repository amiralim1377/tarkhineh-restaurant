import { useNavigate } from "react-router-dom";
import MobileCartListing from "../MobileCartListing/MobileCartListing";
import { useSelector } from "react-redux";
import useCartCalculations from "../React Custom Hooks/useCartCalculations/useCartCalculations";
import { formatPrice } from "../../helper_functions/formatPrice";
import CompletionInformationFactorDeliveryCost from "../CompletionInformationFactorDeliveryCost/CompletionInformationFactorDeliveryCost";
import FoodPrepTime from "../FoodPrepTime/FoodPrepTime";
import toast from "react-hot-toast";

function MobileCartItem() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart?.cart);
  const OrderDeliveryMethod = useSelector(
    (state) => state.cart?.deliveryMethod,
  );
  const address = useSelector((state) => state.user?.addresses || []);
  const isAddressEmpty = address.length === 0;
  const SelectedAddress = useSelector((state) => state.cart?.address);
  const isSelectedAddress = Boolean(SelectedAddress);
  const { totalCost, totalPrice, totalDiscount } = useCartCalculations();
  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated);

  const notifyErrorAddress = () =>
    toast.error(" برای ارسال سفارش بر روی یک ادرس کلیک کرده", {
      position: "top-left",
      style: {
        background: "#f44336",
        color: "white",
        minWidth: "100px",
        fontSize: "12px",
      },

      className: "custom-toast-error",
      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    });

  const notifyErrorNoAddress = () =>
    toast.error("شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!", {
      position: "top-left",
      style: {
        background: "#f44336",
        color: "white",
        minWidth: "100px",
        fontSize: "12px",
      },

      className: "custom-toast-error",
      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    });

  const handleGoToPayment = () => {
    if (isAddressEmpty) {
      notifyErrorNoAddress(); // Show error message if no address
      return; // Stop further execution
    }

    if (OrderDeliveryMethod === "delivery" && !isSelectedAddress) {
      notifyErrorAddress(); // Show error message if address is not selected
      return; // Stop further execution
    }

    navigate("/payment"); // Navigate to payment page if conditions are met
  };

  return (
    <div className="mt-4 rounded-lg border border-gray-300 bg-white p-3">
      <div className="flex flex-col items-start">
        <div className="max-h-44 w-full overflow-y-scroll rounded-md bg-[#F9F9F9] p-2">
          {cart?.map((cartItem) => (
            <MobileCartListing key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
        <div className="w-full py-2">
          <FoodPrepTime />
          <div className="mt-2 flex w-full flex-row items-center justify-between">
            <h5 className="text-sm text-[#353535]">تخفیف محصولات</h5>
            <span className="text-sm text-[#717171]">
              {formatPrice(totalDiscount)}
            </span>
          </div>
        </div>
        <div className="flex w-full flex-col">
          <CompletionInformationFactorDeliveryCost />
        </div>
        <div className="mt-2 flex w-full items-center justify-between">
          <h5 className="text-sm text-[#353535]"> مبلغ قابل پرداخت</h5>
          <div className="text-sm font-semibold text-green-primary-500">
            {formatPrice(totalCost)}
          </div>
        </div>
        <div className="mt-3 w-full">
          {isAuthenticated ? (
            <button
              onClick={handleGoToPayment}
              className="flex w-full flex-row items-center justify-center gap-1 rounded-md bg-green-primary-500 p-2 text-xs text-white"
            >
              <img src="/icons/tick-circle.svg" className="h-4 w-4" alt="" />
              ثبت سفارش
            </button>
          ) : (
            <button className="flex w-full flex-row items-center justify-center gap-1 rounded-md bg-green-primary-500 p-2 text-xs text-white">
              <img src="/public/icons/user.svg" className="h-4 w-4" alt="" />
              ورود/ثبت‌نام
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MobileCartItem;
