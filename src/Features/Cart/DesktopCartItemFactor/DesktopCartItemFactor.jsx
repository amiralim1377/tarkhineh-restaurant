import { useNavigate } from "react-router-dom";
import useCart from "../../../Components/React Custom Hooks/useCart/useCart";
import useCartCalculations from "../../../Components/React Custom Hooks/useCartCalculations/useCartCalculations";
import { formatPrice } from "../../../helper_functions/formatPrice";
import DeleteAllItem from "../../../Components/DeleteAllItem/DeleteAllItem";
import useModal from "../../../Components/React Custom Hooks/useModal/useModal";
import { useSelector } from "react-redux";
import LoginLogoutModal from "../../../Components/LoginLogoutModal/LoginLogoutModal";

function DesktopCartItemFactor() {
  const navigate = useNavigate();
  const { totalItems, totalDiscount, totalPrice } = useCartCalculations();
  const { isOpen, modalType, openModalHandler } = useModal();
  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated);

  return (
    <div className="w-full max-w-lg rounded-lg border border-gray-300 px-4 py-4">
      <div className="flex w-full flex-col space-y-7 divide-y divide-gray-300">
        <div className="flex flex-row items-center justify-between">
          <div className="flex items-center">
            <h4 className="text-base text-[#353535]">سبد خرید</h4>
            <span className="text-[#353535]">({totalItems})</span>
          </div>
          <div onClick={() => openModalHandler("deleteAll")}>
            <img
              src="/icons/trash.svg"
              className="h-5 w-5 cursor-pointer"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-between py-2">
          <div>
            <h4 className="text-sm text-[#353535]">تخفیف محصولات</h4>
          </div>
          <div className="text-[#717171]">
            <span>{formatPrice(totalDiscount)}</span>
          </div>
        </div>
        <div className="flex flex-col py-2">
          <div className="flex flex-row items-center justify-between">
            <h4 className="text-sm text-[#353535]">هزینه ارسال</h4>
            <h6 className="text-sm text-[#353535]">-</h6>
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
        <div className="flex flex-row items-center justify-between py-2">
          <h5 className="text-sm text-[#353535]">مبلغ قابل پرداخت</h5>
          <span className="text-base text-green-primary-500">
            {formatPrice(totalPrice)}
          </span>
        </div>
        <div className="mt-3 w-full py-2">
          {isAuthenticated ? (
            <button
              onClick={() => navigate("/completion-of-information")}
              className="flex w-full flex-row items-center justify-center rounded-md bg-green-primary-500 p-2 text-xs text-white"
            >
              تکمیل اطلاعات <img src="/icons/arrow-left.svg" alt="" />
            </button>
          ) : (
            <button
              onClick={() => openModalHandler("LoginLogout")}
              className="flex min-h-10 w-full flex-row items-center justify-center gap-1 rounded-md bg-green-primary-500 p-2 text-xs text-white"
            >
              <img src="/public/icons/user.svg" className="h-4 w-4" alt="" />
              ورود/ثبت‌ نام
            </button>
          )}
        </div>
      </div>
      {isOpen && modalType === "deleteAll" && <DeleteAllItem />}
      {isOpen && modalType === "LoginLogout" && <LoginLogoutModal />}
    </div>
  );
}

export default DesktopCartItemFactor;
