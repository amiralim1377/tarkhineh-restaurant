import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { formatPrice } from "../../../helper_functions/formatPrice";
import MobileCartListing from "../../../Components/MobileCartListing/MobileCartListing";
import CompletionInformationFactorDeliveryCost from "../../../Components/CompletionInformationFactorDeliveryCost/CompletionInformationFactorDeliveryCost";
import FoodPrepTime from "../../../Components/FoodPrepTime/FoodPrepTime";
import useCartCalculations from "../../../Components/React Custom Hooks/useCartCalculations/useCartCalculations";
import useModal from "../../../Components/React Custom Hooks/useModal/useModal";
import DeleteAllItem from "../../../Components/DeleteAllItem/DeleteAllItem";
import toast from "react-hot-toast";

function CompletionInformationDesktopFactor() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart?.cart);
  const OrderDeliveryMethod = useSelector(
    (state) => state.cart?.deliveryMethod,
  );
  const address = useSelector((state) => state.user?.addresses || []);
  const isAddressEmpty = address.length === 0;
  const SelectedAddress = useSelector((state) => state.cart?.address);
  const isSelectedAddress = Boolean(SelectedAddress);
  const { isOpen, modalType, openModalHandler } = useModal();
  const { totalItems, totalDiscount, totalCost } = useCartCalculations();

  const notifyErrorAddress = () =>
    toast.error(" برای ارسال سفارش بر روی یک ادرس کلیک کنید", {
      position: "top-left",
      style: {
        background: "#f44336",
        color: "white",
        minWidth: "400px",
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
        minWidth: "400px",
      },

      className: "custom-toast-error",
      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    });

  const handleGoToPayment = () => {
    if (isAddressEmpty && OrderDeliveryMethod === "delivery") {
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
    <div className="w-full max-w-lg rounded-lg border border-gray-300 bg-white p-4">
      <div className="flex w-full flex-col items-start justify-between space-y-7 divide-y">
        <div className="flex w-full flex-row items-center justify-between">
          <div>
            <h4>سبد خرید({totalItems})</h4>
          </div>
          <button onClick={() => openModalHandler("deleteAll")}>
            <img src="/icons/trash.svg" className="w-6" alt="" />
          </button>
        </div>
        <div className="max-h-44 w-full overflow-y-scroll rounded-md bg-[#F9F9F9] p-2">
          {cart.map((cartItem) => (
            <MobileCartListing key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
        <div className="flex w-full flex-col justify-between space-y-2 py-2">
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

        <div className="w-full py-2">
          <button
            onClick={handleGoToPayment}
            className="flex w-full flex-row items-center justify-center rounded-md bg-green-primary-500 p-2 text-xs text-white"
          >
            <img src="/icons/tick-circle.svg" alt="" />
            ثبت سفارش
          </button>
        </div>
      </div>
      {isOpen && modalType == "deleteAll" && <DeleteAllItem />}
    </div>
  );
}

export default CompletionInformationDesktopFactor;
