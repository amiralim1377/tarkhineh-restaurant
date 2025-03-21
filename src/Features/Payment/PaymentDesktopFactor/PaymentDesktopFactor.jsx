import { useNavigate } from "react-router-dom";
import MobileCartListing from "../../../Components/MobileCartListing/MobileCartListing";
import { useSelector } from "react-redux";
import useCartCalculations from "../../../Components/React Custom Hooks/useCartCalculations/useCartCalculations";
import { formatPrice } from "../../../helper_functions/formatPrice";
import useModal from "../../../Components/React Custom Hooks/useModal/useModal";
import DeleteAllItem from "../../../Components/DeleteAllItem/DeleteAllItem";
import PaymentButtons from "../../../Components/PaymentButtons/PaymentButtons";

function PaymentDesktopFactor() {
  const cart = useSelector((state) => state.cart?.cart);
  const DeliveryMethod = useSelector((state) => state.cart?.deliveryMethod);

  const {
    totalItems,
    totalDiscount,
    extraDiscount,

    deliveryCost,
    totalCost,
  } = useCartCalculations();

  const { isOpen, modalType, openModalHandler } = useModal();

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
        <PaymentButtons />
      </div>
      {isOpen && modalType === "deleteAll" && <DeleteAllItem />}
    </div>
  );
}

export default PaymentDesktopFactor;
