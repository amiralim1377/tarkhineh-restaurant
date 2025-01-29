import { useNavigate } from "react-router-dom";
import MobileCartListing from "../../../Components/MobileCartListing/MobileCartListing";
import { useSelector } from "react-redux";
import useCartCalculations from "../../../Components/React Custom Hooks/useCartCalculations/useCartCalculations";
import { formatPrice } from "../../../helper_functions/formatPrice";
import toast from "react-hot-toast";
import useModal from "../../../Components/React Custom Hooks/useModal/useModal";
import DeleteAllItem from "../../../Components/DeleteAllItem/DeleteAllItem";

function PaymentDesktopFactor() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart?.cart);
  const DeliveryMethod = useSelector((state) => state.cart?.deliveryMethod);
  const paymentMethod = useSelector((state) => state.cart?.paymentMethod);
  const selectedBank = useSelector((state) => state.cart?.paymentGateway);

  const {
    totalItems,
    totalDiscount,
    extraDiscount,
    totalPrice,
    deliveryCost,
    totalCost,
    totalTime,
  } = useCartCalculations();

  const notifyError = () =>
    toast.error("لطفاً بر روی یک درگاه پرداخت کلیک کنید !", {
      position: "top-left",
      style: {
        background: "#f44336",
        color: "white",
      },
    });

  const handleGoToPaymentGateway = () => {
    if (!selectedBank) {
      notifyError();
    } else {
      navigate("/successful-payment");
    }
  };

  const {
    selectedItem,
    isOpen,
    modalType,
    openModalHandler,
    closeModalHandler,
  } = useModal();

  return (
    <div className="rounded-lg border border-gray-300 bg-white p-3">
      <div className="flex flex-col items-start space-y-4 divide-y">
        <div className="flex w-full flex-row items-center justify-between py-2">
          <div>
            <h4>سبد خرید({totalItems})</h4>
          </div>
          <button onClick={() => openModalHandler("deleteAll")}>
            <img src="/icons/trash.svg" className="w-6 cursor-pointer" alt="" />
          </button>
        </div>
        <div className="max-h-44 w-full overflow-y-scroll rounded-md bg-[#F9F9F9] p-2">
          {cart?.map((cartItem) => (
            <MobileCartListing key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
        <div className="flex w-full items-center justify-between py-2">
          <h5 className="text-sm text-[#353535]">تخفیف محصولات</h5>
          <span className="text-sm text-[#717171]">
            {formatPrice(totalDiscount)}
          </span>
        </div>
        {extraDiscount != 0 && (
          <div className="flex w-full items-center justify-between py-2">
            <h5 className="text-sm text-[#353535]">تخفیف کد ارائه شده</h5>
            <span className="text-sm text-[#717171]">
              {formatPrice(extraDiscount)}
            </span>
          </div>
        )}
        {DeliveryMethod === "delivery" && (
          <div className="flex w-full items-center justify-between py-2">
            <h5 className="text-sm text-[#353535]">هزینه ارسال</h5>
            <span className="text-sm text-[#717171]">
              {formatPrice(deliveryCost)}
            </span>
          </div>
        )}

        <div className="flex w-full items-center justify-between py-2">
          <h5 className="text-sm text-[#353535]"> مبلغ قابل پرداخت</h5>
          <div className="text-sm font-semibold text-green-primary-500">
            {formatPrice(totalCost)}
          </div>
        </div>

        <div className="mt-3 w-full">
          {paymentMethod === "online" ? (
            <button
              onClick={handleGoToPaymentGateway}
              className="flex w-full flex-row items-center justify-center gap-1 rounded-md bg-green-primary-500 p-2 text-xs text-white"
            >
              <img src="/icons/tick-circle.svg" alt="" />
              تایید و پرداخت
            </button>
          ) : (
            <button
              onClick={() => navigate("/successful-payment")}
              className="flex w-full flex-row items-center justify-center gap-1 rounded-md bg-green-primary-500 p-2 text-xs text-white"
            >
              <img src="/icons/tick-circle.svg" alt="" />
              ثبت نهایی سفارش
            </button>
          )}
        </div>
      </div>
      {isOpen && modalType === "deleteAll" && <DeleteAllItem />}
    </div>
  );
}

export default PaymentDesktopFactor;
