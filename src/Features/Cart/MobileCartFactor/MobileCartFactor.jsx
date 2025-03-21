import { useSelector } from "react-redux";
import MobileCartListing from "../../../Components/MobileCartListing/MobileCartListing";
import useCartCalculations from "../../../Components/React Custom Hooks/useCartCalculations/useCartCalculations";
import { formatPrice } from "../../../helper_functions/formatPrice";
import { useNavigate } from "react-router-dom";
import LoginLogoutModal from "../../../Components/LoginLogoutModal/LoginLogoutModal";
import useModal from "../../../Components/React Custom Hooks/useModal/useModal";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function MobileCartFactor() {
  const [modalLoginId, setModalLoginId] = useState();

  const cart = useSelector((state) => state.cart?.cart);
  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated);

  const navigate = useNavigate();
  const {
    totalItems,
    totalDiscount,
    extraDiscount,
    totalPrice,
    deliveryCost,
    totalCost,
    totalTime,
  } = useCartCalculations();

  const { isOpen, modalType, openModalHandler, modalId } = useModal();

  const handleOpenLoginModal = () => {
    const newModalId = uuidv4();
    setModalLoginId(newModalId);
    openModalHandler("LoginLogout", null, newModalId);
  };

  return (
    <div className="mt-4 rounded-lg border border-gray-300 bg-white p-3">
      <div className="flex flex-col items-start">
        <div className="max-h-44 w-full overflow-y-scroll rounded-md bg-[#F9F9F9] p-2">
          {cart?.map((cartItem) => (
            <MobileCartListing key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
        <div className="w-full">
          <div className="mt-2 flex w-full flex-row items-center justify-between">
            <h5 className="text-sm text-[#353535]">تخفیف محصولات</h5>
            <span className="text-sm text-[#717171]">
              {formatPrice(totalDiscount)}{" "}
            </span>
          </div>
        </div>
        <div className="flex flex-col py-2">
          <div className="flex flex-row items-center justify-between">
            <h4 className="text-sm text-[#353535]">هزینه ارسال</h4>
            <span className="text-sm text-[#353535]">-</span>
          </div>
          <div className="mt-4 flex flex-row gap-2">
            <div>
              <img src="/icons/warning-2.svg" alt="" />
            </div>
            <div>
              <p className="text-xs text-[#A9791C]">
                هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما
                محاسبه و به این مبلغ اضافه خواهد شد.
              </p>
            </div>
          </div>
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
              onClick={() => navigate("/completion-of-information")}
              className="flex w-full flex-row items-center justify-center gap-1 rounded-md bg-green-primary-500 p-2 text-xs text-white"
            >
              تکمیل اطلاعات
              <img src="/icons/arrow-left.svg" className="h-3 w-3" alt="" />
            </button>
          ) : (
            <button
              onClick={() => handleOpenLoginModal()}
              className="flex w-full flex-row items-center justify-center gap-1 rounded-md bg-green-primary-500 p-2 text-xs text-white"
            >
              <img src="/icons/user.svg" className="h-4 w-4" alt="" />
              ورود/ثبت‌ نام
            </button>
          )}
        </div>
      </div>
      {isOpen && modalType === "LoginLogout" && modalId == modalLoginId && (
        <LoginLogoutModal modalLoginId={modalLoginId} />
      )}
    </div>
  );
}

export default MobileCartFactor;
